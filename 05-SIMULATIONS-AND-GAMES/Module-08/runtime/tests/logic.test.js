import assert from "node:assert/strict";
import {STAGES,DECISIONS,DECISION_ORDER,COMPETENCY_LABELS,CRITICAL_FAILURE_FAMILIES,REASSESSMENTS} from "../content.js";
import {createInitialState,evaluateResponse,submitAttempt,shouldAdvance,getNextDecisionId,getStageForDecision,getProgress,computeFirstAttemptScore,computeFinalMasteryScore,computeScaledPracticalScore,computeCompetencyStatus,computeCriticalFailureStatus,computeSimulationStatus,computeCompletionRecord,submitCriticalReassessment,getNextUnresolvedCriticalFamily,normalizeLoadedState} from "../logic.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}

const CORRECT={
 "SIM08-D01":["equipment","target","floor","asking"],"SIM08-D02":"C","SIM08-D03":"C","SIM08-D04":"B",
 "SIM08-D05":["unverified","constraintPossible","noAutoConcede","noAccuse"],"SIM08-D06":"A","SIM08-D07":["grounded","concise"],"SIM08-D08":"B",
 "SIM08-D09":"B","SIM08-D10":["trigger","amount","evidence","process"],"SIM08-D11":"B","SIM08-D12":"A","SIM08-D13":"B","SIM08-D20":"A",
 "SIM08-D14":"B","SIM08-D21":"B","SIM08-D15":"B","SIM08-D22":"B",
 "SIM08-D16":{rate:"agreed",appointment:"agreed",detention:"unresolved",dropHook:"notEstablished"},
 "SIM08-D17":["agreed","unresolved","notEstablished","nextAction"],"SIM08-D18":"B","SIM08-D23":["rate","appointment","detention","dropHook"],"SIM08-D19":"B","SIM08-D24":"B"
};

t("architecture: exactly 12 stages",()=>assert.equal(STAGES.length,12));
t("architecture: exactly 24 decisions with no duplicates",()=>{assert.equal(DECISION_ORDER.length,24);assert.equal(new Set(DECISION_ORDER).size,24)});
t("architecture: every decision belongs to its declared stage",()=>{for(const s of STAGES)for(const id of s.decisionIds){assert.ok(DECISIONS[id]);assert.equal(DECISIONS[id].stageId,s.id)}});
t("architecture: progression walks all 24 decisions",()=>{let id=DECISION_ORDER[0],n=0;while(id){n++;id=getNextDecisionId(id)}assert.equal(n,24);assert.deepEqual(getProgress(DECISION_ORDER[23]),{current:24,total:24});assert.equal(getStageForDecision(DECISION_ORDER[23]).id,"SIM08-S12")});
t("competencies: all 15 are covered",()=>{const used=new Set();for(const id of DECISION_ORDER)for(const c of DECISIONS[id].competencies)used.add(c);for(let n=1;n<=15;n++)assert.ok(used.has(`M08-C${String(n).padStart(2,"0")}`));assert.equal(Object.keys(COMPETENCY_LABELS).length,15)});
t("critical families: exactly six explicit families",()=>{assert.deepEqual(Object.keys(CRITICAL_FAILURE_FAMILIES).sort(),["CF-01","CF-02","CF-03","CF-04","CF-05","CF-06"]);const mapped=new Set(DECISION_ORDER.map(id=>DECISIONS[id].criticalFailureFamily).filter(Boolean));assert.deepEqual([...mapped].sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort())});
t("reassessments: one materially different case exists for every CF family",()=>{for(const cf of Object.keys(CRITICAL_FAILURE_FAMILIES))assert.ok(REASSESSMENTS[cf],`${cf} reassessment missing`)});

t("D01 excludes unrelated/assumed facts",()=>{assert.equal(evaluateResponse("SIM08-D01",CORRECT["SIM08-D01"]),true);assert.equal(evaluateResponse("SIM08-D01",[...CORRECT["SIM08-D01"],"oldLane"]),false)});
t("D03 verifies missing unload mode instead of assuming",()=>{assert.equal(evaluateResponse("SIM08-D03","C"),true);assert.equal(evaluateResponse("SIM08-D03","A"),false)});
t("D04 accurate dry-van representation passes",()=>assert.equal(evaluateResponse("SIM08-D04","B"),true));
t("D05 treats broker market claim as unverified negotiation evidence",()=>assert.equal(evaluateResponse("SIM08-D05",CORRECT["SIM08-D05"]),true));
t("D06 asks purposeful discovery question",()=>assert.equal(evaluateResponse("SIM08-D06","A"),true));
t("D07 allows concise/grounded counters and rejects invented market claim",()=>{assert.equal(evaluateResponse("SIM08-D07",["grounded","concise"]),true);assert.equal(evaluateResponse("SIM08-D07",["grounded","concise","inventedMarket"]),false)});
t("D08 rejects fabricated leverage",()=>assert.equal(evaluateResponse("SIM08-D08","B"),true));
t("D09 requires conditional trade rather than uncontrolled concession",()=>assert.equal(evaluateResponse("SIM08-D09","B"),true));
t("D10 requires trigger/amount/evidence/process",()=>{assert.equal(evaluateResponse("SIM08-D10",CORRECT["SIM08-D10"]),true);assert.equal(evaluateResponse("SIM08-D10",["trigger","amount","evidence"]),false)});
t("D12 distinguishes at-floor from below-floor",()=>assert.equal(evaluateResponse("SIM08-D12","A"),true));
t("D13 material fact change requires reevaluation",()=>assert.equal(evaluateResponse("SIM08-D13","B"),true));
t("D20 changed facts do not invent new authority",()=>assert.equal(evaluateResponse("SIM08-D20","A"),true));
t("D21 broker silence is not evidence requiring self-concession",()=>assert.equal(evaluateResponse("SIM08-D21","B"),true));
t("D15 below-floor offer requires decline/escalate",()=>assert.equal(evaluateResponse("SIM08-D15","B"),true));
t("D22 rate authority does not authorize unspecified layover commitment",()=>assert.equal(evaluateResponse("SIM08-D22","B"),true));
t("D16 enforces three-bucket closeout",()=>{assert.equal(evaluateResponse("SIM08-D16",CORRECT["SIM08-D16"]),true);assert.equal(evaluateResponse("SIM08-D16",{rate:"agreed",appointment:"agreed",detention:"agreed",dropHook:"notEstablished"}),false)});
t("D18/D24 keep agreement-in-principle separate from BOOKED",()=>{assert.equal(evaluateResponse("SIM08-D18","B"),true);assert.equal(evaluateResponse("SIM08-D24","B"),true);assert.notEqual(DECISIONS["SIM08-D24"].finalStatusSuccess,"BOOKED")});

t("first attempt remains immutable after ordinary remediation",()=>{let s=createInitialState();s=submitAttempt(s,"SIM08-D02","A",1000);s=submitAttempt(s,"SIM08-D02","C",2000);assert.equal(s.decisions["SIM08-D02"].firstAttemptResponse,"A");assert.equal(s.decisions["SIM08-D02"].firstAttemptCorrect,false);assert.equal(s.decisions["SIM08-D02"].finalCorrect,true)});
t("critical action triggers on first occurrence and can advance to preserve flow",()=>{let s=createInitialState();s=submitAttempt(s,"SIM08-D08","A",1000);assert.equal(s.decisions["SIM08-D08"].criticalFailureOccurred,true);assert.equal(s.decisions["SIM08-D08"].criticalFailureFamily,"CF-02");assert.equal(shouldAdvance(s,"SIM08-D08"),true)});
t("same-screen correction does not clear critical failure",()=>{let s=createInitialState();s=submitAttempt(s,"SIM08-D08","A",1000);s=submitAttempt(s,"SIM08-D08","B",2000);assert.equal(s.decisions["SIM08-D08"].finalCorrect,true);assert.equal(s.decisions["SIM08-D08"].criticalFailureResolved,false);assert.equal(computeCriticalFailureStatus(s)["CF-02"],"REASSESSMENT_REQUIRED")});
t("materially different reassessment resolves CF while preserving original evidence",()=>{let s=createInitialState();s=submitAttempt(s,"SIM08-D08","A",1000);s=submitCriticalReassessment(s,"CF-02","B",3000);const r=s.decisions["SIM08-D08"];assert.equal(r.criticalFailureResolved,true);assert.equal(r.firstAttemptResponse,"A");assert.equal(r.reassessment.materiallyDifferent,true);assert.equal(computeCriticalFailureStatus(s)["CF-02"],"RESOLVED_BY_REASSESSMENT")});
t("wrong reassessment does not resolve critical failure",()=>{let s=createInitialState();s=submitAttempt(s,"SIM08-D08","A",1000);s=submitCriticalReassessment(s,"CF-02","A",3000);assert.equal(s.decisions["SIM08-D08"].criticalFailureResolved,false);assert.equal(getNextUnresolvedCriticalFamily(s),"CF-02")});

t("all-correct first attempt produces 24/24, scaled 30 and COMPLETE",()=>{let s=createInitialState();for(const id of DECISION_ORDER)s=submitAttempt(s,id,CORRECT[id],1000);assert.deepEqual(computeFirstAttemptScore(s),{correct:24,total:24});assert.deepEqual(computeFinalMasteryScore(s),{correct:24,total:24});assert.equal(computeScaledPracticalScore(s),30);assert.equal(computeSimulationStatus(s),"COMPLETE")});
t("unresolved critical failure blocks completion even after later same-screen correction",()=>{let s=createInitialState();for(const id of DECISION_ORDER){if(id==="SIM08-D08"){s=submitAttempt(s,id,"A",1000);s=submitAttempt(s,id,"B",1100)}else s=submitAttempt(s,id,CORRECT[id],1000)}assert.equal(computeSimulationStatus(s),"REASSESSMENT_REQUIRED")});
t("completion record separates first/final/critical/reassessment/instructor state",()=>{const r=computeCompletionRecord(createInitialState());for(const k of ["firstAttemptScore","scaledPracticalScore","finalScore","competencies","criticalFailures","reassessments","instructorReviewState"])assert.ok(Object.hasOwn(r,k),k)});
t("normalize rejects foreign state and backfills premium decision structure",()=>{assert.equal(normalizeLoadedState({simulationId:"SIM-007",decisions:{}}).simulationId,"SIM-008");const s=normalizeLoadedState({simulationId:"SIM-008",decisions:{"SIM08-D01":{finalCorrect:true}},currentDecisionId:"BAD"});assert.equal(Object.keys(s.decisions).length,24);assert.equal(s.currentDecisionId,"SIM08-D01")});

console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
