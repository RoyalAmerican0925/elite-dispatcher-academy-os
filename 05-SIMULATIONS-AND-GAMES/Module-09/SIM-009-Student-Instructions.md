# SIM-009 — Booking Control Desk
## Student Instructions

**Module:** 09 — Booking Loads, Rate Confirmations, and Dispatch Documentation
**Status:** BUILD COMPLETE — RELEASE QA DEFERRED

---

## What this simulation is

You are the dispatcher for Palmetto Line Logistics. Your Module 08 negotiation with Cascade Freight Brokers on Load CFB-8842 has reached agreement-in-principle: $2,450 all-in, Tuesday 14:00 pickup in Charlotte, NC, Thursday 10:00 delivery in Richmond, VA, 53' dry van, no driver assist. **That agreement is not a booking.** Over twelve stages you will receive the written rate confirmation, authenticate it, extract every material term, reconcile it against what was actually negotiated, correct or escalate what doesn't match, stay inside your supplied authority, build a traceable booking record, assemble a correct dispatch packet, and hand a controlled result to Module 10 — or determine that the load must HOLD or ESCALATE instead.

## The controlling workflow

**NEGOTIATION HANDOFF → VERIFY AGREEMENT → RECEIVE DOCUMENT → AUTHENTICATE/IDENTIFY → READ ALL MATERIAL TERMS → RECONCILE VERBAL vs WRITTEN → CLASSIFY DISCREPANCIES → CORRECT/ESCALATE → CONFIRM AUTHORITY → ACCEPT/SIGN WITHIN AUTHORITY → BUILD BOOKING RECORD → BUILD DISPATCH PACKET → ISSUE CONTROLLED DRIVER HANDOFF → RECORD COMPETENCY**

Every stage in this simulation exists to move you one step along this chain — not to test trivia.

## The states you will use

Rather than guessing, this simulation requires explicit classification at every step: VERIFIED, MATCH, MISMATCH — MATERIAL, MISMATCH — NONMATERIAL/CLERICAL, UNKNOWN/MISSING, SUPERSEDED, HOLD, CORRECT, ESCALATE, AUTHORIZED, NOT AUTHORIZED, BOOKED/DISPATCH PACKET READY, HAND OFF TO M10.

## Critical decisions

Six decision patterns are treated as **critical failures** if you get them wrong twice in a row:

- **M09-CF-01 — Unauthorized carrier commitment:** accepting, signing, or committing the carrier outside your supplied authority.
- **M09-CF-02 — Material rate-confirmation acceptance error:** knowingly accepting or dispatching from a document containing a material term that conflicts with the negotiated agreement, without correction or authorization.
- **M09-CF-03 — Unresolved discrepancy represented as resolved:** telling anyone this load is agreed/booked while a material conflict is still open.
- **M09-CF-04 — Wrong/obsolete document used for dispatch:** building or sending the dispatch packet from a superseded, wrong-load, or otherwise uncontrolled document version.
- **M09-CF-05 — Document fabrication/material alteration:** fabricating, altering, backdating, or deleting booking evidence — even to "match" a number that happens to be correct, even done by someone else with your knowledge.
- **M09-CF-06 — False booking completion:** declaring BOOKED/DISPATCH PACKET READY while a required booking control is still outstanding.

If you trigger one of these, your original response is preserved permanently — it does not disappear if your next attempt is correct. You may continue through the rest of the simulation, but the family stays flagged `REASSESSMENT_REQUIRED` until you correctly resolve a separate reassessment scenario using **materially different facts** (a different load, different numbers, a different clause) at the end. Only that clears it — correcting your answer on the original screen never does. Simulation completion is blocked while any triggered family remains unresolved, no matter how high your raw score is.

## Module boundaries

M08 owns negotiation — this simulation does not reopen or rewrite what was negotiated, only verifies it against what's written. M10 owns detailed trip planning/routing/fuel/appointments; M11 owns HOS/ELD feasibility; M12 owns active-load monitoring; M13 owns detention/TONU/breakdowns/claims; M14 owns POD/invoicing/factoring/closeout. **A correct `BOOKED / DISPATCH PACKET READY` result at the end of this simulation means the booking is controlled — it does not mean the trip is operationally complete.** You are never asked to calculate HOS feasibility, plan a route, or make trip-planning judgments here; doing so anyway is treated as overstepping this module's boundary.

## Evidence rules

All names, companies, rates, and clauses are **fictional training entities**, clearly labeled as such. No accessorial amount, detention trigger, or payment term here is presented as a universal industry rule — they are specific to this fictional agreement. Federal legal claims are not made in this simulation.

## Completion standard

You have completed SIM-009 when all 27 decisions across 12 stages are answered correctly and every critical-failure family you triggered has been resolved through its reassessment. Your Completion & Competency Record shows your first-attempt score, final mastery score, remediation count, and the status of each of the six critical-failure families — separately, never averaged into a passing raw score.
