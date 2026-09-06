import {DECISIONS,STAGES,ARTIFACTS,COMPETENCY_LABELS} from "./content.js";
import {CRITICAL_FAMILIES,REASSESSMENTS} from "./critical-controls.js";
import {createInitialState,submitAttempt,shouldAdvance,getNextDecisionId,submitCriticalReassessment,getTriggeredUnresolvedFamilies,computeSimulationStatus,computeFirstAttemptScore,computeFinalMasteryScore,computeRemediationCount,computeCompetencyStatus,computeCriticalFailureStatus,getStageForDecision,getProgress,normalizeLoadedState} from "./logic.js";

const STORAGE_KEY="sim009-state-v1";
function load(){try{const r=localStorage.getItem(STORAGE_KEY);return r?normalizeLoadedState(JSON.parse(r)):null}catch{return null}}
function save(s){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(s))}catch{}}
let state=load()||createInitialState(),pending=null,feedback=false,reassessPending=null,reassessFeedback=false,reassessQueueIndex=0;
const root=document.getElementById("app");

function el(tag,attrs={},children=[]){const n=document.createElement(tag);for(const[k,v]of Object.entries(attrs)){if(v==null)continue;if(k==="class")n.className=v;else if(k.startsWith("on")&&typeof v==="function")n.addEventListener(k.slice(2),v);else n.setAttribute(k,v);}for(const c of [].concat(children)){if(c==null)continue;n.appendChild(typeof c==="string"?document.createTextNode(c):c)}return n;}

function artifact(key){const a=ARTIFACTS[key];if(!a)return null;const box=el("section",{class:"artifact-card","aria-label":a.title},[el("div",{class:"artifact-title"},a.title)]);for(const line of a.lines)box.appendChild(el("p",{},line));return box;}

function choice(d,pendingVal,onChange){const f=el("fieldset",{class:"choice-group"},[el("legend",{class:"sr-only"},d.prompt)]);for(const o of d.choices){const id=`c-${d.id||"r"}-${o.key}`,i=el("input",{type:"radio",name:d.id||"reassess",id,value:o.key,onchange:()=>onChange(o.key)});if(pendingVal===o.key)i.checked=true;f.appendChild(el("label",{for:id,class:"choice-option"},[i,el("span",{class:"choice-key"},o.key),el("span",{},o.text)]));}return f;}
function multi(d){if(!Array.isArray(pending))pending=[];const f=el("fieldset",{class:"choice-group"},[el("legend",{class:"sr-only"},d.prompt)]);for(const o of d.options){const id=`m-${d.id}-${o.key}`,i=el("input",{type:"checkbox",id,value:o.key,onchange:e=>{const s=new Set(pending);e.target.checked?s.add(o.key):s.delete(o.key);pending=[...s];}});if(pending.includes(o.key))i.checked=true;f.appendChild(el("label",{for:id,class:"choice-option"},[i,el("span",{},o.text)]));}return f;}
function categorize(d){if(!pending||typeof pending!=="object"||Array.isArray(pending))pending={};const wrap=el("div",{class:"categorize-group"});for(const item of d.items){const row=el("fieldset",{class:"categorize-row"},[el("legend",{class:"categorize-item-text"},item.text)]);for(const b of d.buckets){const id=`cat-${d.id}-${item.key}-${b.key}`,i=el("input",{type:"radio",name:`cat-${d.id}-${item.key}`,id,value:b.key,onchange:()=>{pending={...pending,[item.key]:b.key};}});if(pending[item.key]===b.key)i.checked=true;row.appendChild(el("label",{for:id,class:"choice-option categorize-bucket-option"},[i,el("span",{},b.label)]));}wrap.appendChild(row);}return wrap;}

function control(d){if(d.type==="choice")return choice(d,pending,v=>pending=v);if(d.type==="categorize")return categorize(d);return multi(d);}
function complete(d){if(d.type==="choice")return typeof pending==="string";if(d.type==="categorize")return pending&&typeof pending==="object"&&!Array.isArray(pending)&&d.items.every(i=>pending[i.key]);return Array.isArray(pending)&&pending.length>0;}

function progress(id){const p=getProgress(id),s=getStageForDecision(id),si=STAGES.findIndex(x=>x.id===s.id)+1;return el("div",{class:"progress-bar",role:"status"},[el("div",{class:"progress-text"},`Stage ${si} of ${STAGES.length}: ${s.title} — Decision ${p.current} of ${p.total}`),el("div",{class:"progress-track"},[el("div",{class:"progress-fill",style:`width:${p.current/p.total*100}%`})])]);}

function feedbackPanel(id){
  const d=DECISIONS[id],r=state.decisions[id],ok=r.finalCorrect;
  const p=el("div",{class:`feedback-panel ${ok?"feedback-correct":"feedback-incorrect"}`,role:"alert"},[el("p",{class:"feedback-heading"},ok?"Correct":"Not yet"),el("p",{},ok?d.correctFeedback:d.remediation)]);
  const cf=d.criticalFailureFamily;
  if(cf&&state.criticalHistory[cf].triggered)p.appendChild(el("p",{class:"feedback-escalation"},`This is one of the six controlled critical-failure families (${cf}). Your first attempt has been preserved. Resolving it requires a separate reassessment with different facts, after the main scenario — correcting this screen does not clear it.`));
  const advance=shouldAdvance(state,id);
  p.appendChild(el("button",{type:"button",class:"btn btn-primary",onclick:()=>{
    if(advance){const next=getNextDecisionId(id);pending=null;feedback=false;if(next)state={...state,currentDecisionId:next};else state={...state,status:computeSimulationStatus(state)};save(state);render();}
    else{feedback=false;pending=null;render();}
  }},advance?"Continue":"Try again"));
  return p;
}

function decision(id){
  const d=DECISIONS[id],c=el("div",{class:"decision-screen"},[progress(id)]);
  if(d.artifact)c.appendChild(artifact(d.artifact));
  c.appendChild(el("h2",{class:"decision-prompt"},d.prompt));
  if(!feedback){
    c.appendChild(control(d));
    c.appendChild(el("button",{type:"button",class:"btn btn-primary",onclick:()=>{if(!complete(d))return;state=submitAttempt(state,id,pending,Date.now());save(state);feedback=true;render();}},"Submit"));
  } else c.appendChild(feedbackPanel(id));
  return c;
}

function reassessmentScreen(){
  const families=getTriggeredUnresolvedFamilies(state);
  const cf=families[reassessQueueIndex]||families[0];
  const r=REASSESSMENTS[cf];
  const c=el("div",{class:"decision-screen reassessment-screen"},[
    el("div",{class:"progress-text"},`Critical Reassessment — ${families.length} family/families require resolution`),
    el("h1",{class:"reassessment-title"},`${cf}: ${CRITICAL_FAMILIES[cf].label}`),
    el("p",{class:"reassessment-context"},r.stageContext),
  ]);
  if(!reassessFeedback){
    c.appendChild(el("h2",{class:"decision-prompt"},r.prompt));
    c.appendChild(choice({...r,id:null},reassessPending,v=>reassessPending=v));
    c.appendChild(el("button",{type:"button",class:"btn btn-primary",onclick:()=>{if(typeof reassessPending!=="string")return;state=submitCriticalReassessment(state,cf,reassessPending,Date.now());save(state);reassessFeedback=true;render();}},"Submit Reassessment"));
  } else {
    const h=state.criticalHistory[cf],ok=h.reassessment.correct;
    c.appendChild(el("div",{class:`feedback-panel ${ok?"feedback-correct":"feedback-incorrect"}`,role:"alert"},[el("p",{class:"feedback-heading"},ok?"Resolved by Reassessment":"Not yet resolved"),el("p",{},ok?r.correctFeedback:r.remediation)]));
    c.appendChild(el("button",{type:"button",class:"btn btn-primary",onclick:()=>{
      reassessPending=null;reassessFeedback=false;
      const stillUnresolved=getTriggeredUnresolvedFamilies(state);
      if(stillUnresolved.length>0){reassessQueueIndex=0;}
      else{state={...state,status:computeSimulationStatus(state),completedAt:Date.now()};}
      save(state);render();
    }},getTriggeredUnresolvedFamilies(state).length>0?"Continue":"Finish"));
  }
  return c;
}

function start(){
  return el("div",{class:"start-screen"},[
    el("h1",{},"Module 09 — Booking Control Desk"),
    el("p",{},"A twelve-stage booking-control simulation. Interpret an M08 negotiation handoff, authenticate a rate confirmation, reconcile verbal and written terms, classify discrepancies, correct and escalate within supplied authority, build a traceable booking record, assemble a controlled dispatch packet, and issue a defensible BOOKED / HOLD / ESCALATE closeout and M10 handoff."),
    el("p",{},"Operating framework: NEGOTIATION HANDOFF → VERIFY AGREEMENT → RECEIVE DOCUMENT → AUTHENTICATE / IDENTIFY → READ ALL MATERIAL TERMS → RECONCILE VERBAL vs WRITTEN → CLASSIFY DISCREPANCIES → CORRECT / ESCALATE → CONFIRM AUTHORITY → ACCEPT / SIGN WITHIN AUTHORITY → BUILD BOOKING RECORD → BUILD DISPATCH PACKET → ISSUE CONTROLLED DRIVER HANDOFF → RECORD COMPETENCY."),
    el("button",{type:"button",class:"btn btn-primary btn-large",onclick:()=>{state={...state,startedAt:state.startedAt||Date.now()};save(state);render();}},state.startedAt?"Resume Simulation":"Start Simulation"),
  ]);
}

function done(){
  const f=computeFirstAttemptScore(state),m=computeFinalMasteryScore(state),r=computeRemediationCount(state),cs=computeCompetencyStatus(state),cfs=computeCriticalFailureStatus(state);
  const c=el("div",{class:"completion-screen"},[el("h1",{},"Booking Control Closed Out"),el("p",{},"You completed the M09 booking-control workflow. BOOKED / DISPATCH PACKET READY is an M09 state — it does not certify HOS feasibility, trip-plan completion, active monitoring, or billing; those belong to M10 through M14.")]);
  c.appendChild(el("div",{class:"completion-stats"},[
    el("div",{class:"stat"},[el("div",{class:"stat-label"},"First Attempt"),el("div",{class:"stat-value"},`${f.correct} / ${f.total}`)]),
    el("div",{class:"stat"},[el("div",{class:"stat-label"},"Final Mastery"),el("div",{class:"stat-value"},`${m.correct} / ${m.total}`)]),
    el("div",{class:"stat"},[el("div",{class:"stat-label"},"Remediation"),el("div",{class:"stat-value"},String(r))]),
  ]));
  const cflist=el("div",{class:"competency-summary"},[el("h2",{},"Critical-Failure Family Summary (M09-CF-01–06)")]);
  for(const cf of Object.keys(CRITICAL_FAMILIES))cflist.appendChild(el("div",{class:"competency-row"},[el("span",{},`${cf}: ${CRITICAL_FAMILIES[cf].label}`),el("span",{class:"competency-status"},cfs[cf])]));
  c.appendChild(cflist);
  const list=el("div",{class:"competency-summary"},[el("h2",{},"Competency Summary")]);
  for(const[code,label]of Object.entries(COMPETENCY_LABELS))list.appendChild(el("div",{class:"competency-row"},[el("span",{},`${code}: ${label}`),el("span",{class:"competency-status"},cs[code]||"In Progress")]));
  c.appendChild(list);
  c.appendChild(el("p",{class:"next-step"},"This build preserves simulation evidence only in local browser storage — a local demonstration convenience, not durable LMS/student-account storage. Durable production records and release-layer QA remain deferred."));
  return c;
}

function reset(){return el("button",{type:"button",class:"btn btn-text reset-btn",onclick:()=>{if(!confirm("Resetting erases this browser's SIM-009 attempt history. Reset?"))return;state=createInitialState();pending=null;feedback=false;reassessPending=null;reassessFeedback=false;reassessQueueIndex=0;save(state);render();}},"Reset simulation")}

function render(){
  root.innerHTML="";
  root.appendChild(el("header",{class:"app-header"},[el("div",{class:"app-title"},"Elite Dispatcher Academy — SIM-009"),reset()]));
  let mainContent;
  const mainScenarioDone=Object.keys(state.decisions).every(id=>state.decisions[id].finalCorrect===true);
  if(!state.startedAt)mainContent=start();
  else if(mainScenarioDone && getTriggeredUnresolvedFamilies(state).length>0)mainContent=reassessmentScreen();
  else if(state.status==="COMPLETE")mainContent=done();
  else mainContent=decision(state.currentDecisionId);
  root.appendChild(el("main",{},mainContent));
}
render();
