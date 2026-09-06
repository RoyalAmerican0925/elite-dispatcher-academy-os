// SIM-009 premium architecture gate. Written BEFORE content.js/critical-controls.js
// exist, per TDD RED -> GREEN -> REFACTOR requirement. This file must fail (RED)
// on first run because the imports below do not resolve yet.
import assert from "node:assert/strict";
import { STAGES, DECISION_ORDER, DECISIONS, COMPETENCY_LABELS } from "../content.js";
import { CRITICAL_FAMILIES, REASSESSMENTS } from "../critical-controls.js";

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

test("architecture: exactly 12 progressive stages", () => {
  assert.equal(STAGES.length, 12);
});
test("architecture: at least 24 meaningful decisions", () => {
  assert.ok(DECISION_ORDER.length >= 24, `only ${DECISION_ORDER.length} decisions`);
});
test("architecture: all 15 competency families (M09-C01 through M09-C15) evidenced", () => {
  const used = new Set();
  for (const id of DECISION_ORDER) for (const c of DECISIONS[id].competencies) used.add(c);
  for (let n = 1; n <= 15; n++) {
    const id = `M09-C${String(n).padStart(2, "0")}`;
    assert.ok(used.has(id), `${id} not covered`);
  }
});
test("architecture: COMPETENCY_LABELS has exactly 15 entries", () => {
  assert.equal(Object.keys(COMPETENCY_LABELS).length, 15);
});
test("architecture: exactly six critical-failure families, no seventh", () => {
  const keys = Object.keys(CRITICAL_FAMILIES);
  assert.equal(keys.length, 6);
  assert.deepEqual(keys.sort(), ["M09-CF-01", "M09-CF-02", "M09-CF-03", "M09-CF-04", "M09-CF-05", "M09-CF-06"]);
});
test("architecture: every critical family has exactly one materially different reassessment", () => {
  assert.equal(Object.keys(REASSESSMENTS).length, 6);
  for (const cf of Object.keys(CRITICAL_FAMILIES)) assert.ok(REASSESSMENTS[cf], `no reassessment for ${cf}`);
});
test("architecture: every critical family is actually triggerable by at least one decision", () => {
  const triggered = new Set(DECISION_ORDER.map(id => DECISIONS[id].criticalFailureFamily).filter(Boolean));
  for (const cf of Object.keys(CRITICAL_FAMILIES)) assert.ok(triggered.has(cf), `${cf} has no triggering decision`);
  assert.equal(triggered.size, 6);
});
test("architecture: stage decisionIds resolve to real decisions in the right stage", () => {
  for (const stage of STAGES) for (const id of stage.decisionIds) {
    assert.ok(DECISIONS[id], `${id} missing`);
    assert.equal(DECISIONS[id].stageId, stage.id);
  }
});
test("architecture: reassessment scenarios use materially different facts than their trigger decision", () => {
  for (const [cf, r] of Object.entries(REASSESSMENTS)) {
    const triggerId = DECISION_ORDER.find(id => DECISIONS[id].criticalFailureFamily === cf);
    const triggerPrompt = DECISIONS[triggerId].prompt;
    assert.notEqual(r.prompt, triggerPrompt, `${cf} reassessment reuses the exact trigger prompt`);
  }
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
