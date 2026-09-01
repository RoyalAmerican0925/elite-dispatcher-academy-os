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
import { DECISION_ORDER, DECISIONS, STAGES, ARTIFACTS } from "../content.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

test("content: 10 stages in locked order", () => {
  assert.equal(STAGES.length, 10);
  assert.deepEqual(STAGES.map(s => s.id), ["SIM04-S1","SIM04-S2","SIM04-S3","SIM04-S4","SIM04-S5","SIM04-S6","SIM04-S7","SIM04-S8","SIM04-S9","SIM04-S10"]);
});

test("content: 20 stable SIM04 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 20);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM04-D\d\d$/);
});

test("content: every stage decision resolves and every decision belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id]);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});

test("content: current-date NRII material is isolated to dedicated artifact/decision", () => {
  assert.equal(ARTIFACTS.currentMedicalEvent.currentDateSensitive, true);
  assert.equal(DECISIONS["SIM04-D11"].currentDateSensitive, true);
  const other = DECISION_ORDER.filter(id => id !== "SIM04-D11" && DECISIONS[id].currentDateSensitive);
  assert.deepEqual(other, []);
});

test("evaluateResponse: choice correct/incorrect", () => {
  assert.equal(evaluateResponse("SIM04-D01", "B"), true);
  assert.equal(evaluateResponse("SIM04-D01", "A"), false);
});

test("evaluateResponse: multiselect exact-set and order independent", () => {
  const a = ["authority","insurance","w9","payment","drivers","equipment"];
  assert.equal(evaluateResponse("SIM04-D02", a), true);
  assert.equal(evaluateResponse("SIM04-D02", [...a].reverse()), true);
  assert.equal(evaluateResponse("SIM04-D02", ["authority"]), false);
});

test("evaluateResponse: sequencing", () => {
  assert.equal(evaluateResponse("SIM04-D14", ["stop","trusted","callback","compare","document","update"]), true);
  assert.equal(evaluateResponse("SIM04-D14", ["trusted","stop","callback","compare","document","update"]), false);
});

test("first attempt remains immutable after remediation", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM04-D01","A",1000);
  s = submitAttempt(s,"SIM04-D01","B",2000);
  const r = s.decisions["SIM04-D01"];
  assert.equal(r.firstAttemptResponse,"A");
  assert.equal(r.firstAttemptCorrect,false);
  assert.equal(r.finalResponse,"B");
  assert.equal(r.finalCorrect,true);
  assert.equal(r.remediationUsed,true);
});

test("ordinary wrong answer does not advance", () => {
  let s = createInitialState();
  s = submitAttempt(s,"SIM04-D01","A",1000);
  assert.equal(shouldAdvance(s,"SIM04-D01"),false);
});

test("exactly three decisions carry critical escalation", () => {
  const ids = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(ids,["SIM04-D09","SIM04-D13","SIM04-D15"]);
});

for (const [id, wrong1, wrong2] of [["SIM04-D09","A","B"],["SIM04-D13","A","C"],["SIM04-D15","A","B"]]) {
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
  s=submitAttempt(s,"SIM04-D13","A",1000);
  s=submitAttempt(s,"SIM04-D13","C",2000);
  assert.equal(s.decisions["SIM04-D13"].instructorReviewRequired,true);
  s=submitAttempt(s,"SIM04-D13","B",3000);
  assert.equal(s.decisions["SIM04-D13"].instructorReviewRequired,false);
});

const CORRECT = {
  "SIM04-D01":"B",
  "SIM04-D02":["authority","insurance","w9","payment","drivers","equipment"],
  "SIM04-D03":"C",
  "SIM04-D04":["coiSummary","currentAuthority","entityMatch"],
  "SIM04-D05":"B",
  "SIM04-D06":["taxRelationship","trustedDocs","neutralNote"],
  "SIM04-D07":"C",
  "SIM04-D08":["availability","assignedEquipment","endorsements","contact","medicalStatus"],
  "SIM04-D09":"C",
  "SIM04-D10":"B",
  "SIM04-D11":"B",
  "SIM04-D12":["issueDate","driverMatch","carrierProcess"],
  "SIM04-D13":"B",
  "SIM04-D14":["stop","trusted","callback","compare","document","update"],
  "SIM04-D15":"C",
  "SIM04-D16":"B",
  "SIM04-D17":["legalExpiration","annualRenewal","loadByLoad","companyReview"],
  "SIM04-D18":"C",
  "SIM04-D19":"B",
  "SIM04-D20":["w9","payment","driverB","scope"]
};

test("full mastery produces COMPLETE 20/20", () => {
  let s=createInitialState();
  for (const id of DECISION_ORDER) s=submitAttempt(s,id,CORRECT[id],1000);
  assert.equal(computeSimulationStatus(s),"COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s),{correct:20,total:20});
  assert.deepEqual(computeFirstAttemptScore(s),{correct:20,total:20});
});

test("competency status distinguishes in-progress/mastered/remediated/review", () => {
  let s=createInitialState();
  assert.equal(computeCompetencyStatus(s).H,"In Progress");
  s=submitAttempt(s,"SIM04-D13","A",1000);
  s=submitAttempt(s,"SIM04-D13","B",2000);
  s=submitAttempt(s,"SIM04-D14",CORRECT["SIM04-D14"],3000);
  assert.equal(computeCompetencyStatus(s).H,"Mastered After Remediation");
  let t=createInitialState();
  t=submitAttempt(t,"SIM04-D15","A",1000);
  t=submitAttempt(t,"SIM04-D15","B",2000);
  assert.equal(computeCompetencyStatus(t).D,"Needs Instructor Review");
});

test("remediation count counts retried decisions", () => {
  let s=createInitialState();
  s=submitAttempt(s,"SIM04-D01","A",1000);
  s=submitAttempt(s,"SIM04-D01","B",2000);
  assert.equal(computeRemediationCount(s),1);
});

test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId,"SIM-004");
  assert.equal(normalizeLoadedState({simulationId:"SIM-003",decisions:{}}).simulationId,"SIM-004");
});

test("persistence backfills partial state and repairs invalid pointer", () => {
  const p=normalizeLoadedState({simulationId:"SIM-004",decisions:{"SIM04-D01":{finalCorrect:true}},currentDecisionId:"BAD"});
  assert.equal(Object.keys(p.decisions).length,20);
  assert.equal(p.currentDecisionId,"SIM04-D01");
  assert.equal(p.decisions["SIM04-D01"].finalCorrect,true);
});

test("progression walks all 20 decisions", () => {
  let id=DECISION_ORDER[0], count=0;
  while(id!==null){ id=getNextDecisionId(id); count+=1; }
  assert.equal(count,20);
  assert.deepEqual(getProgress("SIM04-D20"),{current:20,total:20});
  assert.equal(getStageForDecision("SIM04-D20").id,"SIM04-S10");
});

test("SIM-004 content imports no sibling simulation IDs", () => {
  for (const id of DECISION_ORDER) {
    assert.doesNotMatch(id,/^SIM0[1-3]-/);
  }
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode=1;
