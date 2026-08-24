# SAT Verbatim™

Built for **Prasanna Chandankhede**.

A serious SAT vocabulary trainer covering **1,500 words** across every
difficulty tier the Digital SAT actually tests, with multiple-choice
testing and a real spaced-repetition system behind it — not just a
click-through of flashcards.

---

## 1. What it does

- **Home** — a landing page with your current progress at a glance and
  quick links into Study, Quiz, and Review.
- **Study** — browse all 1,500 words and definitions, searchable and
  filterable by how well you know each one.
- **Quiz** — the core learning loop. You're shown a word and four
  possible definitions (or, in reverse mode, a definition and four
  possible words — see below); pick one. Get it right and it's
  reinforced; get it wrong and you're shown what you picked, the correct
  answer, and the meaning of *all four* options, so you understand the
  mistake, not just that you made one. Wrong answers are drawn from
  words at the same difficulty tier as the one you're being tested on,
  so they're genuinely confusable rather than an easy giveaway.
- **Question direction** — a toggle above "Start session" lets you pick
  which way each question runs: **Word → Meaning** (shown a word, pick
  the definition — the original/default mode), **Meaning → Word** (shown
  a definition, pick the word), or **Mixed** (each question randomly
  picks one of the two). The setting is remembered between visits and
  applies to both Quiz and Review sessions. A word's mastery progress is
  shared across both directions — getting it right either way counts.
- **Review** — the same testing screen, but restricted to words that are
  currently due for review (weak or overdue), so you can focus a session
  purely on shoring up gaps.
- **Session review** — every session ends with a detailed breakdown:
  which words you got right, which you missed and what you answered
  instead, not just a final score.
- **Progress** — a full profile dashboard: a rank that grows with your
  mastered-word count, progress bars broken out by difficulty tier,
  achievement badges tied to real activity (streaks, accuracy,
  milestones), a log of recent sessions, and the underlying stats
  (accuracy, streaks, mastery breakdown) across all 1,500 words.
- **Difficulty filter** — in Settings, choose which tiers (General,
  Medium, Hard, Expert) are eligible to show up in Quiz and Review, so
  you can dial the challenge up or down.
- **Light and dark theme** — a sun/moon toggle next to the settings gear.
  Dark is the default (a warm charcoal, not flat black); light restores
  the original white-page-with-burgundy-headwords look. Your choice is
  remembered.

Missed words don't just vanish and don't reappear immediately either —
they come back a handful of questions later in the same session, up to
a per-session limit so a run of misses can't crowd out the rest of the
session's content, and if you keep missing a word across sessions it
shows up more often than words you already know. Words you get right
repeatedly, including after a day or more has passed, get tagged
**Mastered** and stop showing up regularly. The app also keeps a short
memory of whatever you were just asked, so hitting "Keep studying"
right after finishing a session won't just replay the tail of that
session as the start of the next one — the same words are still eligible
to come back, just not first in line ahead of fresher content.

## 2. Running it

No build step, no server required.

```
open index.html
```

...or, on Windows, double-click `index.html`. It runs entirely in your
browser.

If you'd rather serve it (some browsers are stricter about local files):

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Deploying it

It's a static site — three folders (`css/`, `js/`, plus `index.html`).
Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages,
or just a folder on a USB stick. There is nothing to configure and no
environment variables — drag the folder in and it works.

## 4. Where your progress is stored

In your browser's `localStorage`, under the key `satVocabTrainer.v1`.
That means:

- Progress is **per browser, per device** — it does not sync between
  your phone and your laptop, or between Chrome and Safari on the same
  machine, unless you export/import manually (see below).
- Clearing your browser's site data for this page will erase progress.
- Nothing is ever sent anywhere. There's no network request in this app
  at all beyond loading the page itself.

If saved data is ever missing, unreadable, or shaped unexpectedly (for
example, from an interrupted write or an old version of the app), the
app detects that and starts fresh automatically rather than showing a
broken screen.

### Backing up or moving your progress

Your browser's dev tools → Application/Storage → Local Storage → find
the key `satVocabTrainer.v1` → copy the value. To restore it (in the
same browser or a different one), open dev tools' console on the page
and run:

```js
localStorage.setItem('satVocabTrainer.v1', /* paste the JSON string here */);
```

then refresh.

## 5. How the spaced-repetition system works

Every word carries a small progress record: a **box** from 0–6 (a
Leitner-style ladder), plus attempt counts, streaks, and a "due" marker.

| Box | Meaning | Reappears |
|---|---|---|
| 0 | New — never attempted | shown as a "new" word |
| 1–2 | Just introduced, or just missed | 3–12 *questions* later, same or next session |
| 3 | Right twice in a row | 1 day later |
| 4 | Right after a 1-day gap | 3 days later |
| 5 | Right after a 3-day gap | 7 days later |
| 6 | Right after a 7-day gap | **Mastered** — checked again every 21 days |

Rules:

- **A correct answer moves a word up one box.** Low boxes (1–2) use a
  short, in-session countdown (a handful of *other questions*, not a
  fixed time), so a word you just learned gets reinforced again before
  the session ends. Boxes 3 and up switch to real day-scale intervals,
  so well-known words stop cluttering every session.
- **A wrong answer drops a word back two boxes** (never below 1, since
  it's now been seen). This is what makes struggling words show up more
  often, and why reaching Mastered isn't permanent — a slip later pulls
  a word back into active review.
- **A missed word is never immediately re-asked.** It's reinserted into
  the queue a random 3–5 questions later (or 8–12 after a successful
  review), so you see something else in between — closer to how you'd
  actually study with real flashcards.
- **A session can't grow without bound.** If you're missing a lot of
  words in a row, requeuing is capped; anything that doesn't fit is
  simply due again the instant your *next* session starts, rather than
  padding one session out indefinitely.
- **The five status labels** (New / Learning / Needs Review / Familiar /
  Mastered) are a direct read of a word's box and whether its most
  recent answer was right or wrong.

This logic lives entirely in `js/srs.js`, independent of the UI — it's a
small, self-contained state machine if you ever want to tune the
intervals.

## 6. Answer choices (distractors)

The three wrong options for any question are real definitions of *other*
words in the list, not made-up nonsense — so a question is actually
testing recognition, not just spotting the obviously fake answer.
`js/quiz.js` scores every candidate distractor on two things: how close
its definition length is to the correct one (so an answer isn't a
giveaway just because it's much longer or shorter), and how close its
difficulty tier is to the target word's — a Hard word's wrong answers
skew toward other Hard/Expert words rather than an easy giveaway sitting
next to it. It also avoids repeating the exact same wrong-answer
combination twice in a row for the same word, and includes safeguards
that regenerate a question rather than ever show one with a missing
definition, a duplicate option, or more than one correct answer.

## 7. Project structure

```
index.html          Page shell — nav, all view containers, modals
css/styles.css       All styling (palette below)
js/data.js            The 1,500-word dataset (word, definition, difficulty tier, starred)
js/storage.js         localStorage read/write, versioning, error recovery
js/srs.js              Spaced-repetition engine (see section 5)
js/quiz.js             Session-queue building + question generation
js/ui.js                 Pure rendering helpers (no state)
js/app.js               App state + all event wiring
test/run.js            Headless functional test (see below)
```

No framework, no bundler, no `npm install` needed to run the app itself
(only the optional test suite uses a dependency — see below).

## 8. Modifying the vocabulary list

Everything lives in `js/data.js` as one array:

```js
const VOCAB_DATA = [
  { id: 1, word: "Copious", definition: "Abundant in supply or quantity.", level: "general", starred: true },
  ...
];
```

`level` is one of `"general" | "medium" | "hard" | "expert"` — it drives
both the difficulty filter in Settings and how distractors are chosen.
`starred` marks a word as having appeared on a real Digital SAT (shown
nowhere in the UI yet beyond informing distractor/mastery logic, but
available if you want to surface it later). To use a different list:
replace the array with your own entries in the same shape (ids just need
to be unique integers; `level`/`starred` can be omitted — anything
missing is treated as `"general"`/`false`). Nothing else in the app
hard-codes any specific word — the UI, quiz generation, and progress
tracking all key off `state.words[id]`, so a new dataset works
immediately. If you shrink the list a lot, distractor variety will drop
somewhat (the app draws wrong answers from the same list), but it'll
still function correctly down to a handful of words.

## 9. Settings

The question-direction toggle (Word → Meaning / Meaning → Word / Mixed)
lives directly on the Quiz/Review launcher screen, since it's something
you're likely to change often. The gear icon (top right) opens the rest:

- **Words per session** — how large a session's starting queue is
  (missed words can still extend it slightly, as described above).
- **Word difficulty** — checkboxes for General / Medium / Hard / Expert.
  Unchecking a tier excludes it from new Quiz/Review sessions (Study
  still shows everything, so you can always look a word up). At least
  one tier always has to stay checked.
- **Reset progress** — erases every word's mastery data and your
  statistics. Requires a confirmation step; the word list itself is
  never affected by a reset.

## 10. Keyboard shortcuts

While a question is on screen: `1`–`4` picks that answer. Once feedback
is showing: `Enter` continues to the next question. These don't fire
while you're typing in the Study tab's search box.

## 11. Running the test suite (optional)

A headless functional test drives the real app (not a mock) through a
full session — dataset integrity, question-generation safeguards across
all 1,500 words, a simulated quiz session including both right and wrong
answers, persistence, corrupted-storage recovery, search/filter, and the
reset flow.

```
npm install       # installs jsdom, the only dependency, for this test only
node test/run.js
```

## 12. Design notes

The palette is pulled directly from the source PDF: the burgundy
(`#8C1D2C`) used for every headword in the original source list, its
near-black body text, and its warm-gray secondary text, on a plain white
page. Green and amber are the only colors added beyond the source
document — they exist purely to distinguish "correct" from "incorrect"
feedback, and to color-code difficulty tiers, which a static word list
has no reason to encode on its own.

The logo is a small hand-drawn double-quotation mark — a nod to
"Verbatim" (exact, quoted words) — rendered as inline SVG so it adapts
to both themes automatically (it reads the same `--accent`/`--bg`
variables as everything else). It appears in the topbar, the homepage
hero, the footer, and as the browser favicon.

Every page carries a footer with the SAT Verbatim™ mark, a copyright
line with the current year, and a contact link
(prasanna4uni@gmail.com).

---

*SAT Verbatim™ — built for Prasanna Chandankhede.*
