# SIM-008 Runtime — Broker Negotiation Lab

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED

Coded interactive runtime for SIM-008 (Module 08 — Rate Negotiation and Broker Communication), 15 stages, 18 decisions, built to the Module 08 master-branch contract on `academy-master-architecture`.

## Isolation

No sibling-simulation files (SIM-001–007) were opened for writing or reading during this build. Content was built directly from `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`'s locked competency map, decision vocabulary, and critical-failure list, plus the execution assignment's 18-condition progressive-scenario requirement.

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

34 assertions covering: stage/decision progression, all 15 M08 competencies (C01–C15), target/floor/walk-away interpretation, missing-information VERIFY behavior, truthful vs. fabricated leverage, professional opening/role identification, evidence-supported counter logic, concession vs. conditional-trade logic, agreement-specific term clarification, later fact-change behavior, supplied authority boundary, all named critical-failure patterns, unresolved-term state, agreement-in-principle vs. booked-state boundary, first-attempt evidence preservation, remediation persistence, final competency calculation, and instructor-review/completion state.

## Critical-Failure Design Note

Six failure families are named in the Module 08 master branch. Five map to choice-type decisions using attempt-based escalation (D04 material misrepresentation, D07 fabricated leverage, D09 unauthorized commitment, D14 unauthorized below-floor acceptance, D17 premature booking claim). The sixth (false agreement state) is D15, a multiselect scored on exact-set correctness rather than attempt-count escalation — selecting the wrong set is itself the complete failure signal for that decision type. This is documented explicitly rather than silently deviating from the "six critical decisions" pattern used in earlier simulations.

## Known Limitations

- Built primarily from the Module 08 master-branch competency map and the execution assignment's scenario requirements, not from a full line-by-line read of all 6 Student Manual parts individually. The self-audit performed (see the completion report in `agents/`) checked competency coverage and vocabulary consistency against the master branch, but did not re-verify every manual part's exact scenario language.
- No headless-browser DOM test coverage.
- No device/accessibility QA performed.
- Browser/device QA, production deployment, LMS/student-account integration, durable production records, and manual accessibility QA remain deferred.
