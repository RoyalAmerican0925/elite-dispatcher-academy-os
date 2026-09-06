// Package-alignment and currentness automated gate.
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DECISION_ORDER, DECISIONS } from "../content.js";
import { CRITICAL_FAMILIES } from "../critical-controls.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, "../.."); // 05-SIMULATIONS-AND-GAMES/Module-09/

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; console.log(`PASS  ${name}`); }
  catch (err) { failed += 1; console.log(`FAIL  ${name}`); console.log(`      ${err.message}`); }
}

const REQUIRED_DOCS = [
  "SIM-009-Student-Instructions.md",
  "SIM-009-Scenario-and-Evidence-Packet.md",
  "SIM-009-Instructor-Guide.md",
  "SIM-009-Scoring-and-Competency-Map.md",
  "SIM-009-Completion-and-Competency-Record.md",
];

for (const doc of REQUIRED_DOCS) {
  test(`package doc exists: ${doc}`, () => {
    assert.ok(existsSync(path.join(root, doc)), `${doc} not found at ${root}`);
  });
}
test("runtime README.md exists", () => {
  assert.ok(existsSync(path.join(dirname, "..", "README.md")));
});

test("every permanent package doc names all six critical-failure families", () => {
  for (const doc of REQUIRED_DOCS) {
    const text = readFileSync(path.join(root, doc), "utf8");
    for (const cf of Object.keys(CRITICAL_FAMILIES)) {
      assert.match(text, new RegExp(cf), `${doc} does not mention ${cf}`);
    }
  }
});

test("no PUBLICATION_READY claim anywhere in the package or runtime", () => {
  const files = [...REQUIRED_DOCS.map(d => path.join(root, d)), path.join(dirname, "..", "README.md"), path.join(dirname, "..", "content.js"), path.join(dirname, "..", "app.js")];
  for (const f of files) {
    const text = readFileSync(f, "utf8");
    assert.doesNotMatch(text, /PUBLICATION_READY/, `${f} claims PUBLICATION_READY`);
  }
});

test("M08 handoff boundary and M10 handoff boundary are both explicit in the package", () => {
  const packet = readFileSync(path.join(root, "SIM-009-Scenario-and-Evidence-Packet.md"), "utf8");
  assert.match(packet, /M08/);
  const instructions = readFileSync(path.join(root, "SIM-009-Student-Instructions.md"), "utf8");
  assert.match(instructions, /M10/);
});

test("successful final state requires booking controls and does not claim trip/HOS/monitoring/billing completion", () => {
  const record = readFileSync(path.join(root, "SIM-009-Completion-and-Competency-Record.md"), "utf8");
  assert.match(record, /does not/i);
  assert.match(record, /HOS|trip.plan|monitoring|billing/i);
});

test("practical/instructor/runtime share the same RESOLVED BY REASSESSMENT semantics", () => {
  const guide = readFileSync(path.join(root, "SIM-009-Instructor-Guide.md"), "utf8");
  assert.match(guide, /RESOLVED BY REASSESSMENT|RESOLVED_BY_REASSESSMENT/);
  const runtimeText = readFileSync(path.join(dirname, "..", "logic.js"), "utf8");
  assert.match(runtimeText, /RESOLVED_BY_REASSESSMENT/);
});

test("architecture facts (12 stages, >=24 decisions, 15 competencies, 6 critical families) hold", () => {
  assert.ok(DECISION_ORDER.length >= 24);
  const comps = new Set();
  for (const id of DECISION_ORDER) for (const c of DECISIONS[id].competencies) comps.add(c);
  assert.equal(comps.size, 15);
  assert.equal(Object.keys(CRITICAL_FAMILIES).length, 6);
});

console.log("");
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) process.exitCode = 1;
