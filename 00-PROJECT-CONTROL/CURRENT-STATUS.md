# Current Project Status

## Repository State

The GitHub repository is connected, writable, and is the designated source of truth for the Elite Dispatcher Academy OS project.

## Confirmed Direction

The project has two coordinated targets: a near-term sellable trucking dispatcher academy and a long-term EAOS/TKE platform. The near-term academy is the first implementation of the larger architecture. Near-term assets must remain compatible with future EAOS/TKE IDs, dependencies, source controls, assessment logic, simulations, and publication workflows.

## Current Workstream

**Phase One — Recover and Control is substantially complete for the known Module 01–06 core materials and is transitioning into Phase Two — Complete Core Academy.**

No asset is PUBLICATION_READY merely because it exists. Continue using:

PLANNED → IN_PROGRESS → DRAFT_COMPLETE → REVIEWED → VERIFIED → PUBLICATION_READY → PUBLISHED → SUPERSEDED.

## Curriculum Migration Status

Student-manual content for Modules 01–06 has been recovered from Google Drive and migrated into `02-CURRICULUM/Module-01` through `Module-06`.

Before migration, the selected student manuals were checked for chat transcripts, AI coordination/handoff language, configuration prompts, context-packet text, and email-style `TO:` / `FROM:` / `RE:` contamination. None was found in the selected manuals. Architecture/configuration/coordination documents elsewhere in Drive were not placed into student curriculum folders.

The manuals remain subject to current-date/factual review before PUBLICATION_READY, especially Modules 02, 04, 05, and 06.

## Module 01–06 Assessment Status — Updated 2026-08-19

### Knowledge Checks

Student-facing Knowledge Checks for Modules 01–06 are extracted into `03-ASSESSMENTS/Module-Quizzes/`. They were checked against the recovered instructor answer guides and remain DRAFT_COMPLETE pending QA.

### Module 06 Scenario Lab

The 12-scenario student practice lab is extracted to:

`03-ASSESSMENTS/Scenario-Labs/Module-06-Scenario-Lab.md`

The student file contains no instructor classifications/answers. Scenario IDs/fact patterns were reconciled against the instructor guide. Status: DRAFT_COMPLETE.

### Graded Module Exams

The controlled exam blueprint exists at:

`03-ASSESSMENTS/Module-Exams/EXAM-BLUEPRINT-Modules-01-06.md`

**All six Module 01–06 graded exams and separate instructor answer keys now exist.** They use new items rather than verbatim copies of diagnostic Knowledge Checks.

| Module | Exam standard | Critical-failure control | Status |
|---|---:|---|---|
| 01 | 80% | None | DRAFT_COMPLETE |
| 02 | 85% | allocation-of-traffic critical item | DRAFT_COMPLETE |
| 03 | 85% | illegal axle-distribution critical item | DRAFT_COMPLETE |
| 04 | 85% | required hazmat/CDL endorsement critical item | DRAFT_COMPLETE |
| 05 | 80% | shipper-direct/brokerage-boundary critical item | DRAFT_COMPLETE |
| 06 | 90% | payment-redirection + unsupported-fraud-conclusion critical items | DRAFT_COMPLETE |

### Practical Assessments

New graded practical/scenario assessments exist for Modules 01–05 under:

`03-ASSESSMENTS/Practical-Assessments/`

They are supported by:

`03-ASSESSMENTS/Practical-Assessments/Modules-01-05-Instructor-Scoring-Guide.md`

Module 06 already has a practice Scenario Lab; a separate secure/summative Module 06 practical remains to be designed if required by the final program architecture.

### Program Scoring / Remediation

A program-level policy now exists at:

`03-ASSESSMENTS/PROGRAM-ASSESSMENT-SCORING-AND-REMEDIATION-POLICY.md`

It defines diagnostic vs. graded assessment roles, pass thresholds, critical-failure overrides, objective-level remediation routing, retesting with materially different scenarios/items, rubric scale, metadata, current-date controls, and answer-key separation.

## Regulatory Verification — Modules 04 and 06

Live current-source verification was completed before authoring the Module 04 and Module 06 exams and recorded in:

`00-PROJECT-CONTROL/REGULATORY-VERIFICATION-2026-08-19-M04-M06.md`

Verified for current item-writing:

- NRII temporary nationwide paper-MEC exemption: April 11 through October 11, 2026; temporary paper-MEC reliance conditions remain date-sensitive.
- Motus is the current FMCSA registration environment; legacy L&I is historical-review only for current filing purposes.
- $750,000 public-liability baseline for the defined non-hazardous for-hire property-carrier category at/above 10,001 lb GVWR.
- $75,000 broker BMC-84/BMC-85 financial-security framework.
- 30-day BMC-85 trustee/provider replacement period after an ineligibility determination.

### Module 06 Timeline Discrepancy Requiring Reconciliation

Current 49 CFR § 387.307(e)(5)–(6) uses a **7-business-day** FMCSA notice/suspension response period. A separate § 387.307(b) rule concerns trust assets capable of liquidation within **7 calendar days**.

Older Module 06 student/instructor prose currently uses a 7-calendar-day shortfall/replenishment description and must be corrected in a controlled regulatory-content reconciliation pass. Newly authored Module 06 exam material uses the verified current distinction and does not repeat the stale wording.

A final current-source verification pass is still mandatory before PUBLICATION_READY.

## Student Tools Recovery Status — Updated 2026-08-19

Recovered controlled pilot assets remain:

- `RES-LE-001` — Load Information Capture Workbook & Worksheet
- `RES-LE-004` — Clarification Question Quick Guide & Job Aid
- `RES-LE-024A` — Flashcard & Retrieval Practice Set
- `RES-LE-021A` — Instructor Guide & Facilitation Notes

The LE pilot namespace remains governed by:

`00-PROJECT-CONTROL/LE-001-PILOT-MAPPING-DECISION.md`

Do not silently renumber the pilot into Module 05. The pilot spans multiple current modules and remains controlled evidence/supporting architecture until a formal integration pass.

A new targeted Drive recovery audit exists at:

`04-STUDENT-TOOLS/RECOVERY-AUDIT-2026-08-19.md`

Targeted searches confirmed the previously recovered LE resources but did not identify additional completed standalone copies of several architecture-required assets such as the Load Evaluation Calculator, Calculation Worksheet, Formula Reference Card, Integrated Load Evaluation Worksheet, Risk/Assumption Log, and related tools. Production prompts/configuration documents were deliberately not migrated as student assets.

Those missing tools remain PLANNED until actual completed sources are found or new controlled assets are authored.

## Simulation / Game Planning

A controlled simulation/game backlog now exists at:

`05-SIMULATIONS-AND-GAMES/SIMULATION-BACKLOG.md`

It defines progressive simulation families from missing-information capture and equipment fit through broker verification, rate math, negotiation, trip/HOS planning, exception management, billing/POD, and the end-to-end dispatch capstone, plus testing and EAOS/TKE compatibility requirements.

Backlog entries are PLANNED; they are not claims of implemented/playable software.

## Software / Dashboard Requirements

A requirements baseline now exists at:

`09-SOFTWARE/ACADEMY-SOFTWARE-AND-DASHBOARD-REQUIREMENTS.md`

It defines the future student application, assessment engine, practical/scenario scoring, simulation runtime, instructor/operations dashboards, remediation queue, content-readiness/current-date controls, roles/permissions, audit history, TKE integration, security/privacy baseline, and phased MVP→EAOS/TKE implementation path.

This is a PLANNED specification. No software is considered implemented until code exists and functional tests pass.

## Immediate Priorities

1. Perform QA/instructor review on the six graded Module Exams, practicals, scoring policy, and their objective/remediation mappings.
2. Correct the stale Module 06 7-calendar-day shortfall prose in the student manual and instructor guide using the current regulatory verification record, then dependency-check all affected Module 06 assets.
3. Build or recover the highest-priority missing student tools identified in `04-STUDENT-TOOLS/RECOVERY-AUDIT-2026-08-19.md`, starting with the calculation/formula and integrated-load-evaluation tools needed by later modules/simulations.
4. Decide/build a separate Module 06 summative practical if the final assessment architecture requires one beyond the existing practice Scenario Lab.
5. Continue controlled curriculum production for Modules 07–15 in dependency order.
6. Prototype Wave 1 simulations from `SIMULATION-BACKLOG.md` as low-tech validated designs before investing in playable software.
7. Convert the software requirements baseline into an implementation plan only after near-term academy content/assessment requirements are sufficiently stable.
8. Continue duplicate/split curriculum reconciliation and final current-date publication verification.

## Publication Gate

Nothing listed above should be promoted to PUBLICATION_READY until the applicable content, terminology, dependency, factual/source, instructional, formatting/accessibility, and technical-testing gates have passed.