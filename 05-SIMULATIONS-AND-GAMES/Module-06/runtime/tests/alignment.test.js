import assert from "node:assert/strict";import fs from "node:fs";import {fileURLToPath} from "node:url";import path from "node:path";import {STAGES,DECISIONS,ARTIFACTS} from "../content.js";
let p=0,f=0;function t(n,x){try{x();p++;console.log(`PASS  ${n}`)}catch(e){f++;console.log(`FAIL  ${n}\n      ${e.message}`)}}
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");const docs=["Module-06-Simulation-Student.md","Module-06-Simulation-Scenario-Packet.md","Module-06-Simulation-Instructor-Guide.md","Module-06-Simulation-Scoring-Rubric.md","Module-06-Simulation-Completion-Record.md"];
t("five required simulation package docs exist",()=>docs.forEach(x=>assert.equal(fs.existsSync(path.join(root,x)),true,`${x} missing`)));
t("approved ten-stage arc is present",()=>assert.equal(STAGES.length,10));
t("status evidence includes factor and distinct timing concepts",()=>{const s=ARTIFACTS.financial.lines.join(" ").toLowerCase();assert.ok(s.includes("factor"));assert.ok(s.includes("7-calendar-day"));assert.ok(s.includes("7-business-day"));assert.ok(s.includes("30-day"));});
t("inactive authority is a critical control",()=>assert.equal(DECISIONS["SIM06-D11"].criticalFailureFamily,"CF4_PROCEED_WITH_INACTIVE_AUTHORITY"));
t("duplicate evidence cannot alone prove double brokering",()=>{assert.equal(DECISIONS["SIM06-D12"].correctKey,"B");assert.equal(DECISIONS["SIM06-D13"].correctKey,"B");});
t("payment change is a critical control",()=>assert.equal(DECISIONS["SIM06-D14"].criticalFailureFamily,"CF1_ACT_ON_PAYMENT_REDIRECTION"));
t("final statement separates transaction from legitimate entity",()=>assert.match(DECISIONS["SIM06-D22"].choices.find(x=>x.key==="B").text,/legitimate entity record remains separate/i));
console.log(`\n${p} passed, ${f} failed`);if(f)process.exit(1);
