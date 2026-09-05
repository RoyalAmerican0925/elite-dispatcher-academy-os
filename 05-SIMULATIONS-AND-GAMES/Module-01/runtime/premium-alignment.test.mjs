import test from 'node:test';
import assert from 'node:assert/strict';
import { STAGES, DECISIONS, DECISION_ORDER, COMPETENCY_LABELS } from './content.js';

const competencyIds = Array.from({ length: 15 }, (_, i) => `M01-C${String(i + 1).padStart(2, '0')}`);

function decisionCompetencies(decision) {
  if (Array.isArray(decision.competencies) && decision.competencies.length) return decision.competencies;
  return [decision.competency];
}

test('premium SIM-001 has eight stages and eighteen meaningful decisions', () => {
  assert.equal(STAGES.length, 8);
  assert.equal(DECISION_ORDER.length, 18);
});

test('premium SIM-001 exposes all fifteen controlled M01 competencies', () => {
  assert.deepEqual(Object.keys(COMPETENCY_LABELS).sort(), competencyIds);
  const used = new Set();
  for (const id of DECISION_ORDER) {
    for (const competency of decisionCompetencies(DECISIONS[id])) used.add(competency);
  }
  for (const competency of competencyIds) assert.ok(used.has(competency), `${competency} missing from SIM evidence`);
});

test('premium extension includes explicit document state, evidence classification, interstate nuance, handoff and next-action decisions', () => {
  for (const id of ['SIM01-D14','SIM01-D15','SIM01-D16','SIM01-D17','SIM01-D18']) assert.ok(DECISIONS[id], `${id} missing`);
  assert.match(DECISIONS['SIM01-D14'].prompt, /document|rate confirmation|POD|invoice/i);
  assert.match(DECISIONS['SIM01-D15'].prompt, /KNOWN|UNKNOWN|VERIFY|conflict/i);
  assert.match(DECISIONS['SIM01-D16'].prompt, /interstate|intrastate/i);
  assert.match(DECISIONS['SIM01-D17'].prompt, /later|module|handoff|workflow/i);
  assert.match(DECISIONS['SIM01-D18'].prompt, /STOP|next action|VERIFY|HAND OFF/i);
});

test('existing thirteen decision IDs remain in order before the premium extension', () => {
  assert.deepEqual(DECISION_ORDER.slice(0,13), Array.from({ length: 13 }, (_, i) => `SIM01-D${String(i + 1).padStart(2,'0')}`));
});
