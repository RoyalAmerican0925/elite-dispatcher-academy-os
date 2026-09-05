// SIM-008 — Broker Negotiation Lab. Fictional instructional case data.
// Premium architecture: 12 progressive stages, 24 meaningful decisions,
// 15 competency families, exactly six critical-failure families.

export const STAGES = [
  {id:"SIM08-S1",title:"Case Intake & Position Build",decisionIds:["SIM08-D01","SIM08-D02"]},
  {id:"SIM08-S2",title:"Missing-Fact Verification & Truthful Opening",decisionIds:["SIM08-D03","SIM08-D04"]},
  {id:"SIM08-S3",title:"Discovery & Broker-Statement Analysis",decisionIds:["SIM08-D05","SIM08-D06"]},
  {id:"SIM08-S4",title:"Counter & Truthful Leverage",decisionIds:["SIM08-D07","SIM08-D08"]},
  {id:"SIM08-S5",title:"Conditional Trade & Agreement-Specific Terms",decisionIds:["SIM08-D09","SIM08-D10"]},
  {id:"SIM08-S6",title:"Vague Terms & Floor Discipline",decisionIds:["SIM08-D11","SIM08-D12"]},
  {id:"SIM08-S7",title:"Material Change & Position Recalibration",decisionIds:["SIM08-D13","SIM08-D20"]},
  {id:"SIM08-S8",title:"Broker Pressure & Professional Resistance",decisionIds:["SIM08-D14","SIM08-D21"]},
  {id:"SIM08-S9",title:"Authority Boundary & Escalation",decisionIds:["SIM08-D15","SIM08-D22"]},
  {id:"SIM08-S10",title:"Closeout Classification & Negotiation Record",decisionIds:["SIM08-D16","SIM08-D17"]},
  {id:"SIM08-S11",title:"Agreement-in-Principle & Module 09 Handoff",decisionIds:["SIM08-D18","SIM08-D23"]},
  {id:"SIM08-S12",title:"Professional Decline & Final Disposition",decisionIds:["SIM08-D19","SIM08-D24"]},
];

export const ARTIFACTS = {
  intake:{title:"Negotiation Intake — Crestline Freight Solutions",lines:["Equipment: verified 53-ft dry van; truck position: Chicago, IL","Module 07 supplied economics: target $2,650 all-in; floor/minimum $2,300 all-in; below $2,300 requires carrier authorization","Broker opening rate: $2,050","An old unrelated lane rate and an assumed past pickup pattern are present in the file but are not verified facts for this load."]},
  missingFact:{title:"Incomplete Load File",lines:["Posting does not state live unload versus drop-and-hook.","That distinction may materially affect driver time and equipment turn."]},
  openingCall:{title:"Call Opening",lines:["Broker asks whether the truck is reefer-capable if commodity requirements change.","Verified equipment: dry van only; no reefer capability."]},
  brokerObjection:{title:"Broker Resistance",lines:["Broker: 'Everyone is running this lane for $2,100.'","No independent verification of that market claim has been obtained."]},
  counterSetup:{title:"Prepared Counter Position",lines:["Supplied target remains $2,650.","Internal economics support the position but do not have to be disclosed line by line."]},
  leverageEvent:{title:"Leverage Temptation",lines:["No competing offer actually exists.","A dispatcher considers claiming another broker offered $2,400 to create pressure."]},
  tradeSetup:{title:"Trade Opportunity",lines:["Broker offers $2,250, below supplied floor.","Broker says destination can be guaranteed drop-and-hook if the rate is accepted as-is."]},
  termsEvent:{title:"Accessorial Statement",lines:["Broker: 'We'll cover detention after a while.'","Trigger, amount/method, evidence requirement and reporting process are not yet defined."]},
  vagueStatement:{title:"General Assurance",lines:["Broker: 'We usually take care of our good carriers on stuff like that.'","No specific commitment or measurable term was stated."]},
  floorApproach:{title:"Offer at Floor",lines:["Broker moves to $2,300 exactly.","The supplied floor is $2,300; no authorization exists for anything below it."]},
  factChange:{title:"Material Fact Change",lines:["Pickup changes from a flexible window to a fixed 6:00 AM appointment.","That can alter driver timing and the usefulness of the prior negotiating position."]},
  recalibration:{title:"Recalibration Evidence",lines:["Carrier confirms the 6:00 AM appointment is feasible but says the tighter timing eliminates any willingness to move below $2,300.","Target remains $2,650; authorized floor remains $2,300."]},
  pressureMoment:{title:"Two-Minute Pressure",lines:["Broker demands an immediate answer and threatens to move the load.","No new material load fact accompanies the pressure."]},
  silenceMoment:{title:"Broker Silence",lines:["After your counter, the broker is silent for several seconds.","There is no new offer and no new factual information."]},
  authorityFile:{title:"Below-Floor Offer",lines:["Broker offers $2,275.","Supplied floor is $2,300 and no below-floor authorization is on file."]},
  authorityCommitment:{title:"Unauthorized Commitment Pressure",lines:["Broker asks: 'If I keep it at $2,300, can you promise right now the driver will accept any overnight layover if the receiver changes the appointment?'","No carrier authorization exists to commit the driver to an unspecified layover condition."]},
  closeoutFile:{title:"Closeout Facts",lines:["$2,275 was declined/escalated; carrier reauthorized holding at $2,300 and no lower; broker later agreed to $2,300.","6:00 AM appointment is confirmed.","Detention was discussed but trigger/amount/evidence/process remain unresolved.","Drop-and-hook was mentioned but never established as a confirmed term."]},
  documentationFile:{title:"Negotiation Record",lines:["A defensible record distinguishes AGREED IN PRINCIPLE, UNRESOLVED and NOT ESTABLISHED.","It records next action without rewriting the history into a cleaner story."]},
  handoffFile:{title:"Module 09 Handoff",lines:["Verbal agreement-in-principle reached at $2,300 within supplied authority.","No written rate confirmation has been received or reviewed."]},
  handoffChecklist:{title:"Handoff Checklist",lines:["Carry forward agreed rate and confirmed appointment.","Flag unresolved detention specifics and unestablished drop-and-hook.","Status must remain pending booking control until Module 09 document review."]},
  declineScenario:{title:"Separate Opportunity",lines:["A different load requires a delivery appointment the verified driver cannot make.","Broker refuses to move the appointment; no authorization exists to accept an infeasible load."]},
  finalDisposition:{title:"Final Case State",lines:["Primary negotiation: agreement in principle at $2,300, pending Module 09 booking controls.","Separate infeasible opportunity: declined professionally.","Unresolved detention details remain documented as unresolved, not invented or silently dropped."]},
};

export const COMPETENCY_LABELS = {
  "M08-C01":"Build negotiation position from verified load/carrier facts",
  "M08-C02":"Convert M07 economics into target/floor/walk-away positions",
  "M08-C03":"Distinguish asking rate, target, floor/minimum and walk-away",
  "M08-C04":"Open professionally without misrepresentation",
  "M08-C05":"Ask purposeful discovery questions and isolate missing facts",
  "M08-C06":"Listen for constraints, objections, assumptions and usable evidence",
  "M08-C07":"Construct an evidence-supported counteroffer",
  "M08-C08":"Use truthful leverage and reject fabricated leverage",
  "M08-C09":"Use conditional trades instead of uncontrolled concessions",
  "M08-C10":"Clarify agreement-specific terms without inventing universal amounts",
  "M08-C11":"Maintain professional communication under resistance",
  "M08-C12":"Stay within supplied authority and escalate when needed",
  "M08-C13":"Confirm agreed, unresolved and unestablished terms accurately",
  "M08-C14":"Document negotiation and hand off to M09 without false booking claims",
  "M08-C15":"Decline professionally when an opportunity fails carrier requirements",
};

const choice=(id,stageId,competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,extra={})=>({id,stageId,type:"choice",competencies:Array.isArray(competencies)?competencies:[competencies],competency:Array.isArray(competencies)?competencies[0]:competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,...extra});
const multi=(id,stageId,competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,extra={})=>({id,stageId,type:"multiselect",competencies:Array.isArray(competencies)?competencies:[competencies],competency:Array.isArray(competencies)?competencies[0]:competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,...extra});
const categorize=(id,stageId,competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,extra={})=>({id,stageId,type:"categorize",competencies:Array.isArray(competencies)?competencies:[competencies],competency:Array.isArray(competencies)?competencies[0]:competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,...extra});

export const DECISIONS = {
  "SIM08-D01":multi("SIM08-D01","SIM08-S1",["M08-C01","M08-C02"],"intake","Select the facts that legitimately belong in the pre-call negotiating position.",[
    {key:"equipment",text:"Verified equipment and current truck position"},{key:"target",text:"Supplied $2,650 target"},{key:"floor",text:"Supplied $2,300 floor"},{key:"asking",text:"Broker's $2,050 opening rate"},{key:"oldLane",text:"Unrelated old lane rate"},{key:"assumedPattern",text:"Unverified assumed pickup pattern"}
  ],["equipment","target","floor","asking"],"Correct. Build from verified and supplied facts, not unrelated or assumed material.","Separate facts supplied for this load from historical noise and assumptions."),

  "SIM08-D02":choice("SIM08-D02","SIM08-S1",["M08-C02","M08-C03"],"intake","What does the $2,050 figure represent?",[
    {key:"A",text:"Carrier floor"},{key:"B",text:"Carrier target"},{key:"C",text:"Broker asking/opening rate"},{key:"D",text:"Carrier walk-away authorization"}
  ],"C","Correct. Asking rate is the broker's opening position, not the carrier's target or floor.","Keep asking rate, target, floor and authority limit distinct."),

  "SIM08-D03":choice("SIM08-D03","SIM08-S2","M08-C05","missingFact","Live unload versus drop-and-hook is missing. What is the correct action?",[
    {key:"A",text:"Assume drop-and-hook"},{key:"B",text:"Assume live unload"},{key:"C",text:"VERIFY with the broker before relying on either condition"},{key:"D",text:"Ignore the distinction"}
  ],"C","Correct. Material missing facts are verified, not converted into assumptions.","Ask a direct discovery question rather than filling the gap yourself."),

  "SIM08-D04":choice("SIM08-D04","SIM08-S2","M08-C04","openingCall","How should you answer the broker's reefer-capability question?",[
    {key:"A",text:"Say yes to keep the opportunity open"},{key:"B",text:"State accurately that the truck is dry van only"},{key:"C",text:"Say capability is 'probably fine'"},{key:"D",text:"Avoid answering and move directly to rate"}
  ],"B","Correct. Material equipment facts must be represented accurately.","Do not misrepresent equipment to preserve negotiating leverage.",{criticalFailureFamily:"CF-03",criticalWrongResponse:"A",criticalWrongResponses:["A"],criticalFailureLabel:"Material fact misrepresentation"}),

  "SIM08-D05":multi("SIM08-D05","SIM08-S3","M08-C06","brokerObjection","The broker says everyone runs the lane for $2,100. Which statements are accurate?",[
    {key:"unverified",text:"The market claim is not independently verified"},{key:"constraintPossible",text:"It may reflect a constraint, tactic or disagreement; you do not yet know"},{key:"noAutoConcede",text:"It is not a reason to automatically abandon the prepared position"},{key:"noAccuse",text:"It is not grounds to accuse the broker of lying"},{key:"established",text:"It is now established market fact because the broker said it"}
  ],["unverified","constraintPossible","noAutoConcede","noAccuse"],"Correct. Treat the statement as negotiation evidence, not automatically as verified market truth.","Separate what the broker said from what has actually been established."),

  "SIM08-D06":choice("SIM08-D06","SIM08-S3","M08-C05","brokerObjection","Which follow-up best continues purposeful discovery?",[
    {key:"A",text:"'Where do you need to be to make this work?'"},{key:"B",text:"'Are you lying to me?'"},{key:"C",text:"'Okay, we'll come down to $2,100.'"},{key:"D",text:"Change the subject without asking anything"}
  ],"A","Correct. It seeks the broker's actual constraint without accusing or self-negotiating.","Use questions that produce decision-useful information."),

  "SIM08-D07":multi("SIM08-D07","SIM08-S4","M08-C07","counterSetup","Select every acceptable form of counter from the prepared $2,650 position.",[
    {key:"grounded",text:"'Based on the total-trip requirement, we're at $2,650. Can you get there?'"},{key:"concise",text:"'We're at $2,650. Can you work with that?'"},{key:"random",text:"'Let's say $2,600; that sounds about right.'"},{key:"inventedMarket",text:"'Every carrier gets at least $2,700 here.'"},{key:"costDump",text:"Recite every internal cost detail even though the broker did not ask"}
  ],["grounded","concise"],"Correct. A counter may be concise or briefly grounded; it need not reveal internal cost detail.","Evidence-supported does not mean random, fabricated or over-explained."),

  "SIM08-D08":choice("SIM08-D08","SIM08-S4","M08-C08","leverageEvent","Can you claim a competing $2,400 offer that does not exist?",[
    {key:"A",text:"Yes, as a standard pressure tactic"},{key:"B",text:"No; use only truthful leverage"},{key:"C",text:"Yes, if the broker cannot verify it"},{key:"D",text:"Yes, if you avoid giving the exact broker name"}
  ],"B","Correct. Fabricated leverage is prohibited by the module's occupational standard.","Negotiation skill does not require invented facts.",{criticalFailureFamily:"CF-02",criticalWrongResponse:"A",criticalWrongResponses:["A","C","D"],criticalFailureLabel:"Fabricated leverage"}),

  "SIM08-D09":choice("SIM08-D09","SIM08-S5","M08-C09","tradeSetup","Broker offers $2,250 plus a drop-and-hook guarantee. What is the strongest response?",[
    {key:"A",text:"Accept below floor because drop-and-hook has value"},{key:"B",text:"Use a conditional trade while maintaining supplied authority; document the added term"},{key:"C",text:"Ignore the added term completely"},{key:"D",text:"Accept now and document later"}
  ],"B","Correct. Trade something for something without surrendering the authority boundary.","A concession should be conditional and documented, not uncontrolled."),

  "SIM08-D10":multi("SIM08-D10","SIM08-S5","M08-C10","termsEvent","Before detention can be treated as a specific agreed term, what must be resolved?",[
    {key:"trigger",text:"TRIGGER"},{key:"amount",text:"AMOUNT/METHOD"},{key:"evidence",text:"EVIDENCE"},{key:"process",text:"PROCESS"},{key:"universal",text:"Use an Academy-wide universal detention rate"},{key:"assurance",text:"Treat the general assurance as enough"}
  ],["trigger","amount","evidence","process"],"Correct. Agreement-specific terms require trigger, amount/method, evidence and process.","Do not invent universal accessorial terms or upgrade vague assurances into specific commitments."),

  "SIM08-D11":choice("SIM08-D11","SIM08-S6","M08-C10","vagueStatement","How should 'we usually take care of our good carriers' be classified?",[
    {key:"A",text:"Agreed accessorial term"},{key:"B",text:"Vague and unresolved"},{key:"C",text:"Completed written commitment"},{key:"D",text:"Proof of a universal broker policy"}
  ],"B","Correct. General goodwill language is not a specific negotiated term.","Keep it unresolved until the required details are actually agreed."),

  "SIM08-D12":choice("SIM08-D12","SIM08-S6",["M08-C02","M08-C03"],"floorApproach","The broker reaches exactly $2,300. How should you interpret that rate?",[
    {key:"A",text:"At supplied floor and within stated rate authority"},{key:"B",text:"Below floor"},{key:"C",text:"Same as the $2,650 target"},{key:"D",text:"Automatically unacceptable because it is not target"}
  ],"A","Correct. At floor is not below floor.","Use the supplied threshold literally; do not collapse target and floor."),

  "SIM08-D13":choice("SIM08-D13","SIM08-S7","M08-C01","factChange","The pickup changes to a fixed 6:00 AM appointment. What should happen next?",[
    {key:"A",text:"Ignore the change because the position is already set"},{key:"B",text:"Re-evaluate the negotiating position using the new material fact"},{key:"C",text:"Automatically accept the new appointment"},{key:"D",text:"Automatically end the call"}
  ],"B","Correct. Material facts can change the negotiating position.","A prepared position is evidence-driven, not frozen against changed facts."),

  "SIM08-D20":choice("SIM08-D20","SIM08-S7",["M08-C02","M08-C12"],"recalibration","Carrier confirms the appointment is feasible but reaffirms no movement below $2,300. What is the correct recalibrated position?",[
    {key:"A",text:"Target $2,650; floor remains $2,300; no below-floor authority"},{key:"B",text:"Lower floor to $2,275 because the appointment is feasible"},{key:"C",text:"Make $2,300 the new target and $2,250 the new floor"},{key:"D",text:"Remove the floor because the broker is negotiating in good faith"}
  ],"A","Correct. Recalibration uses new evidence without inventing new authority.","Changed facts can alter strategy, but they do not create authorization that was never supplied."),

  "SIM08-D14":choice("SIM08-D14","SIM08-S8","M08-C11","pressureMoment","The broker gives a two-minute ultimatum without new material facts. What is the best response?",[
    {key:"A",text:"Accept immediately to avoid losing the load"},{key:"B",text:"Stay professional and respond according to verified position and authority"},{key:"C",text:"Match the pressure with aggressive language"},{key:"D",text:"Invent a competing offer to regain leverage"}
  ],"B","Correct. Artificial urgency does not change economics or authority.","Professional resistance means composure, not panic or escalation."),

  "SIM08-D21":choice("SIM08-D21","SIM08-S8",["M08-C06","M08-C11"],"silenceMoment","After your counter, the broker goes silent. What is the strongest immediate move?",[
    {key:"A",text:"Immediately lower your own rate to fill the silence"},{key:"B",text:"Allow the silence briefly and wait for new information before moving your position"},{key:"C",text:"Accuse the broker of playing games"},{key:"D",text:"End the call without giving the broker time to respond"}
  ],"B","Correct. Silence is not itself new evidence requiring a concession.","Do not negotiate against yourself just because the other side pauses."),

  "SIM08-D15":choice("SIM08-D15","SIM08-S9","M08-C12","authorityFile","Broker offers $2,275 with no below-floor authorization. What is the correct disposition?",[
    {key:"A",text:"Accept because it is only $25 below floor"},{key:"B",text:"DECLINE or ESCALATE for actual authorization"},{key:"C",text:"Accept and tell the carrier afterward"},{key:"D",text:"Treat $25 as rounding and proceed"}
  ],"B","Correct. Below floor is outside supplied rate authority regardless of gap size.","Do not convert proximity to authorization.",{criticalFailureFamily:"CF-01",criticalWrongResponse:"A",criticalWrongResponses:["A","C","D"],criticalFailureLabel:"Unauthorized below-floor acceptance"}),

  "SIM08-D22":choice("SIM08-D22","SIM08-S9","M08-C12","authorityCommitment","Can you promise the driver will accept any unspecified overnight layover if the receiver changes the appointment?",[
    {key:"A",text:"Yes; promise it to preserve the $2,300 deal"},{key:"B",text:"No; state that any materially changed layover condition requires confirmation within supplied carrier authority"},{key:"C",text:"Yes; dispatchers can commit operational conditions if the rate is acceptable"},{key:"D",text:"Tell the broker the driver will probably accept it, but avoid documenting the promise"}
  ],"B","Correct. Rate authority is not blanket authority to commit unspecified operating conditions.","Escalate or verify authority instead of promising beyond what was supplied.",{criticalFailureFamily:"CF-04",criticalWrongResponse:"A",criticalWrongResponses:["A","C"],criticalFailureLabel:"Unauthorized carrier commitment"}),

  "SIM08-D16":categorize("SIM08-D16","SIM08-S10","M08-C13","closeoutFile","Classify each negotiation item into the correct closeout bucket.",[
    {key:"rate",text:"Rate $2,300"},{key:"appointment",text:"6:00 AM appointment"},{key:"detention",text:"Detention specifics"},{key:"dropHook",text:"Drop-and-hook availability"}
  ],[
    {key:"agreed",label:"AGREED IN PRINCIPLE"},{key:"unresolved",label:"UNRESOLVED"},{key:"notEstablished",label:"NOT ESTABLISHED"}
  ],{rate:"agreed",appointment:"agreed",detention:"unresolved",dropHook:"notEstablished"},"Correct. Agreement state must match what was actually established.","Do not upgrade unresolved or merely mentioned terms into agreement.",{criticalFailureFamily:"CF-05",criticalWrongResponse:{rate:"agreed",appointment:"agreed",detention:"agreed",dropHook:"notEstablished"},criticalWrongResponses:[{rate:"agreed",appointment:"agreed",detention:"agreed",dropHook:"notEstablished"},{rate:"agreed",appointment:"agreed",detention:"unresolved",dropHook:"agreed"}],criticalFailureLabel:"False agreement state"}),

  "SIM08-D17":multi("SIM08-D17","SIM08-S10",["M08-C13","M08-C14"],"documentationFile","What belongs in the negotiation record?",[
    {key:"agreed",text:"Actually agreed terms"},{key:"unresolved",text:"Unresolved terms"},{key:"notEstablished",text:"Terms not established"},{key:"nextAction",text:"Next required Module 09 action"},{key:"cleaner",text:"Omit unresolved items to make the record cleaner"},{key:"booked",text:"Mark the load booked because the rate was spoken verbally"}
  ],["agreed","unresolved","notEstablished","nextAction"],"Correct. The record preserves the real state of the negotiation and its next control point.","Documentation should not erase ambiguity or claim a later workflow step is already complete."),

  "SIM08-D18":choice("SIM08-D18","SIM08-S11","M08-C14","handoffFile","A verbal agreement-in-principle exists at $2,300. Is the load formally booked?",[
    {key:"A",text:"Yes; verbal agreement equals completed booking"},{key:"B",text:"No; status is AGREED IN PRINCIPLE / PENDING BOOKING CONTROL until Module 09 review"},{key:"C",text:"Yes, if the broker sounds trustworthy"},{key:"D",text:"Yes, if the rate is within authority"}
  ],"B","Correct. Negotiation agreement and formal booking are separate controls.","Module 09 owns rate-confirmation review and formal booking/document handoff.",{criticalFailureFamily:"CF-06",criticalWrongResponse:"A",criticalWrongResponses:["A","C","D"],criticalFailureLabel:"Premature booking representation",finalStatusSuccess:"AGREED_IN_PRINCIPLE_PENDING_BOOKING_CONTROL"}),

  "SIM08-D23":multi("SIM08-D23","SIM08-S11","M08-C14","handoffChecklist","What must be carried into the Module 09 handoff?",[
    {key:"rate",text:"Agreed-in-principle $2,300 rate"},{key:"appointment",text:"Confirmed 6:00 AM appointment"},{key:"detention",text:"Unresolved detention specifics flagged as unresolved"},{key:"dropHook",text:"Drop-and-hook flagged as not established"},{key:"pretendBooked",text:"A completed-booking status"}
  ],["rate","appointment","detention","dropHook"],"Correct. Handoff preserves both agreed terms and unresolved/unestablished items.","A good handoff transfers the truth, not just the favorable pieces."),

  "SIM08-D19":choice("SIM08-D19","SIM08-S12","M08-C15","declineScenario","The separate opportunity requires an appointment the driver cannot make and the broker will not move it. What is the correct response?",[
    {key:"A",text:"Accept and hope the driver can make it work"},{key:"B",text:"Decline professionally because the opportunity fails a verified carrier requirement"},{key:"C",text:"Accept and renegotiate after booking"},{key:"D",text:"Ignore the broker without closing the conversation"}
  ],"B","Correct. A professional decline is an operationally valid outcome.","Do not create downstream problems by accepting an infeasible opportunity."),

  "SIM08-D24":choice("SIM08-D24","SIM08-S12",["M08-C13","M08-C14","M08-C15"],"finalDisposition","Which final disposition accurately describes the case?",[
    {key:"A",text:"Primary load BOOKED at $2,300; detention assumed payable; second load accepted"},{key:"B",text:"Primary load AGREED IN PRINCIPLE / PENDING M09 BOOKING CONTROL; unresolved detention stays flagged; separate infeasible load declined"},{key:"C",text:"Primary load declined because target was not achieved; second load accepted"},{key:"D",text:"Both loads booked because the dispatcher secured acceptable rates"}
  ],"B","Correct. The final record preserves negotiation outcome, unresolved terms and Module 09 boundary.","Final disposition must match both authority and workflow state.",{finalStatusSuccess:"AGREED_IN_PRINCIPLE_PENDING_BOOKING_CONTROL"}),
};

export const DECISION_ORDER = STAGES.flatMap(s=>s.decisionIds);

export const CRITICAL_FAILURE_FAMILIES = {
  "CF-01":"Knowingly accepts below supplied carrier minimum/floor without required authorization",
  "CF-02":"Fabricates competing offers, market facts, truck position, driver facts or other leverage",
  "CF-03":"Materially misrepresents carrier/truck/driver/load facts",
  "CF-04":"Commits carrier outside supplied authority",
  "CF-05":"Treats unresolved material term as agreed",
  "CF-06":"Represents agreement-in-principle as completed booking before Module 09 controls",
};

export const REASSESSMENTS = {
  "CF-01":choice("SIM08-R01","SIM08-R","M08-C12","authorityFile","Reassessment: New case. Floor is $2,450. Broker offers $2,425 and says the owner can be called later. What do you do?",[{key:"A",text:"Accept and call later"},{key:"B",text:"Decline or obtain authorization before acceptance"},{key:"C",text:"Round it to floor"}],"B","Correct.","This reassessment requires a fresh authority decision."),
  "CF-02":choice("SIM08-R02","SIM08-R","M08-C08","leverageEvent","Reassessment: You have no competing offer, but the broker asks whether another broker is paying more. What do you say?",[{key:"A",text:"Invent a higher offer"},{key:"B",text:"Use only truthful facts and do not invent a competing offer"},{key:"C",text:"Imply one exists without saying it directly"}],"B","Correct.","This is a materially different leverage fact pattern."),
  "CF-03":choice("SIM08-R03","SIM08-R","M08-C04","openingCall","Reassessment: The truck has no liftgate and the broker asks whether it does. What do you say?",[{key:"A",text:"Say yes to keep the load"},{key:"B",text:"State accurately that no liftgate is available"},{key:"C",text:"Say probably"}],"B","Correct.","This is a new material-fact representation test."),
  "CF-04":choice("SIM08-R04","SIM08-R","M08-C12","authorityCommitment","Reassessment: Broker asks you to promise a weekend layover that the carrier never authorized. What do you do?",[{key:"A",text:"Promise it because the rate is strong"},{key:"B",text:"Do not commit it without supplied authority; verify/escalate"},{key:"C",text:"Promise it verbally but omit it from notes"}],"B","Correct.","This is a new authority-commitment scenario."),
  "CF-05":categorize("SIM08-R05","SIM08-R","M08-C13","closeoutFile","Reassessment: New closeout. Sort the terms.",[{key:"rate",text:"Rate explicitly agreed"},{key:"tonu",text:"TONU mentioned but amount/process not resolved"},{key:"layover",text:"Layover never discussed"}],[{key:"agreed",label:"AGREED"},{key:"unresolved",label:"UNRESOLVED"},{key:"notEstablished",label:"NOT ESTABLISHED"}],{rate:"agreed",tonu:"unresolved",layover:"notEstablished"},"Correct.","This is a new agreement-state classification."),
  "CF-06":choice("SIM08-R06","SIM08-R","M08-C14","handoffFile","Reassessment: Broker verbally agrees to rate but written rate confirmation has not been reviewed. What status is correct?",[{key:"A",text:"BOOKED"},{key:"B",text:"AGREED IN PRINCIPLE / PENDING BOOKING CONTROL"},{key:"C",text:"DELIVERED"}],"B","Correct.","This is a new workflow-state case."),
};
