import assert from "node:assert/strict";
import {DECISION_ORDER,DECISIONS,STAGES,ARTIFACTS,COMPETENCY_LABELS} from "../content.js";
import {CRITICAL_FAILURE_FAMILIES,REASSESSMENTS} from "../reassessments.js";
import {createInitialState,evaluateResponse,submitAttempt,submitCriticalReassessment,shouldAdvance,getNextDecisionId,computeSimulationStatus,computeFirstAttemptScore,computeFinalMasteryScore,computeRemediationCount,computeCompetencyStatus,computeCriticalFailureStatus,computeCompletionRecord,getNextUnresolvedCriticalFamily,getStageForDecision,getProgress,normalizeLoadedState} from "../logic.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}

const CORRECT={
 "SIM07-D01":{truckMPG:"usable",dispatcherFee:"usable",reportedBreakEven:"usable",historicalDetentionRate:"unknown",trailerType:"irrelevant"},
 "SIM07-D02":"B","SIM07-D03":["totalMilesNeeded","deadheadInfoNeeded"],"SIM07-D04":"B","SIM07-D33":"C",
 "SIM07-D05":790,"SIM07-D06":580,"SIM07-D07":680,"SIM07-D08":3.47,"SIM07-D09":{bravo:"first",charlie:"second",alpha:"third"},
 "SIM07-D10":119.70,"SIM07-D11":472.80,"SIM07-D12":347.12,"SIM07-D13":"B","SIM07-D14":1693.20,"SIM07-D15":1374.88,"SIM07-D16":"B",
 "SIM07-D17":"B","SIM07-D18":["deliveryAndRecords","checkTerms","checkCommissionBasis"],"SIM07-D19":"B","SIM07-D20":60.30,"SIM07-D21":1422.23,
 "SIM07-D22":{alpha:"poor",bravo:"neutral",charlie:"strong"},"SIM07-D23":"B","SIM07-D24":"B","SIM07-D25":1647.60,"SIM07-D26":1337.68,
 "SIM07-D27":{alpha:"counter",bravo:"take",charlie:"counter"},"SIM07-D28":2370.00,
 "SIM07-D29":["calculations","assumptions","unknowns","excludedCosts","verifiedVsUnverified","positioning","recommendationAndReasoning","carrierAuthorityStatement"],
 "SIM07-D30":"B","SIM07-D31":"B","SIM07-D32":["noDecisionYet","detentionUnearned","positioningIsNextLoad"]
};

t("structure: exactly 10 stages",()=>assert.equal(STAGES.length,10));
t("structure: 33 unique decisions",()=>{assert.equal(DECISION_ORDER.length,33);assert.equal(new Set(DECISION_ORDER).size,33)});
t("structure: every stage decision resolves",()=>{for(const s of STAGES)for(const id of s.decisionIds){assert.ok(DECISIONS[id]);assert.equal(DECISIONS[id].stageId,s.id)}});
t("progression walks all 33 decisions",()=>{let id=DECISION_ORDER[0],n=0;while(id){n++;id=getNextDecisionId(id)}assert.equal(n,33);assert.deepEqual(getProgress("SIM07-D32"),{current:33,total:33});assert.equal(getStageForDecision("SIM07-D32").id,"SIM07-S10")});
t("all 18 competencies are represented",()=>{const used=new Set();for(const id of DECISION_ORDER)for(const c of DECISIONS[id].competencies)used.add(c);for(let n=1;n<=18;n++)assert.ok(used.has(`C${String(n).padStart(2,"0")}`));assert.equal(Object.keys(COMPETENCY_LABELS).length,18)});
t("exactly five critical families defined",()=>assert.deepEqual(Object.keys(CRITICAL_FAILURE_FAMILIES).sort(),["CF-01","CF-02","CF-03","CF-04","CF-05"]));
t("one reassessment exists for every critical family",()=>assert.deepEqual(Object.keys(REASSESSMENTS).sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort()));

// Core arithmetic and occupational controls.
t("total trip miles: Alpha 790, Bravo 580, Charlie 680",()=>{assert.equal(evaluateResponse("SIM07-D05",790),true);assert.equal(evaluateResponse("SIM07-D06",580),true);assert.equal(evaluateResponse("SIM07-D07",680),true)});
t("Charlie loaded RPM rounds to 3.47",()=>{assert.equal(evaluateResponse("SIM07-D08",3.47),true);assert.equal(evaluateResponse("SIM07-D08",3.40),false)});
t("effective-RPM ranking reverses headline ranking",()=>assert.equal(evaluateResponse("SIM07-D09",{bravo:"first",charlie:"second",alpha:"third"}),true));
t("Alpha gallons 119.70 and fuel 472.80",()=>{assert.equal(evaluateResponse("SIM07-D10",119.70),true);assert.equal(evaluateResponse("SIM07-D11",472.80),true)});
t("Bravo fuel 347.12 and documented toll must be included",()=>{assert.equal(evaluateResponse("SIM07-D12",347.12),true);assert.equal(evaluateResponse("SIM07-D13","B"),true)});
t("5 percent contribution margins Alpha 1693.20 and Bravo 1374.88",()=>{assert.equal(evaluateResponse("SIM07-D14",1693.20),true);assert.equal(evaluateResponse("SIM07-D15",1374.88),true)});
t("contribution margin is not profit",()=>assert.equal(evaluateResponse("SIM07-D16","B"),true));
t("unearned detention stays outside current revenue",()=>assert.equal(evaluateResponse("SIM07-D17","B"),true));
t("detention prerequisites exclude estimated historical average",()=>assert.equal(evaluateResponse("SIM07-D18",CORRECT["SIM07-D18"]),true));
t("quick pay reduces margin rather than increasing profitability",()=>{assert.equal(evaluateResponse("SIM07-D19","B"),true);assert.equal(evaluateResponse("SIM07-D20",60.30),true);assert.equal(evaluateResponse("SIM07-D21",1422.23),true)});
t("positioning is qualitative and not guaranteed future revenue",()=>{assert.equal(evaluateResponse("SIM07-D22",CORRECT["SIM07-D22"]),true);assert.equal(evaluateResponse("SIM07-D23","B"),true)});
t("changed 7 percent fee requires recalculation",()=>{assert.equal(evaluateResponse("SIM07-D24","B"),true);assert.equal(evaluateResponse("SIM07-D25",1647.60),true);assert.equal(evaluateResponse("SIM07-D26",1337.68),true)});
t("carrier criteria produce Alpha counter Bravo take Charlie counter",()=>assert.equal(evaluateResponse("SIM07-D27",CORRECT["SIM07-D27"]),true));
t("Alpha counter threshold is 2370 using total trip miles",()=>{assert.equal(evaluateResponse("SIM07-D28",2370),true);assert.equal(evaluateResponse("SIM07-D28",1800),false)});
t("missing Load Delta data produces HOLD FOR DATA",()=>assert.equal(evaluateResponse("SIM07-D33","C"),true));
t("final record includes assumptions unknowns exclusions and authority",()=>assert.equal(evaluateResponse("SIM07-D29",CORRECT["SIM07-D29"]),true));
t("final briefing preserves carrier authority",()=>assert.equal(evaluateResponse("SIM07-D30","B"),true));
t("final briefing labels Charlie contribution margin correctly",()=>assert.equal(evaluateResponse("SIM07-D31","B"),true));
t("final synthesis preserves no-decision and unearned-revenue truth",()=>assert.equal(evaluateResponse("SIM07-D32",CORRECT["SIM07-D32"]),true));
t("numeric evaluator rejects numeric strings and NaN",()=>{assert.equal(evaluateResponse("SIM07-D05","790"),false);assert.equal(evaluateResponse("SIM07-D05",NaN),false)});

// First attempt and ordinary remediation.
t("ordinary remediation preserves first attempt",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D08",3.00,1000);s=submitAttempt(s,"SIM07-D08",3.47,2000);const r=s.decisions["SIM07-D08"];assert.equal(r.firstAttemptResponse,3.00);assert.equal(r.firstAttemptCorrect,false);assert.equal(r.finalCorrect,true);assert.equal(r.remediationUsed,true)});
t("ordinary wrong response does not advance",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D08",3.00,1000);assert.equal(shouldAdvance(s,"SIM07-D08"),false)});

// Critical persistence and materially different reassessment.
t("CF-04 triggers when unknown deadhead is silently set to zero",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D02","A",1000);assert.equal(s.decisions["SIM07-D02"].criticalFailureFamily,"CF-04");assert.equal(shouldAdvance(s,"SIM07-D02"),true)});
t("CF-03 triggers on loaded-RPM final-choice behavior",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D04","A",1000);assert.equal(s.decisions["SIM07-D04"].criticalFailureFamily,"CF-03")});
t("CF-02 triggers on profit mislabeling",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D16","A",1000);assert.equal(s.decisions["SIM07-D16"].criticalFailureFamily,"CF-02")});
t("CF-01 triggers on adding unearned detention",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);assert.equal(s.decisions["SIM07-D17"].criticalFailureFamily,"CF-01")});
t("CF-05 triggers on carrier-authority override",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D30","A",1000);assert.equal(s.decisions["SIM07-D30"].criticalFailureFamily,"CF-05")});
t("same-screen correction cannot erase critical failure",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);s=submitAttempt(s,"SIM07-D17","B",2000);assert.equal(s.decisions["SIM07-D17"].finalCorrect,true);assert.equal(s.decisions["SIM07-D17"].criticalFailureResolved,false);assert.equal(computeCriticalFailureStatus(s)["CF-01"],"REASSESSMENT_REQUIRED")});
t("materially different CF-01 reassessment resolves without deleting history",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);s=submitCriticalReassessment(s,"CF-01","B",3000);assert.equal(s.decisions["SIM07-D17"].criticalFailureResolved,true);assert.equal(s.decisions["SIM07-D17"].firstAttemptResponse,"A");assert.equal(s.decisions["SIM07-D17"].reassessment.materiallyDifferent,true);assert.equal(computeCriticalFailureStatus(s)["CF-01"],"RESOLVED_BY_REASSESSMENT")});
t("wrong reassessment leaves family unresolved",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D30","A",1000);s=submitCriticalReassessment(s,"CF-05","A",3000);assert.equal(getNextUnresolvedCriticalFamily(s),"CF-05")});

// Completion and persistence.
t("all correct first attempts produce COMPLETE 33/33",()=>{let s=createInitialState();for(const id of DECISION_ORDER)s=submitAttempt(s,id,CORRECT[id],1000);assert.deepEqual(computeFirstAttemptScore(s),{correct:33,total:33});assert.deepEqual(computeFinalMasteryScore(s),{correct:33,total:33});assert.equal(computeSimulationStatus(s),"COMPLETE")});
t("unresolved critical family blocks completion",()=>{let s=createInitialState();for(const id of DECISION_ORDER){if(id==="SIM07-D17")s=submitAttempt(s,id,"A",1000);else s=submitAttempt(s,id,CORRECT[id],1000)}assert.equal(computeSimulationStatus(s),"REASSESSMENT_REQUIRED")});
t("successful reassessment can restore final mastery equivalent",()=>{let s=createInitialState();for(const id of DECISION_ORDER){if(id==="SIM07-D17")s=submitAttempt(s,id,"A",1000);else s=submitAttempt(s,id,CORRECT[id],1000)}s=submitCriticalReassessment(s,"CF-01","B",2000);assert.deepEqual(computeFinalMasteryScore(s),{correct:33,total:33});assert.equal(computeSimulationStatus(s),"COMPLETE")});
t("completion record contains separate evidence categories",()=>{const r=computeCompletionRecord(createInitialState());for(const k of ["firstAttemptScore","finalScore","competencies","criticalFailures","reassessments","instructorReviewState"])assert.ok(Object.hasOwn(r,k),k)});
t("competency status reports Needs Reassessment after critical trigger",()=>{let s=createInitialState();s=submitAttempt(s,"SIM07-D17","A",1000);assert.equal(computeCompetencyStatus(s)["C10"],"Needs Reassessment")});
t("normalize rejects foreign state and backfills 33 decisions",()=>{assert.equal(normalizeLoadedState({simulationId:"SIM-006",decisions:{}}).simulationId,"SIM-007");const s=normalizeLoadedState({simulationId:"SIM-007",decisions:{"SIM07-D05":{finalCorrect:true}},currentDecisionId:"BAD"});assert.equal(Object.keys(s.decisions).length,33);assert.equal(s.currentDecisionId,"SIM07-D01")});

// Scenario continuity/source labels.
t("fuel artifact carries 6.6 MPG and fictional 3.95 price",()=>{const x=ARTIFACTS.fuelData.lines.join(" ");assert.match(x,/6\.6/);assert.match(x,/3\.95/);assert.match(x,/FICTIONAL INSTRUCTIONAL/)});
t("Bravo deadhead transitions from unknown to explicitly confirmed",()=>{assert.match(ARTIFACTS.bravoUnknown.lines.join(" "),/not yet been provided/i);assert.match(ARTIFACTS.mileageData.lines.join(" "),/verified, not assumed/i)});
t("final briefing uses corrected 7 percent margins",()=>{const x=ARTIFACTS.finalBriefing.lines.join(" ");assert.match(x,/1,647\.60/);assert.match(x,/1,337\.68/);assert.doesNotMatch(x,/1,693\.20/)});

console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
