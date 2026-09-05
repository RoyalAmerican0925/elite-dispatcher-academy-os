export const CRITICAL_FAMILIES = {
  "M02-CF-01": { decisionId:"SIM02-D06", label:"Discretionary allocation of shipper-supplied freight" },
  "M02-CF-02": { decisionId:"SIM02-D10", label:"Unauthorized redirect instead of return to source" },
  "M02-CF-03": { decisionId:"SIM02-D13", label:"Actual allocation conduct contradicts agency label" },
};

export const DECISION_TO_CRITICAL_FAMILY = Object.fromEntries(Object.entries(CRITICAL_FAMILIES).map(([family,v])=>[v.decisionId,family]));

export const REASSESSMENTS = {
  "M02-CF-01": {
    scenario:"A produce shipper sends one open load to your dispatch service and asks you to decide whether Carrier Red or Carrier Blue should receive it. Both are represented clients with overlapping equipment and lanes.",
    prompt:"What is the correct operational response?",
    choices:{A:"Choose the carrier with the best dispatch fee and proceed",B:"Do not allocate the shipper-supplied load among competing represented carriers as ordinary dispatching; stop and escalate the authority question",C:"Proceed because both carriers signed dispatch agreements"},
    correctKey:"B",
  },
  "M02-CF-02": {
    scenario:"A broker offers a load specifically for Carrier North. Carrier North declines. You also represent Carrier South, but the broker has not offered the load to Carrier South or authorized you to redirect it.",
    prompt:"What should you do next?",
    choices:{A:"Return/decline the opportunity to the broker rather than independently reassigning it",B:"Move it to Carrier South because you already represent that carrier",C:"Hold it until one of your clients wants it"},
    correctKey:"A",
  },
  "M02-CF-03": {
    scenario:"A contract calls your company a carrier agent. In practice, a shipper sends freight to you first and you then choose among several unrelated represented carriers that can all cover the lane.",
    prompt:"Which fact controls the operational risk analysis?",
    choices:{A:"The contract title makes the conduct automatically safe",B:"The actual freight-source and carrier-selection conduct must be analyzed; the label cannot erase discretionary allocation",C:"The tax form used by the dispatch company"},
    correctKey:"B",
  },
};
