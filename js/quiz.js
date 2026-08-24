// quiz.js
// Builds study sessions and individual multiple-choice questions from
// VOCAB_DATA + the persisted per-word progress records, using srs.js
// for scheduling. Includes safeguards against malformed questions.

const Quiz = (() => {
  const wordsById = new Map(VOCAB_DATA.map((w) => [w.id, w]));

  // Minimum share of a balanced session reserved for brand-new words,
  // even when there's a large review backlog — otherwise a review
  // backlog can crowd new content out of every session indefinitely.
  const NEW_WORD_RESERVE_RATIO = 0.35;

  function allIds() {
    return VOCAB_DATA.map((w) => w.id);
  }

  function ensureRecord(state, id) {
    if (!state.words[id]) {
      state.words[id] = SRS.newWordRecord();
    }
    return state.words[id];
  }

  // Build the ordered list of word ids for a study session:
  // due-for-review words first (weakest/oldest-due first), then new
  // words to fill out the session, capped at `size`. Mode can bias the
  // mix: 'quiz' (balanced), 'review' (due only), 'new' (new only).
  //
  // `recentIds` is an optional list of word ids asked very recently
  // (e.g. in the session that just ended). They're still eligible —
  // spaced repetition can legitimately want a struggling word back
  // soon — but are pushed toward the back of the initial queue rather
  // than the front, so starting a new session right after finishing
  // one doesn't just replay the tail of the last session as the start
  // of the next.
  function isLevelEnabled(state, level) {
    const filter = state.settings && state.settings.levelFilter;
    if (!filter) return true; // no filter configured yet -> everything eligible
    return filter[level] !== false;
  }

  function buildSessionQueue(state, size, mode = 'quiz', recentIds = []) {
    const now = Date.now();
    const dueWords = [];
    const newWords = [];
    const masteredForReinforcement = [];

    for (const word of VOCAB_DATA) {
      if (!isLevelEnabled(state, word.level)) continue;
      const rec = ensureRecord(state, word.id);
      if (SRS.isNew(rec)) {
        newWords.push(word.id);
        continue;
      }
      if (SRS.isDue(rec, 0, now)) {
        if (rec.status === 'mastered') {
          masteredForReinforcement.push(word.id);
        } else {
          dueWords.push(word.id);
        }
      }
    }

    // Prioritise words most overdue / weakest first.
    dueWords.sort((a, b) => {
      const ra = state.words[a];
      const rb = state.words[b];
      if (ra.incorrectStreak !== rb.incorrectStreak) {
        return rb.incorrectStreak - ra.incorrectStreak;
      }
      return (ra.lastSeen || 0) - (rb.lastSeen || 0);
    });

    shuffle(newWords);
    shuffle(masteredForReinforcement);

    const recentSet = new Set(recentIds);
    const splitByRecency = (arr) => {
      const notRecent = [];
      const recent = [];
      for (const id of arr) (recentSet.has(id) ? recent : notRecent).push(id);
      return { notRecent, recent };
    };
    const dueSplit = splitByRecency(dueWords);
    const masteredSplit = splitByRecency(masteredForReinforcement);

    let queue = [];
    if (mode === 'review') {
      // Review is specifically for working through due words, so keep
      // all of them in the front-running pool — just with the ones not
      // recently seen ranked first (still the existing overdue/weakest
      // ordering decides WHICH due words make the cut when there are
      // more of them than fit in one session).
      queue = dueSplit.notRecent.concat(dueSplit.recent).slice(0, size);
      if (queue.length === 0) {
        queue = masteredSplit.notRecent.concat(masteredSplit.recent).slice(0, size);
      }
    } else if (mode === 'new') {
      queue = newWords.slice(0, size);
    } else {
      // Balanced default. A pure "due words fill every slot first" rule
      // means that once someone has a review backlog, EVERY session is
      // 100% review and no new word ever gets introduced until that
      // backlog clears — the opposite of what a vocabulary app should
      // do. So a minimum share of each session is reserved for new
      // words whenever any are available, before due words claim the
      // rest:
      //   1. a reserved slice of new words (always, if available)
      //   2. due words not recently asked (most overdue/weakest first)
      //   3. remaining new words, if the reserve didn't use them all
      //   4. due words that WERE just asked (still due, just not
      //      leading the very next session)
      //   5. mastered-word reinforcement, same recency treatment
      const reservedNew = Math.min(newWords.length, Math.ceil(size * NEW_WORD_RESERVE_RATIO));
      let usedNew = 0;

      queue = newWords.slice(0, reservedNew);
      usedNew = queue.length;

      if (queue.length < size) {
        queue = queue.concat(dueSplit.notRecent.slice(0, size - queue.length));
      }
      if (queue.length < size) {
        queue = queue.concat(newWords.slice(usedNew, usedNew + (size - queue.length)));
      }
      if (queue.length < size) {
        queue = queue.concat(dueSplit.recent.slice(0, size - queue.length));
      }
      if (queue.length < size) {
        queue = queue.concat(masteredSplit.notRecent.slice(0, size - queue.length));
      }
      if (queue.length < size) {
        queue = queue.concat(masteredSplit.recent.slice(0, size - queue.length));
      }
    }

    // Which words make the cut is decided above (weakest/overdue first,
    // a guaranteed slice of new content); the ORDER they're presented
    // in is shuffled so a session doesn't always open with the same
    // predictable "reviews first, then new words" block.
    shuffle(queue);

    return queue;
  }

  function dueCounts(state) {
    const now = Date.now();
    let due = 0;
    let fresh = 0;
    for (const word of VOCAB_DATA) {
      if (!isLevelEnabled(state, word.level)) continue;
      const rec = state.words[word.id];
      if (!rec || SRS.isNew(rec)) {
        fresh += 1;
      } else if (SRS.isDue(rec, 0, now) && rec.status !== 'mastered') {
        due += 1;
      }
    }
    return { due, fresh };
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Generate a safe 4-option multiple-choice question for wordId.
  // `direction` controls which way the question runs:
  //   'word'       — the word is shown, options are definitions (default)
  //   'definition' — the definition is shown, options are words
  // Guarantees: exactly one correct option, no duplicate option text,
  // no empty definitions/words, target word's own answer never appears
  // twice, shuffled option order, and (best-effort) avoids repeating
  // the exact same distractor combination as last time this word was
  // asked.
  const LEVEL_RANK = { general: 0, medium: 1, hard: 2, expert: 3 };

  function generateQuestion(state, wordId, direction = 'word') {
    const target = wordsById.get(wordId);
    if (!target || !target.definition) {
      return null; // safeguard: caller should skip/regenerate
    }
    const rec = ensureRecord(state, wordId);

    const candidateIds = allIds().filter(
      (id) => id !== wordId && wordsById.get(id).definition
    );

    // Distractor plausibility combines two signals, regardless of which
    // way the question is being asked:
    //   - definition length: a wrong answer that's a similar length to
    //     the correct one doesn't give itself away by looking obviously
    //     shorter/longer or more/less detailed.
    //   - difficulty tier: a distractor from the same (or an adjacent)
    //     difficulty level as the target reads as genuinely confusable
    //     rather than a random easy word sitting next to a hard one,
    //     which is an easy giveaway by feel alone.
    // Lower combined score = more plausible distractor.
    const targetLen = target.definition.length;
    const targetRank = LEVEL_RANK[target.level] ?? 0;
    const byPlausibility = candidateIds
      .map((id) => {
        const w = wordsById.get(id);
        const lenDiff = Math.abs(w.definition.length - targetLen);
        const rankDiff = Math.abs((LEVEL_RANK[w.level] ?? 0) - targetRank);
        // A full difficulty-tier gap costs as much as ~35 characters of
        // length mismatch — enough to noticeably favor same-tier words
        // without letting it completely override length plausibility.
        return { id, score: lenDiff + rankDiff * 35 };
      })
      .sort((a, b) => a.score - b.score);

    const pool = byPlausibility.slice(0, 60).map((x) => x.id); // top ~60 most plausible

    let distractors = null;
    for (let attempt = 0; attempt < 6; attempt++) {
      const shuffledPool = shuffle(pool.slice());
      const picked = [];
      const seenDefs = new Set([target.definition]);
      for (const id of shuffledPool) {
        const def = wordsById.get(id).definition;
        if (seenDefs.has(def)) continue;
        picked.push(id);
        seenDefs.add(def);
        if (picked.length === 3) break;
      }
      if (picked.length < 3) {
        // Pool too small/duplicates; fall back to full candidate set.
        for (const id of shuffle(candidateIds.slice())) {
          const def = wordsById.get(id).definition;
          if (seenDefs.has(def)) continue;
          picked.push(id);
          seenDefs.add(def);
          if (picked.length === 3) break;
        }
      }
      if (picked.length < 3) break; // dataset too small (shouldn't happen at 1000+ words)

      const isSameAsLast =
        rec.lastDistractors &&
        rec.lastDistractors.length === 3 &&
        rec.lastDistractors.every((id) => picked.includes(id));

      if (!isSameAsLast) {
        distractors = picked;
        break;
      }
      distractors = picked; // keep as fallback if all attempts collide
    }

    if (!distractors || distractors.length < 3) {
      return null; // safeguard: not enough valid distractors, caller regenerates/skips
    }

    rec.lastDistractors = distractors.slice();

    const options = [
      { id: target.id, word: target.word, definition: target.definition, correct: true },
      ...distractors.map((id) => {
        const w = wordsById.get(id);
        return { id: w.id, word: w.word, definition: w.definition, correct: false };
      }),
    ];

    // Final safeguard: exactly one correct, no empty text, no duplicate
    // answer text on whichever side is being used as the option label.
    const correctCount = options.filter((o) => o.correct).length;
    const hasEmpty = options.some((o) => !o.definition || !o.word);
    const optionKey = direction === 'definition' ? 'word' : 'definition';
    const labels = options.map((o) => o[optionKey]);
    const hasDupeLabels = new Set(labels).size !== labels.length;
    if (correctCount !== 1 || hasEmpty || hasDupeLabels) {
      return null; // caller should regenerate with a different word/attempt
    }

    shuffle(options);

    return {
      wordId: target.id,
      word: target.word,
      correctDefinition: target.definition,
      direction,
      prompt: direction === 'definition' ? target.definition : target.word,
      options,
    };
  }

  // Safe wrapper: tries a few times in case generateQuestion hits an
  // edge case, per the "never show a broken question" requirement.
  function generateQuestionSafe(state, wordId, direction = 'word', maxAttempts = 3) {
    for (let i = 0; i < maxAttempts; i++) {
      const q = generateQuestion(state, wordId, direction);
      if (q) return q;
    }
    return null;
  }

  return {
    wordsById,
    allIds,
    ensureRecord,
    buildSessionQueue,
    dueCounts,
    generateQuestion: generateQuestionSafe,
    shuffle,
  };
})();
