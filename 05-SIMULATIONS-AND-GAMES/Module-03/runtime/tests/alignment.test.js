import assert from "node:assert/strict";
import fs from "node:fs";
import { DECISIONS, DECISION_ORDER, STAGES, COMPETENCY_LABELS } from "../content.js";
import { CRITICAL_FAMILIES, REASSESSMENTS } from "../critical-controls.js";

let passed=0,failed=0;function test(name,fn){try{fn();passed++;console.log(`PASS  ${name}`)}catch(e){failed++;console.log(`FAIL  ${name}`);console.log(`      ${e.message}`)}}
const read=(name)=>fs.readFileSync(new URL(`../../${name}`,import.meta.url),"utf8");

test("locked architecture remains seven stages and fifteen decisions",()=>{assert.equal(STAGES.length,7);assert.equal(DECISION_ORDER.length,15)});
test("exactly two practical-derived critical families exist",()=>{assert.deepEqual(Object.keys(CRITICAL_FAMILIES),["M03-CF-01","M03-CF-02"]);assert.deepEqual(Object.values(CRITICAL_FAMILIES).map(v=>v.decisionId),["SIM03-D09","SIM03-D11"])});
test("each critical family has a materially different reassessment",()=>{assert.equal(Object.keys(REASSESSMENTS).length,2);for(const [family,r] of Object.entries(REASSESSMENTS)){assert.ok(r.scenario.length>80,`${family} scenario too thin`);assert.ok(r.correctKey);assert.ok(Object.keys(r.choices).length>=3)}});
test("gross and axle reasoning remains separate",()=>{const t=`${DECISIONS["SIM03-D11"].correctFeedback} ${DECISIONS["SIM03-D12"].correctFeedback}`;assert.match(t,/separate|independent/i);assert.match(t,/34,000/i)});
test("overwidth scenario rejects both automatic extremes",()=>{assert.notEqual(DECISIONS["SIM03-D07"].correctKey,"A");assert.notEqual(DECISIONS["SIM03-D07"].correctKey,"B");assert.match(DECISIONS["SIM03-D07"].correctFeedback,/not automatically|does not automatically/i)});
test("competency labels preserve equipment through multi-factor verification",()=>{const t=Object.values(COMPETENCY_LABELS).join(" ");assert.match(t,/equipment/i);assert.match(t,/weight|axle/i);assert.match(t,/verification|information/i);assert.match(t,/multi-factor/i)});
test("scoring record requires alternate reassessment and preserved history",()=>{const t=read("Module-03-Simulation-Scoring-Rubric.md");assert.match(t,/same screen|same-screen|later correct/i);assert.match(t,/alternate reassessment/i);assert.match(t,/preserv/i)});
test("completion record separates trigger and reassessment evidence",()=>{const t=read("Module-03-Simulation-Completion-Record.md");assert.match(t,/Trigger time/i);assert.match(t,/Reassessment result/i);assert.match(t,/same-screen correction never erases/i)});
test("package never claims PUBLICATION_READY",()=>{for(const name of ["Module-03-Simulation-Scoring-Rubric.md","Module-03-Simulation-Completion-Record.md","Module-03-Simulation-Instructor-Guide.md"]){const t=read(name);assert.doesNotMatch(t,/Status:\s*PUBLICATION_READY|Release status:\s*PUBLICATION_READY/i)}});
console.log("");console.log(`${passed} passed, ${failed} failed`);if(failed)process.exitCode=1;
