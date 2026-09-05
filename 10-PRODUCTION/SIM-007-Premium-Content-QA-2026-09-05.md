# SIM-007 Premium Content QA — 2026-09-05

**Module:** 07 — Rate Mathematics & Profitability  
**Branch independently inspected:** `sim-007-premium-repair`  
**Gate result:** **PASS — BUILD COMPLETE / RELEASE QA DEFERRED**

## Verification evidence
- GitHub Actions workflow: `SIM-007 Runtime Tests`
- Run ID: `33979935097`
- Tested commit: `f797020c2c75238b0c0df730a34edbf4a6414a3d`
- Job conclusion: **success**
- Full `npm test` step: **success**
- Suites executed: `logic.test.js`, `premium-gate.test.js`, `alignment.test.js`

## Q1 — Approved architecture — PASS
The existing strong Claude runtime was preserved rather than cosmetically rebuilt:
- exactly 10 progressive stages;
- 33 meaningful decisions;
- one progressive fictional dispatch work period;
- all 18 approved competency families represented.

## Q2 — Required premium package — PASS
Committed under `05-SIMULATIONS-AND-GAMES/Module-07/`:
- `SIM-007-Student-Instructions.md`
- `SIM-007-Scenario-and-Evidence-Packet.md`
- `SIM-007-Instructor-Guide.md`
- `SIM-007-Scoring-and-Competency-Map.md`
- `SIM-007-Completion-and-Competency-Record.md`
- browser runtime
- runtime README
- logic/premium/alignment tests.

## Q3 — Independent arithmetic verification — PASS
Core figures were recomputed from the actual scenario inputs rather than trusted from builder text.

Verified values:
- Alpha: 790 total miles; loaded RPM $3.80; effective RPM ≈ $2.89; 119.70 gal; fuel ≈ $472.80; 5%-fee contribution margin ≈ $1,693.20; 7%-fee contribution margin ≈ $1,647.60.
- Bravo: 580 total miles; loaded RPM ≈ $3.32; effective RPM ≈ $3.21; 87.88 gal; fuel ≈ $347.12; 5%-fee contribution margin ≈ $1,374.88; 7%-fee contribution margin ≈ $1,337.68.
- Charlie: 680 total miles; loaded RPM ≈ $3.47; effective RPM ≈ $2.96; 103.03 gal; fuel ≈ $406.97; 5%-fee contribution margin ≈ $1,482.53; 7%-fee contribution margin ≈ $1,442.33.
- Charlie fictional 3% quick-pay fee: $60.30; 5%-fee case margin after quick-pay: $1,422.23.
- Alpha $3.00 effective-RPM counter threshold: $3.00 × 790 = **$2,370**.

All checked figures align with the runtime’s stated final rounding/tolerance rules.

## Q4 — Loaded-mile-blindness reversal — PASS
Headline loaded RPM suggests Alpha > Charlie > Bravo. Effective RPM after total-trip normalization becomes Bravo > Charlie > Alpha. The simulation therefore demonstrates, rather than merely states, why loaded RPM alone can mislead.

## Q5 — Missing-input / HOLD FOR DATA — PASS
Load Delta intentionally lacks loaded miles and deadhead. The supported disposition is HOLD FOR DATA because material missing inputs could reverse any economic recommendation. The runtime does not force a guess.

## Q6 — Margin language — PASS
Partial-cost calculations are labeled contribution margin under stated included-cost assumptions rather than net/accounting/guaranteed profit. Excluded costs are disclosed in teaching and final-record controls.

## Q7 — Accessorial uncertainty — PASS
Charlie’s detention clause remains documented but unearned before trigger/documentation. The simulation does not add possible accessorial revenue to current/guaranteed revenue.

## Q8 — Cash-flow layer — PASS
The fictional quick-pay fee reduces contribution margin while providing faster cash timing. The simulation explicitly separates cash-flow speed from economic profitability.

## Q9 — Changed evidence and counter threshold — PASS
The signed dispatcher fee changes from 5% to 7%, forcing recalculation. The carrier’s supplied effective-RPM bands then produce Alpha COUNTER / Bravo TAKE / Charlie COUNTER. Alpha’s counter threshold uses total trip miles, not loaded miles.

## Q10 — Exactly five critical-failure families — PASS
Exactly:
- CF-01 Unsupported revenue
- CF-02 Profit mislabeling
- CF-03 Loaded-mile blindness
- CF-04 Fabricated input
- CF-05 Carrier-authority override

CF-01/CF-02 are documented as inherited assessment controls; CF-03–CF-05 are documented as simulation-specific occupational controls rather than falsely attributed to the existing Practical.

## Q11 — Critical persistence and materially different reassessment — PASS
The premium repair removed the obsolete behavior that allowed same-screen correction to erase critical history.

Current controls:
- preserve original critical response/family/timestamp;
- permit the main simulation to continue;
- same-screen correction may improve final response but cannot resolve the critical family;
- each family has a separate reassessment using different facts/numbers;
- successful reassessment records `RESOLVED_BY_REASSESSMENT` while retaining original evidence.

## Q12 — Separate first-attempt and corrected evidence — PASS
Runtime state and `computeCompletionRecord` retain first-attempt score, final mastery, remediation, competency status, critical-family status and reassessment state separately.

## Q13 — Carrier authority — PASS
The final briefing requires recommendation + reasoning while explicitly preserving carrier final decision authority. Booking first and notifying afterward is controlled as CF-05.

## Q14 — Package/alignment automation — PASS
Dedicated `alignment.test.js` verifies:
- five required package documents;
- runtime README;
- 10-stage/33-decision structure;
- all 18 competencies;
- exactly five critical families and reassessments;
- HOLD FOR DATA;
- $2,370 total-trip counter threshold;
- accessorial unearned state;
- fictional-instructional labeling.

## Q15 — Google / Employment / Buyer tests — PASS AT CONTENT-RUNTIME BUILD GATE
The simulation requires actual dispatcher economics work: input classification, calculations, competing-load comparison, changed evidence, accessorial/cash-flow treatment, HOLD decisions, counter threshold and carrier briefing. It is materially more useful than generic rate-per-mile advice and produces job-relevant evidence rather than formula recall alone.

## Deferred release-layer QA
This build gate does **not** establish `PUBLICATION_READY`.

Still deferred:
- browser/device compatibility QA;
- manual accessibility QA;
- headless DOM interaction testing if adopted;
- production deployment validation;
- LMS/student-account integration;
- durable competency records;
- assembled final release packaging QA.

## Final build-gate status
**SIM-007 — BUILD COMPLETE — RELEASE QA DEFERRED**

This QA result authorizes reconciliation into `academy-master-architecture` only. It does not authorize a merge to `main`.
