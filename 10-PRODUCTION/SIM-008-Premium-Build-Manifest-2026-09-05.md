# SIM-008 Premium Build Manifest — 2026-09-05

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED  
**Source branch:** `sim-008-premium-build`  
**Integration target:** `academy-master-architecture` only

## Permanent package
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Student-Instructions.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Scenario-and-Evidence-Packet.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Instructor-Guide.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Scoring-and-Competency-Map.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Completion-and-Competency-Record.md`

## Runtime
- `runtime/index.html`
- `runtime/styles.css`
- `runtime/app.js`
- `runtime/content.js`
- `runtime/logic.js`
- `runtime/package.json`
- `runtime/README.md`

## Automated verification
- `runtime/tests/logic.test.js`
- `runtime/tests/premium-gate.test.js`
- `runtime/tests/alignment.test.js`
- `.github/workflows/sim008-runtime-tests.yml`

Latest verified runtime workflow before integration review:
- Run: `33979318943`
- Conclusion: SUCCESS

## Controlling QA and truth files
- `10-PRODUCTION/SIM-008-Premium-Content-QA-2026-09-05.md`
- `10-PRODUCTION/SIM-008-Integration-Review-2026-09-05.md`
- `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`
- `00-ACADEMY-MASTER/ARCHITECTURE-COMPLETION-MATRIX-M01-M15-2026-09-01.md`
- `00-ACADEMY-MASTER/ACADEMY-COMPLETION-DEADLINE-CONTROL-2026-09-04.md`

## Release boundary
This manifest does not establish `PUBLICATION_READY`. Browser/device, LMS/durable-record, manual accessibility and final assembled release QA remain deferred.
