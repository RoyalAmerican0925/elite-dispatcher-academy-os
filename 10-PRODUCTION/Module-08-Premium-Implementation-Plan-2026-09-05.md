# Module 08 Premium Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the proven commercial/instructional control gaps in Module 08 while preserving strong existing curriculum and preparing SIM-008 for a premium runtime build.

**Architecture:** Treat the six manuals, seven tools, lab, exam and practical as the existing instructional core. Add missing instructor/scoring/remediation controls around that core, then lock SIM-008 as a separate runtime subsystem with explicit competency and critical-failure evidence rules. Do not rewrite sound student assets merely to create activity.

**Tech Stack:** Markdown curriculum/assessment controls now; browser runtime later under the existing simulation pattern.

**Spec:** `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md` plus `10-PRODUCTION/Module-08-Premium-Repository-Audit-2026-09-05.md`

## Global Constraints
- Work only on `academy-master-architecture`.
- Do not merge to `main`.
- Preserve correct existing instructional assets.
- Maintain M07 economics / M08 negotiation / M09 booking boundaries.
- Preserve six controlled critical-failure families.
- Preserve first-attempt evidence after remediation.
- Critical reassessment must use materially different facts.
- No universal market-rate, dispatcher-fee or accessorial claims.
- Do not call verbal alignment BOOKED.
- Final build status can be no stronger than `BUILD COMPLETE — RELEASE QA DEFERRED` after runtime QA.

---

### Task 1: Permanent repository audit
**Files:**
- Create: `10-PRODUCTION/Module-08-Premium-Repository-Audit-2026-09-05.md`

- [x] Inspect master architecture, six manuals, seven tools, Module 08 assessment directory and instructor-guide directory.
- [x] Preserve assets that already meet occupational-training requirements.
- [x] Record missing instructor guide, missing Applied Lab rationale control and missing Practical scoring/remediation control.
- [x] Record current truthful status.

### Task 2: Instructor control layer
**Files:**
- Create: `03-ASSESSMENTS/Instructor-Guides/Module-08-Instructor-Guide.md`

- [ ] Map 15 competency families to observable evidence.
- [ ] Bind six critical-failure families to facilitation/scoring rules.
- [ ] Define progressive release and anti-answer-leakage controls.
- [ ] Define first-attempt preservation and materially different reassessment.
- [ ] Define required instructor demonstrations.
- [ ] Define M07/M09 boundaries and currentness/source controls.

### Task 3: Guided-practice answer/rationale control
**Files:**
- Create: `03-ASSESSMENTS/Module-08/Broker-Negotiation-Applied-Lab-Answer-and-Rationale-Control.md`

- [ ] Provide expected reasoning for each of the 11 lab stages.
- [ ] Distinguish acceptable variation from required controls.
- [ ] Identify critical-error triggers.
- [ ] Add targeted remediation prompts.

### Task 4: Practical scoring/remediation control
**Files:**
- Create: `03-ASSESSMENTS/Module-08/Broker-Negotiation-Desk-Practical-Scoring-and-Remediation-Control.md`

- [ ] Define exactly 30 points across occupational dimensions.
- [ ] Preserve pass standard 24/30 AND zero unresolved critical failures.
- [ ] Map six critical-failure families.
- [ ] Require chronological evidence and first-attempt preservation.
- [ ] Define critical reassessment with changed facts.
- [ ] Define competency-record output.

### Task 5: SIM-008 build-grade design
**Files:**
- Create: `10-PRODUCTION/Module-08-SIM-008-Design-Spec-2026-09-05.md`

- [ ] Define progressive simulation stages.
- [ ] Define 15 competency families as observable evidence.
- [ ] Define exactly six critical-failure families.
- [ ] Define broker resistance, changed facts, conditional trades, authority pressure and closeout.
- [ ] Define first-attempt, remediation and instructor-review persistence.
- [ ] Define anti-answer-leakage and release-QA boundaries.

### Task 6: Master reconciliation
**Files:**
- Modify: `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`

- [ ] Update only after Tasks 2–5 exist.
- [ ] Record premium instructional package status truthfully.
- [ ] Keep SIM-008 runtime/build gate open until independently tested.

### Task 7: Runtime build — deferred until design is locked
**Files:**
- Create under `05-SIMULATIONS-AND-GAMES/Module-08/` following established simulation conventions.

- [ ] Use TDD before runtime implementation.
- [ ] Test stage progression, competency evidence, all six critical failures, first-attempt persistence, remediation persistence, completion calculation and instructor-review state.
- [ ] Run syntax/alignment tests.
- [ ] Create permanent QA evidence.

## Self-Review
- No student-manual rewrite is required merely for appearance; existing manuals already teach the core occupational workflow.
- Missing controls are directly tied to files that current assessments reference but do not contain.
- Six critical-failure families remain consistent with the master and exam.
- M09 booking remains outside M08.
- Runtime completion is not claimed in this plan.