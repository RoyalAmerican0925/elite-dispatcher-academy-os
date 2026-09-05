// SIM-008 content data. Fictional training records; no sibling simulation imports.
// Curriculum-alignment repair pass 2026-09-04: rebuilt against the six actual
// Module 08 Student Manual parts (academy-master-architecture), not the master
// branch competency map alone. See agents/CLAUDE-SIM-008-CURRICULUM-ALIGNMENT-REPAIR-COMPLETE-2026-09-04.md
export const STAGES = [
  {id:"SIM08-S1",title:"Prepare — Position From Verified Facts",decisionIds:["SIM08-D01","SIM08-D02"]},
  {id:"SIM08-S2",title:"Verify Facts",decisionIds:["SIM08-D03"]},
  {id:"SIM08-S3",title:"Open the Call",decisionIds:["SIM08-D04"]},
  {id:"SIM08-S4",title:"Question / Listen",decisionIds:["SIM08-D05","SIM08-D06"]},
  {id:"SIM08-S5",title:"Counter",decisionIds:["SIM08-D07"]},
  {id:"SIM08-S6",title:"Leverage Event",decisionIds:["SIM08-D08"]},
  {id:"SIM08-S7",title:"Trade / Concession",decisionIds:["SIM08-D09"]},
  {id:"SIM08-S8",title:"Terms Beyond the Headline Rate",decisionIds:["SIM08-D10","SIM08-D11"]},
  {id:"SIM08-S9",title:"Approaching the Floor",decisionIds:["SIM08-D12"]},
  {id:"SIM08-S10",title:"Material Fact Change",decisionIds:["SIM08-D13"]},
  {id:"SIM08-S11",title:"Broker Pressure",decisionIds:["SIM08-D14"]},
  {id:"SIM08-S12",title:"Authority Boundary",decisionIds:["SIM08-D15"]},
  {id:"SIM08-S13",title:"Closeout Classification",decisionIds:["SIM08-D16"]},
  {id:"SIM08-S14",title:"Document the Negotiation",decisionIds:["SIM08-D17"]},
  {id:"SIM08-S15",title:"Module 09 Handoff",decisionIds:["SIM08-D18","SIM08-D19"]},
];

export const ARTIFACTS = {
  intake:{title:"Negotiation Intake — Crestline Freight Solutions",lines:["Represented carrier: Crestline Freight Solutions","Equipment: 53-ft dry van, verified current position Chicago, IL","Module 07 supplied economics: target $2,650 all-in; floor/minimum $2,300 all-in; walk-away below $2,300 without owner authorization","Broker: Apex Transit Brokerage — opening rate posted at $2,050","(Also on file, for reference: an unrelated lane's rate from three weeks ago, and this broker's usual pickup-window pattern on past loads — neither has been verified for this specific call)"]},
  positionFacts:{title:"Position Worksheet",lines:["Asking rate (broker's posted rate): $2,050","Target (supplied): $2,650","Floor/minimum (supplied): $2,300","Walk-away: below $2,300 without owner authorization","These four figures are distinct — do not treat any two as interchangeable"]},
  missingFact:{title:"Incomplete Load File",lines:["Broker's posting does not state whether this is a live unload or drop-and-hook","This is a material fact affecting driver time and equipment turn — not yet known"]},
  openingCall:{title:"Call Opening — Broker Asks About Equipment",lines:["Broker: 'Is this truck definitely reefer-capable in case the commodity changes?'","Actual verified equipment profile: dry van only, no reefer capability","Broker has not yet confirmed the commodity requires reefer"]},
  brokerObjection:{title:"Broker Resistance",lines:["Broker: 'That rate's too high for this lane, everyone's running it for $2,100.'","No independent verification of this market claim has been obtained"]},
  counterSetup:{title:"Counter Opportunity",lines:["Verified facts available if needed: fuel cost estimate from Module 07 analysis, deadhead-to-pickup distance, standard dwell time for this lane's typical facility","These facts support your position — they do not have to be recited to the broker on every counter"]},
  leverageEvent:{title:"Leverage Temptation",lines:["No other carrier or competing offer actually exists for this load right now","The dispatcher is considering telling the broker 'I have another broker offering $2,400 on a similar lane' to pressure the rate up"]},
  tradeSetup:{title:"Trade Opportunity",lines:["Broker offers $2,250, still under floor","Broker mentions willingness to guarantee a drop-and-hook at destination if rate is accepted as-is"]},
  termsEvent:{title:"Accessorial Term Raised",lines:["Broker: 'We'll cover detention after a while, don't worry about it.'","No specific detention rate, trigger time, evidence requirement, or reporting process has been stated"]},
  vagueStatement:{title:"Vague Broker Statement",lines:["Broker: 'We usually take care of our good carriers on stuff like that.'","No specific commitment, number, or trigger condition was given"]},
  floorApproach:{title:"Rate Approaches Floor",lines:["Broker's latest offer: $2,300 — exactly at the supplied floor","No owner authorization for anything below $2,300 is on file"]},
  factChange:{title:"Material Fact Change Mid-Call",lines:["Broker reveals the pickup now requires a 6 AM appointment instead of the originally discussed flexible window","This changes deadhead timing and driver scheduling feasibility versus the position set in Stage 1","This may affect whether the currently discussed rate/position can still be treated as valid without re-evaluation"]},
  pressureMoment:{title:"Broker Pressure",lines:["Broker: 'I need an answer in the next two minutes or this goes to another carrier.'","No new material information has been provided alongside this pressure"]},
  authorityFile:{title:"Authority Boundary File",lines:["Broker's final offer: $2,275 — below the supplied $2,300 floor","No owner authorization for below-floor acceptance is on file for this load"]},
  closeoutFile:{title:"Closeout Facts",lines:["Event trail: the $2,275 final offer was declined and escalated per the authority boundary; carrier ownership authorized holding at the original $2,300 floor and no lower; the broker subsequently called back and agreed to $2,300","Rate: agreed at $2,300 — the original supplied floor, reached again after escalation, not a new unexplained number","Detention: broker verbally said they'd 'take care of it' — trigger, amount, evidence, and process were never specifically confirmed","Appointment time: confirmed 6 AM (per the material fact change in Stage 10)","Drop-and-hook: broker mentioned it once but never confirmed availability at destination"]},
  documentationFile:{title:"Documentation Requirements",lines:["A complete negotiation record should reflect what was actually agreed, what remains unresolved, and what was never established — not a cleaner story than the facts support","Getting a number stated during the call is not the same as completed Module 09 booking/document review"]},
  handoffFile:{title:"Module 09 Handoff Point",lines:["Verbal agreement reached at $2,300, within supplied authority","No written rate confirmation has been received or reviewed yet"]},
  declineScenario:{title:"Opportunity Fails Carrier Requirements",lines:["A separate load opportunity requires a delivery appointment the verified driver cannot make within available hours, and the broker will not move the appointment","No authorization exists to accept a load the carrier cannot actually perform"]},
};

export const COMPETENCY_LABELS={
 "M08-C01":"Build a negotiation position from verified load/carrier facts",
 "M08-C02":"Convert Module 07 economics into target/floor/walk-away positions",
 "M08-C03":"Distinguish asking rate, target, floor/minimum, and walk-away",
 "M08-C04":"Open professionally and identify role/load without misrepresentation",
 "M08-C05":"Ask purposeful discovery questions and isolate missing/material facts",
 "M08-C06":"Listen for constraints, objections, assumptions, and usable evidence",
 "M08-C07":"Construct an evidence-supported counteroffer",
 "M08-C08":"Use truthful leverage and reject fabricated leverage",
 "M08-C09":"Use conditional trades/concessions rather than uncontrolled concessions",
 "M08-C10":"Clarify agreement-specific terms without inventing universal amounts",
 "M08-C11":"Maintain professional communication under resistance",
 "M08-C12":"Stay within supplied authority and escalate when needed",
 "M08-C13":"Confirm agreed, unresolved, and conditional terms accurately",
 "M08-C14":"Document negotiation and hand off to Module 09 without false booking claims",
 "M08-C15":"Decline professionally when the opportunity fails carrier requirements",
};

const choice=(id,stageId,competency,artifact,prompt,choices,correctKey,correctFeedback,remediation,extra={})=>({id,stageId,type:"choice",competency,artifact,prompt,choices,correctKey,correctFeedback,remediation,...extra});
const multi=(id,stageId,competency,artifact,prompt,options,correctSet,correctFeedback,remediation,extra={})=>({id,stageId,type:"multiselect",competency,artifact,prompt,options,correctSet,correctFeedback,remediation,...extra});
const categorize=(id,stageId,competency,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,extra={})=>({id,stageId,type:"categorize",competency,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,...extra});

export const DECISIONS={

 "SIM08-D01":multi("SIM08-D01","SIM08-S1","M08-C01","intake","Which of the following actually belong in the negotiating position you build before this call?",[
   {key:"equipment",text:"Verified current equipment and position"},
   {key:"target",text:"Module 07 supplied target rate"},
   {key:"floor",text:"Module 07 supplied floor/minimum"},
   {key:"askingRate",text:"The broker's posted asking rate"},
   {key:"unrelatedLane",text:"An unrelated lane's rate from three weeks ago"},
   {key:"assumedWindow",text:"The pickup window you're assuming based on how this broker's loads usually run"},
 ], ["equipment","target","floor","askingRate"],
 "Correct. These are the verified, supplied facts that actually define your position for this specific call. An old unrelated rate doesn't inform this negotiation, and an assumed pattern is not the same as a verified fact for this load.",
 "An unrelated lane's old rate doesn't inform this specific negotiation's position, and a pattern you're assuming from past loads with this broker is not a verified fact for this call — treat it as something to confirm, not something to build your position on."),

 "SIM08-D02":choice("SIM08-D02","SIM08-S1","M08-C03","positionFacts","The broker's posted rate is $2,050. What is this figure?",[
   {key:"A",text:"The floor — the lowest you can accept"},
   {key:"B",text:"The target — what you're hoping to negotiate toward"},
   {key:"C",text:"The asking rate — the broker's stated opening position, distinct from your own target, floor, and walk-away"},
   {key:"D",text:"The walk-away — the point where you end the call"},
 ],"C","Correct. The broker's posted figure is their asking rate — a distinct figure from your own supplied target, floor, and walk-away positions.",
 "Do not conflate the broker's asking rate with any of your own four supplied position figures — they are not the same thing."),

 "SIM08-D03":choice("SIM08-D03","SIM08-S2","M08-C05","missingFact","The posting doesn't state live unload vs. drop-and-hook. What's the correct response?",[
   {key:"A",text:"Assume drop-and-hook since that's more common"},
   {key:"B",text:"Assume live unload to be safe"},
   {key:"C",text:"VERIFY — ask the broker directly rather than assuming either way"},
   {key:"D",text:"Proceed without this fact; it doesn't matter"},
 ],"C","Correct. This is a material fact affecting driver time and equipment turn — verify it, don't assume it in either direction.",
 "Assuming a material fact in either direction risks a real scheduling problem later — ask directly instead."),

 "SIM08-D04":choice("SIM08-D04","SIM08-S3","M08-C04","openingCall","The broker asks if the truck is reefer-capable. How do you respond?",[
   {key:"A",text:"Say yes, since you can probably figure out a workaround if the commodity changes"},
   {key:"B",text:"Accurately state the truck is dry van only, with no reefer capability"},
   {key:"C",text:"Avoid answering directly and change the subject"},
   {key:"D",text:"Say it depends, to keep options open"},
 ],"B","Correct. Accurate representation of your actual equipment is required, even when a different answer might keep the conversation moving.",
 "Misrepresenting equipment capability is a material misrepresentation — it doesn't matter that a workaround might be possible later; the current truthful answer is dry van only.",
 {escalateAfterAttempts:2}),

 "SIM08-D05":multi("SIM08-D05","SIM08-S4","M08-C06","brokerObjection","The broker claims 'everyone's running this lane for $2,100' with no verification offered. Which of the following are true about this moment in the call?",[
   {key:"unverified",text:"The $2,100 claim has not been independently verified"},
   {key:"constraintPossible",text:"The broker may be testing whether you'll move, working with a real budget constraint, or simply disagreeing — you don't yet know which"},
   {key:"concedeWrong",text:"Automatically conceding toward $2,100 without new information would abandon your evidence-supported position"},
   {key:"accuseWrong",text:"Accusing the broker of lying is not an appropriate response either"},
   {key:"claimIsFact",text:"Since the broker stated it directly, it should now be treated as an established market fact"},
 ], ["unverified","constraintPossible","concedeWrong","accuseWrong"],
 "Correct. What the broker said is a statement, not an independently established fact — and neither auto-conceding nor accusing the broker of lying is the right move. The right move is to ask a useful question, which is next.",
 "An unverified claim from the other side of the negotiation isn't a reason to abandon your position automatically, and it also isn't grounds to accuse the broker of lying — it's a statement, not yet a verified fact, and either overreaction misses the point."),

 "SIM08-D06":choice("SIM08-D06","SIM08-S4","M08-C05","brokerObjection","Given the broker's unverified '$2,100' claim, which question best continues purposeful discovery?",[
   {key:"A",text:"\"Where do you need to be to make this work?\""},
   {key:"B",text:"\"Are you seriously telling me the truth right now?\""},
   {key:"C",text:"\"Okay, I can probably get close to $2,100.\""},
   {key:"D",text:"Nothing — just stay silent and wait for the broker to speak again"},
 ],"A","Correct. This question invites the broker to reveal their actual constraint without accusing them or conceding anything — that's purposeful discovery.",
 "A useful discovery question moves the call forward without accusation (option B) or self-negotiation (option C). Silence has its place elsewhere in this module, but the curriculum specifically calls for asking a useful question at this point, not simply waiting."),

 "SIM08-D07":multi("SIM08-D07","SIM08-S5","M08-C07","counterSetup","Below are five possible counters to the broker's $2,050 opening offer. Select every one that represents an acceptable, evidence-supported counter.",[
   {key:"grounded",text:"\"Based on the total-trip requirement for this lane, we're at $2,650 — can you get there?\""},
   {key:"concise",text:"\"We're at $2,650. Can you work with that?\""},
   {key:"random",text:"\"Let's call it $2,600 — sounds about right to me.\""},
   {key:"inventedMarket",text:"\"Every carrier on this lane is getting at least $2,700, so we need $2,650.\""},
   {key:"overexplained",text:"A line-by-line recitation of the exact fuel cost, deadhead miles, and dwell-time minutes behind the number, before the broker has asked for any of it"},
 ], ["grounded","concise"],
 "Correct. A counter can be grounded in your prepared position with a brief reason, or stated concisely with no stated reason at all — both are acceptable. You are never required to disclose your internal cost breakdown to the broker, a number picked at random is not evidence-supported, and neither is an invented market claim.",
 "An evidence-supported counter doesn't require reciting your internal fuel/deadhead/dwell numbers to the broker — it isn't a number chosen at random, and it isn't an invented market claim either. Overexplaining also weakens clarity; a short, confident position is usually stronger than a long justification."),

 "SIM08-D08":choice("SIM08-D08","SIM08-S6","M08-C08","leverageEvent","Should you tell the broker you have a competing $2,400 offer that doesn't actually exist?",[
   {key:"A",text:"Yes — it's a common negotiation tactic and puts pressure on the broker"},
   {key:"B",text:"No — this is fabricated leverage; use only real, verified facts as leverage, even if less immediately persuasive"},
   {key:"C",text:"Yes, but only if the broker seems unlikely to check"},
   {key:"D",text:"Only mention it vaguely without a specific number"},
 ],"B","Correct. Fabricating a competing offer is fabricated leverage, regardless of how common the tactic might seem or how unlikely detection is. Use only truthful, verified facts.",
 "Fabricating competing offers, market facts, or leverage of any kind is a critical-failure pattern — there's no version of this that's acceptable, including a vague or hedged version.",
 {escalateAfterAttempts:2}),

 "SIM08-D09":choice("SIM08-D09","SIM08-S7","M08-C09","tradeSetup","The broker offers $2,250 (below floor) with a drop-and-hook guarantee. What's the correct response?",[
   {key:"A",text:"Accept immediately — drop-and-hook has real value"},
   {key:"B",text:"Propose a conditional trade: hold at or above floor, and treat the drop-and-hook guarantee as a documented additional term, not a reason to move below floor unconditionally"},
   {key:"C",text:"Reject the offer entirely without engaging on the drop-and-hook point"},
   {key:"D",text:"Accept below floor without documenting the drop-and-hook guarantee at all"},
 ],"B","Correct. A conditional trade — something for something, with terms documented — is stronger than an uncontrolled concession below your floor.",
 "An uncontrolled concession below floor, even with an attractive add-on, is weaker than converting that add-on into a documented conditional trade."),

 "SIM08-D10":multi("SIM08-D10","SIM08-S8","M08-C10","termsEvent","The broker says they'll 'cover detention after a while.' Before this can be treated as a specific, agreed term, which of the following must actually be resolved?",[
   {key:"trigger",text:"TRIGGER — what event or elapsed time activates detention pay"},
   {key:"amount",text:"AMOUNT/METHOD — what compensation rate or calculation method applies"},
   {key:"evidence",text:"EVIDENCE — what documentation is required to support a claim"},
   {key:"process",text:"PROCESS — how and when the carrier must report or request it"},
   {key:"universalRate",text:"Nothing else — the Academy's standard detention rate applies automatically"},
   {key:"goodFaith",text:"Nothing else — the broker's general verbal assurance is enough once it's given"},
 ], ["trigger","amount","evidence","process"],
 "Correct. Knowing only the word 'detention' is not enough — trigger, amount/method, evidence, and process must all be resolved before this is a specific agreed term. There is no universal Academy detention rate, and a general assurance alone is not a specific term.",
 "A vague accessorial promise is not a specific agreed term until its trigger, amount/method, evidence, and process are all actually known — don't invent a universal rate yourself, and don't treat a general assurance as sufficient either.",
 {escalateAfterAttempts:2}),

 "SIM08-D11":choice("SIM08-D11","SIM08-S8","M08-C10","vagueStatement","The broker adds: 'We usually take care of our good carriers on stuff like that.' How should this be classified?",[
   {key:"A",text:"An agreed term — the broker committed to something"},
   {key:"B",text:"Still vague and unresolved — requires further clarification before being treated as any kind of commitment"},
   {key:"C",text:"A binding verbal contract"},
   {key:"D",text:"Irrelevant — disregard it entirely"},
 ],"B","Correct. A vague, general statement like this is not a specific commitment — it stays unresolved until clarified into an actual specific term.",
 "General goodwill language is not the same as a specific agreed term — don't upgrade it to \"agreed\" just because it sounds reassuring."),

 "SIM08-D12":choice("SIM08-D12","SIM08-S9","M08-C02","floorApproach","The broker's offer reaches exactly $2,300 — your supplied floor. What's the correct response?",[
   {key:"A",text:"This is within authority — it can be accepted at floor without further authorization, since it's at (not below) the supplied floor"},
   {key:"B",text:"This requires owner authorization since it's not the target"},
   {key:"C",text:"Reject automatically since it's not the target rate"},
   {key:"D",text:"Treat this the same as an offer below the floor"},
 ],"A","Correct. The supplied floor is the threshold set for acceptance without additional authorization — reaching it, not going below it, is within authority.",
 "Reaching the floor exactly is different from going below it — don't treat the two the same way."),

 "SIM08-D13":choice("SIM08-D13","SIM08-S10","M08-C01","factChange","The broker reveals a new 6 AM appointment requirement mid-call. What's the correct response?",[
   {key:"A",text:"Ignore it — the position was already set in Stage 1"},
   {key:"B",text:"Re-evaluate the negotiating position in light of this new material fact before continuing"},
   {key:"C",text:"End the call immediately without addressing it"},
   {key:"D",text:"Agree to the new appointment without considering feasibility"},
 ],"B","Correct. A material fact change mid-negotiation requires re-evaluating your position — an earlier position isn't fixed once new material facts arrive.",
 "A negotiating position set before a material fact change shouldn't be treated as still valid without re-evaluation."),

 "SIM08-D14":choice("SIM08-D14","SIM08-S11","M08-C11","pressureMoment","The broker demands an answer in two minutes with no new information. What's the correct response?",[
   {key:"A",text:"Cave to the pressure and accept whatever is currently on the table"},
   {key:"B",text:"Stay professional, decline to be rushed into a decision without adequate information, and respond according to your actual position and authority"},
   {key:"C",text:"Match the pressure with aggressive language of your own"},
   {key:"D",text:"Hang up without responding"},
 ],"B","Correct. Professional composure under pressure means neither caving nor escalating — respond according to your actual position, not the artificial urgency.",
 "Pressure tactics with no new information don't change your actual position or authority — respond accordingly, without caving or escalating the conflict."),

 "SIM08-D15":choice("SIM08-D15","SIM08-S12","M08-C12","authorityFile","The broker's final offer is $2,275 — below your $2,300 floor, with no authorization on file. What's the correct response?",[
   {key:"A",text:"Accept it — it's close enough to the floor to not matter"},
   {key:"B",text:"DECLINE or ESCALATE for authorization — do not accept below the supplied floor without authorization, regardless of how close the gap is"},
   {key:"C",text:"Accept it and inform the carrier owner afterward"},
   {key:"D",text:"Counter with a much higher number to compensate"},
 ],"B","Correct. Accepting below an unauthorized floor is a critical failure regardless of how small the gap appears — decline or escalate for actual authorization instead.",
 "A small gap below the floor is still below the floor — accepting it without authorization is an unauthorized below-floor acceptance, one of this module's defined critical failures.",
 {escalateAfterAttempts:2}),

 "SIM08-D16":categorize("SIM08-D16","SIM08-S13","M08-C13","closeoutFile","Classify each item from this negotiation into the correct closeout bucket.",[
   {key:"rate",text:"Rate at $2,300 (agreed after escalation, within authority)"},
   {key:"appointment",text:"6 AM appointment (confirmed)"},
   {key:"detention",text:"Detention terms (broker said \"we'll take care of it\" — trigger/amount/evidence/process never confirmed)"},
   {key:"dropHook",text:"Drop-and-hook at destination (mentioned once, never confirmed)"},
 ],[
   {key:"agreed",label:"AGREED IN PRINCIPLE"},
   {key:"unresolved",label:"UNRESOLVED"},
   {key:"notEstablished",label:"NOT DISCUSSED / NOT ESTABLISHED"},
 ],
 {rate:"agreed",appointment:"agreed",detention:"unresolved",dropHook:"notEstablished"},
 "Correct. The rate and appointment were actually confirmed and belong in AGREED IN PRINCIPLE. Detention was actively discussed but never pinned down on trigger/amount/evidence/process, so it stays UNRESOLVED. Drop-and-hook was mentioned once but never confirmed as an actual term, so it belongs in NOT DISCUSSED / NOT ESTABLISHED — do not fill that bucket with an assumption after the call, and do not upgrade it to unresolved-but-basically-agreed either.",
 "This module requires distinguishing all three closeout buckets, not just spotting what's agreed. A term that was actively being negotiated but never pinned down (detention) is UNRESOLVED. A term that was only mentioned in passing and never confirmed as real (drop-and-hook) is NOT DISCUSSED / NOT ESTABLISHED. Treating either of those as AGREED IN PRINCIPLE is the exact critical-failure pattern this decision tests."),

 "SIM08-D17":multi("SIM08-D17","SIM08-S14","M08-C14","documentationFile","What must the negotiation documentation include?",[
   {key:"agreed",text:"What was actually agreed (rate, appointment)"},
   {key:"unresolved",text:"What remains unresolved (detention specifics)"},
   {key:"notEstablished",text:"What was never established (drop-and-hook availability)"},
   {key:"nextAction",text:"The next required action (Module 09 rate confirmation review)"},
   {key:"invented",text:"A cleaner summary that omits the unresolved items for simplicity"},
   {key:"invented2",text:"The broker's verbal statement, treated as equivalent to completed Module 09 booking/document review since the number was 'said' during the call"},
 ], ["agreed","unresolved","notEstablished","nextAction"],
 "Correct. Complete documentation reflects the actual state of the negotiation — agreed, unresolved, not established, and next steps. A verbal statement during the call, however clear, is not the same as completed Module 09 booking/document review.",
 "Omitting unresolved or unestablished items to make the record look cleaner is exactly the kind of gap this documentation step exists to prevent — and a verbal number stated on the call is not a substitute for the formal Module 09 review, no matter how confidently it was said."),

 "SIM08-D18":choice("SIM08-D18","SIM08-S15","M08-C14","handoffFile","A verbal agreement was reached at $2,300, within authority. Is this load formally booked?",[
   {key:"A",text:"Yes — verbal agreement at an authorized rate is the same as a completed booking"},
   {key:"B",text:"No — this is AGREED IN PRINCIPLE / PENDING BOOKING CONTROL; formal booking requires Module 09's rate-confirmation review before it's complete"},
   {key:"C",text:"Yes, as long as the broker seemed trustworthy"},
   {key:"D",text:"It doesn't matter — booking status isn't tracked separately from negotiation"},
 ],"B","Correct. Verbal agreement within authority is a real negotiation outcome, but it is not the same as a completed booking — Module 09's rate-confirmation review is a separate, required step.",
 "Representing a verbal agreement as a completed booking before the rate confirmation is reviewed is a critical-failure pattern — the two are not the same thing.",
 {escalateAfterAttempts:2}),

 "SIM08-D19":choice("SIM08-D19","SIM08-S15","M08-C15","declineScenario","A separate opportunity requires an appointment the driver cannot make, and the broker won't move it. What's the correct response?",[
   {key:"A",text:"Accept anyway and hope the driver can make it work"},
   {key:"B",text:"Decline professionally — the opportunity fails a supplied carrier requirement and no authorization exists to accept it anyway"},
   {key:"C",text:"Ignore the broker without a response"},
   {key:"D",text:"Accept but plan to renegotiate the appointment after booking"},
 ],"B","Correct. When an opportunity genuinely fails a supplied carrier requirement with no path to resolve it, a professional decline is the correct outcome — not a hopeful acceptance.",
 "Accepting a load the carrier cannot actually perform, or planning to renegotiate a fixed requirement after the fact, both create real operational risk. A professional decline is correct here.")
};

export const DECISION_ORDER=STAGES.flatMap(s=>s.decisionIds);
