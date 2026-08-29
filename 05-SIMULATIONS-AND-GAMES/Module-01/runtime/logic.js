// SIM-001 runtime logic module.
// Deliberately DOM-free so it can be unit tested with plain Node and reused by any future
// rendering layer (this browser app today, a different framework later if needed).

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
    simulationId: "SIM-001",
    currentDecisionId: DECISION_ORDER[0],
    decisions,
    status: "IN_PROGRESS",
    startedAt: null,
    completedAt: null,
  };
}

export function normalizePersistedState(candidate) {
  if (!candidate || typeof candidate !== "object" || candidate.simulationId !== "SIM-001") return null;
  if (!candidate.decisions || typeof candidate.decisions !== "object") return null;
  if (!DECISION_ORDER.includes(candidate.currentDecisionId)) return null;

  const fresh = createInitialState();
  const decisions = {};
  for (const id of DECISION_ORDER) {
    const saved = candidate.decisions[id];
    const base = fresh.decisions[id];
    decisions[id] = saved && typeof saved === "object" ? { ...base, ...saved } : base;
  }

  const normalized = {
    ...fresh,
    currentDecisionId: candidate.currentDecisionId,
    decisions,
    startedAt: typeof candidate.startedAt === "number" ? candidate.startedAt : null,
    completedAt: typeof candidate.completedAt === "number" ? candidate.completedAt : null,
  };

  normalized.status = computeSimulationStatus(normalized);
  if (normalized.status === "IN_PROGRESS") normalized.completedAt = null;
  return normalized;
}

export function getResponseValidationError(decision, response) {
  if (!decision || typeof decision !== "object") return "This decision cannot be loaded. Please refresh the simulation.";

  if (decision.type === "choice") {
    return typeof response === "string" && response.length > 0 ? null : "Select one answer before submitting.";
  }

  if (decision.type === "matching") {
    if (!response || typeof response !== "object" || Array.isArray(response)) return "Complete every match before submitting.";
    return decision.items.every((item) => Boolean(response[item])) ? null : "Complete every match before submitting.";
  }

  if (decision.type === "sequencing") {
    return Array.isArray(response) && response.length === decision.correctOrder.length
      ? null
      : "Place every event in the sequence before submitting.";
  }

  return "This decision type is not supported. Please contact your instructor.";
}

function matchesAcceptedValue(decision, item, responseValue) {
  const accepted = decision.acceptedMapValues?.[item];
  if (Array.isArray(accepted)) return accepted.includes(responseValue);
  return responseValue === decision.correctMap[item];
}

export function evaluateResponse(decisionId, response) {
  const decision = DECISIONS[decisionId];
  if (!decision) throw new Error(`Unknown decision: ${decisionId}`);

  if (decision.type === "choice") return response === decision.correctKey;

  if (decision.type === "matching") {
    if (!response || typeof response !== "object") return false;
    return decision.items.every((item) => matchesAcceptedValue(decision, item, response[item]));
  }

  if (decision.type === "sequencing") {
    if (!Array.isArray(response)) return false;
    if (response.length !== decision.correctOrder.length) return false;
    return decision.correctOrder.every((key, i) => response[i] === key);
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
  if (records.some((r) => r.instructorReviewRequired)) return "INSTRUCTOR_REVIEW_REQUIRED";

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

function decisionCompetencies(decision) {
  if (Array.isArray(decision.competencies) && decision.competencies.length) return decision.competencies;
  return [decision.competency];
}

export function computeCompetencyStatus(state) {
  const byCompetency = {};
  for (const id of DECISION_ORDER) {
    const decision = DECISIONS[id];
    for (const competency of decisionCompetencies(decision)) {
      (byCompetency[competency] ||= []).push(id);
    }
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
