// SIM-001 runtime logic module.
// Deliberately DOM-free so it can be unit tested with plain Node and reused by any future
// rendering layer (this browser app today, a different framework later if needed).

import { DECISIONS, DECISION_ORDER, STAGES } from "./content.js";

/**
 * Creates a fresh, empty simulation state.
 */
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
    status: "IN_PROGRESS", // IN_PROGRESS | COMPLETE | INSTRUCTOR_REVIEW_REQUIRED
    startedAt: null,
    completedAt: null,
  };
}

/**
 * Evaluates a submitted response against a decision's correct answer.
 * response shape depends on decision.type:
 *   choice: string (the selected key, e.g. "B")
 *   matching: object mapping item -> selected option
 *   sequencing: array of item keys in student-chosen order
 */
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

  throw new Error(`Unknown decision type: ${decision.type}`);
}

/**
 * Records a submitted attempt for a decision, updating first-attempt (only once, ever)
 * and final-attempt (every submission) records. Returns the updated decision record and
 * whether this attempt triggers instructor-review escalation.
 */
export function submitAttempt(state, decisionId, response, now = Date.now()) {
  const decision = DECISIONS[decisionId];
  if (!decision) throw new Error(`Unknown decision: ${decisionId}`);

  const record = { ...state.decisions[decisionId] };
  const correct = evaluateResponse(decisionId, response);

  // First-attempt data is written exactly once and never overwritten by a retry.
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

  // SIM01-D13 (and any decision with escalateAfterAttempts) escalates to instructor review
  // if the student is still wrong after the defined attempt threshold, rather than cycling
  // the learner through indefinite guesses.
  if (!correct && decision.escalateAfterAttempts && record.attemptCount >= decision.escalateAfterAttempts) {
    record.instructorReviewRequired = true;
  } else if (correct) {
    record.instructorReviewRequired = false;
  }

  const decisions = { ...state.decisions, [decisionId]: record };
  return { ...state, decisions };
}

/**
 * Determines whether the simulation, as a whole, should move to the next decision after
 * this submission (correct answers always advance; incorrect answers only advance once
 * escalated to instructor review, per SIM01-D13's design — otherwise the learner retries).
 */
export function shouldAdvance(state, decisionId) {
  const record = state.decisions[decisionId];
  return record.finalCorrect === true || record.instructorReviewRequired === true;
}

/**
 * Returns the next decision ID in sequence, or null if this was the last decision.
 */
export function getNextDecisionId(decisionId) {
  const idx = DECISION_ORDER.indexOf(decisionId);
  if (idx === -1 || idx === DECISION_ORDER.length - 1) return null;
  return DECISION_ORDER[idx + 1];
}

/**
 * Computes overall simulation status from the current decision records.
 */
export function computeSimulationStatus(state) {
  const records = Object.values(state.decisions);
  const anyReviewRequired = records.some((r) => r.instructorReviewRequired);
  if (anyReviewRequired) return "INSTRUCTOR_REVIEW_REQUIRED";

  const allFinalCorrect = DECISION_ORDER.every((id) => state.decisions[id].finalCorrect === true);
  if (allFinalCorrect) return "COMPLETE";

  return "IN_PROGRESS";
}

/**
 * Computes first-attempt score, X / total decisions.
 */
export function computeFirstAttemptScore(state) {
  const correct = DECISION_ORDER.filter((id) => state.decisions[id].firstAttemptCorrect === true).length;
  return { correct, total: DECISION_ORDER.length };
}

/**
 * Computes final mastery score, X / total decisions (only counts decisions with finalCorrect === true).
 */
export function computeFinalMasteryScore(state) {
  const correct = DECISION_ORDER.filter((id) => state.decisions[id].finalCorrect === true).length;
  return { correct, total: DECISION_ORDER.length };
}

/**
 * Counts how many decisions required remediation (more than one attempt) to reach a
 * correct final answer.
 */
export function computeRemediationCount(state) {
  return DECISION_ORDER.filter((id) => state.decisions[id].remediationUsed).length;
}

/**
 * Derives each competency's status from its associated decisions:
 *   "Mastered"                 - every decision in this competency was correct on first attempt
 *   "Mastered After Remediation" - every decision in this competency ended finalCorrect === true,
 *                                   but at least one needed remediation
 *   "Needs Instructor Review"  - any decision in this competency is flagged instructorReviewRequired
 *   "In Progress"              - not all decisions in this competency have a final answer yet
 */
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

/**
 * Returns the stage object a given decision belongs to.
 */
export function getStageForDecision(decisionId) {
  const decision = DECISIONS[decisionId];
  return STAGES.find((s) => s.id === decision.stageId) || null;
}

/**
 * Returns 1-based progress like { current: 4, total: 13 } for the given decision.
 */
export function getProgress(decisionId) {
  const idx = DECISION_ORDER.indexOf(decisionId);
  return { current: idx + 1, total: DECISION_ORDER.length };
}
