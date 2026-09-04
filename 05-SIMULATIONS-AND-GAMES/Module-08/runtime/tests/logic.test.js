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
  getStageForDecision,
  getProgress,
  normalizeLoadedState,
} from "../logic.js";
import { DECISION_ORDER, DECISIONS, STAGES, COMPETENCY_LABELS } from "../content.js";

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
test("content: 18 stable SIM08 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 18);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM08-D\d\d$/);
});
test("content: every stage decision resolves and belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id]);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
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

// --- Target/floor/walk-away interpretation ---
test("SIM08-D02: correctly distinguishes asking rate from target/floor/walk-away", () => {
  assert.equal(evaluateResponse("SIM08-D02", "C"), true);
  assert.equal(evaluateResponse("SIM08-D02", "A"), false);
});
test("SIM08-D11: reaching floor exactly is within authority, distinct from below-floor", () => {
  assert.equal(evaluateResponse("SIM08-D11", "A"), true);
});

// --- Missing-information VERIFY behavior ---
test("SIM08-D03: VERIFY rather than assume missing material fact", () => {
  assert.equal(evaluateResponse("SIM08-D03", "C"), true);
  assert.equal(evaluateResponse("SIM08-D03", "A"), false);
  assert.equal(evaluateResponse("SIM08-D03", "B"), false);
});

// --- Truthful vs fabricated leverage ---
test("SIM08-D07: rejects fabricated leverage in all forms including hedged version", () => {
  assert.equal(evaluateResponse("SIM08-D07", "B"), true);
  assert.equal(evaluateResponse("SIM08-D07", "A"), false);
  assert.equal(evaluateResponse("SIM08-D07", "D"), false, "hedged/vague fabrication is still wrong");
});

// --- Professional opening/role identification ---
test("SIM08-D04: accurate equipment representation, not a workaround promise", () => {
  assert.equal(evaluateResponse("SIM08-D04", "B"), true);
  assert.equal(evaluateResponse("SIM08-D04", "A"), false);
});

// --- Evidence-supported counter logic ---
test("SIM08-D06: counter must be evidence-supported, not a feeling-based number", () => {
  assert.equal(evaluateResponse("SIM08-D06", "B"), true);
  assert.equal(evaluateResponse("SIM08-D06", "C"), false);
});

// --- Concession vs conditional-trade logic ---
test("SIM08-D08: conditional trade preferred over uncontrolled below-floor concession", () => {
  assert.equal(evaluateResponse("SIM08-D08", "B"), true);
  assert.equal(evaluateResponse("SIM08-D08", "A"), false);
});

// --- Agreement-specific term clarification ---
test("SIM08-D09/D10: vague accessorial promise requires clarification, not invention or blind acceptance", () => {
  assert.equal(evaluateResponse("SIM08-D09", "B"), true);
  assert.equal(evaluateResponse("SIM08-D09", "C"), false, "inventing your own figure is also wrong");
  assert.equal(evaluateResponse("SIM08-D10", "B"), true);
});

// --- Later fact-change behavior ---
test("SIM08-D12: material fact change requires re-evaluating prior position", () => {
  assert.equal(evaluateResponse("SIM08-D12", "B"), true);
  assert.equal(evaluateResponse("SIM08-D12", "A"), false);
});

// --- Supplied authority boundary ---
test("SIM08-D14: below-floor offer requires decline/escalate regardless of gap size", () => {
  assert.equal(evaluateResponse("SIM08-D14", "B"), true);
  assert.equal(evaluateResponse("SIM08-D14", "A"), false);
});

// --- All six critical-failure families ---
// Six named failure families exist on the master branch: (1) unauthorized below-floor
// acceptance, (2) fabricated leverage, (3) material misrepresentation, (4) unauthorized
// carrier commitment, (5) false agreement state, (6) premature booking claim. Five are
// choice-type decisions using attempt-based escalation (D04, D07, D09, D14, D17); the
// sixth (false agreement state) is D15, a multiselect scored on first-pass correctness
// rather than attempt-count escalation, since "select the wrong set once" is itself the
// complete failure signal for that decision type -- there's no partial-credit path where
// waiting for a second wrong attempt would add diagnostic value.
test("critical decisions map to five of the six master-branch failure families via attempt-based escalation", () => {
  const ids = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(ids, ["SIM08-D04", "SIM08-D07", "SIM08-D09", "SIM08-D14", "SIM08-D17"]);
  assert.equal(ids.length, 5, "five choice-type critical decisions carry attempt-based escalation; the sixth (false agreement state) is D15, scored via correctness on the first pass");
});

for (const [id, wrong1, wrong2] of [["SIM08-D04","A","C"],["SIM08-D07","A","C"],["SIM08-D09","A","C"],["SIM08-D14","A","C"],["SIM08-D17","A","C"]]) {
  test(`${id}: escalates after two wrong attempts`, () => {
    let s=createInitialState();
    s=submitAttempt(s,id,wrong1,1000);
    assert.equal(s.decisions[id].instructorReviewRequired,false);
    s=submitAttempt(s,id,wrong2,2000);
    assert.equal(s.decisions[id].instructorReviewRequired,true);
    assert.equal(shouldAdvance(s,id),true);
  });
}

test("critical escalation clears after later correct response", () => {
  let s=createInitialState();
  s=submitAttempt(s,"SIM08-D07","A",1000);
  s=submitAttempt(s,"SIM08-D07","C",2000);
  assert.equal(s.decisions["SIM08-D07"].instructorReviewRequired,true);
  s=submitAttempt(s,"SIM08-D07","B",3000);
  assert.equal(s.decisions["SIM08-D07"].instructorReviewRequired,false);
});

// --- Unresolved-term state (false agreement state, M08-C13) ---
test("SIM08-D15: only actually-confirmed items classify as AGREED IN PRINCIPLE", () => {
  assert.equal(evaluateResponse("SIM08-D15", ["rate","appointment"]), true);
  assert.equal(evaluateResponse("SIM08-D15", ["rate","appointment","detention"]), false, "treating unresolved detention as agreed is the false-agreement-state failure");
  assert.equal(evaluateResponse("SIM08-D15", ["rate","appointment","dropHook"]), false);
});

// --- Agreement-in-principle vs booked-state boundary ---
test("SIM08-D17: verbal agreement is not the same as completed booking", () => {
  assert.equal(evaluateResponse("SIM08-D17", "B"), true);
  assert.equal(evaluateResponse("SIM08-D17", "A"), false, "premature booking claim is a critical failure");
});

// --- First-attempt evidence preservation ---
test("first attempt remains immutable after remediation", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM08-D02","A",1000);
  s = submitAttempt(s,"SIM08-D02","C",2000);
  const r = s.decisions["SIM08-D02"];
  assert.equal(r.firstAttemptResponse,"A");
  assert.equal(r.firstAttemptCorrect,false);
  assert.equal(r.finalResponse,"C");
  assert.equal(r.finalCorrect,true);
  assert.equal(r.remediationUsed,true);
});
test("ordinary wrong answer does not advance", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM08-D02","A",1000);
  assert.equal(shouldAdvance(s,"SIM08-D02"),false);
});

// --- Remediation persistence ---
test("remediation count counts retried decisions", () => {
  let s=createInitialState();
  s=submitAttempt(s,"SIM08-D02","A",1000);
  s=submitAttempt(s,"SIM08-D02","C",2000);
  assert.equal(computeRemediationCount(s),1);
});

// --- Final competency calculation ---
const CORRECT = {
  "SIM08-D01": ["equipment","target","floor","askingRate"],
  "SIM08-D02": "C",
  "SIM08-D03": "C",
  "SIM08-D04": "B",
  "SIM08-D05": "B",
  "SIM08-D06": "B",
  "SIM08-D07": "B",
  "SIM08-D08": "B",
  "SIM08-D09": "B",
  "SIM08-D10": "B",
  "SIM08-D11": "A",
  "SIM08-D12": "B",
  "SIM08-D13": "B",
  "SIM08-D14": "B",
  "SIM08-D15": ["rate","appointment"],
  "SIM08-D16": ["agreed","unresolved","notEstablished","nextAction"],
  "SIM08-D17": "B",
  "SIM08-D18": "B",
};
test("full mastery produces COMPLETE 18/18", () => {
  let s=createInitialState();
  for (const id of DECISION_ORDER) s=submitAttempt(s,id,CORRECT[id],1000);
  assert.equal(computeSimulationStatus(s),"COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s),{correct:18,total:18});
  assert.deepEqual(computeFirstAttemptScore(s),{correct:18,total:18});
});
test("competency status distinguishes in-progress/mastered/remediated/review", () => {
  let s=createInitialState();
  assert.equal(computeCompetencyStatus(s)["M08-C08"],"In Progress");
  s=submitAttempt(s,"SIM08-D07","A",1000);
  s=submitAttempt(s,"SIM08-D07","B",2000);
  assert.equal(computeCompetencyStatus(s)["M08-C08"],"Mastered After Remediation");
  let t=createInitialState();
  t=submitAttempt(t,"SIM08-D14","A",1000);
  t=submitAttempt(t,"SIM08-D14","C",2000);
  assert.equal(computeCompetencyStatus(t)["M08-C12"],"Needs Instructor Review");
});

// --- Instructor-review/completion state ---
test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when a critical decision escalates", () => {
  let s=createInitialState();
  s=submitAttempt(s,"SIM08-D14","A",1000);
  s=submitAttempt(s,"SIM08-D14","C",2000);
  assert.equal(computeSimulationStatus(s),"INSTRUCTOR_REVIEW_REQUIRED");
});

// --- Persistence ---
test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId,"SIM-008");
  assert.equal(normalizeLoadedState({simulationId:"SIM-007",decisions:{}}).simulationId,"SIM-008");
});
test("persistence backfills partial state and repairs invalid pointer", () => {
  const p=normalizeLoadedState({simulationId:"SIM-008",decisions:{"SIM08-D01":{finalCorrect:true}},currentDecisionId:"BAD"});
  assert.equal(Object.keys(p.decisions).length,18);
  assert.equal(p.currentDecisionId,"SIM08-D01");
  assert.equal(p.decisions["SIM08-D01"].finalCorrect,true);
});

// --- Progression ---
test("progression walks all 18 decisions", () => {
  let id=DECISION_ORDER[0], count=0;
  while(id!==null){ id=getNextDecisionId(id); count+=1; }
  assert.equal(count,18);
  assert.deepEqual(getProgress("SIM08-D18"),{current:18,total:18});
  assert.equal(getStageForDecision("SIM08-D18").id,"SIM08-S15");
});

test("SIM-008 content imports no sibling simulation IDs", () => {
  for (const id of DECISION_ORDER) assert.doesNotMatch(id,/^SIM0[1-7]-/);
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode=1;
