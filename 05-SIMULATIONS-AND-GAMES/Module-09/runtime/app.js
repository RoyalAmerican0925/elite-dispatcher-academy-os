import {DECISIONS,STAGES,ARTIFACTS,COMPETENCY_LABELS} from './content.js';
import {CRITICAL_FAMILIES,REASSESSMENTS} from './critical-controls.js';
import {createInitialState,submitAttempt,shouldAdvance,getNextDecisionId,submitCriticalReassessment,getTriggeredUnresolvedFamilies,computeSimulationStatus,computeFirstAttemptScore,computeFinalMasteryScore,computeRemediationCount,computeCompetencyStatus,computeCriticalFailureStatus,getStageForDecision,getProgress,normalizeLoadedState} from './logic.js';

const STORAGE_KEY='sim009-state-v2-game';
const root=document.getElementById('app');
let state=load()||createInitialState();
let pending=null,feedback=false,reassessPending=null,reassessFeedback=false;

function load(){try{const raw=localStorage.getItem(STORAGE_KEY);return raw?normalizeLoadedState(JSON.parse(raw)):null}catch{return null}}
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch{}}
function el(tag,attrs={},children=[]){const n=document.createElement(tag);for(const[k,v]of Object.entries(attrs)){if(v==null)continue;if(k==='class')n.className=v;else if(k.startsWith('on')&&typeof v==='function')n.addEventListener(k.slice(2),v);else n.setAttribute(k,v)}for(const c of [].concat(children)){if(c==null)continue;n.appendChild(typeof c==='string'?document.createTextNode(c):c)}return n}

function current(){return DECISIONS[state.currentDecisionId]}
function stageInfo(){const d=current(),s=getStageForDecision(d.id),p=getProgress(d.id);return {d,s,p,stageNo:STAGES.findIndex(x=>x.id===s.id)+1}}
function loadStateLabel(){const unresolved=getTriggeredUnresolvedFamilies(state).length;return unresolved?'HOLD — REVIEW REQUIRED':state.status==='COMPLETE'?'CLOSED':'BOOKING CONTROL ACTIVE'}

function documentViewer(d){const wrap=el('section',{class:'document-viewer panel','aria-label':'Document viewer'},[el('div',{class:'panel-kicker'},'DOCUMENT VIEWER')]);const a=d.artifact&&ARTIFACTS[d.artifact];if(a){wrap.appendChild(el('h2',{},a.title));for(const line of a.lines)wrap.appendChild(el('p',{},line))}else{wrap.appendChild(el('h2',{},'Booking File'));wrap.appendChild(el('p',{},'No new attachment. Work from the verified evidence already in the file.'))}return wrap}

function inbox(d){const {s,stageNo}=stageInfo();return el('aside',{class:'inbox-panel panel','aria-label':'Inbox and communications'},[
 el('div',{class:'panel-kicker'},'INBOX / COMMS'),
 el('div',{class:'message unread'},[el('strong',{},`Stage ${stageNo}: ${s.title}`),el('span',{},'New desk event')]),
 el('div',{class:'message'},[el('strong',{},'Operations'),el('span',{},d.prompt)]),
 el('div',{class:'message muted'},[el('strong',{},'Desk rule'),el('span',{},'Verify evidence. Do not guess, fabricate, or exceed supplied authority.')])
])}

function eventQueue(){const {stageNo,p}=stageInfo();return el('aside',{class:'event-queue panel','aria-label':'Event queue'},[
 el('div',{class:'panel-kicker'},'LIVE QUEUE'),
 el('div',{class:'queue-item active'},`Workflow stage ${stageNo} / ${STAGES.length}`),
 el('div',{class:'queue-item'},`Desk action ${p.current} / ${p.total}`),
 el('div',{class:'queue-item'},`${getTriggeredUnresolvedFamilies(state).length} critical review item(s)`)
])}

function actionControl(d){const box=el('div',{class:'action-control'});
 if(d.type==='categorize'){
   if(!pending||typeof pending!=='object'||Array.isArray(pending))pending={};
   for(const item of d.items){const row=el('div',{class:'work-row'},[el('div',{class:'work-item'},item.text)]);const select=el('select',{class:'desk-select','aria-label':item.text,onchange:e=>pending={...pending,[item.key]:e.target.value}},[el('option',{value:''},'Classify…')]);for(const b of d.buckets)select.appendChild(el('option',{value:b.key},b.label));if(pending[item.key])select.value=pending[item.key];row.appendChild(select);box.appendChild(row)}
 } else if(d.type==='choice'){
   for(const o of d.choices){box.appendChild(el('button',{type:'button',class:`action-card ${pending===o.key?'selected':''}`,onclick:()=>{pending=o.key;render()}},[el('span',{class:'action-code'},o.key),el('span',{},o.text)]))}
 } else {
   if(!Array.isArray(pending))pending=[];
   for(const o of d.options){const chosen=pending.includes(o.key);box.appendChild(el('button',{type:'button',class:`action-card ${chosen?'selected':''}`,onclick:()=>{const s=new Set(pending);chosen?s.delete(o.key):s.add(o.key);pending=[...s];render()}},o.text))}
 }
 return box
}
function complete(d){if(d.type==='choice')return typeof pending==='string';if(d.type==='categorize')return pending&&d.items.every(i=>pending[i.key]);return Array.isArray(pending)&&pending.length>0}

function consequence(d){const r=state.decisions[d.id],ok=r.finalCorrect;const cf=d.criticalFailureFamily;const panel=el('div',{class:`consequence ${ok?'safe':'risk'}`},[
 el('strong',{},'Operational consequence'),
 el('p',{},ok?d.correctFeedback:d.remediation)
 ]);if(cf&&state.criticalHistory[cf]?.triggered)panel.appendChild(el('p',{class:'critical-note'},`${cf} is now preserved in first-attempt history. Fixing the immediate desk action does not erase it; a different-facts reassessment is required.`));
 panel.appendChild(el('button',{class:'primary',type:'button',onclick:()=>{if(shouldAdvance(state,d.id)){const next=getNextDecisionId(d.id);pending=null;feedback=false;if(next)state={...state,currentDecisionId:next};else state={...state,status:computeSimulationStatus(state)};save();render()}else{pending=null;feedback=false;render()}}},shouldAdvance(state,d.id)?'Move to next desk event':'Correct the desk action'));
 return panel
}

function workbench(d){const box=el('section',{class:'booking-workbench panel','aria-label':'Booking workbench'},[
 el('div',{class:'panel-kicker'},'BOOKING WORKBENCH'),
 el('h2',{},'Current work order'),
 el('p',{class:'work-order'},d.prompt)
 ]);if(feedback){box.appendChild(consequence(d));return box}box.appendChild(actionControl(d));box.appendChild(el('button',{type:'button',class:'primary',disabled:complete(d)?null:'disabled',onclick:()=>{if(!complete(d))return;state=submitAttempt(state,d.id,pending,Date.now());save();feedback=true;render()}},'Commit desk action'));return box}

function statusBar(){return el('div',{class:'load-status-controls','aria-label':'Load status controls'},[
 el('span',{class:'status-label'},'LOAD STATUS'),el('strong',{},loadStateLabel()),
 el('span',{class:'status-chip'},'BOOK'),el('span',{class:'status-chip'},'HOLD'),el('span',{class:'status-chip'},'CORRECT'),el('span',{class:'status-chip'},'ESCALATE')
])}

function desk(){const d=current();return el('div',{class:'dispatcher-desktop'},[
 el('header',{class:'desk-header'},[el('div',{},[el('div',{class:'eyebrow'},'ELITE DISPATCHER ACADEMY · SIM-009'),el('h1',{},'Booking Desk: Save the Load')]),el('button',{class:'ghost',onclick:reset},'Reset shift')]),
 statusBar(),
 el('div',{class:'desk-grid'},[inbox(d),documentViewer(d),eventQueue(),workbench(d)])
])}

function start(){return el('div',{class:'start-screen'},[
 el('div',{class:'eyebrow'},'SIM-009 · OCCUPATIONAL GAME'),el('h1',{},'Booking Desk: Save the Load'),
 el('p',{},'You are taking over a live carrier-side booking desk. A negotiated load is arriving from Module 08. Messages, documents, revisions, authority limits, and driver handoff demands will hit your desk as the file moves.'),
 el('p',{},'Your job is not to chase points. Protect the carrier, preserve the evidence trail, correct bad paperwork, keep obsolete documents out of the dispatch packet, and close the load only when the booking controls support it.'),
 el('button',{class:'primary large',onclick:()=>{state={...state,startedAt:state.startedAt||Date.now()};save();render()}},state.startedAt?'Return to desk':'Clock in')
])}

function reassessment(){const cf=getTriggeredUnresolvedFamilies(state)[0],r=REASSESSMENTS[cf];if(!cf)return finish();const box=el('div',{class:'reassessment-card'},[el('div',{class:'eyebrow'},'QUALITY CONTROL CALLBACK'),el('h1',{},`${cf}: ${CRITICAL_FAMILIES[cf].label}`),el('p',{},r.stageContext),el('h2',{},r.prompt)]);if(!reassessFeedback){for(const o of r.choices)box.appendChild(el('button',{class:`action-card ${reassessPending===o.key?'selected':''}`,onclick:()=>{reassessPending=o.key;render()}},o.text));box.appendChild(el('button',{class:'primary',disabled:reassessPending?null:'disabled',onclick:()=>{if(!reassessPending)return;state=submitCriticalReassessment(state,cf,reassessPending,Date.now());save();reassessFeedback=true;render()}},'Commit reassessment action'))}else{const ok=state.criticalHistory[cf].reassessment.correct;box.appendChild(el('div',{class:`consequence ${ok?'safe':'risk'}`},[el('strong',{},ok?'Resolved by reassessment':'Still unresolved'),el('p',{},ok?r.correctFeedback:r.remediation)]));box.appendChild(el('button',{class:'primary',onclick:()=>{reassessPending=null;reassessFeedback=false;if(getTriggeredUnresolvedFamilies(state).length===0)state={...state,status:computeSimulationStatus(state),completedAt:Date.now()};save();render()}},'Continue quality-control review'))}return box}

function finish(){const first=computeFirstAttemptScore(state),mastery=computeFinalMasteryScore(state),rem=computeRemediationCount(state),comp=computeCompetencyStatus(state),cf=computeCriticalFailureStatus(state);const box=el('div',{class:'completion-screen'},[el('div',{class:'eyebrow'},'SHIFT CLOSEOUT'),el('h1',{},'Booking Desk Closed Out'),el('p',{},'The M09 file is closed. This does not certify M10 trip planning, M11 HOS, M12 monitoring, M13 exception handling, or M14 billing.')]);box.appendChild(el('div',{class:'stats'},[el('div',{},`First attempt: ${first.correct}/${first.total}`),el('div',{},`Final mastery: ${mastery.correct}/${mastery.total}`),el('div',{},`Corrections: ${rem}`)]));const summary=el('div',{class:'summary panel'},[el('h2',{},'Competency record')]);for(const[code,label]of Object.entries(COMPETENCY_LABELS))summary.appendChild(el('p',{},`${code} · ${label} — ${comp[code]||'In Progress'}`));for(const[id,item]of Object.entries(CRITICAL_FAMILIES))summary.appendChild(el('p',{},`${id} · ${item.label} — ${cf[id]}`));box.appendChild(summary);box.appendChild(el('p',{class:'fineprint'},'Browser storage is demonstration persistence only, not durable LMS/student-account evidence.'));return box}

function reset(){if(!confirm('Reset this training shift and erase this browser attempt history?'))return;state=createInitialState();pending=null;feedback=false;reassessPending=null;reassessFeedback=false;save();render()}
function render(){root.innerHTML='';const mainDone=Object.keys(state.decisions).every(id=>state.decisions[id].finalCorrect===true);if(!state.startedAt)root.appendChild(start());else if(mainDone&&getTriggeredUnresolvedFamilies(state).length)root.appendChild(reassessment());else if(state.status==='COMPLETE')root.appendChild(finish());else root.appendChild(desk())}
render();
