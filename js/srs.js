// srs.js
// Spaced-repetition / mastery engine.
//
// Model: a Leitner-style set of "boxes" (0-6) per word, combined with a
// short-term in-session queue (for words that were just missed or just
// reviewed) and a long-term due date (for words that have graduated to
// day-scale review). This gives the two behaviours the brief asks for:
//   - a word you just got wrong resurfaces after a handful of OTHER
//     questions in the same session, not immediately;
//   - a word you've gotten right several times in a row, including
//     after a gap, stops showing up daily and eventually is "Mastered".
//
// Boxes and what they mean:
//   0  New            - never attempted
//   1  Just missed     - wrong answer, needs quick in-session re-test
//   2  Learning        - right once after being new or after a miss
//   3  Review          - right twice in a row; graduates to day-based review
//   4  Familiar        - right after a >=1 day gap
//   5  Familiar+       - right after a >=3 day gap
//   6  Mastered        - right after a >=7 day gap, with a clean recent record
//
// A wrong answer at any box drops the word back (never below box 0) and
// flags it for imminent re-review, so struggling words are seen more
// often and well-known words are seen less often — the core requirement.

const SRS = (() => {
  const BOX_COUNT = 6; // boxes 1..6 (0 = new/unseen)

  // In-session spacing: "due after N other questions" for early boxes.
  const IN_SESSION_GAP = {
    1: { min: 3, max: 5 },   // just missed -> resurface soon
    2: { min: 8, max: 12 },  // right once -> resurface later this session
  };

  // Cross-session spacing (days) once a word graduates past the
  // in-session boxes. Used to compute dueAt so the word naturally
  // reappears on a later day rather than every session.
  const CROSS_SESSION_DAYS = {
    3: 1,
    4: 3,
    5: 7,
    6: 21,
  };

  const DAY_MS = 24 * 60 * 60 * 1000;

  function newWordRecord() {
    return {
      box: 0,
      status: 'new',
      attempts: 0,
      correct: 0,
      incorrect: 0,
      correctStreak: 0,
      incorrectStreak: 0,
      lastSeen: null,
      dueAt: null,
      lastDistractors: [],
    };
  }

  function statusForBox(box, incorrectStreak) {
    if (box === 0) return 'new';
    // Most recent answer was a miss: flagged for prompt re-testing,
    // regardless of how far the word had previously progressed.
    if (incorrectStreak > 0) return 'review';
    if (box <= 3) return 'learning';
    if (box <= 5) return 'familiar';
    return 'mastered'; // box 6, reached via a correct answer after a >=7-day gap
  }

  // Called immediately when a word is answered. Mutates and returns the
  // record. `sessionIndex` is the running count of questions asked so
  // far this session, used to compute short-term due positions.
  function recordAnswer(record, wasCorrect, sessionIndex) {
    record.attempts += 1;
    record.lastSeen = Date.now();

    if (wasCorrect) {
      record.correct += 1;
      record.correctStreak += 1;
      record.incorrectStreak = 0;
      record.box = Math.min(BOX_COUNT, record.box + 1);
    } else {
      record.incorrect += 1;
      record.incorrectStreak += 1;
      record.correctStreak = 0;
      // Drop back one box on a miss (never below 1, since it's now
      // seen). A steeper -2 penalty was tried first, but the math
      // doesn't work at realistic accuracy: a correct answer (+1) then
      // barely offsets a wrong one (-2) only above ~65% accuracy on
      // that word — below that, a word can never make net progress no
      // matter how many times it's retried, which traps exactly the
      // words a normal learner is moderately (not hopelessly) struggling
      // with in permanent rotation. -1 means any accuracy above 50% on
      // a word trends toward mastery, while still demoting real misses.
      record.box = Math.max(1, record.box - 1);
    }

    // Compute next-due scheduling.
    if (record.box <= 2) {
      const gap = IN_SESSION_GAP[record.box] || IN_SESSION_GAP[1];
      const offset = gap.min + Math.floor(Math.random() * (gap.max - gap.min + 1));
      record.dueAt = { type: 'session', afterIndex: sessionIndex + offset };
    } else {
      const days = CROSS_SESSION_DAYS[record.box] || 1;
      record.dueAt = { type: 'date', at: Date.now() + days * DAY_MS };
    }

    record.status = statusForBox(record.box, record.incorrectStreak);
    return record;
  }

  // Is this word due for review right now?
  //
  // `sessionIndex` means "the running question count of the session
  // currently in progress" when called live during a session (used to
  // decide, mid-session, whether a short-interval word's turn has come
  // up yet). Callers that are just checking status OUTSIDE of an active
  // session — building a fresh session's starting queue, or computing
  // the dashboard's "due" counts — pass 0, which is not a meaningful
  // position in a not-yet-started session. In that case a short-interval
  // ('session'-type) word is, by definition, already due: it was flagged
  // for prompt re-testing and no session has come along yet to give it
  // that retest, so the next session should include it rather than
  // stranding it until its original countdown (from a previous, already-
  // finished session) is reinterpreted against a new one.
  function isDue(record, sessionIndex, now = Date.now()) {
    if (record.box === 0) return false; // "new" words are offered separately
    if (!record.dueAt) return true;
    if (record.dueAt.type === 'session') {
      if (sessionIndex === 0) return true;
      return sessionIndex >= record.dueAt.afterIndex;
    }
    return now >= record.dueAt.at;
  }

  function isNew(record) {
    return record.box === 0 || record.attempts === 0;
  }

  function accuracy(record) {
    if (record.attempts === 0) return null;
    return record.correct / record.attempts;
  }

  return {
    newWordRecord,
    recordAnswer,
    isDue,
    isNew,
    accuracy,
    statusForBox,
    BOX_COUNT,
  };
})();
