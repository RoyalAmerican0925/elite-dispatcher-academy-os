# SIM-004 — Instructor Guide

**Simulation:** Carrier Onboarding Command Desk  
**Release status:** RELEASE QA DEFERRED

## Instructional purpose
SIM-004 tests whether the learner can turn an onboarding packet into a defensible operational-readiness decision while preserving the Module 04 dispatcher/compliance boundary.

Core model:

**COLLECT → CLASSIFY → VERIFY → RECONCILE → PROTECT → DECIDE → DOCUMENT → TRACK**

A correct answer with unsafe reasoning is not full competency evidence.

## Stage facilitation
| Stage | Focus |
|---|---|
| 1 | packet presence vs readiness |
| 2 | authority source selection + COI limits |
| 3 | W-9/entity reconciliation |
| 4 | operational profiles vs DQ/compliance |
| 5 | driver/load endorsement compatibility |
| 6 | current medical-certification procedure and role boundary |
| 7 | payment-change authentication |
| 8 | service-scope/compliance boundary |
| 9 | expiration/currentness/policy/decision authority |
| 10 | integrated onboarding disposition |

## Critical decisions
### SIM04-D09 — driver qualification
The scenario expressly states the load requires H/X and Driver B lacks it. Expected response: do not dispatch Driver B on that load. Repeated error indicates a safety/qualification mental-model failure.

### SIM04-D13 — payment redirect
The new message is unverified and conflicts with the established NOA/payment path. Expected response: STOP and independently verify through a previously trusted channel. Do not let contact information inside the questionable request authenticate itself.

### SIM04-D15 — compliance scope
Maintaining a dispatch profile does not automatically authorize or qualify the dispatcher to administer DQ files, Clearinghouse queries or drug/alcohol compliance. Require separate scope/competency/responsibility/data/contract/legal review.

Do not invent additional critical failures.

## Current-date event — SIM04-D11
This is deliberately isolated. Before administering the simulation, verify whether the current Academy source control still applies. If the training date is after October 11, 2026 or FMCSA procedure changed, do not administer D11 using stale wording; update the controlled artifact/decision and source record first.

The remediation target is durable: current procedure + document/driver match + carrier process + appropriate handoff, without pretending the dispatcher is the final regulatory medical-qualification authority.

## Remediation
For ordinary errors:
1. identify the ignored/misclassified evidence;
2. return learner to the relevant artifact/tool concept;
3. require another decision;
4. preserve first-attempt evidence.

For critical errors:
1. identify the unsafe authority/verification failure;
2. require learner explanation in their own words;
3. present an alternate transfer example;
4. document instructor disposition.

## Professional-language coaching
Prefer:
- “The records do not yet reconcile.”
- “The payment change is unverified; hold pending independent confirmation.”
- “The current file does not support this driver on this stated load.”
- “This request is outside the ordinary dispatch profile and requires separate scope/competency review.”

Avoid unsupported fraud accusations, blanket claims that a COI proves authority, or statements that possession of a driver profile creates compliance authority.

## Evidence standard
Preserve first attempt, final mastery, remediation, attempt count, critical-review state, competency status and final disposition. Do not convert remediation into a false first-attempt pass.

## Release controls
Build QA does not replace final current-source, accessibility, browser/device, LMS, durable-record, branding/editorial or deployment QA.