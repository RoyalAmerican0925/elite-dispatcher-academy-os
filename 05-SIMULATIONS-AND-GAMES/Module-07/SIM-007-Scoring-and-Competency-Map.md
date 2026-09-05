# SIM-007 — Rate & Profitability Decision Desk
## Scoring & Competency Map

## Evidence model
SIM-007 contains 33 meaningful decisions across 10 progressive stages. The runtime preserves first-attempt performance separately from corrected/final mastery. The premium simulation gate is competency-based rather than a simple percent score: all required evidence must reach mastery and no critical family may remain unresolved.

## Competency map
| Competency | Core evidence |
|---|---|
| C01 — Known / unknown / assumed inputs | D01, D02, D03 |
| C02 — Total trip miles | D05, D06, D07 |
| C03 — Loaded RPM | D08 |
| C04 — Effective RPM | D09 and final comparison evidence |
| C05 — Loaded-mile blindness | D03, D04, D09 |
| C06 — Gallons/fuel from total miles + MPG | D10, D11, D12 |
| C07 — Verified trip-specific costs/fees | D13 |
| C08 — Contribution margin | D14, D15, D21, D25, D26 |
| C09 — Revenue/margin/cash flow/profit distinctions | D16, D31 |
| C10 — Accessorial verification | D17, D18 |
| C11 — Quick-pay/factoring effects | D19, D20, D21 |
| C12 — Positioning without guaranteed-value assumption | D22, D23 |
| C13 — Recalculate when evidence changes | D24, D25, D26 |
| C14 — Compare multiple loads without one-metric shortcut | D09, D27 |
| C15 — HOLD FOR DATA | D33 |
| C16 — Counter threshold from carrier criteria | D27, D28 |
| C17 — Communicate assumptions/exclusions | D29, D31, D32 |
| C18 — Preserve carrier final authority | D30 |

## Critical-failure mapping
Exactly five families are authorized:

| Family | Behavior | Runtime controls | Reassessment |
|---|---|---|---|
| CF-01 | Adds unearned/unverified accessorial revenue to current/guaranteed revenue | D17 | SIM07-R01 — new layover trigger case |
| CF-02 | Labels partial-cost contribution margin as guaranteed/net/accounting profit or take-home | D16 | SIM07-R02 — new partial-cost margin case |
| CF-03 | Uses loaded RPM/headline rate for economic choice while bypassing material total-mile evidence | D04, D09, D27 | SIM07-R03 — new Red/Blue/Green effective-RPM case |
| CF-04 | Converts material unknown input to zero/assumed fact without verification/disclosure | D02 | SIM07-R04 — new missing-deadhead case |
| CF-05 | Overrides carrier final decision authority | D30 | SIM07-R05 — new carrier briefing case |

CF-01/CF-02 inherit the existing assessment chain. CF-03/CF-04/CF-05 are simulation-specific occupational controls.

## Critical history rule
A triggering response records:
- original decision;
- response;
- family;
- timestamp;
- later original-screen correction, if any;
- separate reassessment scenario and result.

A same-screen correction never converts a triggered family to NO FAILURE OBSERVED. Successful materially different reassessment changes the family state to **RESOLVED BY REASSESSMENT**.

## Competency statuses
- **In Progress** — required evidence not yet completed.
- **Mastered** — required evidence correct without remediation.
- **Mastered After Remediation** — ordinary mistake corrected.
- **Needs Reassessment** — critical behavior occurred and remains unresolved.
- **Mastered After Reassessment** — materially different critical reassessment passed.
- **Needs Instructor Review** — main case is complete but required mastery is not established.

## Numeric tolerances
The runtime accepts the exercise-specific tolerances encoded in each numeric decision. The tolerance prevents harmless rounding variation from being scored as conceptual error while still rejecting materially incorrect calculations.

The underlying values were independently recomputed during 2026-09-05 premium QA:
- Alpha total miles 790; fuel ≈ $472.80; 5% margin ≈ $1,693.20; 7% margin ≈ $1,647.60.
- Bravo total miles 580; fuel ≈ $347.12; 5% margin ≈ $1,374.88; 7% margin ≈ $1,337.68.
- Charlie total miles 680; fuel ≈ $406.97; 5% margin ≈ $1,482.53; 7% margin ≈ $1,442.33.
- Charlie fictional 3% quick-pay fee = $60.30; 5%-case margin after quick-pay = $1,422.23.
- Alpha $3.00 effective-RPM counter threshold = $2,370 using 790 total trip miles.

## Completion rule
SIM-007 completes only after:
1. every main-case decision has been attempted;
2. final mastery is established across all 33 decisions or approved reassessment equivalent;
3. every triggered critical family is either untriggered or RESOLVED BY REASSESSMENT.

The first-attempt score remains in the completion record as diagnostic evidence even after final mastery.
