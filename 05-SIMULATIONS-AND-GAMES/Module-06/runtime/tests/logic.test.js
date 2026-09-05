// Run with: node tests/logic.test.js
import assert from "node:assert/strict";
import {
  createInitialState,
  evaluateResponse,
  submitAttempt,
  shouldAdvance,
  getNextDecisionId,
  computeSimulationStatus,
  computeFirstAttemptScore,
  computeFinalMasteryScore,
  computeRemediationCount,
  computeCompetencyStatus,
  getStageForDecision,
  getProgress,
  normalizeLoadedState,
} from "../logic.js";
import { DECISION_ORDER, DECISIONS, STAGES, ARTIFACTS, COMPETENCY_LABELS } from "../content.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

// --- Structure ---
test("content: 8 stages matching the locked scenario arc", () => {
  assert.equal(STAGES.length, 8);
});
test("content: 20 stable SIM06 decision IDs", () => {
  assert.equal(DECISION_ORDER.length, 20);
  for (const id of DECISION_ORDER) assert.match(id, /^SIM06-D\d\d$/);
});
test("content: every stage decision resolves and belongs to its stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id]);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});
test("SIM-006 content imports no sibling simulation IDs", () => {
  for (const id of DECISION_ORDER) assert.doesNotMatch(id, /^SIM0(?!6)\d-/);
});

// --- Competency coverage (C01-C14) ---
test("content: all 14 competencies (C01-C14) are used by at least one decision", () => {
  const used = new Set(DECISION_ORDER.map(id => DECISIONS[id].competency));
  for (let n = 1; n <= 14; n++) {
    const id = `C${String(n).padStart(2, "0")}`;
    assert.ok(used.has(id), `${id} not covered by any decision`);
  }
  assert.equal(used.size, 14);
});
test("content: COMPETENCY_LABELS has exactly 14 competencies", () => {
  assert.equal(Object.keys(COMPETENCY_LABELS).length, 14);
});

// --- Stage 1: Intake / claims vs facts ---
test("SIM06-D01: correctly classifies posting claims vs observable facts vs needs-verification", () => {
  const correct = { companyName: "claimed", mcNumber: "claimed", emailArrived: "known", senderIsBroker: "needsVerification" };
  assert.equal(evaluateResponse("SIM06-D01", correct), true);
});
test("SIM06-D01: treating a posting claim as KNOWN fails (the core anti-pattern of converting claims to facts)", () => {
  const wrong = { companyName: "known", mcNumber: "claimed", emailArrived: "known", senderIsBroker: "needsVerification" };
  assert.equal(evaluateResponse("SIM06-D01", wrong), false);
});
test("SIM06-D01: prematurely resolving sender authorization (either direction) fails", () => {
  const wrongTrue = { companyName: "claimed", mcNumber: "claimed", emailArrived: "known", senderIsBroker: "known" };
  const wrongFalse = { companyName: "claimed", mcNumber: "claimed", emailArrived: "known", senderIsBroker: "claimed" };
  assert.equal(evaluateResponse("SIM06-D01", wrongTrue), false);
  assert.equal(evaluateResponse("SIM06-D01", wrongFalse), false);
});
test("SIM06-D02: an unverified claim must not be treated as fact merely because it seems plausible", () => {
  assert.equal(evaluateResponse("SIM06-D02", "B"), true);
  assert.equal(evaluateResponse("SIM06-D02", "A"), false);
});

// --- Stage 2: Entity verification ---
test("SIM06-D03: entity verification uses authoritative sources, not posting self-reports or domain appearance", () => {
  assert.equal(evaluateResponse("SIM06-D03", ["currentAuthorityLookup", "financialSecurityCheck", "nameMatch"]), true);
  assert.equal(evaluateResponse("SIM06-D03", ["currentAuthorityLookup", "financialSecurityCheck", "nameMatch", "assumeFromPosting"]), false);
  assert.equal(evaluateResponse("SIM06-D03", ["currentAuthorityLookup", "financialSecurityCheck", "nameMatch", "domainLooksRight"]), false);
});

// --- CF-01: verified entity treated as proof of authorized contact ---
test("SIM06-D04 (CF-01): a clean entity check does not authenticate the contact", () => {
  assert.equal(evaluateResponse("SIM06-D04", "B"), true);
  assert.equal(evaluateResponse("SIM06-D04", "A"), false, "treating verified entity as proof of authorized contact is CF-01");
});

// --- Stage 3: Contact authentication ---
test("SIM06-D05: a domain mismatch against the known corporate domain requires independent verification", () => {
  assert.equal(evaluateResponse("SIM06-D05", "B"), true);
  assert.equal(evaluateResponse("SIM06-D05", "A"), false);
});
test("SIM06-D06: trusted channel must come from an independent source, never from the questioned message", () => {
  assert.equal(evaluateResponse("SIM06-D06", "B"), true);
  assert.equal(evaluateResponse("SIM06-D06", "A"), false);
  assert.equal(evaluateResponse("SIM06-D06", "C"), false, "texting the same questioned number is not independent verification");
});

// --- CF-05: ignoring a failed trusted-callback contradiction ---
test("SIM06-D07 (CF-05): a confirmed callback contradiction requires DO NOT BOOK / ESCALATE, not further self-directed investigation", () => {
  assert.equal(evaluateResponse("SIM06-D07", "B"), true);
  assert.equal(evaluateResponse("SIM06-D07", "A"), false, "proceeding because the entity is verified ignores the contradicted contact");
});

// --- Stage 4: Load/document cross-check ---
test("SIM06-D08: identifies only the fields that actually mismatch", () => {
  assert.equal(evaluateResponse("SIM06-D08", ["brokerName", "mcNumber"]), true);
  assert.equal(evaluateResponse("SIM06-D08", ["brokerName", "mcNumber", "rate"]), false, "rate matches across documents and should not be flagged");
});
test("SIM06-D09: a document mismatch is material/unresolved, not automatically proof of fraud", () => {
  assert.equal(evaluateResponse("SIM06-D09", "B"), true);
  assert.equal(evaluateResponse("SIM06-D09", "C"), false, "declaring fraud from a document mismatch alone overshoots the evidence");
  assert.equal(evaluateResponse("SIM06-D09", "A"), false, "dismissing a name/MC mismatch as minor is wrong");
});

// --- CF-03: proceeding through an unresolved material mismatch ---
test("SIM06-D10 (CF-03): unresolved material mismatch requires HOLD, not signing now and asking later", () => {
  assert.equal(evaluateResponse("SIM06-D10", "B"), true);
  assert.equal(evaluateResponse("SIM06-D10", "A"), false);
});

// --- Stage 5: Payment-path event ---
test("SIM06-D11: the required first response to a payment-change request is STOP, not act or ignore", () => {
  assert.equal(evaluateResponse("SIM06-D11", "B"), true);
  assert.equal(evaluateResponse("SIM06-D11", "A"), false);
});

// --- CF-02: following unverified payment-instruction change ---
test("SIM06-D12 (CF-02): payment changes verified only via previously-established trusted channel, never via contact info the request itself supplied", () => {
  assert.equal(evaluateResponse("SIM06-D12", "B"), true);
  assert.equal(evaluateResponse("SIM06-D12", "A"), false, "calling the number the request itself provided is not independent verification");
  assert.equal(evaluateResponse("SIM06-D12", "C"), false, "thread continuity does not establish safety (thread hijacking risk)");
});
test("SIM06-D13: evidence record captures request/attempt/result/status, not impressions", () => {
  const correct = ["requestReceived", "verificationAttempted", "verificationResult", "currentStatus"];
  assert.equal(evaluateResponse("SIM06-D13", correct), true);
  assert.equal(evaluateResponse("SIM06-D13", [...correct, "assumedLegit"]), false);
});

// --- Stage 6: Pressure / social engineering ---
test("SIM06-D14: verification standard does not change under urgency", () => {
  assert.equal(evaluateResponse("SIM06-D14", "B"), true);
  assert.equal(evaluateResponse("SIM06-D14", "A"), false);
});

// --- CF-07: exceeding dispatcher authority to self-resolve ---
test("SIM06-D15 (CF-07): unverifiable claimed approval requires escalation to actual authority, not self-directed resolution", () => {
  assert.equal(evaluateResponse("SIM06-D15", "C"), true);
  assert.equal(evaluateResponse("SIM06-D15", "B"), false, "independently deciding it's probably fine exceeds dispatcher authority");
  assert.equal(evaluateResponse("SIM06-D15", "D"), false, "personally contacting other parties to resolve it yourself also exceeds authority");
});

// --- Stage 7: Evidence record + risk classification ---
test("SIM06-D16: evidence state keeps each fact in its own lane (verified entity, contradicted contact, unresolved mismatch/payment)", () => {
  const correct = ["entityVerified", "contactContradicted", "docMismatchUnresolved", "paymentUnconfirmed"];
  assert.equal(evaluateResponse("SIM06-D16", correct), true);
  assert.equal(evaluateResponse("SIM06-D16", [...correct, "fraudProven"]), false, "no competent authority has established fraud in this case");
  assert.equal(evaluateResponse("SIM06-D16", [...correct, "pressureIsEvidence"]), false, "pressure tactics don't retroactively invalidate the separately-confirmed entity registration");
});
test("SIM06-D17: the evidence supports DO NOT BOOK, not CLEAR, given the contradicted contact and unresolved issues", () => {
  assert.equal(evaluateResponse("SIM06-D17", "B"), true);
  assert.equal(evaluateResponse("SIM06-D17", "A"), false, "a verified entity alone does not make this CLEAR");
});

// --- Stage 8: Final disposition + handoff ---
test("SIM06-D18: final disposition is DECLINE with escalation of the contact contradiction, not booking or partial proceeding", () => {
  assert.equal(evaluateResponse("SIM06-D18", "B"), true);
  assert.equal(evaluateResponse("SIM06-D18", "A"), false);
  assert.equal(evaluateResponse("SIM06-D18", "D"), false, "partial proceeding on pickup alone still skips the required escalation");
});
test("SIM06-D19: disposition reasoning excludes personal opinion, includes verified/unresolved/evidence/next-action/owner", () => {
  const correct = ["whatVerified", "whatUnresolved", "evidence", "nextAction", "owner"];
  assert.equal(evaluateResponse("SIM06-D19", correct), true);
  assert.equal(evaluateResponse("SIM06-D19", [...correct, "personalOpinion"]), false);
});

// --- CF-06: unsupported fraud accusation ---
test("SIM06-D20 (CF-06): professional non-accusatory language is correct; unsupported fraud/scam accusations are not", () => {
  assert.equal(evaluateResponse("SIM06-D20", "B"), true);
  assert.equal(evaluateResponse("SIM06-D20", "A"), false, "unsupported scam accusation");
  assert.equal(evaluateResponse("SIM06-D20", "C"), false, "unsupported fraud/double-brokering declaration");
});

// --- All seven critical-failure families (CF-01 through CF-07) present ---
test("critical decisions cover all seven named critical-failure families via attempt-based escalation", () => {
  const ids = DECISION_ORDER.filter(id => DECISIONS[id].escalateAfterAttempts);
  assert.deepEqual(ids, ["SIM06-D02", "SIM06-D04", "SIM06-D07", "SIM06-D10", "SIM06-D12", "SIM06-D15", "SIM06-D18", "SIM06-D20"]);
  assert.equal(ids.length, 8, "eight decisions carry attempt-based escalation, covering all seven named critical-failure families (D10 and D18 both test the unresolved-material-mismatch judgment at different stages)");
});

for (const [id, wrong1, wrong2] of [
  ["SIM06-D02", "A", "C"],
  ["SIM06-D04", "A", "C"],
  ["SIM06-D07", "A", "C"],
  ["SIM06-D10", "A", "C"],
  ["SIM06-D12", "A", "C"],
  ["SIM06-D15", "A", "B"],
  ["SIM06-D18", "A", "C"],
  ["SIM06-D20", "A", "C"],
]) {
  test(`${id}: escalates after two wrong attempts`, () => {
    let s = createInitialState();
    s = submitAttempt(s, id, wrong1, 1000);
    assert.equal(s.decisions[id].instructorReviewRequired, false);
    s = submitAttempt(s, id, wrong2, 2000);
    assert.equal(s.decisions[id].instructorReviewRequired, true);
    assert.equal(shouldAdvance(s, id), true);
  });
}

test("critical escalation clears after later correct response", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D04", "A", 1000);
  s = submitAttempt(s, "SIM06-D04", "C", 2000);
  assert.equal(s.decisions["SIM06-D04"].instructorReviewRequired, true);
  s = submitAttempt(s, "SIM06-D04", "B", 3000);
  assert.equal(s.decisions["SIM06-D04"].instructorReviewRequired, false);
});

// --- First-attempt evidence preservation ---
test("first attempt remains immutable after remediation", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D02", "A", 1000);
  s = submitAttempt(s, "SIM06-D02", "B", 2000);
  const r = s.decisions["SIM06-D02"];
  assert.equal(r.firstAttemptResponse, "A");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.finalResponse, "B");
  assert.equal(r.finalCorrect, true);
  assert.equal(r.remediationUsed, true);
});
test("first-attempt evidence is preserved even after a later critical-decision remediation clears the review flag", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D04", "A", 1000);
  s = submitAttempt(s, "SIM06-D04", "C", 2000);
  s = submitAttempt(s, "SIM06-D04", "B", 3000);
  const r = s.decisions["SIM06-D04"];
  assert.equal(r.firstAttemptResponse, "A", "the original CF-01 attempt must remain visible even though it was later corrected");
  assert.equal(r.firstAttemptCorrect, false);
  assert.equal(r.instructorReviewRequired, false);
});
test("ordinary wrong answer does not advance", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D02", "A", 1000);
  assert.equal(shouldAdvance(s, "SIM06-D02"), false);
});

// --- Remediation persistence ---
test("remediation count counts retried decisions", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D02", "A", 1000);
  s = submitAttempt(s, "SIM06-D02", "B", 2000);
  assert.equal(computeRemediationCount(s), 1);
});

// --- Scenario continuity ---
test("scenario continuity: the known corporate domain referenced in Stage 3 is established in the Stage 2 entity-check artifact", () => {
  assert.match(ARTIFACTS.entityCheck.lines.join(" "), /kestrellogistics\.com/);
  assert.match(ARTIFACTS.contactMismatch.lines.join(" "), /kestrellogistics\.com/);
});
test("scenario continuity: the Stage 7 evidence summary reflects outcomes actually established in Stages 2-6, not new unexplained facts", () => {
  const summary = ARTIFACTS.evidenceSummary.lines.join(" ");
  assert.match(summary, /MC\/authority\/financial-security confirmed active/i);
  assert.match(summary, /could not be confirmed/i);
  assert.match(summary, /mismatch.*unresolved|unresolved.*mismatch/i);
});
test("scenario continuity: no competent-authority fraud finding is asserted anywhere in the case file", () => {
  const finalCase = ARTIFACTS.finalCase.lines.join(" ");
  assert.match(finalCase, /No competent authority.*has made any finding of fraud/i);
});

// --- Final competency calculation ---
const CORRECT = {
  "SIM06-D01": { companyName: "claimed", mcNumber: "claimed", emailArrived: "known", senderIsBroker: "needsVerification" },
  "SIM06-D02": "B",
  "SIM06-D03": ["currentAuthorityLookup", "financialSecurityCheck", "nameMatch"],
  "SIM06-D04": "B",
  "SIM06-D05": "B",
  "SIM06-D06": "B",
  "SIM06-D07": "B",
  "SIM06-D08": ["brokerName", "mcNumber"],
  "SIM06-D09": "B",
  "SIM06-D10": "B",
  "SIM06-D11": "B",
  "SIM06-D12": "B",
  "SIM06-D13": ["requestReceived", "verificationAttempted", "verificationResult", "currentStatus"],
  "SIM06-D14": "B",
  "SIM06-D15": "C",
  "SIM06-D16": ["entityVerified", "contactContradicted", "docMismatchUnresolved", "paymentUnconfirmed"],
  "SIM06-D17": "B",
  "SIM06-D18": "B",
  "SIM06-D19": ["whatVerified", "whatUnresolved", "evidence", "nextAction", "owner"],
  "SIM06-D20": "B",
};
test("full mastery produces COMPLETE 20/20", () => {
  let s = createInitialState();
  for (const id of DECISION_ORDER) s = submitAttempt(s, id, CORRECT[id], 1000);
  assert.equal(computeSimulationStatus(s), "COMPLETE");
  assert.deepEqual(computeFinalMasteryScore(s), { correct: 20, total: 20 });
  assert.deepEqual(computeFirstAttemptScore(s), { correct: 20, total: 20 });
});
test("competency status distinguishes in-progress/mastered/remediated/review", () => {
  let s = createInitialState();
  assert.equal(computeCompetencyStatus(s)["C01"], "In Progress");
  s = submitAttempt(s, "SIM06-D04", "A", 1000);
  s = submitAttempt(s, "SIM06-D04", "B", 2000);
  assert.equal(computeCompetencyStatus(s)["C04"], "Mastered After Remediation");
  let t = createInitialState();
  t = submitAttempt(t, "SIM06-D12", "A", 1000);
  t = submitAttempt(t, "SIM06-D12", "C", 2000);
  assert.equal(computeCompetencyStatus(t)["C08"], "Needs Instructor Review");
});

// --- Instructor-review/completion state ---
test("computeSimulationStatus: INSTRUCTOR_REVIEW_REQUIRED when a critical decision escalates", () => {
  let s = createInitialState();
  s = submitAttempt(s, "SIM06-D12", "A", 1000);
  s = submitAttempt(s, "SIM06-D12", "C", 2000);
  assert.equal(computeSimulationStatus(s), "INSTRUCTOR_REVIEW_REQUIRED");
});

// --- Persistence ---
test("persistence rejects corrupt and foreign simulation state", () => {
  assert.equal(normalizeLoadedState(null).simulationId, "SIM-006");
  assert.equal(normalizeLoadedState({ simulationId: "SIM-008", decisions: {} }).simulationId, "SIM-006");
});
test("persistence backfills partial state and repairs invalid pointer", () => {
  const p = normalizeLoadedState({ simulationId: "SIM-006", decisions: { "SIM06-D01": { finalCorrect: true } }, currentDecisionId: "BAD" });
  assert.equal(Object.keys(p.decisions).length, 20);
  assert.equal(p.currentDecisionId, "SIM06-D01");
  assert.equal(p.decisions["SIM06-D01"].finalCorrect, true);
});

// --- Progression ---
test("progression walks all 20 decisions", () => {
  let id = DECISION_ORDER[0], count = 0;
  while (id !== null) { id = getNextDecisionId(id); count += 1; }
  assert.equal(count, 20);
  assert.deepEqual(getProgress("SIM06-D20"), { current: 20, total: 20 });
  assert.equal(getStageForDecision("SIM06-D20").id, "SIM06-S8");
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
