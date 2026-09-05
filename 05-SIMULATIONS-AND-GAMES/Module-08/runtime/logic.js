import {DECISIONS,DECISION_ORDER,STAGES,CRITICAL_FAILURE_FAMILIES,REASSESSMENTS} from "./content.js";

function blankDecision(){return{firstAttemptResponse:null,firstAttemptCorrect:null,firstAttemptTimestamp:null,finalResponse:null,finalCorrect:null,remediationUsed:false,attemptCount:0,finalTimestamp:null,instructorReviewRequired:false,criticalFailureOccurred:false,criticalFailureFamily:null,criticalFailureTriggeredAt:null,criticalFailureResponse:null,criticalFailureResolved:false,reassessment:null};}
export function createInitialState(){const decisions={};for(const id of DECISION_ORDER)decisions[id]=blankDecision();const reassessments={};for(const cf of Object.keys(CRITICAL_FAILURE_FAMILIES))reassessments[cf]={attemptCount:0,firstResponse:null,firstCorrect:null,firstTimestamp:null,finalResponse:null,finalCorrect:null,finalTimestamp:null,resolved:false};return{simulationId:"SIM-008",currentDecisionId:DECISION_ORDER[0],decisions,reassessments,status:"IN_PROGRESS",startedAt:null,completedAt:null};}

function stable(v){if(v&&typeof v==="object")return JSON.stringify(v,Object.keys(v).sort());return JSON.stringify(v);}
function deepEq(a,b){return stable(a)===stable(b);}
function seteq(a,b){if(!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length)return false;const A=new Set(a),B=new Set(b);if(A.size!==B.size)return false;for(const v of A)if(!B.has(v))return false;return true;}
function categorizeEq(response,items,correctMap){if(!response||typeof response!=="object"||Array.isArray(response))return false;const keys=items.map(i=>i.key);if(Object.keys(response).length!==keys.length)return false;return keys.every(k=>Object.prototype.hasOwnProperty.call(response,k)&&response[k]===correctMap[k]);}
function evalDecision(d,response){if(d.type==="choice")return response===d.correctKey;if(d.type==="multiselect")return seteq(response,d.correctSet);if(d.type==="categorize")return categorizeEq(response,d.items,d.correctMap);if(d.type==="sequencing")return Array.isArray(response)&&response.length===d.correctOrder.length&&d.correctOrder.every((v,i)=>response[i]===v);throw new Error(`Unknown decision type: ${d.type}`);}
export function evaluateResponse(id,response){const d=DECISIONS[id];if(!d)throw new Error(`Unknown decision: ${id}`);return evalDecision(d,response);}
function isCriticalTrigger(d,response){if(!d.criticalFailureFamily)return false;const xs=d.criticalWrongResponses||[d.criticalWrongResponse];return xs.some(x=>deepEq(x,response));}

export function submitAttempt(state,id,response,now=Date.now()){
  const d=DECISIONS[id];if(!d)throw new Error(`Unknown decision: ${id}`);
  const r={...state.decisions[id]},correct=evaluateResponse(id,response);
  if(r.firstAttemptResponse===null){r.firstAttemptResponse=response;r.firstAttemptCorrect=correct;r.firstAttemptTimestamp=now;}else r.remediationUsed=true;
  r.attemptCount+=1;r.finalResponse=response;r.finalCorrect=correct;r.finalTimestamp=now;
  if(isCriticalTrigger(d,response)&&!r.criticalFailureOccurred){r.criticalFailureOccurred=true;r.criticalFailureFamily=d.criticalFailureFamily;r.criticalFailureTriggeredAt=now;r.criticalFailureResponse=response;r.instructorReviewRequired=true;}
  // Same-screen correction can improve final correctness but never resolves critical history.
  if(r.criticalFailureOccurred&&!r.criticalFailureResolved)r.instructorReviewRequired=true;
  return{...state,decisions:{...state.decisions,[id]:r}};
}

export function shouldAdvance(state,id){const r=state.decisions[id];return r.finalCorrect===true||r.criticalFailureOccurred===true;}
export function getNextDecisionId(id){const i=DECISION_ORDER.indexOf(id);return i<0||i===DECISION_ORDER.length-1?null:DECISION_ORDER[i+1];}
export function getStageForDecision(id){const d=DECISIONS[id];return d?STAGES.find(s=>s.id===d.stageId)||null:null;}
export function getProgress(id){const i=DECISION_ORDER.indexOf(id);return{current:i+1,total:DECISION_ORDER.length};}

export function evaluateReassessment(family,response){const d=REASSESSMENTS[family];if(!d)throw new Error(`Unknown critical family: ${family}`);return evalDecision(d,response);}
export function submitCriticalReassessment(state,family,response,now=Date.now()){
  const d=REASSESSMENTS[family];if(!d)throw new Error(`Unknown critical family: ${family}`);
  const rr={...(state.reassessments?.[family]||{})};const correct=evaluateReassessment(family,response);
  if(rr.firstResponse==null){rr.firstResponse=response;rr.firstCorrect=correct;rr.firstTimestamp=now;}
  rr.attemptCount=(rr.attemptCount||0)+1;rr.finalResponse=response;rr.finalCorrect=correct;rr.finalTimestamp=now;if(correct)rr.resolved=true;
  const decisions={...state.decisions};for(const id of DECISION_ORDER){const r=decisions[id];if(r.criticalFailureFamily!==family)continue;decisions[id]={...r,criticalFailureResolved:correct?true:r.criticalFailureResolved,reassessment:correct?{scenarioId:d.id,materiallyDifferent:true,correct:true,timestamp:now}:r.reassessment,instructorReviewRequired:correct?false:true};}
  return{...state,decisions,reassessments:{...state.reassessments,[family]:rr}};
}

export function computeFirstAttemptScore(state){return{correct:DECISION_ORDER.filter(id=>state.decisions[id].firstAttemptCorrect===true).length,total:DECISION_ORDER.length};}
export function computeFinalMasteryScore(state){let correct=0;for(const id of DECISION_ORDER){const r=state.decisions[id];if(r.finalCorrect===true)correct++;else if(r.criticalFailureOccurred&&r.criticalFailureResolved)correct++;}return{correct,total:DECISION_ORDER.length};}
export function computeRemediationCount(state){return DECISION_ORDER.filter(id=>state.decisions[id].remediationUsed||state.decisions[id].criticalFailureResolved).length;}

export function computeCriticalFailureStatus(state){const out={};for(const cf of Object.keys(CRITICAL_FAILURE_FAMILIES)){const ids=DECISION_ORDER.filter(id=>DECISIONS[id].criticalFailureFamily===cf);const rs=ids.map(id=>state.decisions[id]);if(rs.some(r=>r.criticalFailureOccurred&&!r.criticalFailureResolved))out[cf]="REASSESSMENT_REQUIRED";else if(rs.some(r=>r.criticalFailureOccurred&&r.criticalFailureResolved))out[cf]="RESOLVED_BY_REASSESSMENT";else if(rs.some(r=>r.firstAttemptResponse===null))out[cf]="NOT_YET_REACHED";else out[cf]="NO_FAILURE_OBSERVED";}return out;}

export function computeCompetencyStatus(state){const map={};for(const id of DECISION_ORDER){const comps=DECISIONS[id].competencies||[DECISIONS[id].competency];for(const c of comps)(map[c]??=[]).push(id);}const out={};for(const[c,ids]of Object.entries(map)){const rs=ids.map(id=>state.decisions[id]);if(rs.some(r=>r.criticalFailureOccurred&&!r.criticalFailureResolved)){out[c]="Needs Reassessment";continue;}if(rs.some(r=>r.firstAttemptResponse===null)){out[c]="In Progress";continue;}const mastered=rs.every(r=>r.finalCorrect===true||(r.criticalFailureOccurred&&r.criticalFailureResolved));if(!mastered){out[c]="Needs Instructor Review";continue;}if(rs.some(r=>r.criticalFailureResolved)){out[c]="Mastered After Reassessment";continue;}if(rs.some(r=>r.remediationUsed)){out[c]="Mastered After Remediation";continue;}out[c]="Mastered";}return out;}

export function computeScaledPracticalScore(state){const f=computeFirstAttemptScore(state);return Math.round((f.correct/f.total)*30);}
export function computeSimulationStatus(state){
  if(DECISION_ORDER.some(id=>state.decisions[id].firstAttemptResponse===null))return"IN_PROGRESS";
  const cf=computeCriticalFailureStatus(state);if(Object.values(cf).includes("REASSESSMENT_REQUIRED"))return"REASSESSMENT_REQUIRED";
  const mastery=computeFinalMasteryScore(state);if(mastery.correct<mastery.total)return"INSTRUCTOR_REVIEW_REQUIRED";
  if(computeScaledPracticalScore(state)<24)return"INSTRUCTOR_REVIEW_REQUIRED";
  return"COMPLETE";
}

export function computeCompletionRecord(state){return{simulationId:"SIM-008",firstAttemptScore:computeFirstAttemptScore(state),scaledPracticalScore:computeScaledPracticalScore(state),finalScore:computeFinalMasteryScore(state),remediationCount:computeRemediationCount(state),competencies:computeCompetencyStatus(state),criticalFailures:computeCriticalFailureStatus(state),reassessments:state.reassessments,instructorReviewState:computeSimulationStatus(state),completedAt:state.completedAt||null};}

export function getNextUnresolvedCriticalFamily(state){const cf=computeCriticalFailureStatus(state);return Object.keys(CRITICAL_FAILURE_FAMILIES).find(k=>cf[k]==="REASSESSMENT_REQUIRED")||null;}

export function normalizeLoadedState(raw){if(!raw||typeof raw!=="object"||raw.simulationId!=="SIM-008"||!raw.decisions||typeof raw.decisions!=="object")return createInitialState();const fresh=createInitialState(),decisions={};for(const id of DECISION_ORDER){const saved=raw.decisions[id];decisions[id]=saved&&typeof saved==="object"?{...fresh.decisions[id],...saved}:fresh.decisions[id];}const reassessments={...fresh.reassessments,...(raw.reassessments||{})};return{...fresh,...raw,decisions,reassessments,currentDecisionId:DECISION_ORDER.includes(raw.currentDecisionId)?raw.currentDecisionId:DECISION_ORDER[0]};}
