# SIM-003 Runtime — Technical Documentation

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED

Interactive seven-stage / 15-decision Module 03 Load Compatibility Desk.

## Critical Architecture
Exactly two critical families are retained because they match the Practical's named critical concepts:
- M03-CF-01 / D09 — scenario-stated required hazardous-material qualification is missing;
- M03-CF-02 / D11 — an axle/tandem violation is ignored because gross is below the overall baseline.

A critical trigger is historical evidence. A later correct answer on the same screen can improve final mastery but cannot erase it. The learner must pass a materially different alternate reassessment; the original trigger and reassessment remain separate records.

## State / Completion
The runtime preserves first-attempt and final responses separately, attempt/remediation data, critical family occurrence/trigger time, reassessment history and resolution. COMPLETE requires all 15 decisions at final mastery plus zero unresolved M03-CF families.

## Tests
`npm test` performs browser-app syntax checking, logic regression tests and premium critical-remediation tests. Package alignment/currentness checks are part of the premium reconciliation gate.

## Content Controls
The simulation continues to reject: gross-weight-only legality reasoning; treating 80,000 lb as cargo weight; assuming nominal 53-foot equipment proves actual payload/dimensions; treating overwidth as automatically illegal or automatically permit-ready; treating H/N/X as interchangeable; or converting missing load facts into assumptions.

## Persistence / Release Limitations
Browser `localStorage` is local demonstration persistence, not a durable LMS/student-account record. Headless browser/device QA, manual accessibility QA, production deployment, durable competency integration and final current-source/release QA remain deferred. Passing this build gate does not make SIM-003 `PUBLICATION_READY`.