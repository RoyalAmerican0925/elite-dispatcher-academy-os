# Module 09 Premium Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. TDD is mandatory for behavior changes.

**Goal:** Complete M09 as a sell-ready occupational training module and rebuild SIM-009 as a realistic dispatcher workdesk game rather than a quiz-shaped simulation.

**Architecture:** Existing M09 curriculum, tools, assessments, competency engine, 15 competency families, six critical-failure families, and reassessment semantics remain authoritative. SIM-009 becomes **Booking Desk: Save the Load**: a browser-based dispatcher desktop with inbox/events, document viewer, booking workbench, live load-status controls, realistic communications, document/version handling, consequence feedback, and hidden competency scoring.

**Tech Stack:** Markdown; browser HTML/CSS/JavaScript ES modules; Node.js tests; GitHub Actions.

**Spec:** `10-PRODUCTION/Module-09-Premium-Design-Spec-2026-09-05.md`

## Global Constraints
- Exactly 15 competency families M09-C01–M09-C15.
- Exactly six critical-failure families M09-CF-01–M09-CF-06.
- SIM-009 retains 12 workflow stages and at least 24 meaningful occupational actions.
- Player-facing UX must not present the main simulation as numbered questions with A/B/C/D test flow.
- Hidden scoring may evaluate actions, but feedback is expressed as operational consequences and coaching.
- Same-screen correction never erases a critical failure; materially different reassessment is required.
- M09 does not absorb M10–M14 responsibilities.
- Work only on `module-09-premium-build`; integration target is `academy-master-architecture`; never touch `main`.
- Maximum status: `BUILD COMPLETE — RELEASE QA DEFERRED`.

## SIM-009 Rebuild Tasks

### Task A — RED: game-experience contract
- [ ] Add a failing source-level/runtime architecture test requiring dispatcher-desktop, inbox, document viewer, booking workbench, event queue, load-status controls, operational action language, and game title.
- [ ] Require the old main-loop quiz labels (`Decision N`, `Submit`, `Try again`) to be absent from player-facing workdesk flow.
- [ ] Add the new test to `npm test` and verify RED before production UI changes.

### Task B — Game shell and workdesk
- [ ] Rebuild `runtime/app.js` around a persistent dispatcher desktop.
- [ ] Rebuild `runtime/styles.css` for desktop panels, message/document workspace, workbench, event queue, status bar, responsive mobile fallback, keyboard focus, and readable evidence states.
- [ ] Update `runtime/index.html` title/metadata to `Booking Desk: Save the Load`.
- [ ] Keep existing logic/content/critical-control engine unless a game interaction requires a tested adapter.

### Task C — Occupational interactions
- [ ] Convert decision prompts into work orders, incoming messages, document-review tasks, file actions, status decisions, and broker/carrier/driver responses.
- [ ] Surface artifacts through document tabs/viewer instead of isolated quiz cards.
- [ ] Make corrections change desk state: version status, booking status, packet readiness, authority state, unresolved-issue count.
- [ ] Preserve 12-stage/24+ action coverage and C01–C15 evidence.

### Task D — Consequences and critical controls
- [ ] Show operational consequences for unsafe/incorrect actions without turning the experience into point-chasing.
- [ ] Preserve immutable first-attempt CF evidence.
- [ ] Route triggered CFs to a separate materially different reassessment case after the main desk scenario.
- [ ] Never allow raw score to override unresolved CFs.

### Task E — Package alignment
- [ ] Rewrite SIM student instructions to explain the workdesk game, evidence use, interruptions, load-status controls, and hidden evaluation.
- [ ] Update instructor guide/scoring map only where necessary to distinguish game actions from test questions.
- [ ] Keep final exam and practical as separate graded assessments; do not convert them into the game.

### Task F — GREEN and verification
- [ ] Run full SIM-009 tests to GREEN.
- [ ] Inspect branch diff for unrelated changes.
- [ ] Verify exact-head CI.
- [ ] Perform independent premium QA against Google / Employment / Buyer tests.
- [ ] Only then consider `BUILD COMPLETE — RELEASE QA DEFERRED`; never `PUBLICATION_READY`.