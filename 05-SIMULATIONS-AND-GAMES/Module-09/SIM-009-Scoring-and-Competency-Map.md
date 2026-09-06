# SIM-009 — Booking Control Desk
## Scoring and Competency Map

This map traces every one of the 27 decisions to the competency (or competencies) it evidences, and separately maps all six critical-failure families to their triggering decision and reassessment.

---

## Competency map (M09-C01–M09-C15)

| Competency | Decisions providing evidence |
|---|---|
| M09-C01 — Interpret M08 handoff; distinguish agreed/conditional/unresolved/unverified | D01, D02 |
| M09-C02 — Identify parties, load, carrier, equipment, locations, dates, rate, document version | D03 |
| M09-C03 — Distinguish a rate confirmation from other document types | D05, D06 |
| M09-C04 — Extract all material terms, not headline-rate scanning | D07, D08 |
| M09-C05 — Reconcile verbal/agreement-in-principle terms against written terms | D09, D11, D12, D13, D14, D17 |
| M09-C06 — Classify discrepancies as material/nonmaterial/missing/later-workflow | D08, D10, D13 |
| M09-C07 — Stop and obtain correction/clarification on material conflicts | D15, D16 |
| M09-C08 — Recognize agreement-specific terms without inventing universal rules | D12 |
| M09-C09 — Stay within supplied authority; escalate when absent/exceeded | D04, D18, D19 |
| M09-C10 — Preserve document integrity, version control, timestamps, history | D21 |
| M09-C11 — Build a booking record separating source/verified/unresolved facts and decisions | D20 |
| M09-C12 — Build a dispatch packet with correct current documents, excluding obsolete versions | D22, D23 |
| M09-C13 — Issue a controlled driver handoff without inventing trip-planning/HOS conclusions | D17, D24, D27 |
| M09-C14 — Identify when a load isn't ready; use HOLD/CORRECT/ESCALATE, not false completion | D25, D26 |
| M09-C15 — Close the workflow with a traceable status and correct M10 handoff | D26, D27 |

All 15 competencies are covered by at least one decision — independently verified via `tests/logic.test.js` and `tests/premium-gate.test.js`.

## Critical-failure family map (M09-CF-01–M09-CF-06)

| Family | Definition | Triggering decision | Reassessment |
|---|---|---|---|
| M09-CF-01 | Unauthorized carrier commitment | D18 (signing RC v2's $2,400 without authorization) | Load REF-334, $500 damage-deposit clause |
| M09-CF-02 | Material rate-confirmation acceptance error | D10 (treating the unnegotiated detention clause as accepted) | Load REF-561, unnegotiated $150/day layover clause |
| M09-CF-03 | Unresolved discrepancy represented as resolved | D14 (declaring the load agreed/booked with material mismatches still open) | Load REF-902, equipment mismatch (53' van vs. 48' flatbed) |
| M09-CF-04 | Wrong/obsolete document used for dispatch | D23 (sending superseded RC v1 because of a matching reference number) | Load REF-118, teammate grabs v1 by mistake |
| M09-CF-05 | Document fabrication/material alteration | D21 (editing the RC v2 PDF to show $2,450) | Load REF-763, backdating a correction-request timestamp |
| M09-CF-06 | False booking completion | D25 (declaring BOOKED while authorization is still pending) | Load REF-449, internal sign-off still pending |

Exactly six critical-failure families, each triggered by exactly one main-scenario decision and resolved by exactly one materially-different reassessment scenario — verified by `tests/premium-gate.test.js` (`architecture: exactly six critical-failure families, no seventh`, `architecture: every critical family has exactly one materially different reassessment`).

## Scoring dimensions for instructor review

Consistent with the existing Module 09 Booking Control Desk Practical (10 dimensions × 0–3 = 30 points, pass 24/30 plus zero unresolved critical failures), an instructor reviewing a completed SIM-009 attempt can assess:

1. **Agreement interpretation** — correctly classifies M08 handoff terms as agreed/conditional/unresolved/unverified (never defaults everything to "agreed").
2. **Document identification and authentication** — correctly distinguishes the controlling rate confirmation from unrelated/obsolete attachments.
3. **Material-term extraction** — extracts only what is actually written, never a plausible-sounding field that wasn't stated.
4. **Reconciliation discipline** — never allows a matching rate to "average out" separate material mismatches (pickup time, driver assist, later the $50 rate deviation).
5. **Discrepancy classification** — correctly separates material, nonmaterial/clerical, and unknown/missing (an unnegotiated new term is UNKNOWN relative to the agreement, not a "mismatch" against nothing).
6. **Correction/escalation discipline** — never treats a verbal/informal confirmation as sufficient for a material term; always requires a corrected written document.
7. **Authority discipline** — never signs or accepts outside supplied authority regardless of dollar size, who introduced a change, or personal judgment.
8. **Document integrity** — never fabricates, alters, or backdates evidence, even to "match" a number that happens to be correct.
9. **Booking-record and dispatch-packet construction** — separates source/verified/unresolved facts correctly; excludes superseded and unrelated documents from the packet.
10. **Completion discipline and M10 handoff** — never declares BOOKED while a required control is outstanding; explicitly states that a booking-complete result is not an operational-complete result.

A student who triggers any of M09-CF-01 through M09-CF-06 must resolve the corresponding reassessment before the simulation reports `COMPLETE` — see `computeSimulationStatus` in `logic.js`.
