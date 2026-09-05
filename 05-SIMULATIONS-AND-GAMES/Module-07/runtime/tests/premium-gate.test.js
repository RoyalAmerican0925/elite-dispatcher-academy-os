import assert from "node:assert/strict";
import {DECISIONS,DECISION_ORDER,STAGES,COMPETENCY_LABELS} from "../content.js";
import {CRITICAL_FAILURE_FAMILIES,REASSESSMENTS} from "../reassessments.js";
import {createInitialState,submitAttempt,submitCriticalReassessment,computeCriticalFailureStatus,computeCompletionRecord} from "../logic.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}
t("locked architecture remains exactly 10 stages",()=>assert.equal(STAGES.length,10));
t("runtime retains 33 meaningful decisions",()=>assert.equal(DECISION_ORDER.length,33));
t("all 18 competencies remain represented",()=>assert.equal(Object.keys(COMPETENCY_LABELS).length,18));
t("exactly five approved critical families exist",()=>assert.deepEqual(Object.keys(CRITICAL_FAILURE_FAMILIES).sort(),["CF-01","CF-02","CF-03","CF-04","CF-05"]));
t("materially different reassessment exists for all five families",()=>assert.deepEqual(Object.keys(REASSESSMENTS).sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort()));
t("critical trigger is preserved on first triggering behavior",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);const r=s.decisions["SIM07-D17"];assert.equal(r.criticalFailureOccurred,true);assert.equal(r.criticalFailureFamily,"CF-01");assert.equal(r.criticalFailureTriggeredAt,1000)});
t("same-screen correction cannot resolve critical history",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);s=submitAttempt(s,"SIM07-D17","B",2000);assert.equal(s.decisions["SIM07-D17"].criticalFailureResolved,false);assert.equal(computeCriticalFailureStatus(s)["CF-01"],"REASSESSMENT_REQUIRED")});
t("materially different reassessment resolves family without deleting trigger",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);s=submitCriticalReassessment(s,"CF-01","B",3000);assert.equal(s.decisions["SIM07-D17"].criticalFailureResolved,true);assert.equal(s.decisions["SIM07-D17"].firstAttemptResponse,"A");assert.equal(computeCriticalFailureStatus(s)["CF-01"],"RESOLVED_BY_REASSESSMENT")});
t("completion record separates first final competency critical and reassessment evidence",()=>{const r=computeCompletionRecord(createInitialState());for(const k of ["firstAttemptScore","finalScore","competencies","criticalFailures","reassessments","instructorReviewState"])assert.ok(Object.hasOwn(r,k),k)});
t("every content critical family is one of the approved five",()=>{for(const id of DECISION_ORDER){const cf=DECISIONS[id].criticalFailureFamily;if(cf)assert.ok(CRITICAL_FAILURE_FAMILIES[cf],`${id} unknown ${cf}`)}});
console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
