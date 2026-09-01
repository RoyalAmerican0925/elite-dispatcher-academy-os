# Claude Task — SIM-004 Carrier Onboarding Command Desk Build

**Assigned:** 2026-09-01
**Branch:** `academy-master-architecture`
**Repository:** `RoyalAmerican0925/elite-dispatcher-academy-os`
**Task status:** READY FOR CLAUDE

Claude: execute the approved SIM-004 build. Do not redesign the Academy workflow and do not merge to `main`.

## Read first

1. `docs/superpowers/specs/2026-09-01-sim-004-carrier-onboarding-command-desk-design.md`
2. `docs/superpowers/plans/2026-09-01-sim-004-carrier-onboarding-command-desk.md`
3. `10-PRODUCTION/Module-04-Premium-Instructor-Alignment-QA-2026-09-01.md`
4. `03-ASSESSMENTS/Instructor-Guides/Module-04-Instructor-Guide.md`
5. `03-ASSESSMENTS/Practical-Assessments/Module-04-Practical.md`
6. `03-ASSESSMENTS/Practical-Assessments/Modules-01-05-Instructor-Scoring-Guide.md`
7. Module 04 student manual and student tools.
8. SIM-003 runtime/package only as an implementation-pattern reference. Do not import its runtime modules.

## Build objective

Build the complete SIM-004 — Carrier Onboarding Command Desk package on `academy-master-architecture`.

The simulation uses the approved ten-stage / twenty-decision architecture and must assess real Module 04 occupational judgment rather than trivia.

Core operating sequence:

**COLLECT → CLASSIFY → VERIFY → RECONCILE → PROTECT → DECIDE → DOCUMENT → TRACK**

## Hard requirements

Use TDD. Create the SIM-004 runtime tests before implementing runtime behavior and verify the tests initially fail for the intended missing behavior.

Preserve exactly the three locked critical-failure concepts already synchronized to Module 04:

1. dispatching through the stated required driver qualification/endorsement conflict;
2. changing payment instructions from an unverified inbound request;
3. silently assuming carrier DQ/drug-alcohol compliance-program authority outside the defined dispatch scope.

Do not invent additional hidden critical failures.

Keep date-sensitive 2026 NRII/medical-certification material isolated and explicitly flagged for reverification. Do not turn a temporary procedure into permanent generic remediation.

Use fictional records only. No real PII, bank information, tax IDs, medical details, or carrier credentials.

Preserve first-attempt evidence, final mastery, remediation history, critical/instructor-review state, competency status, final integrated readiness decision, and SIM-004-specific persistent state.

SIM-004 must not import SIM-001, SIM-002, or SIM-003 runtime modules.

## Required product files

Create under `05-SIMULATIONS-AND-GAMES/Module-04/`:

- `Module-04-Simulation-Student.md`
- `Module-04-Simulation-Scenario-Packet.md`
- `Module-04-Simulation-Instructor-Guide.md`
- `Module-04-Simulation-Scoring-Rubric.md`
- `Module-04-Simulation-Completion-Record.md`
- `runtime/index.html`
- `runtime/styles.css`
- `runtime/app.js`
- `runtime/content.js`
- `runtime/logic.js`
- `runtime/package.json`
- `runtime/tests/logic.test.js`
- `runtime/README.md`

Also create:

- `.github/workflows/sim004-runtime-tests.yml`

## Testing expectations

Tests must cover at minimum:

- SIM-004 ID and stage/decision integrity;
- twenty-decision order;
- supported decision types;
- immutable first attempt;
- remediation state;
- exactly three critical escalation decisions;
- repeated unsafe-response instructor-review behavior;
- first-attempt score;
- final mastery score;
- competency status;
- progression/completion;
- integrated final disposition evidence;
- state normalization/persistence;
- rejection of state belonging to SIM-001, SIM-002, or SIM-003;
- date-sensitive content isolation where practical;
- no sibling-runtime imports.

Run the complete SIM-004 test suite before handoff.

## Quality standard

NO FILLER. Do not add questions just to reach a count. Every interaction must materially test document literacy, source selection, evidence limits, sequencing, verification, scope, currentness, operational judgment, safe action, or final disposition.

The learner should experience one evolving carrier onboarding file, not twenty disconnected quiz questions.

The product package must be usable by a student and instructor without relying on private chat history.

## Do not do

- Do not merge to `main`.
- Do not modify SIM-001 through SIM-003 unless a truly unavoidable repository-wide issue is discovered; report it instead.
- Do not mark SIM-004 `PUBLICATION_READY` or `COMMERCIAL_READY`.
- Do not close the final build gate yourself. ChatGPT performs independent GitHub inspection, test verification, repairs, and QA after your handoff.
- Do not start SIM-005.

## Handoff

When finished, leave a Claude completion note in `agents/` containing:

- exact commit SHA(s);
- files created/modified;
- exact test command and result;
- any failing or deferred item;
- any current-source issue that needs reverification;
- confirmation that no merge to `main` occurred.

Expected handoff state is **CLAUDE BUILD COMPLETE — AWAITING CHATGPT INDEPENDENT QA**, not Academy release approval.
