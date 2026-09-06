# SIM-009 Runtime — Booking Desk: Save the Load

**Current gate:** rebuild implemented; release QA remains deferred. Do not label `PUBLICATION_READY`.

SIM-009 is the Module 09 occupational workdesk game for Booking Loads, Rate Confirmations, and Dispatch Documentation. It retains the controlled 12-stage / 27-action content engine, 15 competency families, exactly six critical-failure families, immutable first-attempt critical evidence, and materially different reassessment while replacing the old quiz-shaped player experience.

## Player experience
The learner works from a dispatcher desktop with:
- **Inbox / Comms** for incoming operational events;
- **Document Viewer** for the evidence attached to the current event;
- **Live Queue** for workflow position and unresolved critical review;
- **Booking Workbench** for occupational actions and classifications;
- **Load Status Controls** for BOOK / HOLD / CORRECT / ESCALATE;
- operational-consequence feedback instead of test-score feedback during the shift.

The game uses fictional Palmetto Line Logistics / Cascade Freight Brokers training facts. The learner must reconcile the M08 handoff against rate-confirmation versions, catch material conflicts, stay inside supplied authority, preserve document integrity/version control, exclude obsolete evidence, assemble the dispatch packet, and close the M09 file without performing M10–M14 work.

## Architecture
- `content.js` — 12 stages, 27 meaningful desk actions, artifacts, competency labels.
- `logic.js` — evaluation/state engine and persistent critical-history controls.
- `critical-controls.js` — exactly six critical families plus materially different reassessment cases.
- `app.js` — dispatcher-desktop game shell, inbox, document viewer, queue, workbench, status controls, consequences, reassessment, completion record.
- `styles.css` — responsive desktop/workbench presentation.
- `index.html` — game entry point.

## Run
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-09/runtime
python3 -m http.server 8000
```

## Test
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-09/runtime
npm test
```

`npm test` runs the game-experience contract, state-engine tests, premium architecture gate, and package-alignment gate. `game-experience.test.js` specifically prevents regression to the old numbered-question / Submit / Try-again loop and requires the dispatcher-desktop work surfaces.

## Persistence and release boundary
Attempt state uses browser `localStorage` for demonstration continuity only. It is not durable LMS/student-account evidence. Browser/device compatibility, production deployment, durable records, manual accessibility, and final release-layer QA remain deferred.
