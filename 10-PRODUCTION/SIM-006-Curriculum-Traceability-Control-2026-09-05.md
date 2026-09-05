# SIM-006 — Curriculum Traceability Control

**Date:** 2026-09-05  
**Branch:** `academy-master-architecture`  
**Status:** TASK 1 COMPLETE — BUILD MAY PROCEED

## Authority chain
SIM-006 derives its performance requirements from:
- `00-ACADEMY-MASTER/MODULE-06-MASTER-BRANCH.md`
- `03-ASSESSMENTS/Practical-Assessments/Module-06-Practical.md`
- `03-ASSESSMENTS/Practical-Assessments/Module-06-Instructor-Scoring-Guide.md`
- the seven Module 06 operational tools
- the full Module 06 Instructor Guide.

The simulation may deepen practice and introduce progressive evidence, but it may not invent an untaught critical competency.

## Decision-family traceability
| SIM-006 decision family | M06 taught/assessed anchor | Required simulation evidence |
|---|---|---|
| Claim vs evidence classification | Practical Task 1 — isolate claims | Student separates claims into entity/contact/load-document/payment layers before acting. |
| Entity verification | Practical Task 2 | Student states what active authority/BMC evidence proves and does not prove. |
| Entity/contact separation | Practical Tasks 2–3 | Student refuses to use legitimate entity status as contact authorization. |
| Trusted callback | Practical Task 3 | Student uses independently trusted contact path and records callback result. |
| Contact/channel inconsistency | Practical Task 3 | Student classifies domain/email/phone mismatch and holds unresolved contact identity. |
| Load/document cross-check | Practical Task 4 | Student identifies reference/payment/document mismatches before reliance. |
| Financial-security interpretation | Practical Tasks 2 and 6 | Student does not treat BMC/factor evidence as contact authentication or payment certainty. |
| Duplicate/re-brokering ambiguity | Practical Task 6 | Student treats similar posting as a verification flag, not proof of fraud/double brokering. |
| Payment-instruction change | Practical Task 5 | Student HOLDs change/deposit, independently verifies, documents and escalates. |
| Urgency/social pressure | Execution model + payment/contact controls | Student refuses pressure-based bypass of unresolved verification. |
| Evidence preservation | Practical Task 7 | Student retains contradicted claims, source/evidence trail and stopped actions. |
| Risk classification | Practical Task 7 + Risk Classification tool | Student assigns least accusatory operational status justified by evidence. |
| Evidence-state change | M06 evidence-based classification model | Student updates classification when later evidence materially changes the case. |
| Final disposition | Practical Task 7 | Student selects defensible PROCEED / VERIFY / HOLD / ESCALATE / DECLINE state. |
| Escalation/handoff | Practical Task 7 + Escalation Packet | Student records verified facts, unresolved/contradicted facts, stopped actions and next owner/action. |

## Tool traceability
1. Broker Verification Evidence Record → entity/source evidence and what each source proves.
2. Entity vs Contact Authentication Worksheet → entity/contact separation.
3. Trusted Callback Verification Record → independent callback path/result.
4. Load & Document Cross-Check Sheet → material mismatch detection.
5. Payment-Instruction Change Verification Record → payment-redirection critical control.
6. Risk Classification & Decision Record → evidence-based operational disposition.
7. Verification Evidence & Escalation Packet → preserved evidence and final handoff.

## Critical-failure traceability
All six practical critical failures are mandatory simulation controls:

1. **Unverified/contradicted payment redirection acted upon** → simulation payment-change event must mark critical failure.
2. **Active entity treated as proof of contact authorization** → entity/contact decision must mark critical failure.
3. **Proceeding through confirmed impersonation/contact contradiction** → trusted-callback contradiction must prevent passing if ignored.
4. **Knowingly proceeding with verified inactive required broker authority** → alternate/retest evidence path must exercise this control without contradicting the main case's active-entity facts.
5. **Fraud/double brokering declared solely from ambiguous duplicate evidence** → duplicate-posting decision must reject unsupported accusation.
6. **Material identity/document/payment mismatch bypassed** → unresolved mismatch decision must require HOLD / VERIFY / ESCALATE.

## Main-case continuity
The main simulation may reuse the practical's fictional Meridian Gate concept or use a materially different fictional broker, but the runtime must preserve this reasoning structure:
- entity evidence can be legitimate while contact evidence fails;
- a trusted callback can materially change case state;
- document/payment evidence can deepen risk after an initially plausible offer;
- factor/credit evidence does not authenticate the contacting person;
- duplicate posting remains ambiguous absent additional evidence;
- later evidence requires reclassification rather than anchoring.

## Untaught-content check
No new critical competency is introduced by the approved SIM-006 design. The progressive evidence-state change and urgency-pressure stages are delivery mechanisms for already-taught verification, documentation and classification competencies; they are not separate regulatory doctrines.

## Boundary check
- M05 sourcing/search strategy is input context only.
- M07 profitability is not scored.
- M08 negotiation is not scored.
- M09 booking mechanics are represented only as a stop/proceed consequence, not taught as a booking workflow.
- M14 factoring/billing operations are not taught; factor status is interpreted only as evidence with limited meaning.

## Build authorization
Traceability supports proceeding to test-first runtime implementation. A later alignment test must verify that runtime decisions continue to match this control after code/content is built.