# Modules 02–03 Premium Reconciliation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close M02 and M03 at the current premium content/runtime build gate by repairing critical-remediation persistence, adding alternate reassessment and package gates, rechecking current sources, and reconciling stale truth controls.

**Architecture:** Preserve each module's existing 7-stage/15-decision simulation and instructional package. Add small module-local critical-control data, extend each state engine with immutable critical history plus reassessment records, synchronize browser/package records, and use GitHub Actions as the executable gate before changing academy status controls.

**Tech Stack:** Browser ES modules, Node.js 22 test runner, GitHub Actions, Markdown-controlled curriculum/assessment/package records.

**Spec:** `10-PRODUCTION/Modules-02-03-Premium-Reconciliation-Design-Spec-2026-09-05.md`

## Global Constraints
- Work only on `modules-02-03-premium-reconciliation` until reviewed.
- Target integration branch is `academy-master-architecture`; never merge `main` without separate explicit authorization.
- Preserve M02 and M03 7-stage/15-decision architectures unless a new verified defect proves a change necessary.
- M02 retains exactly three existing high-stakes families; M03 retains exactly two practical-derived critical families.
- Same-screen correction never resolves a triggered critical family.
- Critical resolution requires a materially different reassessment and preserves original trigger history.
- Final maximum status is `BUILD COMPLETE — RELEASE QA DEFERRED`, never `PUBLICATION_READY`.

---

### Task 1: Establish RED premium gates for SIM-002 and SIM-003

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/tests/premium-gate.test.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/tests/premium-gate.test.js`
- Modify: both runtime `package.json` files
- Modify: `.github/workflows/sim002-runtime-tests.yml`
- Modify: `.github/workflows/sim003-runtime-tests.yml`

**Interfaces:**
- Consumes current `submitAttempt`, `computeSimulationStatus`, content decision metadata.
- Produces executable RED requirements for critical persistence and alternate reassessment.

- [ ] Add assertions that current critical counts are exactly M02=3 and M03=2.
- [ ] Add assertions that a triggered critical family remains unresolved after a later correct response to the same decision.
- [ ] Add assertions requiring `submitReassessment`, `computeCriticalFailureStatus`, and completion-record output.
- [ ] Update package scripts so logic + premium gate + alignment/package checks run together.
- [ ] Update Actions branch/path filters so isolated branch and `academy-master-architecture` execute the gates.
- [ ] Run Actions and record the expected RED failure against legacy same-screen-clearing logic.
- [ ] Commit the RED gate.

### Task 2: Implement SIM-002 persistent critical controls

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/critical-controls.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/logic.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/app.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/tests/logic.test.js`

**Interfaces:**
- Produces `CRITICAL_FAMILIES`, `REASSESSMENTS`, `submitReassessment(state, familyId, response, now)`, `computeCriticalFailureStatus(state)`, `computeCompletionRecord(state)`.

- [ ] Map D06→M02-CF-01, D10→M02-CF-02, D13→M02-CF-03.
- [ ] Add one alternate fact pattern per family that tests the same competency without repeating the original answer pattern.
- [ ] Extend decision state with critical occurrence/family/trigger/resolution/reassessment fields while preserving legacy saved-state normalization.
- [ ] Remove logic that clears instructor review merely because the same decision is later answered correctly.
- [ ] Add reassessment submission and status computation.
- [ ] Route completed main scenario with unresolved families to alternate reassessment UI.
- [ ] Ensure completion requires 15/15 final mastery plus zero unresolved high-stakes families.
- [ ] Update tests to prove first-attempt immutability, persistent critical history, reassessment resolution and completion record separation.
- [ ] Run the SIM-002 test gate to GREEN and commit.

### Task 3: Synchronize SIM-002 package and stale metadata

**Files:**
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/Module-02-Simulation-Instructor-Guide.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/Module-02-Simulation-Scoring-Rubric.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/Module-02-Simulation-Completion-Record.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/README.md`
- Expand: `05-SIMULATIONS-AND-GAMES/Module-02/runtime/tests/alignment.test.js`

- [ ] Replace mutable-flag language with persistent-trigger + alternate-reassessment semantics.
- [ ] Add explicit reassessment evidence fields to the completion record.
- [ ] Correct README's obsolete claim that only the student companion exists.
- [ ] Set runtime/package build wording to the truthful gate status only after tests pass.
- [ ] Add alignment assertions tying the three families and reassessment rule across runtime, instructor, scoring and completion records.
- [ ] Run full SIM-002 package gate and commit.

### Task 4: Implement SIM-003 persistent critical controls

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/critical-controls.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/logic.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/app.js`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/tests/logic.test.js`

**Interfaces:** Same API shape as SIM-002, module-local.

- [ ] Map D09→M03-CF-01 and D11→M03-CF-02.
- [ ] Add one materially different qualification reassessment and one materially different axle/gross reassessment.
- [ ] Preserve critical trigger history after same-screen correction.
- [ ] Require alternate reassessment for resolution.
- [ ] Preserve first-attempt and final-mastery evidence separately.
- [ ] Block COMPLETE until 15/15 final mastery and zero unresolved critical families.
- [ ] Update tests and run to GREEN.
- [ ] Commit.

### Task 5: Synchronize SIM-003 package and add package alignment gate

**Files:**
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/Module-03-Simulation-Instructor-Guide.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/Module-03-Simulation-Scoring-Rubric.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/Module-03-Simulation-Completion-Record.md`
- Modify: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/README.md`
- Create: `05-SIMULATIONS-AND-GAMES/Module-03/runtime/tests/alignment.test.js`

- [ ] Remove stale `BUILD QA` / `DRAFT_COMPLETE` wording after implementation is verified.
- [ ] Add persistent critical-history and alternate-reassessment instructions.
- [ ] Add completion-record reassessment fields.
- [ ] Add package alignment tests for exactly two families, practical synchronization, no same-screen erasure, currentness taxonomy and no publication claim.
- [ ] Run full SIM-003 package gate and commit.

### Task 6: Recheck M02 and M03 current sources and record dated evidence

**Files:**
- Create: `10-PRODUCTION/Module-02-Current-Source-Recheck-2026-09-05.md`
- Create: `10-PRODUCTION/Module-03-Current-Source-Recheck-2026-09-05.md`
- Modify source/date-sensitive registers only if a verified discrepancy is found.

- [ ] Reverify M02 broker/bona-fide-agent definitions, 2023 FMCSA guidance status, current broker financial-responsibility framework and current penalty-source location using primary federal sources.
- [ ] Reverify M03 Interstate weight/axle baseline, National Network width/length framework, H/N/X endorsement framework and shipper/offeror hazmat responsibility using primary federal sources.
- [ ] Explicitly retain final pre-publication recheck for date-sensitive figures/procedures.
- [ ] Commit source evidence and any necessary corrections.

### Task 7: Independent premium QA for both modules

**Files:**
- Create: `10-PRODUCTION/Module-02-Premium-Content-QA-2026-09-05.md`
- Create: `10-PRODUCTION/Module-03-Premium-Content-QA-2026-09-05.md`

- [ ] Inspect actual curriculum, tools, assessments, practical, instructor controls, simulation package/runtime/tests and source registers.
- [ ] Apply Google Test, Employment Test and Buyer Test.
- [ ] Confirm critical-family counts and reassessment behavior from committed code/tests.
- [ ] Record remaining release-layer limitations without calling them content defects.
- [ ] Mark PASS only with fresh executable evidence.
- [ ] Commit QA.

### Task 8: Reconcile module and academy truth controls

**Files:**
- Modify: `00-ACADEMY-MASTER/MODULE-02-MASTER-BRANCH.md`
- Modify: `00-ACADEMY-MASTER/MODULE-03-MASTER-BRANCH.md`
- Modify: `00-ACADEMY-MASTER/ARCHITECTURE-COMPLETION-MATRIX-M01-M15-2026-09-01.md`
- Modify: `00-ACADEMY-MASTER/ACADEMY-COMPLETION-DEADLINE-CONTROL-2026-09-04.md`

- [ ] Change M02/M03 from premium re-audit open to content/runtime premium build gate closed only after Tasks 1–7 pass.
- [ ] Record current-source recheck and persistent critical-reassessment controls.
- [ ] Keep Academy-wide 50%/31% planning estimates unchanged unless a separate full-matrix recomputation is performed.
- [ ] Preserve release QA blockers and `not PUBLICATION_READY` language.
- [ ] Commit truth-control reconciliation.

### Task 9: Final-head verification and integration review

- [ ] Run both module Actions gates on the exact final branch head.
- [ ] Inspect branch diff for unrelated changes.
- [ ] Re-read `verification-before-completion` before any completion claim.
- [ ] Open PR from `modules-02-03-premium-reconciliation` to `academy-master-architecture` only.
- [ ] Verify PR CI on exact head.
- [ ] Merge only to `academy-master-architecture` under existing project authorization; do not touch `main`.
- [ ] Verify merged target-branch files and post-merge Actions.
- [ ] Final allowed status: `M02 / SIM-002 — BUILD COMPLETE — RELEASE QA DEFERRED` and `M03 / SIM-003 — BUILD COMPLETE — RELEASE QA DEFERRED`.