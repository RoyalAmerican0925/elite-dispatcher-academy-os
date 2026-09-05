import assert from "node:assert/strict";
import fs from "node:fs";
import { DECISIONS, COMPETENCY_LABELS, DECISION_ORDER, STAGES } from "../content.js";
import { CRITICAL_FAMILIES, REASSESSMENTS } from "../critical-controls.js";

let passed=0,failed=0;function test(name,fn){try{fn();passed++;console.log(`PASS  ${name}`)}catch(e){failed++;console.log(`FAIL  ${name}`);console.log(`      ${e.message}`)}}
const read=(name)=>fs.readFileSync(new URL(`../../${name}`,import.meta.url),"utf8");

test("locked architecture remains seven stages and fifteen decisions",()=>{assert.equal(STAGES.length,7);assert.equal(DECISION_ORDER.length,15)});
test("D15 teaches complete eight-stage Module 02 model",()=>assert.deepEqual(DECISIONS["SIM02-D15"].correctOrder,["stop","identify","trace","check","classify","act","document","escalate"]));
test("D14 preserves insufficient-information discipline",()=>{const t=`${DECISIONS["SIM02-D14"].correctFeedback} ${DECISIONS["SIM02-D14"].remediation}`;assert.match(t,/TRACE/i);assert.match(t,/HOLD|VERIFY/i);assert.match(t,/DOCUMENT/i)});
test("D09 rejects non-overlap safe harbor",()=>assert.match(`${DECISIONS["SIM02-D09"].correctFeedback} ${DECISIONS["SIM02-D09"].remediation}`,/not.*safe harbor|does not.*safe harbor/i));
test("competency labels preserve trace action documentation escalation",()=>{const t=Object.values(COMPETENCY_LABELS).join(" ");assert.match(t,/trace|source/i);assert.match(t,/action|operational/i);assert.match(t,/document/i);assert.match(t,/escalat/i)});
test("exactly three controlled high-stakes families exist",()=>{assert.deepEqual(Object.keys(CRITICAL_FAMILIES),["M02-CF-01","M02-CF-02","M02-CF-03"]);assert.equal(Object.keys(REASSESSMENTS).length,3)});
test("each high-stakes family has a materially different reassessment",()=>{for(const [family,r] of Object.entries(REASSESSMENTS)){assert.ok(r.scenario.length>80,`${family} scenario too thin`);assert.ok(r.correctKey);assert.ok(Object.keys(r.choices).length>=3)}});
test("scoring record requires alternate reassessment and preserved history",()=>{const t=read("Module-02-Simulation-Scoring-Rubric.md");assert.match(t,/same-screen correction|later correct answer/i);assert.match(t,/alternate reassessment/i);assert.match(t,/preserv/i)});
test("completion record separates trigger and reassessment evidence",()=>{const t=read("Module-02-Simulation-Completion-Record.md");assert.match(t,/Trigger timestamp/i);assert.match(t,/Reassessment result/i);assert.match(t,/same-screen correction does not erase/i)});
test("package never claims PUBLICATION_READY",()=>{for(const name of ["Module-02-Simulation-Scoring-Rubric.md","Module-02-Simulation-Completion-Record.md","Module-02-Simulation-Instructor-Guide.md"]){const t=read(name);assert.doesNotMatch(t,/Status:\s*PUBLICATION_READY|Release status:\s*PUBLICATION_READY/i)}});
console.log("");console.log(`${passed} passed, ${failed} failed`);if(failed)process.exitCode=1;
