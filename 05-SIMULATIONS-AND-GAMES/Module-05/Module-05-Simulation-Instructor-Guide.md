# SIM-005 — Instructor Guide

**Simulation:** Live Load Search Desk  
**Release status:** RELEASE QA DEFERRED

## Instructional purpose
SIM-005 tests whether the learner can run a live load search that stays disciplined under realistic pressure — verifying rather than assuming, catching discrepancies before they become commitments, and correctly routing anything that exceeds ordinary sourcing judgment.

Core model:

**PROFILE → SEARCH → SCREEN → VERIFY → COMPARE → PROTECT → DECIDE → DOCUMENT**

A correct answer with unsafe reasoning is not full competency evidence.

## Stage facilitation
| Stage | Focus |
|---|---|
| 1 | search profile construction + parameter setting |
| 2 | phone-confirmed candidate classification |
| 3 | FOUND vs VERIFIED AVAILABLE on a stale posting |
| 4 | incomplete posting → specific verification questions |
| 5 | endorsement-conflict rejection |
| 6 | carrier-policy-conflict rejection |
| 7 | duplicate-postings response without unsupported accusation |
| 8 | entity vs contact verification + truthful role identification |
| 9 | rate-confirmation discrepancy + signing authority |
| 10 | timing/HOS feasibility verification |
| 11 | factor/credit-signal classification |
| 12 | shipper-first allocation-scope escalation |
| 13 | progressive re-evaluation + final documented disposition |

## Critical decisions
### SIM05-D07 — endorsement conflict
The scenario expressly states the load requires H/X and the assigned driver lacks it. Expected response: reject the candidate for this driver. Repeated error indicates a safety/qualification mental-model failure, the same pattern SIM-004's D09 tests at onboarding — here it recurs at the sourcing stage.

### SIM05-D09 — duplicate postings
Two postings match on origin/destination/equipment under different company names. Expected response: verify through an appropriate source before drawing any conclusion. Repeated error indicates a tendency to convert an ambiguous signal into an unsupported accusation — the same discipline Module 05/06 teach about double-brokering fact patterns generally.

### SIM05-D10 — entity vs contact
The brokerage entity is verified active; the individual contact is new and unverified. Expected response: verify the specific contact independently before treating them as authorized. Repeated error indicates confusion between entity-level and contact-level verification — two separate checks, not one.

### SIM05-D11 — rate confirmation discrepancy
The written rate confirmation doesn't match what was negotiated (rate and stop count both differ). Expected response: STOP and raise it with the broker before signing. Repeated error indicates a willingness to sign past a material discrepancy because the broker/reference identity otherwise matches.

### SIM05-D12 — signing authority
Reviewing the rate confirmation does not itself grant authority to sign it. Expected response: locate the carrier's actual authorization (Dispatch Agreement/LPOA) before signing. Repeated error indicates a dispatcher assuming authority from task proximity rather than actual grant.

### SIM05-D15 — shipper-first allocation
A shipper (not a broker) asks the dispatcher to choose which of several represented carriers gets each load. Expected response: classify as SIGNIFICANT BROKERAGE RISK and escalate — this is the Module 02 allocation-of-traffic pattern, not ordinary carrier-side sourcing. Repeated error indicates the learner has not carried the Module 02 boundary forward into a live sourcing context.

Do not invent additional critical failures.

## Non-critical but required decision — SIM05-D18 (truthful role identification)
Added after content-accuracy review confirmed "truthful role identification" is a required Module 05 competency family not otherwise tested. Placed in Stage 8 alongside the entity/contact verification event: while verifying a new, unconfirmed brokerage contact, the learner must also identify themselves accurately — name and the specific carrier represented — rather than withholding identity or borrowing a false one to get faster answers. This decision does NOT carry critical escalation; it is an ordinary decision on the same retry/remediation track as every other non-critical item. Do not treat it as a seventh critical failure.

## Progressive event — SIM05-D16/D17
Stage 13 reintroduces Candidate A (confirmed good in Stage 2) with a new material fact — a 4-hour appointment delay. The learner must re-evaluate it against other live candidates rather than either ignoring the update or dropping Candidate A automatically. The final documented disposition (D17) must reflect the actual state of the session: what's shortlisted, what's rejected and why, what's still open, and what's escalated — nothing invented, nothing dropped.

## Remediation
For ordinary errors:
1. identify the ignored/misclassified evidence;
2. return learner to the relevant artifact/tool concept;
3. require another decision;
4. preserve first-attempt evidence.

For critical errors:
1. identify the unsafe verification/authority failure;
2. require learner explanation in their own words;
3. present an alternate transfer example;
4. document instructor disposition.

## Professional-language coaching
Prefer:
- “This is FOUND, not VERIFIED AVAILABLE — confirming before we commit.”
- “The rate confirmation doesn’t match what we negotiated; holding until the broker resolves it.”
- “This contact isn’t verified yet, even though the brokerage itself checks out.”
- “This is outside ordinary sourcing — it’s asking us to allocate freight among carriers, which needs to go up before we proceed.”
- “Calling to verify — this is [name], dispatching for [carrier].” (SIM05-D18: identify accurately even while verifying someone else.)

Avoid unsupported fraud accusations, blanket claims that a factor decline proves anything about authority, statements that reviewing a document grants authority to sign it, or a dispatcher withholding/misstating their own identity even in service of a legitimate verification call.

## Evidence standard
Preserve first attempt, final mastery, remediation, attempt count, critical-review state, competency status and final disposition. Do not convert remediation into a false first-attempt pass.

## Release controls
Build QA does not replace final current-source, accessibility, browser/device, LMS, durable-record, branding/editorial or deployment QA.
