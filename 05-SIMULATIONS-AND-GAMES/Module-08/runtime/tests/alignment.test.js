import assert from "node:assert/strict";import fs from "node:fs";import path from "node:path";import {fileURLToPath} from "node:url";import {STAGES,DECISIONS,DECISION_ORDER,CRITICAL_FAILURE_FAMILIES,REASSESSMENTS} from "../content.js";
let p=0,f=0;function t(n,fn){try{fn();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");
const docs=["SIM-008-Student-Instructions.md","SIM-008-Scenario-and-Evidence-Packet.md","SIM-008-Instructor-Guide.md","SIM-008-Scoring-and-Competency-Map.md","SIM-008-Completion-and-Competency-Record.md"];
t("five required premium package documents exist",()=>docs.forEach(x=>assert.equal(fs.existsSync(path.join(root,x)),true,`${x} missing`)));
t("locked architecture is 12 stages and at least 24 actions",()=>{assert.equal(STAGES.length,12);assert.ok(DECISION_ORDER.length>=24)});
t("exactly six critical families and six materially different reassessments exist",()=>{assert.deepEqual(Object.keys(CRITICAL_FAILURE_FAMILIES).sort(),["CF-01","CF-02","CF-03","CF-04","CF-05","CF-06"]);assert.deepEqual(Object.keys(REASSESSMENTS).sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort())});
t("critical families are carried by explicit decision metadata",()=>{const mapped=new Set(DECISION_ORDER.map(id=>DECISIONS[id].criticalFailureFamily).filter(Boolean));assert.deepEqual([...mapped].sort(),Object.keys(CRITICAL_FAILURE_FAMILIES).sort())});
t("final success statuses never claim BOOKED",()=>{for(const id of DECISION_ORDER){const s=DECISIONS[id].finalStatusSuccess;if(s)assert.notEqual(s,"BOOKED")}});
t("M09 boundary language is explicit in handoff decisions",()=>{const text=[DECISIONS["SIM08-D18"],DECISIONS["SIM08-D23"],DECISIONS["SIM08-D24"]].map(d=>JSON.stringify(d)).join(" ");assert.match(text,/Module 09|M09/);assert.match(text,/PENDING/i)});
t("accessorial term control includes trigger amount evidence process",()=>{const d=DECISIONS["SIM08-D10"];assert.deepEqual([...d.correctSet].sort(),["amount","evidence","process","trigger"])});
t("closeout requires three distinct buckets",()=>{const d=DECISIONS["SIM08-D16"];assert.equal(d.type,"categorize");assert.deepEqual(d.buckets.map(b=>b.key).sort(),["agreed","notEstablished","unresolved"])});
console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
