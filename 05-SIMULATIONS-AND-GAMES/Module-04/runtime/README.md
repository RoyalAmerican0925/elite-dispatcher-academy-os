# SIM-004 Runtime — Technical Documentation

**Simulation:** Module 04 — Carrier Onboarding Command Desk  
**Build state:** QA PENDING  
**Release state:** RELEASE QA DEFERRED

## Runtime
Ten stages / twenty decisions covering carrier onboarding operational readiness, source selection, COI evidence limits, entity reconciliation, driver/equipment profiles, qualification conflicts, current medical-certification procedure, payment-change authentication, compliance-scope boundaries, currentness/policy classification and integrated disposition.

## Isolation
SIM-004 imports no runtime code from SIM-001, SIM-002 or SIM-003. It uses its own state key: `sim004-state-v1`.

## Critical controls
Exactly three decisions use repeated-error instructor-review escalation:
- `SIM04-D09` — stated driver/endorsement conflict;
- `SIM04-D13` — unverified payment redirect;
- `SIM04-D15` — automatic takeover of carrier DQ/drug-alcohol compliance functions.

These match the three critical-failure concepts in the current Module 04 Practical/Instructor Guide.

## Current-date content isolation
`ARTIFACTS.currentMedicalEvent` and `SIM04-D11` are explicitly marked `currentDateSensitive: true`. The event reflects the Academy's currently verified September 2026 training control and must be reverified before use after October 11, 2026 or if FMCSA procedure changes earlier.

The durable competency is verification discipline and correct role boundary, not memorization of a temporary date window.

## Run
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-04/runtime
python3 -m http.server 8000
```

## Test
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-04/runtime
npm test
```

The test suite covers stage/decision integrity, current-date isolation, response evaluation, first-attempt immutability, remediation, exactly-three-critical controls, escalation, completion, competency status, persistence, progression and sibling-simulation ID isolation.

## Deferred release QA
No claim is made here about browser/device QA, manual accessibility QA, LMS integration, durable student records, production deployment, final branding/editorial QA, or final current-source verification.