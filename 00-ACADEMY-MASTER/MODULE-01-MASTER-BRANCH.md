# Module 01 Master Branch — Trucking Industry Foundations

**Control status:** BUILD COMPLETE — RELEASE QA DEFERRED

## Employment outcome
Student can read a basic freight file, correctly identify the principal parties and their roles, trace the physical/information/document/payment flows, identify known/unknown/verification-required information, recognize foundational carrier/dispatcher concepts, and choose the next safe professional action without guessing.

## Core competencies
- M01-C01 parties and roles without ownership assumptions
- M01-C02 physical freight flow
- M01-C03 information / communication flow
- M01-C04 document flow
- M01-C05 payment flow
- M01-C06 basic dispatch-file reading
- M01-C07 foundational operating vocabulary
- M01-C08 USDOT versus operating authority
- M01-C09 interstate / intrastate nuance
- M01-C10 dispatcher versus other freight functions
- M01-C11 KNOWN / UNKNOWN / VERIFY
- M01-C12 carrier-side lifecycle sequencing
- M01-C13 STOP → IDENTIFY → TRACE → VERIFY → HAND OFF
- M01-C14 recognize later specialized workflow / handoff
- M01-C15 correct beginner misconceptions with operational reasoning

## Controlling mental model
**PARTIES → FOUR FLOWS → DOCUMENT PURPOSE → KNOWN / UNKNOWN / VERIFY → STOP → IDENTIFY → TRACE → VERIFY → HAND OFF → NEXT SAFE ACTION**

## Student manual
Active premium instructional sequence:
- `02-CURRICULUM/Module-01/Student-Manual-Part-01.md`
- `02-CURRICULUM/Module-01/Student-Manual-Part-02.md`
- `02-CURRICULUM/Module-01/Student-Manual-Part-03.md`
- `02-CURRICULUM/Module-01/Student-Manual-Part-04.md` — Reading the Dispatch Desk

Part 04 provides the Four-Flow model, KNOWN / UNKNOWN / VERIFY discipline, STOP → IDENTIFY → TRACE → VERIFY → HAND OFF, desk drills, and freight-file lab. Existing strong Parts 01–03 remain active; no rewrite-for-newness was performed.

## Professional language layer
Required vocabulary is introduced in context and reinforced through occupational decisions:
- shipper / consignee / carrier / driver / dispatcher / broker / freight forwarder / factor
- origin / destination / pickup / delivery
- appointment / FCFS
- live load / live unload / drop-and-hook
- loaded miles / deadhead / total trip miles
- lane / capacity
- BOL / rate confirmation / POD / invoice
- USDOT number / operating authority
- interstate / intrastate

## Student tools
Three active operational tools are verified:
1. `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Freight-Role-Map-Worksheet.md`
2. `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Load-Lifecycle-Sequencing-Worksheet.md`
3. `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Dispatch-File-Intake-and-Verification-Map.md`

Premium trace:
- Role Map → parties/functions/relationships
- Lifecycle worksheet → physical/information/document/payment flow
- Intake & Verification Map → KNOWN/UNKNOWN/VERIFY, source-to-confirm, STOP framework, next action and specialized-workflow handoff

## Assessment chain
- **Knowledge Check:** premium 20-item diagnostic; foundational recall plus applied freight-file evidence reasoning.
- **Instructor diagnostic answer guide:** synchronized with rationale/remediation.
- **Module Exam:** premium 30-item graded exam; **24/30 passing standard**; includes Freight File Decision Desk.
- **Exam Answer Key:** synchronized, with remediation and currentness controls.
- **Practical:** premium **30-point Freight Movement Desk** using the three operational tools, four-flow trace, evidence classification, changed-evidence handling and professional next-action record.
- **Dedicated Module 01 Practical Instructor Scoring Guide:** 24/30 plus required assumption-control remediation.
- **Full Module 01 Instructor Guide:** verified active and aligned to M01-C01–C15.

Module 01 does not invent a formal automatic critical-failure family. Repeated unsafe assumption behavior can still block competency recording until the learner demonstrates corrected performance on materially different facts.

## Simulation
**SIM-001 — Freight Movement Desk**

**Status: BUILD COMPLETE — RELEASE QA DEFERRED**

Verified premium runtime:
- **8 progressive stages**
- **18 meaningful decisions**
- all **15 controlled M01 competency families** represented
- original Decisions D01–D13 preserved
- premium Decisions D14–D18 add document-state reasoning, KNOWN/UNKNOWN/VERIFY, interstate/intrastate nuance, specialized-workflow handoff and STOP/next-safe-action evidence
- first-attempt evidence preserved separately from corrected/final mastery
- remediation and instructor-review state supported
- completion record covers D01–D18 and M01-C01–C15
- browser state is local only; durable LMS/student-account evidence remains a release-layer task

Automated gates:
- runtime/state regression suite
- premium competency/architecture suite
- cross-package curriculum/tool/assessment/instructor alignment suite

TDD RED was proven against the prior 6-stage/13-decision build on GitHub Actions run `33980893267`.

Full GREEN package verification passed on GitHub Actions run `33981159043`.

## Simulation package
Active controls include:
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Student.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Student-Premium-Addendum.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Scenario-Packet.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Instructor-Guide.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Instructor-Premium-Addendum.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Scoring-Rubric.md`
- `05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Completion-Record.md`
- browser runtime and automated tests under `05-SIMULATIONS-AND-GAMES/Module-01/runtime/`

## Source / regulatory controls
Current authoritative-source recheck:
- `10-PRODUCTION/Module-01-Current-Source-Recheck-2026-09-05.md`

Build-gate findings:
- USDOT Number and operating authority remain distinct foundational concepts;
- Motus is the current FMCSA registration environment after the May 2026 transition;
- MC / FF / MX docket terminology remains relevant in the current environment;
- course wording avoids obsolete legacy registration-procedure instructions.

Registration screens/display conventions and other date-sensitive claims must be rechecked before commercial publication/launch.

## Premium QA authority
Permanent independent QA:
- `10-PRODUCTION/Module-01-Premium-Content-QA-2026-09-05.md`

Result:
- Google Test — PASS
- Employment Test — PASS
- Buyer Test — PASS
- curriculum/tool/assessment/SIM competency chain — PASS
- automated content/runtime/package gates — PASS

## Historical branch reconciliation
The old `module-01-premium-depth-rebuild` branch was not merged wholesale because it was materially behind the active academy architecture. Strong assets were selectively reconciled. Part 04 had already reached the academy branch; the missing Dispatch File Intake & Verification Map was selectively restored during this premium reconciliation.

## Deferred release QA
Remaining work is release-layer only:
- browser/device compatibility matrix;
- manual accessibility review;
- production deployment validation;
- LMS/student-account integration;
- durable competency-record storage;
- assembled print/export/package QA;
- final pre-publication current-source check.

## Completion finding
**MODULE 01 / SIM-001 — BUILD COMPLETE — RELEASE QA DEFERRED**

This status does not establish `PUBLICATION_READY` and does not authorize a merge to `main`.
