import assert from "node:assert/strict";
import {DECISIONS,DECISION_ORDER,STAGES} from "../content.js";
import {CRITICAL_FAMILIES,REASSESSMENTS} from "../critical-controls.js";
import {createInitialState,submitAttempt,submitReassessment,computeCriticalFailureStatus,computeCompletionRecord} from "../logic.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}
const families=["CF-01","CF-02","CF-03","CF-04","CF-05","CF-06"];
const wrong={"SIM05-D07":"A","SIM05-D09":"A","SIM05-D10":"A","SIM05-D11":"A","SIM05-D12":"A","SIM05-D15":"A"};
const correct={"SIM05-D07":"C","SIM05-D09":"B","SIM05-D10":"B","SIM05-D11":"B","SIM05-D12":"B","SIM05-D15":"B"};
t("preserves established 13-stage 18-decision architecture",()=>{assert.equal(STAGES.length,13);assert.equal(DECISION_ORDER.length,18)});
t("defines exactly six occupational critical families",()=>assert.deepEqual(Object.keys(CRITICAL_FAMILIES).sort(),families));
t("maps exactly six main-scenario decisions to the six families",()=>{const ids=Object.values(CRITICAL_FAMILIES).map(x=>x.decisionId);assert.equal(new Set(ids).size,6);for(const id of ids)assert.ok(DECISIONS[id]);});
t("provides one materially different reassessment per critical family",()=>{assert.deepEqual(Object.keys(REASSESSMENTS).sort(),families);for(const cf of families){assert.equal(REASSESSMENTS[cf].familyId,cf);assert.equal(REASSESSMENTS[cf].materiallyDifferent,true);assert.ok(REASSESSMENTS[cf].scenario);}});
t("critical history persists after same-screen correction",()=>{let s=createInitialState();s=submitAttempt(s,"SIM05-D07",wrong["SIM05-D07"],1000);s=submitAttempt(s,"SIM05-D07",wrong["SIM05-D07"],2000);assert.equal(computeCriticalFailureStatus(s)["CF-01"],"REASSESSMENT_REQUIRED");s=submitAttempt(s,"SIM05-D07",correct["SIM05-D07"],3000);assert.equal(s.decisions["SIM05-D07"].finalCorrect,true);assert.equal(computeCriticalFailureStatus(s)["CF-01"],"REASSESSMENT_REQUIRED");});
t("each critical family can be resolved only by its alternate reassessment",()=>{for(const cf of families){const d=CRITICAL_FAMILIES[cf];let s=createInitialState();s=submitAttempt(s,d.decisionId,wrong[d.decisionId],1000);s=submitAttempt(s,d.decisionId,wrong[d.decisionId],2000);s=submitAttempt(s,d.decisionId,correct[d.decisionId],3000);const r=REASSESSMENTS[cf];s=submitReassessment(s,cf,r.correctKey,4000);assert.equal(computeCriticalFailureStatus(s)[cf],"RESOLVED_BY_REASSESSMENT");assert.equal(s.decisions[d.decisionId].firstAttemptTimestamp,1000);}});
t("completion record separates first attempt final mastery critical history and reassessment",()=>{const r=computeCompletionRecord(createInitialState());for(const k of ["firstAttemptScore","finalMasteryScore","criticalFailures","reassessments","competencies","instructorReviewState"])assert.ok(Object.hasOwn(r,k),k);});
console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
