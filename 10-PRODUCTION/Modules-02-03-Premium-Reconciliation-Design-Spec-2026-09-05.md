# Modules 02–03 Premium Reconciliation — Design Spec — 2026-09-05

**Branch:** `modules-02-03-premium-reconciliation`  
**Target branch after QA:** `academy-master-architecture`  
**Main branch:** DO NOT TOUCH

## Goal
Close the remaining Module 02 and Module 03 premium/currentness re-audit gates without rewriting strong instructional content, while repairing the proven simulation-remediation defects and stale control metadata that conflict with the Academy's current remediation standard.

## Scope classification
This is an architectural reconciliation because it changes simulation state semantics, assessment/remediation evidence, package truth controls, CI coverage, and academy-wide status controls across two already-built modules.

## Preserve
- M02 Student Manual Parts 01–04 and its carrier-side agency / brokerage-risk reasoning chain unless a verified defect is found.
- M02 seven-stage / fifteen-decision SIM-002 scenario architecture and eight-stage Academy control model.
- M03 Student Manual Parts 01–04 and its equipment/commodity/temperature/dimensions/weight/qualification/verification chain unless a verified defect is found.
- M03 seven-stage / fifteen-decision SIM-003 scenario architecture.
- Existing M02/M03 practicals, tools, exams, instructor products and source registers where current and internally consistent.
- M02's three existing high-stakes runtime concepts and M03's two practical-derived critical concepts; do not manufacture extra critical families merely to increase difficulty.

## Proven defects requiring repair
1. **SIM-002 critical-history erasure:** `logic.js` sets `instructorReviewRequired=false` after a later same-screen correct response. The test suite explicitly expects that clearing behavior. This conflicts with the Academy program policy requiring materially different critical-failure retesting.
2. **SIM-003 critical-history erasure:** the same logic defect exists for D09 and D11, and its test suite explicitly expects escalation to clear after same-screen correction.
3. **No durable critical-family history:** both runtimes use a mutable instructor-review flag rather than preserving trigger occurrence, family, trigger time, and reassessment resolution independently.
4. **No explicit alternate critical reassessment engine:** instructor guides mention transfer examples, but the browser runtimes do not require a materially different reassessment before clearing a critical condition.
5. **Stale runtime/package metadata:** both runtime READMEs still say `DRAFT_COMPLETE`; SIM-002 README incorrectly says the support package contains only the student asset even though scenario/instructor/scoring/completion files now exist; SIM-003 scoring/completion/instructor package still carries `BUILD QA` language despite the master calling SIM-003 build complete.
6. **CI scope drift:** SIM-002 push CI targets `main` rather than the active architecture branch, and SIM-003 package tests currently exercise logic only rather than package alignment/currentness controls.
7. **Academy truth controls remain open:** Architecture Matrix and Completion/Deadline Control still mark M02/M03 premium/currentness re-audits open.

## Critical-remediation design
For each existing high-stakes/critical runtime concept:
- preserve first-attempt response/correctness/timestamp;
- preserve final same-screen response/correctness separately;
- record `criticalFailureOccurred`, family ID, trigger timestamp and triggering decision;
- never erase the historical trigger;
- same-screen correction may improve final mastery but may not resolve the critical family;
- require one materially different reassessment scenario for the same competency before the family becomes resolved;
- record reassessment response, correctness, timestamp and resolution separately;
- completion requires all scenario decisions at final mastery and zero unresolved critical families.

### M02 high-stakes families
- **M02-CF-01:** shipper-supplied freight plus dispatcher discretionary carrier allocation — SIM02-D06.
- **M02-CF-02:** unauthorized redirect/reassignment instead of return to source — SIM02-D10.
- **M02-CF-03:** actual allocation conduct contradicting a claimed agency label — SIM02-D13.

These remain simulation high-stakes controls and do not falsely claim one-for-one identity with the Practical's critical-failure wording.

### M03 critical families
- **M03-CF-01:** dispatching a driver who lacks the scenario-stated required H/X qualification — SIM03-D09.
- **M03-CF-02:** approving the 35,000-lb tandem condition solely because gross is below 80,000 lb — SIM03-D11.

These remain synchronized to the Practical's two named critical failures.

## Current-source design
Create dated 2026-09-05 current-source recheck records for each module using primary federal sources. The recheck must distinguish stable law/regulation from interpretive guidance, state-specific requirements, carrier/equipment facts, and Academy control models. Date-sensitive penalty figures or procedures remain subject to final pre-publication recheck even if verified at this build gate.

## Package and automated gates
Each runtime must have automated checks for:
- locked 7-stage / 15-decision architecture;
- existing competency coverage;
- exact existing critical-family count (M02 three, M03 two);
- persistent critical history after same-screen correction;
- materially different reassessment required for resolution;
- first-attempt evidence immutability;
- completion blocked by unresolved critical families;
- completion record separates first attempt, final mastery, critical history and reassessment;
- package scoring/instructor/completion controls match runtime semantics;
- no `PUBLICATION_READY` claim.

## Premium-value gates
- **Google Test:** preserve decision frameworks, evidence classification, occupational work products and transfer scenarios beyond generic definitions.
- **Employment Test:** learner must make defensible carrier-side/legal-boundary or equipment-fit decisions from realistic facts and unknowns.
- **Buyer Test:** instruction, tools, assessments, simulation, remediation, rationale and competency records operate as a coherent paid training system.

## Final truth-control rule
Only after both module branches pass fresh runtime/package/currentness QA may the Module 02/03 masters, Architecture Completion Matrix and Completion/Deadline Control be changed from premium re-audit open to content/runtime build-gate closed. Academy-wide planning percentages are not recalculated during this reconciliation.

## Maximum status
`BUILD COMPLETE — RELEASE QA DEFERRED` only. Browser/device, manual accessibility, production deployment, LMS/student-account persistence, durable competency records, assembled branding/editorial review and final pre-publication current-source review remain release-layer work.