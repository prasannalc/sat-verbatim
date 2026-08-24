// storage.js
// Persistence layer for the SAT Vocabulary Trainer.
// Wraps localStorage with schema versioning, validation, and graceful
// recovery so a corrupted or missing save never breaks the app.

const Storage = (() => {
  const KEY = 'satVocabTrainer.v1';
  const SCHEMA_VERSION = 1;

  function emptyState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      // Entered once, before the first quiz session; shown on the
      // Progress profile. null until the person provides it.
      userName: null,
      // Per-word progress, keyed by word id (string keys because JSON).
      // Each record: {
      //   box: 0-6 (Leitner-style box, see srs.js),
      //   status: 'new'|'learning'|'review'|'familiar'|'mastered',
      //   attempts, correct, incorrect,
      //   correctStreak, incorrectStreak,
      //   lastSeen: epoch ms | null,
      //   dueAt: epoch ms | null   (cross-session due date; null = due now),
      //   lastDistractors: [ids]   (to reduce repeat distractor combos)
      // }
      words: {},
      stats: {
        questionsAnswered: 0,
        correct: 0,
        incorrect: 0,
        currentStreak: 0,
        longestStreak: 0,
      },
      settings: {
        sessionSize: 20,
        // 'word'       — shown a word, choose the matching definition (default/original mode)
        // 'definition' — shown a definition, choose the matching word
        // 'mixed'      — each question randomly picks one of the above
        questionDirection: 'word',
        // 'dark' (default) or 'light'
        theme: 'dark',
        // Which difficulty tiers are eligible to appear in Quiz/Review
        // sessions. All on by default; unchecking a tier in Settings
        // excludes those words from new-session selection (Study/browse
        // is unaffected — you can still look words up there).
        levelFilter: { general: true, medium: true, hard: true, expert: true },
      },
      // Rolling log of recent completed sessions, most recent first,
      // capped at SESSION_LOG_LIMIT entries. Each: { at, mode, answered,
      // correct, accuracy }. Used for the Progress dashboard's recent
      // activity list — not a full history, just enough for context.
      sessionLog: [],
      // Day-based study streak (distinct from the in-session answer
      // streak). lastStudyDateKey is a local 'YYYY-MM-DD' string —
      // studying again the same day doesn't increment it, studying the
      // very next calendar day does, and any bigger gap resets to 1.
      dailyStreak: 0,
      longestDailyStreak: 0,
      lastStudyDateKey: null,
      // Achievement ids already shown to the person, so a session only
      // celebrates ones that are newly unlocked, not ones from before.
      unlockedAchievements: [],
      // In-session queue state is NOT persisted here; each session is
      // rebuilt fresh from due words + new words on start.
    };
  }

  const SESSION_LOG_LIMIT = 12;

  function logSession(state, entry) {
    state.sessionLog = state.sessionLog || [];
    state.sessionLog.unshift(entry);
    if (state.sessionLog.length > SESSION_LOG_LIMIT) {
      state.sessionLog.length = SESSION_LOG_LIMIT;
    }
  }

  // Local (not UTC) calendar-day key, so the streak lines up with the
  // day the person actually experiences, not GMT.
  function dateKey(ts = Date.now()) {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  // Call once per completed session (answered > 0). Increments the
  // streak on a fresh calendar day that directly follows the last
  // study day, leaves it alone if it's the same day, and resets to 1
  // on any bigger gap (or the very first session ever).
  function updateDailyStreak(state, now = Date.now()) {
    const today = dateKey(now);
    if (state.lastStudyDateKey === today) {
      return state.dailyStreak; // already studied today, no change
    }
    if (state.lastStudyDateKey) {
      const yesterday = dateKey(now - 24 * 60 * 60 * 1000);
      state.dailyStreak = state.lastStudyDateKey === yesterday ? state.dailyStreak + 1 : 1;
    } else {
      state.dailyStreak = 1;
    }
    state.lastStudyDateKey = today;
    state.longestDailyStreak = Math.max(state.longestDailyStreak || 0, state.dailyStreak);
    return state.dailyStreak;
  }

  function isValidState(obj) {
    if (!obj || typeof obj !== 'object') return false;
    if (typeof obj.schemaVersion !== 'number') return false;
    if (typeof obj.words !== 'object' || obj.words === null) return false;
    if (typeof obj.stats !== 'object' || obj.stats === null) return false;
    return true;
  }

  function migrate(obj) {
    // Placeholder for future schema migrations. Currently only v1 exists.
    if (obj.schemaVersion === SCHEMA_VERSION) return obj;
    obj.schemaVersion = SCHEMA_VERSION;
    return obj;
  }

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return emptyState();
      const parsed = JSON.parse(raw);
      if (!isValidState(parsed)) {
        console.warn('SAT Vocab Trainer: saved data failed validation, starting fresh.');
        return emptyState();
      }
      const migrated = migrate(parsed);
      // Backfill settings introduced after a person's save was created,
      // so upgrading the app never leaves a setting undefined.
      if (!migrated.settings) migrated.settings = emptyState().settings;
      if (!migrated.settings.questionDirection) migrated.settings.questionDirection = 'word';
      if (!migrated.settings.sessionSize) migrated.settings.sessionSize = 20;
      if (migrated.settings.theme !== 'dark' && migrated.settings.theme !== 'light') {
        migrated.settings.theme = 'dark';
      }
      if (!migrated.settings.levelFilter || typeof migrated.settings.levelFilter !== 'object') {
        migrated.settings.levelFilter = { general: true, medium: true, hard: true, expert: true };
      } else {
        for (const lvl of ['general', 'medium', 'hard', 'expert']) {
          if (typeof migrated.settings.levelFilter[lvl] !== 'boolean') {
            migrated.settings.levelFilter[lvl] = true;
          }
        }
      }
      if (!Array.isArray(migrated.sessionLog)) migrated.sessionLog = [];
      if (typeof migrated.dailyStreak !== 'number') migrated.dailyStreak = 0;
      if (typeof migrated.longestDailyStreak !== 'number') migrated.longestDailyStreak = migrated.dailyStreak || 0;
      if (typeof migrated.lastStudyDateKey !== 'string') migrated.lastStudyDateKey = null;
      if (!Array.isArray(migrated.unlockedAchievements)) migrated.unlockedAchievements = [];
      if (typeof migrated.userName !== 'string') migrated.userName = null;
      return migrated;
    } catch (err) {
      console.warn('SAT Vocab Trainer: could not read saved progress, starting fresh.', err);
      return emptyState();
    }
  }

  function save(state) {
    try {
      state.updatedAt = Date.now();
      window.localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch (err) {
      // Likely quota exceeded or storage disabled (private browsing, etc.)
      console.error('SAT Vocab Trainer: failed to save progress.', err);
      return false;
    }
  }

  function reset() {
    try {
      window.localStorage.removeItem(KEY);
    } catch (err) {
      console.error('SAT Vocab Trainer: failed to clear saved progress.', err);
    }
    return emptyState();
  }

  function isAvailable() {
    try {
      const testKey = '__sat_vocab_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (err) {
      return false;
    }
  }

  return { load, save, reset, isAvailable, emptyState, logSession, dateKey, updateDailyStreak };
})();
