# SIM-004 — Module 04 Carrier Onboarding Command Desk — Implementation Plan

**Goal:** Build and verify the complete Module 04 simulation package without changing SIM-001 through SIM-003 or inventing curriculum outside the synchronized Module 04 manual/tools/assessments/instructor controls.

## Constraints
- Work only on `academy-master-architecture`.
- Do not merge to `main`.
- Keep SIM-004 runtime isolated from sibling simulation imports.
- Use TDD: tests define the locked structure/critical controls before the runtime implementation is considered complete.
- Exactly three critical escalation decisions, matching Module 04 Practical.
- Isolate the 2026 NRII procedure as date-sensitive content.
- `BUILD COMPLETE` is not `PUBLICATION_READY`.

## Task 1 — Lock architecture
- [x] Verify Module 04 manual, tools, exam, practical, scoring, answer guide, full instructor guide, source control.
- [x] Verify instructor-alignment gate unlocks SIM-004 design.
- [x] Define 10-stage / 20-decision architecture and competency codes.
- [x] Lock three critical-failure concepts.

## Task 2 — Write runtime tests first
- [ ] Create `runtime/tests/logic.test.js` covering stage/ID integrity, evaluation, first-attempt immutability, remediation, exactly-three critical decisions, escalation, completion, competency status, persistence, progression, current-date isolation, and sibling-simulation isolation.

## Task 3 — Implement runtime data and logic
- [ ] Create `runtime/content.js` with fictional artifacts and 20 decisions.
- [ ] Create `runtime/logic.js` implementing mastery/evidence/persistence model.
- [ ] Ensure tests are logically satisfied by the implementation.

## Task 4 — Browser application
- [ ] Create `runtime/app.js`, `index.html`, `styles.css`, `package.json`, `README.md`.
- [ ] Use accessible choice/multiselect/sequencing controls and responsive baseline.

## Task 5 — Product package
- [ ] Create student simulation guide.
- [ ] Create scenario packet.
- [ ] Create instructor simulation guide.
- [ ] Create scoring rubric.
- [ ] Create completion record.

## Task 6 — CI and verification
- [ ] Add `.github/workflows/sim004-runtime-tests.yml`.
- [ ] Observe a successful GitHub Actions run on the SIM-004 runtime commit.
- [ ] Inspect run/job logs and record exact run/job/tested commit/result.
- [ ] Independently inspect runtime/content/product-package synchronization.

## Task 7 — Close build gate
- [ ] Create `10-PRODUCTION/SIM-004-Build-QA-2026-09-01.md`.
- [ ] Update master dashboard, completion matrix, Module 04 branch control, simulation architecture and implementation plan.
- [ ] Mark `BUILD COMPLETE — RELEASE QA DEFERRED` only if evidence supports it.
