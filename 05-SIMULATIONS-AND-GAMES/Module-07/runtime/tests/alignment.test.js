import assert from "node:assert/strict";import fs from "node:fs";import path from "node:path";import {fileURLToPath} from "node:url";import {STAGES,DECISIONS,DECISION_ORDER,ARTIFACTS,COMPETENCY_LABELS} from "../content.js";import {CRITICAL_FAILURE_FAMILIES,CRITICAL_TRIGGERS,REASSESSMENTS} from "../reassessments.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");const docs=["SIM-007-Student-Instructions.md","SIM-007-Scenario-and-Evidence-Packet.md","SIM-007-Instructor-Guide.md","SIM-007-Scoring-and-Competency-Map.md","SIM-007-Completion-and-Competency-Record.md"];
t("five required package documents exist",()=>docs.forEach(x=>assert.equal(fs.existsSync(path.join(root,x)),true,`${x} missing`)));
t("runtime README exists",()=>assert.equal(fs.existsSync(path.join(root,"runtime","README.md")),true));
t("approved 10-stage arc and 33 decisions remain",()=>{assert.equal(STAGES.length,10);assert.equal(DECISION_ORDER.length,33)});
t("all 18 competencies remain represented",()=>{const used=new Set();for(const id of DECISION_ORDER)for(const c of DECISIONS[id].competencies)used.add(c);assert.equal(Object.keys(COMPETENCY_LABELS).length,18);for(let n=1;n<=18;n++)assert.ok(used.has(`C${String(n).padStart(2,"0")}`))});
t("exactly five critical families and reassessments",()=>{assert.deepEqual(Object.keys(CRITICAL_FAILURE_FAMILIES).sort(),["CF-01","CF-02","CF-03","CF-04","CF-05"]);assert.deepEqual(Object.keys(REASSESSMENTS).sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort())});
t("critical trigger map uses only approved families",()=>{for(const [id,x] of Object.entries(CRITICAL_TRIGGERS)){assert.ok(DECISIONS[id]);assert.ok(CRITICAL_FAILURE_FAMILIES[x.family])}});
t("HOLD FOR DATA is explicitly present",()=>{const d=DECISIONS["SIM07-D33"];assert.match(d.choices.find(x=>x.key==="C").text,/HOLD FOR DATA/);assert.equal(d.correctKey,"C")});
t("counter threshold uses total-trip formula and correct 2370 value",()=>{const d=DECISIONS["SIM07-D28"];assert.equal(d.correctValue,2370);assert.match(d.remediation,/total trip miles/i)});
t("accessorial evidence remains unearned before trigger",()=>{assert.equal(DECISIONS["SIM07-D17"].correctKey,"B");assert.match(ARTIFACTS.detentionClause.lines.join(" "),/has not occurred|not been delivered/i)});
t("fictional instructional labeling appears in runtime artifacts",()=>assert.match(Object.values(ARTIFACTS).flatMap(x=>x.lines).join(" "),/FICTIONAL INSTRUCTIONAL/));
console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
