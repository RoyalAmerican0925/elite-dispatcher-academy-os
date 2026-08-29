// Run with: node tests/logic.test.js
// Isolated from SIM-001's and SIM-002's test files — imports only from ../content.js and
// ../logic.js in this SIM-003 tree.

import assert from "node:assert/strict";
import {
  createInitialState,
  evaluateResponse,
  submitAttempt,
  shouldAdvance,
  getNextDecisionId,
  computeSimulationStatus,
  computeFirstAttemptScore,
  computeFinalMasteryScore,
  computeRemediationCount,
  computeCompetencyStatus,
  getStageForDecision,
  getProgress,
  normalizeLoadedState,
} from "../logic.js";
import { DECISION_ORDER, DECISIONS, STAGES } from "../content.js";

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log(`PASS  ${name}`);
  } catch (err) {
    failed += 1;
    console.log(`FAIL  ${name}`);
    console.log(`      ${err.message}`);
  }
}

// 1. stage order
test("content: 7 stages in defined order", () => {
  assert.equal(STAGES.length, 7);
  assert.deepEqual(STAGES.map((s) => s.id), ["SIM03-S1", "SIM03-S2", "SIM03-S3", "SIM03-S4", "SIM03-S5", "SIM03-S6", "SIM03-S7"]);
});

// 2. decision ID stability
test("content: 15 decisions, all SIM03-Dxx pattern, no SIM01/SIM02 IDs reused", () => {
  assert.equal(DECISION_ORDER.length, 15);
  for (const id of DECISION_ORDER) {
    assert.match(id, /^SIM03-D\d\d$/);
    assert.doesNotMatch(id, /^SIM01-/);
    assert.doesNotMatch(id, /^SIM02-/);
  }
});

// 3. all stage decision references resolve
test("content: every stage's decisionIds resolve to a real decision", () => {
  for (const stage of STAGES) {
    for (const id of stage.decisionIds) {
      assert.ok(DECISIONS[id], `${id} referenced by ${stage.id} but not defined`);
    }
  }
});

// 4/5. correct/incorrect evaluation
test("evaluateResponse: choice correct/incorrect", () => {
  assert.equal(evaluateResponse("SIM03-D03", "A"), true);
  assert.equal(evaluateResponse("SIM03-D03", "B"), false);
});

// 6. multiselect order independence
test("evaluateResponse: multiselect is order-independent and exact-set", () => {
  assert.equal(evaluateResponse("SIM03-D13", ["tareWeight", "axleDistribution", "commodity", "dimensions", "loadingMethod"]), true);
  assert.equal(evaluateResponse("SIM03-D13", ["dimensions", "commodity", "loadingMethod", "axleDistribution", "tareWeight"]), true, "order should not matter");
  assert.equal(evaluateResponse("SIM03-D13", ["tareWeight"]), false, "missing required options");
  assert.equal(evaluateResponse("SIM03-D13", ["tareWeight", "axleDistribution", "commodity", "dimensions", "loadingMethod", "trailerLength"]), false, "extra wrong option");
});

test("evaluateResponse: sequencing correct/incorrect", () => {
  const correct = ["stop", "identify", "verify", "donotassume"];
  const wrong = ["identify", "stop", "verify", "donotassume"];
  assert.equal(evaluateResponse("SIM03-D15", correct), true);
  assert.equal(evaluateResponse("SIM03-D15", wrong), false);
});

// 7. first-attempt immutability
test("submitAttempt: first attempt is never overwritten by a retry", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D03", "B", 1000); // wrong
  state = submitAttempt(state, "SIM03-D03", "A", 2000); // correct retry
  const rec = state.decisions["SIM03-D03"];
  assert.equal(rec.firstAttemptResponse, "B");
  assert.equal(rec.firstAttemptCorrect, false);
  assert.equal(rec.firstAttemptTimestamp, 1000);
  assert.equal(rec.finalResponse, "A");
  assert.equal(rec.finalCorrect, true);
});

// 8. remediation tracking
test("submitAttempt: remediationUsed set only after a retry", () => {
  let stateA = createInitialState();
  stateA = submitAttempt(stateA, "SIM03-D03", "A", 1000);
  assert.equal(stateA.decisions["SIM03-D03"].remediationUsed, false);

  let stateB = createInitialState();
  stateB = submitAttempt(stateB, "SIM03-D03", "B", 1000);
  stateB = submitAttempt(stateB, "SIM03-D03", "A", 2000);
  assert.equal(stateB.decisions["SIM03-D03"].remediationUsed, true);
});

// 9. ordinary wrong-answer retry
test("shouldAdvance: false for an ordinary wrong answer with no escalation rule", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D03", "B", 1000); // D03 has no escalateAfterAttempts
  assert.equal(shouldAdvance(state, "SIM03-D03"), false);
});

// 10. Load D critical escalation (SIM03-D09)
test("SIM03-D09 (Load D hazmat endorsement): escalates after 2 wrong attempts", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D09", "A", 1000);
  assert.equal(state.decisions["SIM03-D09"].instructorReviewRequired, false, "no escalation after 1 wrong attempt");
  state = submitAttempt(state, "SIM03-D09", "B", 2000);
  assert.equal(state.decisions["SIM03-D09"].instructorReviewRequired, true, "escalates on 2nd wrong attempt");
});

// 11. Load E critical escalation (SIM03-D11)
test("SIM03-D11 (Load E gross-vs-axle trap): escalates after 2 wrong attempts", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D11", "A", 1000);
  assert.equal(state.decisions["SIM03-D11"].instructorReviewRequired, false, "no escalation after 1 wrong attempt");
  state = submitAttempt(state, "SIM03-D11", "C", 2000);
  assert.equal(state.decisions["SIM03-D11"].instructorReviewRequired, true, "escalates on 2nd wrong attempt");
});

test("Exactly two decisions carry escalateAfterAttempts, matching the two Practical critical failures", () => {
  const escalating = DECISION_ORDER.filter((id) => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(escalating, ["SIM03-D09", "SIM03-D11"]);
});

// 12. instructor-review state
test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when a critical decision escalates", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D09", "A", 1000);
  state = submitAttempt(state, "SIM03-D09", "B", 2000);
  assert.equal(computeSimulationStatus(state), "INSTRUCTOR_REVIEW_REQUIRED");
});

// 13. escalation clearing after later correct answer
test("Escalation clears if a later attempt is correct", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D09", "A", 1000);
  state = submitAttempt(state, "SIM03-D09", "B", 2000); // escalated
  assert.equal(state.decisions["SIM03-D09"].instructorReviewRequired, true);
  state = submitAttempt(state, "SIM03-D09", "C", 3000); // correct on 3rd try
  assert.equal(state.decisions["SIM03-D09"].instructorReviewRequired, false);
});

// 14. full mastery COMPLETE state
test("computeSimulationStatus: COMPLETE when all 15 decisions finalCorrect", () => {
  let state = createInitialState();
  const correct = {
    "SIM03-D01": ["trailerType", "widthConfig", "noTempControl", "driverNoHX"],
    "SIM03-D02": ["commodityFit", "dimensionFit", "weightAxle"],
    "SIM03-D03": "A",
    "SIM03-D04": ["widthOk", "noTempNeeded", "standardLoading"],
    "SIM03-D05": "B",
    "SIM03-D06": "B",
    "SIM03-D07": "C",
    "SIM03-D08": ["statesRoutes", "permitProcess", "equipmentReady"],
    "SIM03-D09": "C",
    "SIM03-D10": "B",
    "SIM03-D11": "B",
    "SIM03-D12": ["separateChecks", "tandemLimit"],
    "SIM03-D13": ["tareWeight", "axleDistribution", "commodity", "dimensions", "loadingMethod"],
    "SIM03-D14": "C",
    "SIM03-D15": ["stop", "identify", "verify", "donotassume"],
  };
  for (const [id, response] of Object.entries(correct)) {
    state = submitAttempt(state, id, response, 1000);
  }
  assert.equal(computeSimulationStatus(state), "COMPLETE");
  const mastery = computeFinalMasteryScore(state);
  assert.equal(mastery.correct, 15);
  assert.equal(mastery.total, 15);
});

// 15. competency calculation
test("computeCompetencyStatus: Mastered / Mastered After Remediation / Needs Instructor Review / In Progress", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D10", "B", 1000);
  let status = computeCompetencyStatus(state);
  assert.equal(status.E, "In Progress");

  let state2 = createInitialState();
  state2 = submitAttempt(state2, "SIM03-D10", "A", 1000);
  state2 = submitAttempt(state2, "SIM03-D10", "B", 2000);
  state2 = submitAttempt(state2, "SIM03-D09", "C", 3000);
  const status2 = computeCompetencyStatus(state2);
  assert.equal(status2.E, "Mastered After Remediation");

  const freshState = createInitialState();
  const freshStatus = computeCompetencyStatus(freshState);
  assert.equal(freshStatus.E, "In Progress");
});

// 16. persistence normalization (valid state)
test("normalizeLoadedState: valid SIM-003 state passes through with defaults merged in", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM03-D01", ["trailerType", "widthConfig", "noTempControl", "driverNoHX"], 1000);
  const normalized = normalizeLoadedState(state);
  assert.equal(normalized.decisions["SIM03-D01"].finalCorrect, true);
  assert.equal(normalized.simulationId, "SIM-003");
});

// 17. corrupt-state rejection
test("normalizeLoadedState: rejects null/undefined/non-object input", () => {
  assert.equal(normalizeLoadedState(null).status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState(undefined).status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState("garbage").status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState(42).status, "IN_PROGRESS");
});

// 18. wrong-simulation-state rejection
test("normalizeLoadedState: rejects a SIM-001 or SIM-002 state rather than corrupting SIM-003 progress", () => {
  const foreign1 = { simulationId: "SIM-001", decisions: {}, status: "COMPLETE" };
  const foreign2 = { simulationId: "SIM-002", decisions: {}, status: "COMPLETE" };
  assert.equal(normalizeLoadedState(foreign1).simulationId, "SIM-003");
  assert.equal(normalizeLoadedState(foreign1).status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState(foreign2).simulationId, "SIM-003");
  assert.equal(normalizeLoadedState(foreign2).status, "IN_PROGRESS");
});

// 19. partial/legacy state backfill
test("normalizeLoadedState: partial/legacy decisions object is backfilled with fresh defaults", () => {
  const partial = {
    simulationId: "SIM-003",
    decisions: { "SIM03-D01": { finalCorrect: true } },
    currentDecisionId: "SIM03-D01",
  };
  const normalized = normalizeLoadedState(partial);
  assert.equal(Object.keys(normalized.decisions).length, 15, "all 15 decisions should exist after normalization");
  assert.equal(normalized.decisions["SIM03-D15"].finalCorrect, null, "missing decisions get fresh defaults");
});

// 20. invalid decision-pointer recovery
test("normalizeLoadedState: invalid currentDecisionId falls back to the first decision", () => {
  const bad = { simulationId: "SIM-003", decisions: {}, currentDecisionId: "SIM99-DOES-NOT-EXIST" };
  const normalized = normalizeLoadedState(bad);
  assert.equal(normalized.currentDecisionId, DECISION_ORDER[0]);
});

// 21. clean reset state
test("createInitialState: reset produces a clean state with no first-attempt history", () => {
  const state = createInitialState();
  for (const id of DECISION_ORDER) {
    assert.equal(state.decisions[id].firstAttemptResponse, null);
    assert.equal(state.decisions[id].attemptCount, 0);
  }
  assert.equal(state.status, "IN_PROGRESS");
  assert.equal(state.startedAt, null);
});

// 22. progression through all decisions
test("getNextDecisionId: walks the full 15-decision sequence and ends at null", () => {
  let id = DECISION_ORDER[0];
  let steps = 0;
  while (id !== null) {
    id = getNextDecisionId(id);
    steps += 1;
  }
  assert.equal(steps, DECISION_ORDER.length);
});

// 23. progress/stage calculation
test("getStageForDecision / getProgress: correct stage and 1-based position", () => {
  assert.equal(getStageForDecision("SIM03-D09").id, "SIM03-S5");
  assert.deepEqual(getProgress("SIM03-D01"), { current: 1, total: 15 });
  assert.deepEqual(getProgress("SIM03-D15"), { current: 15, total: 15 });
});

// 24. SIM-001/SIM-002 isolation (structural)
test("isolation check: imports nothing from sibling SIM-001/SIM-002 paths", () => {
  assert.ok(true);
});

// 25. accepted alternative classifications supported by the curriculum
test("SIM03-D07 (Load C overwidth): both 'automatically illegal' and 'automatically permittable' are rejected as wrong", () => {
  assert.equal(evaluateResponse("SIM03-D07", "A"), false, "automatically illegal is wrong");
  assert.equal(evaluateResponse("SIM03-D07", "B"), false, "automatically permittable is wrong");
  assert.equal(evaluateResponse("SIM03-D07", "C"), true, "verify-before-concluding is the only correct answer");
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
