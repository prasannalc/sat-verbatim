// ui.js
// Pure(ish) DOM-rendering helpers. No app state lives here — app.js owns
// state and calls into these functions to reflect it.

const UI = (() => {
  const LETTERS = ['A', 'B', 'C', 'D'];

  const STATUS_LABEL = {
    new: 'New',
    learning: 'Learning',
    review: 'Needs review',
    familiar: 'Familiar',
    mastered: 'Mastered',
  };

  const PROMPT_COPY = {
    word: 'What does this word most nearly mean?',
    definition: 'Which word means this?',
  };

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function statusOf(state, wordId) {
    const rec = state.words[wordId];
    if (!rec || rec.attempts === 0) return 'new';
    return rec.status;
  }

  // ---------- Study (browse) list ----------

  function renderStudyList(container, words, state) {
    if (words.length === 0) {
      container.innerHTML = '';
      return;
    }
    const html = words.map((w) => {
      const status = statusOf(state, w.id);
      return `
        <div class="study-item" role="listitem">
          <span class="sw-word">${escapeHtml(w.word)}</span>
          <span class="sw-def">${escapeHtml(w.definition)}</span>
          <span class="sw-badge ${status}">${STATUS_LABEL[status]}</span>
        </div>`;
    }).join('');
    container.innerHTML = html;
  }

  // ---------- Quiz question card ----------

  function renderQuestion(container, question) {
    const labelKey = question.direction === 'definition' ? 'word' : 'definition';
    container.innerHTML = question.options.map((opt, i) => `
      <button class="option" type="button" data-option-id="${opt.id}" data-index="${i}">
        <span class="option-letter">${LETTERS[i]}</span>
        <span class="option-text">${escapeHtml(opt[labelKey])}</span>
      </button>
    `).join('');
  }

  function markOptionStates(container, question, chosenId) {
    const buttons = Array.from(container.querySelectorAll('.option'));
    buttons.forEach((btn) => {
      const id = Number(btn.getAttribute('data-option-id'));
      btn.disabled = true;
      if (id === question.wordId) {
        btn.classList.add('is-correct');
      } else if (id === chosenId) {
        btn.classList.add('is-incorrect');
      }
    });
  }

  function renderFeedbackDetail(container, question, chosenOption, wasCorrect) {
    const letterFor = (id) => {
      const idx = question.options.findIndex((o) => o.id === id);
      return LETTERS[idx] || '?';
    };

    let html = '';

    if (!wasCorrect) {
      html += `
        <div class="fd-block">
          <div class="fd-label">Your answer</div>
          <div>${letterFor(chosenOption.id)}. <span class="fd-word">${escapeHtml(chosenOption.word)}</span> — ${escapeHtml(chosenOption.definition)}</div>
        </div>
        <div class="fd-block">
          <div class="fd-label">Correct answer</div>
          <div><span class="fd-word">${escapeHtml(question.word)}</span> — ${escapeHtml(question.correctDefinition)}</div>
        </div>
      `;
    } else {
      html += `
        <div class="fd-block">
          <div class="fd-label">Meaning</div>
          <div><span class="fd-word">${escapeHtml(question.word)}</span> — ${escapeHtml(question.correctDefinition)}</div>
        </div>
      `;
    }

    html += `
      <div class="fd-block">
        <div class="fd-label">All options</div>
        <div class="fd-options">
          ${question.options.map((opt) => {
            const isCorrect = opt.id === question.wordId;
            const isChosenWrong = !wasCorrect && opt.id === chosenOption.id;
            const cls = isCorrect ? 'correct' : (isChosenWrong ? 'chosen-wrong' : '');
            return `
              <div class="fd-option-row ${cls}">
                <span class="letter">${letterFor(opt.id)}.</span>
                <span><span class="word">${escapeHtml(opt.word)}</span> — ${escapeHtml(opt.definition)}</span>
              </div>`;
          }).join('')}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  // ---------- Progress dashboard ----------

  const BREAKDOWN_ORDER = ['new', 'learning', 'review', 'familiar', 'mastered'];
  const BREAKDOWN_COLOR = {
    new: '#A23A47',
    learning: '#E0A458',
    review: '#E0616F',
    familiar: '#9C948A',
    mastered: '#4FB679',
  };

  function renderBreakdown(container, counts, total) {
    container.innerHTML = BREAKDOWN_ORDER.map((key) => {
      const count = counts[key] || 0;
      const pct = total > 0 ? Math.round((count / total) * 100) : 0;
      return `
        <div class="breakdown-row">
          <span class="b-dot" style="background:${BREAKDOWN_COLOR[key]}"></span>
          <span class="b-label">${STATUS_LABEL[key]}</span>
          <span class="b-track"><span class="b-fill" style="width:${pct}%;background:${BREAKDOWN_COLOR[key]}"></span></span>
          <span class="b-count">${count} <em>(${pct}%)</em></span>
        </div>`;
    }).join('');
  }

  // Renders the mastery donut as a conic-gradient on a ring div — no
  // SVG arc math needed, and it degrades gracefully (just an unfilled
  // ring) in the vanishingly rare browser without conic-gradient support.
  function renderMasteryDonut(ringEl, totalEl, counts, total) {
    totalEl.textContent = total.toLocaleString();
    if (total === 0) {
      ringEl.style.background = 'var(--bg-sunk)';
      return;
    }
    let cursor = 0;
    const stops = [];
    BREAKDOWN_ORDER.forEach((key) => {
      const count = counts[key] || 0;
      if (count === 0) return;
      const start = (cursor / total) * 360;
      cursor += count;
      const end = (cursor / total) * 360;
      stops.push(`${BREAKDOWN_COLOR[key]} ${start}deg ${end}deg`);
    });
    // A conic-gradient with exactly one color-stop (e.g. a fresh profile
    // where every word is "New") is valid CSS, but not every renderer
    // handles it reliably — duplicating the single stop into two
    // identical, adjacent stops sidesteps the ambiguity entirely and
    // looks pixel-identical to a real single-stop gradient.
    if (stops.length === 1) {
      const only = BREAKDOWN_ORDER.find((key) => (counts[key] || 0) > 0);
      stops.push(`${BREAKDOWN_COLOR[only]} 360deg 360deg`);
    }
    ringEl.style.background = stops.length
      ? `conic-gradient(${stops.join(', ')})`
      : 'var(--bg-sunk)';
  }

  function pluralize(n, singular, plural) {
    return n === 1 ? singular : (plural || singular + 's');
  }

  // ---------- Session review ----------

  function renderSessionReview(container, history) {
    if (!history || history.length === 0) {
      container.innerHTML = '';
      return;
    }

    const missed = history.filter((h) => !h.wasCorrect);
    const correct = history.filter((h) => h.wasCorrect);

    // A word can appear more than once in one session (missed, then
    // retried) — de-duplicate each list by word so the review reads as
    // a clean word-by-word summary rather than a raw event log. If a
    // word was ever missed this session, it belongs in "to revisit"
    // even if a later retry got it right.
    const dedupe = (list) => {
      const seen = new Set();
      const out = [];
      for (const h of list) {
        if (seen.has(h.wordId)) continue;
        seen.add(h.wordId);
        out.push(h);
      }
      return out;
    };
    const missedWordIds = new Set(missed.map((h) => h.wordId));
    const correctOnly = dedupe(correct).filter((h) => !missedWordIds.has(h.wordId));
    const missedDeduped = dedupe(missed);

    // Timing summary, computed across every question actually answered
    // (including repeats), since that's the true time spent this session.
    const times = history.map((h) => h.secondsTaken).filter((t) => typeof t === 'number');
    let timingHtml = '';
    if (times.length > 0) {
      const total = times.reduce((a, b) => a + b, 0);
      const avg = Math.round(total / times.length);
      const fastest = Math.min(...times);
      const slowest = Math.max(...times);
      timingHtml = `
        <div class="review-timing">
          <div class="review-timing-stat"><span>${formatMMSS(total)}</span><label>Total time</label></div>
          <div class="review-timing-stat"><span>${avg}s</span><label>Avg per question</label></div>
          <div class="review-timing-stat"><span>${fastest}s</span><label>Fastest</label></div>
          <div class="review-timing-stat"><span>${slowest}s</span><label>Slowest</label></div>
        </div>`;
    }

    let html = timingHtml;

    if (missedDeduped.length > 0) {
      html += `
        <div class="review-section">
          <h3>To revisit <span class="review-count">${missedDeduped.length}</span></h3>
          <div class="review-list">
            ${missedDeduped.map((h) => `
              <div class="review-row review-row--missed">
                <span class="review-icon" aria-hidden="true">&times;</span>
                <div class="review-row-text">
                  <div><span class="review-word">${escapeHtml(h.word)}</span> — ${escapeHtml(h.definition)}</div>
                  <div class="review-chosen">You answered: ${escapeHtml(h.chosenWord)} — ${escapeHtml(h.chosenDefinition)}</div>
                </div>
                ${timeBadge(h.secondsTaken)}
              </div>`).join('')}
          </div>
        </div>`;
    }

    if (correctOnly.length > 0) {
      html += `
        <div class="review-section">
          <h3>Answered correctly <span class="review-count">${correctOnly.length}</span></h3>
          <div class="review-list">
            ${correctOnly.map((h) => `
              <div class="review-row review-row--correct">
                <span class="review-icon" aria-hidden="true">&check;</span>
                <div class="review-row-text">
                  <div><span class="review-word">${escapeHtml(h.word)}</span> — ${escapeHtml(h.definition)}</div>
                </div>
                ${timeBadge(h.secondsTaken)}
              </div>`).join('')}
          </div>
        </div>`;
    }

    container.innerHTML = html;
  }

  function formatMMSS(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function timeBadge(secondsTaken) {
    if (typeof secondsTaken !== 'number') return '';
    return `<span class="review-time" title="Time spent on this question">${secondsTaken}s</span>`;
  }

  // ---------- Profile dashboard ----------

  function renderTierBars(container, tiers) {
    container.innerHTML = tiers.map((t) => {
      const pct = t.total > 0 ? Math.round((t.mastered / t.total) * 100) : 0;
      return `
        <div class="tier-row">
          <span class="tier-label">${escapeHtml(t.label)}</span>
          <span class="tier-count">${t.mastered}/${t.total}</span>
          <span class="tier-track"><span class="tier-fill tier-fill--${t.level}" style="width:${pct}%"></span></span>
          <span class="tier-acc">${t.accuracy === null ? '\u2014' : t.accuracy + '%'}</span>
        </div>`;
    }).join('');
  }

  function renderAchievements(container, achievements) {
    container.innerHTML = achievements.map((a) => `
      <div class="achievement ${a.unlocked ? 'is-unlocked' : 'is-locked'}" title="${escapeHtml(a.description)}">
        <span class="achievement-icon" aria-hidden="true">${a.unlocked ? a.icon : '\u{1F512}'}</span>
        <span class="achievement-text">
          <span class="achievement-name">${escapeHtml(a.name)}</span>
          <span class="achievement-desc">${escapeHtml(a.description)}</span>
        </span>
      </div>
    `).join('');
  }

  const MODE_LABEL = { quiz: 'Quiz', review: 'Review' };

  function renderSessionLog(container, sessionLog, formatDate) {
    if (!sessionLog || sessionLog.length === 0) {
      container.innerHTML = '<p class="session-log-empty">No sessions completed yet — your study history will show up here.</p>';
      return;
    }
    container.innerHTML = sessionLog.map((s) => `
      <div class="session-log-row">
        <span class="sl-mode">${escapeHtml(MODE_LABEL[s.mode] || s.mode)}</span>
        <span class="sl-detail">${s.answered} question${s.answered === 1 ? '' : 's'} &middot; ${s.accuracy}% accuracy</span>
        <span class="sl-date">${escapeHtml(formatDate(s.at))}</span>
      </div>
    `).join('');
  }

  // Renders an accuracy-per-session sparkline: a gradient-filled line
  // chart built as plain SVG (no chart library), with a CSS-animated
  // "draw itself in" stroke and per-point hover tooltips via native
  // <title> elements (works without any JS event wiring).
  function renderPerformanceChart(container, sessionLog, formatDate) {
    if (!sessionLog || sessionLog.length === 0) {
      container.innerHTML = '<p class="chart-empty">Complete a session to start tracking your accuracy over time.</p>';
      return;
    }
    // sessionLog is newest-first; chart reads left-to-right chronologically.
    const points = sessionLog.slice().reverse();
    if (points.length === 1) {
      container.innerHTML = `<p class="chart-empty">${points[0].accuracy}% on your first session — complete another to see a trend.</p>`;
      return;
    }

    const W = 600, H = 180;
    const padX = 24, padTop = 16, padBottom = 30;
    const chartW = W - padX * 2;
    const chartH = H - padTop - padBottom;
    const n = points.length;

    const coords = points.map((p, i) => {
      const x = padX + (n === 1 ? 0 : (i / (n - 1)) * chartW);
      const y = padTop + (1 - Math.max(0, Math.min(100, p.accuracy)) / 100) * chartH;
      return { x, y, p };
    });

    const linePoints = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
    const areaPath =
      `M ${coords[0].x.toFixed(1)},${(padTop + chartH).toFixed(1)} ` +
      coords.map((c) => `L ${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ') +
      ` L ${coords[n - 1].x.toFixed(1)},${(padTop + chartH).toFixed(1)} Z`;

    const dots = coords.map((c) => `
      <circle class="chart-dot" cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="4">
        <title>${escapeHtml(formatDate(c.p.at))}: ${c.p.accuracy}% (${c.p.answered} question${c.p.answered === 1 ? '' : 's'})</title>
      </circle>
    `).join('');

    const firstLabel = escapeHtml(formatDate(points[0].at));
    const lastLabel = escapeHtml(formatDate(points[n - 1].at));

    container.innerHTML = `
      <svg class="chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Accuracy per session over time">
        <defs>
          <linearGradient id="chart-area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.32"/>
            <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path d="${areaPath}" fill="url(#chart-area-fill)" class="chart-area"/>
        <polyline points="${linePoints}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="chart-line"/>
        ${dots}
      </svg>
      <div class="chart-x-labels"><span>${firstLabel}</span><span>${lastLabel}</span></div>
    `;
  }

  return {
    escapeHtml,
    statusOf,
    renderStudyList,
    renderQuestion,
    markOptionStates,
    renderFeedbackDetail,
    renderBreakdown,
    renderMasteryDonut,
    renderSessionReview,
    renderTierBars,
    renderAchievements,
    renderSessionLog,
    renderPerformanceChart,
    pluralize,
    STATUS_LABEL,
    PROMPT_COPY,
    LETTERS,
  };
})();
