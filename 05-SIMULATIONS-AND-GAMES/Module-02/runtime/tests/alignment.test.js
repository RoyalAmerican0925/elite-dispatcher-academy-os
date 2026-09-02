import assert from "node:assert/strict";
import { DECISIONS, COMPETENCY_LABELS } from "../content.js";

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log(`PASS  ${name}`);
  } catch (err) {
    failed += 1;
    console.log(`FAIL  ${name}`);
    console.log(`      ${err.message}`);
  }
}

test("D15 teaches the complete eight-stage Module 02 control model", () => {
  assert.deepEqual(DECISIONS["SIM02-D15"].correctOrder, [
    "stop",
    "identify",
    "trace",
    "check",
    "classify",
    "act",
    "document",
    "escalate",
  ]);
});

test("D14 remediation preserves insufficient-information discipline and operational action", () => {
  const text = `${DECISIONS["SIM02-D14"].correctFeedback} ${DECISIONS["SIM02-D14"].remediation}`;
  assert.match(text, /TRACE/i);
  assert.match(text, /CLASSIFY/i);
  assert.match(text, /HOLD|VERIFY/i);
  assert.match(text, /DOCUMENT/i);
});

test("D09 does not convert non-overlap into a legal safe harbor", () => {
  const text = `${DECISIONS["SIM02-D09"].choices[0].text} ${DECISIONS["SIM02-D09"].correctFeedback} ${DECISIONS["SIM02-D09"].remediation}`;
  assert.match(text, /supplied facts/i);
  assert.match(text, /not.*safe harbor|does not.*safe harbor/i);
});

test("competency labels include tracing, action, documentation, and escalation", () => {
  const labels = Object.values(COMPETENCY_LABELS).join(" ");
  assert.match(labels, /trace|source/i);
  assert.match(labels, /action|operational/i);
  assert.match(labels, /document/i);
  assert.match(labels, /escalat/i);
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
