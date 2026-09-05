# SIM-007 Runtime — Rate & Profitability Decision Desk

**Status:** PREMIUM REPAIR CANDIDATE — AUTOMATED QA PENDING

## Architecture
- 10 progressive stages
- 33 meaningful decisions
- all 18 approved Module 07 competency families
- exactly five critical-failure families
- separate materially different reassessment for each critical family
- numeric tolerances for calculation decisions
- first-attempt evidence preserved separately from corrected performance
- HOLD FOR DATA and TAKE / COUNTER / DECLINE decision controls
- printable competency summary

## Critical-failure rule
Critical behavior is durable historical evidence. Correcting the original screen does not erase the trigger. The learner must demonstrate the competency again using a materially different reassessment case. A resolved family is recorded as **RESOLVED BY REASSESSMENT**.

## Required package
The runtime is accompanied by:
- `../SIM-007-Student-Instructions.md`
- `../SIM-007-Scenario-and-Evidence-Packet.md`
- `../SIM-007-Instructor-Guide.md`
- `../SIM-007-Scoring-and-Competency-Map.md`
- `../SIM-007-Completion-and-Competency-Record.md`

## Run
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-07/runtime
python3 -m http.server 8000
```

## Test
```bash
npm test
```

The test command must cover runtime logic, premium remediation/state controls and package/curriculum alignment.

## Case assumptions
All carrier names, load rates, fees, fuel prices and percentages in SIM-007 are fictional instructional assumptions. They are not current market claims.

Core independently recomputed figures include:
- Alpha 790 total miles, $2.89 effective RPM, approximately $472.80 fuel.
- Bravo 580 total miles, $3.21 effective RPM, approximately $347.12 fuel.
- Charlie 680 total miles, $2.96 effective RPM, approximately $406.97 fuel.
- Alpha counter threshold at $3.00 effective RPM = $2,370 total revenue.

## Limitations / release boundary
The runtime stores evidence in local browser storage only. It does not provide durable LMS/student-account storage.

Deferred release QA:
- browser/device compatibility;
- automated DOM/headless interaction coverage if adopted;
- manual accessibility review;
- production deployment validation;
- LMS/student-account integration;
- durable competency records;
- assembled release packaging QA.

A passing content/runtime gate may support **BUILD COMPLETE — RELEASE QA DEFERRED** only. It does not establish `PUBLICATION_READY`.
