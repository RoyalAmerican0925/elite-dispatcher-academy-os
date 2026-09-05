# Module 07 Premium Repository Audit — 2026-09-05

**Branch:** `academy-master-architecture`
**Scope:** Rate Mathematics & Profitability
**Status:** ACTIVE PRE-SIM AUDIT — SIM-007 build is being produced separately; this audit does not certify that runtime.

## Executive finding
Module 07 already contains substantial correct teaching on total trip miles, loaded versus effective RPM, fuel, contribution-margin labeling, accessorial verification, factoring/quick-pay awareness, positioning, carrier-specific break-even concepts, and carrier final authority. It is not a thin module. However, the current package does not yet fully teach or operationalize several behaviors the approved SIM-007 specification will assess: explicit known/unknown/assumed input classification, a formal HOLD FOR DATA rule, arithmetic counter-threshold derivation, durable decision-basis recording, and a reconciled critical-failure model.

## Repository truth reviewed
### KEEP — ACTIVE / UPGRADE — ACTIVE
- `02-CURRICULUM/Module-07/Student-Manual-Part-01.md` — KEEP / targeted upgrade later if needed. Core formulas and Worked Example 1 are sound.
- `02-CURRICULUM/Module-07/Student-Manual-Part-02.md` — KEEP. Deadhead Trap, fuel discipline, contribution-margin discipline, break-even boundary are strong.
- `02-CURRICULUM/Module-07/Student-Manual-Part-03.md` — KEEP / targeted upgrade. Strong accessorial, fee, comparison, workflow and scenario content; needs explicit missing-data decision protocol for SIM-007 alignment.
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Calculation-Worksheet.md` — UPGRADE. Current form accepts blank numeric fields but has no known/unknown/assumed classification and no stop rule preventing a material unknown from silently becoming zero.
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Load-Comparison-Worksheet.md` — UPGRADE. Needs missing-data state, decision classification, and explicit excluded-cost/assumption record.
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Carrier-Onboarding-Cost-Information-Worksheet.md` — KEEP / minor future upgrade. Correctly states carrier-reported information is not independently verified break-even accounting.
- `03-ASSESSMENTS/Module-Quizzes/Module-07-Knowledge-Check.md` — KEEP / future alignment upgrade. Existing Item 13 correctly recognizes insufficient deadhead information, but the assessment does not yet require an operational HOLD FOR DATA decision.
- `03-ASSESSMENTS/Module-Exams/Module-07-Exam.md` — KEEP. Explicit critical items exist for unsupported revenue and profit mislabeling.
- `03-ASSESSMENTS/Practical-Assessments/Module-07-Practical.md` — KEEP. Explicitly defines unearned detention counted as current revenue as a practical critical failure.
- `03-ASSESSMENTS/Practical-Assessments/Module-07-Practical-Scoring-Guide.md` — KEEP. Correct arithmetic verified on all three practical loads.
- `03-ASSESSMENTS/Instructor-Guides/Module-07.md` — UPGRADE. Section H currently says M07 has no formally defined critical-failure list, which conflicts with the actual Exam and Practical files.
- `00-ACADEMY-MASTER/MODULE-07-MASTER-BRANCH.md` — KEEP / status update only after independent SIM-007 gate.

## Independently checked mathematics
### Student Manual Worked Example 1
- Total miles: 100 + 600 + 50 = 750.
- Loaded RPM: 1500 / 600 = 2.50.
- Effective RPM: 1500 / 750 = 2.00.
- Gallons: 750 / 7 = 107.142857.
- Fuel: 107.142857 × 4.00 = 428.5714.
- Dispatcher fee: 1500 × 0.05 = 75.
- Factoring fee: 1500 × 0.03 = 45.
- Included costs: 428.57 + 40 + 75 + 45 = 588.57.
- Contribution margin: 1500 − 588.57 = 911.43.
**Result:** arithmetic sound.

### Deadhead Trap
Load A: 600 total miles; loaded RPM 3.00; effective RPM 2.00; fuel 350; revenue after fuel 850.
Load B: 460 total miles; loaded/effective RPM 2.50; gallons 76.6667; fuel 268.33; revenue after fuel 881.67.
**Result:** arithmetic sound; teaching correctly avoids calling fuel-adjusted revenue final profit.

### Practical
Load 1: 705 total miles; loaded RPM ≈2.82; effective RPM ≈2.48; gallons ≈105.22; fuel ≈405.11; dispatcher 87.50; stated-cost contribution ≈1257.39.
Load 2: 600 total miles; loaded RPM ≈2.71; effective RPM ≈2.67; gallons ≈89.55; fuel ≈344.78; dispatcher 80; factoring 32; toll 35; stated-cost contribution ≈1108.22.
Load 3: 700 total miles; loaded RPM 4.10; effective RPM ≈2.93; gallons ≈104.48; fuel ≈402.24; dispatcher 102.50; stated-cost contribution ≈1545.26. Unearned detention correctly excluded.
**Result:** scoring-guide arithmetic sound within rounding.

## Premium gaps requiring repair
### G-01 — Missing-data discipline
Current worksheets do not force the student to classify each input as VERIFIED/PROVIDED, UNKNOWN, or ASSUMED-FOR-TRAINING. A blank can be treated psychologically as zero. Premium repair must explicitly prohibit converting a material unknown to zero.

### G-02 — HOLD FOR DATA
The manual recognizes insufficient information conceptually, but the operational workflow currently jumps from calculations to presenting numbers. Add a formal rule: when a material input could reverse the decision and is not known, do not manufacture the input; identify it and classify the load HOLD FOR DATA until the carrier/appropriate source resolves it.

### G-03 — Counter-threshold arithmetic
M07 should teach only the arithmetic bridge needed for M08, not negotiation tactics. Where the carrier supplies a decision floor, the student may calculate the minimum total revenue required from that floor and relevant miles/cost structure. Wording/negotiation behavior remains Module 08.

### G-04 — Decision evidence
Current tools record calculations but not the complete decision basis. Premium tools should record TAKE / COUNTER / HOLD FOR DATA / DECLINE, the controlling numbers, assumptions, unknowns, excluded costs, positioning factors, and carrier authorization state.

### G-05 — Critical-failure inconsistency
Repository truth:
- Exam Item 24 is explicitly `CRITICAL ITEM — Unsupported Revenue`.
- Exam Item 26 is explicitly `CRITICAL ITEM — Profit Mislabeling`.
- Practical explicitly calls treating unearned detention as guaranteed/current revenue a critical failure.
- Instructor Guide Section H says M07 does not currently have a formally defined critical-failure list.
This is inconsistent. Repair must distinguish **assessment-inherited critical controls** (unsupported revenue and profit mislabeling) from **SIM-007-specific occupational controls** rather than claiming all SIM controls pre-existed.

### G-06 — Tool comparison wording
The current Load-Comparison Worksheet warns that differing included costs can prevent apples-to-apples comparison. This needs precision: a legitimate zero-dollar cost (e.g., no factoring on one load) does not invalidate comparison. The issue is inconsistent category treatment or unknown/unverified values, not merely different dollar amounts.

## Scope boundaries preserved
- M07 owns economic calculation and load-comparison judgment.
- M08 owns negotiation language/tactics. M07 may calculate a counter threshold but should not train broker negotiation scripts.
- M09 owns booking/rate-confirmation workflow.
- M10/M11 own routing/time/HOS mechanics; M07 may consume provided operational constraints without turning into a trip-planning/HOS module.
- M13/M14 own exception/claims/closeout depth.

## Source/currentness finding
All reviewed case rates, percentages, tolls and fuel prices are correctly framed as fictional instructional assumptions. Live fuel data should be current-sourced when used in real instruction. The existing 49 CFR §371.3 broker-record discussion is source-sensitive and should remain tied to authoritative federal text rather than generalized into broader disclosure claims.

## Gate decision
**M07 pre-SIM content: NOT YET CLOSED.**
Required before closure:
1. Upgrade calculation/comparison tools for known/unknown/assumed and HOLD discipline.
2. Add explicit M07 Decision Protocol teaching for HOLD and counter-threshold arithmetic.
3. Reconcile Instructor Guide critical-failure language.
4. After Claude handoff, independently inspect SIM-007 actual files and runtime before any M07 status change.
