// SIM-006 content data. Fictional training records; no sibling simulation imports.
// Built directly from the Module 06 Student Manual (Parts 01, 01B, 02, 03, 04),
// MODULE-06-MASTER-BRANCH.md, and the Module 06 Risk Classification & Decision
// Record / Entity vs Contact Authentication Worksheet production tools on
// academy-master-architecture. The 12-scenario Module 06 Scenario Lab (S-06-01
// through S-06-12) was read for classification logic but is NOT reused verbatim;
// this simulation uses a single progressive fictional case (Kestrel Logistics
// Group / Bristlecone Freight) distinct from any Scenario Lab item.
export const STAGES = [
  {id:"SIM06-S1",title:"Intake — Isolate Claims From Facts",decisionIds:["SIM06-D01","SIM06-D02"]},
  {id:"SIM06-S2",title:"Entity Verification",decisionIds:["SIM06-D03","SIM06-D04"]},
  {id:"SIM06-S3",title:"Contact Authentication",decisionIds:["SIM06-D05","SIM06-D06","SIM06-D07"]},
  {id:"SIM06-S4",title:"Load / Document Cross-Check",decisionIds:["SIM06-D08","SIM06-D09","SIM06-D10"]},
  {id:"SIM06-S5",title:"Payment-Path Event",decisionIds:["SIM06-D11","SIM06-D12","SIM06-D13"]},
  {id:"SIM06-S6",title:"Pressure / Social Engineering",decisionIds:["SIM06-D14","SIM06-D15"]},
  {id:"SIM06-S7",title:"Evidence Record + Risk Classification",decisionIds:["SIM06-D16","SIM06-D17"]},
  {id:"SIM06-S8",title:"Final Disposition + Handoff",decisionIds:["SIM06-D18","SIM06-D19","SIM06-D20"]},
];

export const ARTIFACTS = {
  intake:{title:"Load-Board Posting — Intake",lines:["Posting: dry van, Amarillo, TX to Springfield, MO, pickup tomorrow, $2,150, posted by 'Kestrel Logistics Group'","Posting lists an MC number and a phone number; no prior relationship with this broker exists in carrier records","An inbound email arrived minutes later from 'dispatch@kestrel-logisticsgroup.com' referencing this exact posting"]},
  entityCheck:{title:"Entity Check — What's Actually Known",lines:["Load-board posting self-reports: company name 'Kestrel Logistics Group', an MC number, a phone number","None of the posting's self-reported fields have yet been checked against an authoritative current source","This carrier's known corporate domain on file for Kestrel Logistics Group (from a prior unrelated reference document) is 'kestrellogistics.com' — no hyphen, singular 'group' absent from domain"]},
  entityLookup:{title:"Authoritative Entity Lookup Result",lines:["Current FMCSA lookup: Kestrel Logistics Group — MC number active, broker authority active for the contemplated activity","BMC-85 trust fund filing: active, no pending cancellation or trustee issue shown","This confirms the company is real and currently authorized to broker this type of freight"]},
  contactMismatch:{title:"Contact Channel Question",lines:["Inbound email domain: kestrel-logisticsgroup.com","Known corporate domain on file: kestrellogistics.com","The entity lookup confirmed the company is real and authorized — the sender's domain has not yet been separately checked"]},
  callbackChoice:{title:"Choosing a Verification Route",lines:["The suspicious email includes a callback number in its signature block","No previously verified number for this broker exists yet in carrier records for this new relationship","A general company phone number is listed on the FMCSA entity record and on an independently located corporate directory"]},
  callbackResult:{title:"Callback Result",lines:["Dispatcher called the number obtained from the independent corporate/FMCSA source, not the number in the suspicious email","The person answering confirmed Kestrel Logistics Group is a real, active brokerage","The person answering stated they have no record of a 'dispatch@kestrel-logisticsgroup.com' address and no employee matching the email signature name"]},
  documentSet:{title:"Document Set for This Load",lines:["Load-board posting: broker 'Kestrel Logistics Group', rate $2,150","Rate confirmation received by email: broker name 'Kestrel Logistic Group' (singular 'Logistic'), MC number one digit different from the posting, rate $2,150, pickup/delivery/commodity/equipment all otherwise matching","No prior rate confirmations from this broker exist on file for comparison beyond this transaction"]},
  discrepancyDetail:{title:"Discrepancy Detail",lines:["Broker legal name and MC number on the rate confirmation do not match the load-board posting or the FMCSA entity record obtained in Stage 2","Every other field (pickup, delivery, commodity, equipment, rate) matches exactly","This is the same category of issue as the contact-channel question in Stage 3 — a document detail, not yet independently resolved"]},
  paymentChangeEvent:{title:"Payment Instruction Change Request",lines:["An email arrives: 'Our accounting department changed banks — please send remittance for this load to the new account below, effective immediately.'","New account/routing information is provided directly in the body of this email","No prior payment history exists with this broker to compare against, since this would be the first load"]},
  paymentVerifyChoice:{title:"Verifying the Payment Change",lines:["The email with the new payment instructions includes a phone number to 'confirm receipt of this change'","The independently obtained general company number (same one used for the earlier callback) remains available","The person reached at the independently obtained number in Stage 3 could not confirm the original email sender's identity"]},
  pressureEvent1:{title:"Urgency Applied",lines:["Follow-up email: 'We need confirmation in the next five minutes or we are moving this load to another carrier.'","No new material information accompanies this message","The unresolved document mismatch and unconfirmed sender identity from earlier stages are still unresolved"]},
  pressureEvent2:{title:"Additional Pressure",lines:["A second message states: 'Our compliance manager already approved this on a call with your dispatch team.'","Carrier records show no such call or approval on file","The message also suggests: 'No need to go through the main verification line again, this is already handled.'"]},
  evidenceSummary:{title:"Evidence Summary at This Point",lines:["Entity: Kestrel Logistics Group — MC/authority/financial-security confirmed active via an authoritative current source (Stage 2)","Contact: the specific individual/email sending these messages could not be confirmed by the independently-reached company contact — a direct contradiction (Stage 3)","Documents: broker legal name and MC number mismatch between the posting and the rate confirmation, unresolved (Stage 4)","Payment: a payment-instruction change was requested and could not be confirmed through the independently obtained channel (Stage 5)","Pressure: two escalating urgency/authority-bypass messages have been sent with no new verifying information (Stage 6)"]},
  finalCase:{title:"Case File at Disposition",lines:["No competent authority (carrier compliance, management, or law enforcement) has made any finding of fraud in this case file","The unresolved contact contradiction and document mismatch remain unresolved at this point","No payment has been sent and no load has been dispatched under this broker relationship"]},
};

export const COMPETENCY_LABELS={
 "C01":"Receive and classify incoming information",
 "C02":"Separate claims from verified facts",
 "C03":"Verify broker/entity information using appropriate evidence",
 "C04":"Distinguish entity verification from contact authentication",
 "C05":"Authenticate contact through a trusted independent route",
 "C06":"Cross-check load and document information",
 "C07":"Identify and investigate material discrepancies",
 "C08":"Verify payment/remittance changes independently",
 "C09":"Preserve evidence",
 "C10":"Classify risk without unsupported accusation",
 "C11":"Resist urgency/social-engineering pressure",
 "C12":"Choose PROCEED / VERIFY / HOLD / ESCALATE / DECLINE appropriately",
 "C13":"Communicate verification problems professionally",
 "C14":"Stay inside dispatcher authority",
};

const choice=(id,stageId,competency,artifact,prompt,choices,correctKey,correctFeedback,remediation,extra={})=>({id,stageId,type:"choice",competency,artifact,prompt,choices,correctKey,correctFeedback,remediation,...extra});
const multi=(id,stageId,competency,artifact,prompt,options,correctSet,correctFeedback,remediation,extra={})=>({id,stageId,type:"multiselect",competency,artifact,prompt,options,correctSet,correctFeedback,remediation,...extra});
const categorize=(id,stageId,competency,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,extra={})=>({id,stageId,type:"categorize",competency,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,...extra});

export const DECISIONS={

 "SIM06-D01":categorize("SIM06-D01","SIM06-S1","C01","intake","Classify each item from the intake posting and email.",[
   {key:"companyName",text:"The company name 'Kestrel Logistics Group' as self-reported on the posting"},
   {key:"mcNumber",text:"The MC number as self-reported on the posting"},
   {key:"emailArrived",text:"That an email referencing this posting arrived"},
   {key:"senderIsBroker",text:"That the email sender is an authorized representative of Kestrel Logistics Group"},
 ],[
   {key:"known",label:"KNOWN"},
   {key:"claimed",label:"CLAIMED"},
   {key:"needsVerification",label:"NEEDS VERIFICATION"},
 ],
 {companyName:"claimed",mcNumber:"claimed",emailArrived:"known",senderIsBroker:"needsVerification"},
 "Correct. The company name and MC number are self-reported claims from a posting, not yet independently confirmed — CLAIMED. That an email arrived is directly observable — KNOWN. Whether the sender is actually authorized to speak for the company is exactly the entity-vs-contact question this module exists to test — NEEDS VERIFICATION, not assumed true or false.",
 "Do not convert a self-reported posting detail into a known fact just because it's written down, and do not treat the sender's authorization as already resolved just because an email arrived referencing real details. What can be directly observed (an email arrived) is KNOWN; what the posting asserts about itself is CLAIMED; whether the sender is who they claim to be is NEEDS VERIFICATION until checked."),

 "SIM06-D02":choice("SIM06-D02","SIM06-S1","C02","intake","The posting states the MC number belongs to a broker with active authority. What is the status of this statement right now, before any lookup has been performed?",[
   {key:"A",text:"It's a verified fact, since posting a false MC number would be unusual"},
   {key:"B",text:"It's an unverified claim that must be checked against a current authoritative source before being treated as fact"},
   {key:"C",text:"It doesn't matter either way at this stage"},
   {key:"D",text:"It's already disproven since the email domain looks off"},
 ],"B","Correct. Nothing in this module lets a claim become a fact just because it would be unusual for it to be false, or because a later, unrelated observation might turn out to be a problem. It's checked, not assumed.",
 "You do not have to prove fraud, but you also can't skip verification just because a claim seems statistically likely to be true. A self-reported detail is a claim until checked against an authoritative current source.",
 {escalateAfterAttempts:2}),

 "SIM06-D03":multi("SIM06-D03","SIM06-S2","C03","entityCheck","Which of the following are appropriate ways to verify the broker entity itself (not the contact)?",[
   {key:"currentAuthorityLookup",text:"Check current authority status through an authoritative FMCSA source"},
   {key:"financialSecurityCheck",text:"Check current BMC-84/BMC-85 financial-security status"},
   {key:"nameMatch",text:"Confirm the legal name/DBA matches the authoritative record"},
   {key:"assumeFromPosting",text:"Accept the posting's self-reported details as sufficient on their own"},
   {key:"domainLooksRight",text:"Conclude the entity is fine because the email domain looks professional"},
 ], ["currentAuthorityLookup","financialSecurityCheck","nameMatch"],
 "Correct. Entity verification means checking the company's identity, authority, and financial-security status against an authoritative current source — not accepting the posting's own claims about itself, and not judging entity legitimacy by how professional an email domain looks (that's a contact-channel question, not an entity question).",
 "A posting's self-reported details are exactly what need independent checking, not something to accept on their own. And a professional-looking email domain is a contact-channel signal, not evidence about whether the company itself is real and authorized — don't let the two questions blur together."),

 "SIM06-D04":choice("SIM06-D04","SIM06-S2","C04","entityLookup","The authoritative lookup confirms Kestrel Logistics Group's MC number is active with active broker authority and current financial security. Does this confirm that the person emailing the dispatcher is an authorized representative of this company?",[
   {key:"A",text:"Yes — an active, verified entity record means any message referencing that company can be trusted"},
   {key:"B",text:"No — entity verification and contact verification are two separate questions; a clean entity check does not answer who is actually contacting you"},
   {key:"C",text:"Yes, as long as the email mentions the correct MC number"},
   {key:"D",text:"It's irrelevant either way"},
 ],"B","Correct. A real, active, properly-secured company record answers the entity question. It does not answer whether this specific individual is actually an authorized representative of that company — that's contact verification, a separate step.",
 "Treating a verified entity as proof that an unverified contact is authorized is one of this module's defined critical-failure patterns. A real MC number, active authority, and clean financial security all describe the company — none of them describe the person in your inbox.",
 {escalateAfterAttempts:2}),

 "SIM06-D05":choice("SIM06-D05","SIM06-S3","C05","contactMismatch","The inbound email's domain doesn't match the known corporate domain on file for Kestrel Logistics Group. What's the correct next step?",[
   {key:"A",text:"Disregard it — the entity check in Stage 2 already confirmed the company is legitimate"},
   {key:"B",text:"Independently verify this specific contact through a trusted channel before relying on anything this sender says"},
   {key:"C",text:"Reply to the email asking the sender to confirm their identity"},
   {key:"D",text:"Assume this domain is a newer, valid company domain since companies sometimes change domains"},
 ],"B","Correct. A domain mismatch against the known corporate domain is exactly the kind of contact-channel question that requires independent verification, not disregard, not a reply to the questioned channel itself, and not an assumption that resolves it in the sender's favor.",
 "Replying to the questioned email doesn't verify anything — you'd just be asking the possibly-unauthorized sender to vouch for themselves. And an entity check answers a different question than this one. Independent, trusted-channel verification is required."),

 "SIM06-D06":choice("SIM06-D06","SIM06-S3","C05","callbackChoice","Which verification route is appropriate here?",[
   {key:"A",text:"Call the number listed in the suspicious email's signature block"},
   {key:"B",text:"Call the number obtained from the FMCSA entity record or an independently located corporate directory — not any number provided by the message in question"},
   {key:"C",text:"Text the number in the email and ask if it's really them"},
   {key:"D",text:"Look up the company on a general search engine and call whatever number appears first"},
 ],"B","Correct. If the contact information itself is what's in question, it can't be the thing used to verify itself. A number obtained independently — from the authoritative entity record or a separately located corporate source — is the trusted channel.",
 "A phone number provided by the very message you're questioning is not independent verification, whether you call it or text it. A quick, unverified search result carries the same problem. The trusted number has to come from a source independent of the questioned message."),

 "SIM06-D07":choice("SIM06-D07","SIM06-S3","C05","callbackResult","The independently obtained company contact confirms there is no employee matching the email's signature name and no record of that email address. What's the correct response?",[
   {key:"A",text:"Proceed anyway — the entity itself is still verified as real, so the load is probably fine"},
   {key:"B",text:"Treat this as a confirmed contact mismatch — do not book, and escalate rather than continuing to independently investigate the discrepancy yourself"},
   {key:"C",text:"Reply to the original email and ask them to explain the discrepancy"},
   {key:"D",text:"Assume it's a simple internal miscommunication at Kestrel and continue as planned"},
 ],"B","Correct. A trusted channel directly contradicting the incoming contact has moved past \"verify\" into a confirmed problem. This calls for escalation, not further independent investigation by the dispatcher and not proceeding.",
 "Ignoring a failed trusted-callback/contact-authentication check and proceeding anyway is one of this module's defined critical failures. Once the trusted channel actively contradicts the incoming contact, the correct move is DO NOT BOOK / ESCALATE — not more self-directed digging, and not treating the earlier entity check as still sufficient.",
 {escalateAfterAttempts:2}),

 "SIM06-D08":multi("SIM06-D08","SIM06-S4","C06","documentSet","Comparing the load-board posting and the rate confirmation, which fields actually show a mismatch requiring action?",[
   {key:"brokerName",text:"Broker legal name ('Kestrel Logistics Group' vs. 'Kestrel Logistic Group')"},
   {key:"mcNumber",text:"MC number (one digit different)"},
   {key:"rate",text:"Rate ($2,150 on both)"},
   {key:"pickup",text:"Pickup/delivery/commodity/equipment (all matching)"},
 ], ["brokerName","mcNumber"],
 "Correct. The broker legal name and MC number differ between the two documents — that's the actual mismatch. The rate and the operational details match and don't need to be flagged as discrepancies.",
 "Only flag what actually differs — the rate and operational details here match across documents. The broker name and MC number are where the real inconsistency is."),

 "SIM06-D09":choice("SIM06-D09","SIM06-S4","C07","discrepancyDetail","How should this broker-name/MC-number mismatch be classified?",[
   {key:"A",text:"Minor and explainable — safe to disregard"},
   {key:"B",text:"Material and unresolved — requires verification before proceeding, not an automatic fraud conclusion"},
   {key:"C",text:"Conclusive proof of fraud"},
   {key:"D",text:"Irrelevant since the load details otherwise match"},
 ],"B","Correct. A broker name and MC number that don't match across your own documents is a material, unresolved discrepancy — it requires resolution before signing, but it is not by itself proof of fraud. It could be a clerical error, a related entity, or something more serious; verification determines which.",
 "This discrepancy is too significant to wave off as minor, but jumping straight to \"fraud\" from a document mismatch alone overshoots what the evidence actually supports. Classify it as material and unresolved, and resolve it through verification."),

 "SIM06-D10":choice("SIM06-D10","SIM06-S4","C07","discrepancyDetail","Given the unresolved name/MC mismatch, what's the correct action regarding the rate confirmation?",[
   {key:"A",text:"Sign the rate confirmation now — the load details otherwise match, so it's probably fine"},
   {key:"B",text:"Do not sign until the mismatch is resolved through trusted-channel verification; hold the transaction in the meantime"},
   {key:"C",text:"Sign it but mention the discrepancy in an email afterward"},
   {key:"D",text:"Refuse to ever work with this broker again without further discussion"},
 ],"B","Correct. An unresolved material mismatch means HOLD — do not sign, dispatch, reroute, or change anything — until it's resolved through independent verification.",
 "Proceeding through an unresolved material identity/document mismatch when the workflow calls for HOLD/VERIFY/ESCALATE is one of this module's defined critical failures. Signing now and sorting it out later reverses the required order — resolve first, then act.",
 {escalateAfterAttempts:2}),

 "SIM06-D11":choice("SIM06-D11","SIM06-S5","C08","paymentChangeEvent","An email requests that remittance be sent to a new bank account effective immediately. What's the correct first response?",[
   {key:"A",text:"Update the payment records with the new account so the next invoice goes out correctly"},
   {key:"B",text:"Stop — do not click, reply with confirmation, or change anything yet — and prepare to verify through a trusted channel"},
   {key:"C",text:"Ignore the email entirely without any follow-up"},
   {key:"D",text:"Ask a coworker informally whether it seems legitimate"},
 ],"B","Correct. New payment/remittance instructions are never trusted from the message alone. The required first move is to stop, not act, and move to trusted-channel verification.",
 "Acting on the new instructions — even just updating a record — skips the verification step entirely. Ignoring it without documenting or verifying isn't right either. Stop first, verify next."),

 "SIM06-D12":choice("SIM06-D12","SIM06-S5","C08","paymentVerifyChoice","How should the new payment instructions actually be verified?",[
   {key:"A",text:"Call the number provided in the email requesting the change, since it's convenient"},
   {key:"B",text:"Use the independently obtained trusted number from Stage 3 — not any contact information supplied by the change request itself — and do not treat the change as valid until confirmed that way"},
   {key:"C",text:"Proceed with the new instructions since the sender used the same email thread as the original posting"},
   {key:"D",text:"Split the difference — send half the payment to each account until it's sorted out"},
 ],"B","Correct. Payment-instruction changes are verified the same way any other contact claim is — through a previously established trusted channel, never through contact information supplied by the request itself. An existing thread doesn't establish safety either; the verification standard doesn't change based on how the request arrives.",
 "Following materially changed payment/remittance instructions based only on the inbound request — including calling a number the request itself provided — is one of this module's defined critical failures. The same-thread appearance doesn't establish safety, and there's no partial/half-payment workaround that substitutes for actual verification.",
 {escalateAfterAttempts:2}),

 "SIM06-D13":multi("SIM06-D13","SIM06-S5","C09","paymentVerifyChoice","What must be documented about this payment-change event?",[
   {key:"requestReceived",text:"That a payment-change request was received, with its content"},
   {key:"verificationAttempted",text:"That trusted-channel verification was attempted"},
   {key:"verificationResult",text:"The actual result of that verification attempt"},
   {key:"currentStatus",text:"That the change has NOT been made pending resolution"},
   {key:"assumedLegit",text:"A note that the change is probably legitimate since the broker seemed professional"},
 ], ["requestReceived","verificationAttempted","verificationResult","currentStatus"],
 "Correct. A complete evidence record captures what was requested, what verification was attempted, what it found, and the current (unchanged) status — not a guess about legitimacy based on impressions.",
 "An impression that the sender \"seemed professional\" is not evidence and doesn't belong in the record — document what was actually requested, attempted, found, and the current status instead."),

 "SIM06-D14":choice("SIM06-D14","SIM06-S6","C11","pressureEvent1","A message demands confirmation within five minutes or the load goes to another carrier. What's the correct response?",[
   {key:"A",text:"Confirm immediately to avoid losing the load, given how much is already on the line"},
   {key:"B",text:"Maintain the same verification standard regardless of the time pressure — the unresolved issues still need resolution before proceeding"},
   {key:"C",text:"Confirm partially, planning to sort out the unresolved issues afterward"},
   {key:"D",text:"Respond with hostility toward the sender for applying pressure"},
 ],"B","Correct. Urgency is itself a common manipulation pattern. The verification standard does not change based on how urgent or convincing a request sounds — the unresolved contact and document issues still require resolution.",
 "Caving to a deadline, partially confirming to \"sort it out later,\" and matching pressure with hostility are all unproductive. Urgency changes operational pressure, not the evidence standard."),

 "SIM06-D15":choice("SIM06-D15","SIM06-S6","C14","pressureEvent2","A message claims a compliance manager already approved this by phone and says not to use the main verification line again. What's the correct response?",[
   {key:"A",text:"Follow the instruction not to re-verify, since a manager-level approval was claimed"},
   {key:"B",text:"Independently decide to approve the load yourself based on your own judgment, since you're confident it's probably fine at this point"},
   {key:"C",text:"Do not accept an unverifiable claim of prior approval as a substitute for verification, and do not independently resolve this yourself — escalate to someone with actual authority to confirm or deny the claimed approval"},
   {key:"D",text:"Personally contact the shipper directly to try to resolve the confusion"},
 ],"C","Correct. A claimed approval that isn't on file, combined with an instruction to skip verification, is itself a pressure tactic. The correct move is neither to accept the claim nor to resolve it through your own independent judgment — escalate to someone with the actual authority to confirm it.",
 "Exceeding dispatcher/carrier-side authority in an attempt to 'solve' the problem — deciding on your own judgment that it's probably fine, or independently reaching out to other parties to sort it out yourself — is one of this module's defined critical failures. An unverifiable claim of approval is not a substitute for actual verification, and the correct response is escalation to someone who actually has that authority, not self-directed action.",
 {escalateAfterAttempts:2}),

 "SIM06-D16":multi("SIM06-D16","SIM06-S7","C10","evidenceSummary","Which of the following statements accurately describe the current evidence state? Select all that are accurate.",[
   {key:"entityVerified",text:"The broker entity (company, MC number, authority, financial security) has been verified through an authoritative current source"},
   {key:"contactContradicted",text:"The specific contact sending these messages has been contradicted by an independently verified source, not merely left unverified"},
   {key:"docMismatchUnresolved",text:"The broker name/MC number mismatch between documents remains unresolved"},
   {key:"paymentUnconfirmed",text:"The requested payment-instruction change has not been confirmed through a trusted channel"},
   {key:"fraudProven",text:"A competent authority has established that this is fraud"},
   {key:"pressureIsEvidence",text:"The urgency and authority-bypass messages are themselves evidence that something is wrong with the entity's registration"},
 ], ["entityVerified","contactContradicted","docMismatchUnresolved","paymentUnconfirmed"],
 "Correct. The entity is verified; the contact is contradicted (not merely unverified — actively contradicted); the document mismatch is unresolved; and the payment change is unconfirmed. No competent authority has established fraud, and pressure tactics are a behavioral red flag about this transaction — they don't retroactively change whether the entity's registration itself is valid, which was separately confirmed active.",
 "Knowingly representing an unverified material claim as verified fact — or the reverse, treating verified facts as disproven because of an unrelated red flag — is one of this module's defined critical failures. Keep each fact in its own lane: the entity's registration status doesn't change because of pressure tactics in a different part of this same transaction, and nothing here has been established as fraud by a competent authority."),

 "SIM06-D17":choice("SIM06-D17","SIM06-S7","C10","evidenceSummary","Given this evidence state, which risk classification is actually justified?",[
   {key:"A",text:"CLEAR — the entity is verified, so the transaction can proceed"},
   {key:"B",text:"DO NOT BOOK — the contradicted contact and unresolved document/payment issues make this transaction unsafe to proceed on as currently presented"},
   {key:"C",text:"CLEAR WITH DOCUMENTED QUALIFICATION — minor issues, note them and proceed"},
   {key:"D",text:"HOLD — pause briefly, then proceed once the five-minute deadline passes"},
 ],"B","Correct. A confirmed contact contradiction, an unresolved document mismatch, and an unconfirmed payment-change request together mean this transaction cannot safely proceed as currently presented — that's DO NOT BOOK, not CLEAR, not a minor documented qualification, and not a HOLD that resolves itself by waiting out an artificial deadline.",
 "A verified entity alone does not make this CLEAR — that's exactly the critical-failure pattern this module targets. The unresolved issues here are not minor, and they don't resolve themselves by letting a manufactured deadline pass. Choose the classification the evidence actually supports."),

 "SIM06-D18":choice("SIM06-D18","SIM06-S8","C12","finalCase","What is the correct final disposition for this load opportunity right now?",[
   {key:"A",text:"PROCEED — book the load and dispatch a driver"},
   {key:"B",text:"DECLINE — do not proceed with this load under this broker relationship as currently presented; escalate the contact contradiction for carrier-level review"},
   {key:"C",text:"VERIFY FURTHER on your own for as long as it takes, without escalating"},
   {key:"D",text:"PROCEED, but only for the physical pickup while continuing to sort out the paperwork afterward"},
 ],"B","Correct. Given the confirmed contact contradiction and unresolved document/payment issues, the load should not be booked or dispatched, and the contact contradiction specifically should be escalated to someone with the authority to pursue it further — not left to indefinite independent investigation by the dispatcher.",
 "Booking, partially proceeding with only the pickup, or continuing to self-investigate indefinitely all skip the required escalation step. A confirmed contact contradiction is a matter for carrier-level review, not something a dispatcher resolves alone or works around by proceeding partially.",
 {escalateAfterAttempts:2}),

 "SIM06-D19":multi("SIM06-D19","SIM06-S8","C13","finalCase","The written disposition reasoning must identify which of the following?",[
   {key:"whatVerified",text:"What was actually verified (entity status)"},
   {key:"whatUnresolved",text:"What remains unresolved (contact contradiction, document mismatch, payment change)"},
   {key:"evidence",text:"The evidence supporting the disposition"},
   {key:"nextAction",text:"The next required action"},
   {key:"owner",text:"Who owns the next decision, given escalation is required"},
   {key:"personalOpinion",text:"A personal opinion about whether the broker is probably a scammer"},
 ], ["whatVerified","whatUnresolved","evidence","nextAction","owner"],
 "Correct. Complete disposition reasoning covers what was verified, what remains unresolved, the supporting evidence, the next action, and who owns that next decision. A personal opinion about the sender's honesty is not evidence and does not belong in the record.",
 "Leave personal impressions and guesses out of the written record — document what was verified, what's still unresolved, the evidence itself, the next action, and who owns it. That's what makes the record usable for whoever picks this up next."),

 "SIM06-D20":choice("SIM06-D20","SIM06-S8","C13","finalCase","Which statement is the correct professional language for this disposition?",[
   {key:"A",text:"\"You're obviously trying to scam us, and we're reporting you.\""},
   {key:"B",text:"\"We have a contact-verification mismatch that needs to be resolved before we proceed; this has been escalated for review.\""},
   {key:"C",text:"\"This is definitely double brokering and fraud.\""},
   {key:"D",text:"\"We're not comfortable, so we're just going to ignore all your emails from now on.\""},
 ],"B","Correct. This states the actual verification problem, the current status, and the next step — without an accusation the evidence doesn't support.",
 "Making an unsupported fraud accusation instead of documenting the evidence and classifying the risk is one of this module's defined critical failures. Nothing in this case has been established as fraud or double brokering by a competent authority — use professional operational language, not accusatory language, and don't substitute silence for a documented escalation either.",
 {escalateAfterAttempts:2}),
};

export const DECISION_ORDER=STAGES.flatMap(s=>s.decisionIds);
