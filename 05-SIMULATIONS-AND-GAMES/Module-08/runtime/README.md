# SIM-008 Runtime — Broker Negotiation Lab

**Status:** PREMIUM REBUILD CANDIDATE — AUTOMATED QA PENDING

This runtime implements the premium SIM-008 architecture for Module 08 — Rate Negotiation & Broker Communication.

## Premium architecture

- 12 progressive stages
- 24 meaningful occupational decisions
- all 15 M08 competency families
- exactly six critical-failure families
- separate materially different reassessment for each critical family
- first-attempt evidence preserved independently from corrected performance
- practical-compatible 30-point scaled first-attempt score
- final mastery and critical-family completion record
- printable browser competency summary
- explicit Module 09 booking boundary

## Critical-failure behavior

Critical failures are durable historical events. A student may correct the original decision, but that same-screen correction does not erase the critical family. The learner must later complete a materially different reassessment case. After successful reassessment, the family is recorded as **RESOLVED BY REASSESSMENT**, not as if no failure ever occurred.

Exactly six families are controlled:

1. CF-01 unauthorized below-floor acceptance
2. CF-02 fabricated leverage
3. CF-03 material fact misrepresentation
4. CF-04 unauthorized carrier commitment
5. CF-05 false agreement state
6. CF-06 premature booking representation

## Required package

The runtime is accompanied by:

- `../SIM-008-Student-Instructions.md`
- `../SIM-008-Scenario-and-Evidence-Packet.md`
- `../SIM-008-Instructor-Guide.md`
- `../SIM-008-Scoring-and-Competency-Map.md`
- `../SIM-008-Completion-and-Competency-Record.md`

## How to run

```bash
cd 05-SIMULATIONS-AND-GAMES/Module-08/runtime
python3 -m http.server 8000
```

Then open the local server in a browser.

## How to test

```bash
cd 05-SIMULATIONS-AND-GAMES/Module-08/runtime
npm test
```

The test command executes:

1. `tests/logic.test.js` — occupational decisions, state, critical persistence, reassessment and completion logic.
2. `tests/premium-gate.test.js` — locked premium architecture and commercial state controls.
3. `tests/alignment.test.js` — five-document package, six-family alignment, M09 boundary and closeout/accessorial controls.

## Scoring

The runtime records first-attempt correct answers out of 24 and converts that result to the Module 08 practical 30-point scale:

`round((first-attempt correct / 24) × 30)`

Commercial competency completion requires:

- scaled first-attempt score at least 24/30;
- final mastery across required evidence or approved reassessment equivalent;
- zero unresolved critical failures.

## Booking boundary

No successful Module 08 outcome is labeled `BOOKED`. The approved outcome is **AGREED IN PRINCIPLE / PENDING BOOKING CONTROL** until Module 09 completes formal rate-confirmation and booking-document controls.

## Persistence and limitations

Attempt evidence is stored in local browser storage. This is not durable production LMS/student-record storage.

Still deferred to release QA:

- browser/device compatibility testing;
- automated headless DOM/accessibility testing;
- manual accessibility QA;
- production deployment;
- LMS/student-account integration;
- durable production records.

Do not change this README to `PUBLICATION_READY` based solely on content/runtime tests. A passing automated build gate supports only **BUILD COMPLETE — RELEASE QA DEFERRED** after independent QA confirms the committed files and test results.
