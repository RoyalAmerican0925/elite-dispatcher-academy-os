// SIM-003 runtime logic module.
// Isolated from SIM-001 and SIM-002 logic.js by design (no shared import) — guarantees zero
// regression risk to either approved runtime. Structurally identical in shape to SIM-002's
// logic.js (which itself proved out the multiselect + normalizeLoadedState additions over
// SIM-001) so a future shared engine extraction would be a mechanical merge.

import { DECISIONS, DECISION_ORDER, STAGES } from "./content.js";

export function createInitialState() {
  const decisions = {};
  for (const id of DECISION_ORDER) {
    decisions[id] = {
      firstAttemptResponse: null,
      firstAttemptCorrect: null,
      firstAttemptTimestamp: null,
      finalResponse: null,
      finalCorrect: null,
      remediationUsed: false,
      attemptCount: 0,
      finalTimestamp: null,
      instructorReviewRequired: false,
    };
  }
  return {
    simulationId: "SIM-003",
    currentDecisionId: DECISION_ORDER[0],
    decisions,
    status: "IN_PROGRESS",
    startedAt: null,
    completedAt: null,
  };
}

function arraysEqualAsSets(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const sa = new Set(a);
  const sb = new Set(b);
  if (sa.size !== sb.size) return false;
  for (const v of sa) if (!sb.has(v)) return false;
  return true;
}

export function evaluateResponse(decisionId, response) {
  const decision = DECISIONS[decisionId];
  if (!decision) throw new Error(`Unknown decision: ${decisionId}`);

  if (decision.type === "choice") {
    return response === decision.correctKey;
  }

  if (decision.type === "matching") {
    if (!response || typeof response !== "object") return false;
    return decision.items.every((item) => response[item] === decision.correctMap[item]);
  }

  if (decision.type === "sequencing") {
    if (!Array.isArray(response)) return false;
    if (response.length !== decision.correctOrder.length) return false;
    return decision.correctOrder.every((key, i) => response[i] === key);
  }

  if (decision.type === "multiselect") {
    return arraysEqualAsSets(response, decision.correctSet);
  }

  throw new Error(`Unknown decision type: ${decision.type}`);
}

export function submitAttempt(state, decisionId, response, now = Date.now()) {
  const decision = DECISIONS[decisionId];
  if (!decision) throw new Error(`Unknown decision: ${decisionId}`);

  const record = { ...state.decisions[decisionId] };
  const correct = evaluateResponse(decisionId, response);

  if (record.firstAttemptResponse === null) {
    record.firstAttemptResponse = response;
    record.firstAttemptCorrect = correct;
    record.firstAttemptTimestamp = now;
  } else {
    record.remediationUsed = true;
  }

  record.attemptCount += 1;
  record.finalResponse = response;
  record.finalCorrect = correct;
  record.finalTimestamp = now;

  if (!correct && decision.escalateAfterAttempts && record.attemptCount >= decision.escalateAfterAttempts) {
    record.instructorReviewRequired = true;
  } else if (correct) {
    record.instructorReviewRequired = false;
  }

  const decisions = { ...state.decisions, [decisionId]: record };
  return { ...state, decisions };
}

export function shouldAdvance(state, decisionId) {
  const record = state.decisions[decisionId];
  return record.finalCorrect === true || record.instructorReviewRequired === true;
}

export function getNextDecisionId(decisionId) {
  const idx = DECISION_ORDER.indexOf(decisionId);
  if (idx === -1 || idx === DECISION_ORDER.length - 1) return null;
  return DECISION_ORDER[idx + 1];
}

export function computeSimulationStatus(state) {
  const records = Object.values(state.decisions);
  const anyReviewRequired = records.some((r) => r.instructorReviewRequired);
  if (anyReviewRequired) return "INSTRUCTOR_REVIEW_REQUIRED";

  const allFinalCorrect = DECISION_ORDER.every((id) => state.decisions[id].finalCorrect === true);
  if (allFinalCorrect) return "COMPLETE";

  return "IN_PROGRESS";
}

export function computeFirstAttemptScore(state) {
  const correct = DECISION_ORDER.filter((id) => state.decisions[id].firstAttemptCorrect === true).length;
  return { correct, total: DECISION_ORDER.length };
}

export function computeFinalMasteryScore(state) {
  const correct = DECISION_ORDER.filter((id) => state.decisions[id].finalCorrect === true).length;
  return { correct, total: DECISION_ORDER.length };
}

export function computeRemediationCount(state) {
  return DECISION_ORDER.filter((id) => state.decisions[id].remediationUsed).length;
}

export function computeCompetencyStatus(state) {
  const byCompetency = {};
  for (const id of DECISION_ORDER) {
    const decision = DECISIONS[id];
    (byCompetency[decision.competency] ||= []).push(id);
  }

  const result = {};
  for (const [competency, ids] of Object.entries(byCompetency)) {
    const records = ids.map((id) => state.decisions[id]);

    if (records.some((r) => r.instructorReviewRequired)) {
      result[competency] = "Needs Instructor Review";
      continue;
    }
    if (records.some((r) => r.finalCorrect === null)) {
      result[competency] = "In Progress";
      continue;
    }
    if (records.every((r) => r.finalCorrect === true && !r.remediationUsed)) {
      result[competency] = "Mastered";
      continue;
    }
    if (records.every((r) => r.finalCorrect === true)) {
      result[competency] = "Mastered After Remediation";
      continue;
    }
    result[competency] = "In Progress";
  }
  return result;
}

export function getStageForDecision(decisionId) {
  const decision = DECISIONS[decisionId];
  return STAGES.find((s) => s.id === decision.stageId) || null;
}

export function getProgress(decisionId) {
  const idx = DECISION_ORDER.indexOf(decisionId);
  return { current: idx + 1, total: DECISION_ORDER.length };
}

/**
 * Normalizes/validates a saved state object loaded from persistence. Returns a fresh
 * initial state if the input is missing required shape (corrupt/legacy/partial state,
 * or a different simulation's state entirely), rather than trusting it blindly.
 */
export function normalizeLoadedState(raw) {
  if (!raw || typeof raw !== "object") return createInitialState();
  if (raw.simulationId !== "SIM-003") return createInitialState();
  if (!raw.decisions || typeof raw.decisions !== "object") return createInitialState();

  const fresh = createInitialState();
  const decisions = {};
  for (const id of DECISION_ORDER) {
    const saved = raw.decisions[id];
    decisions[id] = saved && typeof saved === "object" ? { ...fresh.decisions[id], ...saved } : fresh.decisions[id];
  }
  return {
    ...fresh,
    ...raw,
    decisions,
    currentDecisionId: DECISION_ORDER.includes(raw.currentDecisionId) ? raw.currentDecisionId : DECISION_ORDER[0],
  };
}
