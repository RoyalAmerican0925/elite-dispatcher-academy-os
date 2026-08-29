# SIM-002 Runtime — Technical Documentation

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY

Coded interactive runtime for SIM-002 (Module 02 — Agency Boundary Desk), implementing the seven-stage, 15-decision simulation defined in `../Module-02-Simulation-Student.md` (the curriculum source of truth and printable fallback).

## Isolation from SIM-001 (deliberate)

This runtime does **not** import from `05-SIMULATIONS-AND-GAMES/Module-01/runtime/`. `content.js`, `logic.js`, and `app.js` here are structurally similar to SIM-001's (same function names/shapes) but are separate files, written independently. SIM-001's files were never opened for writing during this build. This guarantees **zero regression risk** to the already-approved SIM-001 runtime — there is nothing for this build to have broken.

If a third simulation (SIM-003) needs the same architecture, that is the right time to evaluate a shared engine, with two working, tested implementations in hand as the basis for the abstraction rather than a guess.

## What's new relative to SIM-001

- **A fourth interaction type: `multiselect`** — select all that apply from a fixed list, evaluated as an exact set match, order-independent. Rendered as checkboxes sharing SIM-001's `.choice-option` visual language.
- **Three escalation-eligible decisions instead of one** (SIM02-D06, D10, D13), mirroring the Module 02 Practical's own critical-failure list, which treats the shipper-direct-allocation, reassignment, and label-vs-conduct-allocation patterns as three separately dangerous instances of the same underlying risk, not one canonical example.
- **`normalizeLoadedState`** — a new, explicitly tested function validating/repairing loaded state rather than trusting `localStorage` blindly. Handles corrupt/non-object input, a foreign simulation's state, partial/legacy decision records, and an invalid current-decision pointer. This is a genuine improvement over SIM-001's simpler load path and could be backported to SIM-001 in a future pass (not done here, to avoid touching SIM-001 files).

## How to Run

```
cd 05-SIMULATIONS-AND-GAMES/Module-02/runtime
python3 -m http.server 8000
# open http://localhost:8000
```

## How to Build

No build step — no bundler, no transpilation.

## How to Test

```
cd 05-SIMULATIONS-AND-GAMES/Module-02/runtime
npm test
```

Runs `node tests/logic.test.js` — 26 assertions covering stage count/order, stable decision IDs, decision existence, correct/incorrect evaluation across all four interaction types, first-attempt immutability, remediation recording, ordinary-wrong-answer retry behavior, the three critical-concept escalation rules (including escalation clearing on a later correct attempt), instructor-review state, full-mastery completion, competency-status derivation across all four states, persistence normalization (valid/corrupt/foreign/partial/invalid-pointer cases), reset-state cleanliness, multiselect order-independence, and progressive stage advancement.

`content.js` and `logic.js` have no DOM dependency and run in plain Node. `app.js` was verified with `node --check` for syntax validity and reasoned through manually for behavior — no headless-browser tooling is available in this environment, the same limitation SIM-001's README notes.

## SIM-001 Regression Result

**Not run, because not applicable** — SIM-001's files were never opened, imported, or modified by this build. To confirm directly rather than by inference, run `05-SIMULATIONS-AND-GAMES/Module-01/runtime/tests/logic.test.js`; it only exercises SIM-001's own files, none of which this build touched.

## Content / Data Structure

`content.js` exports `STAGES` (7, `SIM02-S1`–`SIM02-S7`), `ARTIFACTS` (10 fictional training artifacts), `COMPETENCY_LABELS` (A–H), `DECISIONS` (15, `SIM02-D01`–`SIM02-D15`), and `DECISION_ORDER`. Every decision includes `id`, `stageId`, `type`, `competency`, optional `artifact`, `prompt`, type-specific answer data, `correctFeedback`, `remediation`, and `escalateAfterAttempts` on the three critical decisions.

## Persistence Model

Single `localStorage` key (`sim002-state-v1`). Loaded state passes through `normalizeLoadedState` before use. State saves after every submission and stage advance.

## How Stages / Decisions / Remediation Work

Same model as SIM-001, plus the multiselect addition described above. All four interaction types share one submit → evaluate → feedback → advance/retry flow.

## Completion / Instructor-Review Logic

`computeSimulationStatus` returns `COMPLETE` when all 15 decisions are `finalCorrect`, `INSTRUCTOR_REVIEW_REQUIRED` if SIM02-D06, D10, or D13 escalate (2 incorrect attempts), `IN_PROGRESS` otherwise. Non-critical decisions retry indefinitely with remediation shown each time — the "no unlimited guessing" rule applies specifically to the three defined critical concepts, not globally.

## Known Limitations

- No headless-browser test coverage of `app.js` DOM behavior — same gap as SIM-001.
- No actual device/screen-reader testing was performed for this build; accessibility patterns (semantic controls, focus-visible, no color-only correctness, keyboard-only Up/Down sequencing, no drag-and-drop, checkbox-based multiselect) follow SIM-001's already-designed approach but weren't independently re-verified on a device.
- The written companion content package for SIM-002 currently includes only `Module-02-Simulation-Student.md` (which contains the full seven-stage exercise with all prompts and feedback, and functions as a complete printable fallback on its own). The additional support documents SIM-001 has — a separate Scenario Packet, Instructor Guide, Scoring Rubric, and Completion Record — were not built in this pass. See the SIM-002-BUILD completion report for the explicit account of this gap.
