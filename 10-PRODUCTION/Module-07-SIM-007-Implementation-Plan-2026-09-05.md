# SIM-007 Rate & Profitability Decision Desk Implementation Plan

> **For agentic workers:** Execute task-by-task with independent review. Do not merge to `main`.

**Goal:** Build and independently verify a premium 10-stage Module 07 profitability decision simulation that records occupational competency rather than formula recall.

**Architecture:** One progressive fictional dispatch work period backed by a focused browser runtime and five durable instructional/scoring documents. Calculation state, decision state, first-attempt evidence, remediation, and competency scoring remain distinct so a corrected answer cannot erase an original critical failure.

**Tech Stack:** Markdown production artifacts; dependency-light HTML/CSS/JavaScript browser runtime; Node-based automated tests consistent with existing Academy simulations.

**Spec:** `10-PRODUCTION/Module-07-SIM-007-Design-Spec-2026-09-05.md`

## Global Constraints
- Work only on `academy-master-architecture`.
- Do not merge to `main`.
- GitHub is content master.
- Use actual M07 files as controlling evidence; stale status text cannot override repository truth.
- Preserve TEACH → DEMONSTRATE → PRACTICE → ASSESS → SIMULATE → RECORD COMPETENCY.
- Passing the content/runtime gate yields `BUILD COMPLETE — RELEASE QA DEFERRED`, never `PUBLICATION_READY`.
- All market/rate/fuel figures used as case inputs are fictional instructional assumptions unless explicitly current-sourced.

---

### Task 1: Repository truth and premium-gap audit
**Files:** Create `10-PRODUCTION/Module-07-Premium-Repository-Audit-2026-09-05.md`.

- [ ] Inspect all three Student Manual parts, three M07 tools, Knowledge Check, Exam/Key, Practical/Scoring, Instructor Guide, master status, and relevant production/source controls.
- [ ] Map each asset to KEEP — ACTIVE / UPGRADE — ACTIVE / ARCHIVE — HISTORICAL / DELETE — SUPERSEDED/JUNK.
- [ ] Identify formula, terminology, critical-control, source/currentness and competency gaps.
- [ ] Confirm which current M07 claims are fictional versus date-sensitive.
- [ ] Commit audit before simulation implementation.

### Task 2: Synchronize M07 instructional/assessment controls
**Files:** Modify only M07 files proven deficient by Task 1; record every change in the audit.

- [ ] Add/repair missing occupational teaching required for SIM-007 competencies.
- [ ] Preserve correct existing formulas and examples rather than rewriting for novelty.
- [ ] Synchronize terminology: loaded RPM, effective RPM, total trip miles, contribution margin, cash flow, profit, accessorial treatment, carrier authority.
- [ ] Reconcile critical-failure language so inherited versus simulation-specific controls are clearly distinguished.
- [ ] Verify assessment answer math after changes.

### Task 3: Build durable SIM-007 package
**Files:** Create five required Markdown files under `05-SIMULATIONS-AND-GAMES/Module-07/`.

- [ ] Student Instructions: workflow, allowed tools, evidence rules, completion standard, no answer leakage.
- [ ] Scenario/Evidence Packet: one progressive case with 10 stages, competing loads, changing evidence and realistic ambiguity.
- [ ] Instructor Guide: facilitation, expected reasoning, misconception diagnostics, remediation and reassessment.
- [ ] Scoring/Competency Map: map every decision/calculation to competencies and CF-01–CF-05.
- [ ] Completion/Competency Record: first attempt, remediation, reassessment, final competency, instructor review.

### Task 4: Build runtime with tests first
**Files:** Create focused runtime files under `05-SIMULATIONS-AND-GAMES/Module-07/runtime/`.

- [ ] Write failing tests for 10-stage structure, calculation functions, evidence preservation, five critical controls, reassessment persistence, competency calculation and final dispositions.
- [ ] Verify tests fail before implementation.
- [ ] Implement pure calculation helpers for total miles, loaded RPM, effective RPM, gallons, fuel, fees and stated-cost contribution margin with explicit input validation.
- [ ] Implement scenario content separately from scoring/state logic.
- [ ] Implement progressive UI and remediation without same-decision critical clearing.
- [ ] Run full tests and syntax checks.
- [ ] Write truthful runtime README including deferred release limitations.

### Task 5: Independent commercial-build gate
**Files:** Create `10-PRODUCTION/SIM-007-Premium-Content-QA-2026-09-05.md`.

- [ ] Fresh-read actual committed M07 and SIM-007 files.
- [ ] Independently recompute every case number and threshold.
- [ ] Verify each competency has observable evidence.
- [ ] Verify critical failures match the spec and do not falsely claim inheritance from the practical where they are simulation-specific.
- [ ] Verify ambiguity rewards disciplined judgment rather than suspicion/rejection of every load.
- [ ] Run logic/alignment tests and record exact results.
- [ ] Repair defects and re-run verification before gate closure.

### Task 6: Reconcile master truth
**Files:** Modify `00-ACADEMY-MASTER/MODULE-07-MASTER-BRANCH.md`, Architecture Completion Matrix, and Completion/Deadline Control only after Task 5 passes.

- [ ] Replace stale SIM-007 missing/planned language with verified repository state.
- [ ] Record exact remaining release QA.
- [ ] Do not invent Academy-wide percentage changes.
- [ ] Fresh-fetch controls after updates to prove repository truth is synchronized.
