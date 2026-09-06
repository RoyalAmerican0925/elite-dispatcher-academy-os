import {DECISIONS,DECISION_ORDER,STAGES} from "./content.js";
import {CRITICAL_FAMILIES,REASSESSMENTS} from "./critical-controls.js";

export function createInitialState(){
  const decisions={};
  for(const id of DECISION_ORDER)decisions[id]={firstAttemptResponse:null,firstAttemptCorrect:null,firstAttemptTimestamp:null,finalResponse:null,finalCorrect:null,remediationUsed:false,attemptCount:0,finalTimestamp:null};
  const criticalHistory={};
  for(const cf of Object.keys(CRITICAL_FAMILIES))criticalHistory[cf]={triggered:false,triggerDecisionId:null,triggerResponse:null,triggerTimestamp:null,reassessment:{attempted:false,response:null,correct:null,timestamp:null},status:"NOT_YET_REACHED"};
  return{simulationId:"SIM-009",currentDecisionId:DECISION_ORDER[0],decisions,criticalHistory,phase:"MAIN",status:"IN_PROGRESS",startedAt:null,completedAt:null};
}

function seteq(a,b){if(!Array.isArray(a)||!Array.isArray(b)||a.length!==b.length)return false;const A=new Set(a),B=new Set(b);if(A.size!==B.size)return false;for(const v of A)if(!B.has(v))return false;return true;}
function categorizeEq(response,items,correctMap){if(!response||typeof response!=="object"||Array.isArray(response))return false;const keys=items.map(i=>i.key);if(Object.keys(response).length!==keys.length)return false;return keys.every(k=>Object.prototype.hasOwnProperty.call(response,k)&&response[k]===correctMap[k]);}

export function evaluateResponse(id,response){
  const d=DECISIONS[id];
  if(!d)throw new Error(`Unknown decision: ${id}`);
  if(d.type==="choice")return response===d.correctKey;
  if(d.type==="multiselect")return seteq(response,d.correctSet);
  if(d.type==="categorize")return categorizeEq(response,d.items,d.correctMap);
  throw new Error(`Unknown decision type: ${d.type}`);
}

export function submitAttempt(state,id,response,now=Date.now()){
  const d=DECISIONS[id];
  if(!d)throw new Error(`Unknown decision: ${id}`);
  const r={...state.decisions[id]};
  const correct=evaluateResponse(id,response);
  if(r.firstAttemptResponse===null){
    r.firstAttemptResponse=response;
    r.firstAttemptCorrect=correct;
    r.firstAttemptTimestamp=now;
  } else {
    r.remediationUsed=true;
  }
  r.attemptCount+=1;
  r.finalResponse=response;
  r.finalCorrect=correct;
  r.finalTimestamp=now;

  let criticalHistory=state.criticalHistory;
  const cf=d.criticalFailureFamily;
  if(cf && !correct && d.escalateAfterAttempts && r.attemptCount>=d.escalateAfterAttempts && !criticalHistory[cf].triggered){
    // First time this critical family actually triggers: record it permanently.
    // Same-screen correction on a LATER attempt at this same decision cannot
    // un-trigger it -- the record below is never cleared by this function.
    criticalHistory={...criticalHistory,[cf]:{...criticalHistory[cf],triggered:true,triggerDecisionId:id,triggerResponse:r.firstAttemptResponse,triggerTimestamp:r.firstAttemptTimestamp,status:"REASSESSMENT_REQUIRED"}};
  }
  return{...state,decisions:{...state.decisions,[id]:r},criticalHistory};
}

export function shouldAdvance(state,id){
  const r=state.decisions[id];
  const d=DECISIONS[id];
  if(r.finalCorrect===true)return true;
  // A critical decision that has triggered still lets the student continue the
  // MAIN scenario (per the design spec, resolution happens via a separate,
  // materially different reassessment after the main scenario -- not by
  // blocking progress on the original screen).
  if(d.criticalFailureFamily && state.criticalHistory[d.criticalFailureFamily].triggered)return true;
  return false;
}

export function getNextDecisionId(id){
  const i=DECISION_ORDER.indexOf(id);
  return i<0||i===DECISION_ORDER.length-1?null:DECISION_ORDER[i+1];
}

export function getTriggeredUnresolvedFamilies(state){
  return Object.keys(CRITICAL_FAMILIES).filter(cf=>{
    const h=state.criticalHistory[cf];
    return h.triggered && h.status!=="RESOLVED_BY_REASSESSMENT";
  });
}

export function submitCriticalReassessment(state,cf,response,now=Date.now()){
  const r=REASSESSMENTS[cf];
  if(!r)throw new Error(`Unknown critical family: ${cf}`);
  const h=state.criticalHistory[cf];
  if(!h.triggered)throw new Error(`${cf} was never triggered; nothing to reassess`);
  const correct=response===r.correctKey;
  const updated={
    ...h,
    reassessment:{attempted:true,response,correct,timestamp:now},
    // Resolution requires a CORRECT reassessment response. An incorrect
    // reassessment attempt is recorded (attempted:true) but the family stays
    // REASSESSMENT_REQUIRED -- the student may try again, but the trigger
    // record itself (triggerDecisionId/triggerResponse/triggerTimestamp)
    // never changes, preserving history exactly as it happened.
    status:correct?"RESOLVED_BY_REASSESSMENT":"REASSESSMENT_REQUIRED",
  };
  return{...state,criticalHistory:{...state.criticalHistory,[cf]:updated}};
}

export function computeMainScenarioComplete(state){
  return DECISION_ORDER.every(id=>state.decisions[id].finalCorrect===true || shouldAdvance(state,id));
}

export function computeSimulationStatus(state){
  const mainDone=DECISION_ORDER.every(id=>state.decisions[id].finalCorrect===true);
  const unresolved=getTriggeredUnresolvedFamilies(state);
  if(!mainDone)return"IN_PROGRESS";
  if(unresolved.length>0)return"REASSESSMENT_REQUIRED";
  return"COMPLETE";
}

export function computeFirstAttemptScore(state){
  return{correct:DECISION_ORDER.filter(id=>state.decisions[id].firstAttemptCorrect===true).length,total:DECISION_ORDER.length};
}
export function computeFinalMasteryScore(state){
  return{correct:DECISION_ORDER.filter(id=>state.decisions[id].finalCorrect===true).length,total:DECISION_ORDER.length};
}
export function computeRemediationCount(state){
  return DECISION_ORDER.filter(id=>state.decisions[id].remediationUsed).length;
}

export function computeCompetencyStatus(state){
  const map={};
  for(const id of DECISION_ORDER)for(const c of DECISIONS[id].competencies)(map[c]??=[]).push(id);
  const out={};
  for(const[c,ids]of Object.entries(map)){
    const rs=ids.map(id=>state.decisions[id]);
    const involvesUnresolvedCritical=ids.some(id=>{
      const cf=DECISIONS[id].criticalFailureFamily;
      return cf && state.criticalHistory[cf].triggered && state.criticalHistory[cf].status!=="RESOLVED_BY_REASSESSMENT";
    });
    if(involvesUnresolvedCritical)out[c]="Needs Instructor Review";
    else if(rs.some(r=>r.finalCorrect===null))out[c]="In Progress";
    else if(rs.every(r=>r.finalCorrect===true&&!r.remediationUsed))out[c]="Mastered";
    else if(rs.every(r=>r.finalCorrect===true))out[c]="Mastered After Remediation";
    else out[c]="In Progress";
  }
  return out;
}

export function computeCriticalFailureStatus(state){
  const out={};
  for(const cf of Object.keys(CRITICAL_FAMILIES)){
    const h=state.criticalHistory[cf];
    out[cf]=h.triggered?h.status:"NOT_YET_REACHED";
  }
  return out;
}

export function computeCompletionRecord(state){
  return{
    simulationId:state.simulationId,
    firstAttemptScore:computeFirstAttemptScore(state),
    finalMasteryScore:computeFinalMasteryScore(state),
    remediationCount:computeRemediationCount(state),
    competencyStatus:computeCompetencyStatus(state),
    criticalHistory:state.criticalHistory,
    criticalFailureStatus:computeCriticalFailureStatus(state),
    instructorReviewRequired:getTriggeredUnresolvedFamilies(state).length>0,
    finalStatus:computeSimulationStatus(state),
    completedAt:state.completedAt,
  };
}

export function getStageForDecision(id){const d=DECISIONS[id];return d?STAGES.find(s=>s.id===d.stageId)||null:null;}
export function getProgress(id){const i=DECISION_ORDER.indexOf(id);return{current:i+1,total:DECISION_ORDER.length};}

export function normalizeLoadedState(raw){
  if(!raw||typeof raw!=="object"||raw.simulationId!=="SIM-009"||!raw.decisions||typeof raw.decisions!=="object")return createInitialState();
  const fresh=createInitialState();
  const decisions={};
  for(const id of DECISION_ORDER){
    const saved=raw.decisions[id];
    decisions[id]=saved&&typeof saved==="object"?{...fresh.decisions[id],...saved}:fresh.decisions[id];
  }
  const criticalHistory={};
  for(const cf of Object.keys(CRITICAL_FAMILIES)){
    const saved=raw.criticalHistory&&raw.criticalHistory[cf];
    criticalHistory[cf]=saved&&typeof saved==="object"?{...fresh.criticalHistory[cf],...saved}:fresh.criticalHistory[cf];
  }
  return{...fresh,...raw,decisions,criticalHistory,currentDecisionId:DECISION_ORDER.includes(raw.currentDecisionId)?raw.currentDecisionId:DECISION_ORDER[0]};
}
