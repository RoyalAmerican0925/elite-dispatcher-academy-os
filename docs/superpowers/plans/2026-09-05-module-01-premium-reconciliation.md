# Module 01 Premium Reconciliation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconcile Module 01 curriculum, tools, assessments, instructor controls and SIM-001 to one premium occupational competency chain and close the content/runtime build gate if independent QA passes.

**Architecture:** Preserve the four-part manual and valid SIM-001 package. Add the missing intake/verification tool, strengthen assessment evidence, align instructor/scoring controls, then test SIM-001 and the package against M01-C01–C15. Only verified gaps are repaired.

**Tech Stack:** Markdown courseware; vanilla JS/browser runtime where SIM-001 changes are needed; Node test runner/GitHub Actions for runtime/alignment gates.

**Spec:** `10-PRODUCTION/Module-01-Premium-Reconciliation-Design-Spec-2026-09-05.md`

## Global Constraints
- Work only on `module-01-premium-reconciliation` until integration QA.
- Do not merge or modify `main`.
- Preserve strong existing assets; no rewrite-for-newness.
- Shared operating model: PARTIES → FOUR FLOWS → DOCUMENT PURPOSE → KNOWN / UNKNOWN / VERIFY → STOP → IDENTIFY → TRACE → VERIFY → HAND OFF → NEXT SAFE ACTION.
- Final build status can be only `BUILD COMPLETE — RELEASE QA DEFERRED`; never `PUBLICATION_READY` from this gate.

---

### Task 1: Reconcile the missing operational tool
**Files:**
- Create: `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Dispatch-File-Intake-and-Verification-Map.md`

- [ ] Copy the verified premium tool from `module-01-premium-depth-rebuild` without weakening its KNOWN/UNKNOWN/VERIFY, four-flow, STOP framework or handoff controls.
- [ ] Verify it coexists with the two active M01 worksheets.
- [ ] Commit.

### Task 2: Upgrade diagnostic and graded assessment evidence
**Files:**
- Modify: `03-ASSESSMENTS/Module-Quizzes/Module-01-Knowledge-Check.md`
- Modify: `03-ASSESSMENTS/Module-Exams/Module-01-Exam.md`
- Modify corresponding answer controls.

- [ ] Add applied freight-file classification, four-flow, contradiction/missing-data, STOP-framework and handoff items without discarding sound role/regulatory questions.
- [ ] Keep Knowledge Check diagnostic and Exam graded/distinct.
- [ ] Ensure every new item has rationale/key coverage.
- [ ] Verify no later-module analysis is accidentally taught as M01 content.
- [ ] Commit.

### Task 3: Upgrade the practical and instructor scoring evidence
**Files:**
- Modify: `03-ASSESSMENTS/Practical-Assessments/Module-01-Practical.md`
- Modify: `03-ASSESSMENTS/Practical-Assessments/Modules-01-05-Instructor-Scoring-Guide.md`
- Modify/create M01 instructor control only if current instructor layer lacks the required evidence map.

- [ ] Expand the practical into an integrated Freight Movement Desk case.
- [ ] Require role identification, four-flow tracing, document purpose, KNOWN/UNKNOWN/VERIFY, missing/conflicting fact handling, next action and later-workflow handoff.
- [ ] Preserve first-attempt evidence and program remediation policy.
- [ ] Add an explicit competency mapping to M01-C01–C15.
- [ ] Commit.

### Task 4: Audit and selectively repair SIM-001 using TDD
**Files:**
- Inspect: `05-SIMULATIONS-AND-GAMES/Module-01/*`
- Inspect/modify only if needed: `05-SIMULATIONS-AND-GAMES/Module-01/runtime/*`
- Test: SIM-001 runtime/alignment tests.

- [ ] Write/extend failing alignment tests for all 15 competency families and the shared M01 operating model before changing runtime behavior.
- [ ] Run the test and confirm RED if a real gap exists.
- [ ] Implement only the missing decision/evidence behavior.
- [ ] Run tests to GREEN.
- [ ] Preserve current scenario/package strengths and release limitations.
- [ ] Commit.

### Task 5: Independent premium QA and master truth
**Files:**
- Create: `10-PRODUCTION/Module-01-Premium-Content-QA-2026-09-05.md`
- Modify after PASS only: `00-ACADEMY-MASTER/MODULE-01-MASTER-BRANCH.md`
- Modify after PASS only: architecture completion matrix and deadline control.

- [ ] Verify manuals, three tools, KC, exam, practical, instructor controls and SIM-001 against M01-C01–C15.
- [ ] Apply Google / Employment / Buyer tests.
- [ ] Verify current-source/release boundaries.
- [ ] Run automated gate and inspect committed target files.
- [ ] If PASS, record `BUILD COMPLETE — RELEASE QA DEFERRED`; otherwise record exact blockers.
- [ ] Open integration PR to `academy-master-architecture`, verify PR CI, merge only there if green, then verify post-merge CI.
