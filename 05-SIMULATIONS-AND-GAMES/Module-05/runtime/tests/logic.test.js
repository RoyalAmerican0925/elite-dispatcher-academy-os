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
import { DECISION_ORDER, DECISIONS, STAGES } from "../content.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

test("content: 13 stages in locked order", () => {
  assert.equal(STAGES.length, 13);
  assert.deepEqual(STAGES.map(s => s.id), ["SIM05-S1","SIM05-S2","SIM05-S3","SIM05-S4","SIM05-S5","SIM05-S6","SIM05-S7","SIM05-S8","SIM05-S9","SIM05-S10","SIM05-S11","SIM05-S12","SIM05-S13"]);
});

test("content: 17 stable SIM05 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 17);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM05-D\d\d$/);
});

test("content: every stage decision resolves and every decision belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id]);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});

test("content: all 13 competency families are used by at least one decision", () => {
  const used = new Set(DECISION_ORDER.map(id => DECISIONS[id].competency));
  assert.equal(used.size, 13);
});

test("evaluateResponse: choice correct/incorrect", () => {
  assert.equal(evaluateResponse("SIM05-D03", "B"), true);
  assert.equal(evaluateResponse("SIM05-D03", "A"), false);
});

test("evaluateResponse: multiselect exact-set and order independent", () => {
  const a = ["equipment","qualifications","position","preferences"];
  assert.equal(evaluateResponse("SIM05-D01", a), true);
  assert.equal(evaluateResponse("SIM05-D01", [...a].reverse()), true);
  assert.equal(evaluateResponse("SIM05-D01", ["equipment"]), false);
});

test("first attempt remains immutable after remediation", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM05-D03","A",1000);
  s = submitAttempt(s,"SIM05-D03","B",2000);
  const r = s.decisions["SIM05-D03"];
  assert.equal(r.firstAttemptResponse,"A");
  assert.equal(r.firstAttemptCorrect,false);
  assert.equal(r.finalResponse,"B");
  assert.equal(r.finalCorrect,true);
  assert.equal(r.remediationUsed,true);
});

test("ordinary wrong answer does not advance", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM05-D03","A",1000);
  assert.equal(shouldAdvance(s,"SIM05-D03"),false);
});

test("exactly six decisions carry critical escalation (six named failure modes)", () => {
  const ids = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(ids,["SIM05-D07","SIM05-D09","SIM05-D10","SIM05-D11","SIM05-D12","SIM05-D15"]);
});

for (const [id, wrong1, wrong2] of [["SIM05-D07","A","B"],["SIM05-D09","A","C"],["SIM05-D10","A","C"],["SIM05-D11","A","C"],["SIM05-D12","A","C"],["SIM05-D15","A","C"]]) {
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
  s=submitAttempt(s,"SIM05-D07","A",1000);
  s=submitAttempt(s,"SIM05-D07","B",2000);
  assert.equal(s.decisions["SIM05-D07"].instructorReviewRequired,true);
  s=submitAttempt(s,"SIM05-D07","C",3000);
  assert.equal(s.decisions["SIM05-D07"].instructorReviewRequired,false);
});

const CORRECT = {
  "SIM05-D01":["equipment","qualifications","position","preferences"],
  "SIM05-D02":"B",
  "SIM05-D03":"B",
  "SIM05-D04":"B",
  "SIM05-D05":"B",
  "SIM05-D06":["destination","weight","pickup"],
  "SIM05-D07":"C",
  "SIM05-D08":"B",
  "SIM05-D09":"B",
  "SIM05-D10":"B",
  "SIM05-D11":"B",
  "SIM05-D12":"B",
  "SIM05-D13":"B",
  "SIM05-D14":"B",
  "SIM05-D15":"B",
  "SIM05-D16":"B",
  "SIM05-D17":["shortlist","rejected","open","escalated"],
};

test("full mastery produces COMPLETE 17/17", () => {
  let s=createInitialState();
  for (const id of DECISION_ORDER) s=submitAttempt(s,id,CORRECT[id],1000);
  assert.equal(computeSimulationStatus(s),"COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s),{correct:17,total:17});
  assert.deepEqual(computeFirstAttemptScore(s),{correct:17,total:17});
});

test("competency status distinguishes in-progress/mastered/remediated/review", () => {
  let s=createInitialState();
  assert.equal(computeCompetencyStatus(s).H,"In Progress");
  s=submitAttempt(s,"SIM05-D09","A",1000);
  s=submitAttempt(s,"SIM05-D09","B",2000);
  assert.equal(computeCompetencyStatus(s).H,"Mastered After Remediation");
  let t=createInitialState();
  t=submitAttempt(t,"SIM05-D07","A",1000);
  t=submitAttempt(t,"SIM05-D07","B",2000);
  assert.equal(computeCompetencyStatus(t).D,"Needs Instructor Review");
});

test("remediation count counts retried decisions", () => {
  let s=createInitialState();
  s=submitAttempt(s,"SIM05-D03","A",1000);
  s=submitAttempt(s,"SIM05-D03","B",2000);
  assert.equal(computeRemediationCount(s),1);
});

test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId,"SIM-005");
  assert.equal(normalizeLoadedState({simulationId:"SIM-004",decisions:{}}).simulationId,"SIM-005");
});

test("persistence backfills partial state and repairs invalid pointer", () => {
  const p=normalizeLoadedState({simulationId:"SIM-005",decisions:{"SIM05-D01":{finalCorrect:true}},currentDecisionId:"BAD"});
  assert.equal(Object.keys(p.decisions).length,17);
  assert.equal(p.currentDecisionId,"SIM05-D01");
  assert.equal(p.decisions["SIM05-D01"].finalCorrect,true);
});

test("progression walks all 17 decisions", () => {
  let id=DECISION_ORDER[0], count=0;
  while(id!==null){ id=getNextDecisionId(id); count+=1; }
  assert.equal(count,17);
  assert.deepEqual(getProgress("SIM05-D17"),{current:17,total:17});
  assert.equal(getStageForDecision("SIM05-D17").id,"SIM05-S13");
});

test("SIM-005 content imports no sibling simulation IDs", () => {
  for (const id of DECISION_ORDER) {
    assert.doesNotMatch(id,/^SIM0[1-4]-/);
  }
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode=1;
