// SIM-009 content data — Booking Control Desk. Fictional training records.
// Built from the Module 09 Premium Design Spec, MODULE-09-MASTER-BRANCH.md,
// the Module 09 Premium Competency Map, and Student Manual Parts 01-06 on
// module-09-premium-build. Every dollar figure, time, and clause is a
// FICTIONAL INSTRUCTIONAL ASSUMPTION.
export const STAGES = [
  {id:"M09-S1",title:"Receive M08 Negotiation Handoff",decisionIds:["M09-D01","M09-D02"]},
  {id:"M09-S2",title:"Establish Booking Identity and Authority",decisionIds:["M09-D03","M09-D04"]},
  {id:"M09-S3",title:"Receive and Authenticate Rate Confirmation",decisionIds:["M09-D05","M09-D06"]},
  {id:"M09-S4",title:"Extract Material Terms",decisionIds:["M09-D07","M09-D08"]},
  {id:"M09-S5",title:"Reconcile Rate and Money Terms",decisionIds:["M09-D09","M09-D10"]},
  {id:"M09-S6",title:"Reconcile Operational Terms",decisionIds:["M09-D11","M09-D12"]},
  {id:"M09-S7",title:"Detect Discrepancies / Missing Facts / Version Problems",decisionIds:["M09-D13","M09-D14"]},
  {id:"M09-S8",title:"Correction and Escalation Loop",decisionIds:["M09-D15","M09-D16"]},
  {id:"M09-S9",title:"Acceptance / Signature / Authority Control",decisionIds:["M09-D17","M09-D18","M09-D19"]},
  {id:"M09-S10",title:"Build Booking Record",decisionIds:["M09-D20","M09-D21"]},
  {id:"M09-S11",title:"Assemble Dispatch Packet and Driver Handoff",decisionIds:["M09-D22","M09-D23","M09-D24"]},
  {id:"M09-S12",title:"Final BOOKED / HOLD / ESCALATE Closeout and M10 Handoff",decisionIds:["M09-D25","M09-D26","M09-D27"]},
];

export const ARTIFACTS = {
  m08Handoff:{title:"M08 Negotiation Handoff — Load CFB-8842",lines:["Broker: Cascade Freight Brokers. Carrier: Palmetto Line Logistics.","Rate: $2,450 all-in (negotiated, agreement-in-principle).","Pickup: Tuesday, 14:00 window — Charlotte, NC facility.","Delivery: Thursday, 10:00 appointment — Richmond, VA facility.","Equipment: 53' dry van. Driver assist: none required (negotiated).","Detention: not discussed/established in negotiation.","Reference number: CFB-8842."]},
  authorityMatrix:{title:"Supplied Carrier Authority Matrix — Palmetto Line Logistics",lines:["Dispatcher MAY: negotiate, communicate with broker, request corrections, accept/transmit written terms that match the negotiated agreement exactly.","Dispatcher MAY NOT: accept or sign any rate different from the negotiated $2,450 without owner/manager authorization.","Dispatcher MAY NOT: accept new operational obligations (e.g., driver assist, deposits) without owner/manager authorization.","Dispatcher MAY NOT: mark a load BOOKED / DISPATCH PACKET READY while a material term is unresolved.","Owner/Manager of record for authorization: Pat Alvarez."]},
  rcv1:{title:"Rate Confirmation v1 — Load CFB-8842",lines:["Rate: $2,450.","Pickup: Tuesday, 08:00 — Charlotte, NC facility.","Delivery: Thursday, 10:00 — Richmond, VA facility.","Equipment: 53' dry van.","Driver assist: required at delivery.","Detention: $50/hour after 2 free hours (not discussed in M08 negotiation).","Broker contact listed as: 'Casacde Freight Brokers' (contact/MC identity otherwise verified).","Reference number: CFB-8842."]},
  obsoleteDoc:{title:"Additional Attachment in the Same Email Thread",lines:["Rate Confirmation for Load CFB-7710 — a different, unrelated prior load between the same broker and carrier.","Different rate, different route, different dates.","Appears to have been attached/forwarded by mistake."]},
  correctionComms:{title:"Correction Communication",lines:["Broker confirms: driver-assist requirement on CFB-8842 was added in error and should not apply to this load.","Broker states pickup will be corrected back to Tuesday 14:00.","Broker has not yet sent a corrected written document at this point in the case."]},
  rcv2:{title:"Rate Confirmation v2 — Load CFB-8842 (corrected)",lines:["Pickup: Tuesday, 14:00 — corrected, matches negotiated.","Driver assist: removed — corrected, matches negotiated.","Rate: $2,400 — a new, unexplained $50 reduction from the negotiated $2,450.","Delivery, equipment, detention clause, and reference number: unchanged from v1."]},
  driverEquipment:{title:"Driver / Truck / Equipment Identity",lines:["Driver: J. Reyes. Truck: PL-114. Trailer: 53' dry van #PL-T22.","Status: available Tuesday morning.","No HOS/ELD clock detail is supplied here — that determination belongs to M11, not M09."]},
  bookingState:{title:"Current Booking State at Stage 10",lines:["Pickup and driver-assist conflicts from v1 have been corrected in v2.","The $2,400 rate in v2 has not yet been authorized by Pat Alvarez.","No document has been altered outside the broker's own corrected versions."]},
  finalState:{title:"Case File Approaching Closeout",lines:["All operational terms (pickup, delivery, equipment, driver assist) now match the negotiated agreement.","The $2,400 rate deviation is the only remaining unresolved item, pending Pat Alvarez's authorization.","The dispatch packet has not yet been sent to the driver."]},
};

export const COMPETENCY_LABELS={
 "M09-C01":"Interpret the M08 handoff and distinguish agreed/conditional/unresolved/unverified terms",
 "M09-C02":"Identify parties, load, carrier, equipment, locations, dates, rate, and document version before acting",
 "M09-C03":"Distinguish a rate confirmation from a quote, posting, broker email, BOL, POD, invoice, and carrier packet",
 "M09-C04":"Read and extract all material rate-confirmation terms instead of headline-rate scanning",
 "M09-C05":"Reconcile verbal/agreement-in-principle terms against written terms using a controlled comparison record",
 "M09-C06":"Classify discrepancies as material, nonmaterial/clerical, missing/unknown, or later-workflow issue",
 "M09-C07":"Stop and obtain correction/clarification when a material booking term conflicts with the supplied agreement",
 "M09-C08":"Recognize agreement-specific terms without teaching invented universal terms",
 "M09-C09":"Stay within supplied authority and escalate when acceptance/signature/commitment authority is absent or exceeded",
 "M09-C10":"Preserve document integrity, version control, timestamps, source, and change history",
 "M09-C11":"Create a complete booking record separating source facts, verified facts, unresolved facts, decisions, and approvals",
 "M09-C12":"Build a dispatch packet containing correct current documents while excluding obsolete/conflicting versions",
 "M09-C13":"Issue a controlled driver handoff communicating verified booking facts without inventing trip-planning/HOS conclusions",
 "M09-C14":"Identify when a load is not ready for dispatch and use HOLD / CORRECT / ESCALATE rather than false completion",
 "M09-C15":"Close the M09 workflow with a traceable BOOKED/HOLD/DECLINE/ESCALATE record and correct M10 handoff",
};

const choice=(id,stageId,competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,extra={})=>({id,stageId,type:"choice",competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,...extra});
const multi=(id,stageId,competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,extra={})=>({id,stageId,type:"multiselect",competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,...extra});
const categorize=(id,stageId,competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,extra={})=>({id,stageId,type:"categorize",competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,...extra});

export const DECISIONS={

 "M09-D01":categorize("M09-D01","M09-S1",["M09-C01"],"m08Handoff","Classify each M08 handoff term.",[
   {key:"rate",text:"Rate: $2,450 all-in"},
   {key:"pickup",text:"Pickup: Tuesday 14:00"},
   {key:"driverAssist",text:"No driver assist required"},
   {key:"detention",text:"Detention terms"},
 ],[
   {key:"agreed",label:"AGREED"},
   {key:"conditional",label:"CONDITIONAL"},
   {key:"unresolved",label:"UNRESOLVED"},
   {key:"unverified",label:"UNVERIFIED"},
 ],
 {rate:"agreed",pickup:"agreed",driverAssist:"agreed",detention:"unresolved"},
 "Correct. Rate, pickup, and the no-driver-assist term were all reached in the M08 negotiation — AGREED. Detention was never discussed at all, so it isn't agreed, conditional, or even verified as a subject — it's UNRESOLVED, an open gap in the negotiated record.",
 "Don't force every item into AGREED just because a negotiation happened. A subject that was never discussed at all is UNRESOLVED, not agreed by default and not the same as CONDITIONAL (which implies it was discussed with a condition attached)."),

 "M09-D02":choice("M09-D02","M09-S1",["M09-C01"],"m08Handoff","Is this M08 agreement-in-principle the same as a controlled, formal booking?",[
   {key:"A",text:"Yes — once the negotiation is done, the load is booked"},
   {key:"B",text:"No — a controlled booking requires the M09 workflow: document receipt, extraction, reconciliation, authority confirmation, and record-building"},
   {key:"C",text:"Yes, as long as the rate doesn't change"},
   {key:"D",text:"It depends on how confident the dispatcher feels"},
 ],"B","Correct. Agreement-in-principle is M08's output. It becomes a controlled booking only after M09's full verification workflow is completed.",
 "Treating a negotiated agreement as already booked skips the entire reason M09 exists — verifying the written document actually matches, confirming authority, and building a traceable record. Confidence and an unchanged rate don't substitute for that process."),

 "M09-D03":multi("M09-D03","M09-S2",["M09-C02"],"m08Handoff","Which of these must be identified before acting on this load?",[
   {key:"parties",text:"The parties (broker and carrier)"},
   {key:"loadRef",text:"The load/reference number"},
   {key:"docVersion",text:"Which document version is currently controlling"},
   {key:"driverMood",text:"The driver's personal preference for this route"},
 ], ["parties","loadRef","docVersion"],
 "Correct. Parties, load identity, and current document version are all foundational facts the dispatcher must establish before acting. A driver's personal route preference isn't part of booking identity.",
 "Booking identity is about who, what, and which version — not personal preferences that don't affect the controlling booking facts."),

 "M09-D04":choice("M09-D04","M09-S2",["M09-C09"],"authorityMatrix","Per the supplied Authority Matrix, can the dispatcher accept or sign a rate different from the negotiated $2,450 without Pat Alvarez's authorization?",[
   {key:"A",text:"Yes, as long as the difference is small"},
   {key:"B",text:"No — any rate deviation requires owner/manager authorization"},
   {key:"C",text:"Yes, since the dispatcher negotiated the load in the first place"},
   {key:"D",text:"It depends on which direction the rate moves"},
 ],"B","Correct. The Authority Matrix draws no exception for small deviations or negotiation history — any rate different from $2,450 requires Pat Alvarez's authorization.",
 "The matrix doesn't scale authority by dollar amount or by who negotiated the load. Read the actual supplied boundary, not an assumed reasonable-sounding exception."),

 "M09-D05":choice("M09-D05","M09-S3",["M09-C03"],"obsoleteDoc","A rate confirmation for Load CFB-7710 was attached in the same email thread. Is it part of this booking?",[
   {key:"A",text:"Yes — it's the same broker and carrier, so it's related enough to include"},
   {key:"B",text:"No — it's a different load with a different rate, route, and dates; it must be excluded from this booking's evidence"},
   {key:"C",text:"Yes, since it arrived at the same time as the real document"},
   {key:"D",text:"Only include the parts of it that don't conflict"},
 ],"B","Correct. Same broker/carrier relationship or simultaneous arrival doesn't make a document part of this booking. CFB-7710 is a different load entirely and must be excluded from this booking's evidence.",
 "An obsolete or wrong-load document doesn't become relevant because it shares a relationship or arrived at a convenient time. And there's no 'use the non-conflicting parts' option for a document that doesn't belong to this load at all — exclude it entirely."),

 "M09-D06":choice("M09-D06","M09-S3",["M09-C03"],"rcv1","What distinguishes Rate Confirmation v1 from a load-board posting or a broker email?",[
   {key:"A",text:"Nothing meaningful — they all serve the same purpose"},
   {key:"B",text:"A rate confirmation is the controlling written document for the specific load's material terms, not a preliminary posting or informal message"},
   {key:"C",text:"A rate confirmation is only used after delivery"},
   {key:"D",text:"A rate confirmation and an invoice are the same document at different times"},
 ],"B","Correct. The rate confirmation is the controlling document for this load's material terms — distinct from a preliminary posting, an informal email, and from post-delivery documents like invoices or PODs.",
 "These document types serve genuinely different functions in the booking lifecycle. Collapsing them together is exactly the kind of imprecision this competency exists to correct."),

 "M09-D07":multi("M09-D07","M09-S4",["M09-C04"],"rcv1","Which material terms are actually present in Rate Confirmation v1?",[
   {key:"rate",text:"Rate"},
   {key:"pickup",text:"Pickup time"},
   {key:"driverAssist",text:"Driver-assist requirement"},
   {key:"detention",text:"Detention terms"},
   {key:"insurance",text:"Cargo insurance coverage amount"},
 ], ["rate","pickup","driverAssist","detention"],
 "Correct. Rate, pickup time, the driver-assist requirement, and the detention clause are all present in RC v1. No cargo insurance coverage amount is stated anywhere in this document.",
 "Extract only what's actually written in the document — don't select a plausible-sounding field (like a specific insurance coverage amount) that was never actually stated."),

 "M09-D08":choice("M09-D08","M09-S4",["M09-C04","M09-C06"],"rcv1","The broker contact is listed as 'Casacde Freight Brokers' (misspelled) in RC v1, while entity/MC identity is otherwise verified as Cascade Freight Brokers. How should this be classified?",[
   {key:"A",text:"Material — any spelling error on the document is a red flag requiring correction before proceeding"},
   {key:"B",text:"Nonmaterial/clerical — identity is otherwise verified and the typo changes no obligation, but it's still worth noting"},
   {key:"C",text:"Ignore it completely; it doesn't need to be recorded at all"},
   {key:"D",text:"Unknown/missing, since the correct spelling isn't confirmed"},
 ],"B","Correct. With entity identity otherwise verified, a spelling typo that changes no obligation is nonmaterial/clerical — worth recording, but not a blocker.",
 "A typo isn't automatically material just because it's an error, and it isn't invisible just because it's nonmaterial — record it as clerical rather than escalating it or pretending it doesn't exist."),

 "M09-D09":choice("M09-D09","M09-S5",["M09-C05"],"rcv1","Compare RC v1's rate ($2,450) to the M08 negotiated rate ($2,450). What's the status?",[
   {key:"A",text:"MATCH"},
   {key:"B",text:"MISMATCH — MATERIAL"},
   {key:"C",text:"UNKNOWN / MISSING"},
   {key:"D",text:"MISMATCH — NONMATERIAL / CLERICAL"},
 ],"A","Correct. $2,450 negotiated and $2,450 written — MATCH.",
 "The two figures are identical; this is the simplest possible case and should be recorded as a clean MATCH, not overthought into some other status."),

 "M09-D10":choice("M09-D10","M09-S5",["M09-C06"],"rcv1","RC v1 also states a detention clause ($50/hour after 2 free hours) that was never discussed in the M08 negotiation. How should this be classified and handled?",[
   {key:"A",text:"Since the base rate matches and detention terms are standard in the industry, treat the whole document as accepted as written"},
   {key:"B",text:"Classify it as an unverified/unauthorized new term relative to the negotiated agreement — do not treat the rate confirmation as fully accepted until it is verified and, if needed, authorized"},
   {key:"C",text:"Delete the detention clause from the copy used going forward since it wasn't negotiated"},
   {key:"D",text:"Treat it as a MATCH since the rate itself matches"},
 ],"B","Correct. A term that was never part of the negotiated agreement isn't automatically accepted — even when the headline rate matches and the term is commercially ordinary. It must be verified and authorized before the document is treated as fully accepted.",
 "Knowingly accepting or dispatching from a document containing a material term beyond the supplied agreement, without correction or authorization, is this module's material-acceptance-error failure — treating industry-standard as a substitute for actual authorization does not fix that. Deleting the clause from the record is a document-integrity problem, not a resolution.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-02"}),

 "M09-D11":choice("M09-D11","M09-S6",["M09-C05"],"rcv1","Compare RC v1's pickup (Tuesday 08:00) to the M08 negotiated pickup (Tuesday 14:00). What's the status?",[
   {key:"A",text:"MATCH — both are 'Tuesday,' which is the important part"},
   {key:"B",text:"MISMATCH — MATERIAL"},
   {key:"C",text:"MISMATCH — NONMATERIAL / CLERICAL"},
   {key:"D",text:"UNKNOWN / MISSING"},
 ],"B","Correct. A six-hour difference in pickup time is a material operational mismatch, not something resolved by both documents naming the same day.",
 "Matching on the day alone ignores a six-hour difference in appointment time — a real operational conflict that affects driver planning and facility coordination."),

 "M09-D12":choice("M09-D12","M09-S6",["M09-C05","M09-C08"],"rcv1","Compare RC v1's driver-assist requirement to the M08 negotiated term (no driver assist). What's the status?",[
   {key:"A",text:"MATCH"},
   {key:"B",text:"MISMATCH — MATERIAL"},
   {key:"C",text:"MISMATCH — NONMATERIAL / CLERICAL"},
   {key:"D",text:"Not something M09 needs to track"},
 ],"B","Correct. Adding a driver-assist obligation that wasn't negotiated is a material operational mismatch — it changes labor expectations and potential liability.",
 "A new operational obligation like driver assist is a material term, not a detail M09 can skip tracking. It directly affects what the carrier is committing to perform."),

 "M09-D13":categorize("M09-D13","M09-S7",["M09-C06"],"rcv1","Classify every RC v1 field against the M08 handoff.",[
   {key:"rate",text:"Rate"},
   {key:"pickup",text:"Pickup time"},
   {key:"driverAssist",text:"Driver-assist requirement"},
   {key:"contactName",text:"Broker contact name spelling"},
   {key:"detention",text:"Detention clause"},
 ],[
   {key:"match",label:"MATCH"},
   {key:"material",label:"MISMATCH — MATERIAL"},
   {key:"nonmaterial",label:"MISMATCH — NONMATERIAL / CLERICAL"},
   {key:"unknown",label:"UNKNOWN / MISSING (relative to negotiated evidence)"},
 ],
 {rate:"match",pickup:"material",driverAssist:"material",contactName:"nonmaterial",detention:"unknown"},
 "Correct. Rate matches; pickup and driver-assist are material mismatches; the contact-name typo is nonmaterial/clerical; and the detention clause is a new, unnegotiated term — UNKNOWN relative to what was actually agreed, not a mismatch against something that was never discussed.",
 "The detention clause wasn't negotiated at all, so it can't be a 'mismatch' against nothing — that's exactly why it belongs in its own UNKNOWN/MISSING category rather than being lumped in with the genuine material mismatches or waved off as a clean match."),

 "M09-D14":choice("M09-D14","M09-S7",["M09-C05"],"rcv1","Given the unresolved material mismatches on pickup time and driver assist, can the dispatcher currently represent this load to the carrier as agreed and booked?",[
   {key:"A",text:"Yes — the rate is the most important term and it matches"},
   {key:"B",text:"No — material discrepancies remain unresolved; this cannot be represented as agreed/booked yet"},
   {key:"C",text:"Yes, since the broker will probably fix it eventually"},
   {key:"D",text:"Yes, as long as the driver isn't told about the discrepancies"},
 ],"B","Correct. With material discrepancies still open, this load cannot be represented as agreed or booked — regardless of which term seems most important.",
 "Representing a load as agreed/booked while material evidence remains conflicting is exactly this module's unresolved-discrepancy-represented-as-resolved failure. An expectation that the broker will 'probably' fix it is not verified resolution, and withholding information from the driver doesn't change the booking's actual status.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-03"}),

 "M09-D15":multi("M09-D15","M09-S8",["M09-C07"],"rcv1","What must a professional correction request include?",[
   {key:"citeConflict",text:"The exact conflicting term"},
   {key:"citeEvidence",text:"The supplied evidence supporting the correction request"},
   {key:"requestSpecific",text:"A specific requested correction or clarification"},
   {key:"preserveOriginal",text:"Preservation of the original version"},
   {key:"assumeFixed",text:"An assumption that the broker will fix it without confirmation"},
 ], ["citeConflict","citeEvidence","requestSpecific","preserveOriginal"],
 "Correct. A complete correction request cites the exact conflict, the supporting evidence, the specific correction needed, and preserves the original version. Assuming it's already fixed isn't part of a request — it's the opposite of one.",
 "A correction request that assumes the outcome isn't actually a request — it skips the verification step entirely. Keep the ask itself limited to citing the conflict, the evidence, the specific fix needed, and preserving history."),

 "M09-D16":choice("M09-D16","M09-S8",["M09-C07"],"correctionComms","The broker verbally/by-email confirms the driver-assist error and says pickup will be corrected. Is the booking now resolved?",[
   {key:"A",text:"Yes — the broker's confirmation is enough"},
   {key:"B",text:"No — a corrected written document is still required before the material terms can be treated as resolved"},
   {key:"C",text:"Yes, since the broker has no reason to lie"},
   {key:"D",text:"Only the pickup time needs a new document; the driver-assist confirmation is enough as-is"},
 ],"B","Correct. A verbal or informal confirmation is useful communication evidence, but the controlled workflow still requires a corrected written document for material terms before they're treated as resolved.",
 "Broker trustworthiness isn't the standard — evidence is. And there's no partial exception where one material correction needs a new document but another doesn't; both require actual corrected written evidence."),

 "M09-D17":choice("M09-D17","M09-S9",["M09-C05","M09-C13"],"rcv2","RC v2 corrects the pickup time and removes driver assist — both now match. But it also shows a new rate of $2,400 instead of the negotiated $2,450. Is the booking now fully resolved?",[
   {key:"A",text:"Yes — since the two originally flagged problems are fixed"},
   {key:"B",text:"No — a new material mismatch (the $50 rate reduction) has appeared and must be reconciled before proceeding"},
   {key:"C",text:"Yes, a $50 difference is too small to matter"},
   {key:"D",text:"Yes, since the correction communication only mentioned pickup and driver assist"},
 ],"B","Correct. Fixing the two originally flagged problems doesn't mean the document is now clean — v2 introduces a new, unexplained rate change that must itself be reconciled. One correction can introduce another problem.",
 "Anchoring on 'the two things we were watching for got fixed' misses that the newly revised document must be re-reconciled in full, not just re-checked on the specific fields that were previously in question."),

 "M09-D18":choice("M09-D18","M09-S9",["M09-C09"],"authorityMatrix","Given the Authority Matrix, can the dispatcher accept and sign RC v2 as-is, with its $2,400 rate, without Pat Alvarez's authorization?",[
   {key:"A",text:"Yes — $50 is a minor difference and the other terms are now correct"},
   {key:"B",text:"No — any rate deviation from the negotiated $2,450 requires owner/manager authorization before acceptance"},
   {key:"C",text:"Yes, since the broker made the change, not the dispatcher"},
   {key:"D",text:"Yes, if the dispatcher personally believes $2,400 is still a fair rate"},
 ],"B","Correct. The Authority Matrix requires authorization for any rate deviation, regardless of size, who introduced the change, or personal judgment about fairness.",
 "Accepting or signing outside supplied authority — including a 'small' deviation, a change the other party introduced, or one the dispatcher personally judges acceptable — is exactly this module's unauthorized-carrier-commitment failure.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-01"}),

 "M09-D19":choice("M09-D19","M09-S9",["M09-C09"],"authorityMatrix","What is the correct next step for the $2,400 rate deviation?",[
   {key:"A",text:"Escalate to Pat Alvarez for authorization; do not sign or accept in the meantime"},
   {key:"B",text:"Sign now to keep the load moving, and mention it to Pat Alvarez afterward"},
   {key:"C",text:"Ask the broker to just re-issue at $2,450 without telling anyone about the deviation"},
   {key:"D",text:"Decline the load outright without escalating"},
 ],"A","Correct. Escalate to the authorized approver and hold acceptance until authorization is obtained — this is the workflow the Authority Matrix requires.",
 "Signing first and escalating after still commits the carrier outside authority in the interim. Quietly asking for a re-issue avoids documenting a real deviation, and declining outright skips the escalation that might resolve this in the carrier's favor."),

 "M09-D20":categorize("M09-D20","M09-S10",["M09-C11"],"bookingState","Sort each item into the correct booking-record category.",[
   {key:"originalM08Rate",text:"The originally negotiated $2,450 rate (source fact from M08)"},
   {key:"correctedPickup",text:"The corrected Tuesday 14:00 pickup in RC v2 (confirmed against negotiated terms)"},
   {key:"rateDeviation",text:"Whether the $2,400 rate will be authorized"},
   {key:"escalationSent",text:"That an escalation to Pat Alvarez has been sent (dispatcher action taken)"},
 ],[
   {key:"source",label:"SOURCE FACT"},
   {key:"verified",label:"VERIFIED FACT"},
   {key:"unresolved",label:"UNRESOLVED FACT"},
   {key:"decision",label:"DECISION / APPROVAL ACTION"},
 ],
 {originalM08Rate:"source",correctedPickup:"verified",rateDeviation:"unresolved",escalationSent:"decision"},
 "Correct. The original negotiated rate is a source fact from M08. The corrected pickup time, now confirmed to match, is a verified fact. Whether the $2,400 rate gets authorized is still unresolved. Sending the escalation is a decision/action the dispatcher has taken.",
 "Keep these four categories distinct — a source fact from the original negotiation is not the same as a fact that's since been verified, an outstanding question is not a decision, and an action taken (sending the escalation) is not the same as its outcome (whether it's approved)."),

 "M09-D21":choice("M09-D21","M09-S10",["M09-C10"],"bookingState","A teammate suggests just editing the RC v2 PDF so it shows $2,450 instead of $2,400, so the file matches the negotiated rate and everyone can move on. What should the dispatcher do?",[
   {key:"A",text:"Go along with it — the negotiated rate was $2,450 anyway, so the edited document would be 'correct'"},
   {key:"B",text:"Refuse — altering the document is fabrication of booking evidence; obtain a corrected source document from the broker or documented authorization instead"},
   {key:"C",text:"Edit it, but keep a private note of the original file just in case"},
   {key:"D",text:"Let the teammate do it since they're not the one who negotiated the load"},
 ],"B","Correct. Editing the document to show a figure that wasn't actually issued — even one matching what was originally negotiated — is fabricating evidence. Obtain a real corrected document or documented authorization instead.",
 "Fabricating, materially altering, or misrepresenting booking evidence — even quietly, even by someone else, and even to 'match' a figure that happens to be correct — is exactly this module's document-fabrication failure. A private backup copy doesn't make altering the working record acceptable.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-05"}),

 "M09-D22":multi("M09-D22","M09-S11",["M09-C12"],"finalState","Which documents belong in the dispatch packet right now?",[
   {key:"rcv2Current",text:"RC v2 (current version, pending rate authorization)"},
   {key:"driverEquipment",text:"Driver/truck/equipment identity sheet"},
   {key:"authorityExcerpt",text:"Relevant Authority Matrix excerpt"},
   {key:"rcv1Superseded",text:"RC v1 (superseded)"},
   {key:"cfb7710",text:"The CFB-7710 attachment (different, unrelated load)"},
 ], ["rcv2Current","driverEquipment","authorityExcerpt"],
 "Correct. The current version of the controlling document, the driver/equipment identity sheet, and the relevant authority excerpt belong in the packet. The superseded v1 and the unrelated CFB-7710 attachment must both be excluded.",
 "Only the current, verified, load-specific documents belong in the dispatch packet. A superseded version and a document from an entirely different load are both exclusions, not optional extras."),

 "M09-D23":choice("M09-D23","M09-S11",["M09-C12"],"finalState","A rushed colleague is about to send RC v1 to the driver because 'it has the right reference number.' What should happen?",[
   {key:"A",text:"Let it go through — the reference number is correct, so the document is identifiable"},
   {key:"B",text:"Stop it — RC v1 is superseded and contains terms (wrong pickup time, driver assist) that no longer apply; only the current authorized version belongs in the dispatch packet"},
   {key:"C",text:"Send both v1 and v2 so the driver has full history"},
   {key:"D",text:"Send v1 now since v2's rate still isn't authorized anyway"},
 ],"B","Correct. A matching reference number doesn't make a superseded document safe to dispatch from. Only the current, controlling version belongs in the packet.",
 "Using a superseded, wrong-terms document for dispatch — even with a matching reference number, even to give the driver 'full history,' and even because the current version has an unresolved item — is exactly this module's wrong-document-used-for-dispatch failure. An unresolved item on the current version is a reason to hold the packet, not a reason to substitute an outdated one.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-04"}),

 "M09-D24":choice("M09-D24","M09-S11",["M09-C13"],"driverEquipment","What belongs in the controlled driver handoff?",[
   {key:"A",text:"Verified booking facts (pickup, delivery, equipment) plus the dispatcher's own opinion on whether the route timing will work"},
   {key:"B",text:"Verified booking facts only — pickup, delivery, equipment, and current status — without inventing trip-planning or HOS conclusions"},
   {key:"C",text:"Only the rate, since that's what the driver cares about most"},
   {key:"D",text:"A summary that omits the pending rate-authorization status to avoid confusing the driver"},
 ],"B","Correct. The driver handoff communicates verified booking facts only. Trip-planning and HOS feasibility conclusions belong to M10/M11, not to an M09 handoff.",
 "Adding the dispatcher's own timing judgment invents a trip-planning conclusion that isn't M09's to make. Omitting the pending rate status to avoid 'confusing' the driver withholds a real fact rather than communicating verified status accurately."),

 "M09-D25":choice("M09-D25","M09-S12",["M09-C14"],"finalState","With Pat Alvarez's authorization on the $2,400 rate still pending, can this load be marked BOOKED / DISPATCH PACKET READY?",[
   {key:"A",text:"Yes — every operational term now matches, so it's effectively booked"},
   {key:"B",text:"No — the required authorization control remains unresolved; BOOKED / DISPATCH PACKET READY is not yet supported"},
   {key:"C",text:"Yes, and note the pending authorization as a minor footnote"},
   {key:"D",text:"Mark it HOLD, but go ahead and send the packet to the driver anyway"},
 ],"B","Correct. Every operational term matching does not substitute for a required authorization that hasn't been obtained yet. The load stays HOLD until that control is resolved.",
 "Marking a load BOOKED while a required control is still outstanding — even footnoted, and especially while sending the packet anyway under a HOLD label — is exactly this module's false-booking-completion failure.",
 {escalateAfterAttempts:2,criticalFailureFamily:"M09-CF-06"}),

 "M09-D26":choice("M09-D26","M09-S12",["M09-C14","M09-C15"],"finalState","Pat Alvarez authorizes the $2,400 rate in writing. What is the correct final status now?",[
   {key:"A",text:"BOOKED / DISPATCH PACKET READY, with the authorization documented in the record"},
   {key:"B",text:"Still HOLD, since the rate changed from the original negotiation"},
   {key:"C",text:"ESCALATE again, just to be safe"},
   {key:"D",text:"BOOKED, but only verbally — no need to update the written record"},
 ],"A","Correct. With every material term resolved and the rate deviation now properly authorized and documented, the traceable final status is BOOKED / DISPATCH PACKET READY.",
 "Once the authorization is actually obtained and documented, continuing to hold or re-escalate serves no purpose — but the authorization must be reflected in the written record, not left as a verbal understanding."),

 "M09-D27":multi("M09-D27","M09-S12",["M09-C13","M09-C15"],"finalState","What must the M10 handoff include?",[
   {key:"verifiedFacts",text:"Verified booking facts (locations, dates, equipment, authorized rate)"},
   {key:"bookingNotOperational",text:"An explicit note that M09 booking control does not mean the trip is operationally complete"},
   {key:"tripPlanConclusion",text:"A dispatcher-authored conclusion about optimal routing"},
   {key:"hosConclusion",text:"A dispatcher-authored conclusion about HOS feasibility"},
   {key:"authorizationRecord",text:"The record of Pat Alvarez's rate authorization"},
 ], ["verifiedFacts","bookingNotOperational","authorizationRecord"],
 "Correct. The M10 handoff carries verified booking facts, the authorization record, and an explicit statement that booking control isn't the same as operational completion. Routing and HOS conclusions are M10/M11's job, not M09's.",
 "Inventing routing or HOS conclusions in the M09 handoff oversteps this module's boundary — those determinations belong to M10 and M11 respectively, using their own detailed processes, not a dispatcher's booking-stage guess."),
};

export const DECISION_ORDER=STAGES.flatMap(s=>s.decisionIds);
