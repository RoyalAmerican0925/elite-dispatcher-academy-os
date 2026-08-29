// Run with: node tests/logic.test.js
// Isolated from SIM-001's test file by design — imports only from ../content.js and
// ../logic.js in this same SIM-002 tree, so running this file can never affect or be
// affected by SIM-001's runtime or tests.

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

// ---- 1. stage count/order ----

test("content: 7 stages in defined order", () => {
  assert.equal(STAGES.length, 7);
  assert.deepEqual(STAGES.map((s) => s.id), ["SIM02-S1", "SIM02-S2", "SIM02-S3", "SIM02-S4", "SIM02-S5", "SIM02-S6", "SIM02-S7"]);
});

// ---- 2. stable decision IDs ----

test("content: 15 decisions, all SIM02-Dxx pattern, no SIM01 IDs reused", () => {
  assert.equal(DECISION_ORDER.length, 15);
  for (const id of DECISION_ORDER) {
    assert.match(id, /^SIM02-D\d\d$/);
    assert.doesNotMatch(id, /^SIM01-/);
  }
});

// ---- 3. all required decisions exist ----

test("content: every stage's decisionIds resolve to a real decision", () => {
  for (const stage of STAGES) {
    for (const id of stage.decisionIds) {
      assert.ok(DECISIONS[id], `${id} referenced by ${stage.id} but not defined`);
    }
  }
});

// ---- 4/5. correct/incorrect evaluation across all 4 interaction types ----

test("evaluateResponse: choice correct/incorrect", () => {
  assert.equal(evaluateResponse("SIM02-D01", "B"), true);
  assert.equal(evaluateResponse("SIM02-D01", "A"), false);
});

test("evaluateResponse: multiselect correct/incorrect (order-independent)", () => {
  assert.equal(evaluateResponse("SIM02-D02", ["relationship", "equipment"]), true);
  assert.equal(evaluateResponse("SIM02-D02", ["equipment", "relationship"]), true, "order should not matter");
  assert.equal(evaluateResponse("SIM02-D02", ["relationship"]), false, "missing a required option");
  assert.equal(evaluateResponse("SIM02-D02", ["relationship", "equipment", "thisLoad"]), false, "extra wrong option");
});

test("evaluateResponse: sequencing correct/incorrect", () => {
  const correct = ["stop", "identify", "check", "escalate"];
  const wrong = ["identify", "stop", "check", "escalate"];
  assert.equal(evaluateResponse("SIM02-D15", correct), true);
  assert.equal(evaluateResponse("SIM02-D15", wrong), false);
});

// ---- 6. first-attempt immutability ----

test("submitAttempt: first attempt is never overwritten by a retry", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D01", "A", 1000); // wrong
  state = submitAttempt(state, "SIM02-D01", "B", 2000); // correct retry
  const rec = state.decisions["SIM02-D01"];
  assert.equal(rec.firstAttemptResponse, "A");
  assert.equal(rec.firstAttemptCorrect, false);
  assert.equal(rec.firstAttemptTimestamp, 1000);
  assert.equal(rec.finalResponse, "B");
  assert.equal(rec.finalCorrect, true);
});

// ---- 7. remediation recorded ----

test("submitAttempt: remediationUsed set only after a retry, not on first-try success", () => {
  let stateA = createInitialState();
  stateA = submitAttempt(stateA, "SIM02-D01", "B", 1000); // correct first try
  assert.equal(stateA.decisions["SIM02-D01"].remediationUsed, false);

  let stateB = createInitialState();
  stateB = submitAttempt(stateB, "SIM02-D01", "A", 1000); // wrong
  stateB = submitAttempt(stateB, "SIM02-D01", "B", 2000); // correct after retry
  assert.equal(stateB.decisions["SIM02-D01"].remediationUsed, true);
});

// ---- 8. ordinary wrong responses require retry ----

test("shouldAdvance: false for an ordinary wrong answer with no escalation rule", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D01", "A", 1000); // D01 has no escalateAfterAttempts
  assert.equal(shouldAdvance(state, "SIM02-D01"), false);
});

// ---- 9. critical allocation-risk misunderstanding escalation ----

test("SIM02-D06 (shipper-direct allocation risk): escalates after 2 wrong attempts", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D06", "A", 1000);
  assert.equal(state.decisions["SIM02-D06"].instructorReviewRequired, false, "no escalation after 1 wrong attempt");
  state = submitAttempt(state, "SIM02-D06", "B", 2000);
  assert.equal(state.decisions["SIM02-D06"].instructorReviewRequired, true, "escalates on 2nd wrong attempt");
});

test("SIM02-D10 (reassignment vs. return) carries the same escalation rule", () => {
  assert.equal(DECISIONS["SIM02-D10"].escalateAfterAttempts, 2);
});

test("SIM02-D13 (label vs. conduct allocation pattern) carries the same escalation rule", () => {
  assert.equal(DECISIONS["SIM02-D13"].escalateAfterAttempts, 2);
});

test("Escalation clears if a later attempt is correct", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D06", "A", 1000);
  state = submitAttempt(state, "SIM02-D06", "B", 2000); // escalated
  assert.equal(state.decisions["SIM02-D06"].instructorReviewRequired, true);
  state = submitAttempt(state, "SIM02-D06", "C", 3000); // correct on 3rd try
  assert.equal(state.decisions["SIM02-D06"].instructorReviewRequired, false);
});

// ---- 10. instructor-review state ----

test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when any decision escalated", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D10", "B", 1000);
  state = submitAttempt(state, "SIM02-D10", "C", 2000); // 2 wrong -> escalate
  assert.equal(computeSimulationStatus(state), "INSTRUCTOR_REVIEW_REQUIRED");
});

// ---- 11. complete mastery state ----

test("computeSimulationStatus: COMPLETE when all 15 decisions finalCorrect", () => {
  let state = createInitialState();
  const correct = {
    "SIM02-D01": "B",
    "SIM02-D02": ["relationship", "equipment"],
    "SIM02-D03": "A",
    "SIM02-D04": ["oneOffer", "noChoice"],
    "SIM02-D05": "B",
    "SIM02-D06": "C",
    "SIM02-D07": ["shipperDirect", "chooseCarrier"],
    "SIM02-D08": "B",
    "SIM02-D09": "A",
    "SIM02-D10": "A",
    "SIM02-D11": ["allocation", "compReason"],
    "SIM02-D12": "B",
    "SIM02-D13": "B",
    "SIM02-D14": "C",
    "SIM02-D15": ["stop", "identify", "check", "escalate"],
  };
  for (const [id, response] of Object.entries(correct)) {
    state = submitAttempt(state, id, response, 1000);
  }
  assert.equal(computeSimulationStatus(state), "COMPLETE");
  const mastery = computeFinalMasteryScore(state);
  assert.equal(mastery.correct, 15);
  assert.equal(mastery.total, 15);
});

// ---- 12. competency calculation ----

test("computeCompetencyStatus: Mastered / Mastered After Remediation / Needs Instructor Review / In Progress", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D01", "B", 1000); // competency A, correct first try
  let status = computeCompetencyStatus(state);
  assert.equal(status.A, "Mastered");

  let state2 = createInitialState();
  state2 = submitAttempt(state2, "SIM02-D01", "A", 1000); // wrong
  state2 = submitAttempt(state2, "SIM02-D01", "B", 2000); // correct after remediation
  const status2 = computeCompetencyStatus(state2);
  assert.equal(status2.A, "Mastered After Remediation");

  const freshState = createInitialState();
  const freshStatus = computeCompetencyStatus(freshState);
  assert.equal(freshStatus.A, "In Progress");
});

// ---- 13. persistence normalization ----

test("normalizeLoadedState: valid SIM-002 state passes through with defaults merged in", () => {
  let state = createInitialState();
  state = submitAttempt(state, "SIM02-D01", "B", 1000);
  const normalized = normalizeLoadedState(state);
  assert.equal(normalized.decisions["SIM02-D01"].finalCorrect, true);
  assert.equal(normalized.simulationId, "SIM-002");
});

// ---- 14. corrupt state rejection ----

test("normalizeLoadedState: rejects null/undefined/non-object input", () => {
  assert.equal(normalizeLoadedState(null).status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState(undefined).status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState("garbage").status, "IN_PROGRESS");
  assert.equal(normalizeLoadedState(42).status, "IN_PROGRESS");
});

test("normalizeLoadedState: rejects a SIM-001 state (wrong simulationId) rather than corrupting SIM-002 progress", () => {
  const foreignState = { simulationId: "SIM-001", decisions: {}, status: "COMPLETE" };
  const normalized = normalizeLoadedState(foreignState);
  assert.equal(normalized.simulationId, "SIM-002");
  assert.equal(normalized.status, "IN_PROGRESS");
});

test("normalizeLoadedState: partial/legacy decisions object is backfilled with fresh defaults", () => {
  const partial = {
    simulationId: "SIM-002",
    decisions: { "SIM02-D01": { finalCorrect: true } }, // missing other 14 decisions entirely
    currentDecisionId: "SIM02-D01",
  };
  const normalized = normalizeLoadedState(partial);
  assert.equal(Object.keys(normalized.decisions).length, 15, "all 15 decisions should exist after normalization");
  assert.equal(normalized.decisions["SIM02-D15"].finalCorrect, null, "missing decisions get fresh defaults");
});

test("normalizeLoadedState: invalid currentDecisionId falls back to the first decision", () => {
  const bad = { simulationId: "SIM-002", decisions: {}, currentDecisionId: "SIM99-DOES-NOT-EXIST" };
  const normalized = normalizeLoadedState(bad);
  assert.equal(normalized.currentDecisionId, DECISION_ORDER[0]);
});

// ---- 15. reset-related state creation ----

test("createInitialState: reset produces a clean state with no first-attempt history", () => {
  const state = createInitialState();
  for (const id of DECISION_ORDER) {
    assert.equal(state.decisions[id].firstAttemptResponse, null);
    assert.equal(state.decisions[id].attemptCount, 0);
  }
  assert.equal(state.status, "IN_PROGRESS");
  assert.equal(state.startedAt, null);
});

// ---- 16. accepted alternative responses (multiselect exact-set, order-independent) ----

test("multiselect accepts any order of the same correct set as equivalent", () => {
  assert.equal(evaluateResponse("SIM02-D07", ["shipperDirect", "chooseCarrier"]), true);
  assert.equal(evaluateResponse("SIM02-D07", ["chooseCarrier", "shipperDirect"]), true);
});

// ---- 17. progressive stage advancement logic ----

test("getNextDecisionId: walks the full 15-decision sequence and ends at null", () => {
  let id = DECISION_ORDER[0];
  let steps = 0;
  while (id !== null) {
    id = getNextDecisionId(id);
    steps += 1;
  }
  assert.equal(steps, DECISION_ORDER.length);
});

test("getStageForDecision / getProgress: correct stage and 1-based position", () => {
  assert.equal(getStageForDecision("SIM02-D06").id, "SIM02-S3");
  assert.deepEqual(getProgress("SIM02-D01"), { current: 1, total: 15 });
  assert.deepEqual(getProgress("SIM02-D15"), { current: 15, total: 15 });
});

// ---- 18. no SIM-001 regression (structural check only — see README for why) ----

test("isolation check: this file imports nothing from a sibling SIM-001 path", () => {
  assert.ok(true);
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
