# SIM-009 — Booking Control Desk
## Scenario and Evidence Packet

**Carrier:** Palmetto Line Logistics. **Broker:** Cascade Freight Brokers. **Load:** CFB-8842, Charlotte NC → Richmond VA.
**All entities, rates, dates, and clauses are FICTIONAL TRAINING ENTITIES/INSTRUCTIONAL ASSUMPTIONS.**

This packet documents the case exactly as it appears in the runtime (`content.js`/`ARTIFACTS`), so instructors and reviewers can trace every decision without opening the code.

---

### Stage 1 artifact — M08 Negotiation Handoff (Load CFB-8842)

Rate $2,450 all-in (agreement-in-principle, **not yet booked**). Pickup Tuesday 14:00, Charlotte NC. Delivery Thursday 10:00, Richmond VA. Equipment 53' dry van. No driver assist required (negotiated). Detention: **not discussed in negotiation at all** — an open gap, not an agreed term. Reference: CFB-8842.

### Stage 2 artifact — Supplied Carrier Authority Matrix

Dispatcher **may**: negotiate, communicate, request corrections, accept/transmit written terms that match the negotiated agreement exactly. Dispatcher **may not**: accept/sign any rate different from $2,450, accept new operational obligations, or mark a load BOOKED while a material term is unresolved — all without owner/manager (Pat Alvarez) authorization.

### Stage 3 artifacts — Rate Confirmation v1 and an obsolete attachment

**RC v1** states: rate $2,450 (matches); pickup **Tuesday 08:00** (conflicts — negotiated was 14:00); driver assist **required** (conflicts — negotiated was none); detention $50/hr after 2 free hours (a new, unnegotiated term); broker name misspelled "Casacde" (clerical only — entity/MC identity otherwise verified). The same email thread also contains a rate confirmation for **Load CFB-7710** — a different, unrelated prior load — attached by apparent mistake.

### Stages 4–7 — Extraction, reconciliation, and classification

| Term | Negotiated | RC v1 | Classification |
|---|---|---|---|
| Rate | $2,450 | $2,450 | MATCH |
| Pickup | Tue 14:00 | Tue 08:00 | MISMATCH — MATERIAL |
| Driver assist | None | Required | MISMATCH — MATERIAL |
| Broker name spelling | Cascade | Casacde | MISMATCH — NONMATERIAL/CLERICAL |
| Detention | Not discussed | $50/hr after 2 free hrs | UNKNOWN/MISSING relative to negotiated evidence (not a "mismatch" against nothing) |

With two material mismatches open, the load **cannot** be represented as agreed or booked (this is the exact shape of critical failure M09-CF-03 if done wrong).

### Stage 8 artifacts — Correction communication and Rate Confirmation v2

The broker confirms by email that the driver-assist requirement was added in error and that pickup will be corrected — but sends **no corrected written document yet**. A verbal/informal confirmation does not resolve a material term; a corrected written document is still required.

**RC v2** arrives: pickup corrected to Tuesday 14:00 (now MATCH); driver assist removed (now MATCH) — but introduces a **new, unexplained $50 rate reduction to $2,400**. Fixing the two flagged problems does not mean the document is clean; the newly revised document must be fully re-reconciled, and the new rate deviation is itself a fresh material mismatch requiring authorization (M09-CF-02 territory if accepted without it).

### Stage 9 artifact — Authority control applied to the $2,400 deviation

Per the Authority Matrix, **any** rate deviation from $2,450 requires Pat Alvarez's authorization — regardless of size, who introduced the change, or personal judgment about fairness. The correct action is to escalate and hold acceptance, not sign now and mention it later (M09-CF-01 if signed without authorization).

### Stage 10 artifact — Booking record construction

The booking record must separate: **source facts** (the original $2,450 from M08), **verified facts** (the now-corrected Tuesday 14:00 pickup), **unresolved facts** (whether the $2,400 rate gets authorized), and **decisions/approvals** (that an escalation to Pat Alvarez has been sent). A teammate's suggestion to simply edit the RC v2 PDF to show $2,450 — even though that happens to be the originally negotiated figure — is document fabrication (M09-CF-05): the document must reflect what was actually issued, corrected through a real source document or documented authorization, never edited to "match."

### Stage 11 artifacts — Dispatch packet assembly and driver handoff

Correct packet contents: current RC v2, the driver/equipment identity sheet, and the relevant Authority Matrix excerpt. **Excluded:** RC v1 (superseded — even though it shares a reference number and a rushed colleague might grab it for that reason) and the CFB-7710 attachment (a different load entirely). The driver handoff communicates verified booking facts only — pickup, delivery, equipment, current status — never a dispatcher's own trip-timing opinion, and never an omission of the pending-authorization status to avoid "confusing" the driver.

### Stage 12 artifact — Final closeout

With Pat Alvarez's authorization on the $2,400 rate still pending, the load **cannot** be marked BOOKED/DISPATCH PACKET READY — not even with the deviation footnoted, not even by sending the packet under a HOLD label (M09-CF-06 if done anyway). Once Pat Alvarez authorizes the $2,400 rate **in writing**, the correct final status becomes BOOKED / DISPATCH PACKET READY, with the authorization documented in the record — and the M10 handoff explicitly states that this booking control does not mean the trip is operationally complete.

---

## Critical-Failure Reassessment Scenarios (materially different facts)

Each of the six critical-failure families has its own reassessment using different loads, numbers, and clauses than the triggering decision (see `critical-controls.js`):

- **M09-CF-01:** Load REF-334 — a matching rate but a new $500 damage-deposit clause outside dispatcher authority.
- **M09-CF-02:** Load REF-561 — a matching base rate but an unnegotiated $150/day layover clause.
- **M09-CF-03:** Load REF-902 — negotiated 53' dry van vs. written 48' flatbed, broker not yet responded.
- **M09-CF-04:** Load REF-118 — a teammate grabbing the superseded v1 because it was first in the thread.
- **M09-CF-05:** Load REF-763 — backdating a correction-request timestamp to "look cleaner."
- **M09-CF-06:** Load REF-449 — every commercial term matches, but the carrier's own internal sign-off is still pending.
