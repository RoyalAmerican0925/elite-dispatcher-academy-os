# Module 09 Premium Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build M09 — Booking Loads, Rate Confirmations, and Dispatch Documentation from zero as a sell-ready occupational training module with complete curriculum, tools, assessments, instructor controls, SIM-009, remediation, competency evidence, current-source controls, and automated QA.

**Architecture:** M09 is a new module whose content artifacts share one 15-family competency map and one controlled booking workflow. SIM-009 is a browser ES-module runtime with separate content, critical controls, state logic, UI, and tests; all printed/package artifacts align to the same six critical-failure families and persistent-reassessment semantics.

**Tech Stack:** Markdown curriculum and controls; browser HTML/CSS/JavaScript ES modules; Node.js 22 test runner; GitHub Actions.

**Spec:** `10-PRODUCTION/Module-09-Premium-Design-Spec-2026-09-05.md`

## Global Constraints
- Exactly 15 competency families M09-C01–M09-C15.
- Exactly six critical-failure families M09-CF-01–M09-CF-06; no seventh without architecture revision.
- Student manual has exactly six instructional parts.
- Student toolset has exactly nine controlled desk tools.
- SIM-009 has exactly 12 progressive stages and at least 24 meaningful decisions/actions.
- Same-screen correction never erases a critical failure; materially different reassessment is required.
- Preserve first-attempt, final mastery, critical history, reassessment history, and instructor state separately.
- M09 does not absorb M10–M14 responsibilities.
- Fictional case-specific amounts and terms are labeled instructional assumptions.
- Maximum build status is `BUILD COMPLETE — RELEASE QA DEFERRED`; never `PUBLICATION_READY` at this gate.
- Work on `module-09-premium-build`; integrate only to `academy-master-architecture`; never touch `main` without separate authorization.

---

### Task 1: Create M09 master architecture and competency control

**Files:**
- Create: `00-ACADEMY-MASTER/MODULE-09-MASTER-BRANCH.md`
- Create: `03-ASSESSMENTS/Module-09/Module-09-Premium-Competency-Map-C01-C15.md`

**Interfaces:**
- Consumes: approved design spec.
- Produces: canonical competency IDs, evidence chain, boundary rules, critical-family map used by all later tasks.

- [ ] Write the master with employment outcome, operating framework, prerequisites M02/M06/M07/M08, M10–M14 boundaries, 15 competencies, nine tools, assessment chain, six critical families, remediation rule, SIM target, source controls, and initial `BUILD ACTIVE` status.
- [ ] Write the competency map with rows C01–C15 and columns Manual / Tool / KC / Lab / Exam / Practical / SIM / Instructor evidence.
- [ ] Check that every competency has at least one instruction source, one practice/tool source, one graded evidence source, and SIM evidence.
- [ ] Commit.

### Task 2: Build six-part student manual

**Files:**
- Create: `02-CURRICULUM/Module-09/Student-Manual-Part-01.md` through `Student-Manual-Part-06.md`

**Interfaces:**
- Produces the controlled instructional vocabulary and examples used by tools/assessments.

- [ ] Part 01: teach negotiation handoff, booking states, source hierarchy, booking-file anatomy, role/scope boundaries, worked handoff example, coached classification practice.
- [ ] Part 02: teach rate-confirmation anatomy and material-term extraction using a complete fictional confirmation and extraction demonstration.
- [ ] Part 03: teach verbal-vs-written reconciliation, materiality classification, missing facts, conflicting versions, correction loop, and documented escalation.
- [ ] Part 04: teach authority, acceptance/signature controls, document integrity, timestamps, source/version/change history, and prohibited fabrication/alteration.
- [ ] Part 05: teach booking-record construction, dispatch-packet assembly, obsolete-document exclusion, office-vs-driver information, and controlled driver handoff.
- [ ] Part 06: teach HOLD/CORRECT/ESCALATE, cancellation/decline within supplied authority, unresolved later-workflow items, final booking closeout, and M10 handoff.
- [ ] In every part include: employment context, decision rules, worked demonstration, common failure patterns, coached practice, and explicit boundary note.
- [ ] Run a manual alignment review against C01–C15 and commit.

### Task 3: Build nine occupational student tools

**Files:**
- Create under `04-STUDENT-TOOLS/Module-09-Tools/` the nine filenames specified in the design.

**Interfaces:**
- Each tool outputs a traceable work product referenced by the practical and SIM.

- [ ] Build Handoff Sheet with agreed/conditional/unresolved/unverified buckets.
- [ ] Build Material-Term Extraction Worksheet with source/version and all material fields.
- [ ] Build Reconciliation Matrix with verbal, written, status, materiality, source, action, resolution.
- [ ] Build Discrepancy & Correction Log with issue ID, evidence, requested correction, response, version, status.
- [ ] Build Authority/Approval/Signature Control with supplied authority, approval source/time, action permitted/not permitted.
- [ ] Build Document Version & Integrity Log with document ID/version/source/received/superseded/hash-or-reference field/change note.
- [ ] Build Booking Record Builder separating source facts, verified facts, unresolved facts, decisions and approvals.
- [ ] Build Dispatch Packet Assembly Checklist with include/exclude/current-version logic.
- [ ] Build final BOOK/HOLD/CORRECT/ESCALATE Decision Record with M10 handoff.
- [ ] Commit.

### Task 4: Build knowledge check, applied lab, and instructor rationale controls

**Files:**
- Create: `03-ASSESSMENTS/Module-09/Module-09-Knowledge-Check.md`
- Create: `03-ASSESSMENTS/Module-09/Rate-Confirmation-Reconciliation-Applied-Lab.md`
- Create: `03-ASSESSMENTS/Module-09/Rate-Confirmation-Reconciliation-Applied-Lab-Answer-and-Rationale-Control.md`

- [ ] Knowledge Check: 20 items with at least 10 application/evidence-classification items; include answers/rationales in instructor-only control or clearly separated key.
- [ ] Applied Lab: give M08 handoff + RC v1 + communication evidence; require extraction, reconciliation, discrepancy classification, correction request, authority decision, and booking status.
- [ ] Answer/rationale control: specify acceptable evidence, reasoning, materiality, authority, and handoff conclusions; do not score unsupported guessing as correct.
- [ ] Verify all C01–C15 are touched across KC+lab and commit.

### Task 5: Build final exam and 30-point practical

**Files:**
- Create: `03-ASSESSMENTS/Module-09/Module-09-Final-Exam.md`
- Create: `03-ASSESSMENTS/Module-09/Module-09-Final-Exam-Answer-Key.md`
- Create: `03-ASSESSMENTS/Module-09/Booking-Control-Desk-Practical.md`
- Create: `03-ASSESSMENTS/Module-09/Booking-Control-Desk-Practical-Scoring-and-Remediation-Control.md`

- [ ] Exam: exactly 30 items; pass 27/30; combine concepts, document interpretation, scenario decisions, discrepancy classification, authority and version-control evidence; designate critical items aligned only to CF-01–CF-06.
- [ ] Answer key: answer, rationale, competency, critical-family link where applicable.
- [ ] Practical: multi-document case requiring all nine tool outputs or equivalent evidence.
- [ ] Practical rubric: 10 dimensions × 0–3; pass 24/30 AND zero unresolved critical failures.
- [ ] Define first-attempt preservation and materially different reassessment for each CF family.
- [ ] Commit.

### Task 6: Build dedicated instructor guide

**Files:**
- Create: `03-ASSESSMENTS/Instructor-Guides/Module-09-Instructor-Guide.md`

- [ ] Include employment outcome, prerequisite verification, demonstrations, progressive release, tool coaching, evidence standards, scoring, six critical families, remediation, reassessment, common misconceptions, scope boundaries, currentness controls, and release-status discipline.
- [ ] Add demonstration scripts for RC extraction, verbal/written reconciliation, correction request, authority stop, version-control exclusion, booking closeout.
- [ ] Cross-check against practical and exam controls; commit.

### Task 7: Establish SIM-009 TDD RED architecture gate

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-09/runtime/tests/premium-gate.test.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-09/runtime/package.json`
- Create: `.github/workflows/sim009-runtime-tests.yml`

**Interfaces:**
- Required future exports: `STAGES`, `DECISION_ORDER`, `DECISIONS`, `CRITICAL_FAMILIES`, `REASSESSMENTS`, `createInitialState`, `submitAttempt`, `submitCriticalReassessment`, `computeCriticalFailureStatus`, `computeCompletionRecord`.

- [ ] Write failing tests requiring exactly 12 stages, >=24 decisions, all 15 competencies, exactly six CFs, first-attempt immutability, persistent critical history, reassessment resolution, completion blocking, and completion-record separation.
- [ ] Configure `npm test` and branch-specific GitHub Actions.
- [ ] Run Actions and record expected RED because runtime implementation does not yet exist.
- [ ] Commit RED evidence.

### Task 8: Build SIM-009 evidence packet and runtime content

**Files:**
- Create five permanent package docs under `05-SIMULATIONS-AND-GAMES/Module-09/`.
- Create: `runtime/content.js`
- Create: `runtime/critical-controls.js`

- [ ] Student Instructions: role, objective, allowed evidence, no guessing, statuses, remediation rules.
- [ ] Scenario/Evidence Packet: fictional M08 handoff, communications, RC v1, correction, RC v2, authority matrix, driver/equipment identity, obsolete document, dispatch packet source docs.
- [ ] Instructor Guide: decision map, evidence, coaching, CF controls, reassessment.
- [ ] Scoring/Competency Map: map every decision to C01–C15 and CFs.
- [ ] Completion/Competency Record: first attempt/final mastery/competencies/CF/reassessment/instructor/final status.
- [ ] `content.js`: implement 12 stages and >=24 meaningful decisions using choice, multiselect, sequencing, matching, classification, and structured-record actions where useful.
- [ ] `critical-controls.js`: exactly six families and six materially different reassessments.
- [ ] Run architecture-only tests; commit.

### Task 9: Implement SIM-009 state engine GREEN

**Files:**
- Create: `runtime/logic.js`
- Create: `runtime/tests/logic.test.js`

- [ ] Implement response evaluation by decision type.
- [ ] Implement immutable first-attempt evidence and separate final response/mastery.
- [ ] Implement persistent CF trigger history.
- [ ] Implement same-screen correction without CF resolution.
- [ ] Implement alternate reassessment and `RESOLVED_BY_REASSESSMENT`.
- [ ] Implement competency status and completion blocking.
- [ ] Implement completion record and legacy-safe state normalization.
- [ ] Run logic + premium tests to GREEN; commit.

### Task 10: Build SIM-009 browser experience

**Files:**
- Create: `runtime/index.html`, `runtime/styles.css`, `runtime/app.js`, `runtime/README.md`

- [ ] Render all decision types and evidence artifacts accessibly.
- [ ] Display stage/decision progress and evidence packet references.
- [ ] Show remediation without revealing future answers.
- [ ] Route unresolved critical families to alternate reassessment after main scenario.
- [ ] Render completion/competency summary and printable record.
- [ ] Label localStorage as local demonstration persistence, not durable LMS storage.
- [ ] Run syntax and full tests; commit.

### Task 11: Add package alignment/currentness automated gate

**Files:**
- Create: `runtime/tests/alignment.test.js`
- Modify: `runtime/package.json`

- [ ] Assert five permanent SIM docs exist and name all six CFs.
- [ ] Assert practical/instructor/runtime use the same pass/remediation semantics.
- [ ] Assert M08 handoff and M10 boundary are explicit.
- [ ] Assert successful state requires booking controls and does not claim trip/HOS/monitoring/billing completion.
- [ ] Assert no `PUBLICATION_READY` claim.
- [ ] Run full `npm test`; commit.

### Task 12: Current-source register and independent premium QA

**Files:**
- Create: `00-PROJECT-CONTROL/MODULE-09-REGULATORY-SOURCE-REGISTER.md`
- Create: `00-PROJECT-CONTROL/MODULE-09-DATE-SENSITIVE-CLAIM-REGISTER.md`
- Create: `10-PRODUCTION/Module-09-Premium-Content-QA-2026-09-05.md`

- [ ] Verify any federal record/signature, broker/carrier, document-retention, or related legal statements from current primary authority before treating them as federal facts.
- [ ] Separate federal rule, contract-specific term, carrier policy, platform workflow, Academy control, and fictional instructional assumption.
- [ ] Flag all date-sensitive/platform claims for final pre-publication recheck.
- [ ] Independently inspect manual, nine tools, assessments, practical, instructor guide, SIM package/runtime/tests.
- [ ] Apply Google Test, Employment Test, Buyer Test.
- [ ] QA may PASS only with fresh exact-head executable evidence; commit.

### Task 13: Reconcile academy controls and integrate

**Files:**
- Modify: `00-ACADEMY-MASTER/MODULE-09-MASTER-BRANCH.md`
- Modify: `00-ACADEMY-MASTER/ARCHITECTURE-COMPLETION-MATRIX-M01-M15-2026-09-01.md`
- Modify: `00-ACADEMY-MASTER/ACADEMY-COMPLETION-DEADLINE-CONTROL-2026-09-04.md`

- [ ] Promote M09 only after Tasks 1–12 pass to `BUILD COMPLETE — RELEASE QA DEFERRED`.
- [ ] Do not fabricate Academy-wide percentage changes; recompute only under a separate deliberate matrix pass.
- [ ] Run exact-final-head SIM-009 CI.
- [ ] Inspect branch diff for unrelated changes.
- [ ] Re-read verification-before-completion before claiming success.
- [ ] Open PR `module-09-premium-build` → `academy-master-architecture` only.
- [ ] Require exact-head PR CI success.
- [ ] Merge only to `academy-master-architecture` under existing authorization; never `main`.
- [ ] Verify post-merge target-branch CI and final M09 master status.
