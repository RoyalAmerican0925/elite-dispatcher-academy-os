# SIM-003 — Module 03 Load Compatibility Desk — Scoring Summary

**Build status:** BUILD QA  
**Release status:** RELEASE QA DEFERRED  
**Instructor use only.**

## Mastery Model

SIM-003 uses a mastery model rather than a conventional point-grade model.

- **FIRST-ATTEMPT PERFORMANCE:** X / 15
- **FINAL MASTERY:** 15 / 15 required for COMPLETE
- **REMEDIATION COUNT:** number of decisions requiring one or more retries
- **COMPETENCY STATUS:** Mastered / Mastered After Remediation / Needs Instructor Review / In Progress

A high first-attempt score is evidence of stronger independent performance, but a lower first-attempt score does not automatically fail the student if the student successfully remediates noncritical errors and reaches final mastery.

## Competency Map

| Code | Competency |
|---|---|
| A | Equipment identification |
| B | Commodity/equipment compatibility |
| C | Temperature-control compatibility |
| D | Dimension/overwidth issue spotting |
| E | Driver endorsement compatibility |
| F | Gross-vs-axle weight reasoning |
| G | Missing-information/verification discipline |
| H | Operational proceed/reject/escalate decision |
| I | Multi-factor load-fit reasoning |

## Critical Escalation Decisions

Two decisions carry repeated-error escalation because they align to the Module 03 Practical's named critical-failure concepts:

- **SIM03-D09 — Load D endorsement mismatch.** The fictional load states that the driver lacks the qualification required for that load. The correct operational response is do not dispatch that driver on that load.
- **SIM03-D11 — Load E gross-versus-axle trap.** Projected gross combination weight below 80,000 lb does not by itself establish that individual/tandem axle limits are satisfied.

For these decisions, the runtime flags instructor review after two incorrect attempts. Do not invent additional critical failures merely to make the simulation appear harder.

## Completion Rule

A student reaches **COMPLETE** only when:
1. all 15 decisions have final mastery; and
2. no unresolved instructor-review condition remains.

If a critical decision is flagged for instructor review, the instructor should determine whether the learner can explain the underlying safety/legality principle before the flag is cleared in the Academy record system.

## Evidence to Preserve

For each decision preserve, where the delivery system permits:
- first response;
- first-attempt correctness;
- first-attempt timestamp;
- final response;
- final correctness;
- attempt count;
- remediation used;
- instructor-review status;
- final timestamp.

## Interpretation Rule

The simulation is not merely checking whether the learner can recognize an answer key. Instructor review should look for the reasoning pattern taught in Module 03:

**CHECK EQUIPMENT → COMMODITY → TEMPERATURE → DIMENSIONS → WEIGHT/AXLES → DRIVER QUALIFICATIONS → MISSING INFORMATION → VERIFY → PROCEED / REJECT / ESCALATE**

The learner should not use a single favorable fact to override unresolved fit, qualification, or legal questions.