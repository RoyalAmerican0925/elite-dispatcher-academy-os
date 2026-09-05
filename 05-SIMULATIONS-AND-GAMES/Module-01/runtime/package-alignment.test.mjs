import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../../..');

const required = [
  '02-CURRICULUM/Module-01/Student-Manual-Part-04.md',
  '04-STUDENT-TOOLS/Module-01-Tools/Module-01-Freight-Role-Map-Worksheet.md',
  '04-STUDENT-TOOLS/Module-01-Tools/Module-01-Load-Lifecycle-Sequencing-Worksheet.md',
  '04-STUDENT-TOOLS/Module-01-Tools/Module-01-Dispatch-File-Intake-and-Verification-Map.md',
  '03-ASSESSMENTS/Module-Quizzes/Module-01-Knowledge-Check.md',
  '03-ASSESSMENTS/Module-Exams/Module-01-Exam.md',
  '03-ASSESSMENTS/Module-Exams/Module-01-Exam-Answer-Key.md',
  '03-ASSESSMENTS/Practical-Assessments/Module-01-Practical.md',
  '03-ASSESSMENTS/Practical-Assessments/Module-01-Instructor-Scoring-Guide.md',
  '03-ASSESSMENTS/Instructor-Guides/Module-01-Instructor-Guide.md',
  '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Scenario-Packet.md',
  '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Scoring-Rubric.md',
  '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Completion-Record.md',
  '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Student-Premium-Addendum.md',
  '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Instructor-Premium-Addendum.md',
];

test('premium M01 package files exist', async () => {
  for (const path of required) await access(resolve(root, path));
});

test('manual and intake tool teach the same evidence/decision model', async () => {
  const manual = await readFile(resolve(root, '02-CURRICULUM/Module-01/Student-Manual-Part-04.md'), 'utf8');
  const tool = await readFile(resolve(root, '04-STUDENT-TOOLS/Module-01-Tools/Module-01-Dispatch-File-Intake-and-Verification-Map.md'), 'utf8');
  for (const token of ['KNOWN', 'UNKNOWN', 'VERIFY']) {
    assert.match(manual, new RegExp(token));
    assert.match(tool, new RegExp(token));
  }
  assert.match(manual, /STOP[\s\S]*IDENTIFY[\s\S]*TRACE[\s\S]*VERIFY[\s\S]*HAND OFF/);
  assert.match(tool, /STOP[\s\S]*IDENTIFY[\s\S]*TRACE[\s\S]*VERIFY[\s\S]*HAND OFF/);
});

test('knowledge check exam and practical all require applied evidence reasoning', async () => {
  const kc = await readFile(resolve(root, '03-ASSESSMENTS/Module-Quizzes/Module-01-Knowledge-Check.md'), 'utf8');
  const exam = await readFile(resolve(root, '03-ASSESSMENTS/Module-Exams/Module-01-Exam.md'), 'utf8');
  const practical = await readFile(resolve(root, '03-ASSESSMENTS/Practical-Assessments/Module-01-Practical.md'), 'utf8');
  for (const doc of [kc, exam, practical]) {
    assert.match(doc, /KNOWN[\s\S]*UNKNOWN[\s\S]*VERIFY/i);
    assert.match(doc, /STOP[\s\S]*IDENTIFY[\s\S]*TRACE[\s\S]*VERIFY[\s\S]*HAND OFF/i);
  }
});

test('instructor scoring maps all fifteen controlled M01 competencies', async () => {
  const guide = await readFile(resolve(root, '03-ASSESSMENTS/Instructor-Guides/Module-01-Instructor-Guide.md'), 'utf8');
  const simRecord = await readFile(resolve(root, '05-SIMULATIONS-AND-GAMES/Module-01/Module-01-Simulation-Completion-Record.md'), 'utf8');
  for (let i = 1; i <= 15; i++) {
    const id = `M01-C${String(i).padStart(2, '0')}`;
    assert.match(guide, new RegExp(id));
    assert.match(simRecord, new RegExp(id));
  }
});

test('package preserves release boundary and does not claim publication ready', async () => {
  const readme = await readFile(resolve(root, '05-SIMULATIONS-AND-GAMES/Module-01/runtime/README.md'), 'utf8');
  assert.match(readme, /BUILD COMPLETE — RELEASE QA DEFERRED/);
  assert.match(readme, /does not establish `PUBLICATION_READY`/);
});
