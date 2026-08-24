// app.js
// Application state + controller. Wires DOM events to Quiz/SRS/Storage
// and to the render helpers in ui.js.

(function () {
  let state = null;
  let currentView = 'quiz';
  let currentQuizMode = 'quiz'; // 'quiz' | 'review' — which tab launched the session

  let session = null;
  // session shape while active:
  // { mode, queue: [wordId,...], pos, targetSize, askedCount, correctCount,
  //   currentQuestion, currentChosen }

  // Word ids answered recently (across sessions, this tab only — not
  // persisted). Most-recent first, capped. Used only to keep a brand
  // new session from immediately re-leading with whatever the last
  // session just ended on; it never excludes a word, only reorders.
  let recentlyAskedWordIds = [];
  const RECENT_TRACK_LIMIT = 30;
  function trackRecentlyAsked(wordId) {
    recentlyAskedWordIds = recentlyAskedWordIds.filter((id) => id !== wordId);
    recentlyAskedWordIds.unshift(wordId);
    if (recentlyAskedWordIds.length > RECENT_TRACK_LIMIT) {
      recentlyAskedWordIds.length = RECENT_TRACK_LIMIT;
    }
  }

  // ---------- DOM refs ----------
  const el = {};
  function cacheDom() {
    el.tabs = document.querySelectorAll('#main-tabs .tab');
    el.views = {
      home: document.getElementById('view-home'),
      study: document.getElementById('view-study'),
      quiz: document.getElementById('view-quiz'),
      progress: document.getElementById('view-progress'),
    };

    // Home
    el.brandHomeBtn = document.getElementById('brand-home-btn');
    el.homeStartBtn = document.getElementById('home-start-btn');
    el.homeBrowseBtn = document.getElementById('home-browse-btn');
    el.homeCtaStartBtn = document.getElementById('home-cta-start-btn');
    el.homeHero = document.querySelector('#view-home .home-hero');
    el.homeFeatures = document.querySelector('#view-home .home-features');
    el.homeChips = document.getElementById('home-chips');
    el.miniDashRingFill = document.getElementById('mini-dash-ring-fill');
    el.miniDashStreakNum = document.getElementById('mini-dash-streak-num');
    el.miniDashGoalText = document.getElementById('mini-dash-goal-text');
    el.miniDashGoalFill = document.getElementById('mini-dash-goal-fill');
    el.miniDashReviewed = document.getElementById('mini-dash-reviewed');
    el.miniDashAccuracy = document.getElementById('mini-dash-accuracy');
    el.miniDashMastered = document.getElementById('mini-dash-mastered');
    el.wotdCard = document.getElementById('wotd-card');
    el.wotdToggle = document.getElementById('wotd-toggle');
    el.wotdCollapse = document.getElementById('wotd-collapse');
    el.wotdWord = document.getElementById('wotd-word');
    el.wotdDef = document.getElementById('wotd-def');
    el.wotdTier = document.getElementById('wotd-tier');
    el.welcomeCard = document.getElementById('welcome-card');
    el.welcomeLabel = document.getElementById('welcome-label');
    el.welcomeText = document.getElementById('welcome-text');
    el.welcomeCtaBtn = document.getElementById('welcome-cta-btn');
    el.confettiLayer = document.getElementById('confetti-layer');
    el.homeStatEncountered = document.getElementById('home-stat-encountered');
    el.homeStatMastered = document.getElementById('home-stat-mastered');
    el.homeStatAccuracy = document.getElementById('home-stat-accuracy');

    // Study
    el.studySearch = document.getElementById('study-search');
    el.studyFilter = document.getElementById('study-filter');
    el.studyList = document.getElementById('study-list');
    el.studyEmpty = document.getElementById('study-empty');

    // Quiz/Review shared
    el.launcher = document.getElementById('session-launcher');
    el.launcherTitle = document.getElementById('launcher-title');
    el.launcherLede = document.getElementById('launcher-lede');
    el.launcherDueCount = document.getElementById('launcher-due-count');
    el.launcherNewCount = document.getElementById('launcher-new-count');
    el.startSessionBtn = document.getElementById('start-session-btn');
    el.directionBtns = document.querySelectorAll('#direction-toggle .direction-btn');
    el.directionExplain = document.getElementById('direction-explain');
    el.lengthBtns = document.querySelectorAll('#length-picker .length-btn');
    el.lengthCustomInput = document.getElementById('length-custom-input');

    el.sessionActive = document.getElementById('session-active');
    el.progressFill = document.getElementById('session-progress-fill');
    el.progressLabel = document.getElementById('session-progress-label');
    el.sessionQCurrent = document.getElementById('session-q-current');
    el.sessionQTotal = document.getElementById('session-q-total');
    el.sessionStreak = document.getElementById('session-streak');
    el.questionTimer = document.getElementById('question-timer');
    el.questionTimerText = document.getElementById('question-timer-text');
    el.qcardTipText = document.getElementById('qcard-tip-text');
    el.qfbStreakNum = document.getElementById('qfb-streak-num');
    el.qfbSessionPct = document.getElementById('qfb-session-pct');
    el.qcard = document.getElementById('qcard');
    el.qcardWord = document.getElementById('qcard-word');
    el.qcardEyebrow = document.getElementById('qcard-eyebrow');
    el.qcardOptions = document.getElementById('qcard-options');
    el.feedbackPanel = document.getElementById('feedback-panel');
    el.feedbackBanner = document.getElementById('feedback-banner');
    el.feedbackDetail = document.getElementById('feedback-detail');
    el.continueBtn = document.getElementById('continue-btn');

    el.sessionSummary = document.getElementById('session-summary');
    el.summaryTitle = document.getElementById('summary-title');
    el.summaryAnswered = document.getElementById('summary-answered');
    el.summaryAccuracy = document.getElementById('summary-accuracy');
    el.summaryMastered = document.getElementById('summary-mastered');
    el.summaryNote = document.getElementById('summary-note');
    el.sessionReview = document.getElementById('session-review');
    el.continueStudyingBtn = document.getElementById('continue-studying-btn');
    el.backHomeBtn = document.getElementById('back-home-btn');

    el.sessionEmpty = document.getElementById('session-empty');
    el.sessionEmptyText = document.getElementById('session-empty-text');
    el.sessionEmptySwitch = document.getElementById('session-empty-switch');

    // Progress / profile dashboard
    el.profileAvatar = document.getElementById('profile-avatar');
    el.profileRank = document.getElementById('profile-rank');
    el.profileSince = document.getElementById('profile-since');
    el.opcRingFill = document.getElementById('opc-ring-fill');
    el.opcRingPct = document.getElementById('opc-ring-pct');
    el.opcEncountered = document.getElementById('opc-encountered');
    el.opcMastered = document.getElementById('opc-mastered');
    el.statEncountered = document.getElementById('stat-encountered');
    el.statEncounteredPct = document.getElementById('stat-encountered-pct');
    el.statMastered = document.getElementById('stat-mastered');
    el.statMasteredPct = document.getElementById('stat-mastered-pct');
    el.statLearning = document.getElementById('stat-learning');
    el.statLearningPct = document.getElementById('stat-learning-pct');
    el.statReview = document.getElementById('stat-review');
    el.statReviewPct = document.getElementById('stat-review-pct');
    el.statAccuracy = document.getElementById('stat-accuracy');
    el.statQuestions = document.getElementById('stat-questions');
    el.statStreak = document.getElementById('stat-streak');
    el.statLongestStreak = document.getElementById('stat-longest-streak');
    el.tierBars = document.getElementById('tier-bars');
    el.achievementsGrid = document.getElementById('achievements-grid');
    el.sessionLogEl = document.getElementById('session-log');
    el.performanceChart = document.getElementById('performance-chart');
    el.breakdownBars = document.getElementById('breakdown-bars');
    el.masteryDonut = document.getElementById('mastery-donut');
    el.donutTotal = document.getElementById('donut-total');

    // Settings / reset
    el.settingsBtn = document.getElementById('settings-btn');
    el.settingsModal = document.getElementById('settings-modal');
    el.closeSettingsBtn = document.getElementById('close-settings-btn');
    el.sessionSizeInput = document.getElementById('session-size-input');
    el.settingsNameInput = document.getElementById('settings-name-input');
    el.levelFilterChecks = document.querySelectorAll('#level-filter input[type="checkbox"]');
    el.resetBtn = document.getElementById('reset-btn');
    el.resetConfirmModal = document.getElementById('reset-confirm-modal');
    el.resetCancelBtn = document.getElementById('reset-cancel-btn');
    el.resetConfirmBtn = document.getElementById('reset-confirm-btn');

    el.nameModal = document.getElementById('name-modal');
    el.nameForm = document.getElementById('name-form');
    el.nameInput = document.getElementById('name-input');
    el.profileName = document.getElementById('profile-name');

    el.toast = document.getElementById('toast');

    el.themeToggleBtn = document.getElementById('theme-toggle-btn');
    el.themeIconMoon = document.getElementById('theme-icon-moon');
    el.themeIconSun = document.getElementById('theme-icon-sun');
  }

  // ---------- Theme ----------
  function applyTheme(theme) {
    const isLight = theme === 'light';
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme'); // dark is the unattributed default
    }
    el.themeIconMoon.classList.toggle('hidden', isLight);
    el.themeIconSun.classList.toggle('hidden', !isLight);
    el.themeToggleBtn.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark theme' : 'Switch to light theme'
    );
  }

  function toggleTheme() {
    const next = state.settings.theme === 'light' ? 'dark' : 'light';
    state.settings.theme = next;
    Storage.save(state);
    applyTheme(next);
  }

  // ---------- Count-up number animation ----------
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animates an element's text from 0 (or its current displayed number)
  // up to `target` over `duration` ms. `formatter` turns the current
  // numeric value into display text (e.g. adding a % sign). Falls back
  // to setting the final value instantly for reduced-motion users.
  function animateNumber(el, target, formatter = (n) => String(n), duration = 700) {
    if (!el) return;
    if (prefersReducedMotion() || !window.requestAnimationFrame) {
      el.textContent = formatter(target);
      return;
    }
    const start = performance.now();
    const from = 0;
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(from + (target - from) * eased);
      el.textContent = formatter(current);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---------- Toast ----------
  let toastTimer = null;
  function showToast(msg, duration = 2200) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.add('hidden'), duration);
  }

  // ---------- View switching ----------
  function switchView(view) {
    currentView = view;
    Object.entries(el.views).forEach(([key, node]) => {
      const shouldShow = key === view || (key === 'quiz' && (view === 'quiz' || view === 'review'));
      node.classList.toggle('hidden', !shouldShow);
      if (shouldShow) {
        // Re-trigger the entrance transition every time a view becomes
        // active (remove, forced reflow, re-add) so switching tabs
        // always feels like a deliberate transition, not an instant cut.
        node.classList.remove('view--enter');
        void node.offsetWidth;
        node.classList.add('view--enter');
      }
    });
    el.tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-view') === view);
    });

    if (view === 'home') renderHomeView();
    if (view === 'study') renderStudyView();
    if (view === 'progress') renderProgressView();
    if (view === 'quiz' || view === 'review') {
      currentQuizMode = view;
      resetToLauncher();
    }
  }

  // ---------- Home view ----------
  function wordOfTheDay() {
    // Deterministic by calendar day (local time) — same word all day
    // for everyone, changes at midnight, no state needed to track it.
    const key = Storage.dateKey();
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    return VOCAB_DATA[hash % VOCAB_DATA.length];
  }

  function renderWordOfDay() {
    const w = wordOfTheDay();
    el.wotdWord.textContent = w.word;
    el.wotdDef.textContent = w.definition;
    const tierLabel = w.level && w.level !== 'general' ? w.level.charAt(0).toUpperCase() + w.level.slice(1) : null;
    el.wotdTier.textContent = tierLabel || '';
    el.wotdTier.classList.toggle('hidden', !tierLabel);
    el.wotdCollapse.classList.add('is-open');
    el.wotdToggle.setAttribute('aria-expanded', 'true');
  }

  function renderHomeChips() {
    if (!el.homeChips) return;
    const CHIP_COUNT = 7;
    const picks = [];
    const usedIdx = new Set();
    while (picks.length < CHIP_COUNT && picks.length < VOCAB_DATA.length) {
      const idx = Math.floor(Math.random() * VOCAB_DATA.length);
      if (usedIdx.has(idx)) continue;
      usedIdx.add(idx);
      picks.push(VOCAB_DATA[idx].word);
    }
    el.homeChips.innerHTML = picks.map((w, i) => {
      const left = 6 + Math.round((i / CHIP_COUNT) * 88) + (Math.random() * 6 - 3);
      const delay = (Math.random() * 4).toFixed(2);
      const duration = (10 + Math.random() * 6).toFixed(2);
      return `<span class="home-chip" style="left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;">${UI.escapeHtml(w)}</span>`;
    }).join('');
  }


  function renderWelcomeCard() {
    const hasHistory = (state.sessionLog || []).length > 0;
    if (!hasHistory) {
      el.welcomeCard.classList.add('hidden');
      return;
    }
    const counts = Quiz.dueCounts(state);
    if (counts.due > 0) {
      el.welcomeLabel.textContent = 'Welcome back';
      el.welcomeText.textContent = `${counts.due} ${UI.pluralize(counts.due, 'word is', 'words are')} due for review.`;
      el.welcomeCtaBtn.textContent = 'Review now';
      el.welcomeCtaBtn.onclick = () => switchView('review');
    } else {
      el.welcomeLabel.textContent = 'Welcome back';
      el.welcomeText.textContent = 'You\u2019re all caught up on review \u2014 great time to learn something new.';
      el.welcomeCtaBtn.textContent = 'Learn new words';
      el.welcomeCtaBtn.onclick = () => switchView('quiz');
    }
    el.welcomeCard.classList.remove('hidden');
  }

  // Preview card on the homepage's "Why" section. Every number in it is
  // real (not placeholder), even though it's decorative — pulling from
  // the same state everything else on the site reads from.
  const STREAK_RING_MAX_DAYS = 14; // ring reads "full" at a 14-day streak
  const RING_CIRCUMFERENCE = 113; // matches the SVG's r=18 circle, 2*pi*18

  function renderMiniDashboard(masteredCount) {
    const streak = state.dailyStreak || 0;
    const ringFrac = Math.min(1, streak / STREAK_RING_MAX_DAYS);
    el.miniDashRingFill.setAttribute('stroke-dashoffset', String(RING_CIRCUMFERENCE * (1 - ringFrac)));
    el.miniDashStreakNum.textContent = streak;

    const goal = state.settings.sessionSize || 20;
    const today = Storage.dateKey();
    const answeredToday = (state.sessionLog || [])
      .filter((s) => Storage.dateKey(s.at) === today)
      .reduce((sum, s) => sum + s.answered, 0);
    const goalCount = Math.min(answeredToday, goal);
    el.miniDashGoalText.textContent = `${goalCount} / ${goal} words`;
    el.miniDashGoalFill.style.width = `${goal > 0 ? Math.round((goalCount / goal) * 100) : 0}%`;

    el.miniDashReviewed.textContent = state.stats.questionsAnswered || 0;
    const lastSession = (state.sessionLog || [])[0];
    el.miniDashAccuracy.textContent = lastSession ? `${lastSession.accuracy}%` : '\u2014';
    el.miniDashMastered.textContent = masteredCount;
  }

  function renderHomeView() {
    const total = VOCAB_DATA.length;
    let encountered = 0;
    let mastered = 0;
    Object.values(state.words).forEach((rec) => {
      if (rec.attempts > 0) encountered += 1;
      if (rec.status === 'mastered') mastered += 1;
    });
    animateNumber(el.homeStatEncountered, encountered, (n) => `${n}/${total}`);
    animateNumber(el.homeStatMastered, mastered);

    const totalAttempts = state.stats.correct + state.stats.incorrect;
    if (totalAttempts > 0) {
      animateNumber(el.homeStatAccuracy, Math.round((state.stats.correct / totalAttempts) * 100), (n) => `${n}%`);
    } else {
      el.homeStatAccuracy.textContent = '\u2014';
    }

    renderWordOfDay();
    renderHomeChips();
    renderWelcomeCard();
    renderMiniDashboard(mastered);

    // Re-trigger the entrance animation every time someone lands on
    // Home (not just the very first page load) — remove then re-add
    // via a forced reflow, same technique used for the quiz card.
    [el.homeHero, el.homeFeatures].forEach((node) => {
      if (!node) return;
      node.classList.remove('is-visible');
      void node.offsetWidth; // force reflow so the animation restarts
      node.classList.add('is-visible');
    });
  }

  // ---------- Study view ----------
  function renderStudyView() {
    const query = (el.studySearch.value || '').trim().toLowerCase();
    const filter = el.studyFilter.value;

    let words = VOCAB_DATA;
    if (query) {
      words = words.filter(
        (w) => w.word.toLowerCase().includes(query) || w.definition.toLowerCase().includes(query)
      );
    }
    if (filter !== 'all') {
      words = words.filter((w) => UI.statusOf(state, w.id) === filter);
    }

    UI.renderStudyList(el.studyList, words, state);
    el.studyEmpty.classList.toggle('hidden', words.length !== 0);
  }

  // ---------- Quiz/Review launcher ----------
  function resetToLauncher() {
    stopQuestionTimer();
    session = null;
    el.launcher.classList.remove('hidden');
    el.sessionActive.classList.add('hidden');
    el.sessionSummary.classList.add('hidden');
    el.sessionEmpty.classList.add('hidden');

    const counts = Quiz.dueCounts(state);
    el.launcherDueCount.textContent = counts.due;
    el.launcherNewCount.textContent = counts.fresh;

    if (currentQuizMode === 'review') {
      el.launcherTitle.textContent = 'Review';
      el.launcherLede.textContent = 'Words you\u2019ve struggled with, prioritised by how overdue they are.';
      el.startSessionBtn.textContent = counts.due > 0 ? 'Start review' : 'Reinforce mastered words';
    } else {
      el.launcherTitle.textContent = 'Quiz';
      el.launcherLede.textContent = 'A balanced mix of new words and words due for review.';
      el.startSessionBtn.textContent = 'Start session';
    }

    refreshDirectionToggle();
    refreshLengthPicker();
  }

  const DIRECTION_EXPLAIN = {
    word: 'You\u2019ll see a word and pick its correct meaning from four options. Example: shown "Copious", you\u2019d pick "Abundant in supply or quantity."',
    definition: 'You\u2019ll see a meaning and pick the word it describes. Example: shown "Abundant in supply or quantity.", you\u2019d pick "Copious".',
    mixed: 'Each question randomly does one or the other \u2014 sometimes you pick a meaning, sometimes a word \u2014 so you stay sharp both ways.',
  };

  function refreshDirectionToggle() {
    const current = state.settings.questionDirection || 'word';
    el.directionBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-direction') === current);
    });
    el.directionExplain.textContent = DIRECTION_EXPLAIN[current] || DIRECTION_EXPLAIN.word;
  }

  function refreshLengthPicker() {
    const current = state.settings.sessionSize || 20;
    const presets = [10, 20, 30, 50];
    let matched = false;
    el.lengthBtns.forEach((btn) => {
      const isMatch = Number(btn.getAttribute('data-length')) === current;
      btn.classList.toggle('active', isMatch);
      if (isMatch) matched = true;
    });
    el.lengthCustomInput.value = matched ? '' : current;
    el.lengthCustomInput.classList.toggle('active', !matched);
  }

  function setQuestionDirection(direction) {
    state.settings.questionDirection = direction;
    Storage.save(state);
    refreshDirectionToggle();
  }

  function setSessionLength(size) {
    const clamped = Math.max(5, Math.min(200, size));
    state.settings.sessionSize = clamped;
    Storage.save(state);
    refreshLengthPicker();
  }

  // Applies a typed length to state immediately, without the min-5
  // clamp or the visual refresh that setSessionLength does — both of
  // those rewrite the input's own displayed value, which fights the
  // user's typing (e.g. typing "40" would get clamped/rewritten to "5"
  // the instant a lone "4" appears). This keeps whatever is actually
  // typed authoritative in state as it's typed, so starting a session
  // immediately after typing (before the field ever loses focus) uses
  // the real value instead of silently falling back to the old one.
  function applyTypedSessionLength(size) {
    if (size >= 1) {
      state.settings.sessionSize = Math.min(200, size);
      Storage.save(state);
    }
  }

  // Resolves 'mixed' to a concrete direction per-question; 'word' and
  // 'definition' pass through unchanged.
  function resolveDirection() {
    const setting = state.settings.questionDirection || 'word';
    if (setting !== 'mixed') return setting;
    return Math.random() < 0.5 ? 'word' : 'definition';
  }

  let pendingSessionMode = null;

  function openNameModal() {
    el.nameInput.value = '';
    el.nameModal.classList.remove('hidden');
    el.nameInput.focus();
  }
  function closeNameModal() {
    el.nameModal.classList.add('hidden');
  }

  function applyUserName(name) {
    state.userName = name;
    Storage.save(state);
    updateProfileNameDisplay();
  }

  function updateProfileNameDisplay() {
    const name = (state.userName || '').trim();
    if (el.profileName) el.profileName.textContent = name || 'Guest';
    if (el.profileAvatar) {
      const initials = name
        ? name.trim().split(/\s+/).slice(0, 2).map((w) => w[0].toUpperCase()).join('')
        : '?';
      el.profileAvatar.textContent = initials;
    }
  }

  function startSession(mode) {
    if (!state.userName) {
      pendingSessionMode = mode;
      openNameModal();
      return;
    }

    const size = Math.max(5, Math.min(200, state.settings.sessionSize || 20));
    const queue = Quiz.buildSessionQueue(state, size, mode, recentlyAskedWordIds);

    if (queue.length === 0) {
      el.launcher.classList.add('hidden');
      el.sessionEmpty.classList.remove('hidden');
      el.sessionEmptyText.textContent =
        mode === 'review'
          ? 'Nothing is due for review right now — nice work staying on top of it. Try a Quiz session to keep moving through new words.'
          : 'You\u2019ve encountered every word at least once. Check Review for words due to come back, or Progress to see where you stand.';
      return;
    }

    session = {
      mode,
      queue,
      pos: 0,
      targetSize: size,
      // Hard ceiling on how far the queue can grow from in-session
      // requeues. Missed words still get requeued and re-tested
      // (satisfying "words I struggle with appear more often"), but a
      // long run of wrong answers can't make a single session grow
      // without bound — anything that doesn't fit is simply due again
      // the moment the next session starts (see SRS.isDue).
      maxQueueLen: size + 20,
      // How many times each word has already been REQUEUED this
      // session. Capped (see RETRY_CAP_PER_SESSION) so a handful of
      // words someone is struggling with can't crowd out the rest of
      // the session's original content — after the cap, the word still
      // updates SRS/mastery normally on a miss, it just won't keep
      // resurfacing again until a future session.
      retryCounts: {},
      askedCount: 0,
      correctCount: 0,
      currentQuestion: null,
      currentChosen: null,
      // Full history of every question asked this session, for the
      // end-of-session detailed review.
      history: [],
    };

    el.launcher.classList.add('hidden');
    el.sessionEmpty.classList.add('hidden');
    el.sessionSummary.classList.add('hidden');
    el.sessionActive.classList.remove('hidden');

    askQuestionAt(0);
  }

  function askQuestionAt(pos) {
    // Safeguard: skip words that fail to produce a valid question,
    // rather than showing a broken card. Bounded to avoid any chance
    // of looping forever.
    let tries = 0;
    let p = pos;
    let question = null;
    while (p < session.queue.length && tries < session.queue.length + 5) {
      const wordId = session.queue[p];
      const direction = resolveDirection();
      question = Quiz.generateQuestion(state, wordId, direction);
      if (question) break;
      session.queue.splice(p, 1); // drop the unusable entry
      tries += 1;
      question = null;
    }

    if (!question) {
      endSession();
      return;
    }

    session.pos = p;
    session.currentQuestion = question;
    session.currentChosen = null;

    el.qcardEyebrow.textContent = UI.PROMPT_COPY[question.direction] || UI.PROMPT_COPY.word;
    el.qcardWord.textContent = question.prompt;
    el.qcardWord.classList.toggle('qcard-word--definition', question.direction === 'definition');
    UI.renderQuestion(el.qcardOptions, question);
    el.feedbackPanel.classList.add('hidden');
    el.sessionActive.classList.remove('hidden');

    // Re-trigger the entrance animation on every new question. Removing
    // then re-adding the class (via a forced reflow) restarts the CSS
    // animation even when it's already present from the previous card.
    el.qcard.classList.remove('qcard--enter');
    void el.qcard.offsetWidth; // force reflow so the animation restarts
    el.qcard.classList.add('qcard--enter');

    const pct = Math.min(100, Math.round((session.askedCount / session.targetSize) * 100));
    el.progressFill.style.width = pct + '%';
    el.sessionQCurrent.textContent = session.askedCount + 1;
    el.sessionQTotal.textContent = session.targetSize;

    el.qcardTipText.textContent = STUDY_TIPS[session.askedCount % STUDY_TIPS.length];

    el.qfbStreakNum.textContent = state.dailyStreak || 0;
    el.qfbSessionPct.textContent = pct + '%';

    const streak = state.stats.currentStreak;
    if (streak >= 3) {
      el.sessionStreak.textContent = `${streak} in a row`;
      el.sessionStreak.classList.remove('hidden');
    } else {
      el.sessionStreak.classList.add('hidden');
    }

    startQuestionTimer();
  }

  const STUDY_TIPS = [
    'Read the definition carefully. Think of the tone \u2014 is it humble, strong, negative, or uncertain?',
    'If two options feel close, pick the one that matches the exact shade of meaning, not just the general idea.',
    'Say the word out loud. Sometimes hearing it jogs a memory of where you\u2019ve seen it before.',
    'Break the word into parts \u2014 prefixes and roots often hint at meaning even if you don\u2019t know the whole word.',
    'Rule out the options you\u2019re confident are wrong first \u2014 it narrows a guess into a real choice.',
    'Missed it before? That\u2019s the point of seeing it again \u2014 each retry is building the memory.',
    'Picture the word used in a sentence. Concrete context sticks better than a bare definition.',
  ];

  // ---------- Per-question timer ----------
  // Counts up while a question is on screen, freezes the instant an
  // answer is picked (so reading the feedback at your own pace never
  // gets counted), and restarts clean on the next question.
  let questionTimerInterval = null;
  let questionStartedAt = null;

  function formatMMSS(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function startQuestionTimer() {
    stopQuestionTimer();
    questionStartedAt = Date.now();
    el.questionTimerText.textContent = '00:00';
    questionTimerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - questionStartedAt) / 1000);
      el.questionTimerText.textContent = formatMMSS(elapsed);
    }, 1000);
  }

  // Stops the ticking display and returns the elapsed whole seconds —
  // called once, right when an answer is picked, so that value is what
  // gets recorded for this question.
  function stopQuestionTimer() {
    if (questionTimerInterval) {
      clearInterval(questionTimerInterval);
      questionTimerInterval = null;
    }
    if (questionStartedAt === null) return 0;
    const elapsed = Math.floor((Date.now() - questionStartedAt) / 1000);
    questionStartedAt = null;
    return elapsed;
  }

  const RETRY_CAP_PER_SESSION = 1;

  function handleOptionClick(optionId) {
    if (!session || session.currentChosen !== null) return;
    const question = session.currentQuestion;
    const wasCorrect = optionId === question.wordId;
    const secondsTaken = stopQuestionTimer();

    session.currentChosen = optionId;
    session.askedCount += 1;
    if (wasCorrect) session.correctCount += 1;
    trackRecentlyAsked(question.wordId);

    UI.markOptionStates(el.qcardOptions, question, optionId);

    const rec = Quiz.ensureRecord(state, question.wordId);
    SRS.recordAnswer(rec, wasCorrect, session.askedCount);

    // Global stats.
    state.stats.questionsAnswered += 1;
    if (wasCorrect) {
      state.stats.correct += 1;
      state.stats.currentStreak += 1;
      state.stats.longestStreak = Math.max(state.stats.longestStreak, state.stats.currentStreak);
    } else {
      state.stats.incorrect += 1;
      state.stats.currentStreak = 0;
    }
    Storage.save(state);

    const chosenOption = question.options.find((o) => o.id === optionId);

    // Record this question for the end-of-session detailed review,
    // regardless of what happens to it in the queue afterward.
    session.history.push({
      wordId: question.wordId,
      word: question.word,
      definition: question.correctDefinition,
      direction: question.direction,
      wasCorrect,
      chosenWord: chosenOption.word,
      chosenDefinition: chosenOption.definition,
      secondsTaken,
    });

    // Requeue within this session if the word is still on a short,
    // in-session interval; otherwise it's graduated to a date-based
    // review and will resurface in a future session automatically.
    // Capped per word per session: a run of misses on the same few
    // words would otherwise keep re-inserting them close together and
    // crowd out the rest of the session's original content (the exact
    // "words just keep repeating" problem) — after a couple of extra
    // looks this session, further misses still update mastery normally,
    // they just won't demand another slot until the NEXT session.
    if (rec.dueAt && rec.dueAt.type === 'session') {
      const retriesSoFar = session.retryCounts[question.wordId] || 0;
      if (retriesSoFar < RETRY_CAP_PER_SESSION) {
        session.retryCounts[question.wordId] = retriesSoFar + 1;
        const offset = Math.max(1, rec.dueAt.afterIndex - session.askedCount);
        requeueWithinSession(question.wordId, offset);
      }
    }

    // Feedback panel.
    el.feedbackBanner.textContent = wasCorrect ? 'Correct!' : 'Incorrect.';
    el.feedbackBanner.className = 'feedback-banner ' + (wasCorrect ? 'correct' : 'incorrect');
    UI.renderFeedbackDetail(el.feedbackDetail, question, chosenOption, wasCorrect);
    el.feedbackPanel.classList.remove('hidden');
    // {preventScroll: true} matters here: without it, focusing this
    // button yanks the page down to it every time an answer is picked,
    // which is jarring since the feedback the person actually needs to
    // read (correct answer, all four meanings) is right above it.
    el.continueBtn.focus({ preventScroll: true });
  }

  function requeueWithinSession(wordId, offsetQuestions) {
    // Remove any existing future occurrence so a word never has two
    // pending slots at once.
    for (let i = session.queue.length - 1; i > session.pos; i--) {
      if (session.queue[i] === wordId) session.queue.splice(i, 1);
    }
    if (session.queue.length >= session.maxQueueLen) {
      // Session is already long enough. Don't strand the word forever —
      // it keeps its 'session'-type due state, so SRS.isDue treats it as
      // immediately due the moment the *next* session is built.
      return;
    }
    const insertAt = Math.min(session.queue.length, session.pos + 1 + offsetQuestions);
    session.queue.splice(insertAt, 0, wordId);
  }

  function handleContinue() {
    if (!session) return;
    const nextPos = session.pos + 1;
    if (nextPos >= session.queue.length) {
      endSession();
    } else {
      askQuestionAt(nextPos);
    }
  }

  function endSession() {
    if (!session) return;
    stopQuestionTimer();
    const answered = session.askedCount;
    const accuracy = answered > 0 ? Math.round((session.correctCount / answered) * 100) : 0;
    const masteredCount = Object.values(state.words).filter((r) => r.status === 'mastered').length;

    if (answered > 0) {
      Storage.logSession(state, {
        at: Date.now(),
        mode: session.mode,
        answered,
        correct: session.correctCount,
        accuracy,
      });
      Storage.updateDailyStreak(state);
      celebrateNewAchievements();
      Storage.save(state);
    }

    el.sessionActive.classList.add('hidden');
    el.sessionSummary.classList.remove('hidden');

    const isComplete = masteredCount >= VOCAB_DATA.length;
    if (isComplete) {
      const needsReview = Object.values(state.words).filter((r) => r.status === 'review').length;
      el.summaryTitle.textContent = 'Vocabulary programme complete';
      el.summaryNote.textContent = needsReview > 0
        ? `${needsReview} ${UI.pluralize(needsReview, 'word remains', 'words remain')} flagged for extra review — keep going any time.`
        : 'Every word in the list has reached mastery.';
    } else {
      el.summaryTitle.textContent = 'Session complete';
      el.summaryNote.textContent = '';
    }

    el.summaryAnswered.textContent = answered;
    el.summaryAccuracy.textContent = accuracy + '%';
    el.summaryMastered.textContent = masteredCount;

    UI.renderSessionReview(el.sessionReview, session.history);

    session = null;
  }

  // ---------- Progress view ----------
  // ---------- Profile dashboard ----------

  const RANKS = [
    { min: 0, name: 'Novice' },
    { min: 10, name: 'Apprentice' },
    { min: 50, name: 'Scholar' },
    { min: 150, name: 'Adept' },
    { min: 350, name: 'Expert' },
    { min: 700, name: 'Master' },
  ];

  function rankForMastered(masteredCount) {
    let rank = RANKS[0].name;
    for (const r of RANKS) {
      if (masteredCount >= r.min) rank = r.name;
    }
    return rank;
  }

  const TIER_LABELS = { medium: 'Medium', hard: 'Hard', expert: 'Expert' };

  function computeTierProgress() {
    const totals = {};
    const mastered = {};
    const correct = {};
    const attempts = {};
    for (const w of VOCAB_DATA) {
      if (w.level === 'general') continue;
      totals[w.level] = (totals[w.level] || 0) + 1;
      const rec = state.words[w.id];
      if (rec && rec.status === 'mastered') {
        mastered[w.level] = (mastered[w.level] || 0) + 1;
      }
      if (rec && rec.attempts > 0) {
        correct[w.level] = (correct[w.level] || 0) + rec.correct;
        attempts[w.level] = (attempts[w.level] || 0) + rec.attempts;
      }
    }
    return ['medium', 'hard', 'expert'].map((level) => ({
      level,
      label: TIER_LABELS[level],
      mastered: mastered[level] || 0,
      total: totals[level] || 0,
      accuracy: attempts[level] > 0 ? Math.round((correct[level] / attempts[level]) * 100) : null,
    }));
  }

  function computeAchievements() {
    const masteredCount = Object.values(state.words).filter((r) => r.status === 'mastered').length;
    const totalAttempts = state.stats.correct + state.stats.incorrect;
    const accuracy = totalAttempts > 0 ? state.stats.correct / totalAttempts : 0;
    const sessionsLogged = (state.sessionLog || []).length;
    const longestDailyStreak = state.longestDailyStreak || 0;

    return [
      { id: 'first-steps', name: 'First Steps', description: 'Complete your first session', icon: '\u270E', unlocked: sessionsLogged >= 1 },
      { id: 'getting-started', name: 'Getting Started', description: 'Study for 3 days', icon: '\u{1F4D6}', unlocked: longestDailyStreak >= 3 },
      { id: 'bookworm', name: 'Bookworm', description: 'Answer 100 questions', icon: '\u{1F4DA}', unlocked: state.stats.questionsAnswered >= 100 },
      { id: 'wordsmith', name: 'Wordsmith', description: 'Master 50 words', icon: '\u2728', unlocked: masteredCount >= 50 },
      { id: 'scholar', name: 'Scholar', description: 'Master 200 words', icon: '\u{1F393}', unlocked: masteredCount >= 200 },
      { id: 'expert-tier', name: 'Expert Tier', description: 'Master 500 words', icon: '\u{1F3C6}', unlocked: masteredCount >= 500 },
      { id: 'hot-streak', name: 'Hot Streak', description: 'Maintain a 7-day streak', icon: '\u{1F525}', unlocked: longestDailyStreak >= 7 },
      { id: 'on-fire', name: 'On Fire', description: 'Maintain a 14-day streak', icon: '\u26A1', unlocked: longestDailyStreak >= 14 },
      { id: 'sharpshooter', name: 'Sharpshooter', description: 'Achieve 90%+ accuracy', icon: '\u{1F3AF}', unlocked: totalAttempts >= 20 && accuracy >= 0.9 },
      { id: 'dedicated', name: 'Dedicated', description: 'Study for 30 days', icon: '\u{1F4C5}', unlocked: longestDailyStreak >= 30 },
    ];
  }

  // Compares freshly-computed achievements against what's already been
  // shown, records any newly-unlocked ones so they're never celebrated
  // twice, and triggers a toast + confetti burst for each.
  function celebrateNewAchievements() {
    const seen = new Set(state.unlockedAchievements || []);
    const current = computeAchievements();
    const newlyUnlocked = current.filter((a) => a.unlocked && !seen.has(a.id));
    if (newlyUnlocked.length === 0) return;

    newlyUnlocked.forEach((a) => seen.add(a.id));
    state.unlockedAchievements = Array.from(seen);

    // Only the FIRST new achievement gets the full confetti treatment —
    // several bursts stacked on top of each other reads as noisy rather
    // than celebratory. Every unlock still gets its own toast.
    triggerConfetti();
    newlyUnlocked.forEach((a, i) => {
      setTimeout(() => showToast(`${a.icon} Achievement unlocked: ${a.name}`, 3200), i * 900);
    });
  }

  function triggerConfetti() {
    if (!el.confettiLayer) return;
    // Confetti is pure decoration — for reduced-motion users, skip
    // generating it rather than leaving static colored dots stuck on
    // screen once the (disabled) fall animation never runs.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['var(--accent)', 'var(--success)', 'var(--amber)', 'var(--familiar)'];
    const pieceCount = 26;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = (Math.random() * 0.3) + 's';
      piece.style.animationDuration = (1.6 + Math.random() * 0.9) + 's';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      frag.appendChild(piece);
    }
    el.confettiLayer.innerHTML = '';
    el.confettiLayer.appendChild(frag);
    // Clean up after the longest possible animation finishes so the
    // layer doesn't accumulate stale nodes across repeated unlocks.
    setTimeout(() => { el.confettiLayer.innerHTML = ''; }, 2700);
  }

  function formatSessionDate(ts) {
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) {
      return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    }
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }

  function renderProfileHeader(masteredCount) {
    el.profileRank.textContent = rankForMastered(masteredCount);
    const since = new Date(state.createdAt || Date.now());
    el.profileSince.textContent = 'Studying since ' + since.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
  }

  function renderProgressView() {
    const total = VOCAB_DATA.length;
    const records = VOCAB_DATA.map((w) => state.words[w.id] || null);
    const counts = { new: 0, learning: 0, review: 0, familiar: 0, mastered: 0 };
    records.forEach((r) => {
      const status = r && r.attempts > 0 ? r.status : 'new';
      counts[status] = (counts[status] || 0) + 1;
    });

    const encountered = total - counts.new;
    const encounteredPct = total > 0 ? Math.round((encountered / total) * 100) : 0;

    const ringCircumference = 2 * Math.PI * 52; // matches r="52" in the SVG
    el.opcRingFill.style.strokeDashoffset = String(ringCircumference * (1 - encounteredPct / 100));
    animateNumber(el.opcRingPct, encounteredPct, (n) => `${n}%`);
    el.opcEncountered.textContent = `${encountered.toLocaleString()} / ${total.toLocaleString()}`;
    animateNumber(el.opcMastered, counts.mastered);

    animateNumber(el.statEncountered, encountered);
    el.statEncounteredPct.textContent = `${total > 0 ? Math.round((encountered / total) * 100) : 0}% of words`;
    animateNumber(el.statMastered, counts.mastered);
    el.statMasteredPct.textContent = `${total > 0 ? Math.round((counts.mastered / total) * 100) : 0}% of words`;
    animateNumber(el.statLearning, counts.learning);
    el.statLearningPct.textContent = `${total > 0 ? Math.round((counts.learning / total) * 100) : 0}% of words`;
    animateNumber(el.statReview, counts.review);
    el.statReviewPct.textContent = `${total > 0 ? Math.round((counts.review / total) * 100) : 0}% of words`;

    const totalAttempts = state.stats.correct + state.stats.incorrect;
    const acc = totalAttempts > 0 ? Math.round((state.stats.correct / totalAttempts) * 100) : 0;
    animateNumber(el.statAccuracy, acc, (n) => `${n}%`);
    animateNumber(el.statQuestions, state.stats.questionsAnswered);
    animateNumber(el.statStreak, state.stats.currentStreak);
    animateNumber(el.statLongestStreak, state.stats.longestStreak);

    renderProfileHeader(counts.mastered);
    UI.renderTierBars(el.tierBars, computeTierProgress());
    UI.renderAchievements(el.achievementsGrid, computeAchievements());
    UI.renderSessionLog(el.sessionLogEl, state.sessionLog || [], formatSessionDate);
    UI.renderPerformanceChart(el.performanceChart, state.sessionLog || [], formatSessionDate);

    UI.renderBreakdown(el.breakdownBars, counts, total);
    UI.renderMasteryDonut(el.masteryDonut, el.donutTotal, counts, total);
  }

  // ---------- Settings / reset ----------
  function openSettings() {
    el.settingsNameInput.value = state.userName || '';
    el.sessionSizeInput.value = state.settings.sessionSize;
    el.levelFilterChecks.forEach((cb) => {
      const level = cb.getAttribute('data-level');
      cb.checked = state.settings.levelFilter ? state.settings.levelFilter[level] !== false : true;
    });
    el.settingsModal.classList.remove('hidden');
  }
  function closeSettings() {
    el.settingsModal.classList.add('hidden');
  }
  function openResetConfirm() {
    el.resetConfirmModal.classList.remove('hidden');
  }
  function closeResetConfirm() {
    el.resetConfirmModal.classList.add('hidden');
  }
  function doReset() {
    const preservedName = state.userName;
    state = Storage.reset();
    state.userName = preservedName;
    Storage.save(state);
    updateProfileNameDisplay();
    closeResetConfirm();
    closeSettings();
    showToast('Progress reset.');
    if (currentView === 'study') renderStudyView();
    if (currentView === 'progress') renderProgressView();
    if (currentView === 'quiz' || currentView === 'review') resetToLauncher();
  }

  // ---------- Keyboard shortcuts ----------
  function onKeyDown(e) {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (currentView !== 'quiz' && currentView !== 'review') return;
    if (!session) return;

    if (!el.feedbackPanel.classList.contains('hidden')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleContinue();
      }
      return;
    }

    if (['1', '2', '3', '4'].includes(e.key) && session.currentChosen === null) {
      const idx = Number(e.key) - 1;
      const btn = el.qcardOptions.querySelector(`[data-index="${idx}"]`);
      if (btn) btn.click();
    }
  }

  // ---------- Event wiring ----------
  function wireEvents() {
    el.tabs.forEach((tab) => {
      tab.addEventListener('click', () => switchView(tab.getAttribute('data-view')));
    });

    el.brandHomeBtn.addEventListener('click', () => switchView('home'));
    el.homeStartBtn.addEventListener('click', () => switchView('quiz'));
    el.homeBrowseBtn.addEventListener('click', () => switchView('study'));
    el.homeCtaStartBtn.addEventListener('click', () => switchView('quiz'));
    el.wotdToggle.addEventListener('click', () => {
      const isOpen = el.wotdCollapse.classList.toggle('is-open');
      el.wotdToggle.setAttribute('aria-expanded', String(isOpen));
    });

    el.studySearch.addEventListener('input', renderStudyView);
    el.studyFilter.addEventListener('change', renderStudyView);

    el.startSessionBtn.addEventListener('click', () => startSession(currentQuizMode));
    el.directionBtns.forEach((btn) => {
      btn.addEventListener('click', () => setQuestionDirection(btn.getAttribute('data-direction')));
    });
    el.lengthBtns.forEach((btn) => {
      btn.addEventListener('click', () => setSessionLength(Number(btn.getAttribute('data-length'))));
    });
    // 'input' fires on every keystroke, applying the typed value to
    // state immediately — relying only on 'change' (which fires on
    // blur) meant clicking Start session right after typing, before
    // the field lost focus, silently discarded whatever was typed and
    // fell back to the previous/default size.
    el.lengthCustomInput.addEventListener('input', () => {
      const val = parseInt(el.lengthCustomInput.value, 10);
      if (!isNaN(val)) applyTypedSessionLength(val);
    });
    el.lengthCustomInput.addEventListener('change', () => {
      const val = parseInt(el.lengthCustomInput.value, 10);
      if (!isNaN(val) && val >= 5) setSessionLength(val);
    });
    el.sessionEmptySwitch.addEventListener('click', () => switchView('quiz'));

    el.qcardOptions.addEventListener('click', (e) => {
      const btn = e.target.closest('.option');
      if (!btn) return;
      handleOptionClick(Number(btn.getAttribute('data-option-id')));
    });
    el.continueBtn.addEventListener('click', handleContinue);

    el.continueStudyingBtn.addEventListener('click', () => startSession(currentQuizMode));
    el.backHomeBtn.addEventListener('click', () => switchView('progress'));

    el.themeToggleBtn.addEventListener('click', toggleTheme);
    el.settingsBtn.addEventListener('click', openSettings);
    el.closeSettingsBtn.addEventListener('click', closeSettings);
    el.settingsModal.addEventListener('click', (e) => {
      if (e.target === el.settingsModal) closeSettings();
    });

    el.sessionSizeInput.addEventListener('change', () => {
      let val = parseInt(el.sessionSizeInput.value, 10);
      if (isNaN(val)) val = 20;
      val = Math.max(5, Math.min(100, val));
      el.sessionSizeInput.value = val;
      state.settings.sessionSize = val;
      Storage.save(state);
    });

    el.levelFilterChecks.forEach((cb) => {
      cb.addEventListener('change', () => {
        const anyChecked = Array.from(el.levelFilterChecks).some((c) => c.checked);
        if (!anyChecked) {
          // Never allow leaving the app with nothing to study — snap
          // the one the person just unchecked back on and explain why.
          cb.checked = true;
          showToast('At least one difficulty level needs to stay on.');
          return;
        }
        if (!state.settings.levelFilter) {
          state.settings.levelFilter = { general: true, medium: true, hard: true, expert: true };
        }
        el.levelFilterChecks.forEach((c) => {
          state.settings.levelFilter[c.getAttribute('data-level')] = c.checked;
        });
        Storage.save(state);
      });
    });

    el.resetBtn.addEventListener('click', openResetConfirm);
    el.resetCancelBtn.addEventListener('click', closeResetConfirm);
    el.resetConfirmBtn.addEventListener('click', doReset);
    el.resetConfirmModal.addEventListener('click', (e) => {
      if (e.target === el.resetConfirmModal) closeResetConfirm();
    });

    el.nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = el.nameInput.value.trim();
      if (!name) return;
      applyUserName(name);
      closeNameModal();
      const mode = pendingSessionMode;
      pendingSessionMode = null;
      if (mode) startSession(mode);
    });

    el.settingsNameInput.addEventListener('change', () => {
      const name = el.settingsNameInput.value.trim();
      if (name) applyUserName(name);
    });

    document.addEventListener('keydown', onKeyDown);
  }

  // ---------- Init ----------
  let didInit = false;
  function init() {
    if (didInit) return; // guard against DOMContentLoaded firing more than once
    didInit = true;

    cacheDom();

    if (!Storage.isAvailable()) {
      showToast('Local storage is unavailable — progress won\u2019t be saved this session.', 4000);
    }
    state = Storage.load();
    applyTheme(state.settings.theme);
    updateProfileNameDisplay();

    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    wireEvents();
    switchView('home');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
