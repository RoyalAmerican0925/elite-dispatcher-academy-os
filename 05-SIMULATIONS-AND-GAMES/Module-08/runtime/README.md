# SIM-008 Runtime — Broker Negotiation Lab

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED (curriculum-alignment repair applied 2026-09-04)

Coded interactive runtime for SIM-008 (Module 08 — Rate Negotiation and Broker Communication), 15 stages, 19 decisions, repaired against a full read of all six Module 08 Student Manual parts on `academy-master-architecture` (not the master-branch competency map alone).

## Curriculum-Alignment Repair (2026-09-04)

An independent inspection against the six actual Student Manual parts found the original 18-decision build functional but not yet curriculum-aligned at commercial depth. Full repair details, per-issue traceability, and the M08-C01–C15 traceability table are in
`agents/CLAUDE-SIM-008-CURRICULUM-ALIGNMENT-REPAIR-COMPLETE-2026-09-04.md`.

Summary of what changed:
- D07 (counter) no longer requires disclosing internal fuel/deadhead/dwell figures to be "evidence-supported"; it now tests distinguishing a grounded counter, a concise counter, an unsupported/random number, an invented market claim, and unnecessary over-explanation.
- D10 (new; previously part of D09) requires resolving all four of TRIGGER / AMOUNT-METHOD / EVIDENCE / PROCESS before an accessorial term counts as agreed, not just rejecting a vague promise.
- D16 (previously D15) is now a **categorize**-type decision requiring the learner to sort four negotiation items into all three closeout buckets (AGREED IN PRINCIPLE / UNRESOLVED / NOT DISCUSSED-NOT ESTABLISHED), not a single "select the agreed items" multiselect.
- D05/D06 (discovery) now require the learner to both recognize the unverified broker claim for what it is *and* choose a purposeful follow-up question — not just pick the least-wrong of four general reactions.
- D01 (preparation) now includes an unrelated old rate and an unverified assumed pattern as distractors, testing judgment about what actually belongs in a negotiating position rather than fact-recall.
- The Stage 9–13 rate sequence ($2,300 floor → $2,275 declined/escalated → $2,300 reauthorized) is now explicitly traced in the closeout artifact so the rate's return to $2,300 has a stated event, not an unexplained jump.
- Documentation (D17) and the closeout artifact narrative no longer treat a verbal statement, or "getting it in writing" during the call itself, as equivalent to completed Module 09 booking/document review.
- A new "categorize" decision type was added to the runtime engine (`logic.js` evaluation, `app.js` rendering) to support true three-bucket classification; this is additive and does not change the `choice`/`multiselect` behavior used elsewhere.

## Isolation

No sibling-simulation files (SIM-001–007) were opened for writing or reading during this build or its repair. Content was built and repaired directly from the six Module 08 Student Manual parts, `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`, `docs/superpowers/specs/2026-09-04-module-08-rate-negotiation-design.md`, and `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`.

## How to Run

```
cd 05-SIMULATIONS-AND-GAMES/Module-08/runtime
python3 -m http.server 8000
```

## How to Test

```
cd 05-SIMULATIONS-AND-GAMES/Module-08/runtime
npm test
```

55 assertions covering: stage/decision progression, all 15 M08 competencies (C01–C15) with depth checks on preparation/discovery/terms, target/floor/walk-away interpretation, missing-information VERIFY behavior, truthful vs. fabricated leverage, professional opening/role identification, purposeful broker discovery (recognition + question selection), evidence-supported counter logic without forced internal disclosure, conditional-trade vs. uncontrolled-concession logic, four-part (trigger/amount/evidence/process) accessorial-term control, scenario continuity of the escalation-to-reauthorization event chain, three-bucket closeout classification, documentation completeness and the verbal-statement-vs-Module-09-review boundary, agreement-in-principle vs. booked-state boundary, first-attempt evidence preservation (including after critical-decision remediation), remediation persistence, final competency calculation, and instructor-review/completion state.

## Critical-Failure Design Note

Six failure families are named in the Module 08 master branch. Five map to decisions using attempt-based escalation (D04 material misrepresentation, D08 fabricated leverage, D10 unauthorized/invented accessorial commitment, D15 unauthorized below-floor acceptance, D18 premature booking claim). The sixth (false agreement state) is D16, a **categorize**-type decision scored on full three-bucket-map correctness rather than attempt-count escalation — misclassifying any single item is itself the complete failure signal for that decision type. This is documented explicitly rather than silently deviating from the "six critical decisions" pattern used in earlier simulations.

## Known Limitations

- No headless-browser DOM test coverage; the categorize control's rendering was reviewed by code inspection and covered indirectly through `evaluateResponse`/`submitAttempt` logic tests, not an automated UI test.
- No device/accessibility QA performed.
- Browser/device QA, production deployment, LMS/student-account integration, durable production records, and manual accessibility QA remain deferred.
- Any federal legal/regulatory statement is not applicable to this module's content; no such statements are made.
