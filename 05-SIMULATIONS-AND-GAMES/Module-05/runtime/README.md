# SIM-005 Runtime — Live Load Search Desk

**Status:** PREMIUM REPAIR CANDIDATE — final QA pending

## Purpose
SIM-005 is a 13-stage / 18-decision browser simulation for Module 05. It trains the sourcing workflow:

**PROFILE → SEARCH → FIND → SCREEN → VERIFY AVAILABILITY → VERIFY ENTITY + CONTACT → COMPARE → SHORTLIST / REJECT / ESCALATE → DOCUMENT → HAND OFF**

## Architecture
- `content.js` — 13 stages, 18 decisions, 14 competency families, fictional artifacts.
- `critical-controls.js` — exactly six critical families and one materially different reassessment per family.
- `logic.js` — DOM-free evaluation, first-attempt preservation, remediation, critical history, reassessment, competency and completion logic.
- `app.js` — browser rendering, local persistence, main scenario and alternate reassessment flow.
- `tests/logic.test.js` — regression/state tests.
- `tests/premium-gate.test.js` — critical-remediation premium gate.
- `tests/alignment.test.js` — package/competency/currentness boundary gate.

## Critical remediation
A designated critical family triggers after the configured repeated-error threshold. Once triggered, same-screen correction can improve final mastery but does not erase the critical history. The learner must pass the corresponding alternate reassessment case before the family is marked resolved.

## Completion
`COMPLETE` requires:
- 18/18 main-scenario final mastery; and
- zero unresolved triggered critical families.

## Persistence limitation
The runtime stores state in browser `localStorage` under `sim005-state-v1`. This is not a durable LMS/student-account competency record. Resetting the browser simulation erases local attempt history.

## Run
Serve the runtime directory over HTTP because it uses JavaScript modules.

```bash
cd 05-SIMULATIONS-AND-GAMES/Module-05/runtime
python3 -m http.server 8080
```

## Tests
```bash
npm test
```

## Currentness boundary
Vendor-specific load-board interfaces, pricing, filters, proprietary mileage, credential-sharing rules and Terms of Service can change. The runtime uses fictional training artifacts and transferable sourcing concepts rather than hard-coding a vendor UI as a universal rule.

FMCSA registration/authority and broker-financial-responsibility claims require current authoritative-source verification before commercial publication.

## Release boundary
Passing the content/runtime gate supports only **BUILD COMPLETE — RELEASE QA DEFERRED**. Browser/device matrix, manual accessibility, production deployment, LMS/durable records, branding/editorial rendering and assembled release QA remain separate. `PUBLICATION_READY` is not authorized by this runtime.
