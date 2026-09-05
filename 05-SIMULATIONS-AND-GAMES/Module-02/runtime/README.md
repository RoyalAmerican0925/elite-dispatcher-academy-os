# SIM-002 Runtime — Technical Documentation

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED

Interactive seven-stage / 15-decision Module 02 Agency Boundary Desk. The package includes student exercise, scenario packet, instructor guide, scoring rubric, completion record and browser runtime.

## Premium Remediation Architecture
SIM-002 preserves exactly three existing high-stakes families:
- M02-CF-01 / D06 — shipper-supplied freight plus discretionary carrier allocation;
- M02-CF-02 / D10 — redirect/reassignment instead of return to source;
- M02-CF-03 / D13 — actual allocation conduct contradicting an agency label.

After the second incorrect attempt on one of those decisions, the critical occurrence, family and trigger time are preserved. A later correct response on the same screen may improve final mastery but **cannot clear the high-stakes family**. Resolution requires the module's materially different alternate reassessment. Original trigger and reassessment history remain separate.

## State / Completion
`logic.js` preserves first-attempt response/correctness/timestamp, final response/correctness/timestamp, remediation count, critical history and reassessment history. `computeSimulationStatus` returns COMPLETE only after all 15 decisions reach final mastery and no triggered M02-CF family remains unresolved.

## Tests
`npm test` performs syntax checking plus regression, premium critical-remediation and package-alignment tests. GitHub Actions runs this gate on the reconciliation and academy architecture branches and on pull requests affecting the package.

## Persistence Limitation
The browser uses `localStorage` key `sim002-state-v1`. This is local demonstration persistence, not a durable LMS/student-account record. Production persistence, manual accessibility QA, browser/device QA, assembled-course branding/editorial QA and production deployment remain release-layer work.

## Release Boundary
Passing this build gate does not make SIM-002 `PUBLICATION_READY`. Current-source/legal review remains controlled by the Module 02 source registers and final pre-publication verification process.