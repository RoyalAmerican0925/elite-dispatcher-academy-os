# SIM-009 Runtime — Booking Control Desk

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED (per the design spec's premium gate; this is not a claim that the module is ready to publish)

Coded interactive runtime for SIM-009 (Module 09 — Booking Loads, Rate Confirmations, and Dispatch Documentation), 12 stages, 27 decisions, built from `10-PRODUCTION/Module-09-Premium-Design-Spec-2026-09-05.md`, `MODULE-09-MASTER-BRANCH.md`, the Module 09 Premium Competency Map, and Student Manual Parts 01–06 on `module-09-premium-build`.

## The case

Palmetto Line Logistics (fictional carrier) has an M08 negotiation handoff with Cascade Freight Brokers (fictional broker) on Load CFB-8842: $2,450 all-in, Tuesday 14:00 pickup, Thursday 10:00 delivery, 53' dry van, no driver assist — agreement-in-principle only. The written Rate Confirmation v1 arrives with two material conflicts (pickup time off by six hours; an added driver-assist requirement), one nonmaterial clerical typo (broker name misspelled), and a new, unnegotiated detention clause. An unrelated load's rate confirmation is attached to the same email thread by mistake and must be excluded. A corrected Rate Confirmation v2 fixes the two flagged problems — but introduces a new, unexplained $50 rate reduction, testing whether the student re-reconciles the whole document or just the fields that were already being watched. The case runs through authority-limited escalation, a document-fabrication temptation (editing a PDF to show the "right" number), dispatch-packet assembly with a superseded-document trap, and a final-closeout test where every commercial term matching still isn't the same as a required authorization actually being obtained.

## Architecture

- **`content.js`** — 12 stages, 27 decisions, artifacts, competency labels. Pure data.
- **`logic.js`** — evaluation engine (choice/multiselect/categorize), main-scenario state transitions, critical-failure trigger recording, reassessment submission, competency/critical-failure/completion status calculation.
- **`critical-controls.js`** — the six critical-failure families (M09-CF-01–M09-CF-06) and one materially-different reassessment scenario per family, kept separate from the main scenario's data.
- **`app.js`** — render loop and UI for all three decision types, plus the reassessment flow (surfaced after the main scenario, for any family still `REASSESSMENT_REQUIRED`).
- **`styles.css`**, **`index.html`** — supporting runtime files.

A critical-failure trigger is preserved permanently once recorded (exact response, decision, timestamp) and **cannot be cleared by correcting the answer on the same screen** — the student may continue through the main scenario, but only a correct response to that family's separate, materially-different reassessment scenario resolves it to `RESOLVED_BY_REASSESSMENT`. This directly implements the design spec's remediation rule.

## How to Run

```
cd 05-SIMULATIONS-AND-GAMES/Module-09/runtime
python3 -m http.server 8000
```

## How to Test

```
cd 05-SIMULATIONS-AND-GAMES/Module-09/runtime
node tests/logic.test.js
node tests/premium-gate.test.js
node tests/alignment.test.js
```

- **`tests/logic.test.js`** (27 assertions) — structure, all 15 competencies, all six critical-failure families and their triggers, evaluation logic for all three decision types, same-screen-correction non-clearing, reassessment resolution (successful and unsuccessful), first-attempt preservation, completion blocked by unresolved criticals, raw score cannot override, persistence, scenario continuity.
- **`tests/premium-gate.test.js`** (9 assertions) — locks the approved architecture (12 stages, ≥24 decisions, 15 competencies, exactly six critical families each with exactly one reassessment using materially different facts) against accidental regression.
- **`tests/alignment.test.js`** (12 assertions) — verifies the five required package documents and this README exist on disk, that every package document names all six critical-failure families, that no premature publication-readiness claim appears anywhere in the package or runtime, and that the M08/M10 module boundaries are explicit in the package.

This was built following the assignment's TDD requirement, though not cleanly: `alignment.test.js` did not exist yet and genuinely failed (RED) until the five package documents and this README were written, then passed clean. `premium-gate.test.js`, however, was found to already exist on the branch as a **stale, incompatible placeholder** from an earlier planning pass — it used the `node:test` API and a different decision-ID/logic.js contract (`SIM09-Dxx` IDs, `firstAttempts`/`reassessmentHistory` fields) that didn't match the actual built engine. It was replaced with a version written against the real `content.js`/`logic.js`/`critical-controls.js` contract, which then passed 9/9. This discrepancy is disclosed here rather than silently overwritten without mention.

## Known Limitations

- `package.json`'s test script was also found already on the branch, pointed at `node --test tests/premium-gate.test.js` only (the `node:test` runner, which the actual test files don't use) and didn't run the other two suites. Corrected to `node tests/logic.test.js && node tests/premium-gate.test.js && node tests/alignment.test.js`, matching how the suites are actually written and were actually verified.
- The full six-manual-part and nine-tool occupational-usability audit called for in the assignment (KEEP/UPGRADE/ARCHIVE/DELETE classification of existing Module 09 content) was not completed in this session — all six manual parts and all nine tools were confirmed to exist, but not individually read and rated for quality.
- The Module 09 regulatory/source register and date-sensitive-claim register called for by the implementation plan were not created in this session.
- No headless-browser DOM test coverage; no device/accessibility QA.
- Browser/device QA, LMS/student-record integration, and durable production records remain deferred, per the design spec's premium gate.
- Attempt state persists only in local browser storage (`localStorage`).
- This build has not yet gone through the PR/CI/merge sequence into `academy-master-architecture` described in the assignment — it remains on `module-09-premium-build` pending that process and Kenya's/ChatGPT's review.
