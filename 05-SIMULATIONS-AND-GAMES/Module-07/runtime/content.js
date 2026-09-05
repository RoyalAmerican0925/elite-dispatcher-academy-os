// SIM-007 content data — Rate & Profitability Decision Desk.
// Fictional training records. Built from Module 07 Student Manual Parts 01-03,
// MODULE-07-MASTER-BRANCH.md, the Module 07 Calculation Worksheet (P/U/A +
// TAKE/COUNTER/HOLD FOR DATA/DECLINE control), Load-Comparison Worksheet,
// Carrier Onboarding Cost-Information Worksheet, Knowledge Check, Exam +
// Answer Key, Practical + Practical Scoring Guide, and Instructor Guide on
// academy-master-architecture. All dollar figures, percentages, and fuel
// prices are FICTIONAL INSTRUCTIONAL ASSUMPTIONS, not current market data.
// Every number below was computed with code, not eyeballed (see the SIM-007
// Claude Build Handoff for the verification transcript). Rounding rule used
// throughout: dollars and RPM figures to 2 decimal places; gallons to 2
// decimal places; intermediate values carried at full precision before
// final rounding.
export const STAGES = [
  {id:"SIM07-S1",title:"Carrier Economic Profile",decisionIds:["SIM07-D01","SIM07-D02"]},
  {id:"SIM07-S2",title:"Incoming Competing Loads",decisionIds:["SIM07-D03","SIM07-D04","SIM07-D33"]},
  {id:"SIM07-S3",title:"Mileage Normalization",decisionIds:["SIM07-D05","SIM07-D06","SIM07-D07","SIM07-D08","SIM07-D09"]},
  {id:"SIM07-S4",title:"Fuel and Trip Costs",decisionIds:["SIM07-D10","SIM07-D11","SIM07-D12","SIM07-D13"]},
  {id:"SIM07-S5",title:"Margin Labeling",decisionIds:["SIM07-D14","SIM07-D15","SIM07-D16"]},
  {id:"SIM07-S6",title:"Accessorial Uncertainty",decisionIds:["SIM07-D17","SIM07-D18"]},
  {id:"SIM07-S7",title:"Payment / Cash-Flow Layer",decisionIds:["SIM07-D19","SIM07-D20","SIM07-D21"]},
  {id:"SIM07-S8",title:"Positioning and Operational Trade-Off",decisionIds:["SIM07-D22","SIM07-D23"]},
  {id:"SIM07-S9",title:"Changed Evidence / Counter Threshold",decisionIds:["SIM07-D24","SIM07-D25","SIM07-D26","SIM07-D27","SIM07-D28"]},
  {id:"SIM07-S10",title:"Final Carrier Briefing",decisionIds:["SIM07-D29","SIM07-D30","SIM07-D31","SIM07-D32"]},
];

export const ARTIFACTS = {
  carrierProfile:{title:"Carrier Economic Profile — Marsh Creek Transport (1 truck, dry van)",lines:["Truck's reported average loaded MPG: 6.6 (carrier's own historical figure)","Dispatcher fee per signed agreement on file: 5% of applicable revenue","Carrier's own reported all-in cost per mile (from onboarding, not dispatcher-calculated): $2.15 — FICTIONAL INSTRUCTIONAL ASSUMPTION","Carrier's average historical detention-collection rate: not yet reported by the carrier","Trailer type: 53' dry van"]},
  bravoUnknown:{title:"Intake Gap — Load Bravo",lines:["Load Bravo's destination/repositioning deadhead has not yet been provided by the broker at intake","This is a material unknown, not a known zero, until confirmed"]},
  loadsIntake:{title:"Load-Board Postings — Headline Figures Only",lines:["Load Alpha: $2,280 revenue, 600 loaded miles → loaded RPM $3.80","Load Bravo: $1,860 revenue, 560 loaded miles → loaded RPM $3.32","Load Charlie: $2,010 revenue, 580 loaded miles → loaded RPM $3.47","No deadhead, fuel, fee, or accessorial information has been factored in yet"]},
  loadDelta:{title:"A Fourth Opportunity Appears",lines:["Load Delta: $1,900 revenue","Loaded miles: not yet provided by the broker","Deadhead: not yet provided by the broker"]},
  mileageData:{title:"Confirmed Mileage Data (All Three Loads)",lines:["Load Alpha: origin deadhead 190 mi (confirmed), loaded miles 600, destination deadhead 0 mi (confirmed — delivers directly, no relevant repositioning)","Load Bravo: origin deadhead 20 mi (confirmed), loaded miles 560, destination deadhead 0 mi (confirmed by dispatch — verified, not assumed)","Load Charlie: origin deadhead 60 mi (confirmed), loaded miles 580, destination deadhead 40 mi (confirmed — relevant repositioning toward the next viable load zone)"]},
  fuelData:{title:"Fuel Inputs",lines:["Truck MPG (from carrier profile): 6.6","FICTIONAL INSTRUCTIONAL fuel price for this exercise: $3.95/gallon — not a current market figure","Fuel cost = total trip miles ÷ MPG × fuel price, using TOTAL trip miles, never loaded miles alone"]},
  tollsData:{title:"Route-Specific Costs",lines:["Load Alpha: $0 tolls","Load Bravo: $45 tolls (documented route-specific cost)","Load Charlie: $20 tolls"]},
  marginInputs:{title:"Included-Cost Inputs for Contribution Margin (Stage 5 — 5% dispatcher fee, no accessorial, no quick-pay yet)",lines:["Dispatcher fee per the signed agreement on file: 5% of gross revenue, applied to all three loads at this stage","Included costs at this stage: estimated fuel cost + tolls + dispatcher fee only","No factoring or quick-pay fee applies to any load at this stage"]},
  detentionClause:{title:"Load Charlie — Rate Confirmation Detention Clause",lines:["Rate confirmation states: detention pays after 2 free hours at $45/hour","Delivery has not yet occurred at time of evaluation","No arrival/departure documentation exists yet because the load has not been delivered"]},
  quickPayOffer:{title:"Load Charlie — Quick-Pay Option",lines:["Broker offers a quick-pay option: 3% fee for payment within 24 hours, instead of standard payment terms","This option is being considered in addition to the 5%-dispatcher-fee contribution margin already calculated for Charlie ($1,482.53)","FICTIONAL INSTRUCTIONAL percentage for this exercise"]},
  positioningData:{title:"Destination Positioning",lines:["Load Alpha delivers into a low-freight-volume area — likely 150+ miles of deadhead to the next viable load","Load Bravo's destination positioning has not been characterized in this case — no information provided either way","Load Charlie delivers into a high-freight-volume area — likely under 50 miles of deadhead to the next load"]},
  changedEvidence:{title:"Changed Evidence — Dispatcher Agreement Confirmed",lines:["The actual signed dispatcher agreement (not the 5% figure assumed in Stage 5) is now confirmed at 7% of gross revenue, applying to all three loads","The carrier has now stated explicit decision criteria: effective RPM at or above $3.00/total trip mile → TAKE without further discussion; $2.70–$2.99 → COUNTER toward a higher rate; below $2.70 → DECLINE unless positioning materially justifies HOLD/further discussion"]},
  finalBriefing:{title:"Case File at Final Disposition",lines:["Effective RPM (unaffected by the dispatcher-fee correction): Alpha $2.89, Bravo $3.21, Charlie $2.96","Corrected contribution margins (7% dispatcher fee): Alpha $1,647.60, Bravo $1,337.68, Charlie $1,442.33 (Charlie further reduced to $1,382.03 estimated if quick-pay is also chosen — quick-pay fee not yet finalized)","No competent party has made a final booking decision on any of the three loads","Charlie's detention clause remains undocumented/unearned at this point"]},
};

export const COMPETENCY_LABELS={
 "C01":"Classify known / unknown / assumed inputs",
 "C02":"Calculate total trip miles correctly",
 "C03":"Calculate loaded RPM",
 "C04":"Calculate effective RPM",
 "C05":"Identify loaded-mile blindness",
 "C06":"Estimate gallons/fuel from total miles + carrier MPG",
 "C07":"Apply verified trip-specific costs/fees",
 "C08":"Calculate and accurately label contribution margin",
 "C09":"Distinguish revenue, contribution margin, cash flow, and net/accounting profit",
 "C10":"Verify accessorial treatment before counting revenue",
 "C11":"Evaluate factoring/quick-pay effects without confusing speed with profit",
 "C12":"Weigh positioning without treating it as guaranteed value",
 "C13":"Reclassify/recalculate when evidence changes",
 "C14":"Compare multiple loads without relying on one metric",
 "C15":"Identify when missing information requires HOLD FOR DATA",
 "C16":"Derive a counter threshold from the carrier's stated economic criteria",
 "C17":"Communicate assumptions/exclusions professionally",
 "C18":"Preserve carrier final decision authority",
};

const choice=(id,stageId,competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,extra={})=>({id,stageId,type:"choice",competencies,artifact,prompt,choices,correctKey,correctFeedback,remediation,...extra});
const multi=(id,stageId,competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,extra={})=>({id,stageId,type:"multiselect",competencies,artifact,prompt,options,correctSet,correctFeedback,remediation,...extra});
const categorize=(id,stageId,competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,extra={})=>({id,stageId,type:"categorize",competencies,artifact,prompt,items,buckets,correctMap,correctFeedback,remediation,...extra});
const numeric=(id,stageId,competencies,artifact,prompt,correctValue,tolerance,unit,correctFeedback,remediation,extra={})=>({id,stageId,type:"numeric",competencies,artifact,prompt,correctValue,tolerance,unit,correctFeedback,remediation,...extra});

export const DECISIONS={

 "SIM07-D01":categorize("SIM07-D01","SIM07-S1",["C01"],"carrierProfile","Classify each item from the carrier economic profile.",[
   {key:"truckMPG",text:"Truck's reported average loaded MPG (6.6)"},
   {key:"dispatcherFee",text:"Dispatcher fee per signed agreement (5%)"},
   {key:"reportedBreakEven",text:"Carrier's own reported all-in cost per mile ($2.15)"},
   {key:"historicalDetentionRate",text:"Carrier's average historical detention-collection rate"},
   {key:"trailerType",text:"Trailer type (53' dry van)"},
 ],[
   {key:"usable",label:"USABLE FOR THIS EVALUATION"},
   {key:"unknown",label:"UNKNOWN / NOT YET PROVIDED"},
   {key:"irrelevant",label:"IRRELEVANT TO THIS ECONOMICS EVALUATION"},
 ],
 {truckMPG:"usable",dispatcherFee:"usable",reportedBreakEven:"usable",historicalDetentionRate:"unknown",trailerType:"irrelevant"},
 "Correct. MPG and dispatcher fee feed directly into today's calculations. The carrier's own reported break-even is usable as comparison context (it's the carrier's figure, not something the dispatcher recalculates). The historical detention-collection rate hasn't been provided, so it's unknown. Trailer type doesn't affect this load's economics.",
 "Don't confuse 'the carrier reported it' with 'it doesn't matter' — the reported break-even is usable context even though the dispatcher doesn't independently verify it. And don't treat an unreported figure as irrelevant just because it's inconvenient — a genuinely unknown input stays unknown."),

 "SIM07-D02":choice("SIM07-D02","SIM07-S1",["C01"],"bravoUnknown","Load Bravo's destination deadhead has not yet been provided by the broker. What should the dispatcher do right now?",[
   {key:"A",text:"Enter 0 miles for Bravo's destination deadhead so the total-trip-miles calculation can proceed"},
   {key:"B",text:"Classify it as UNKNOWN; only treat it as zero once that is actually confirmed (e.g., by dispatch or the broker) — never enter zero merely to keep the calculation moving"},
   {key:"C",text:"Assume a typical destination deadhead of 25 miles based on past loads"},
   {key:"D",text:"Skip total trip miles entirely and use loaded RPM for now"},
 ],"B","Correct. A missing input is not zero. Zero is a known numeric value; an unresolved field must stay classified as unknown until it's actually verified, and only then can it be entered as zero (or whatever the confirmed figure is).",
 "Converting a material unknown mileage into an assumed number — including an assumed zero — without disclosure or verification is exactly the fabricated-input failure this module's tools warn against. 'Keeping the calculation moving' is not a reason to invent a number.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-04"}),

 "SIM07-D03":multi("SIM07-D03","SIM07-S2",["C01","C05"],"loadsIntake","Based on the headline figures alone (revenue and loaded RPM only), which of these statements are correct?",[
   {key:"loadedRpmSufficient",text:"Loaded RPM alone is sufficient to rank these three loads for a final decision"},
   {key:"totalMilesNeeded",text:"Total trip miles are needed before the ranking can be considered reliable"},
   {key:"alphaStrongestNow",text:"Alpha's loaded RPM being the highest of the three means it is currently the strongest economic choice"},
   {key:"deadheadInfoNeeded",text:"More information about deadhead is needed before ranking these loads"},
 ], ["totalMilesNeeded","deadheadInfoNeeded"],
 "Correct. Loaded RPM only reflects paid miles; it says nothing about deadhead. Both total trip miles and deadhead information are required before any ranking based on these three loads is reliable.",
 "Loaded RPM is a starting point, not the answer. Neither 'loaded RPM alone is sufficient' nor 'Alpha is currently strongest' can be supported without deadhead and total-mile information."),

 "SIM07-D04":choice("SIM07-D04","SIM07-S2",["C05"],"loadsIntake","Loaded RPM ranks the three loads Alpha ($3.80) > Charlie ($3.47) > Bravo ($3.32). Is this ranking reliable enough to recommend a load to the carrier right now?",[
   {key:"A",text:"Yes — Alpha is clearly the strongest option"},
   {key:"B",text:"No — loaded RPM excludes deadhead; effective RPM must be calculated for all three before any ranking is reliable"},
   {key:"C",text:"Yes, as long as fuel cost is also considered"},
   {key:"D",text:"No, but only because Charlie's detention clause hasn't been discussed yet"},
 ],"B","Correct. Loaded RPM hides deadhead entirely. Effective RPM (revenue ÷ total trip miles) must be calculated for all three loads before any ranking can be trusted — this ranking may look completely different once deadhead is included.",
 "Making the final economic choice from loaded RPM/headline rate while bypassing material deadhead evidence is loaded-mile blindness — one of this simulation's defined critical failures. Considering fuel cost alone doesn't fix the underlying problem, and the detention clause isn't the reason this ranking is unreliable.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-03"}),

 "SIM07-D33":choice("SIM07-D33","SIM07-S2",["C15"],"loadDelta","Load Delta shows $1,900 revenue, but loaded miles and deadhead have not yet been provided by the broker. What is the correct disposition for Load Delta right now?",[
   {key:"A",text:"TAKE — $1,900 is a solid revenue figure"},
   {key:"B",text:"DECLINE — insufficient information usually means it isn't worth pursuing"},
   {key:"C",text:"HOLD FOR DATA — loaded miles and deadhead are material unknowns that could reasonably reverse any recommendation; no defensible TAKE/COUNTER/DECLINE is possible yet"},
   {key:"D",text:"COUNTER — ask for a higher rate before providing any other information"},
 ],"C","Correct. When a material unknown could reasonably reverse the economic recommendation, the defensible disposition is HOLD FOR DATA — not a guess in any direction — until the missing input is resolved.",
 "Both TAKE and DECLINE assume facts not in evidence, and COUNTER requires knowing enough about the economics to justify a threshold. With loaded miles and deadhead both unknown, none of those are defensible yet — HOLD FOR DATA is the only supported disposition."),

 "SIM07-D05":numeric("SIM07-D05","SIM07-S3",["C02"],"mileageData","Calculate Load Alpha's total trip miles (origin deadhead + loaded miles + relevant destination deadhead).",790,0,"miles",
 "Correct. 190 + 600 + 0 = 790 total trip miles.",
 "Total trip miles = origin deadhead + loaded miles + relevant destination/repositioning deadhead. For Alpha: 190 + 600 + 0 = 790."),

 "SIM07-D06":numeric("SIM07-D06","SIM07-S3",["C02"],"mileageData","Calculate Load Bravo's total trip miles.",580,0,"miles",
 "Correct. 20 + 560 + 0 = 580 total trip miles.",
 "Total trip miles = origin deadhead + loaded miles + relevant destination/repositioning deadhead. For Bravo: 20 + 560 + 0 = 580."),

 "SIM07-D07":numeric("SIM07-D07","SIM07-S3",["C02"],"mileageData","Calculate Load Charlie's total trip miles.",680,0,"miles",
 "Correct. 60 + 580 + 40 = 680 total trip miles.",
 "Total trip miles = origin deadhead + loaded miles + relevant destination/repositioning deadhead. For Charlie: 60 + 580 + 40 = 680. Do not forget the relevant destination deadhead — it's part of this load's real trip length."),

 "SIM07-D08":numeric("SIM07-D08","SIM07-S3",["C03"],"mileageData","Calculate Load Charlie's loaded RPM (gross revenue ÷ loaded miles).",3.47,0.02,"$/loaded mile",
 "Correct. $2,010 ÷ 580 ≈ $3.47 per loaded mile.",
 "Loaded RPM = gross load revenue ÷ loaded miles only. $2,010 ÷ 580 ≈ $3.47."),

 "SIM07-D09":categorize("SIM07-D09","SIM07-S3",["C04","C05","C14"],"mileageData","Rank the three loads by EFFECTIVE RPM (revenue ÷ total trip miles), not loaded RPM.",[
   {key:"alpha",text:"Load Alpha"},
   {key:"bravo",text:"Load Bravo"},
   {key:"charlie",text:"Load Charlie"},
 ],[
   {key:"first",label:"1st — HIGHEST effective RPM"},
   {key:"second",label:"2nd"},
   {key:"third",label:"3rd — LOWEST effective RPM"},
 ],
 {bravo:"first",charlie:"second",alpha:"third"},
 "Correct. Effective RPM: Bravo $3.21 (1st), Charlie $2.96 (2nd), Alpha $2.89 (3rd). This completely reverses the loaded-RPM ranking from Stage 2, where Alpha was 1st and Bravo was 3rd — exactly the loaded-mile-blindness trap this module is built to correct.",
 "Recalculate using revenue ÷ total trip miles for each load, not loaded miles. Once total trip miles are included, Alpha's heavy 190-mile origin deadhead drops it from the top of the loaded-RPM ranking to the bottom of the effective-RPM ranking — the advertised rate was not the answer.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-03"}),

 "SIM07-D10":numeric("SIM07-D10","SIM07-S4",["C06"],"fuelData","Calculate Load Alpha's estimated fuel gallons (total trip miles ÷ MPG).",119.70,0.5,"gallons",
 "Correct. 790 ÷ 6.6 ≈ 119.70 gallons.",
 "Estimated gallons = total trip miles ÷ truck MPG — always total trip miles, never loaded miles alone. 790 ÷ 6.6 ≈ 119.70."),

 "SIM07-D11":numeric("SIM07-D11","SIM07-S4",["C06"],"fuelData","Calculate Load Alpha's estimated fuel cost (estimated gallons × fuel price).",472.80,1,"$",
 "Correct. 119.70 gallons × $3.95 ≈ $472.80.",
 "Estimated fuel cost = estimated gallons × fuel price per gallon. 119.70 × $3.95 ≈ $472.80."),

 "SIM07-D12":numeric("SIM07-D12","SIM07-S4",["C06"],"fuelData","Calculate Load Bravo's estimated fuel cost.",347.12,1,"$",
 "Correct. 580 ÷ 6.6 ≈ 87.88 gallons; 87.88 × $3.95 ≈ $347.12.",
 "First find gallons (total trip miles ÷ MPG = 580 ÷ 6.6 ≈ 87.88), then multiply by fuel price: 87.88 × $3.95 ≈ $347.12."),

 "SIM07-D13":choice("SIM07-D13","SIM07-S4",["C07"],"tollsData","Bravo's route includes a $45 toll. Should this be included in Bravo's total included costs for this evaluation?",[
   {key:"A",text:"No — tolls are never included in these calculations"},
   {key:"B",text:"Yes — it's a documented, route-specific cost"},
   {key:"C",text:"Only if the carrier specifically asks for it to be included"},
   {key:"D",text:"Only if the toll exceeds $50"},
 ],"B","Correct. Tolls are a documented, known trip-specific cost and belong in the included-cost total, the same way fuel does.",
 "Tolls are exactly the kind of verified trip-specific cost this module's formulas are built to include. There's no $50 threshold rule, and waiting for the carrier to ask isn't necessary for a cost that's already documented."),

 "SIM07-D14":numeric("SIM07-D14","SIM07-S5",["C08"],"marginInputs","Calculate Load Alpha's estimated contribution margin (revenue − fuel − tolls − 5% dispatcher fee). Alpha: revenue $2,280, fuel $472.80, tolls $0, dispatcher fee 5%.",1693.20,2,"$",
 "Correct. Dispatcher fee: $2,280 × 5% = $114.00. Included costs: $472.80 + $0 + $114.00 = $586.80. Margin: $2,280 − $586.80 = $1,693.20.",
 "Calculate the dispatcher fee first ($2,280 × 5% = $114.00), add it to fuel and tolls for total included costs, then subtract that total from revenue: $2,280 − ($472.80 + $0 + $114.00) = $1,693.20."),

 "SIM07-D15":numeric("SIM07-D15","SIM07-S5",["C08"],"marginInputs","Calculate Load Bravo's estimated contribution margin. Bravo: revenue $1,860, fuel $347.12, tolls $45, dispatcher fee 5%.",1374.88,2,"$",
 "Correct. Dispatcher fee: $1,860 × 5% = $93.00. Included costs: $347.12 + $45 + $93.00 = $485.12. Margin: $1,860 − $485.12 = $1,374.88.",
 "Dispatcher fee: $1,860 × 5% = $93.00. Total included costs: $347.12 (fuel) + $45 (tolls) + $93.00 (dispatcher fee) = $485.12. Margin: $1,860 − $485.12 = $1,374.88."),

 "SIM07-D16":choice("SIM07-D16","SIM07-S5",["C08","C09"],"marginInputs","Alpha's calculation above ($1,693.20) should be labeled as:",[
   {key:"A",text:"Alpha's guaranteed net profit"},
   {key:"B",text:"estimated contribution margin under stated included-cost assumptions — not net profit, guaranteed profit, or take-home pay"},
   {key:"C",text:"Alpha's cash flow for the trip"},
   {key:"D",text:"the carrier's accounting profit"},
 ],"B","Correct. This figure only subtracts fuel, tolls, and dispatcher fee. Driver pay, maintenance, insurance, equipment payments, permits, taxes, and overhead are all excluded — it must be labeled as an estimated contribution margin under the stated included costs, nothing more.",
 "Representing a partial-cost margin as guaranteed profit, net profit, or take-home pay is one of this simulation's defined critical failures. Cash flow and accounting profit are also different concepts entirely — neither applies to this calculation.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-02"}),

 "SIM07-D17":choice("SIM07-D17","SIM07-S6",["C10"],"detentionClause","Charlie's rate confirmation states detention pays after 2 free hours at $45/hour. Delivery hasn't happened yet, so no detention has occurred or been documented. Should the possible detention revenue be added to Charlie's current revenue for this comparison?",[
   {key:"A",text:"Yes, since the term is documented in the rate confirmation"},
   {key:"B",text:"No — a documented clause is not the same as earned revenue; it isn't triggered or verified yet, so it must not be counted now"},
   {key:"C",text:"Yes, but only half of the possible amount, as a conservative estimate"},
   {key:"D",text:"No, and the clause should be removed from the record entirely since it hasn't happened"},
 ],"B","Correct. Possible accessorial revenue is not earned revenue. The clause exists and may apply later, but nothing has been triggered, documented, or earned yet — it must stay out of current revenue.",
 "Adding unearned or unverified accessorial revenue to guaranteed/current revenue — even a partial or conservative amount — is one of this simulation's defined critical failures. The clause also shouldn't be deleted from the record; it should be tracked as possible, not-yet-earned revenue, not discarded.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-01"}),

 "SIM07-D18":multi("SIM07-D18","SIM07-S6",["C10"],"detentionClause","What must happen before Charlie's detention revenue could actually be counted?",[
   {key:"deliveryAndRecords",text:"Delivery must occur and documented arrival/departure records must show time beyond the 2 free hours"},
   {key:"checkTerms",text:"The specific rate confirmation terms must be checked to confirm detention applies to this load as described"},
   {key:"estimateAverage",text:"An average detention amount from past loads should be estimated and added now"},
   {key:"checkCommissionBasis",text:"The dispatcher's own fee agreement should be checked to see whether commission applies to detention income, if and when it's earned"},
 ], ["deliveryAndRecords","checkTerms","checkCommissionBasis"],
 "Correct. Detention must actually be triggered and documented, the specific terms must be verified, and it's worth confirming in advance whether dispatcher commission would even apply to it once earned. None of that involves estimating an average and adding it now.",
 "Estimating a 'typical' detention amount from past loads and adding it now is exactly the assumption this module's accessorial-economics section warns against. Verify the actual event and documentation — never substitute a historical average for this load's specific facts."),

 "SIM07-D19":choice("SIM07-D19","SIM07-S7",["C11"],"quickPayOffer","The carrier is considering a broker quick-pay option on Charlie's invoice: 3% fee for payment in 24 hours instead of standard payment terms. Does choosing quick-pay increase Charlie's economic profitability?",[
   {key:"A",text:"Yes — faster cash is always more profitable"},
   {key:"B",text:"No — quick-pay is a cost that reduces the contribution margin in exchange for faster cash; it does not increase economic profitability"},
   {key:"C",text:"Yes, because it avoids factoring fees"},
   {key:"D",text:"It's impossible to know without the carrier's tax rate"},
 ],"B","Correct. Quick-pay trades a fee for faster access to cash. It's a cash-flow-timing tool, not a profitability improvement — the fee is a real cost that reduces the contribution margin.",
 "Confusing faster cash receipt with higher profitability is exactly the mistake this module's cash-flow-versus-profit distinction exists to prevent. Quick-pay and factoring are separate, unrelated tools, and tax rate isn't relevant to this comparison."),

 "SIM07-D20":numeric("SIM07-D20","SIM07-S7",["C11"],"quickPayOffer","Calculate the quick-pay fee on Charlie's $2,010 invoice at 3%.",60.30,0.5,"$",
 "Correct. $2,010 × 3% = $60.30.",
 "Fee = applicable invoice amount × contractual fee percentage. $2,010 × 3% = $60.30."),

 "SIM07-D21":numeric("SIM07-D21","SIM07-S7",["C11","C08"],"quickPayOffer","Starting from Charlie's 5%-dispatcher-fee contribution margin of $1,482.53, calculate Charlie's contribution margin after also applying the quick-pay fee.",1422.23,2,"$",
 "Correct. $1,482.53 − $60.30 = $1,422.23.",
 "The quick-pay fee is an additional included cost, subtracted from the contribution margin already calculated: $1,482.53 − $60.30 = $1,422.23."),

 "SIM07-D22":categorize("SIM07-D22","SIM07-S8",["C12"],"positioningData","Match each load's destination positioning.",[
   {key:"alpha",text:"Load Alpha"},
   {key:"bravo",text:"Load Bravo"},
   {key:"charlie",text:"Load Charlie"},
 ],[
   {key:"poor",label:"POOR — low-freight-volume area, likely 150+ mi deadhead to next load"},
   {key:"neutral",label:"NEUTRAL — no positioning information provided"},
   {key:"strong",label:"STRONG — high-freight-volume area, likely under 50 mi deadhead to next load"},
 ],
 {alpha:"poor",bravo:"neutral",charlie:"strong"},
 "Correct. Alpha delivers into a low-freight-volume area (poor positioning), Bravo has no positioning information provided (neutral), and Charlie delivers into a high-freight-volume area (strong positioning).",
 "Match each load only to what the case file actually states about its destination — don't infer positioning for Bravo when none was given, and don't understate Charlie's stated advantage or Alpha's stated disadvantage."),

 "SIM07-D23":choice("SIM07-D23","SIM07-S8",["C12"],"positioningData","Charlie's strong destination positioning means:",[
   {key:"A",text:"the carrier is guaranteed a better-paying next load"},
   {key:"B",text:"the truck is likely better-positioned for a strong next opportunity, but this is a planning factor, not guaranteed future revenue"},
   {key:"C",text:"Charlie's contribution margin should be increased to reflect the expected next load"},
   {key:"D",text:"positioning should be ignored since it isn't part of the dollar calculation"},
 ],"B","Correct. Positioning is a genuine planning factor worth raising with the carrier, but it is never guaranteed future revenue and must never be folded into this load's dollar calculation.",
 "Positioning is real and worth mentioning, but treating it as guaranteed revenue (by inflating Charlie's margin) or ignoring it entirely both miss the point — it belongs in the conversation with the carrier as a qualitative factor, separate from the dollar math."),

 "SIM07-D24":choice("SIM07-D24","SIM07-S9",["C13"],"changedEvidence","The signed dispatcher agreement is now confirmed at 7% (not the 5% assumed earlier) for all three loads. What must the dispatcher do?",[
   {key:"A",text:"Keep the original 5%-based margins since the loads were already compared"},
   {key:"B",text:"Recalculate all three contribution margins using the corrected 7% figure before finalizing any recommendation"},
   {key:"C",text:"Only recalculate the load that will ultimately be recommended"},
   {key:"D",text:"Disregard the correction since the dispatcher fee is a small amount"},
 ],"B","Correct. New verified information about a material input requires recalculating every affected figure — not anchoring on the first result, and not recalculating only the load you expect to recommend.",
 "Anchoring on the original 5%-based numbers, recalculating only one load, or dismissing the correction as too small all skip the required re-run. All three loads must be recalculated on the same, corrected basis so the comparison stays apples-to-apples."),

 "SIM07-D25":numeric("SIM07-D25","SIM07-S9",["C13","C08"],"changedEvidence","Recalculate Load Alpha's contribution margin using the corrected 7% dispatcher fee (revenue $2,280, fuel $472.80, tolls $0).",1647.60,2,"$",
 "Correct. Dispatcher fee: $2,280 × 7% = $159.60. Included costs: $472.80 + $0 + $159.60 = $632.40. Margin: $2,280 − $632.40 = $1,647.60.",
 "Recalculate the dispatcher fee at 7%: $2,280 × 7% = $159.60. New included costs: $472.80 + $0 + $159.60 = $632.40. New margin: $2,280 − $632.40 = $1,647.60."),

 "SIM07-D26":numeric("SIM07-D26","SIM07-S9",["C13","C08"],"changedEvidence","Recalculate Load Bravo's contribution margin using the corrected 7% dispatcher fee (revenue $1,860, fuel $347.12, tolls $45).",1337.68,2,"$",
 "Correct. Dispatcher fee: $1,860 × 7% = $130.20. Included costs: $347.12 + $45 + $130.20 = $522.32. Margin: $1,860 − $522.32 = $1,337.68.",
 "Recalculate the dispatcher fee at 7%: $1,860 × 7% = $130.20. New included costs: $347.12 + $45 + $130.20 = $522.32. New margin: $1,860 − $522.32 = $1,337.68."),

 "SIM07-D27":categorize("SIM07-D27","SIM07-S9",["C14","C16"],"changedEvidence","Given the carrier's stated criteria (effective RPM ≥ $3.00 → TAKE; $2.70–$2.99 → COUNTER; below $2.70 → DECLINE/HOLD), classify each load's supported disposition. (Effective RPM: Alpha $2.89, Bravo $3.21, Charlie $2.96 — unaffected by the dispatcher-fee correction.)",[
   {key:"alpha",text:"Load Alpha (effective RPM $2.89)"},
   {key:"bravo",text:"Load Bravo (effective RPM $3.21)"},
   {key:"charlie",text:"Load Charlie (effective RPM $2.96)"},
 ],[
   {key:"take",label:"TAKE"},
   {key:"counter",label:"COUNTER"},
   {key:"decline_hold",label:"DECLINE / HOLD"},
 ],
 {alpha:"counter",bravo:"take",charlie:"counter"},
 "Correct. Bravo's $3.21 effective RPM clears the $3.00 TAKE threshold. Alpha ($2.89) and Charlie ($2.96) both fall in the $2.70–$2.99 COUNTER band. Note this is the exact reverse of what loaded RPM alone would have suggested back in Stage 2, where Alpha looked like the clear leader.",
 "This is the loaded-mile-blindness trap in its final form: if you classify based on loaded RPM (Alpha highest, Bravo lowest) instead of effective RPM, you'll get every one of these backwards. Classify strictly by effective RPM against the carrier's stated thresholds.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-03"}),

 "SIM07-D28":numeric("SIM07-D28","SIM07-S9",["C16"],"changedEvidence","Using the counter-threshold formula (target effective RPM × total trip miles = minimum supported revenue), calculate the minimum total revenue Alpha would need to clear the carrier's $3.00 effective-RPM floor (790 total trip miles).",2370.00,5,"$",
 "Correct. $3.00 × 790 total trip miles = $2,370 minimum supported revenue — $90 more than Alpha's current $2,280.",
 "Counter threshold = target effective RPM × total trip miles, not loaded miles. $3.00 × 790 = $2,370. (Using loaded miles instead, 3.00 × 600 = $1,800, would be the loaded-mile-blindness error applied to this formula.)"),

 "SIM07-D29":multi("SIM07-D29","SIM07-S10",["C17"],"finalBriefing","Which elements must the final carrier decision record include?",[
   {key:"calculations",text:"The calculations for each load compared"},
   {key:"assumptions",text:"The assumptions used (fuel price, fee percentages, etc.)"},
   {key:"unknowns",text:"Any material unknowns still unresolved"},
   {key:"excludedCosts",text:"The costs excluded from the contribution-margin figures (driver pay, insurance, etc.)"},
   {key:"verifiedVsUnverified",text:"Which revenue is verified/earned versus possible/unverified"},
   {key:"positioning",text:"Positioning considerations"},
   {key:"recommendationAndReasoning",text:"The recommended disposition and the economic reasoning behind it"},
   {key:"carrierAuthorityStatement",text:"An explicit statement that the carrier retains final decision authority"},
   {key:"personalOpinion",text:"The dispatcher's personal opinion of the carrier owner"},
   {key:"finalDecisionMade",text:"A final decision made on the carrier's behalf"},
 ], ["calculations","assumptions","unknowns","excludedCosts","verifiedVsUnverified","positioning","recommendationAndReasoning","carrierAuthorityStatement"],
 "Correct. A complete decision record covers the calculations, assumptions, unknowns, excluded costs, the verified-versus-possible revenue split, positioning, the recommendation and its reasoning, and an explicit statement of carrier authority. Personal opinions and a dispatcher-made final decision have no place in the record.",
 "Leave personal opinions out of the record, and never write the record as though the dispatcher made the final call — the carrier's decision authority must be stated explicitly, not implied away by a dispatcher-issued final decision."),

 "SIM07-D30":choice("SIM07-D30","SIM07-S10",["C18"],"finalBriefing","Which statement correctly preserves carrier decision authority in the final briefing?",[
   {key:"A",text:"\"I've decided we're taking Bravo and declining Alpha and Charlie.\""},
   {key:"B",text:"\"Based on this analysis, Bravo currently meets your stated $3.00 effective-RPM criterion without negotiation; Alpha and Charlie would need a higher rate to clear that threshold. The final decision is yours.\""},
   {key:"C",text:"\"Bravo is obviously the only acceptable option here.\""},
   {key:"D",text:"\"I'll go ahead and book Bravo now and let you know afterward.\""},
 ],"B","Correct. This presents the analysis and the economic reasoning while explicitly leaving the accept/decline decision with the carrier.",
 "Representing the dispatcher's recommendation as the carrier's final decision — including booking first and notifying afterward, or declaring an option 'the only acceptable one' — is one of this simulation's defined critical failures. The dispatcher brings numbers; the carrier decides.",
 {escalateAfterAttempts:2,criticalFailureFamily:"CF-05"}),

 "SIM07-D31":choice("SIM07-D31","SIM07-S10",["C09","C17"],"finalBriefing","Which of the following correctly discloses Charlie's contribution-margin figure in the final briefing?",[
   {key:"A",text:"\"Charlie's profit is $1,442.33 after the corrected dispatcher fee.\""},
   {key:"B",text:"\"Charlie's estimated contribution margin, after the corrected 7% dispatcher fee and before any quick-pay fee, is $1,442.33 under the fuel, tolls, and dispatcher-fee assumptions stated — not net profit.\""},
   {key:"C",text:"\"Charlie nets $1,442.33 for the carrier.\""},
   {key:"D",text:"\"Charlie's take-home pay is $1,442.33.\""},
 ],"B","Correct. This states the figure, the costs actually included, and explicitly labels it as not net profit.",
 "Calling the figure 'profit,' saying the carrier 'nets' it, or calling it 'take-home pay' are all restatements of the same mislabeling error this module exists to correct — even at the final briefing stage, after everything else has been calculated correctly."),

 "SIM07-D32":multi("SIM07-D32","SIM07-S10",["C09","C10","C12"],"finalBriefing","Which of the following are true about this case at final disposition?",[
   {key:"noDecisionYet",text:"No competent party (i.e., the carrier) has yet made a final booking decision on any of the three loads"},
   {key:"detentionUnearned",text:"Charlie's detention clause remains unearned and unverified at this point"},
   {key:"allMarginsAreProfit",text:"All three contribution-margin figures calculated in this exercise are equivalent to net profit"},
   {key:"positioningIsNextLoad",text:"Positioning affects the truck's next load opportunity, not a guarantee of this load's revenue"},
   {key:"dispatcherCanFinalize",text:"Since Bravo clears the carrier's stated threshold, the dispatcher may finalize the booking without further carrier input"},
 ], ["noDecisionYet","detentionUnearned","positioningIsNextLoad"],
 "Correct. No booking decision has been made yet, Charlie's detention is still unearned, and positioning affects the next load, not this one's guaranteed revenue. None of the contribution-margin figures are net profit, and clearing a threshold doesn't transfer final decision authority to the dispatcher.",
 "Two of these statements repeat the exact mistakes this simulation is built to catch: treating contribution margin as profit (CF-02), and treating a threshold match as authorization for the dispatcher to finalize the booking instead of the carrier (CF-05)."),
};

export const DECISION_ORDER=STAGES.flatMap(s=>s.decisionIds);
