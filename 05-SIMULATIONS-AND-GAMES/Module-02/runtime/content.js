// SIM-002 content data module.
// Deliberately isolated from SIM-001's content.js/logic.js/app.js — no shared imports —
// to guarantee zero regression risk to the approved SIM-001 runtime. Future consolidation
// into a shared engine is a documented option, not done here (see README).
//
// Source of truth for wording: 02-CURRICULUM/Module-02/ (all parts), 03-ASSESSMENTS/
// Practical-Assessments/Module-02-Practical.md, 03-ASSESSMENTS/Instructor-Answer-Guides/
// Module-02.md, 04-STUDENT-TOOLS/Module-02-Tools/Module-02-Decision-Tool-Worksheet.md.

export const STAGES = [
  { id: "SIM02-S1", title: "Who Do You Represent?", decisionIds: ["SIM02-D01", "SIM02-D02"] },
  { id: "SIM02-S2", title: "First Freight Opportunity", decisionIds: ["SIM02-D03", "SIM02-D04"] },
  { id: "SIM02-S3", title: "Shipper-Direct Request", decisionIds: ["SIM02-D05", "SIM02-D06", "SIM02-D07"] },
  { id: "SIM02-S4", title: "Multi-Carrier Decision", decisionIds: ["SIM02-D08", "SIM02-D09"] },
  { id: "SIM02-S5", title: "Rejected Load Event", decisionIds: ["SIM02-D10", "SIM02-D11"] },
  { id: "SIM02-S6", title: "Contract Label Event", decisionIds: ["SIM02-D12", "SIM02-D13"] },
  { id: "SIM02-S7", title: "Final Boundary Decision", decisionIds: ["SIM02-D14", "SIM02-D15"] },
];

export const ARTIFACTS = {
  carrierRelationshipFile: {
    title: "Carrier Representation Profile",
    lines: [
      "Represented carrier: Meridian Line Freight LLC",
      "Relationship: ongoing, preexisting agreement, continuing basis",
      "Equipment: 53-foot dry van",
      "Standing lanes: Midwest regional",
      "Your role: source and coordinate loads for Meridian Line Freight only",
    ],
  },
  opportunityAEmail: {
    title: "Broker Load Email",
    lines: [
      "From: Central Plains Brokerage",
      "To: Dispatch (Meridian Line Freight)",
      "\"We have a dry van load matching Meridian's lanes and equipment. Offering it to you directly for Meridian. Interested?\"",
    ],
  },
  opportunityBEmail: {
    title: "Shipper-Direct Email",
    lines: [
      "From: Harlow Manufacturing (shipper)",
      "To: Dispatch",
      "\"We have three loads this week. You work with several carriers, right? Just pick whichever of your carriers can take each one and let us know.\"",
    ],
  },
  carrierRoster: {
    title: "Carrier-Client Roster",
    lines: [
      "Meridian Line Freight LLC — 53-ft dry van — Midwest regional",
      "Falcon Point Transport — 53-ft dry van — Midwest regional (overlaps with Meridian)",
      "Redline Freight Co. — 53-ft dry van — Midwest regional (overlaps with Meridian and Falcon Point)",
    ],
  },
  nonOverlapRoster: {
    title: "Carrier-Client Roster (Non-Overlapping)",
    lines: [
      "Meridian Line Freight LLC — 53-ft dry van — Midwest regional only",
      "Summit Ridge Tank Lines — tank trailer — Gulf Coast regional only",
      "No shared equipment type, no shared operating territory.",
    ],
  },
  carrierRejectionMessage: {
    title: "Carrier Rejection Message",
    lines: [
      "From: Meridian Line Freight",
      "To: Dispatch",
      "\"Can't cover this one — driver's out of hours. You'll have to let the broker know.\"",
    ],
  },
  compensationNote: {
    title: "Compensation Note",
    lines: [
      "Falcon Point Transport's dispatch agreement pays a higher per-load fee than Meridian's.",
      "This fact is provided for the scenario only — compensation amount does not itself resolve the classification question.",
    ],
  },
  bonaFideAgentContract: {
    title: "Dispatch-Service Agreement Excerpt",
    lines: [
      "\"This Agreement establishes [Dispatch Business] as a bona fide agent of [Carrier], acting under Carrier's direction on a continuing basis.\"",
      "— Title of the agreement, as written.",
    ],
  },
  bonaFideAgentConduct: {
    title: "Internal Decision Record",
    lines: [
      "Actual practice this month: a shipper sends freight directly to the dispatch business. The dispatch business receives the load first, then decides afterward which of several unrelated represented carriers will move it, based on which carrier is available that day.",
    ],
  },
  finalScenarioFile: {
    title: "Freight Opportunity Sheet (Incomplete)",
    lines: [
      "A represented carrier's dispatcher is contacted about a load. Some details are known: the carrier has an ongoing relationship and a preexisting agreement.",
      "Missing: whether this specific load was offered directly to this carrier alone, or whether the dispatcher had any role in choosing among carriers for it.",
    ],
  },
};

export const COMPETENCY_LABELS = {
  A: "Identifying who you represent",
  B: "Identifying the source/control of the opportunity",
  C: "Recognizing carrier-side coordination",
  D: "Recognizing discretionary allocation-of-traffic risk",
  E: "Distinguishing labels from actual conduct",
  F: "Distinguishing return/decline from reassignment",
  G: "Recognizing when facts are insufficient",
  H: "Selecting the right STOP / IDENTIFY / CHECK / ESCALATE response",
};

export const DECISIONS = {
  "SIM02-D01": {
    id: "SIM02-D01",
    stageId: "SIM02-S1",
    type: "choice",
    competency: "A",
    artifact: "carrierRelationshipFile",
    prompt: "Based on this file, who do you represent in this scenario?",
    choices: [
      { key: "A", text: "Central Plains Brokerage" },
      { key: "B", text: "Meridian Line Freight LLC" },
      { key: "C", text: "Whichever carrier offers the best rate" },
      { key: "D", text: "The shipper whose freight is being moved" },
    ],
    correctKey: "B",
    correctFeedback: "You represent Meridian Line Freight LLC — the motor carrier with whom you have an ongoing, preexisting agreement.",
    remediation: "Your represented carrier is the one you have the continuing relationship and agreement with, not a broker, a shipper, or whichever party seems most advantageous in the moment.",
  },
  "SIM02-D02": {
    id: "SIM02-D02",
    stageId: "SIM02-S1",
    type: "multiselect",
    competency: "B",
    prompt: "Select every fact from the file that is currently KNOWN. (Select all that apply.)",
    options: [
      { key: "relationship", text: "The relationship with Meridian is ongoing and preexisting" },
      { key: "equipment", text: "Meridian's equipment type and standing lanes" },
      { key: "thisLoad", text: "Whether today's specific load was offered to Meridian alone" },
      { key: "otherCarriers", text: "Whether any other carrier was considered for today's load" },
    ],
    correctSet: ["relationship", "equipment"],
    correctFeedback: "Correct — the relationship and equipment/lane facts are established in the file. Today's specific load hasn't been described yet, so nothing about it is known yet.",
    remediation: "Only select what this specific file actually states. The relationship and equipment/lanes are established; today's specific load facts haven't been presented yet — don't assume them.",
  },
  "SIM02-D03": {
    id: "SIM02-D03",
    stageId: "SIM02-S2",
    type: "choice",
    competency: "C",
    artifact: "opportunityAEmail",
    prompt: "How should this opportunity be classified?",
    choices: [
      { key: "A", text: "Consistent with Carrier-Side Agency" },
      { key: "B", text: "More Facts Required" },
      { key: "C", text: "Significant Brokerage Risk" },
    ],
    correctKey: "A",
    correctFeedback: "This is a load matching your one represented carrier's equipment and lanes, offered directly for that carrier. No allocation decision among competing carriers is involved.",
    remediation: "Look at who the load was offered to and whether you're choosing among multiple carriers. Here, it's offered directly for your one represented carrier — that's the core carrier-side pattern.",
  },
  "SIM02-D04": {
    id: "SIM02-D04",
    stageId: "SIM02-S2",
    type: "multiselect",
    competency: "C",
    prompt: "Select the fact(s) that support this classification. (Select all that apply.)",
    options: [
      { key: "oneOffer", text: "The load was offered directly for one specific represented carrier" },
      { key: "noChoice", text: "No choice among competing carriers was required" },
      { key: "brokerContact", text: "A broker was involved in the communication" },
      { key: "higherPay", text: "The load pays more than average" },
    ],
    correctSet: ["oneOffer", "noChoice"],
    correctFeedback: "Correct. Whether a broker is on the other end of the communication doesn't change the analysis by itself, and pay level isn't a classification factor here.",
    remediation: "Broker involvement in communication and pay level aren't what makes this carrier-side agency. Focus on whether the load was offered for one carrier with no allocation choice required.",
  },
  "SIM02-D05": {
    id: "SIM02-D05",
    stageId: "SIM02-S3",
    type: "choice",
    competency: "B",
    artifact: "opportunityBEmail",
    prompt: "Who supplied this freight opportunity, and who would be selecting which carrier moves each load?",
    choices: [
      { key: "A", text: "A broker supplied it; the shipper will select the carrier" },
      { key: "B", text: "The shipper supplied it directly; the dispatcher would be selecting among carriers" },
      { key: "C", text: "Meridian Line Freight supplied it; no selection is needed" },
      { key: "D", text: "It's unclear who supplied it" },
    ],
    correctKey: "B",
    correctFeedback: "The shipper is contacting the dispatch operation directly and explicitly asking the dispatcher to choose among carriers — this is the core fact pattern to watch for.",
    remediation: "Read the email again: the shipper supplied the freight directly and is asking the dispatcher to pick a carrier — that combination is the important fact here.",
  },
  "SIM02-D06": {
    id: "SIM02-D06",
    stageId: "SIM02-S3",
    type: "choice",
    competency: "D",
    prompt: "How should this situation be classified?",
    choices: [
      { key: "A", text: "Consistent with Carrier-Side Agency — normal dispatching for represented carriers" },
      { key: "B", text: "More Facts Required — nothing concerning yet" },
      { key: "C", text: "Significant Brokerage Risk — the dispatcher would be exercising discretionary allocation of shipper-supplied freight among multiple represented carriers" },
    ],
    correctKey: "C",
    correctFeedback: "Receiving freight directly from a shipper and then choosing which of several represented carriers will move it is exactly the allocation-of-traffic pattern that presents significant brokerage risk. STOP and escalate rather than proceeding as ordinary dispatching.",
    remediation: "This is not ordinary carrier-side coordination and it isn't merely a missing-facts situation — the shipper is asking you to allocate its freight among multiple carriers. That is a serious, recognizable brokerage-risk pattern.",
    escalateAfterAttempts: 2,
  },
  "SIM02-D07": {
    id: "SIM02-D07",
    stageId: "SIM02-S3",
    type: "multiselect",
    competency: "D",
    prompt: "Select every fact that contributes to the risk here. (Select all that apply.)",
    options: [
      { key: "shipperDirect", text: "The shipper contacted the dispatch operation directly" },
      { key: "multipleLoads", text: "Multiple loads are involved" },
      { key: "chooseCarrier", text: "The dispatcher would be choosing which carrier gets each load" },
      { key: "emailUsed", text: "The request arrived by email rather than phone" },
    ],
    correctSet: ["shipperDirect", "chooseCarrier"],
    correctFeedback: "Correct. The number of loads and the communication method (email vs. phone) don't drive the classification — direct shipper contact plus dispatcher-side carrier selection does.",
    remediation: "The controlling facts are who supplied the freight and who is choosing the carrier — not how many loads there are or what communication channel was used.",
  },
  "SIM02-D08": {
    id: "SIM02-D08",
    stageId: "SIM02-S4",
    type: "choice",
    competency: "D",
    artifact: "carrierRoster",
    prompt: "These three carriers all overlap in equipment and territory. Which statement is correct?",
    choices: [
      { key: "A", text: "Representing all three is automatically fine because you represent carriers, not brokers" },
      { key: "B", text: "Representing multiple overlapping carriers is not itself a violation — the risk is if you exercise discretion allocating a single freight opportunity among them" },
      { key: "C", text: "Representing more than one carrier is automatically prohibited" },
      { key: "D", text: "Overlap in equipment and territory automatically makes this brokerage" },
    ],
    correctKey: "B",
    correctFeedback: "Representing multiple carriers — even overlapping ones — is not itself the problem. The risk factor is discretionary allocation of a specific opportunity among them, not the roster structure alone.",
    remediation: "Neither 'always fine' nor 'automatically prohibited' is correct. The number of carriers or their overlap isn't the test — discretionary allocation of a specific freight opportunity among competing carriers is.",
  },
  "SIM02-D09": {
    id: "SIM02-D09",
    stageId: "SIM02-S4",
    type: "choice",
    competency: "D",
    artifact: "nonOverlapRoster",
    prompt: "Now compare this roster. How should sourcing within each carrier's own standing scope be classified here?",
    choices: [
      { key: "A", text: "Consistent with Carrier-Side Agency — no overlap means no allocation choice exists between these two carriers for their own freight" },
      { key: "B", text: "Significant Brokerage Risk — representing two carriers is inherently risky" },
      { key: "C", text: "More Facts Required — cannot classify without knowing compensation" },
    ],
    correctKey: "A",
    correctFeedback: "With genuinely non-overlapping equipment and territory, there's no discretionary choice to make between these two carriers for their own standing freight — each stays within its own lane.",
    remediation: "Contrast this with the overlapping roster in the prior decision — here, non-overlap removes the allocation-choice risk. Representing two carriers by itself isn't the issue.",
  },
  "SIM02-D10": {
    id: "SIM02-D10",
    stageId: "SIM02-S5",
    type: "choice",
    competency: "F",
    artifact: "carrierRejectionMessage",
    prompt: "Meridian rejected this load. The load originally came from a broker for Meridian specifically. What should you do?",
    choices: [
      { key: "A", text: "Return the opportunity to its source (the broker) and let them know Meridian can't cover it" },
      { key: "B", text: "Reassign the load to a different represented carrier without returning it first" },
      { key: "C", text: "Quietly hold onto the load and decide later" },
      { key: "D", text: "Assign it to whichever of your other carriers pays the best dispatch fee" },
    ],
    correctKey: "A",
    correctFeedback: "Returning a declined opportunity to its source is materially different from taking control of it and reallocating it yourself. Returning it is the low-risk path; reallocating it is where the risk begins.",
    remediation: "Declining and returning an opportunity to its source is not the same as taking control of it and choosing a different carrier yourself. The latter starts to look like allocation of traffic — see the next decision for why this matters even more when pay is a factor.",
    escalateAfterAttempts: 2,
  },
  "SIM02-D11": {
    id: "SIM02-D11",
    stageId: "SIM02-S5",
    type: "multiselect",
    competency: "F",
    artifact: "compensationNote",
    prompt: "Why is redirecting this load to Falcon Point (a higher-paying carrier) risky, rather than simply returning it? Select all that apply.",
    options: [
      { key: "allocation", text: "It involves the dispatcher choosing among carriers for freight that wasn't offered to them directly" },
      { key: "compReason", text: "Choosing based on which carrier pays the dispatcher more adds a self-interested allocation motive on top of the discretion itself" },
      { key: "fasterDelivery", text: "It might get the load delivered faster" },
      { key: "brokerUnaware", text: "The broker doesn't need to know about the reassignment" },
    ],
    correctSet: ["allocation", "compReason"],
    correctFeedback: "Correct. Faster delivery and broker awareness aren't the controlling factors — the discretionary carrier choice, especially compensation-motivated, is what creates the risk.",
    remediation: "Delivery speed and whether the broker finds out aren't what makes this risky. The real issue is the dispatcher exercising discretion to pick a carrier for freight that wasn't offered to them, especially when compensation is the reason.",
  },
  "SIM02-D12": {
    id: "SIM02-D12",
    stageId: "SIM02-S6",
    type: "choice",
    competency: "E",
    artifact: "bonaFideAgentContract",
    prompt: "The agreement calls this a \"bona fide agent\" relationship. Does that title settle the classification question?",
    choices: [
      { key: "A", text: "Yes — the written label controls regardless of what actually happens" },
      { key: "B", text: "No — the label is relevant evidence, but actual conduct controls the real classification" },
      { key: "C", text: "No — written agreements are irrelevant and should be ignored entirely" },
      { key: "D", text: "Yes, but only if the agreement is notarized" },
    ],
    correctKey: "B",
    correctFeedback: "A label can be supporting evidence, but it does not by itself decide the classification — what actually happens in practice controls.",
    remediation: "Neither extreme is right: the label isn't meaningless, but it also isn't the final word. Conduct is what actually decides this.",
  },
  "SIM02-D13": {
    id: "SIM02-D13",
    stageId: "SIM02-S6",
    type: "choice",
    competency: "E",
    artifact: "bonaFideAgentConduct",
    prompt: "Now compare the actual conduct described here against the \"bona fide agent\" label. How should this be classified?",
    choices: [
      { key: "A", text: "Consistent with Carrier-Side Agency — the contract label settles it" },
      { key: "B", text: "Significant Brokerage Risk — receiving shipper freight first, then choosing among unrelated represented carriers afterward, is the allocation-of-traffic pattern regardless of the label" },
      { key: "C", text: "More Facts Required — the contract title needs to specify more detail" },
      { key: "D", text: "Cannot be classified without a lawyer present" },
    ],
    correctKey: "B",
    correctFeedback: "This conduct — receiving the shipper's freight first, then deciding afterward which unrelated carrier will move it — matches the same allocation-of-traffic risk pattern seen in Stage 3, no matter what the contract is titled.",
    remediation: "The label says \"bona fide agent,\" but the conduct described (receive freight first, choose a carrier afterward, from an unrelated pool) is the same risk pattern already seen with the shipper-direct scenario. Don't let the label override what's actually happening.",
    escalateAfterAttempts: 2,
  },
  "SIM02-D14": {
    id: "SIM02-D14",
    stageId: "SIM02-S7",
    type: "choice",
    competency: "G",
    artifact: "finalScenarioFile",
    prompt: "Key facts are missing from this file. What is the correct response?",
    choices: [
      { key: "A", text: "Assume it's fine since the carrier has an ongoing relationship" },
      { key: "B", text: "Assume it's risky since shipper-direct contact is often risky" },
      { key: "C", text: "STOP — identify exactly which facts are missing, check them before concluding, and escalate if they can't be resolved" },
      { key: "D", text: "Guess based on which classification seems more common in this simulation" },
    ],
    correctKey: "C",
    correctFeedback: "With controlling facts missing — specifically, whether this load was offered directly for this carrier alone, or whether any allocation choice was involved — the correct move is STOP → IDENTIFY → CHECK → ESCALATE, not a guess in either direction.",
    remediation: "An ongoing relationship doesn't resolve this specific load's facts, and shipper-direct contact isn't automatically risky either — Stage 2 showed a safe carrier-side pattern too. When controlling facts are missing, the answer is to identify and check them, not guess.",
  },
  "SIM02-D15": {
    id: "SIM02-D15",
    stageId: "SIM02-S7",
    type: "sequencing",
    competency: "H",
    prompt: "Put the correct response steps in order for this situation.",
    items: [
      { key: "identify", text: "IDENTIFY exactly which facts are missing (was this offered to one carrier alone? was any allocation choice involved?)" },
      { key: "stop", text: "STOP — do not proceed or classify yet" },
      { key: "check", text: "CHECK the missing facts through an appropriate source before concluding" },
      { key: "escalate", text: "ESCALATE if the facts cannot be resolved or the classification remains uncertain" },
    ],
    correctOrder: ["stop", "identify", "check", "escalate"],
    correctFeedback: "STOP first, so you don't proceed on an incomplete picture. Then IDENTIFY precisely what's missing. Then CHECK it through an appropriate source. Then ESCALATE if it's still unresolved.",
    remediation: "The sequence matters: stop before anything else, then identify the specific gap, then check it, and only escalate if checking doesn't resolve it.",
  },
};

export const DECISION_ORDER = STAGES.flatMap((s) => s.decisionIds);
