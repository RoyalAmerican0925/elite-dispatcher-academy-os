# Module 01 Master Branch — Trucking Industry Foundations

**Control status:** VERIFIED EXISTS / PREMIUM REBUILD RECONCILED 2026-09-05

## Employment outcome
Student can read a basic freight file, correctly identify the principal parties and their roles, trace the physical/information/document/payment flows, identify known/unknown/unverified information, recognize foundational carrier/dispatcher concepts, and choose the next safe professional action without guessing.

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

## Student manual
- `02-CURRICULUM/Module-01/Student-Manual-Part-01.md` — VERIFIED EXISTS / CONFIRMED IDENTICAL ACROSS `main`, `academy-master-architecture`, AND `module-01-premium-depth-rebuild` (direct SHA comparison, 2026-09-05)
- `Student-Manual-Part-02.md` — VERIFIED EXISTS / CONFIRMED IDENTICAL ACROSS ALL THREE BRANCHES (direct SHA comparison, 2026-09-05)
- `Student-Manual-Part-03.md` — VERIFIED EXISTS / CONFIRMED IDENTICAL ACROSS ALL THREE BRANCHES (direct SHA comparison, 2026-09-05). The previously listed "shipper=owner contradiction" defect was investigated and found NOT PRESENT in the current file on any branch — the glossary correctly defines Shipper as "the party that tenders or sends the freight," explicitly stating ownership is not what defines the role. That defect entry was stale and has been removed from this file's known-defects list below.
- `Student-Manual-Part-04.md` — Reading the Dispatch Desk — MERGED 2026-09-05 from `module-01-premium-depth-rebuild` (previously unmerged "Premium Part 04"). Content verified strong: teaches the Four-Flow model (Physical/Information/Document/Payment), the KNOWN/UNKNOWN/VERIFY framework, and the STOP→IDENTIFY→TRACE→VERIFY→HAND OFF decision framework, with three Desk Drills and a four-file Freight File Lab using fictional entities consistent with SIM-001 (Prairie Freight Brokers, North Star Transport, Omaha→Des Moines).

## Professional language layer
Required vocabulary is introduced in context, not as memorization only. Student must understand meaning, workplace usage, common misuse, operational consequence, related terms, and later-module connection.

Key M01 language families:
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
Verified on Module-01 rebuild work:
- Freight Role Map Worksheet
- Load Lifecycle Sequencing Worksheet
- Dispatch File Intake and Verification Map

Required premium trace:
- Role Map → roles/relationships
- Four-Flow Lifecycle → freight/information/documents/money
- Intake/Verification Map → KNOWN/UNKNOWN/VERIFY + next action
- STOP framework → decision discipline

## Assessment chain
- Knowledge check — VERIFIED EXISTS / PREMIUM ALIGNMENT AUDIT REQUIRED
- Module exam — VERIFIED EXISTS / PREMIUM ALIGNMENT AUDIT REQUIRED
- Practical: Freight Movement Role Map / Blue River Foods — VERIFIED EXISTS / UPGRADE REQUIRED for integrated four-flow + verification judgment
- Instructor answer/scoring materials — VERIFIED EXISTS / SYNCHRONIZATION REQUIRED
- Exam blueprint (`03-ASSESSMENTS/Module-Exams/EXAM-BLUEPRINT-Modules-01-06.md`) — CONFIRMED ALREADY PRESENT on this branch, identical to the copy on `module-01-premium-depth-rebuild` (direct SHA comparison, 2026-09-05). A prior reconciliation note describing this file as missing/unmerged was itself stale; no merge was needed.

## Simulation
**SIM-001 — Freight Movement Desk**
Status: BUILD COMPLETE — RELEASE QA DEFERRED.
Runtime (`app.js`, `content.js`, `logic.js`, `index.html`, `package.json`, `runtime.test.mjs`, `styles.css`, `README.md`) CONFIRMED BYTE-IDENTICAL across `academy-master-architecture` and `module-01-premium-depth-rebuild` (direct SHA comparison, all files, 2026-09-05). No decision-content divergence exists between branches.
Must be re-audited after premium curriculum expansion; do not blindly rebuild.
Required mental-model alignment: parties → four flows → document purpose → missing information → verification → next action.

## Source / regulatory controls
Primary-source verification required for legal/date-sensitive claims, including USDOT versus operating authority, FMCSA/Motus registration context, and interstate/intrastate statements. Categorical language must be checked for exceptions.

## Known defects / open production work
1. Verify all cross-module promises against live repository scope.
2. Reduce definition-only teaching by adding occupational application.
3. Synchronize manual → tools → KC → exam → practical → SIM-001, now that Part 04 is merged and included in the manual sequence.
4. Complete premium-depth QA using Google, Employment, and Buyer tests.

(Prior item "Repair Part 03 shipper=owner contradiction" removed 2026-09-05 — confirmed not present in the current file via direct three-way SHA comparison; see Student manual section above.)

## Completion gate
Module 01 cannot close until instruction, language, tools, assessments, practical, simulation, source controls, and competency evidence all trace to the same mental model. Premium-depth PASS does not equal PUBLICATION_READY.
