// Run with: node tests/logic.test.js
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
  computeCriticalFailureStatus,
  getStageForDecision,
  getProgress,
  normalizeLoadedState,
} from "../logic.js";
import { DECISION_ORDER, DECISIONS, STAGES, ARTIFACTS, COMPETENCY_LABELS } from "../content.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

// ============================================================
// STRUCTURE: exactly 10 stages, stable decision IDs, progressive release
// ============================================================
test("content: exactly 10 stages", () => {
  assert.equal(STAGES.length, 10);
});
test("content: 33 stable SIM07 decision IDs, all unique", () => {
  assert.equal(DECISION_ORDER.length, 33);
  assert.equal(new Set(DECISION_ORDER).size, 33);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM07-D\d+$/);
});
test("content: every stage decision resolves and belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id], `${id} missing from DECISIONS`);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});
test("progression: walks all 33 decisions in stage order, no repeats/skips", () => {
  let id = DECISION_ORDER[0], count = 0;
  const seen = new Set();
  while (id !== null) { assert.ok(!seen.has(id)); seen.add(id); id = getNextDecisionId(id); count += 1; }
  assert.equal(count, 33);
  assert.deepEqual(getProgress("SIM07-D32"), { current: 33, total: 33 });
  assert.equal(getStageForDecision(DECISION_ORDER[0]).id, "SIM07-S1");
  assert.equal(getStageForDecision("SIM07-D32").id, "SIM07-S10");
});
test("progressive evidence release: Stage 3 mileage artifact is not referenced by any Stage 1-2 decision", () => {
  const earlyIds = [...STAGES[0].decisionIds, ...STAGES[1].decisionIds];
  for (const id of earlyIds) assert.notEqual(DECISIONS[id].artifact, "mileageData");
});

// ============================================================
// ALL 18 COMPETENCY FAMILIES + 5 CRITICAL-FAILURE FAMILIES COVERED
// ============================================================
test("content: all 18 competencies (C01-C18) covered by at least one decision", () => {
  const used = new Set();
  for (const id of DECISION_ORDER) for (const c of DECISIONS[id].competencies) used.add(c);
  for (let n = 1; n <= 18; n++) {
    const id = `C${String(n).padStart(2, "0")}`;
    assert.ok(used.has(id), `${id} not covered`);
  }
  assert.equal(used.size, 18);
});
test("content: COMPETENCY_LABELS has exactly 18 entries", () => {
  assert.equal(Object.keys(COMPETENCY_LABELS).length, 18);
});
test("content: all five critical-failure families (CF-01 through CF-05) present", () => {
  const families = new Set(DECISION_ORDER.map(id => DECISIONS[id].criticalFailureFamily).filter(Boolean));
  assert.deepEqual([...families].sort(), ["CF-01", "CF-02", "CF-03", "CF-04", "CF-05"]);
});
test("content: exactly 6 decisions carry critical-failure escalation (CF-03 tested twice, spaced practice)", () => {
  const critIds = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(critIds, ["SIM07-D02", "SIM07-D04", "SIM07-D09", "SIM07-D16", "SIM07-D17", "SIM07-D27", "SIM07-D30"]);
  assert.equal(critIds.length, 7);
  const cf03 = critIds.filter(id => DECISIONS[id].criticalFailureFamily === "CF-03");
  assert.deepEqual(cf03, ["SIM07-D04", "SIM07-D09", "SIM07-D27"]);
});

// ============================================================
// NUMERIC CALCULATIONS — every figure independently verified
// ============================================================
test("C02: total trip miles — Alpha 790, Bravo 580, Charlie 680", () => {
  assert.equal(evaluateResponse("SIM07-D05", 790), true);
  assert.equal(evaluateResponse("SIM07-D05", 789), false);
  assert.equal(evaluateResponse("SIM07-D06", 580), true);
  assert.equal(evaluateResponse("SIM07-D07", 680), true);
});
test("C03: Charlie loaded RPM = $2,010 / 580 ≈ $3.47", () => {
  assert.equal(evaluateResponse("SIM07-D08", 3.47), true);
  assert.equal(evaluateResponse("SIM07-D08", 3.00), false);
});
test("C04/C05/C14: effective-RPM ranking reverses the loaded-RPM ranking (Bravo>Charlie>Alpha, not Alpha>Charlie>Bravo)", () => {
  const correct = { bravo: "first", charlie: "second", alpha: "third" };
  assert.equal(evaluateResponse("SIM07-D09", correct), true);
  const loadedRpmOrder = { alpha: "first", charlie: "second", bravo: "third" };
  assert.equal(evaluateResponse("SIM07-D09", loadedRpmOrder), false, "ranking by loaded RPM instead of effective RPM must fail");
});
test("C06: fuel gallons and cost — Alpha 790/6.6≈119.70gal, ×$3.95≈$472.80; Bravo fuel≈$347.12", () => {
  assert.equal(evaluateResponse("SIM07-D10", 119.70), true);
  assert.equal(evaluateResponse("SIM07-D11", 472.80), true);
  assert.equal(evaluateResponse("SIM07-D11", 450.00), false, "a materially wrong figure outside the $1 tolerance must fail");
  assert.equal(evaluateResponse("SIM07-D12", 347.12), true);
});
test("C07: Bravo's $45 toll must be included as a documented trip-specific cost", () => {
  assert.equal(evaluateResponse("SIM07-D13", "B"), true);
  assert.equal(evaluateResponse("SIM07-D13", "A"), false);
});
test("C08: contribution margin — Alpha $1,693.20, Bravo $1,374.88 at 5% dispatcher fee", () => {
  assert.equal(evaluateResponse("SIM07-D14", 1693.20), true);
  assert.equal(evaluateResponse("SIM07-D15", 1374.88), true);
});
test("C11: quick-pay fee $60.30 and resulting Charlie margin $1,422.23", () => {
  assert.equal(evaluateResponse("SIM07-D20", 60.30), true);
  assert.equal(evaluateResponse("SIM07-D21", 1422.23), true);
});
test("C13: recalculation at corrected 7% dispatcher fee — Alpha $1,647.60, Bravo $1,337.68", () => {
  assert.equal(evaluateResponse("SIM07-D25", 1647.60), true);
  assert.equal(evaluateResponse("SIM07-D26", 1337.68), true);
  assert.equal(evaluateResponse("SIM07-D25", 1693.20), false, "must not anchor on the original 5%-fee figure");
});
test("C16: counter threshold — Alpha needs $2,370 total revenue for $3.00 effective RPM at 790 miles", () => {
  assert.equal(evaluateResponse("SIM07-D28", 2370.00), true);
  assert.equal(evaluateResponse("SIM07-D28", 1800.00), false, "1800 is the loaded-mile-blindness error (3.00 x 600 loaded miles instead of 790 total miles)");
});
test("numeric input validation: non-numeric and NaN responses are rejected", () => {
  assert.equal(evaluateResponse("SIM07-D05", "790"), false, "string is rejected even if numerically equal — must be type number");
  assert.equal(evaluateResponse("SIM07-D05", NaN), false);
  assert.equal(evaluateResponse("SIM07-D05", null), false);
  assert.equal(evaluateResponse("SIM07-D05", undefined), false);
});

// ============================================================
// CRITICAL FAILURE FAMILIES — each behavior explicitly tested
// ============================================================
test("CF-04 (D02): fabricating Bravo's missing destination deadhead as zero fails; classifying as unknown-until-verified passes", () => {
  assert.equal(evaluateResponse("SIM07-D02", "B"), true);
  assert.equal(evaluateResponse("SIM07-D02", "A"), false, "entering 0 to keep the calculation moving is fabricated input");
  assert.equal(evaluateResponse("SIM07-D02", "C"), false, "assuming a typical 25mi figure is also fabrication");
});
test("CF-03 (D04): recommending from loaded-RPM ranking alone fails before effective RPM is calculated", () => {
  assert.equal(evaluateResponse("SIM07-D04", "B"), true);
  assert.equal(evaluateResponse("SIM07-D04", "A"), false, "declaring Alpha the strongest option from loaded RPM alone is loaded-mile blindness");
});
test("CF-02 (D16): labeling contribution margin as guaranteed net profit fails", () => {
  assert.equal(evaluateResponse("SIM07-D16", "B"), true);
  assert.equal(evaluateResponse("SIM07-D16", "A"), false);
  assert.equal(evaluateResponse("SIM07-D16", "D"), false, "calling it accounting profit is also mislabeling");
});
test("CF-01 (D17): adding Charlie's unearned/undocumented detention to current revenue fails", () => {
  assert.equal(evaluateResponse("SIM07-D17", "B"), true);
  assert.equal(evaluateResponse("SIM07-D17", "A"), false);
  assert.equal(evaluateResponse("SIM07-D17", "C"), false, "adding even a conservative half-estimate is still unsupported revenue");
});
test("CF-03 (D27, final synthesis): classifying by loaded RPM instead of effective RPM against carrier thresholds fails", () => {
  const correct = { alpha: "counter", bravo: "take", charlie: "counter" };
  assert.equal(evaluateResponse("SIM07-D27", correct), true);
  const loadedRpmBased = { alpha: "take", bravo: "counter", charlie: "counter" };
  assert.equal(evaluateResponse("SIM07-D27", loadedRpmBased), false, "this is what loaded-RPM-based classification would produce, and it's backwards");
});
test("CF-05 (D30): dispatcher declaring the carrier's final decision fails; presenting analysis and preserving authority passes", () => {
  assert.equal(evaluateResponse("SIM07-D30", "B"), true);
  assert.equal(evaluateResponse("SIM07-D30", "A"), false, "'I've decided' overrides carrier authority");
  assert.equal(evaluateResponse("SIM07-D30", "D"), false, "booking first and notifying after also overrides carrier authority");
});

// ============================================================
// MISSING-INPUT HANDLING / HOLD FOR DATA
// ============================================================
test("C15: Load Delta with missing loaded miles/deadhead correctly requires HOLD FOR DATA, not TAKE/DECLINE/COUNTER", () => {
  assert.equal(evaluateResponse("SIM07-D33", "C"), true);
  assert.equal(evaluateResponse("SIM07-D33", "A"), false);
  assert.equal(evaluateResponse("SIM07-D33", "B"), false);
  assert.equal(evaluateResponse("SIM07-D33", "D"), false);
});
test("C01: Stage-1 carrier profile classification distinguishes usable/unknown/irrelevant inputs", () => {
  const correct = { truckMPG: "usable", dispatcherFee: "usable", reportedBreakEven: "usable", historicalDetentionRate: "unknown", trailerType: "irrelevant" };
  assert.equal(evaluateResponse("SIM07-D01", correct), true);
  const wrong = { ...correct, historicalDetentionRate: "irrelevant" };
  assert.equal(evaluateResponse("SIM07-D01", wrong), false, "an unreported figure must not be reclassified as merely irrelevant");
});

// ============================================================
// ACCESSORIAL TREATMENT, CASH-FLOW VS PROFITABILITY, POSITIONING
// ============================================================
test("C10: accessorial verification prerequisites (D18) exclude estimating an average from past loads", () => {
  const correct = ["deliveryAndRecords", "checkTerms", "checkCommissionBasis"];
  assert.equal(evaluateResponse("SIM07-D18", correct), true);
  assert.equal(evaluateResponse("SIM07-D18", [...correct, "estimateAverage"]), false);
});
test("C11: quick-pay does not increase profitability (D19)", () => {
  assert.equal(evaluateResponse("SIM07-D19", "B"), true);
  assert.equal(evaluateResponse("SIM07-D19", "A"), false);
});
test("C12: positioning classification and non-guarantee reasoning", () => {
  const correct = { alpha: "poor", bravo: "neutral", charlie: "strong" };
  assert.equal(evaluateResponse("SIM07-D22", correct), true);
  assert.equal(evaluateResponse("SIM07-D23", "B"), true);
  assert.equal(evaluateResponse("SIM07-D23", "A"), false, "positioning is never a guarantee of future revenue");
});

// ============================================================
// TAKE / COUNTER / HOLD FOR DATA / DECLINE + FINAL BRIEFING
// ============================================================
test("C17: final decision-record required elements exclude personal opinion and dispatcher-made final decisions", () => {
  const correct = ["calculations", "assumptions", "unknowns", "excludedCosts", "verifiedVsUnverified", "positioning", "recommendationAndReasoning", "carrierAuthorityStatement"];
  assert.equal(evaluateResponse("SIM07-D29", correct), true);
  assert.equal(evaluateResponse("SIM07-D29", [...correct, "personalOpinion"]), false);
  assert.equal(evaluateResponse("SIM07-D29", [...correct, "finalDecisionMade"]), false);
});
test("C09/C17 (D31): final briefing must not relabel contribution margin as profit/net/take-home", () => {
  assert.equal(evaluateResponse("SIM07-D31", "B"), true);
  assert.equal(evaluateResponse("SIM07-D31", "A"), false);
  assert.equal(evaluateResponse("SIM07-D31", "C"), false);
  assert.equal(evaluateResponse("SIM07-D31", "D"), false);
});
test("final synthesis (D32): correctly identifies true statements without repeating CF-02/CF-05 errors", () => {
  const correct = ["noDecisionYet", "detentionUnearned", "positioningIsNextLoad"];
  assert.equal(evaluateResponse("SIM07-D32", correct), true);
  assert.equal(evaluateResponse("SIM07-D32", [...correct, "allMarginsAreProfit"]), false);
  assert.equal(evaluateResponse("SIM07-D32", [...correct, "dispatcherCanFinalize"]), false);
});

// ============================================================
// FIRST-ATTEMPT PRESERVATION / CRITICAL PERSISTENCE / REMEDIATION
// ============================================================
test("first attempt is preserved immutably after remediation on an ordinary decision", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D08", 3.00, 1000);
  s = submitAttempt(s, "SIM07-D08", 3.47, 2000);
  const r = s.decisions["SIM07-D08"];
  assert.equal(r.firstAttemptResponse, 3.00);
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.finalResponse, 3.47);
  assert.equal(r.finalCorrect, true);
  assert.equal(r.remediationUsed, true);
});
test("critical decisions escalate to instructor review after two wrong attempts (all six)", () => {
  const cases = [
    ["SIM07-D02", "A", "C"],
    ["SIM07-D04", "A", "C"],
    ["SIM07-D09", { alpha: "first", bravo: "second", charlie: "third" }, { alpha: "second", bravo: "third", charlie: "first" }],
    ["SIM07-D16", "A", "C"],
    ["SIM07-D17", "A", "C"],
    ["SIM07-D27", { alpha: "take", bravo: "counter", charlie: "take" }, { alpha: "decline_hold", bravo: "decline_hold", charlie: "take" }],
    ["SIM07-D30", "A", "C"],
  ];
  for (const [id, wrong1, wrong2] of cases) {
    let s = createInitialState();
    s = submitAttempt(s, id, wrong1, 1000);
    assert.equal(s.decisions[id].instructorReviewRequired, false, `${id} should not escalate after 1 wrong attempt`);
    s = submitAttempt(s, id, wrong2, 2000);
    assert.equal(s.decisions[id].instructorReviewRequired, true, `${id} should escalate after 2 wrong attempts`);
    assert.equal(shouldAdvance(s, id), true);
  }
});
test("same-screen correction (submitting the same wrong answer again) does not clear critical history and still counts as an attempt", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D17", "A", 1000);
  s = submitAttempt(s, "SIM07-D17", "A", 2000); // same wrong answer resubmitted
  assert.equal(s.decisions["SIM07-D17"].instructorReviewRequired, true, "resubmitting the same wrong answer must still count toward escalation, not reset it");
  assert.equal(s.decisions["SIM07-D17"].firstAttemptResponse, "A");
});
test("critical escalation clears only on a later correct response, and first-attempt evidence remains visible after clearing", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D16", "A", 1000);
  s = submitAttempt(s, "SIM07-D16", "D", 2000);
  assert.equal(s.decisions["SIM07-D16"].instructorReviewRequired, true);
  s = submitAttempt(s, "SIM07-D16", "B", 3000);
  const r = s.decisions["SIM07-D16"];
  assert.equal(r.instructorReviewRequired, false);
  assert.equal(r.firstAttemptResponse, "A", "original CF-02 first attempt must remain visible even after correction");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.remediationUsed, true);
});
test("remediation count tallies every retried decision", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D08", 3.00, 1000);
  s = submitAttempt(s, "SIM07-D08", 3.47, 2000);
  assert.equal(computeRemediationCount(s), 1);
});
test("ordinary wrong answer (non-critical) does not advance the simulation", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D08", 3.00, 1000);
  assert.equal(shouldAdvance(s, "SIM07-D08"), false);
});

// ============================================================
// COMPLETION / COMPETENCY / CRITICAL-FAILURE STATUS CALCULATION
// ============================================================
const CORRECT = {
  "SIM07-D01": { truckMPG: "usable", dispatcherFee: "usable", reportedBreakEven: "usable", historicalDetentionRate: "unknown", trailerType: "irrelevant" },
  "SIM07-D02": "B",
  "SIM07-D03": ["totalMilesNeeded", "deadheadInfoNeeded"],
  "SIM07-D04": "B",
  "SIM07-D33": "C",
  "SIM07-D05": 790, "SIM07-D06": 580, "SIM07-D07": 680,
  "SIM07-D08": 3.47,
  "SIM07-D09": { bravo: "first", charlie: "second", alpha: "third" },
  "SIM07-D10": 119.70, "SIM07-D11": 472.80, "SIM07-D12": 347.12,
  "SIM07-D13": "B",
  "SIM07-D14": 1693.20, "SIM07-D15": 1374.88,
  "SIM07-D16": "B",
  "SIM07-D17": "B",
  "SIM07-D18": ["deliveryAndRecords", "checkTerms", "checkCommissionBasis"],
  "SIM07-D19": "B", "SIM07-D20": 60.30, "SIM07-D21": 1422.23,
  "SIM07-D22": { alpha: "poor", bravo: "neutral", charlie: "strong" },
  "SIM07-D23": "B",
  "SIM07-D24": "B", "SIM07-D25": 1647.60, "SIM07-D26": 1337.68,
  "SIM07-D27": { alpha: "counter", bravo: "take", charlie: "counter" },
  "SIM07-D28": 2370.00,
  "SIM07-D29": ["calculations", "assumptions", "unknowns", "excludedCosts", "verifiedVsUnverified", "positioning", "recommendationAndReasoning", "carrierAuthorityStatement"],
  "SIM07-D30": "B",
  "SIM07-D31": "B",
  "SIM07-D32": ["noDecisionYet", "detentionUnearned", "positioningIsNextLoad"],
};
test("full mastery on first attempt produces COMPLETE 33/33 with no critical failures observed", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) s = submitAttempt(s, id, CORRECT[id], 1000);
  assert.equal(computeSimulationStatus(s), "COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s), { correct: 33, total: 33 });
  assert.deepEqual(computeFirstAttemptScore(s), { correct: 33, total: 33 });
  const cfs = computeCriticalFailureStatus(s);
  for (const cf of ["CF-01", "CF-02", "CF-03", "CF-04", "CF-05"]) assert.equal(cfs[cf], "NO_FAILURE_OBSERVED");
});
test("competency status distinguishes in-progress / mastered / mastered-after-remediation / needs-review", () => {
  let s = createInitialState();
  assert.equal(computeCompetencyStatus(s)["C02"], "In Progress");
  s = submitAttempt(s, "SIM07-D08", 3.00, 1000);
  s = submitAttempt(s, "SIM07-D08", 3.47, 2000);
  assert.equal(computeCompetencyStatus(s)["C03"], "Mastered After Remediation");
  let t = createInitialState();
  t = submitAttempt(t, "SIM07-D17", "A", 1000);
  t = submitAttempt(t, "SIM07-D17", "C", 2000);
  assert.equal(computeCompetencyStatus(t)["C10"], "Needs Instructor Review");
});
test("critical-failure status reflects trigger-then-remediate vs untouched vs escalated", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D17", "A", 1000);
  s = submitAttempt(s, "SIM07-D17", "B", 2000);
  const cfs = computeCriticalFailureStatus(s);
  assert.equal(cfs["CF-01"], "TRIGGERED_THEN_REMEDIATED");
  assert.equal(cfs["CF-02"], "NOT_YET_REACHED");
});
test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when any critical decision escalates", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM07-D30", "A", 1000);
  s = submitAttempt(s, "SIM07-D30", "C", 2000);
  assert.equal(computeSimulationStatus(s), "INSTRUCTOR_REVIEW_REQUIRED");
});

// ============================================================
// PERSISTENCE
// ============================================================
test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId, "SIM-007");
  assert.equal(normalizeLoadedState({ simulationId: "SIM-006", decisions: {} }).simulationId, "SIM-007");
});
test("persistence backfills partial state and repairs an invalid current-decision pointer", () => {
  const p = normalizeLoadedState({ simulationId: "SIM-007", decisions: { "SIM07-D05": { finalCorrect: true } }, currentDecisionId: "BAD" });
  assert.equal(Object.keys(p.decisions).length, 33);
  assert.equal(p.currentDecisionId, "SIM07-D01");
  assert.equal(p.decisions["SIM07-D05"].finalCorrect, true);
});

// ============================================================
// SCENARIO CONTINUITY / SOURCE-LABELING CHECKS
// ============================================================
test("scenario continuity: fuel price and MPG are consistent between Stage 1 profile and Stage 4 fuel artifact", () => {
  assert.match(ARTIFACTS.carrierProfile.lines.join(" "), /6\.6/);
  assert.match(ARTIFACTS.fuelData.lines.join(" "), /6\.6/);
  assert.match(ARTIFACTS.fuelData.lines.join(" "), /3\.95/);
});
test("scenario continuity: Bravo's destination deadhead is explicitly confirmed (not silently assumed) between Stage 1 and Stage 3", () => {
  assert.match(ARTIFACTS.bravoUnknown.lines.join(" "), /not yet been provided/i);
  assert.match(ARTIFACTS.mileageData.lines.join(" "), /confirmed by dispatch — verified, not assumed/i);
});
test("source labeling: all fictional dollar/percentage inputs are explicitly labeled as such somewhere in the artifacts", () => {
  const allText = Object.values(ARTIFACTS).flatMap(a => a.lines).join(" ");
  assert.match(allText, /FICTIONAL INSTRUCTIONAL/);
});
test("scenario continuity: final briefing reflects the corrected (7%) margins, not the original (5%) ones", () => {
  const text = ARTIFACTS.finalBriefing.lines.join(" ");
  assert.match(text, /1,647\.60/);
  assert.match(text, /1,337\.68/);
  assert.doesNotMatch(text, /1,693\.20/, "the superseded 5%-fee Alpha margin should not appear as if still current");
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
