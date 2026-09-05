# SIM-006 Premium Broker Verification Desk Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a premium continuous-case Module 06 simulation that proves broker/entity/contact/load/document/payment-path verification competency under incomplete and changing evidence.

**Architecture:** Follow the existing Academy simulation package pattern while making SIM-006 a progressive Broker Verification Case Desk. Curriculum/practical competencies are the authority; runtime decisions, remediation, scoring and completion records must trace to them. Build with tests first for critical controls and alignment, then implement runtime/content until those tests pass.

**Tech Stack:** Markdown course assets; HTML/CSS/JavaScript browser runtime; Node-based automated runtime tests consistent with existing Academy simulations.

**Spec:** `docs/superpowers/specs/2026-09-05-sim-006-premium-broker-verification-desk-design.md`

## Global Constraints
- Work only on `academy-master-architecture`.
- No merge to `main`.
- Module 06 curriculum/practical critical controls are authoritative.
- Continuous progressive case, not a disconnected quiz bank.
- Preserve first-attempt, remediation, corrected-decision and competency evidence.
- Six Module 06 critical-failure families remain controlling.
- Do not collapse entity verification into contact authorization.
- Do not teach ambiguous duplicate postings as automatic fraud proof.
- Do not act on unverified payment redirection.
- Keep M05/M07/M08/M09/M14 boundaries intact.
- `PUBLICATION_READY` remains separate from simulation build completion.

---

### Task 1 — Lock curriculum-to-simulation traceability

**Files:**
- Read: `00-ACADEMY-MASTER/MODULE-06-MASTER-BRANCH.md`
- Read: `03-ASSESSMENTS/Practical-Assessments/Module-06-Practical.md`
- Read: `03-ASSESSMENTS/Practical-Assessments/Module-06-Instructor-Scoring-Guide.md`
- Read: `03-ASSESSMENTS/Instructor-Guides/Module-06-Instructor-Guide.md`
- Read: `04-STUDENT-TOOLS/Module-06-Tools/*`
- Create: `10-PRODUCTION/SIM-006-Curriculum-Traceability-Control-2026-09-05.md`

- [ ] Map each required simulation decision family to a taught M06 competency/tool/practical criterion.
- [ ] Map all six critical failures to explicit simulation decisions and scoring consequences.
- [ ] Flag any simulation behavior not taught by the curriculum; repair curriculum or remove the simulation demand rather than testing untaught content.
- [ ] Commit the traceability control.

### Task 2 — Write failing runtime/alignment tests first

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/tests/logic.test.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/tests/alignment.test.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/package.json`

- [ ] Write tests requiring a continuous 10-stage case and approximately 18–24 meaningful decisions.
- [ ] Write tests for entity/contact separation.
- [ ] Write tests for trusted callback behavior.
- [ ] Write tests for document mismatch handling.
- [ ] Write tests ensuring ambiguous duplicate/re-brokering evidence cannot alone produce a fraud conclusion.
- [ ] Write tests for payment-redirection HOLD/VERIFY/ESCALATE critical control.
- [ ] Write tests for urgency-pressure resistance and later evidence-state reclassification.
- [ ] Write tests proving first-attempt/remediation/corrected-decision/competency evidence is retained.
- [ ] Run tests and confirm they fail because runtime/content does not yet exist.
- [ ] Commit failing tests.

### Task 3 — Build student scenario and evidence package

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/Module-06-Simulation-Student.md`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/Module-06-Simulation-Scenario-Packet.md`

- [ ] Build the plausible initial broker/load approach.
- [ ] Create progressive evidence releases for entity, contact, callback, documents, financial status, duplicate ambiguity, payment change, pressure and later state change.
- [ ] Ensure evidence is sufficient for defensible decisions but intentionally incomplete at appropriate stages.
- [ ] Ensure no artifact gives away later answers prematurely.
- [ ] Commit scenario package.

### Task 4 — Build minimal runtime to satisfy decision-state tests

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/content.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/logic.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/app.js`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/index.html`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/styles.css`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/runtime/README.md`

- [ ] Implement the progressive case state and evidence releases.
- [ ] Implement decision scoring and six critical-failure states.
- [ ] Implement targeted remediation and corrected-decision flow without erasing first attempt.
- [ ] Implement final disposition/evidence packet summary.
- [ ] Run logic/alignment tests until green.
- [ ] Commit runtime build.

### Task 5 — Build instructor/scoring/competency package

**Files:**
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/Module-06-Simulation-Instructor-Guide.md`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/Module-06-Simulation-Scoring-Rubric.md`
- Create: `05-SIMULATIONS-AND-GAMES/Module-06/Module-06-Simulation-Completion-Record.md`

- [ ] Define facilitation and evidence-release timing.
- [ ] Define observable competency criteria and critical failures aligned to the M06 practical.
- [ ] Define diagnostic remediation by failure family.
- [ ] Define first-attempt and corrected-decision recording.
- [ ] Define final PROCEED / VERIFY / HOLD / ESCALATE / DECLINE evidence requirements.
- [ ] Commit instructor package.

### Task 6 — Run premium-content and boundary audit

**Files:**
- Create: `10-PRODUCTION/SIM-006-Premium-Content-QA-2026-09-05.md`

- [ ] Run Google/Employment/Buyer/no-filler tests stage by stage.
- [ ] Verify every decision materially changes evidence, risk, documentation duty or case state.
- [ ] Verify no M05/M07/M08/M09/M14 scope takeover.
- [ ] Verify date-sensitive FMCSA/Motus content is controlled and not overgeneralized.
- [ ] Record defects and repair before passing this gate.
- [ ] Commit QA record.

### Task 7 — Fresh verification and status reconciliation

**Files:**
- Modify: `00-ACADEMY-MASTER/MODULE-06-MASTER-BRANCH.md`
- Modify: `00-ACADEMY-MASTER/ARCHITECTURE-COMPLETION-MATRIX-M01-M15-2026-09-01.md`
- Modify: `00-ACADEMY-MASTER/ACADEMY-COMPLETION-DEADLINE-CONTROL-2026-09-04.md`

- [ ] Fresh-run all SIM-006 automated tests.
- [ ] Fresh-fetch the student packet, runtime, instructor guide, rubric, completion record and QA record.
- [ ] Confirm all six critical controls are present and aligned.
- [ ] Confirm no approved M06 asset was overwritten or removed.
- [ ] Only if fresh evidence supports it, set status to `SIM-006 — BUILD COMPLETE — RELEASE QA DEFERRED`.
- [ ] Do not set `PUBLICATION_READY`.
- [ ] Commit reconciled master status.