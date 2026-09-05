# SIM-006 Runtime — Broker Verification & Fraud Command Desk

**Branch:** `academy-master-architecture`  
**Status:** CONTENT/RUNTIME BUILD CANDIDATE — INDEPENDENT PREMIUM GATE IN PROGRESS  
**Release status:** NOT `PUBLICATION_READY`; browser/device/LMS/manual accessibility/durable-record release QA remains separate.

## Current architecture
SIM-006 is a continuous **10-stage / 22-decision** verification case aligned to the approved 2026-09-05 design and implementation plan.

1. Intake — isolate claims and evidence states.
2. Entity verification.
3. Contact authentication.
4. Load/document cross-check.
5. Financial-security/current-status interpretation, including factor/credit evidence and a separate inactive-authority critical mini-case.
6. Duplicate/re-brokering ambiguity.
7. Payment-path attack.
8. Urgency/social-engineering pressure.
9. Evidence-state change and reclassification.
10. Final disposition and escalation packet.

The case deliberately verifies the Kestrel entity while later contradicting the questioned contact, document and payment path. The similar duplicate posting remains ambiguous. This prevents both major failure modes: trusting a contact because the company is legitimate, and labeling every suspicious indicator as proven fraud.

## Core doctrine
**ENTITY VERIFICATION IS NOT CONTACT VERIFICATION.**

Execution model:

**RECEIVE → ISOLATE CLAIMS → VERIFY ENTITY → AUTHENTICATE CONTACT → CROSS-CHECK LOAD/DOCUMENTS → VERIFY PAYMENT PATH → RECORD EVIDENCE → CLASSIFY RISK → PROCEED / VERIFY / HOLD / ESCALATE / DECLINE**

## Six controlling critical-failure families
These are inherited from the Module 06 Practical/Instructor Scoring Guide; SIM-006 does not invent a seventh family.

1. Acts on unverified/contradicted payment redirection.
2. Treats active/real entity status as proof an unverified contact is authorized.
3. Proceeds through confirmed contact contradiction/impersonation evidence.
4. Knowingly proceeds where required broker authority is verified inactive.
5. Declares fraud/double brokering solely from ambiguous/inconclusive indicators.
6. Bypasses a material unresolved identity/document/payment mismatch.

A critical failure is retained as durable competency evidence in runtime state. Same-screen correction does not erase it; instructor remediation/reassessment must use a materially different fictional fact pattern.

## Simulation package
The Module-06 simulation directory contains:
- `Module-06-Simulation-Student.md`
- `Module-06-Simulation-Scenario-Packet.md`
- `Module-06-Simulation-Instructor-Guide.md`
- `Module-06-Simulation-Scoring-Rubric.md`
- `Module-06-Simulation-Completion-Record.md`
- browser runtime
- logic tests
- curriculum/package alignment tests

The package is aligned to all seven Module 06 operational tools, the Module 06 Instructor Guide, Practical and Instructor Scoring Guide. The completion record is the manual competency-record layer; browser storage remains local-only until later LMS/durable-record integration.

## Current-source controls
Current FMCSA verification was rechecked on 2026-09-05 for the controlled concepts used by this build:
- $75,000 BMC-84/BMC-85 baseline;
- applicable 7-calendar-day liquidity/replenishment context;
- separate 7-business-day FMCSA notice-response context;
- separate 30-day replacement context for an ineligible BMC-85 provider;
- Motus as FMCSA's current registration environment in 2026.

Do not collapse those clocks or treat financial-security/factor evidence as contact authentication or transaction-specific payment certainty.

## Test command
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-06/runtime
npm test
```

`npm test` runs:
- `tests/logic.test.js` — architecture, competencies, six critical controls, evidence-state logic and durable critical-failure behavior;
- `tests/alignment.test.js` — required package files, ten-stage structure, current-status/factor concepts, inactive-authority control, duplicate ambiguity, payment-path control and entity/transaction language separation.

## Deferred release QA
Not claimed by this build gate:
- browser/device matrix;
- manual accessibility review;
- LMS/student-account integration;
- production durable-record integration;
- final assembled release QA.
