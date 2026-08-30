# Academy Release Readiness Matrix

## Gate Sequence
| Gate | Question | Result does NOT mean |
|---|---|---|
| Factual/Regulatory QA | Are source-sensitive claims correct/current/qualified? | visually finished |
| Instructional Depth | Does it teach occupational competency beyond definitions? | release ready |
| Dependency Alignment | Do manual/tools/assessments/practical/simulation agree? | release ready |
| Assessment QA | Are blueprints, keys, scoring, thresholds and critical logic sound? | release ready |
| Simulation Build QA | Does the simulation teach/measure the intended workflow and pass runtime tests? | publication ready |
| Editorial QA | Is language clear, consistent, professional and contamination-free? | deployed |
| Visual/Brand QA | Does the customer-facing artifact meet design standards? | technically integrated |
| Accessibility QA | Can intended students use the product accessibly? | all devices verified |
| Device/Browser QA | Does digital delivery work on supported environments? | LMS records verified |
| LMS/Records QA | Are access, progress, completion and records durable/correct? | commercial launch authorized |
| Final Release QA | Does assembled product satisfy all release requirements? | future regulatory currency guaranteed |

## Current High-Level Status
- Master architecture: ACTIVE BUILD on `academy-master-architecture` branch.
- Module 01: premium-depth rebuild active separately; not publication ready.
- Module 02: earlier commercial-content PASS; premium-depth audit required.
- Module 03: earlier commercial-content PASS; premium-depth audit required; SIM-003 active.
- Module 04: earlier commercial-content PASS; premium-depth audit required.
- Module 05: regular closeout repair pending; premium-depth audit follows.
- Module 06: research authorized; production expansion controlled.
- Module 07: production draft; commercial/premium gate required.
- Modules 08–15: exact live scope verification required before detailed master mapping.

## Release Rule
No single PASS label overrides unresolved downstream gates. `BUILD COMPLETE — RELEASE QA DEFERRED` is an intentional intermediate state for simulations and other components whose assembled delivery-layer testing is deferred.