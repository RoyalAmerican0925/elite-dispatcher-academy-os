import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { DECISIONS, DECISION_ORDER, STAGES, COMPETENCY_LABELS } from './content.js';
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
  getProgress,
} from './logic.js';

const here = dirname(fileURLToPath(import.meta.url));

function correctResponse(decision) {
  if (decision.type === 'choice') return decision.correctKey;
  if (decision.type === 'matching') return { ...decision.correctMap };
  if (decision.type === 'sequencing') return [...decision.correctOrder];
  throw new Error(`Unsupported decision type: ${decision.type}`);
}

function wrongResponse(decision) {
  if (decision.type === 'choice') return decision.choices.find((choice) => choice.key !== decision.correctKey).key;
  if (decision.type === 'matching') {
    const firstItem = decision.items[0];
    const correct = decision.correctMap[firstItem];
    const wrong = decision.options.find((option) => option !== correct);
    return { ...decision.correctMap, [firstItem]: wrong };
  }
  if (decision.type === 'sequencing') return [...decision.correctOrder].reverse();
  throw new Error(`Unsupported decision type: ${decision.type}`);
}

test('runtime has launchable browser entry point and README', async () => {
  await access(join(here, 'index.html'));
  await access(join(here, 'README.md'));
  const html = await readFile(join(here, 'index.html'), 'utf8');
  assert.match(html, /id=["']app["']/);
  assert.match(html, /styles\.css/);
  assert.match(html, /app\.js/);
});

test('SIM-001 exposes eight stages and eighteen ordered decisions', () => {
  assert.equal(STAGES.length, 8);
  assert.equal(DECISION_ORDER.length, 18);
  assert.deepEqual(DECISION_ORDER, Array.from({ length: 18 }, (_, i) => `SIM01-D${String(i + 1).padStart(2, '0')}`));
});

test('every approved decision evaluates its correct response as correct', () => {
  for (const id of DECISION_ORDER) assert.equal(evaluateResponse(id, correctResponse(DECISIONS[id])), true, id);
});

test('first-attempt evidence survives remediation retry', () => {
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

test('ordinary incorrect decision cannot advance until corrected', () => {
  const id = 'SIM01-D04';
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(DECISIONS[id]));
  assert.equal(shouldAdvance(state, id), false);
  state = submitAttempt(state, id, correctResponse(DECISIONS[id]));
  assert.equal(shouldAdvance(state, id), true);
});

test('unsafe assumption decision escalates after two incorrect attempts', () => {
  const id = 'SIM01-D18';
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(DECISIONS[id]), 1000);
  assert.equal(state.decisions[id].instructorReviewRequired, false);
  state = submitAttempt(state, id, wrongResponse(DECISIONS[id]), 2000);
  assert.equal(state.decisions[id].instructorReviewRequired, true);
  assert.equal(shouldAdvance(state, id), true);
  assert.equal(computeSimulationStatus(state), 'INSTRUCTOR_REVIEW_REQUIRED');
});

test('eighteen correct final responses produce complete mastery', () => {
  let state = createInitialState();
  for (const id of DECISION_ORDER) state = submitAttempt(state, id, correctResponse(DECISIONS[id]));
  assert.equal(computeSimulationStatus(state), 'COMPLETE');
  assert.deepEqual(computeFirstAttemptScore(state), { correct: 18, total: 18 });
  assert.deepEqual(computeFinalMasteryScore(state), { correct: 18, total: 18 });
  assert.equal(computeRemediationCount(state), 0);
  const competencies = computeCompetencyStatus(state);
  assert.equal(Object.keys(competencies).length, 15);
  for (const competency of Object.keys(COMPETENCY_LABELS)) assert.equal(competencies[competency], 'Mastered', competency);
});

test('remediated correct response reports Mastered After Remediation for mapped competency', () => {
  const id = 'SIM01-D06';
  let state = createInitialState();
  state = submitAttempt(state, id, wrongResponse(DECISIONS[id]));
  state = submitAttempt(state, id, correctResponse(DECISIONS[id]));
  assert.equal(computeCompetencyStatus(state)['M01-C08'], 'Mastered After Remediation');
});

test('corrupt persisted state is rejected', () => {
  assert.equal(normalizePersistedState(null), null);
  assert.equal(normalizePersistedState({}), null);
  assert.equal(normalizePersistedState({ simulationId: 'SIM-999', decisions: {} }), null);
  assert.equal(normalizePersistedState({ simulationId: 'SIM-001', currentDecisionId: 'BAD', decisions: {} }), null);
});

test('legacy/partial state is normalized with new premium decisions', () => {
  const legacy = createInitialState();
  legacy.startedAt = 1000;
  legacy.currentDecisionId = 'SIM01-D06';
  delete legacy.decisions['SIM01-D18'];
  legacy.status = 'COMPLETE';
  const normalized = normalizePersistedState(legacy);
  assert.ok(normalized);
  assert.equal(normalized.currentDecisionId, 'SIM01-D06');
  assert.equal(normalized.startedAt, 1000);
  assert.equal(normalized.status, 'IN_PROGRESS');
  assert.ok(normalized.decisions['SIM01-D18']);
  assert.equal(normalized.decisions['SIM01-D18'].attemptCount, 0);
});

test('validation messages remain clear for choice matching and sequencing', () => {
  assert.match(getResponseValidationError(DECISIONS['SIM01-D02'], null), /select/i);
  assert.match(getResponseValidationError(DECISIONS['SIM01-D15'], {}), /complete/i);
  assert.equal(getResponseValidationError(DECISIONS['SIM01-D11'], DECISIONS['SIM01-D11'].correctOrder), null);
  assert.equal(getResponseValidationError(DECISIONS['SIM01-D16'], 'C'), null);
});

test('D12 accepts documented overlapping Document Flow classification for invoice submission', () => {
  const decision = DECISIONS['SIM01-D12'];
  const response = { ...decision.correctMap, 'North Star submitting its invoice to the factoring company': 'Document Flow' };
  assert.equal(evaluateResponse('SIM01-D12', response), true);
});

test('progress reflects premium extension', () => {
  assert.deepEqual(getProgress('SIM01-D01'), { current: 1, total: 18 });
  assert.deepEqual(getProgress('SIM01-D18'), { current: 18, total: 18 });
});
