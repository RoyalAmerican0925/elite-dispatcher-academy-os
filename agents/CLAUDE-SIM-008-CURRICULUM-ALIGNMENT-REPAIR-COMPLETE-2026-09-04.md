# CLAUDE — SIM-008 Curriculum Alignment Repair — COMPLETE — 2026-09-04

**Branch:** `academy-master-architecture`
**Not merged to `main`.**
**Status:** SIM-008 — BUILD COMPLETE — RELEASE QA DEFERRED
**Do NOT read as PUBLICATION_READY.**

---

## 1. Sources actually read before repair

Before touching any code, the following were read in full from the current `academy-master-architecture` branch:

- `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`
- `docs/superpowers/specs/2026-09-04-module-08-rate-negotiation-design.md`
- `02-CURRICULUM/Module-08/Student-Manual-Part-01.md` through `Part-06.md` (all six parts)
- `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`
- The existing SIM-008 runtime (`app.js`, `content.js`, `logic.js`, `styles.css`, `index.html`, `package.json`, `tests/logic.test.js`)

The repair was built from the manuals, not from the email describing the defects.

---

## 2. Repair table

| Issue | Curriculum source | Old behavior | Repair | Test coverage | Result |
|---|---|---|---|---|---|
| D06 evidence-supported counter too rigid | Part 04 §1–2: "Not every counter needs a long justification... Do not turn a carrier's internal requirement into a false statement" | Only correct answer explicitly recited fuel/deadhead/dwell facts to the broker | Rebuilt as SIM08-D07 multiselect distinguishing a grounded counter, a concise no-reason counter (both correct), an unsupported/random number, an invented market claim, and unnecessary over-explanation (all incorrect) | 4 new tests: accepts grounded+concise; rejects random; rejects invented market claim; rejects treating over-explanation as necessary | Repaired |
| D09 incomplete four-part term control | Part 05 §3: "separate four questions: Trigger, Amount/method, Evidence, Process" | Only tested rejecting a vague promise / not inventing a rate; never tested all four elements | Rebuilt as SIM08-D10 multiselect requiring all four of trigger/amount/process/evidence, with distractors for "universal Academy rate" and "general assurance is enough" | 4 new tests including a "3-of-4 is not sufficient" case | Repaired |
| D15 only tested AGREED bucket | Part 06 §2: three buckets — AGREED IN PRINCIPLE / UNRESOLVED / NOT DISCUSSED-NOT ESTABLISHED | Multiselect only asked "select the agreed items"; never forced distinguishing UNRESOLVED from NOT ESTABLISHED | Rebuilt as SIM08-D16, a new **categorize**-type decision (added to the runtime engine) requiring full three-way classification of rate/appointment/detention/drop-and-hook | 6 new tests: correct map passes; each single misclassification fails; collapsing two buckets into one fails; partial map fails | Repaired |
| C05/C06 discovery too passive | Part 03 §6: "Do not invent which one is true. Ask a useful question" | Single decision only asked which general reaction was least wrong; never required actually choosing a question | Split into SIM08-D05 (multiselect: recognize the claim is unverified, a real constraint may or may not exist, auto-conceding is wrong, accusing is wrong) + new SIM08-D06 (choice: select the actual purposeful follow-up question) | 2 new decisions, 2 new tests, plus a cross-decision test | Repaired |
| Part 02 preparation too close to fact-recall | Part 02 §1, §9: "Do not use a number merely because it is present"; "treating online market data as timeless truth" | D01 multiselect had only one irrelevant distractor | Added a second distractor: an assumed pickup-window pattern presented as fact, alongside the existing unrelated-old-rate distractor | 1 new test asserting both distractors are rejected | Repaired |
| Scenario continuity gap ($2,300 → $2,275 → $2,300) | `SIMULATION-ARCHITECTURE.md` standard: "progressive events"; general documentation-discipline principle in Part 06 | The rate returned to $2,300 after a $2,275 "final offer" with no stated event | closeoutFile artifact now explicitly states: $2,275 declined/escalated per the authority boundary → owner authorized holding at $2,300, no lower → broker subsequently agreed to $2,300 | 2 new tests: closeout artifact references $2,275, escalation, and $2,300 in that order; authority-boundary decision precedes closeout in decision order | Repaired |
| Accessorial/document language blur | Part 05 §6; Part 06 §1: "Negotiation notes capture the conversation. They do not replace Module 09 formal booking/document review" | Documentation decision didn't explicitly reject "verbal statement = Module 09 review complete" | Added a sixth documentation option, `invented2`, explicitly framing a verbal statement as equivalent to completed Module 09 review, and rejecting it | 1 new test | Repaired |

---

## 3. M08-C01–C15 curriculum-to-simulation traceability

| Competency | Taught | Demonstrated/Practiced | SIM-008 decision(s) | Evidence preserved | Failure/remediation |
|---|---|---|---|---|---|
| M08-C01 | Part 02 §1, §5 | Preparation Drill (Part 02 §8) | D01 (position judgment), D13 (fact-change re-evaluation) | first/final attempt + remediation flag | Ordinary retry |
| M08-C02 | Part 02 §2–3 | Preparation Drill | D12 (floor-exactly boundary) | first/final attempt | Ordinary retry |
| M08-C03 | Part 01 §2 | Desk Drill (Part 01) | D02 | first/final attempt | Ordinary retry |
| M08-C04 | Part 01 §1; Part 03 §1 | Embedded Practice (Part 01 §9) | D04 | first/final attempt | **Critical** — escalateAfterAttempts |
| M08-C05 | Part 03 §1–3, §6 | Discovery Call Drill (Part 03 §8) | D03 (verify), D06 (choose question) | first/final attempt | Ordinary retry |
| M08-C06 | Part 03 §4–6 | Discovery Call Drill | D05 (recognize unverified claim) | first/final attempt | Ordinary retry |
| M08-C07 | Part 04 §1–2 | Counteroffer Lab (Part 04 §9) | D07 | first/final attempt | Ordinary retry |
| M08-C08 | Part 01 §4 | Embedded Practice; Counteroffer Lab | D08 | first/final attempt | **Critical** — escalateAfterAttempts |
| M08-C09 | Part 04 §3–4 | Counteroffer Lab | D09 | first/final attempt | Ordinary retry |
| M08-C10 | Part 05 §1–3, §5 | Agreement-Term Drill (Part 05 §7) | D10 (four-part test), D11 (vague-statement classification) | first/final attempt | D10 **critical**; D11 ordinary |
| M08-C11 | Part 03 §9; Part 06 §6 | Full Desk Case (Part 06 §10) | D14 | first/final attempt | Ordinary retry |
| M08-C12 | Part 01 §3 | Contrasting Cases (Part 01 §8); Full Desk Case | D15 | first/final attempt | **Critical** — escalateAfterAttempts |
| M08-C13 | Part 06 §2 | Full Desk Case | D16 (categorize, three-bucket) | first/final attempt | **Critical** — full-map correctness on first pass |
| M08-C14 | Part 06 §1, §3, §9 | Full Desk Case; professional-language closeout examples | D17 (documentation), D18 (handoff boundary) | first/final attempt | D18 **critical**; D17 ordinary |
| M08-C15 | Part 04 §8; Part 06 §9 | Contrasting Cases; Accept/Decline/Escalate | D19 | first/final attempt | Ordinary retry |

All 15 competencies have TEACH → DEMONSTRATE/PRACTICE → PERFORM (SIM-008) → EVIDENCE → REMEDIATE coverage. A competency tag alone was not treated as sufficient — each row above traces to the actual manual section and the actual SIM-008 decision performing it.

---

## 4. Six critical-failure families — preserved

1. Unauthorized below-floor acceptance → **D15** (escalateAfterAttempts:2)
2. Fabricated leverage → **D08** (escalateAfterAttempts:2)
3. Material misrepresentation → **D04** (escalateAfterAttempts:2)
4. Unauthorized carrier commitment (inventing a specific accessorial figure) → **D10** (escalateAfterAttempts:2)
5. Treating an unresolved material term as agreed → **D16** (categorize, full three-bucket-map correctness required on first pass — no partial credit path adds diagnostic value over full-map accuracy)
6. Representing agreement-in-principle as completed booking → **D18** (escalateAfterAttempts:2)

First-attempt evidence is preserved for all six after remediation — verified directly in tests (`first-attempt evidence is preserved even after a later critical-decision remediation clears review flag`).

---

## 5. Fresh verification (this repair, not the old 34/34 result)

- **Final branch:** `academy-master-architecture`
- **Final commit SHA (test file, last commit in this repair sequence):** `84fcc28146403b07177ad1f4203a88ee1b154821`
  (full commit sequence: content.js path-string mistake `10cb668`→fixed content `bc4ad7c`; logic.js `c146aeb`; app.js `f77579e`; styles.css `e3f666c`; tests/logic.test.js `84fcc28`; README.md `9302181`)
- **Files changed:** `05-SIMULATIONS-AND-GAMES/Module-08/runtime/content.js`, `logic.js`, `app.js`, `styles.css`, `README.md`, `tests/logic.test.js`
- **Test command:** `node tests/logic.test.js` (run against files freshly downloaded from `raw.githubusercontent.com` on the `academy-master-architecture` branch after all commits landed — not the local working copy, and not the prior 34/34 result)
- **Tests passed:** 55
- **Tests failed:** 0
- **Stage count:** 15 (unchanged)
- **Decision count:** 19 (was 18; net +1 for the new D06 purposeful-question decision; D09→D10 term-control expansion and D15→D16 categorize conversion did not add decisions, they replaced/upgraded existing ones)
- **Competency count:** 15 (M08-C01–C15, all covered; C05 and C10 now covered by two decisions each)
- **Critical-failure count:** 6 (preserved; 5 via attempt-based escalation, 1 via categorize full-map correctness)
- **Curriculum-alignment findings:** all seven defects named in the repair request were traced to specific manual sections and repaired; see repair table above
- **Remaining limitations:** no headless-browser DOM test for the new categorize control (reviewed by code inspection and covered indirectly through logic tests only); no device/accessibility QA; browser/device QA, production deployment, LMS/student-record integration, and manual accessibility QA remain deferred, consistent with every other simulation on this branch

Note on file-write process: the first attempt to write `content.js` to GitHub uploaded the literal local file-path string instead of its content (a tool-usage error, caught immediately by re-reading the file back from GitHub before proceeding). It was corrected in the very next commit before any other file was touched, and every subsequent file was verified by byte-for-byte size match against the local sandbox copy, then re-verified with a completely fresh `curl` download and test run at the end. This is disclosed here rather than left implicit.

---

## 6. What remains incomplete

- No headless-browser/DOM test exists for the new `categorize` control; its correctness is inferred from `evaluateResponse`/`submitAttempt` unit coverage plus code review, not from an automated UI interaction test.
- No accessibility or cross-browser/device QA has been performed on the updated UI (new radio-group-per-item categorize control).
- Production deployment, durable LMS/student-record integration, and final release-layer QA remain deferred, as for every other simulation on this branch.
- `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`'s SIM-008 row still reads "PLANNED — SCOPE VERIFY" as of the versions read for this repair; it was not updated as part of this task since the task scope was the runtime and its tests, not the master architecture tracker. Flagging this now rather than silently leaving it stale.

---

## Final status

**SIM-008 — BUILD COMPLETE — RELEASE QA DEFERRED.**

Not PUBLICATION_READY. Left for ChatGPT's independent verification.
