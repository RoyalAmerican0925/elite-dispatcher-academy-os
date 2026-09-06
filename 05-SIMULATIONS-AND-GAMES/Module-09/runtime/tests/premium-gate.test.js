import assert from 'node:assert/strict';
import test from 'node:test';

const content = await import('../content.js');
const critical = await import('../critical-controls.js');
const logic = await import('../logic.js');

test('SIM-009 has exactly 12 stages and at least 24 meaningful decisions', () => {
  assert.equal(content.STAGES.length, 12);
  assert.ok(content.DECISION_ORDER.length >= 24);
  assert.equal(new Set(content.DECISION_ORDER).size, content.DECISION_ORDER.length);
});

test('SIM-009 evidences all 15 controlled competencies', () => {
  const actual = new Set(Object.values(content.DECISIONS).flatMap(d => d.competencies || []));
  for (let i = 1; i <= 15; i++) assert.ok(actual.has(`M09-C${String(i).padStart(2,'0')}`));
});

test('SIM-009 has exactly six critical families and six materially different reassessments', () => {
  assert.equal(Object.keys(critical.CRITICAL_FAMILIES).length, 6);
  assert.equal(Object.keys(critical.REASSESSMENTS).length, 6);
  for (const id of Object.keys(critical.CRITICAL_FAMILIES)) {
    assert.ok(critical.REASSESSMENTS[id]);
    assert.notEqual(critical.REASSESSMENTS[id].decisionId, critical.CRITICAL_FAMILIES[id].triggerDecisionId);
  }
});

test('first attempt is immutable after same-screen correction', () => {
  let state = logic.createInitialState();
  state = logic.submitAttempt(state, 'SIM09-D09', 'accept');
  const first = structuredClone(state.firstAttempts['SIM09-D09']);
  state = logic.submitAttempt(state, 'SIM09-D09', 'hold_correct');
  assert.deepEqual(state.firstAttempts['SIM09-D09'], first);
  assert.equal(logic.computeCriticalFailureStatus(state, 'M09-CF-02'), 'REASSESSMENT_REQUIRED');
});

test('materially different reassessment resolves critical history without deleting trigger', () => {
  let state = logic.createInitialState();
  state = logic.submitAttempt(state, 'SIM09-D09', 'accept');
  state = logic.submitAttempt(state, 'SIM09-D09', 'hold_correct');
  state = logic.submitCriticalReassessment(state, 'M09-CF-02', 'hold_correct');
  assert.equal(logic.computeCriticalFailureStatus(state, 'M09-CF-02'), 'RESOLVED_BY_REASSESSMENT');
  assert.ok(state.criticalHistory['M09-CF-02'].triggeredAt);
  assert.ok(state.reassessmentHistory['M09-CF-02']);
});

test('completion record separates first attempt, final mastery, critical and reassessment evidence', () => {
  const record = logic.computeCompletionRecord(logic.createInitialState());
  assert.ok(record.firstAttempts);
  assert.ok(record.finalMastery);
  assert.ok(record.competencies);
  assert.ok(record.criticalHistory);
  assert.ok(record.reassessmentHistory);
  assert.ok(Object.hasOwn(record, 'instructorReviewRequired'));
});
