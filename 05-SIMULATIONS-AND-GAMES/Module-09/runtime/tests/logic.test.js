// Run with: node tests/logic.test.js
import assert from "node:assert/strict";
import {
  createInitialState, evaluateResponse, submitAttempt, shouldAdvance, getNextDecisionId,
  submitCriticalReassessment, getTriggeredUnresolvedFamilies, computeSimulationStatus,
  computeFirstAttemptScore, computeFinalMasteryScore, computeRemediationCount,
  computeCompetencyStatus, computeCriticalFailureStatus, computeCompletionRecord,
  getStageForDecision, getProgress, normalizeLoadedState,
} from "../logic.js";
import { DECISION_ORDER, DECISIONS, STAGES, ARTIFACTS, COMPETENCY_LABELS } from "../content.js";
import { CRITICAL_FAMILIES, REASSESSMENTS } from "../critical-controls.js";

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

// --- Structure ---
test("exactly 12 stages, 27 decisions, all resolve to their stage", () => {
  assert.equal(STAGES.length, 12);
  assert.equal(DECISION_ORDER.length, 27);
  assert.ok(DECISION_ORDER.length >= 24);
  for (const s of STAGES) for (const id of s.decisionIds) assert.equal(DECISIONS[id].stageId, s.id);
});
test("all 15 competencies and COMPETENCY_LABELS aligned", () => {
  const used = new Set();
  for (const id of DECISION_ORDER) for (const c of DECISIONS[id].competencies) used.add(c);
  assert.equal(used.size, 15);
  assert.equal(Object.keys(COMPETENCY_LABELS).length, 15);
});
test("exactly six critical families, one triggering decision each", () => {
  const byFamily = {};
  for (const id of DECISION_ORDER) {
    const cf = DECISIONS[id].criticalFailureFamily;
    if (cf) (byFamily[cf] ??= []).push(id);
  }
  assert.equal(Object.keys(byFamily).length, 6);
  for (const cf of Object.keys(CRITICAL_FAMILIES)) assert.ok(byFamily[cf] && byFamily[cf].length >= 1);
});

// --- Correct-answer key for full mastery run ---
const CORRECT = {
  "M09-D01": { rate: "agreed", pickup: "agreed", driverAssist: "agreed", detention: "unresolved" },
  "M09-D02": "B",
  "M09-D03": ["parties", "loadRef", "docVersion"],
  "M09-D04": "B",
  "M09-D05": "B",
  "M09-D06": "B",
  "M09-D07": ["rate", "pickup", "driverAssist", "detention"],
  "M09-D08": "B",
  "M09-D09": "A",
  "M09-D10": "B",
  "M09-D11": "B",
  "M09-D12": "B",
  "M09-D13": { rate: "match", pickup: "material", driverAssist: "material", contactName: "nonmaterial", detention: "unknown" },
  "M09-D14": "B",
  "M09-D15": ["citeConflict", "citeEvidence", "requestSpecific", "preserveOriginal"],
  "M09-D16": "B",
  "M09-D17": "B",
  "M09-D18": "B",
  "M09-D19": "A",
  "M09-D20": { originalM08Rate: "source", correctedPickup: "verified", rateDeviation: "unresolved", escalationSent: "decision" },
  "M09-D21": "B",
  "M09-D22": ["rcv2Current", "driverEquipment", "authorityExcerpt"],
  "M09-D23": "B",
  "M09-D24": "B",
  "M09-D25": "B",
  "M09-D26": "A",
  "M09-D27": ["verifiedFacts", "bookingNotOperational", "authorizationRecord"],
};

test("evaluateResponse: spot-check correct and incorrect on each decision type", () => {
  assert.equal(evaluateResponse("M09-D01", CORRECT["M09-D01"]), true);
  assert.equal(evaluateResponse("M09-D01", { ...CORRECT["M09-D01"], detention: "agreed" }), false);
  assert.equal(evaluateResponse("M09-D02", "B"), true);
  assert.equal(evaluateResponse("M09-D02", "A"), false);
  assert.equal(evaluateResponse("M09-D03", CORRECT["M09-D03"]), true);
  assert.equal(evaluateResponse("M09-D03", [...CORRECT["M09-D03"], "driverMood"]), false);
});

// --- All six critical failures individually ---
const CRITICAL_CASES = [
  ["M09-D10", "M09-CF-02", "A", "C"],
  ["M09-D14", "M09-CF-03", "A", "C"],
  ["M09-D18", "M09-CF-01", "A", "C"],
  ["M09-D21", "M09-CF-05", "A", "C"],
  ["M09-D23", "M09-CF-04", "A", "C"],
  ["M09-D25", "M09-CF-06", "A", "C"],
];

for (const [id, cf, wrong1, wrong2] of CRITICAL_CASES) {
  test(`${cf}: triggers on second wrong attempt at ${id}, and only then`, () => {
    let s = createInitialState();
    s = submitAttempt(s, id, wrong1, 1000);
    assert.equal(s.criticalHistory[cf].triggered, false, "must not trigger on first wrong attempt");
    s = submitAttempt(s, id, wrong2, 2000);
    assert.equal(s.criticalHistory[cf].triggered, true);
    assert.equal(s.criticalHistory[cf].triggerDecisionId, id);
    assert.equal(s.criticalHistory[cf].triggerResponse, wrong1, "trigger record preserves the FIRST attempt response");
    assert.equal(s.criticalHistory[cf].triggerTimestamp, 1000);
    assert.equal(s.criticalHistory[cf].status, "REASSESSMENT_REQUIRED");
  });
}

test("same-screen correction (submitting the correct answer on the SAME decision after triggering) does not resolve the critical family", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D18", "A", 1000);
  s = submitAttempt(s, "M09-D18", "C", 2000);
  assert.equal(s.criticalHistory["M09-CF-01"].triggered, true);
  s = submitAttempt(s, "M09-D18", "B", 3000); // now correct, same screen
  assert.equal(s.decisions["M09-D18"].finalCorrect, true, "the decision itself is now marked correct");
  assert.equal(s.criticalHistory["M09-CF-01"].triggered, true, "but the critical trigger record remains");
  assert.equal(s.criticalHistory["M09-CF-01"].status, "REASSESSMENT_REQUIRED", "same-screen correction cannot resolve a critical family");
  assert.equal(s.criticalHistory["M09-CF-01"].triggerResponse, "A", "trigger evidence is unchanged");
});

test("submitCriticalReassessment: correct reassessment resolves the family without erasing trigger history", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D18", "A", 1000);
  s = submitAttempt(s, "M09-D18", "C", 2000);
  assert.equal(s.criticalHistory["M09-CF-01"].triggered, true);
  s = submitCriticalReassessment(s, "M09-CF-01", REASSESSMENTS["M09-CF-01"].correctKey, 5000);
  assert.equal(s.criticalHistory["M09-CF-01"].status, "RESOLVED_BY_REASSESSMENT");
  assert.equal(s.criticalHistory["M09-CF-01"].triggered, true, "resolved history is retained, never erased");
  assert.equal(s.criticalHistory["M09-CF-01"].triggerResponse, "A", "original trigger response still visible after resolution");
  assert.equal(s.criticalHistory["M09-CF-01"].reassessment.correct, true);
  assert.equal(s.criticalHistory["M09-CF-01"].reassessment.response, REASSESSMENTS["M09-CF-01"].correctKey);
});

test("submitCriticalReassessment: incorrect reassessment attempt is recorded but does not resolve", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D18", "A", 1000);
  s = submitAttempt(s, "M09-D18", "C", 2000);
  const wrongReassessmentAnswer = REASSESSMENTS["M09-CF-01"].choices.find(c => c.key !== REASSESSMENTS["M09-CF-01"].correctKey).key;
  s = submitCriticalReassessment(s, "M09-CF-01", wrongReassessmentAnswer, 5000);
  assert.equal(s.criticalHistory["M09-CF-01"].status, "REASSESSMENT_REQUIRED");
  assert.equal(s.criticalHistory["M09-CF-01"].reassessment.attempted, true);
  assert.equal(s.criticalHistory["M09-CF-01"].reassessment.correct, false);
});

test("getTriggeredUnresolvedFamilies reflects only triggered-and-unresolved families", () => {
  let s = createInitialState();
  assert.deepEqual(getTriggeredUnresolvedFamilies(s), []);
  s = submitAttempt(s, "M09-D10", "A", 1000);
  s = submitAttempt(s, "M09-D10", "C", 2000);
  assert.deepEqual(getTriggeredUnresolvedFamilies(s), ["M09-CF-02"]);
  s = submitCriticalReassessment(s, "M09-CF-02", REASSESSMENTS["M09-CF-02"].correctKey, 3000);
  assert.deepEqual(getTriggeredUnresolvedFamilies(s), []);
});

// --- First-attempt immutability ---
test("first attempt remains immutable across remediation on an ordinary decision", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D02", "A", 1000);
  s = submitAttempt(s, "M09-D02", "B", 2000);
  const r = s.decisions["M09-D02"];
  assert.equal(r.firstAttemptResponse, "A");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.finalResponse, "B");
  assert.equal(r.finalCorrect, true);
  assert.equal(r.remediationUsed, true);
});
test("ordinary wrong answer does not advance; correct answer does", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D02", "A", 1000);
  assert.equal(shouldAdvance(s, "M09-D02"), false);
  s = submitAttempt(s, "M09-D02", "B", 2000);
  assert.equal(shouldAdvance(s, "M09-D02"), true);
});
test("a triggered critical decision allows advancing the MAIN scenario despite being wrong (resolution happens via reassessment, not by blocking)", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D18", "A", 1000);
  s = submitAttempt(s, "M09-D18", "C", 2000);
  assert.equal(shouldAdvance(s, "M09-D18"), true);
});

// --- Completion blocking ---
test("completion is blocked (REASSESSMENT_REQUIRED) while a triggered critical family is unresolved, even with all 27 decisions eventually correct", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) {
    if (id === "M09-D18") {
      s = submitAttempt(s, id, "A", 1000);
      s = submitAttempt(s, id, "C", 2000);
      s = submitAttempt(s, id, CORRECT[id], 3000);
    } else {
      s = submitAttempt(s, id, CORRECT[id], 1000);
    }
  }
  assert.equal(computeSimulationStatus(s), "REASSESSMENT_REQUIRED");
  s = submitCriticalReassessment(s, "M09-CF-01", REASSESSMENTS["M09-CF-01"].correctKey, 9000);
  assert.equal(computeSimulationStatus(s), "COMPLETE");
});
test("raw score cannot override an unresolved critical failure", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) s = submitAttempt(s, id, CORRECT[id], 1000);
  assert.equal(computeFinalMasteryScore(s).correct, 27, "raw score is a perfect 27/27");
  s = submitAttempt(s, "M09-D10", "A", 2000);
  s = submitAttempt(s, "M09-D10", "C", 3000);
  s = submitAttempt(s, "M09-D10", CORRECT["M09-D10"], 4000);
  assert.equal(computeFinalMasteryScore(s).correct, 27, "raw score still perfect");
  assert.equal(computeSimulationStatus(s), "REASSESSMENT_REQUIRED", "but completion is still blocked by the unresolved critical family");
});

// --- Full mastery / completion record ---
test("full first-attempt mastery with zero critical triggers produces COMPLETE and a clean completion record", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) s = submitAttempt(s, id, CORRECT[id], 1000);
  assert.equal(computeSimulationStatus(s), "COMPLETE");
  assert.deepEqual(computeFirstAttemptScore(s), { correct: 27, total: 27 });
  assert.deepEqual(computeFinalMasteryScore(s), { correct: 27, total: 27 });
  assert.equal(computeRemediationCount(s), 0);
  const cfs = computeCriticalFailureStatus(s);
  for (const cf of Object.keys(CRITICAL_FAMILIES)) assert.equal(cfs[cf], "NOT_YET_REACHED");
  const record = computeCompletionRecord(s);
  assert.equal(record.finalStatus, "COMPLETE");
  assert.equal(record.instructorReviewRequired, false);
  assert.ok(record.competencyStatus["M09-C01"]);
});
test("completion record separates first-attempt, final mastery, competency, critical history, reassessment, and instructor state", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D25", "A", 1000);
  s = submitAttempt(s, "M09-D25", "C", 2000);
  const record = computeCompletionRecord(s);
  assert.ok("firstAttemptScore" in record);
  assert.ok("finalMasteryScore" in record);
  assert.ok("competencyStatus" in record);
  assert.ok("criticalHistory" in record);
  assert.ok("criticalFailureStatus" in record);
  assert.equal(record.instructorReviewRequired, true);
  assert.equal(record.criticalHistory["M09-CF-06"].triggerResponse, "A");
});

test("competency status reflects unresolved critical family as Needs Instructor Review even after the decision itself is answered correctly", () => {
  let s = createInitialState();
  s = submitAttempt(s, "M09-D14", "A", 1000);
  s = submitAttempt(s, "M09-D14", "C", 2000);
  s = submitAttempt(s, "M09-D14", CORRECT["M09-D14"], 3000);
  const status = computeCompetencyStatus(s);
  assert.equal(status["M09-C05"], "Needs Instructor Review");
  s = submitCriticalReassessment(s, "M09-CF-03", REASSESSMENTS["M09-CF-03"].correctKey, 4000);
  const status2 = computeCompetencyStatus(s);
  assert.notEqual(status2["M09-C05"], "Needs Instructor Review");
});

// --- Persistence ---
test("persistence rejects corrupt/foreign state and backfills missing fields", () => {
  assert.equal(normalizeLoadedState(null).simulationId, "SIM-009");
  assert.equal(normalizeLoadedState({ simulationId: "SIM-007", decisions: {} }).simulationId, "SIM-009");
  const p = normalizeLoadedState({ simulationId: "SIM-009", decisions: { "M09-D01": { finalCorrect: true } }, currentDecisionId: "BAD" });
  assert.equal(Object.keys(p.decisions).length, 27);
  assert.equal(Object.keys(p.criticalHistory).length, 6);
  assert.equal(p.currentDecisionId, "M09-D01");
});

// --- Progression ---
test("progression walks all 27 decisions in stage order", () => {
  let id = DECISION_ORDER[0], count = 0;
  while (id !== null) { id = getNextDecisionId(id); count += 1; }
  assert.equal(count, 27);
  assert.deepEqual(getProgress("M09-D27"), { current: 27, total: 27 });
  assert.equal(getStageForDecision("M09-D27").id, "M09-S12");
  assert.equal(getStageForDecision(DECISION_ORDER[0]).id, "M09-S1");
});

// --- Scenario continuity ---
test("scenario continuity: RC v2's rate deviation is a NEW problem, not a repeat of v1's original conflicts", () => {
  const v2 = ARTIFACTS.rcv2.lines.join(" ");
  assert.match(v2, /\$2,400/);
  assert.match(v2, /corrected/i);
});
test("scenario continuity: the obsolete document is explicitly a different load", () => {
  assert.match(ARTIFACTS.obsoleteDoc.lines.join(" "), /CFB-7710/);
  assert.match(ARTIFACTS.obsoleteDoc.lines.join(" "), /different, unrelated/i);
});
test("M08/M10 boundary is explicit in the artifacts", () => {
  assert.match(ARTIFACTS.driverEquipment.lines.join(" "), /M11, not M09/);
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
