# SIM-003 — Module 03 Load Compatibility Desk — Instructor Guide

**Build status:** BUILD QA  
**Release status:** RELEASE QA DEFERRED  
**Companion:** Module 03 curriculum, assessments, student tools, SIM-003 scenario packet/runtime/scoring/completion record.

## Instructional Purpose

SIM-003 is designed to test whether the learner can integrate multiple Module 03 facts into a defensible dispatch decision. The target is not memorization of trailer trivia. The learner must distinguish:
- known equipment facts from assumptions;
- commodity/equipment fit;
- temperature capability;
- dimensional fit versus specialized-movement questions;
- gross weight from axle-distribution limits;
- driver qualification from equipment capability;
- complete versus incomplete load information;
- proceed/reject/escalate/verify decisions.

## Core Mental Model

Require the learner to reason through:

**CHECK EQUIPMENT → COMMODITY → TEMPERATURE → DIMENSIONS → WEIGHT/AXLES → DRIVER QUALIFICATIONS → MISSING INFORMATION → VERIFY → PROCEED / REJECT / ESCALATE**

A learner who reaches the correct answer for the wrong reason has not demonstrated the full competency.

## Stage Map

| Stage | Decisions | Occupational focus |
|---|---|---|
| 1 — Equipment File | D01–D02 | Separate stated equipment facts from unit/load-specific unknowns |
| 2 — Standard Dry-Van Load | D03–D04 | Identify an ordinary fit using multiple relevant facts |
| 3 — Temperature-Control Conflict | D05–D06 | Recognize fundamental equipment-capability mismatch |
| 4 — Overwidth / Specialized Load | D07–D08 | Avoid absolute conclusions; identify route/jurisdiction/permit verification |
| 5 — Driver / Endorsement Event | D09–D10 | Recognize driver qualification conflict and endorsement distinctions |
| 6 — Weight / Axle Trap | D11–D12 | Keep gross and axle analyses separate |
| 7 — Incomplete Load File | D13–D15 | Identify missing data and execute verification discipline |

## Decision-Level Review

### D01 — Equipment facts
Expected reasoning: select only facts actually stated in the equipment profile. Nominal equipment type does not prove exact interior dimensions or current tare weight.

### D02 — Load-specific verification
Expected reasoning: commodity fit, dimensional fit and weight/axle legality depend on the specific load and actual equipment combination.

### D03–D04 — Standard dry-van fit
Expected reasoning: the fictional home-goods load presents no stated temperature, width, loading-method or special-handling conflict. The learner must not use “under 80,000 lb” as a universal proof of fit.

### D05–D06 — Frozen freight
Expected reasoning: a non-temperature-controlled dry van cannot satisfy a stated continuous -10°F refrigerated requirement. Reject for this equipment; do not invent insulation/door-closing workarounds.

### D07–D08 — 104-inch width
Expected reasoning: the learner should identify a specialized/verification condition. Do not accept either extreme claim that the load is automatically illegal or automatically permit-ready. Require route, jurisdiction, permit-process and equipment/driver-readiness verification.

### D09 — Qualification mismatch — CRITICAL
The fictional file states that the load requires H or X and that the assigned driver has neither. Expected action: do not dispatch that driver on that load.

After two incorrect attempts, the runtime flags instructor review. Instructor remediation should require the learner to explain why driver qualification cannot be substituted with scheduling convenience or different trailer selection.

### D10 — Endorsement distinction
Require accurate distinction among H/N/X concepts at the level taught in Module 03. Do not let the learner treat endorsement letters as interchangeable.

### D11 — Gross-versus-axle trap — CRITICAL
The fictional load shows projected GCW of 79,400 lb but a drive tandem of 35,000 lb. Expected reasoning: being below an overall gross figure does not establish compliance with separate axle/tandem limits.

After two incorrect attempts, require instructor review focused on why gross and axle checks are separate.

### D12 — Separate checks
Expected reasoning: the learner must explicitly preserve separate gross and axle/tandem controls.

### D13 — Missing information
Expected reasoning: identify material unknowns rather than treating “53-foot van, 44,500 lb” as a complete load file.

### D14 — Classification/action
Expected reasoning: incomplete material facts require verification before a confident fit decision.

### D15 — Verification sequence
Expected sequence:
**STOP → IDENTIFY → VERIFY → DO NOT ASSUME.**

The Academy may later expand this into a fuller trace/document/handoff workflow, but the runtime answer must remain synchronized with the exact current content implementation.

## Remediation Protocol

For ordinary errors:
1. do not immediately reveal only the answer letter;
2. identify which fact the learner ignored or assumed;
3. return the learner to the relevant artifact;
4. require a second decision;
5. record remediation use.

For critical errors:
1. identify the unsafe/legally material reasoning failure;
2. require the learner to state the rule in their own words;
3. present a short transfer example with different numbers/details;
4. verify that the learner can apply the principle rather than repeat the original answer;
5. document instructor disposition.

## Transfer Questions

Use these only after the learner has completed the corresponding stage:

- If a broker says “it always fits a 53-foot van,” what unit-specific facts might still need verification?
- If a load is under the overall gross limit, what other weight question remains?
- If freight exceeds a standard width figure, what information would you need before deciding whether the carrier can move it?
- If the trailer is suitable but the driver lacks a stated required qualification, which fact controls the dispatch decision?
- What should a dispatcher write down when the answer is “not enough information yet”?

## Instructor Evidence Standard

A completed simulation record should make it possible to distinguish:
- independent first-attempt mastery;
- mastery achieved after remediation;
- unresolved critical misunderstanding;
- incomplete simulation progress.

Do not convert a remediated performance into a false first-attempt score.

## Release Controls Still Deferred

Before student release, the assembled Academy still requires:
- current-source/legal wording review;
- manual accessibility QA;
- browser/device QA;
- LMS/student-account integration;
- durable competency record integration;
- editorial/branding QA;
- production deployment verification.

Passing the runtime/build gate is not the same as `PUBLICATION_READY`.