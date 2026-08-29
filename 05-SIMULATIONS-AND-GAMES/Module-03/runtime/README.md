# SIM-003 Runtime — Technical Documentation

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY

Coded interactive runtime for SIM-003 (Module 03 — Load Compatibility Desk), implementing the seven-stage, 15-decision simulation.

## Isolation from SIM-001 and SIM-002 (deliberate)

This runtime does not import from either `05-SIMULATIONS-AND-GAMES/Module-01/runtime/` or `.../Module-02/runtime/`. All three files here were written independently. Neither SIM-001's nor SIM-002's files were opened for writing during this build — zero regression risk to either.

## What's the same as SIM-002, what's different

Same mastery model, same persistence/normalization pattern, same interaction-type approach (choice, multiselect, sequencing — `matching` is defined in `evaluateResponse` for future reuse but no SIM-003 decision uses it, since none of Module 03's content naturally produced a matching-style task).

Different: **two** critical escalation-eligible decisions instead of three (SIM03-D09 — Load D hazmat-endorsement mismatch, and SIM03-D11 — Load E gross-vs-axle trap), matching the Module 03 Practical's own two named critical failures exactly, per the assignment's explicit instruction not to manufacture additional critical failures merely to make the simulation harder.

## How to Run

```
cd 05-SIMULATIONS-AND-GAMES/Module-03/runtime
python3 -m http.server 8000
# open http://localhost:8000
```

## How to Test

```
cd 05-SIMULATIONS-AND-GAMES/Module-03/runtime
npm test
```

26 assertions in `tests/logic.test.js`, covering all 25 categories the SIM-003-BUILD assignment listed: stage order, decision ID stability, decision-reference resolution, correct/incorrect evaluation for all three interaction types in use, multiselect order independence, first-attempt immutability, remediation tracking, ordinary-wrong-answer retry, Load D critical escalation, Load E critical escalation, exactly-two-critical-decisions verification, instructor-review state, escalation clearing, full mastery COMPLETE state, competency calculation across all four states, persistence normalization (valid/corrupt/wrong-simulation/partial/invalid-pointer), clean reset state, progression through all 15 decisions, progress/stage calculation, SIM-001/SIM-002 isolation (structural), and the Load C accepted-alternative-classification test (both "automatically illegal" and "automatically permittable" explicitly verified as wrong answers, not just one).

One real bug was caught and fixed during test-writing: an early draft of the COMPLETE-state test used incorrect option keys for SIM03-D04 and had SIM03-D12 typed as a single-choice decision when it's actually multiselect in `content.js`. Fixing the test (not the content, which was correct) is exactly what the test suite is for.

## SIM-001 / SIM-002 Regression Result

Not run — neither simulation's files were touched. Both remain runnable and unaffected; confirm directly with `cd ../../Module-01/runtime && npm test` or `cd ../../Module-02/runtime && npm test` if independent confirmation is wanted.

## Content-Lock / Regulatory Wording Notes

Every "do not teach" item from the assignment was checked against `content.js` during authoring: no claim that under-80,000-lb gross weight alone proves legality (SIM03-D11's correct answer explicitly rejects this), no claim that 80,000 lb is cargo weight, no claim that all 53-foot dry vans share identical payload or dimensions (SIM03-D01 explicitly separates nominal trailer type from actual unit-specific tare weight and interior dimensions), no claim that fitting on a deck proves legal movement, no absolute claim in either direction about 102-inch overwidth freight (SIM03-D07's correct answer is explicitly neither "automatically illegal" nor "automatically permittable" — both are wrong-answer choices), no claim that H and X are interchangeable (SIM03-D10 explicitly distinguishes H/N/X), no claim that H resolves every hazmat question, and no fixed-mileage HOS claim appears anywhere in this simulation's content.

## Known Limitations

Same as SIM-001/SIM-002: no headless-browser DOM test coverage, no device-level accessibility/responsive verification performed for this build.
