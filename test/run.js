// Headless functional test: loads the real index.html + JS via jsdom,
// drives the DOM exactly like a user would, and asserts on outcomes.
const path = require('path');
const fs = require('fs');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');

function fail(msg) {
  console.error('FAIL:', msg);
  process.exitCode = 1;
}
function ok(msg) {
  console.log('ok  -', msg);
}

async function main() {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const dom = new JSDOM(html, {
    url: 'http://localhost/index.html',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
  });

  const { window } = dom;

  // In-memory localStorage polyfill (jsdom's own can throw in some setups).
  const store = {};
  window.localStorage = {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };

  // Load scripts manually in order (jsdom's runScripts with <script src>
  // needs same-origin file fetch which we do directly instead).
  const scripts = [
    'js/data.js', 'js/storage.js', 'js/srs.js', 'js/quiz.js', 'js/ui.js', 'js/app.js',
  ];
  const exportShim = '\n;window.VOCAB_DATA = VOCAB_DATA; window.Storage = Storage; window.SRS = SRS; window.Quiz = Quiz; window.UI = UI;\n';
  const combined = scripts
    .map((rel) => fs.readFileSync(path.join(root, rel), 'utf8'))
    .join('\n;\n') + exportShim;
  window.eval(combined);

  // Fire DOMContentLoaded to run app.js init()
  window.document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true, cancelable: true }));

  const doc = window.document;
  // Count-up number animations (see animateNumber in app.js) run over
  // ~700ms via requestAnimationFrame, so any test reading a stat's
  // textContent right after a render must wait for it to settle first.
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // ---- 1. Dataset checks ----
  const VOCAB_DATA = window.VOCAB_DATA;
  if (VOCAB_DATA.length === 1500) ok('dataset has exactly 1500 words');
  else fail(`dataset has ${VOCAB_DATA.length} words, expected 1500`);

  const badEntries = VOCAB_DATA.filter(w => !w.word || !w.definition || !w.word.trim() || !w.definition.trim());
  if (badEntries.length === 0) ok('no words with missing word/definition');
  else fail(`${badEntries.length} entries missing word or definition`);

  const idSet = new Set(VOCAB_DATA.map(w => w.id));
  if (idSet.size === VOCAB_DATA.length) ok('all word ids unique');
  else fail('duplicate ids found');

  // ---- 2. Initial view ----
  const homeView = doc.getElementById('view-home');
  const quizView = doc.getElementById('view-quiz');
  if (!homeView.classList.contains('hidden')) ok('Home is the default landing view');
  else fail('Home view should be visible by default');
  if (quizView.classList.contains('hidden')) ok('Quiz view is hidden until navigated to');
  else fail('Quiz view should not be visible before Home/navigation');

  const homeTitle = doc.querySelector('.home-title');
  if (homeTitle && homeTitle.textContent.replace(/\s+/g, ' ').includes('Master the') && homeTitle.textContent.includes('Score')) {
    ok('home page shows the "Master the Words That Score" headline');
  } else fail(`home title missing or wrong: "${homeTitle && homeTitle.textContent}"`);

  const brandTitle = doc.querySelector('.brand-title');
  if (brandTitle && brandTitle.textContent.trim() === 'SAT Verbatim') {
    ok('the "SAT Verbatim" brand name appears in the topbar');
  } else fail(`brand name missing from topbar: "${brandTitle && brandTitle.textContent}"`);

  doc.getElementById('home-start-btn').click();
  if (!quizView.classList.contains('hidden') && homeView.classList.contains('hidden')) {
    ok('"Start studying" on the home page navigates to Quiz');
  } else fail('home start button did not navigate to Quiz');

  const launcher = doc.getElementById('session-launcher');
  if (!launcher.classList.contains('hidden')) ok('session launcher visible before starting');
  else fail('launcher should be visible initially');

  // ---- 3. Question generation safeguards (unit-level, via Quiz global) ----
  const Quiz = window.Quiz, SRS = window.SRS, Storage = window.Storage;
  let state = Storage.load();
  let brokenCount = 0;
  for (const w of VOCAB_DATA) {
    const q = Quiz.generateQuestion(state, w.id);
    if (!q) { brokenCount++; continue; }
    const correctCount = q.options.filter(o => o.correct).length;
    const defs = q.options.map(o => o.definition);
    const uniqueDefs = new Set(defs);
    if (q.options.length !== 4) fail(`word ${w.word}: expected 4 options, got ${q.options.length}`);
    if (correctCount !== 1) fail(`word ${w.word}: expected exactly 1 correct option, got ${correctCount}`);
    if (uniqueDefs.size !== 4) fail(`word ${w.word}: duplicate option definitions`);
    if (defs.some(d => !d || !d.trim())) fail(`word ${w.word}: empty option definition`);
  }
  if (brokenCount === 0) ok(`generateQuestion produced a valid 4-option question for all ${VOCAB_DATA.length} words`);
  else fail(`generateQuestion failed for ${brokenCount} words`);

  // ---- 3b. Same safeguards, but for direction='definition' (reverse mode) ----
  let brokenReverse = 0;
  for (const w of VOCAB_DATA) {
    const q = Quiz.generateQuestion(state, w.id, 'definition');
    if (!q) { brokenReverse++; continue; }
    const correctCount = q.options.filter(o => o.correct).length;
    const wordsOnCard = q.options.map(o => o.word);
    const uniqueWords = new Set(wordsOnCard);
    if (q.direction !== 'definition') fail(`word ${w.word}: direction not propagated onto question`);
    if (q.prompt !== w.definition) fail(`word ${w.word}: prompt should be the definition in reverse mode`);
    if (q.options.length !== 4) fail(`word ${w.word} (reverse): expected 4 options, got ${q.options.length}`);
    if (correctCount !== 1) fail(`word ${w.word} (reverse): expected exactly 1 correct option, got ${correctCount}`);
    if (uniqueWords.size !== 4) fail(`word ${w.word} (reverse): duplicate word options`);
    if (wordsOnCard.some(x => !x || !x.trim())) fail(`word ${w.word} (reverse): empty word option`);
  }
  if (brokenReverse === 0) ok(`generateQuestion (reverse/definition mode) produced a valid question for all ${VOCAB_DATA.length} words`);
  else fail(`generateQuestion(reverse) failed for ${brokenReverse} words`);

  // ---- 4. Full simulated quiz session via real DOM/click flow ----
  state = Storage.reset(); // start clean for the simulation
  // Re-init app state by calling switchView through a fresh load: easiest
  // is to just re-dispatch DOMContentLoaded is not idempotent-safe, so
  // instead drive via the already-initialized app's exposed DOM handlers.

  const startBtn = doc.getElementById('start-session-btn');
  startBtn.click();

  // First-ever session start should gate on entering a name.
  const nameModal = doc.getElementById('name-modal');
  if (!nameModal.classList.contains('hidden')) {
    ok('name-entry modal appears before the very first session');
    const nameInput = doc.getElementById('name-input');
    nameInput.value = 'Test Student';
    doc.getElementById('name-form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    if (nameModal.classList.contains('hidden')) {
      ok('submitting a name closes the modal and the originally-requested session starts');
    } else fail('name modal did not close after submitting a name');
  } else fail('name-entry modal should appear before the first-ever session');

  const sessionActive = doc.getElementById('session-active');
  const sessionEmpty = doc.getElementById('session-empty');
  if (!sessionActive.classList.contains('hidden')) ok('session starts and shows the active question UI');
  else if (!sessionEmpty.classList.contains('hidden')) fail('session-empty shown on a fresh profile (should have plenty of new words available)');
  else fail('neither session-active nor session-empty visible after starting a session');

  function answerCurrentQuestion(pickCorrect) {
    const options = Array.from(doc.querySelectorAll('#qcard-options .option'));
    if (options.length !== 4) { fail(`expected 4 rendered option buttons, found ${options.length}`); return false; }
    // Find the correct option by checking which one, when clicked, gets
    // the is-correct class — but we need to choose BEFORE clicking, so
    // instead read data-option-id and cross-reference against the
    // question object exposed via a debug hook. Simplify: click first
    // for "incorrect" test, and detect correctness via option-letter
    // matching the feedback banner afterward.
    const target = pickCorrect ? findCorrectButton(options) : options.find(o => !isLikelyCorrect(o));
    (target || options[0]).click();
    return true;
  }

  // We don't have direct access to the `session` closure (it's private),
  // so drive purely through the DOM: click option index 0 repeatedly and
  // read the resulting banner text/class to know what happened. This is
  // exactly what a real user does.
  function clickOptionByIndex(i) {
    const btn = doc.querySelector(`#qcard-options .option[data-index="${i}"]`);
    btn.click();
  }

  let answered = 0;
  let correctSeen = 0;
  let incorrectSeen = 0;
  const feedbackPanel = doc.getElementById('feedback-panel');
  const banner = doc.getElementById('feedback-banner');
  const continueBtn = doc.getElementById('continue-btn');

  const MAX_STEPS = 120;
  for (let step = 0; step < MAX_STEPS; step++) {
    if (!sessionActive.classList.contains('hidden')) {
      // answer: alternate which index we click to exercise both paths
      clickOptionByIndex(step % 2 === 0 ? 0 : 1);
      answered++;
      if (feedbackPanel.classList.contains('hidden')) {
        fail(`step ${step}: feedback panel did not appear after answering`);
        break;
      }
      if (banner.classList.contains('correct')) correctSeen++;
      else if (banner.classList.contains('incorrect')) incorrectSeen++;
      else fail(`step ${step}: feedback banner has neither correct nor incorrect class`);

      continueBtn.click();
    } else {
      break; // session ended (summary or empty shown)
    }
  }

  if (answered >= 20) ok(`answered ${answered} questions across a session without a broken card`);
  else fail(`only answered ${answered} questions before session ended unexpectedly`);

  if (correctSeen > 0 && incorrectSeen > 0) ok('both correct and incorrect feedback paths exercised');
  else fail(`expected both outcomes, got correct=${correctSeen} incorrect=${incorrectSeen}`);

  const summary = doc.getElementById('session-summary');
  if (!summary.classList.contains('hidden')) ok('session summary shown after queue exhausted');
  else fail('session summary should be visible after the loop exits');

  const summaryAnswered = doc.getElementById('summary-answered').textContent;
  if (Number(summaryAnswered) === answered) ok(`summary reports correct answered count (${summaryAnswered})`);
  else fail(`summary answered=${summaryAnswered} but loop counted ${answered}`);

  // ---- 5. Persistence across a fresh load ----
  const savedRaw = window.localStorage.getItem('satVocabTrainer.v1');
  if (savedRaw) ok('progress persisted to localStorage after a session');
  else fail('nothing was saved to localStorage');

  const saved = JSON.parse(savedRaw);
  if (saved.stats.questionsAnswered === answered) ok('persisted stats.questionsAnswered matches session');
  else fail(`persisted questionsAnswered=${saved.stats.questionsAnswered}, expected ${answered}`);

  const wordCount = Object.keys(saved.words).length;
  if (wordCount > 0) ok(`${wordCount} word records persisted`);
  else fail('no word records persisted');

  // ---- 6. Corrupted-storage recovery ----
  window.localStorage.setItem('satVocabTrainer.v1', '{not valid json');
  const recovered = Storage.load();
  if (recovered && typeof recovered.words === 'object') ok('Storage.load() recovers gracefully from corrupted JSON');
  else fail('Storage.load() did not recover from corrupted data');

  window.localStorage.setItem('satVocabTrainer.v1', JSON.stringify({ foo: 'bar' }));
  const recovered2 = Storage.load();
  if (recovered2 && typeof recovered2.words === 'object' && typeof recovered2.stats === 'object') {
    ok('Storage.load() recovers gracefully from a validly-JSON but wrong-shaped object');
  } else fail('Storage.load() did not recover from wrong-shaped object');

  // ---- 7. Progress view renders without throwing, values sane ----
  window.localStorage.setItem('satVocabTrainer.v1', savedRaw); // restore real save
  const progressTab = doc.querySelector('#main-tabs .tab[data-view="progress"]');
  progressTab.click();
  await wait(800); // let count-up animations settle
  const progressView = doc.getElementById('view-progress');
  if (!progressView.classList.contains('hidden')) ok('Progress tab switches view correctly');
  else fail('Progress view did not become visible');

  const statQuestions = doc.getElementById('stat-questions').textContent;
  if (Number(statQuestions) === answered) ok(`Progress dashboard shows correct questions answered (${statQuestions})`);
  else fail(`Progress dashboard questions=${statQuestions}, expected ${answered}`);

  // ---- 8. Study tab search/filter ----
  const studyTab = doc.querySelector('#main-tabs .tab[data-view="study"]');
  studyTab.click();
  const studyList = doc.getElementById('study-list');
  const itemsBefore = studyList.querySelectorAll('.study-item').length;
  if (itemsBefore === VOCAB_DATA.length) ok(`Study tab lists all ${VOCAB_DATA.length} words by default`);
  else fail(`Study tab shows ${itemsBefore} items, expected ${VOCAB_DATA.length}`);

  const searchInput = doc.getElementById('study-search');
  // "ubiquitous" matches the word itself AND appears inside another
  // word's definition ("Omnipresent: ... ubiquitous.") — search is
  // documented to match word OR definition, so >=1 and a real drop
  // from 1000 is what we're checking, not an exact count.
  searchInput.value = 'ubiquitous';
  searchInput.dispatchEvent(new window.Event('input', { bubbles: true }));
  const itemsAfterSearch = studyList.querySelectorAll('.study-item').length;
  if (itemsAfterSearch >= 1 && itemsAfterSearch < VOCAB_DATA.length) ok(`search narrows the study list (${itemsAfterSearch} matches for "ubiquitous")`);
  else fail(`search for "ubiquitous" returned ${itemsAfterSearch} results, expected a small non-zero number`);

  searchInput.value = 'zzzznotaword';
  searchInput.dispatchEvent(new window.Event('input', { bubbles: true }));
  const itemsNoMatch = studyList.querySelectorAll('.study-item').length;
  const emptyStateVisible = !doc.getElementById('study-empty').classList.contains('hidden');
  if (itemsNoMatch === 0 && emptyStateVisible) ok('search with no matches shows the empty state');
  else fail(`expected 0 items + empty state for a nonsense query, got ${itemsNoMatch} items, empty state visible=${emptyStateVisible}`);

  searchInput.value = '';
  searchInput.dispatchEvent(new window.Event('input', { bubbles: true }));

  // ---- 9. Reset flow ----
  const settingsBtn = doc.getElementById('settings-btn');
  settingsBtn.click();
  const settingsModal = doc.getElementById('settings-modal');
  if (!settingsModal.classList.contains('hidden')) ok('settings modal opens');
  else fail('settings modal did not open');

  doc.getElementById('reset-btn').click();
  const resetConfirmModal = doc.getElementById('reset-confirm-modal');
  if (!resetConfirmModal.classList.contains('hidden')) ok('reset requires a confirmation step');
  else fail('reset confirm modal did not open');

  doc.getElementById('reset-confirm-btn').click();
  // Storage.reset() removes the saved key outright (the in-memory state
  // is repopulated fresh and will persist on the next answer); a null
  // key is therefore the correct post-reset outcome, not a bug.
  const rawAfterReset = window.localStorage.getItem('satVocabTrainer.v1');
  const afterReset = rawAfterReset ? JSON.parse(rawAfterReset) : Storage.emptyState();
  if (Object.keys(afterReset.words).length === 0 && afterReset.stats.questionsAnswered === 0) {
    ok('reset actually clears word records and stats');
  } else fail('reset did not fully clear progress');

  // ---- 10. Review mode with nothing due shows an empty state, not a crash ----
  const reviewTab = doc.querySelector('#main-tabs .tab[data-view="review"]');
  reviewTab.click();
  doc.getElementById('start-session-btn').click();
  const sEmpty = doc.getElementById('session-empty');
  if (!sEmpty.classList.contains('hidden')) ok('Review with nothing due shows the empty state, not a broken screen');
  else fail('Review session should be empty right after a full reset');

  // ---- 11. Question-direction toggle (word <-> definition) ----
  const quizTab = doc.querySelector('#main-tabs .tab[data-view="quiz"]');
  quizTab.click();

  const wordDirBtn = doc.querySelector('.direction-btn[data-direction="word"]');
  const defDirBtn = doc.querySelector('.direction-btn[data-direction="definition"]');
  const mixedDirBtn = doc.querySelector('.direction-btn[data-direction="mixed"]');

  if (wordDirBtn.classList.contains('active')) ok('"Word → Meaning" is the default active direction');
  else fail('expected word-direction to be the default active toggle state');

  defDirBtn.click();
  if (defDirBtn.classList.contains('active') && !wordDirBtn.classList.contains('active')) {
    ok('clicking "Meaning → Word" switches the active toggle state');
  } else fail('direction toggle active state did not update on click');

  const savedAfterToggle = JSON.parse(window.localStorage.getItem('satVocabTrainer.v1'));
  if (savedAfterToggle.settings.questionDirection === 'definition') {
    ok('question direction setting persisted to localStorage');
  } else fail(`expected persisted questionDirection='definition', got '${savedAfterToggle.settings.questionDirection}'`);

  doc.getElementById('start-session-btn').click();
  const qcardWordEl = doc.getElementById('qcard-word');
  const qcardEyebrowEl = doc.getElementById('qcard-eyebrow');
  const firstOptionText = doc.querySelector('#qcard-options .option .option-text');

  if (qcardWordEl.classList.contains('qcard-word--definition')) {
    ok('reverse-mode question card gets the definition-prompt style class');
  } else fail('qcard-word missing the qcard-word--definition class in reverse mode');

  if (qcardEyebrowEl.textContent === 'Which word means this?') {
    ok('reverse-mode eyebrow copy is correct');
  } else fail(`unexpected eyebrow text in reverse mode: "${qcardEyebrowEl.textContent}"`);

  // In reverse mode, the prompt itself should be a definition (some are
  // genuinely terse, e.g. "Interpret." from the merged word lists, so
  // word-count isn't a reliable signal) — verify it's a real definition
  // pulled from the dataset, not accidentally the word itself.
  const promptText = qcardWordEl.textContent.trim();
  const matchesADefinition = VOCAB_DATA.some((w) => w.definition === promptText);
  const matchesAWord = VOCAB_DATA.some((w) => w.word === promptText);
  if (matchesADefinition && !matchesAWord) {
    ok('reverse-mode prompt is a real definition from the dataset, not the bare word');
  } else fail(`reverse-mode prompt doesn't look like a definition: "${promptText}"`);

  if (firstOptionText && firstOptionText.textContent.trim().split(/\s+/).length <= 4) {
    ok('reverse-mode options look like words, not full definitions');
  } else fail(`reverse-mode option text looks too long to be a word: "${firstOptionText && firstOptionText.textContent}"`);

  // Answer it and check the feedback still spells out word + definition.
  doc.querySelector('#qcard-options .option[data-index="0"]').click();
  const fd = doc.getElementById('feedback-detail').textContent;
  if (fd.includes('—')) ok('reverse-mode feedback still shows full word — definition pairs');
  else fail('reverse-mode feedback panel is missing the word — definition breakdown');

  // ---- 12. "Word → Meaning" mode still works after switching back ----
  doc.getElementById('continue-btn').click();
  // End the session by switching tabs (any tab reset re-shows the launcher).
  quizTab.click();
  wordDirBtn.click();
  if (wordDirBtn.classList.contains('active')) ok('can switch back to "Word → Meaning" mode');
  else fail('switching back to word-direction did not update active state');

  doc.getElementById('start-session-btn').click();
  const qcardWordEl2 = doc.getElementById('qcard-word');
  if (!qcardWordEl2.classList.contains('qcard-word--definition')) {
    ok('word-mode question card does not carry the definition-prompt style');
  } else fail('qcard-word incorrectly kept the definition-prompt class in word mode');

  // ---- 13. Credit bar ----
  const creditBar = doc.querySelector('.credit-bar');
  if (creditBar && creditBar.textContent.includes('Prasanna Chandankhede')) {
    ok('credit bar shows "Prasanna Chandankhede"');
  } else fail('credit bar missing or does not mention Prasanna Chandankhede');

  // ---- 14. Theme toggle ----
  const themeBtn = doc.getElementById('theme-toggle-btn');
  const htmlEl = doc.documentElement;

  if (!htmlEl.hasAttribute('data-theme')) {
    ok('dark is the default theme (no data-theme attribute needed)');
  } else fail(`expected no data-theme attribute by default, got "${htmlEl.getAttribute('data-theme')}"`);

  themeBtn.click();
  if (htmlEl.getAttribute('data-theme') === 'light') {
    ok('clicking the theme toggle switches to light theme (data-theme="light")');
  } else fail(`expected data-theme="light" after toggling, got "${htmlEl.getAttribute('data-theme')}"`);

  const savedAfterThemeToggle = JSON.parse(window.localStorage.getItem('satVocabTrainer.v1'));
  if (savedAfterThemeToggle.settings.theme === 'light') {
    ok('theme preference persisted to localStorage');
  } else fail(`expected persisted theme='light', got '${savedAfterThemeToggle.settings.theme}'`);

  const sunIcon = doc.getElementById('theme-icon-sun');
  const moonIcon = doc.getElementById('theme-icon-moon');
  if (!sunIcon.classList.contains('hidden') && moonIcon.classList.contains('hidden')) {
    ok('sun icon shows (moon hidden) after switching to light theme');
  } else fail('theme icon swap did not update correctly after switching to light');

  themeBtn.click();
  if (!htmlEl.hasAttribute('data-theme')) {
    ok('toggling again switches back to dark theme');
  } else fail(`expected data-theme removed after toggling back to dark, got "${htmlEl.getAttribute('data-theme')}"`);

  // ---- 15. Anti-repeat: a fresh session shouldn't immediately re-lead ----
  // with words just answered in the session before it, when other due
  // words exist to fill the slate. Uses 'review' mode (unaffected by the
  // separate new-word reservation) and checks SET membership rather than
  // array position, since sessions are now shuffled for presentation
  // variety — position alone can't prove what got selected vs excluded.
  state = Storage.reset();
  const recentDueIds = VOCAB_DATA.slice(0, 8).map(w => w.id);   // 8 words: due AND recently asked
  const staleDueIds = VOCAB_DATA.slice(8, 13).map(w => w.id);   // 5 words: due, NOT recently asked
  for (const id of recentDueIds.concat(staleDueIds)) {
    const rec = Quiz.ensureRecord(state, id);
    SRS.recordAnswer(rec, false, 1); // identical weakness for every word, isolates the recency signal
  }
  const size = 5; // fewer slots than the 13 total due words, so something must be excluded

  const withoutRecency = Quiz.buildSessionQueue(state, size, 'review', []);
  const withoutRecencySet = new Set(withoutRecency);
  const recentCountWithout = recentDueIds.filter(id => withoutRecencySet.has(id)).length;
  if (recentCountWithout === size) {
    ok('sanity check: with no recency info, the tied-weakness queue fills from the recent-due set first (confirms the test setup is meaningful)');
  } else fail(`sanity check failed: expected the unaware queue to fill entirely from the first-seen group, got ${recentCountWithout}/${size}`);

  const withRecency = Quiz.buildSessionQueue(state, size, 'review', recentDueIds);
  const withRecencySet = new Set(withRecency);
  const recentCountWith = recentDueIds.filter(id => withRecencySet.has(id)).length;
  const staleCountWith = staleDueIds.filter(id => withRecencySet.has(id)).length;

  if (recentCountWith < recentCountWithout) {
    ok(`recently-asked due words are de-prioritized in favor of non-recent due words (${recentCountWith}/8 recent words selected, vs ${recentCountWithout}/8 when recency is unknown)`);
  } else fail(`recency de-prioritization had no effect: ${recentCountWith}/8 recent words still selected`);

  if (staleCountWith === staleDueIds.length) {
    ok('all non-recent due words get priority and are fully included when they fit');
  } else fail(`expected all ${staleDueIds.length} non-recent due words to be selected, got ${staleCountWith}`);

  // Edge case: if recent due words are the ONLY content available (no
  // new words, nothing non-recent), the session must still fill up
  // completely from them rather than coming up short.
  const state2 = Storage.reset();
  const smallSetIds = VOCAB_DATA.slice(0, 8).map(w => w.id);
  for (const id of smallSetIds) {
    // Mark every OTHER word as already-mastered-and-not-due, so the
    // only remaining source of questions is this small due set.
  }
  // Simplify: mark all 1000 words as freshly mastered-and-not-due except
  // our 8 target words, which are due and "recent".
  for (const w of VOCAB_DATA) {
    const rec = Quiz.ensureRecord(state2, w.id);
    if (smallSetIds.includes(w.id)) {
      SRS.recordAnswer(rec, false, 1); // due, box 1
    } else {
      // Push far into the future so it's neither new nor due.
      rec.box = 6;
      rec.attempts = 5;
      rec.status = 'mastered';
      rec.dueAt = { type: 'date', at: Date.now() + 1000 * 60 * 60 * 24 * 30 };
    }
  }
  const edgeQueue = Quiz.buildSessionQueue(state2, 8, 'quiz', smallSetIds);
  if (edgeQueue.length === 8) {
    ok('session still fills completely when recently-asked due words are the only content available');
  } else fail(`expected a full 8-word queue as a fallback, got ${edgeQueue.length}`);

  // ---- 16. Live streak badge ----
  state = Storage.reset();
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  const streakBadge = doc.getElementById('session-streak');
  if (streakBadge.classList.contains('hidden')) {
    ok('streak badge starts hidden with no active streak');
  } else fail('streak badge should be hidden at the start of a fresh session');

  // ---- 17. Progress hero actually moves within a single sitting ----
  // Reproduces the reported bug: previously the big hero number tracked
  // "Mastered", which requires real day-gaps to move and so looked
  // frozen at 0 during any single testing session. It should now track
  // "Encountered", which moves on literally the first question answered.
  state = Storage.reset();
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 15; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[0].click();
    doc.getElementById('continue-btn').click();
  }
  const progressTab2 = doc.querySelector('#main-tabs .tab[data-view="progress"]');
  progressTab2.click();
  await wait(800); // let count-up animations settle
  const heroEncounteredText = doc.getElementById('opc-encountered').textContent;
  const heroPct = doc.getElementById('opc-ring-pct').textContent;
  const heroRingOffset = doc.getElementById('opc-ring-fill').style.strokeDashoffset;
  const fullCircumference = String(2 * Math.PI * 52);
  if (heroEncounteredText && !heroEncounteredText.startsWith('0 /')) {
    ok(`Progress hero number moves within a single sitting ("${heroEncounteredText}" words encountered after 15 questions)`);
  } else fail(`Progress hero still stuck at 0 after answering questions — the reported bug is not fixed (got "${heroEncounteredText}")`);
  if (heroPct !== '0%') {
    ok(`Progress hero percentage moves too (${heroPct})`);
  } else fail('Progress hero percentage still shows 0% after answering questions');
  if (heroRingOffset !== fullCircumference && heroRingOffset !== '') {
    ok(`Progress hero ring fill updates (offset ${heroRingOffset})`);
  } else fail(`Progress hero ring did not update (offset="${heroRingOffset}")`);

  const heroMasteredText = doc.getElementById('opc-mastered').textContent;
  if (heroMasteredText !== '') {
    ok(`Progress hero shows a mastered-word count ("${heroMasteredText}")`);
  } else fail('Progress hero mastered count is empty');

  // ---- 18. Dataset merge integrity ----
  const levelCounts = {};
  let starredCount = 0;
  for (const w of VOCAB_DATA) {
    levelCounts[w.level] = (levelCounts[w.level] || 0) + 1;
    if (w.starred) starredCount++;
  }
  if (levelCounts.medium > 0 && levelCounts.hard > 0 && levelCounts.expert > 0) {
    ok(`dataset includes tiered difficulty words (medium=${levelCounts.medium}, hard=${levelCounts.hard}, expert=${levelCounts.expert})`);
  } else fail(`missing difficulty tiers: ${JSON.stringify(levelCounts)}`);
  if (starredCount > 0) {
    ok(`${starredCount} words flagged as having appeared on a real Digital SAT`);
  } else fail('no words flagged with the "starred" (real-SAT) attribute');

  const zealous = VOCAB_DATA.find(w => w.word === 'Zealous');
  const verisim = VOCAB_DATA.find(w => w.word === 'Verisimilitude');
  const copious = VOCAB_DATA.find(w => w.word === 'Copious');
  if (zealous && verisim && copious) {
    ok('spot-checked words from both new sources and the original list are all present');
  } else fail(`missing expected words: zealous=${!!zealous} verisimilitude=${!!verisim} copious=${!!copious}`);

  // ---- 19. Repetition fix: no single word can dominate a session ----
  // Reproduces the exact bug report with a worst-case (always-wrong)
  // answering pattern and checks that variety is now reasonable rather
  // than a handful of words cycling through most of the session.
  state = Storage.reset();
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  const repetitionWords = [];
  for (let i = 0; i < 25; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    repetitionWords.push(doc.getElementById('qcard-word').textContent);
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[0].click(); // worst case: index 0 is correct only ~25% of the time
    doc.getElementById('continue-btn').click();
  }
  const distinctRatio = new Set(repetitionWords).size / repetitionWords.length;
  if (distinctRatio >= 0.4) {
    ok(`session variety holds up even under a high-error worst case (${new Set(repetitionWords).size}/${repetitionWords.length} distinct words, ${Math.round(distinctRatio * 100)}%)`);
  } else fail(`too much repetition even after the fix: only ${new Set(repetitionWords).size}/${repetitionWords.length} distinct words (${Math.round(distinctRatio * 100)}%)`);

  // No word should be asked more than (1 original + RETRY_CAP_PER_SESSION) times.
  const counts = {};
  repetitionWords.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
  const maxRepeats = Math.max(...Object.values(counts));
  if (maxRepeats <= 3) {
    ok(`no single word was asked more than ${maxRepeats} times in one session (retry cap holding)`);
  } else fail(`a word was asked ${maxRepeats} times in one session — retry cap not enforced`);

  // ---- 20. Difficulty-aware distractors ----
  // An 'expert' word's wrong answers should skew toward other tiered
  // (non-'general') words rather than random easy ones, making them
  // genuinely more confusing rather than an easy giveaway by feel.
  state = Storage.reset();
  const expertWords = VOCAB_DATA.filter(w => w.level === 'expert').slice(0, 30);
  let tieredDistractorCount = 0;
  let totalDistractorCount = 0;
  for (const w of expertWords) {
    const q = Quiz.generateQuestion(state, w.id, 'word');
    if (!q) continue;
    q.options.filter(o => !o.correct).forEach(o => {
      const optWord = VOCAB_DATA.find(v => v.id === o.id);
      totalDistractorCount++;
      if (optWord.level !== 'general') tieredDistractorCount++;
    });
  }
  const tieredRatio = tieredDistractorCount / totalDistractorCount;
  if (tieredRatio > 0.3) {
    ok(`expert-word distractors meaningfully favor other tiered words (${tieredDistractorCount}/${totalDistractorCount}, ${Math.round(tieredRatio * 100)}%) rather than random general words`);
  } else fail(`distractors for expert words barely use other tiered words (${Math.round(tieredRatio * 100)}%) — difficulty-awareness not working`);

  // ---- 21. Detailed end-of-session review ----
  state = Storage.reset();
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  let stepsForReview = 0;
  for (let i = 0; i < 60; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[stepsForReview % 2 === 0 ? 0 : 1].click(); // mix of right/wrong
    doc.getElementById('continue-btn').click();
    stepsForReview++;
  }
  const summaryHidden = doc.getElementById('session-summary').classList.contains('hidden');
  if (!summaryHidden) ok(`session actually completed for the review test (${stepsForReview} questions)`);
  else fail('session summary never appeared — review test setup is invalid');

  const reviewRows = doc.querySelectorAll('#session-review .review-row');
  if (reviewRows.length > 0) {
    ok(`detailed review lists ${reviewRows.length} distinct words from the session`);
  } else fail('detailed review is empty after a completed session');

  const missedRows = doc.querySelectorAll('#session-review .review-row--missed');
  const correctRows = doc.querySelectorAll('#session-review .review-row--correct');
  if (missedRows.length + correctRows.length === reviewRows.length) {
    ok('every review row is categorized as either missed or correct');
  } else fail(`review row categorization mismatch: ${missedRows.length} missed + ${correctRows.length} correct != ${reviewRows.length} total`);

  if (missedRows.length > 0) {
    const firstMissed = missedRows[0];
    const hasChosenText = firstMissed.querySelector('.review-chosen');
    if (hasChosenText && hasChosenText.textContent.includes('You answered')) {
      ok('missed words in the review show what was actually chosen');
    } else fail('missed word review row is missing the "what you chose" detail');
  }

  // ---- 21. End-of-session detailed review ----
  state = Storage.reset();
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  const reviewHtml = doc.getElementById('session-review').innerHTML;
  if (reviewHtml.length > 0) ok('end-of-session review screen renders content');
  else fail('end-of-session review screen is empty after a completed session');
  if (reviewHtml.includes('review-row--missed') || reviewHtml.includes('review-row--correct')) {
    ok('review screen shows per-word right/wrong detail');
  } else fail('review screen missing per-word detail rows');

  // ---- 22. Profile dashboard ----
  progressTab2.click();
  const rankText = doc.getElementById('profile-rank').textContent;
  if (rankText && rankText.length > 0) ok(`profile shows a rank ("${rankText}")`);
  else fail('profile rank is empty');

  const sinceText = doc.getElementById('profile-since').textContent;
  if (/\d{4}/.test(sinceText)) ok(`profile shows a "studying since" date ("${sinceText}")`);
  else fail(`profile "since" text looks wrong: "${sinceText}"`);

  const tierHtml = doc.getElementById('tier-bars').innerHTML;
  if (tierHtml.includes('Medium') && tierHtml.includes('Hard') && tierHtml.includes('Expert')) {
    ok('tier-progress bars show all three difficulty tiers');
  } else fail('tier-progress bars missing expected difficulty tiers');

  const achievementsHtml = doc.getElementById('achievements-grid').innerHTML;
  const unlockedCount = (achievementsHtml.match(/is-unlocked/g) || []).length;
  if (unlockedCount >= 1) ok(`at least one achievement unlocked after real activity (${unlockedCount})`);
  else fail('no achievements unlocked despite completing sessions and answering questions');

  const sessionLogHtml = doc.getElementById('session-log').innerHTML;
  if (sessionLogHtml.includes('session-log-row')) {
    ok('session log shows completed sessions');
  } else fail('session log does not show the session that was just completed');

  // Fresh profile: achievements should show as locked, session log empty.
  // Must go through the real reset button — calling Storage.reset()
  // directly only clears localStorage, not the app's own live state
  // closure, so the rendered DOM would still reflect the old session.
  settingsBtn.click();
  doc.getElementById('reset-btn').click();
  doc.getElementById('reset-confirm-btn').click();
  progressTab2.click();
  const freshAchievements = doc.getElementById('achievements-grid').innerHTML;
  const freshUnlocked = (freshAchievements.match(/is-unlocked/g) || []).length;
  if (freshUnlocked === 0) ok('fresh profile shows zero unlocked achievements');
  else fail(`fresh profile should have 0 unlocked achievements, got ${freshUnlocked}`);

  const freshLog = doc.getElementById('session-log').innerHTML;
  if (freshLog.includes('No sessions completed yet')) {
    ok('fresh profile shows an empty-state message for session log, not a broken/blank panel');
  } else fail('fresh profile session log missing its empty-state message');

  // ---- 23. Difficulty-tier filter ----
  state = Storage.reset();
  const settingsBtn2 = doc.getElementById('settings-btn');
  settingsBtn2.click();
  const levelChecks = doc.querySelectorAll('#level-filter input[type="checkbox"]');
  if (levelChecks.length === 4) ok('settings shows all 4 difficulty-tier checkboxes');
  else fail(`expected 4 level checkboxes, found ${levelChecks.length}`);

  // Restrict to 'expert' only.
  levelChecks.forEach((cb) => {
    const level = cb.getAttribute('data-level');
    if (level !== 'expert' && cb.checked) cb.click();
  });
  doc.getElementById('close-settings-btn').click();

  quizTab.click();
  doc.getElementById('start-session-btn').click();
  const filteredWords = [];
  for (let i = 0; i < 15; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    filteredWords.push(doc.getElementById('qcard-word').textContent);
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[0].click();
    doc.getElementById('continue-btn').click();
  }
  const filteredLevels = filteredWords.map((w) => {
    const found = VOCAB_DATA.find((v) => v.word === w);
    return found ? found.level : 'UNKNOWN';
  });
  if (filteredWords.length > 0 && filteredLevels.every((l) => l === 'expert')) {
    ok(`restricting to "Expert only" makes every question expert-tier (${filteredWords.length} questions checked)`);
  } else fail(`expected only expert-tier words, got levels: ${filteredLevels.join(', ')}`);

  // Guard: unchecking every tier should snap back and warn, not leave
  // the app with zero eligible words.
  settingsBtn2.click();
  const levelChecks2 = doc.querySelectorAll('#level-filter input[type="checkbox"]');
  levelChecks2.forEach((cb) => { if (cb.checked) cb.click(); });
  const stillOneChecked = Array.from(levelChecks2).some((cb) => cb.checked);
  if (stillOneChecked) ok('cannot uncheck every difficulty tier — at least one stays on');
  else fail('all difficulty tiers got unchecked, which would leave the app with nothing to study');

  const toastVisible = !doc.getElementById('toast').classList.contains('hidden');
  if (toastVisible) ok('a toast explains why the last tier could not be unchecked');
  else fail('no feedback shown when trying to uncheck every tier');

  // Re-enable everything so it doesn't affect anything after this test.
  doc.getElementById('close-settings-btn').click();
  settingsBtn2.click();
  const levelChecks3 = doc.querySelectorAll('#level-filter input[type="checkbox"]');
  levelChecks3.forEach((cb) => { if (!cb.checked) cb.click(); });
  doc.getElementById('close-settings-btn').click();

  // ---- 24. Reduced-motion accessibility fix ----
  // jsdom can't evaluate prefers-reduced-motion behaviorally, so this
  // checks the CSS source directly: the homepage animation sets initial
  // opacity:0, so disabling animations under prefers-reduced-motion
  // must also force opacity:1 back on, or those users see a blank page.
  const cssText = fs.readFileSync(path.join(root, 'css/styles.css'), 'utf8');
  const reducedMotionBlock = cssText.slice(cssText.indexOf('prefers-reduced-motion'));
  const hasOpacityFix = /\.home-logo[^}]*opacity:\s*1/s.test(reducedMotionBlock.slice(0, 500));
  if (hasOpacityFix) {
    ok('reduced-motion override restores homepage opacity (no invisible-content trap)');
  } else fail('reduced-motion block does not restore opacity on animated homepage elements — would leave the page blank for those users');

  // ---- 25. Word of the Day ----
  state = Storage.reset();
  const homeTab = doc.querySelector('#main-tabs .tab[data-view="home"]');
  homeTab.click();
  const wotdWordEl = doc.getElementById('wotd-word');
  const wotdDefEl = doc.getElementById('wotd-def');
  const firstWord = wotdWordEl.textContent;
  if (firstWord && firstWord !== '\u2014' && wotdDefEl.textContent.length > 0) {
    ok(`Word of the Day shows a real word with a definition ("${firstWord}")`);
  } else fail(`Word of the Day looks broken: word="${firstWord}" def="${wotdDefEl.textContent}"`);

  doc.querySelector('#main-tabs .tab[data-view="study"]').click();
  homeTab.click();
  if (doc.getElementById('wotd-word').textContent === firstWord) {
    ok('Word of the Day stays the same across repeated visits the same day');
  } else fail('Word of the Day changed between two visits on the same day');

  // ---- 26. Floating word chips (decorative) ----
  const chipCount = doc.querySelectorAll('.home-chip').length;
  if (chipCount > 0) ok(`homepage renders decorative word chips (${chipCount})`);
  else fail('no decorative word chips rendered on the homepage');

  // ---- 27. Mini-dashboard streak + welcome-back card, before and after a session ----
  const miniDashStreakBefore = doc.getElementById('mini-dash-streak-num').textContent;
  if (miniDashStreakBefore === '0') {
    ok('mini-dashboard streak shows 0 on a fresh profile with no study history');
  } else fail(`expected mini-dashboard streak to start at 0, got "${miniDashStreakBefore}"`);

  if (doc.getElementById('welcome-card').classList.contains('hidden')) {
    ok('welcome-back card hidden on a fresh profile with no study history');
  } else fail('welcome-back card should be hidden before any session is completed');

  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  await wait(50); // let the achievement-toast setTimeout queue flush

  homeTab.click();
  const miniDashStreakAfter = doc.getElementById('mini-dash-streak-num').textContent;
  if (miniDashStreakAfter !== '0') {
    ok(`mini-dashboard streak updates after completing a session ("${miniDashStreakAfter}")`);
  } else fail('mini-dashboard streak still shows 0 after completing a session');

  if (!doc.getElementById('welcome-card').classList.contains('hidden')) {
    ok(`welcome-back card appears after completing a session ("${doc.getElementById('welcome-text').textContent}")`);
  } else fail('welcome-back card still hidden after completing a session');

  // ---- 28. Achievement unlock celebration (confetti + toast) ----
  const savedAfterSession = JSON.parse(window.localStorage.getItem('satVocabTrainer.v1'));
  if ((savedAfterSession.unlockedAchievements || []).includes('first-steps')) {
    ok('"First Steps" achievement gets recorded as unlocked after the first session');
  } else fail('first-session achievement was not persisted');

  const toastText = doc.getElementById('toast').textContent;
  if (toastText.includes('Achievement unlocked')) {
    ok(`a toast celebrates the newly-unlocked achievement ("${toastText}")`);
  } else fail(`expected an achievement-unlock toast, got "${toastText}"`);

  // A second session shouldn't re-celebrate the same achievement.
  doc.getElementById('toast').classList.add('hidden');
  doc.getElementById('toast').textContent = '';
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  await wait(50);
  const toastAfterSecondSession = doc.getElementById('toast').textContent;
  if (!toastAfterSecondSession.includes('First Steps')) {
    ok('an already-unlocked achievement is not celebrated a second time');
  } else fail('"First Steps" was celebrated again on a later session');

  // ---- 29. Study performance chart ----
  settingsBtn2.click();
  doc.getElementById('reset-btn').click();
  doc.getElementById('reset-confirm-btn').click();
  homeTab.click();
  const progressTab3 = doc.querySelector('#main-tabs .tab[data-view="progress"]');
  progressTab3.click();
  await wait(200);
  const chartEmptyHtml = doc.getElementById('performance-chart').innerHTML;
  if (chartEmptyHtml.includes('chart-empty')) {
    ok('performance chart shows an empty state with zero sessions');
  } else fail('performance chart should show an empty state on a fresh profile');

  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  progressTab3.click();
  await wait(200);
  const chartOneSessionHtml = doc.getElementById('performance-chart').innerHTML;
  if (chartOneSessionHtml.includes('chart-empty') && chartOneSessionHtml.includes('%')) {
    ok('performance chart shows a "need one more session" message after exactly one session, with the real accuracy');
  } else fail(`performance chart single-session state looks wrong: "${chartOneSessionHtml.slice(0, 100)}"`);

  quizTab.click();
  doc.getElementById('start-session-btn').click();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  progressTab3.click();
  await wait(200);
  const chartSvg = doc.querySelector('#performance-chart svg');
  if (chartSvg) ok('performance chart renders an actual SVG line after 2+ sessions');
  else fail('performance chart should render an SVG once there are 2+ sessions');

  const chartDots = doc.querySelectorAll('#performance-chart .chart-dot');
  if (chartDots.length === 2) {
    ok(`performance chart plots one dot per session (${chartDots.length} dots for 2 sessions)`);
  } else fail(`expected 2 chart dots for 2 sessions, got ${chartDots.length}`);

  const linePoints = doc.querySelector('#performance-chart .chart-line').getAttribute('points');
  const coordPairs = linePoints.trim().split(' ');
  const validCoords = coordPairs.every((pair) => {
    const [x, y] = pair.split(',').map(Number);
    return Number.isFinite(x) && Number.isFinite(y) && x >= 0 && y >= 0;
  });
  if (validCoords && coordPairs.length === 2) {
    ok(`performance chart line has valid, finite coordinates ("${linePoints}")`);
  } else fail(`performance chart line coordinates look invalid: "${linePoints}"`);

  // ---- 30. Session-length picker ----
  homeTab.click();
  quizTab.click();
  const lenBtn10 = doc.querySelector('.length-btn[data-length="10"]');
  lenBtn10.click();
  if (lenBtn10.classList.contains('active')) {
    ok('picking a preset session length marks it active');
  } else fail('length preset button did not become active on click');

  const savedAfterLength = JSON.parse(window.localStorage.getItem('satVocabTrainer.v1'));
  if (savedAfterLength.settings.sessionSize === 10) {
    ok('session length choice persisted to settings.sessionSize');
  } else fail(`expected sessionSize=10, got ${savedAfterLength.settings.sessionSize}`);

  const customLenInput = doc.getElementById('length-custom-input');
  customLenInput.value = '15';
  customLenInput.dispatchEvent(new window.Event('change', { bubbles: true }));
  if (!lenBtn10.classList.contains('active') && customLenInput.classList.contains('active')) {
    ok('entering a custom length deactivates the presets and highlights the custom field');
  } else fail('custom length input did not correctly become the active choice');

  // reset back to a normal preset so later tests use a predictable size
  doc.querySelector('.length-btn[data-length="20"]').click();

  // ---- 31. Direction explanation + example ----
  const explainEl = doc.getElementById('direction-explain');
  doc.querySelector('.direction-btn[data-direction="word"]').click();
  const wordExplain = explainEl.textContent;
  doc.querySelector('.direction-btn[data-direction="definition"]').click();
  const defExplain = explainEl.textContent;
  doc.querySelector('.direction-btn[data-direction="mixed"]').click();
  const mixedExplain = explainEl.textContent;
  if (wordExplain.length > 20 && defExplain.length > 20 && mixedExplain.length > 20) {
    ok('every question-direction option has a real explanation shown');
  } else fail(`one or more direction explanations look empty/too short: word="${wordExplain}" def="${defExplain}" mixed="${mixedExplain}"`);
  if (wordExplain !== defExplain && defExplain !== mixedExplain) {
    ok('each direction shows a distinct explanation, not a copy-pasted generic one');
  } else fail('direction explanations are not actually distinct per option');
  if (/["“].*["”]/.test(wordExplain) || wordExplain.includes('Example')) {
    ok('word-direction explanation includes a concrete example');
  } else fail(`word-direction explanation missing an example: "${wordExplain}"`);
  doc.querySelector('.direction-btn[data-direction="word"]').click(); // reset for later tests

  // ---- 32. Per-question timer ----
  doc.querySelector('.length-btn[data-length="10"]').click();
  doc.getElementById('start-session-btn').click(); // name already set by an earlier test
  const timerText = doc.getElementById('question-timer-text');
  if (timerText.textContent === '00:00') {
    ok('question timer starts at 00:00 for a fresh question');
  } else fail(`question timer should start at 00:00, got "${timerText.textContent}"`);

  await wait(1100); // let the 1-second tick fire at least once
  const tickedText = timerText.textContent;
  if (tickedText !== '00:00') {
    ok(`question timer ticks upward while unanswered (now "${tickedText}")`);
  } else fail('question timer did not tick after 1+ seconds');

  const optsForTimer = doc.querySelectorAll('#qcard-options .option');
  optsForTimer[0].click();
  const frozenAt = timerText.textContent;
  await wait(1100);
  if (timerText.textContent === frozenAt) {
    ok('question timer freezes the instant an answer is picked, not still running during feedback');
  } else fail(`timer kept running after an answer was picked: was "${frozenAt}", now "${timerText.textContent}"`);

  doc.getElementById('continue-btn').click();
  if (timerText.textContent === '00:00') {
    ok('question timer resets to 00:00 on the next question');
  } else fail(`timer should reset on the next question, got "${timerText.textContent}"`);

  // Finish this session and confirm timing data reaches the review screen.
  for (let i = 0; i < 60; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  const timedReviewHtml = doc.getElementById('session-review').innerHTML;
  if (timedReviewHtml.includes('review-timing') && timedReviewHtml.includes('Total time')) {
    ok('end-of-session review includes a timing summary (total/avg/fastest/slowest)');
  } else fail('end-of-session review is missing the timing summary block');
  if (timedReviewHtml.includes('review-time')) {
    ok('per-word review rows include an individual time badge');
  } else fail('per-word review rows are missing individual time badges');

  // ---- 33. Word of the Day shows directly, but can still be collapsed ----
  homeTab.click();
  const wotdCollapse = doc.getElementById('wotd-collapse');
  const wotdToggleBtn = doc.getElementById('wotd-toggle');
  if (wotdCollapse.classList.contains('is-open') && wotdToggleBtn.getAttribute('aria-expanded') === 'true') {
    ok('Word of the Day shows directly by default, no click required');
  } else fail('Word of the Day should be expanded by default');

  const wotdWordText = doc.getElementById('wotd-word').textContent;
  const wotdDefText = doc.getElementById('wotd-def').textContent;
  if (wotdWordText && wotdWordText !== '\u2014' && wotdDefText.length > 0) {
    ok(`Word of the Day shows a real word and definition immediately ("${wotdWordText}")`);
  } else fail(`Word of the Day content looks empty: word="${wotdWordText}" def="${wotdDefText}"`);

  wotdToggleBtn.click();
  if (!wotdCollapse.classList.contains('is-open')) {
    ok('clicking the icon can still collapse Word of the Day away');
  } else fail('Word of the Day did not collapse on click');

  wotdToggleBtn.click();
  if (wotdCollapse.classList.contains('is-open')) {
    ok('clicking again re-expands Word of the Day');
  } else fail('Word of the Day did not re-expand on a second click');

  // ---- 34. Mastery breakdown donut chart ----
  settingsBtn2.click();
  doc.getElementById('reset-btn').click();
  doc.getElementById('reset-confirm-btn').click();
  progressTab3.click();
  const donutBg = doc.getElementById('mastery-donut').style.background;
  if (donutBg.includes('conic-gradient')) {
    ok('mastery donut renders a conic-gradient even on a fresh all-New profile (single-status edge case)');
  } else fail(`mastery donut did not render on a fresh profile: background="${donutBg}"`);
  const donutTotalText = doc.getElementById('donut-total').textContent;
  if (donutTotalText === '1,500') {
    ok(`donut center shows the correct total word count (${donutTotalText})`);
  } else fail(`donut total shows "${donutTotalText}", expected "1,500"`);

  // ---- 35. By-difficulty table ----
  const tierRows = doc.querySelectorAll('#tier-bars .tier-row');
  if (tierRows.length === 3) ok('difficulty table shows exactly 3 tiers (Medium/Hard/Expert)');
  else fail(`expected 3 tier rows, got ${tierRows.length}`);
  const firstTierAcc = tierRows[0].querySelector('.tier-acc').textContent;
  if (firstTierAcc === '\u2014') {
    ok('difficulty table shows an em-dash for accuracy when no attempts exist yet, not a misleading 0%');
  } else fail(`expected "\u2014" for no-data accuracy, got "${firstTierAcc}"`);

  // ---- 36. Achievement descriptions are visible (not just a tooltip) ----
  const firstAchievementDesc = doc.querySelector('#achievements-grid .achievement-desc');
  if (firstAchievementDesc && firstAchievementDesc.textContent.length > 0 && getComputedStyleSafe(firstAchievementDesc) !== 'none') {
    ok(`achievement descriptions are visible in the card, not hidden ("${firstAchievementDesc.textContent}")`);
  } else fail('achievement description is missing or hidden');

  function getComputedStyleSafe(el) {
    try { return window.getComputedStyle(el).display; } catch (e) { return 'block'; }
  }

  // ---- 37. Total (1,500) drives calculations consistently everywhere ----
  settingsBtn2.click();
  doc.getElementById('reset-btn').click();
  doc.getElementById('reset-confirm-btn').click();
  const homeStatEl = doc.getElementById('home-stat-encountered');
  homeTab.click();
  await wait(800); // let the count-up animation settle
  if (homeStatEl.textContent === '0/1500') {
    ok('homepage stat shows the real 1,500-word total');
  } else fail(`homepage stat shows "${homeStatEl.textContent}", expected "0/1500"`);

  progressTab3.click();
  await wait(200);
  const heroEncounteredNow = doc.getElementById('opc-encountered').textContent;
  if (heroEncounteredNow === '0 / 1,500') {
    ok('Progress ring shows the real 1,500-word total');
  } else fail(`Progress ring shows "${heroEncounteredNow}", expected "0 / 1,500"`);

  // The breakdown legend (New/Learning/Review/Familiar/Mastered) must
  // sum to exactly the total word count.
  const breakdownCounts = Array.from(doc.querySelectorAll('#breakdown-bars .b-count'))
    .map((el) => parseInt(el.textContent, 10));
  const breakdownSum = breakdownCounts.reduce((a, b) => a + b, 0);
  if (breakdownSum === 1500) {
    ok(`mastery breakdown counts sum to exactly the total (${breakdownSum})`);
  } else fail(`mastery breakdown counts sum to ${breakdownSum}, expected 1500`);

  // Do a real session and confirm "encountered" reflects genuine
  // progress against real words.
  quizTab.click();
  doc.getElementById('start-session-btn').click();
  const answeredWords = new Set();
  for (let i = 0; i < 80; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    answeredWords.add(doc.getElementById('qcard-word').textContent);
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  progressTab3.click();
  await wait(200);
  const encounteredAfter = Number(doc.getElementById('opc-encountered').textContent.split(' / ')[0].replace(/,/g, ''));
  if (encounteredAfter > 0 && encounteredAfter <= answeredWords.size) {
    ok(`encountered count after a real session stays accurate to actual distinct words touched (${encounteredAfter})`);
  } else fail(`encountered count looks wrong after a session: ${encounteredAfter} (touched ${answeredWords.size} distinct words)`);

  // ---- 38. Custom session length applies even without blurring the field first ----
  // Regression test: typing a custom length and clicking Start
  // immediately (before the field loses focus) used to silently
  // discard the typed value and fall back to the default 20, because
  // it only applied on 'change' (fires on blur), not while typing.
  quizTab.click();
  const customLenInput2 = doc.getElementById('length-custom-input');
  customLenInput2.value = '4';
  customLenInput2.dispatchEvent(new window.Event('input', { bubbles: true }));
  customLenInput2.value = '35';
  customLenInput2.dispatchEvent(new window.Event('input', { bubbles: true }));
  if (customLenInput2.value === '35') {
    ok('typing into the custom length field does not get rewritten mid-keystroke');
  } else fail(`custom length field was rewritten while typing: "${customLenInput2.value}"`);

  doc.getElementById('start-session-btn').click(); // name already set by an earlier test
  const quizTotalAfterTyped = doc.getElementById('session-q-total').textContent;
  if (quizTotalAfterTyped === '35') {
    ok('Quiz session uses the typed custom length even without blurring the field first');
  } else fail(`Quiz session-q-total shows "${quizTotalAfterTyped}", expected "35" (the typed value)`);

  let quizTypedCount = 0;
  for (let i = 0; i < 200; i++) {
    if (doc.getElementById('session-active').classList.contains('hidden')) break;
    quizTypedCount++;
    const opts = doc.querySelectorAll('#qcard-options .option');
    if (!opts.length) break;
    opts[Math.floor(Math.random() * 4)].click();
    doc.getElementById('continue-btn').click();
  }
  if (quizTypedCount >= 35) {
    ok(`Quiz session actually asked at least the typed 35 questions (asked ${quizTypedCount})`);
  } else fail(`Quiz session only asked ${quizTypedCount} questions, expected at least 35`);

  // Same check for Review.
  reviewTab.click();
  const customLenInput3 = doc.getElementById('length-custom-input');
  customLenInput3.value = '32';
  customLenInput3.dispatchEvent(new window.Event('input', { bubbles: true }));
  doc.getElementById('start-session-btn').click();
  const reviewTotalAfterTyped = doc.getElementById('session-q-total').textContent;
  if (reviewTotalAfterTyped === '32') {
    ok('Review session uses the typed custom length even without blurring the field first');
  } else fail(`Review session-q-total shows "${reviewTotalAfterTyped}", expected "32" (the typed value)`);

  console.log('\nDone.');
}

main().catch((err) => {
  console.error('CRASH:', err);
  process.exitCode = 1;
});
