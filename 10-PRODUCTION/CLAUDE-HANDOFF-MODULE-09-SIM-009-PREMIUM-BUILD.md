# CLAUDE HANDOFF — MODULE 09 / SIM-009 PREMIUM BUILD

## Mission
Continue the approved Module 09 build in repository `RoyalAmerican0925/elite-dispatcher-academy-os` on branch **`module-09-premium-build`**.

**DO NOT work on `main`. DO NOT merge anything.** ChatGPT owns independent QA and integration into `academy-master-architecture` after your build.

Your job is the heavy construction of **SIM-009 — Booking Control Desk** and its permanent simulation package. Do not redesign the architecture. The controlling design, competencies, assessments, practical and instructor rules are already committed.

## Read these controlling files before writing code
1. `10-PRODUCTION/Module-09-Premium-Design-Spec-2026-09-05.md`
2. `docs/superpowers/plans/2026-09-05-module-09-premium-build.md`
3. `00-ACADEMY-MASTER/MODULE-09-MASTER-BRANCH.md`
4. `03-ASSESSMENTS/Module-09/Module-09-Premium-Competency-Map-C01-C15.md`
5. `03-ASSESSMENTS/Module-09/Booking-Control-Desk-Practical.md`
6. `03-ASSESSMENTS/Module-09/Booking-Control-Desk-Practical-Scoring-and-Remediation-Control.md`
7. `03-ASSESSMENTS/Instructor-Guides/Module-09-Instructor-Guide.md`
8. all six `02-CURRICULUM/Module-09/Student-Manual-Part-*.md`
9. all nine `04-STUDENT-TOOLS/Module-09-Tools/*.md`

The existing M08/M07/M06 simulations may be inspected for runtime conventions, but do not copy defects or change M09 architecture to match an older module.

## Locked architecture — do not change
### Competencies
Exactly **15**: M09-C01 through M09-C15.

### Critical-failure families
Exactly **six**:
- M09-CF-01 unauthorized carrier commitment
- M09-CF-02 material rate-confirmation acceptance error
- M09-CF-03 unresolved verbal/written discrepancy represented as resolved
- M09-CF-04 wrong/obsolete/unverified booking document used for dispatch
- M09-CF-05 document fabrication/material alteration
- M09-CF-06 false booking completion

Do not invent CF-07.

### SIM architecture
Exactly **12 progressive stages** and at least **24 meaningful decisions/actions**:
1. Receive M08 negotiation handoff
2. Establish booking identity and authority
3. Receive and authenticate rate confirmation
4. Extract material terms
5. Reconcile rate and money terms
6. Reconcile operational terms
7. Detect discrepancies / missing facts / version problems
8. Correction and escalation loop
9. Acceptance / signature / authority control
10. Build booking record
11. Assemble dispatch packet and driver handoff
12. Final BOOKED / HOLD / ESCALATE closeout and M10 handoff

Every one of the 15 competencies must have simulation evidence.

## Evidence packet
Use fictional training entities and clearly mark case-specific numbers/terms as instructional assumptions. The scenario must contain:
- M08 negotiation handoff/call record;
- broker/load identity communication;
- Rate Confirmation v1 with at least two material conflicts and one nonmaterial discrepancy;
- correction communication;
- Rate Confirmation v2 with a changed term requiring version control;
- supplied carrier authority matrix;
- driver/truck/equipment identity facts sufficient for M09;
- dispatch-packet source documents;
- at least one irrelevant/obsolete document that must be excluded.

Do not require detailed M10 routing, M11 HOS, M12 monitoring, M13 exception/claim, or M14 billing work.

## Required permanent package files
Create under `05-SIMULATIONS-AND-GAMES/Module-09/`:
1. `Module-09-Simulation-Student-Instructions.md`
2. `Module-09-Simulation-Scenario-and-Evidence-Packet.md`
3. `Module-09-Simulation-Instructor-Guide.md`
4. `Module-09-Simulation-Scoring-and-Competency-Map.md`
5. `Module-09-Simulation-Completion-and-Competency-Record.md`
6. `README.md` if useful for package navigation.

## Runtime required
Create under `05-SIMULATIONS-AND-GAMES/Module-09/runtime/`:
- `index.html`
- `styles.css`
- `content.js`
- `critical-controls.js`
- `logic.js`
- `app.js`
- `README.md`
- `package.json`
- `tests/logic.test.js`
- `tests/premium-gate.test.js`
- `tests/alignment.test.js`

Create workflow:
- `.github/workflows/sim009-runtime-tests.yml`

Node target: 22. Browser code: ES modules.

## Non-negotiable state semantics
1. Preserve first-attempt response/correctness/timestamp immutably.
2. Preserve final same-screen response/mastery separately.
3. When a CF triggers, record occurrence, family, decision/action, trigger evidence and time.
4. A later correct response on the **same decision/same fact pattern cannot resolve the CF**.
5. Each of the six CFs requires a **materially different alternate reassessment scenario** testing the same competency.
6. A passed reassessment changes resolution to `RESOLVED_BY_REASSESSMENT`; it never deletes or rewrites original occurrence.
7. Completion is blocked while any CF is unresolved, regardless of raw score.
8. Completion record separately exposes first-attempt score, final mastery, competency status, CF history, reassessment history, instructor state and final status.
9. Browser localStorage may be used only as local demonstration persistence and must be labeled non-durable. Do not claim LMS/account persistence.

## TDD requirement
Follow RED → GREEN.

### RED first
Create `tests/premium-gate.test.js` and workflow before implementing the runtime. It must fail because implementation is absent/incomplete. Preserve the GitHub Actions run ID or commit/run evidence in your handoff note.

The RED gate must require:
- exactly 12 stages;
- >=24 decisions/actions;
- all C01–C15 represented;
- exactly six CFs;
- first-attempt immutability;
- persistent CF after same-screen correction;
- alternate reassessment resolution;
- completion blocked by unresolved CF;
- completion-record evidence separation.

### GREEN
Implement only enough architecture to satisfy the approved design correctly—not shortcuts that merely make assertions pass. Then run full tests.

## Decision quality
Use multiple occupational interaction types where useful: choice, multiselect, sequencing, matching/classification, and structured-record decisions. Do not make 24 trivial multiple-choice recall questions and call that a simulation.

Decisions must force evidence use, such as:
- selecting controlling document/version;
- extracting material terms;
- reconciling conflicting terms;
- classifying discrepancy/materiality;
- choosing HOLD/CORRECT/ESCALATE;
- determining supplied authority;
- excluding obsolete evidence;
- assembling correct packet;
- recording final state and M10 handoff.

## Package alignment gate
`tests/alignment.test.js` must verify at minimum:
- all five permanent package docs exist;
- all six CF families are represented consistently;
- practical and simulation use the same critical-remediation rule;
- M08→M09 and M09→M10 boundaries are explicit;
- `BOOKED / DISPATCH PACKET READY` cannot coexist with unresolved M09 booking controls;
- package does not claim M10/M11/M12/M13/M14 completion;
- no `PUBLICATION_READY` claim.

## Error handling
Use explicit operational states:
VERIFIED; MATCH; MISMATCH — MATERIAL; MISMATCH — NONMATERIAL / CLERICAL; UNKNOWN / MISSING; SUPERSEDED; HOLD; CORRECT; ESCALATE; AUTHORIZED; NOT AUTHORIZED; BOOKED / DISPATCH PACKET READY; HAND OFF TO M10.

Do not let missing data silently become false/zero/no.

## Currentness / legal discipline
Do not invent universal broker terms, accessorial amounts, detention/TONU rules, tracking/check-call rules, signature methods, cancellation terms or payment terms. These are agreement-specific unless a current authoritative rule controls the point.

Do not make unsupported legal claims in runtime content. ChatGPT will perform the final primary-source/currentness audit after your build.

## What NOT to do
- Do not alter the six manual parts merely to fit your runtime unless you find a real contradiction; report it instead.
- Do not change the 15 competencies.
- Do not change the six CF families.
- Do not merge branches.
- Do not touch `main`.
- Do not label M09 `PUBLICATION_READY`.
- Do not close the M09 master build status yourself.
- Do not update Academy-wide percentages.
- Do not create fake QA evidence or claim tests passed without run evidence.

## Required final handoff note
When your heavy build is complete, create:
`10-PRODUCTION/CLAUDE-MODULE-09-SIM-009-BUILD-HANDOFF.md`

It must state:
- branch and exact final commit SHA;
- files created/modified;
- 12-stage count;
- decision/action count;
- competency count and coverage result;
- six CF families;
- RED run evidence;
- final GREEN run evidence;
- test counts;
- known limitations/uncertainties;
- explicit statement: `READY FOR CHATGPT INDEPENDENT QA — NOT APPROVED FOR MERGE`.

Stop there. ChatGPT performs independent inspection, repairs, source audit, permanent QA, final-head CI, PR review and integration.