import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { DECISIONS, DECISION_ORDER, STAGES } from './content.js';
import {
  createInitialState,
  evaluateResponse,
  submitAttempt,
  shouldAdvance,
  computeSimulationStatus,
  computeFirstAttemptScore,
  computeFinalMasteryScore,
  computeRemediationCount,
  computeCompetencyStatus,
  normalizePersistedState,
  getResponseValidationError,
} from './logic.js';

const here = dirname(fileURLToPath(import.meta.url));

function correctResponse(decision) {
  if (decision.type === 'choice') return decision.correctKey;
  if (decision.type === 'matching') return { ...decision.correctMap };
  if (decision.type === 'sequencing') return [...decision.correctOrder];
  throw new Error(`Unsupported decision type: ${decision.type}`);
}

function wrongResponse(decision) {
  if (decision.type === 'choice') {
    return decision.choices.find((choice) => choice.key !== decision.correctKey).key;
  }
  if (decision.type === 'matching') {
    const firstItem = decision.items[0];
    const correct = decision.correctMap[firstItem];
    const wrong = decision.options.find((option) => option !== correct);
    return { ...decision.correctMap, [firstItem]: wrong };
  }
  if (decision.type === 'sequencing') return [...decision.correctOrder].reverse();
  throw new Error(`Unsupported decision type: ${decision.type}`);
}

test('runtime has a launchable HTML entry point and operating README', async () => {
  await access(join(here, 'index.html'));
  await access(join(here, 'README.md'));
  const html = await readFile(join(here, 'index.html'), 'utf8');
  assert.match(html, /id=["']app["']/);
  assert.match(html, /styles\.css/);
  assert.match(html, /app\.js/);
});

test('SIM-001 defines six stages and exactly 13 ordered decisions', () => {
  assert.equal(STAGES.length, 6);
  assert.equal(DECISION_ORDER.length, 13);
  assert.deepEqual(DECISION_ORDER, Array.from({ length: 13 }, (_, i) => `SIM01-D${String(i + 1).padStart(2, '0')}`));
});

test('every approved decision evaluates its correct response as correct', () => {
  for (const id of DECISION_ORDER) {
    assert.equal(evaluateResponse(id, correctResponse(DECISIONS[id])), true, id);
  }
});

test('first-attempt evidence is preserved after remediation and retry', () => {
  const id = 'SIM01-D02';
  const decision = DECISIONS[id];
  let state = createInitialState();
  const first = wrongResponse(decision);
  state = submitAttempt(state, id, first, 1000);
  state = submitAttempt(state, id, correctResponse(decision), 2000);

  const record = state.decisions[id];
  assert.deepEqual(record.firstAttemptResponse, first);
  assert.equal(record.firstAttemptCorrect, false);
  assert.equal(record.firstAttemptTimestamp, 1000);
  assert.equal(record.finalCorrect, true);
  assert.equal(record.finalTimestamp, 2000);
  assert.equal(record.remediationUsed, true);
  assert.equal(record.attemptCount, 2);
});

test('ordinary incorrect decisions do not advance until corrected', () => {
  const id = 'SIM01-D04';
  const decision = DECISIONS[id];
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(decision));
  assert.equal(shouldAdvance(state, id), false);
  state = submitAttempt(state, id, correctResponse(decision));
  assert.equal(shouldAdvance(state, id), true);
});

test('SIM01-D13 escalates after two incorrect attempts', () => {
  const id = 'SIM01-D13';
  const decision = DECISIONS[id];
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(decision), 1000);
  assert.equal(state.decisions[id].instructorReviewRequired, false);
  assert.equal(shouldAdvance(state, id), false);
  state = submitAttempt(state, id, wrongResponse(decision), 2000);
  assert.equal(state.decisions[id].instructorReviewRequired, true);
  assert.equal(shouldAdvance(state, id), true);
  assert.equal(computeSimulationStatus(state), 'INSTRUCTOR_REVIEW_REQUIRED');
});

test('13 correct final responses produce complete mastery', () => {
  let state = createInitialState();
  for (const id of DECISION_ORDER) {
    state = submitAttempt(state, id, correctResponse(DECISIONS[id]));
  }
  assert.equal(computeSimulationStatus(state), 'COMPLETE');
  assert.deepEqual(computeFirstAttemptScore(state), { correct: 13, total: 13 });
  assert.deepEqual(computeFinalMasteryScore(state), { correct: 13, total: 13 });
  assert.equal(computeRemediationCount(state), 0);
  const competencies = computeCompetencyStatus(state);
  for (const status of Object.values(competencies)) assert.equal(status, 'Mastered');
});

test('remediated correct response reports Mastered After Remediation', () => {
  const id = 'SIM01-D06';
  const decision = DECISIONS[id];
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(decision));
  state = submitAttempt(state, id, correctResponse(decision));
  assert.equal(computeCompetencyStatus(state).E, 'Mastered After Remediation');
  assert.equal(computeRemediationCount(state), 1);
});

test('corrupt persisted state is rejected instead of crashing the runtime', () => {
  assert.equal(normalizePersistedState(null), null);
  assert.equal(normalizePersistedState({}), null);
  assert.equal(normalizePersistedState({ simulationId: 'SIM-999', decisions: {} }), null);
  assert.equal(normalizePersistedState({ simulationId: 'SIM-001', currentDecisionId: 'BAD', decisions: {} }), null);
});

test('legacy or partial persisted state is normalized to the current schema', () => {
  const legacy = createInitialState();
  legacy.startedAt = 1000;
  legacy.currentDecisionId = 'SIM01-D06';
  legacy.decisions['SIM01-D02'] = {
    firstAttemptResponse: 'A',
    firstAttemptCorrect: false,
    attemptCount: 1,
    finalResponse: 'A',
    finalCorrect: false,
  };
  delete legacy.decisions['SIM01-D13'];
  legacy.status = 'COMPLETE';

  const normalized = normalizePersistedState(legacy);
  assert.ok(normalized);
  assert.equal(normalized.currentDecisionId, 'SIM01-D06');
  assert.equal(normalized.startedAt, 1000);
  assert.equal(normalized.status, 'IN_PROGRESS');
  assert.equal(normalized.decisions['SIM01-D02'].firstAttemptResponse, 'A');
  assert.equal(normalized.decisions['SIM01-D02'].attemptCount, 1);
  assert.ok(normalized.decisions['SIM01-D13']);
  assert.equal(normalized.decisions['SIM01-D13'].attemptCount, 0);
});

test('commercial UX returns a clear validation message for incomplete answers', () => {
  assert.match(getResponseValidationError(DECISIONS['SIM01-D02'], null), /select/i);
  assert.match(getResponseValidationError(DECISIONS['SIM01-D01'], {}), /complete/i);
  assert.equal(getResponseValidationError(DECISIONS['SIM01-D11'], DECISIONS['SIM01-D11'].correctOrder), null);
  assert.equal(getResponseValidationError(DECISIONS['SIM01-D02'], 'B'), null);
});

test('D03 contributes to both instructor-defined competencies A and B', () => {
  const decision = DECISIONS['SIM01-D03'];
  assert.deepEqual(decision.competencies, ['A', 'B']);

  let state = createInitialState();
  state = submitAttempt(state, 'SIM01-D03', wrongResponse(decision));
  state = submitAttempt(state, 'SIM01-D03', correctResponse(decision));
  const statuses = computeCompetencyStatus(state);
  assert.equal(statuses.A, 'In Progress');
  assert.equal(statuses.B, 'In Progress');
});

test('D12 accepts the documented overlapping Document Flow classification for invoice submission', () => {
  const decision = DECISIONS['SIM01-D12'];
  const overlapResponse = { ...decision.correctMap, 'North Star submitting its invoice to the factoring company': 'Document Flow' };
  assert.equal(evaluateResponse('SIM01-D12', overlapResponse), true);
});
