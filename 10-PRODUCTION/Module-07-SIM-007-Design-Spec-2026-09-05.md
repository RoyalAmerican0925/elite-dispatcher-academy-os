# Module 07 / SIM-007 Premium Design Specification

**Date:** 2026-09-05
**Branch:** `academy-master-architecture`
**Status:** APPROVED FOR IMPLEMENTATION
**Main merge:** PROHIBITED without explicit user authorization

## Purpose
SIM-007 — **Rate & Profitability Decision Desk** converts Module 07 from formula recall into occupational decision performance. The student must make defensible load-economics decisions under time pressure using incomplete, changing, and competing economic/operational information.

## Employment outcome
The student can calculate and compare load economics using total trip miles and carrier-specific cost inputs; distinguish loaded RPM from effective RPM; estimate fuel and known trip costs; label partial margin calculations honestly; verify rather than assume accessorial revenue; account for fees and positioning; identify missing decision inputs; and issue a defensible **TAKE / COUNTER / HOLD FOR DATA / DECLINE** recommendation while preserving carrier decision authority.

## Controlling doctrine
**RATE IS NOT PROFIT. LOADED RPM IS NOT EFFECTIVE RPM. CONTRIBUTION MARGIN IS NOT NET PROFIT. A MISSING INPUT IS NOT ZERO. POSSIBLE ACCESSORIAL REVENUE IS NOT EARNED REVENUE.**

Decision sequence:

**RECEIVE LOAD DATA → ISOLATE KNOWN / UNKNOWN / ASSUMED INPUTS → CALCULATE TOTAL TRIP MILES → CALCULATE LOADED + EFFECTIVE RPM → ESTIMATE FUEL → APPLY VERIFIED FEES/COSTS → VERIFY ACCESSORIAL TREATMENT → CALCULATE AND LABEL MARGIN → WEIGH POSITIONING/CONSTRAINTS → COMPARE OPTIONS → TAKE / COUNTER / HOLD FOR DATA / DECLINE → RECORD BASIS**

## Source truth
Implementation must reconcile against actual repository files, including:
- `02-CURRICULUM/Module-07/Student-Manual-Part-01.md`
- `Student-Manual-Part-02.md`
- `Student-Manual-Part-03.md`
- all files in `04-STUDENT-TOOLS/Module-07-Tools/`
- Module 07 Knowledge Check
- Module 07 Exam and Answer Key
- Module 07 Practical and Practical Scoring Guide
- `03-ASSESSMENTS/Instructor-Guides/Module-07.md`
- `00-ACADEMY-MASTER/MODULE-07-MASTER-BRANCH.md`

Old status text is evidence, not authority. Actual files control.

## Simulation architecture
SIM-007 is one progressive fictional dispatch work period, not disconnected arithmetic questions.

### Stage 1 — Carrier economic profile
Student receives carrier-specific operating inputs and must distinguish usable decision inputs from missing/irrelevant numbers. A missing input must remain unknown rather than silently becoming zero.

### Stage 2 — Incoming competing loads
Three plausible loads appear. Headline revenue and loaded RPM intentionally create an attractive-but-incomplete first impression.

### Stage 3 — Mileage normalization
Student calculates origin deadhead, loaded miles, relevant reposition/inter-stop/destination miles, total trip miles, loaded RPM and effective RPM. At least one load must reverse apparent ranking when deadhead is included.

### Stage 4 — Fuel and trip-cost layer
Student uses total trip miles, truck-specific MPG and a clearly fictional instructional fuel price to estimate gallons/fuel. Applicable toll/stop/known fees are introduced. Student must not use loaded miles alone for fuel.

### Stage 5 — Margin-labeling layer
Student calculates revenue less only the costs explicitly supplied. The result must be labeled `estimated contribution margin under stated included-cost assumptions`, not profit/net profit/take-home.

### Stage 6 — Accessorial uncertainty
A detention/layover/extra-stop possibility appears. Written terms may exist, but triggering conditions and/or documentation are incomplete. Student must not add unearned revenue.

### Stage 7 — Payment/cash-flow layer
A quick-pay or factoring option changes cash timing and fees. Student must distinguish cash-flow speed from economic profitability and use actual fictional exercise terms rather than a generic percentage assumption.

### Stage 8 — Positioning and operational trade-off
Destination market/next-move positioning and an operational constraint change the attractiveness of one option. Positioning is a planning factor, never guaranteed future revenue.

### Stage 9 — Changed evidence / counter threshold
New verified information changes one economic input. Student must re-run the affected calculation rather than anchor on the first result and determine whether TAKE, COUNTER, HOLD FOR DATA, or DECLINE is supported.

### Stage 10 — Final comparison and carrier briefing
Student produces a concise carrier-facing decision record showing calculations, assumptions, unknowns, excluded costs, verified/unverified revenue, qualitative positioning factors, recommended disposition, and explicit preservation of carrier final authority.

## Competency families
SIM-007 must generate evidence for at least these competencies:
1. classify known / unknown / assumed inputs;
2. calculate total trip miles correctly;
3. calculate loaded RPM;
4. calculate effective RPM;
5. identify loaded-mile blindness;
6. estimate gallons/fuel from total miles + carrier MPG;
7. apply verified trip-specific costs/fees;
8. calculate and accurately label contribution margin;
9. distinguish revenue, contribution margin, cash flow, and net/accounting profit;
10. verify accessorial treatment before counting revenue;
11. evaluate factoring/quick-pay effects without confusing speed with profit;
12. weigh positioning without treating it as guaranteed value;
13. reclassify/recalculate when evidence changes;
14. compare multiple loads without relying on one metric;
15. identify when missing information requires HOLD FOR DATA;
16. derive a counter threshold from the carrier's stated economic criteria when sufficient inputs exist;
17. communicate assumptions/exclusions professionally;
18. preserve carrier final decision authority.

## Critical failure controls
The simulation must align to the actual M07 assessment chain. At minimum, these behaviors require remediation and materially different reassessment before competency completion:
- **CF-01 Unsupported revenue:** adds unearned/unverified accessorial revenue to guaranteed/current revenue.
- **CF-02 Profit mislabeling:** represents a partial-cost margin as guaranteed profit/net profit/take-home.
- **CF-03 Loaded-mile blindness:** makes the final economic choice from loaded RPM/headline rate while bypassing material deadhead/total-mile evidence.
- **CF-04 Fabricated input:** converts a material unknown cost, mileage, fee, or operational input to zero/assumed fact without disclosure or verification.
- **CF-05 Carrier-authority override:** represents the dispatcher's recommendation as the carrier's final decision when the case requires carrier authorization.

CF-01 and CF-02 directly inherit the current Exam/Practical controls. CF-03–CF-05 are simulation-specific occupational controls and must be documented as such rather than falsely attributed to the existing Practical Scoring Guide.

## Remediation
- Preserve first-attempt answer, calculation, decision and critical-failure evidence.
- Explain **why** the decision failed, not merely reveal the answer.
- Critical failures cannot be erased by clicking the same decision again.
- Critical reassessment uses materially different numbers/facts.
- Corrected performance is recorded separately from original performance.

## Required package
Create under `05-SIMULATIONS-AND-GAMES/Module-07/`:
- `SIM-007-Student-Instructions.md`
- `SIM-007-Scenario-and-Evidence-Packet.md`
- `SIM-007-Instructor-Guide.md`
- `SIM-007-Scoring-and-Competency-Map.md`
- `SIM-007-Completion-and-Competency-Record.md`
- browser runtime directory with focused content/state/scoring code and automated tests
- runtime README with truthful limitations

## Runtime requirements
- progressive stage unlocks;
- no answer-key leakage;
- numeric tolerance rules where appropriate;
- first-attempt preservation;
- separate calculation evidence and judgment evidence;
- critical-failure persistence;
- remediation feedback;
- final competency calculation;
- instructor-review/completion state;
- exportable/printable competency summary where feasible without pretending LMS durability exists.

## Premium gate
Before status changes, independently verify:
- curriculum-to-simulation alignment;
- all formulas and arithmetic;
- tool vocabulary;
- assessment/critical-control alignment;
- ambiguity is realistic rather than trick-based;
- not all highest-dollar/highest-RPM choices are automatically wrong or right;
- missing-data HOLD decisions are sometimes correct;
- student is rewarded for disciplined economics, not blanket conservatism;
- automated logic/alignment tests pass;
- browser/device/LMS/manual-accessibility/durable-record release QA remains explicitly separate.

Passing this gate permits only **BUILD COMPLETE — RELEASE QA DEFERRED**, never `PUBLICATION_READY`.