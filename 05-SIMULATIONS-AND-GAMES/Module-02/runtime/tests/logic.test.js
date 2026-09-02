// Run with: node tests/logic.test.js
import assert from "node:assert/strict";
import {
  createInitialState,
  evaluateResponse,
  submitAttempt,
  shouldAdvance,
  getNextDecisionId,
  computeSimulationStatus,
  computeFinalMasteryScore,
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

test("content: seven stages in order", () => {
  assert.equal(STAGES.length, 7);
  assert.deepEqual(STAGES.map(s => s.id), ["SIM02-S1","SIM02-S2","SIM02-S3","SIM02-S4","SIM02-S5","SIM02-S6","SIM02-S7"]);
});

test("content: fifteen stable SIM02 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 15);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM02-D\d\d$/);
});

test("content: every stage decision resolves", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) assert.ok(DECISIONS[id]);
});

test("evaluateResponse: choice correct and incorrect", () => {
  assert.equal(evaluateResponse("SIM02-D01", "B"), true);
  assert.equal(evaluateResponse("SIM02-D01", "A"), false);
});

test("evaluateResponse: multiselect exact set is order independent", () => {
  assert.equal(evaluateResponse("SIM02-D02", ["relationship","equipment"]), true);
  assert.equal(evaluateResponse("SIM02-D02", ["equipment","relationship"]), true);
  assert.equal(evaluateResponse("SIM02-D02", ["relationship"]), false);
});

test("evaluateResponse: full eight-stage sequencing", () => {
  const correct = ["stop","identify","trace","check","classify","act","document","escalate"];
  const wrong = ["stop","identify","check","trace","classify","act","document","escalate"];
  assert.equal(evaluateResponse("SIM02-D15", correct), true);
  assert.equal(evaluateResponse("SIM02-D15", wrong), false);
});

test("submitAttempt: first attempt is immutable", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM02-D01","A",1000);
  s = submitAttempt(s,"SIM02-D01","B",2000);
  const r = s.decisions["SIM02-D01"];
  assert.equal(r.firstAttemptResponse,"A");
  assert.equal(r.firstAttemptCorrect,false);
  assert.equal(r.finalResponse,"B");
  assert.equal(r.finalCorrect,true);
});

test("submitAttempt: remediation flag only after retry", () => {
  let a=createInitialState(); a=submitAttempt(a,"SIM02-D01","B",1000);
  assert.equal(a.decisions["SIM02-D01"].remediationUsed,false);
  let b=createInitialState(); b=submitAttempt(b,"SIM02-D01","A",1000); b=submitAttempt(b,"SIM02-D01","B",2000);
  assert.equal(b.decisions["SIM02-D01"].remediationUsed,true);
});

test("shouldAdvance: ordinary wrong answer requires retry", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D01","A",1000);
  assert.equal(shouldAdvance(s,"SIM02-D01"),false);
});

test("D06 escalates after two wrong attempts", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D06","A",1000);
  assert.equal(s.decisions["SIM02-D06"].instructorReviewRequired,false);
  s=submitAttempt(s,"SIM02-D06","B",2000);
  assert.equal(s.decisions["SIM02-D06"].instructorReviewRequired,true);
});

test("D10 carries escalation rule",()=>assert.equal(DECISIONS["SIM02-D10"].escalateAfterAttempts,2));
test("D13 carries escalation rule",()=>assert.equal(DECISIONS["SIM02-D13"].escalateAfterAttempts,2));

test("later correct attempt clears escalation", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D06","A",1000); s=submitAttempt(s,"SIM02-D06","B",2000); s=submitAttempt(s,"SIM02-D06","C",3000);
  assert.equal(s.decisions["SIM02-D06"].instructorReviewRequired,false);
});

test("simulation status becomes instructor review required", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D10","B",1000); s=submitAttempt(s,"SIM02-D10","C",2000);
  assert.equal(computeSimulationStatus(s),"INSTRUCTOR_REVIEW_REQUIRED");
});

test("complete mastery requires all fifteen final-correct", () => {
  let s=createInitialState();
  const correct={
    "SIM02-D01":"B","SIM02-D02":["relationship","equipment"],"SIM02-D03":"A","SIM02-D04":["oneOffer","noChoice"],
    "SIM02-D05":"B","SIM02-D06":"C","SIM02-D07":["shipperDirect","chooseCarrier"],"SIM02-D08":"B","SIM02-D09":"A",
    "SIM02-D10":"A","SIM02-D11":["allocation","compReason"],"SIM02-D12":"B","SIM02-D13":"B","SIM02-D14":"C",
    "SIM02-D15":["stop","identify","trace","check","classify","act","document","escalate"]
  };
  for (const [id,response] of Object.entries(correct)) s=submitAttempt(s,id,response,1000);
  assert.equal(computeSimulationStatus(s),"COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s),{correct:15,total:15});
});

test("competency status: mastered", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D01","B",1000);
  assert.equal(computeCompetencyStatus(s).A,"Mastered");
});

test("competency status: mastered after remediation", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D01","A",1000); s=submitAttempt(s,"SIM02-D01","B",2000);
  assert.equal(computeCompetencyStatus(s).A,"Mastered After Remediation");
});

test("fresh competency status is in progress",()=>assert.equal(computeCompetencyStatus(createInitialState()).A,"In Progress"));

test("normalize valid SIM-002 state", () => {
  let s=createInitialState(); s=submitAttempt(s,"SIM02-D01","B",1000); const n=normalizeLoadedState(s);
  assert.equal(n.decisions["SIM02-D01"].finalCorrect,true); assert.equal(n.simulationId,"SIM-002");
});

test("normalize rejects invalid primitive input", () => {
  for (const v of [null,undefined,"garbage",42]) assert.equal(normalizeLoadedState(v).status,"IN_PROGRESS");
});

test("normalize rejects foreign simulation state", () => {
  const n=normalizeLoadedState({simulationId:"SIM-001",decisions:{},status:"COMPLETE"});
  assert.equal(n.simulationId,"SIM-002"); assert.equal(n.status,"IN_PROGRESS");
});

test("normalize backfills partial decision state", () => {
  const n=normalizeLoadedState({simulationId:"SIM-002",decisions:{"SIM02-D01":{finalCorrect:true}},currentDecisionId:"SIM02-D01"});
  assert.equal(Object.keys(n.decisions).length,15); assert.equal(n.decisions["SIM02-D15"].finalCorrect,null);
});

test("normalize invalid current pointer falls back", () => {
  const n=normalizeLoadedState({simulationId:"SIM-002",decisions:{},currentDecisionId:"SIM99-NOPE"});
  assert.equal(n.currentDecisionId,DECISION_ORDER[0]);
});

test("createInitialState produces clean decision history", () => {
  const s=createInitialState(); for (const id of DECISION_ORDER) { assert.equal(s.decisions[id].firstAttemptResponse,null); assert.equal(s.decisions[id].attemptCount,0); }
  assert.equal(s.status,"IN_PROGRESS");
});

test("getNextDecisionId walks full sequence", () => {
  let id=DECISION_ORDER[0],steps=0; while(id!==null){id=getNextDecisionId(id);steps+=1;} assert.equal(steps,15);
});

test("stage and progress helpers remain stable", () => {
  assert.equal(getStageForDecision("SIM02-D06").id,"SIM02-S3");
  assert.deepEqual(getProgress("SIM02-D01"),{current:1,total:15});
  assert.deepEqual(getProgress("SIM02-D15"),{current:15,total:15});
});

test("D09 explicitly rejects non-overlap safe harbor", () => {
  const t=`${DECISIONS["SIM02-D09"].correctFeedback} ${DECISIONS["SIM02-D09"].remediation}`;
  assert.match(t,/not an automatic legal safe harbor/i);
});

console.log(""); console.log(`${passed} passed, ${failed} failed`); if(failed>0) process.exitCode=1;
