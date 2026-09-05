import assert from "node:assert/strict";
import * as logic from "../logic.js";
import { DECISIONS, DECISION_ORDER, STAGES } from "../content.js";

let passed=0, failed=0;
function test(name,fn){try{fn();passed++;console.log(`PASS  ${name}`)}catch(e){failed++;console.log(`FAIL  ${name}`);console.log(`      ${e.message}`)}}

const criticalIds=DECISION_ORDER.filter(id=>DECISIONS[id].escalateAfterAttempts);

test("premium architecture preserves 7 stages and 15 decisions",()=>{assert.equal(STAGES.length,7);assert.equal(DECISION_ORDER.length,15)});
test("premium architecture preserves exactly three M02 high-stakes decisions",()=>assert.deepEqual(criticalIds,["SIM02-D06","SIM02-D10","SIM02-D13"]));
test("premium logic exposes critical status and alternate reassessment APIs",()=>{assert.equal(typeof logic.computeCriticalFailureStatus,"function");assert.equal(typeof logic.submitReassessment,"function");assert.equal(typeof logic.computeCompletionRecord,"function")});
test("same-screen correction cannot erase a triggered M02 critical family",()=>{
  let s=logic.createInitialState();
  s=logic.submitAttempt(s,"SIM02-D06","A",1000);
  s=logic.submitAttempt(s,"SIM02-D06","B",2000);
  s=logic.submitAttempt(s,"SIM02-D06","C",3000);
  const status=logic.computeCriticalFailureStatus(s);
  assert.equal(status["M02-CF-01"],"REASSESSMENT_REQUIRED");
});
test("alternate reassessment resolves without erasing critical occurrence",()=>{
  let s=logic.createInitialState();
  s=logic.submitAttempt(s,"SIM02-D06","A",1000);s=logic.submitAttempt(s,"SIM02-D06","B",2000);s=logic.submitAttempt(s,"SIM02-D06","C",3000);
  s=logic.submitReassessment(s,"M02-CF-01","B",4000);
  const status=logic.computeCriticalFailureStatus(s);
  assert.equal(status["M02-CF-01"],"RESOLVED_BY_REASSESSMENT");
  assert.equal(s.criticalFailures["M02-CF-01"].occurred,true);
});
test("completion record separates first attempt final mastery critical history and reassessment",()=>{
  const r=logic.computeCompletionRecord(logic.createInitialState());
  assert.ok(r.firstAttemptScore);assert.ok(r.finalMasteryScore);assert.ok(r.criticalFailures);assert.ok(r.reassessmentHistory);assert.ok("instructorReviewState" in r);
});

console.log("");console.log(`${passed} passed, ${failed} failed`);if(failed)process.exitCode=1;
