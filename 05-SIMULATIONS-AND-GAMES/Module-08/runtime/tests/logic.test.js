// Run with: node tests/logic.test.js
// Curriculum-alignment repair pass 2026-09-04 — rewritten against the six
// actual Module 08 Student Manual parts, not just the master-branch map.
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
import { DECISION_ORDER, DECISIONS, STAGES, ARTIFACTS, COMPETENCY_LABELS } from "../content.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

// --- Stage/decision progression ---
test("content: 15 stages in locked order", () => {
  assert.equal(STAGES.length, 15);
});
test("content: 19 stable SIM08 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 19);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM08-D\d\d$/);
});
test("content: every stage decision resolves and belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id]);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});
test("SIM-008 content imports no sibling simulation IDs", () => {
  for (const id of DECISION_ORDER) assert.doesNotMatch(id, /^SIM0[1-7]-/);
});

// --- M08-C01 through M08-C15 coverage ---
test("content: all 15 M08 competencies (C01-C15) are used by at least one decision", () => {
  const used = new Set(DECISION_ORDER.map(id => DECISIONS[id].competency));
  for (let n = 1; n <= 15; n++) {
    const id = `M08-C${String(n).padStart(2, "0")}`;
    assert.ok(used.has(id), `${id} not covered by any decision`);
  }
  assert.equal(used.size, 15);
});
test("content: COMPETENCY_LABELS has exactly the 15 M08 competencies", () => {
  assert.equal(Object.keys(COMPETENCY_LABELS).length, 15);
});
test("content: at least two decisions each for C01, C05, C10 (preparation, discovery, terms depth)", () => {
  const byComp = {};
  for (const id of DECISION_ORDER) (byComp[DECISIONS[id].competency] ??= []).push(id);
  assert.ok(byComp["M08-C05"].length >= 2, "discovery (C05) must cover both recognizing the unverified claim and choosing a purposeful question");
  assert.ok(byComp["M08-C10"].length >= 2, "agreement-specific terms (C10) must cover both the four-part trigger/amount/evidence/process test and the vague-statement test");
});

// --- Preparation architecture (Part 02 strengthening) ---
test("SIM08-D01: preparation position excludes unrelated/assumed facts, not just names known ones", () => {
  assert.equal(evaluateResponse("SIM08-D01", ["equipment", "target", "floor", "askingRate"]), true);
  assert.equal(evaluateResponse("SIM08-D01", ["equipment", "target", "floor", "askingRate", "unrelatedLane"]), false, "an unrelated old lane rate must not be treated as part of this position");
  assert.equal(evaluateResponse("SIM08-D01", ["equipment", "target", "floor", "askingRate", "assumedWindow"]), false, "an assumed pattern is not a verified fact");
});

// --- Target/floor/walk-away interpretation ---
test("SIM08-D02: correctly distinguishes asking rate from target/floor/walk-away", () => {
  assert.equal(evaluateResponse("SIM08-D02", "C"), true);
  assert.equal(evaluateResponse("SIM08-D02", "A"), false);
});
test("SIM08-D12: reaching floor exactly is within authority, distinct from below-floor", () => {
  assert.equal(evaluateResponse("SIM08-D12", "A"), true);
});

// --- Missing-information VERIFY behavior ---
test("SIM08-D03: VERIFY rather than assume missing material fact", () => {
  assert.equal(evaluateResponse("SIM08-D03", "C"), true);
  assert.equal(evaluateResponse("SIM08-D03", "A"), false);
  assert.equal(evaluateResponse("SIM08-D03", "B"), false);
});

// --- Truthful vs fabricated leverage ---
test("SIM08-D08: rejects fabricated leverage in all forms including hedged version", () => {
  assert.equal(evaluateResponse("SIM08-D08", "B"), true);
  assert.equal(evaluateResponse("SIM08-D08", "A"), false);
  assert.equal(evaluateResponse("SIM08-D08", "D"), false, "hedged/vague fabrication is still wrong");
});

// --- Professional opening/role identification ---
test("SIM08-D04: accurate equipment representation, not a workaround promise", () => {
  assert.equal(evaluateResponse("SIM08-D04", "B"), true);
  assert.equal(evaluateResponse("SIM08-D04", "A"), false);
});

// --- Purposeful broker discovery (strengthened C05/C06) ---
test("SIM08-D05: recognizes broker statement as unverified, not established fact, without over/under-reacting", () => {
  const correct = ["unverified", "constraintPossible", "concedeWrong", "accuseWrong"];
  assert.equal(evaluateResponse("SIM08-D05", correct), true);
  assert.equal(evaluateResponse("SIM08-D05", [...correct, "claimIsFact"]), false, "the broker's statement must not be treated as an independently established fact");
  assert.equal(evaluateResponse("SIM08-D05", ["unverified"]), false, "partial recognition is not sufficient");
});
test("SIM08-D06: must actually choose a purposeful discovery question, not just recognize the wrong behaviors", () => {
  assert.equal(evaluateResponse("SIM08-D06", "A"), true);
  assert.equal(evaluateResponse("SIM08-D06", "B"), false, "accusing the broker of lying is inappropriate");
  assert.equal(evaluateResponse("SIM08-D06", "C"), false, "conceding is inappropriate self-negotiation, not a question");
  assert.equal(evaluateResponse("SIM08-D06", "D"), false, "this decision specifically requires asking a question");
});

// --- Broker statement vs. independently established fact ---
test("distinguishing broker statement from established fact spans D05 (recognition) and D11 (classification)", () => {
  assert.equal(evaluateResponse("SIM08-D05", ["unverified", "constraintPossible", "concedeWrong", "accuseWrong"]), true);
  assert.equal(evaluateResponse("SIM08-D11", "B"), true, "a broker's general assurance stays unresolved, it is not an independently confirmed term");
});

// --- Evidence-supported counter logic (repaired: no forced disclosure of internals) ---
test("SIM08-D07: evidence-supported counter accepts both a grounded reason and a concise no-reason counter", () => {
  assert.equal(evaluateResponse("SIM08-D07", ["grounded", "concise"]), true);
});
test("SIM08-D07: rejects unsupported/random counters", () => {
  assert.equal(evaluateResponse("SIM08-D07", ["grounded", "concise", "random"]), false);
});
test("SIM08-D07: rejects invented market claims", () => {
  assert.equal(evaluateResponse("SIM08-D07", ["grounded", "concise", "inventedMarket"]), false);
});
test("SIM08-D07: does not require disclosing internal cost components (rejects the over-explained option as necessary)", () => {
  assert.equal(evaluateResponse("SIM08-D07", ["grounded", "concise", "overexplained"]), false, "over-explanation is not required and should not be selected as necessary");
  assert.equal(evaluateResponse("SIM08-D07", ["concise"]), false, "a partial-but-valid subset is still not the full correct set — both acceptable styles must be recognized");
});

// --- Conditional trades vs uncontrolled concessions ---
test("SIM08-D09: conditional trade preferred over uncontrolled below-floor concession", () => {
  assert.equal(evaluateResponse("SIM08-D09", "B"), true);
  assert.equal(evaluateResponse("SIM08-D09", "A"), false);
});

// --- TRIGGER / AMOUNT / EVIDENCE / PROCESS term control (repaired D09->D10) ---
test("SIM08-D10: requires all four of trigger, amount/method, evidence, and process", () => {
  const all4 = ["trigger", "amount", "evidence", "process"];
  assert.equal(evaluateResponse("SIM08-D10", all4), true);
  assert.equal(evaluateResponse("SIM08-D10", ["trigger", "amount", "evidence"]), false, "three of four is not sufficient — the module must meaningfully evaluate all four");
  assert.equal(evaluateResponse("SIM08-D10", [...all4, "universalRate"]), false, "there is no universal Academy detention rate");
  assert.equal(evaluateResponse("SIM08-D10", [...all4, "goodFaith"]), false, "a general assurance does not substitute for the four specific elements");
});
test("SIM08-D11: vague general assurance is not a commitment", () => {
  assert.equal(evaluateResponse("SIM08-D11", "B"), true);
  assert.equal(evaluateResponse("SIM08-D11", "A"), false);
});

// --- Material fact change ---
test("SIM08-D13: material fact change requires re-evaluating prior position", () => {
  assert.equal(evaluateResponse("SIM08-D13", "B"), true);
  assert.equal(evaluateResponse("SIM08-D13", "A"), false);
});

// --- Supplied authority boundary ---
test("SIM08-D15: below-floor offer requires decline/escalate regardless of gap size", () => {
  assert.equal(evaluateResponse("SIM08-D15", "B"), true);
  assert.equal(evaluateResponse("SIM08-D15", "A"), false);
});

// --- Scenario continuity (repaired discontinuity: $2,300 -> $2,275 -> $2,300) ---
test("scenario continuity: closeout artifact traces the $2,275-decline to $2,300-reauthorization event chain", () => {
  const lines = ARTIFACTS.closeoutFile.lines.join(" ");
  assert.match(lines, /2,275/, "the closeout record must reference the declined $2,275 offer");
  assert.match(lines, /escalat/i, "the closeout record must reference the escalation that followed the decline");
  assert.match(lines, /2,300/, "the closeout record must reference the reauthorized $2,300 floor");
  assert.doesNotMatch(lines, /2,300.*2,275.*2,300/, "the rate figures must not appear as an unexplained back-and-forth with no event trail");
});
test("scenario continuity: authority-boundary decision precedes closeout in decision order", () => {
  const idxAuthority = DECISION_ORDER.indexOf("SIM08-D15");
  const idxCloseout = DECISION_ORDER.indexOf("SIM08-D16");
  assert.ok(idxAuthority < idxCloseout);
});

// --- Three-bucket closeout (repaired: categorize type, not a single AGREED-only multiselect) ---
test("SIM08-D16: is a categorize-type decision distinguishing all three closeout buckets", () => {
  assert.equal(DECISIONS["SIM08-D16"].type, "categorize");
  const bucketKeys = DECISIONS["SIM08-D16"].buckets.map(b => b.key).sort();
  assert.deepEqual(bucketKeys, ["agreed", "notEstablished", "unresolved"]);
});
test("SIM08-D16: only the fully correct three-way classification passes", () => {
  const correct = { rate: "agreed", appointment: "agreed", detention: "unresolved", dropHook: "notEstablished" };
  assert.equal(evaluateResponse("SIM08-D16", correct), true);
});
test("SIM08-D16: misclassifying unresolved detention as agreed fails (the core critical-failure pattern)", () => {
  const wrong = { rate: "agreed", appointment: "agreed", detention: "agreed", dropHook: "notEstablished" };
  assert.equal(evaluateResponse("SIM08-D16", wrong), false);
});
test("SIM08-D16: misclassifying not-established drop-and-hook as agreed fails", () => {
  const wrong = { rate: "agreed", appointment: "agreed", detention: "unresolved", dropHook: "agreed" };
  assert.equal(evaluateResponse("SIM08-D16", wrong), false);
});
test("SIM08-D16: collapsing unresolved and not-established into the same bucket still fails (buckets must be distinguished, not merged)", () => {
  const merged = { rate: "agreed", appointment: "agreed", detention: "unresolved", dropHook: "unresolved" };
  assert.equal(evaluateResponse("SIM08-D16", merged), false);
});
test("SIM08-D16: identifying agreed items alone (partial/incomplete map) does not pass — full three-bucket accuracy is required", () => {
  assert.equal(evaluateResponse("SIM08-D16", { rate: "agreed", appointment: "agreed" }), false);
});

// --- Documentation / accessorial-language refinement (repaired: verbal != Module 09 review) ---
test("SIM08-D17: documentation must include agreed/unresolved/not-established/next-action, not a cleaner omission", () => {
  assert.equal(evaluateResponse("SIM08-D17", ["agreed", "unresolved", "notEstablished", "nextAction"]), true);
  assert.equal(evaluateResponse("SIM08-D17", ["agreed", "unresolved", "notEstablished", "nextAction", "invented"]), false);
});
test("SIM08-D17: a verbal statement is not equivalent to completed Module 09 document review", () => {
  assert.equal(evaluateResponse("SIM08-D17", ["agreed", "unresolved", "notEstablished", "nextAction", "invented2"]), false);
});

// --- Agreement-in-principle vs booked-state boundary / Module 09 handoff ---
test("SIM08-D18: verbal agreement is not the same as completed booking", () => {
  assert.equal(evaluateResponse("SIM08-D18", "B"), true);
  assert.equal(evaluateResponse("SIM08-D18", "A"), false, "premature booking claim is a critical failure");
});

// --- Professional decline ---
test("SIM08-D19: professional decline when a supplied requirement cannot be met", () => {
  assert.equal(evaluateResponse("SIM08-D19", "B"), true);
  assert.equal(evaluateResponse("SIM08-D19", "A"), false);
});

// --- All six critical-failure families ---
// Six named failure families exist on the master branch: (1) unauthorized below-floor
// acceptance [D15], (2) fabricated leverage [D08], (3) material misrepresentation [D04],
// (4) unauthorized carrier commitment [D10, inventing a specific detention figure],
// (5) treating an unresolved material term as agreed [D16, categorize type], (6)
// representing agreement-in-principle as completed booking [D18]. Five are attempt-based
// escalation on choice/multiselect decisions; the sixth (false agreement state, D16) is a
// categorize-type decision scored on first-pass full-map correctness, since selecting any
// wrong bucket assignment is itself the complete failure signal for that decision type --
// there's no partial-credit path where waiting for a second wrong attempt adds diagnostic
// value over the three-way classification already requiring full accuracy.
test("critical decisions map to five of the six master-branch failure families via attempt-based escalation", () => {
  const ids = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(ids, ["SIM08-D04", "SIM08-D08", "SIM08-D10", "SIM08-D15", "SIM08-D18"]);
  assert.equal(ids.length, 5, "five decisions carry attempt-based escalation; the sixth (false agreement state) is D16, scored via full-map correctness on the first pass");
});
test("the sixth critical-failure family (D16) is preserved as a categorize decision, not lost in the repair", () => {
  assert.equal(DECISIONS["SIM08-D16"].type, "categorize");
  assert.equal(DECISIONS["SIM08-D16"].competency, "M08-C13");
});

for (const [id, wrong1, wrong2] of [
  ["SIM08-D04", "A", "C"],
  ["SIM08-D08", "A", "C"],
  ["SIM08-D10", ["universalRate"], ["goodFaith"]],
  ["SIM08-D15", "A", "C"],
  ["SIM08-D18", "A", "C"],
]) {
  test(`${id}: escalates after two wrong attempts`, () => {
    let s = createInitialState();
    s = submitAttempt(s, id, wrong1, 1000);
    assert.equal(s.decisions[id].instructorReviewRequired, false);
    s = submitAttempt(s, id, wrong2, 2000);
    assert.equal(s.decisions[id].instructorReviewRequired, true);
    assert.equal(shouldAdvance(s, id), true);
  });
}

test("critical escalation clears after later correct response", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D08", "A", 1000);
  s = submitAttempt(s, "SIM08-D08", "C", 2000);
  assert.equal(s.decisions["SIM08-D08"].instructorReviewRequired, true);
  s = submitAttempt(s, "SIM08-D08", "B", 3000);
  assert.equal(s.decisions["SIM08-D08"].instructorReviewRequired, false);
});

// --- First-attempt evidence preservation ---
test("first attempt remains immutable after remediation", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D02", "A", 1000);
  s = submitAttempt(s, "SIM08-D02", "C", 2000);
  const r = s.decisions["SIM08-D02"];
  assert.equal(r.firstAttemptResponse, "A");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.finalResponse, "C");
  assert.equal(r.finalCorrect, true);
  assert.equal(r.remediationUsed, true);
});
test("first-attempt evidence is preserved even after a later critical-decision remediation clears review flag", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D08", "A", 1000);
  s = submitAttempt(s, "SIM08-D08", "C", 2000);
  s = submitAttempt(s, "SIM08-D08", "B", 3000);
  const r = s.decisions["SIM08-D08"];
  assert.equal(r.firstAttemptResponse, "A", "the original fabricated-leverage attempt must remain visible even though it was later corrected");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.instructorReviewRequired, false, "the flag clears on correction, but the historical first attempt itself is not erased");
});
test("ordinary wrong answer does not advance", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D02", "A", 1000);
  assert.equal(shouldAdvance(s, "SIM08-D02"), false);
});

// --- Remediation persistence ---
test("remediation count counts retried decisions", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D02", "A", 1000);
  s = submitAttempt(s, "SIM08-D02", "C", 2000);
  assert.equal(computeRemediationCount(s), 1);
});

// --- Final competency calculation / meaningful M08-C01-C15 coverage ---
const CORRECT = {
  "SIM08-D01": ["equipment", "target", "floor", "askingRate"],
  "SIM08-D02": "C",
  "SIM08-D03": "C",
  "SIM08-D04": "B",
  "SIM08-D05": ["unverified", "constraintPossible", "concedeWrong", "accuseWrong"],
  "SIM08-D06": "A",
  "SIM08-D07": ["grounded", "concise"],
  "SIM08-D08": "B",
  "SIM08-D09": "B",
  "SIM08-D10": ["trigger", "amount", "evidence", "process"],
  "SIM08-D11": "B",
  "SIM08-D12": "A",
  "SIM08-D13": "B",
  "SIM08-D14": "B",
  "SIM08-D15": "B",
  "SIM08-D16": { rate: "agreed", appointment: "agreed", detention: "unresolved", dropHook: "notEstablished" },
  "SIM08-D17": ["agreed", "unresolved", "notEstablished", "nextAction"],
  "SIM08-D18": "B",
  "SIM08-D19": "B",
};
test("full mastery produces COMPLETE 19/19", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) s = submitAttempt(s, id, CORRECT[id], 1000);
  assert.equal(computeSimulationStatus(s), "COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s), { correct: 19, total: 19 });
  assert.deepEqual(computeFirstAttemptScore(s), { correct: 19, total: 19 });
});
test("competency status distinguishes in-progress/mastered/remediated/review", () => {
  let s = createInitialState();
  assert.equal(computeCompetencyStatus(s)["M08-C08"], "In Progress");
  s = submitAttempt(s, "SIM08-D08", "A", 1000);
  s = submitAttempt(s, "SIM08-D08", "B", 2000);
  assert.equal(computeCompetencyStatus(s)["M08-C08"], "Mastered After Remediation");
  let t = createInitialState();
  t = submitAttempt(t, "SIM08-D15", "A", 1000);
  t = submitAttempt(t, "SIM08-D15", "C", 2000);
  assert.equal(computeCompetencyStatus(t)["M08-C12"], "Needs Instructor Review");
});

// --- Instructor-review/completion state ---
test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when a critical decision escalates", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM08-D15", "A", 1000);
  s = submitAttempt(s, "SIM08-D15", "C", 2000);
  assert.equal(computeSimulationStatus(s), "INSTRUCTOR_REVIEW_REQUIRED");
});

// --- Persistence ---
test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId, "SIM-008");
  assert.equal(normalizeLoadedState({ simulationId: "SIM-007", decisions: {} }).simulationId, "SIM-008");
});
test("persistence backfills partial state and repairs invalid pointer", () => {
  const p = normalizeLoadedState({ simulationId: "SIM-008", decisions: { "SIM08-D01": { finalCorrect: true } }, currentDecisionId: "BAD" });
  assert.equal(Object.keys(p.decisions).length, 19);
  assert.equal(p.currentDecisionId, "SIM08-D01");
  assert.equal(p.decisions["SIM08-D01"].finalCorrect, true);
});

// --- Progression ---
test("progression walks all 19 decisions", () => {
  let id = DECISION_ORDER[0], count = 0;
  while (id !== null) { id = getNextDecisionId(id); count += 1; }
  assert.equal(count, 19);
  assert.deepEqual(getProgress("SIM08-D19"), { current: 19, total: 19 });
  assert.equal(getStageForDecision("SIM08-D19").id, "SIM08-S15");
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
