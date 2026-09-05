# Module 07 Master Branch — Rate Mathematics & Profitability

**Control status:** BUILD COMPLETE — RELEASE QA DEFERRED

## Employment outcome
Student can calculate and compare load economics using total trip miles and carrier-specific costs, distinguish revenue/cash flow/profit concepts, identify loaded-mile blindness, evaluate accessorial/factoring/quick-pay effects, identify material unknowns, calculate a carrier-supported economic threshold when sufficient criteria exist, and issue a defensible TAKE / COUNTER / HOLD FOR DATA / DECLINE recommendation while preserving carrier final decision authority.

## Core competency families
- gross load revenue versus profit
- loaded miles / deadhead / total trip miles
- loaded RPM versus effective RPM
- known / unknown / fictional-training-assumption input classification
- material-unknown / HOLD FOR DATA discipline
- fuel-cost calculation
- carrier-cost and contribution-margin reasoning
- break-even analysis
- counter-threshold arithmetic from carrier-provided criteria
- accessorial economics
- factoring / quick-pay effects and cash-flow distinction
- competing-load comparison
- changed-evidence recalculation
- destination positioning
- carrier-specific decision criteria
- recommendation versus carrier final authority

## Professional language layer
Gross revenue; loaded RPM; effective RPM; deadhead; total trip miles; fuel cost; operating cost; contribution margin; break-even; detention; layover; TONU; lumper; multi-stop; factoring; quick pay; dispatcher compensation; positioning; material unknown; HOLD FOR DATA; carrier decision criterion.

## Student manual
Three production-draft manual parts remain active. Premium occupational decision protocol:
- `02-CURRICULUM/Module-07/Student-Manual-Premium-Decision-Protocol.md`

The protocol teaches P/U/A input classification, materiality, HOLD FOR DATA, arithmetic counter thresholds, changed-evidence recalculation, possible-versus-current revenue control and decision-record discipline.

## Student tools
Active tools:
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Calculation-Worksheet.md`
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Load-Comparison-Worksheet.md`
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Carrier-Onboarding-Cost-Information-Worksheet.md`

The calculation/comparison tools distinguish provided/verified, unknown/unresolved and fictional training assumptions; prohibit silent unknown-to-zero conversion; support HOLD FOR DATA; and record TAKE / COUNTER / HOLD / DECLINE reasoning.

## Assessment chain
- Module 07 Knowledge Check — CREATED / diagnostic.
- Module 07 Exam — CREATED.
- Exam answer key — CREATED.
- Practical — EXISTS; includes unsupported/unearned-revenue control.
- Practical scoring guide — CREATED; arithmetic independently rechecked 2026-09-05.
- Premium decision knowledge check + key — CREATED.

## Instructor controls
Existing full guide remains active with controlling addendum:
- `03-ASSESSMENTS/Instructor-Guides/Module-07-Premium-Alignment-Addendum.md`

The addendum distinguishes assessment-inherited controls from SIM-007-specific occupational controls.

## SIM-007 — Rate & Profitability Decision Desk
Approved design:
- `10-PRODUCTION/Module-07-SIM-007-Design-Spec-2026-09-05.md`

Implementation plan:
- `10-PRODUCTION/Module-07-SIM-007-Implementation-Plan-2026-09-05.md`

Permanent simulation package:
- `05-SIMULATIONS-AND-GAMES/Module-07/SIM-007-Student-Instructions.md`
- `05-SIMULATIONS-AND-GAMES/Module-07/SIM-007-Scenario-and-Evidence-Packet.md`
- `05-SIMULATIONS-AND-GAMES/Module-07/SIM-007-Instructor-Guide.md`
- `05-SIMULATIONS-AND-GAMES/Module-07/SIM-007-Scoring-and-Competency-Map.md`
- `05-SIMULATIONS-AND-GAMES/Module-07/SIM-007-Completion-and-Competency-Record.md`
- browser runtime + README + automated tests.

Verified runtime architecture:
- exactly 10 progressive stages;
- 33 meaningful decisions;
- all 18 approved competencies;
- numeric tolerance controls;
- HOLD FOR DATA;
- TAKE / COUNTER / HOLD / DECLINE reasoning;
- changed-evidence recalculation;
- total-trip counter threshold;
- printable competency summary.

## Exactly five critical-failure families
- CF-01 Unsupported revenue
- CF-02 Profit mislabeling
- CF-03 Loaded-mile blindness
- CF-04 Fabricated input
- CF-05 Carrier-authority override

CF-01/CF-02 inherit the existing assessment chain. CF-03–CF-05 are simulation-specific occupational controls.

## Remediation control
- first-attempt evidence remains immutable;
- a critical trigger cannot be erased by same-screen correction;
- each critical family has a materially different reassessment case;
- corrected/original/reassessment evidence is recorded separately;
- resolved critical history is labeled `RESOLVED_BY_REASSESSMENT` rather than rewritten as no failure observed.

## Arithmetic verification
Independent 2026-09-05 recomputation verified:
- Alpha: 790 total miles; effective RPM ≈ $2.89; fuel ≈ $472.80; 5% contribution margin ≈ $1,693.20; 7% contribution margin ≈ $1,647.60.
- Bravo: 580 total miles; effective RPM ≈ $3.21; fuel ≈ $347.12; 5% contribution margin ≈ $1,374.88; 7% contribution margin ≈ $1,337.68.
- Charlie: 680 total miles; effective RPM ≈ $2.96; fuel ≈ $406.97; 5% contribution margin ≈ $1,482.53; 7% contribution margin ≈ $1,442.33.
- Charlie fictional 3% quick-pay fee $60.30; resulting 5%-case margin $1,422.23.
- Alpha $3.00 effective-RPM counter threshold = $2,370 using 790 total trip miles.

## Automated verification
GitHub Actions workflow: `SIM-007 Runtime Tests`  
Run ID: `33979935097`  
Tested commit: `f797020c2c75238b0c0df730a34edbf4a6414a3d`  
Conclusion: **success**

The full test command covers logic, premium critical-remediation/state controls and package alignment.

Independent QA:
- `10-PRODUCTION/SIM-007-Premium-Content-QA-2026-09-05.md`

QA result: **PASS — BUILD COMPLETE / RELEASE QA DEFERRED**.

## Source / currentness controls
Market/fuel figures used for arithmetic are explicitly fictional training data rather than universal/current benchmarks. Any future legal/regulatory statement added to the module must be reverified against authoritative sources before commercial release.

## Premium gate result
The module passes the content/runtime build gate for:
- **Google Test:** teaches decision discipline beyond generic RPM formulas.
- **Employment Test:** learner performs real load-economics calculations, comparison, changed-evidence recalculation, HOLD decisions, counter-threshold math and carrier briefing.
- **Buyer Test:** manuals, tools, assessments, instructor controls, simulation, remediation and competency records form a coherent occupational package.

## Release status rule
Current truthful status:

**SIM-007 — BUILD COMPLETE — RELEASE QA DEFERRED**

Still deferred before `PUBLICATION_READY`:
- browser/device compatibility QA;
- production deployment validation;
- LMS/student-account integration;
- durable competency records;
- manual accessibility QA;
- assembled final release packaging QA.

Nothing here authorizes a merge to `main`.
