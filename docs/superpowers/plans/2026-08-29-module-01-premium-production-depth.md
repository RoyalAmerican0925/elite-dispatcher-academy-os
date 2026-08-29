# Module 01 Premium Production-Depth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Module 01 into premium occupational training and synchronize its manual, tools, assessments, instructor materials, and SIM-001 without filler or duplication.

**Architecture:** Preserve verified content, repair contradictions, and add only occupationally useful depth. Build the manual around industry relationships, four load flows, dispatch-desk information, document recognition, realistic contrasting freight files, and the STOP–IDENTIFY–TRACE–VERIFY–HAND OFF framework; then align every dependent learning component to that competency model.

**Tech Stack:** Markdown curriculum and assessment files; existing vanilla HTML/CSS/JavaScript SIM-001 runtime; Node 22 runtime tests; GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-08-29-module-01-premium-production-depth-design.md`

## Global Constraints

- No artificial maximum page, word, lesson, scenario, tool, or simulation-decision count.
- No padding, generic motivational prose, duplicated definitions, or content added merely for length.
- Every addition must improve occupational knowledge, judgment, execution, verification, error prevention, assessment readiness, or later-module readiness.
- Preserve verified current content unless correction, synchronization, or instructional restructuring is necessary.
- Do not cannibalize later-module competencies.
- Regulatory/date-sensitive claims require authoritative source control.
- Fictional training artifacts must not be represented as real proprietary documents.
- Customer-facing content must contain no AI-production chatter, TODO/TBD placeholders, or unsupported outcome claims.
- SIM-001 release status remains `BUILD COMPLETE — RELEASE QA DEFERRED` until the premium-depth alignment audit is complete; final assembled-course release QA remains separate.

---

### Task 1: Lock the Module 01 competency and content map

**Files:**
- Read: `02-CURRICULUM/Module-01/Student-Manual-Part-01.md`
- Read: `02-CURRICULUM/Module-01/Student-Manual-Part-02.md`
- Read: `02-CURRICULUM/Module-01/Student-Manual-Part-03.md`
- Read: all Module 01 assessment, instructor-guide, student-tool, source-register, and SIM-001 files.
- Create: `10-PRODUCTION/Module-01-Premium-Depth-Competency-Map-2026-08-29.md`

**Produces:** A traceability matrix mapping every required competency to manual instruction, embedded practice, tool, formal assessment, practical, and simulation evidence.

- [ ] Inventory every live Module 01 file and record path, purpose, and current status.
- [ ] Map existing content against the design spec's competency outcome.
- [ ] Record confirmed defects, including the contradictory shipper-ownership glossary definition and stale/unverified cross-module promises.
- [ ] Mark each requirement `KEEP`, `CORRECT`, `EXPAND`, `CREATE`, or `VERIFY`.
- [ ] Verify that no planned addition duplicates a later module's advanced competency.
- [ ] Commit the competency map.

### Task 2: Rebuild the Student Manual instructional core

**Files:**
- Modify: `02-CURRICULUM/Module-01/Student-Manual-Part-01.md`
- Modify: `02-CURRICULUM/Module-01/Student-Manual-Part-02.md`
- Modify: `02-CURRICULUM/Module-01/Student-Manual-Part-03.md`
- Create additional `Student-Manual-Part-XX.md` files only when needed for readable instructional structure.

**Produces:** A coherent premium manual that teaches the complete Module 01 competency model without filler.

- [ ] Correct shipper/consignor/ownership language consistently across manual and glossary.
- [ ] Strengthen the industry ecosystem using functional relationships rather than isolated definitions.
- [ ] Teach the four flows separately: physical freight, information/communication, documents, and money/payment.
- [ ] Add the carrier-side dispatch-desk information model: truck/driver context, origin/destination, timing, equipment requirement, commodity, weight/dimension fields, commercial field recognition, contacts, status, document status, and unknowns.
- [ ] Teach foundational operational vocabulary in context: pickup/delivery, appointment/FCFS, live load/unload, drop-and-hook, loaded miles/deadhead recognition, lane, capacity, BOL, rate confirmation, POD, invoice, and only necessary accessorial recognition.
- [ ] Teach basic documents by the operational question each helps answer.
- [ ] Add contrasting fictional freight files: brokered interstate, direct customer/carrier, within-state geography with unresolved commerce classification, incomplete file, and role-confusion case.
- [ ] Embed short application tasks after relevant instruction: classification, sequencing, four-flow tracing, known/unknown/verify, document selection, next-action, error correction, and missing-information spotting.
- [ ] Teach `STOP → IDENTIFY → TRACE → VERIFY → HAND OFF` and demonstrate it on at least two different freight files.
- [ ] Verify every “covered later” statement against the live repository before retaining it.
- [ ] Run a manual contamination/repetition scan and remove prose that does not advance a competency.
- [ ] Commit the rebuilt manual as one coherent curriculum change.

### Task 3: Build authoritative source and date controls

**Files:**
- Read/modify existing Module 01 regulatory/source records if present.
- Create a Module 01 source/date register if no adequate current register exists.

**Produces:** Traceable support for legal, registration, and date-sensitive statements.

- [ ] Verify DOT/FMCSA relationship from official DOT/FMCSA sources.
- [ ] Verify current Motus/registration and operating-authority statements from current FMCSA sources.
- [ ] Verify USDOT-versus-operating-authority teaching and avoid treating either identifier as proof of every operational fact.
- [ ] Verify interstate/intrastate teaching using authoritative legal/regulatory sources appropriate to the claim.
- [ ] Verify broker, motor carrier, and freight-forwarder definitions from current federal authority.
- [ ] Record source URL/title, authority, access/verification date, claim supported, and whether the claim is date-sensitive.
- [ ] Reconcile any manual statement that authoritative sources do not support as written.
- [ ] Commit source controls and any resulting factual corrections.

### Task 4: Upgrade reusable Module 01 student tools

**Files:**
- Read/modify: `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Role-Map-Worksheet.md`
- Read/modify: `04-STUDENT-TOOLS/Module-01-Tools/Module-01-Freight-Lifecycle-Flow-Worksheet.md`
- Create only missing tools required by the competency map.

**Produces:** Reusable job aids, not lesson-summary worksheets.

- [ ] Convert the role map into a functional relationship map that distinguishes who tenders, arranges, transports, coordinates, receives, documents, and pays/finances.
- [ ] Upgrade the lifecycle tool to trace all four flows.
- [ ] Create a beginner Dispatch File Intake/Information Map if the existing tools cannot serve that function without becoming confusing.
- [ ] Create a `STOP–IDENTIFY–TRACE–VERIFY–HAND OFF` decision aid if it does not already exist in usable form.
- [ ] Ensure each tool can be used with a new fictional freight file without rereading the lesson.
- [ ] Remove duplicate quick-reference material that adds no operational value beyond the glossary.
- [ ] Commit student-tool upgrades.

### Task 5: Align the knowledge check and graded exam

**Files:**
- Read/modify the live Module 01 knowledge-check file(s).
- Read/modify: `03-ASSESSMENTS/Module-Exams/Module-01-Exam.md`
- Read/modify the Module 01 exam answer key.
- Read/modify Module 01 instructor answer material.

**Produces:** Assessments that measure recognition plus reasoning and are fully taught by the manual.

- [ ] Build an assessment blueprint from the competency map before changing item counts.
- [ ] Preserve good existing items that still measure required competencies.
- [ ] Add scenario-based evidence for four-flow tracing, document recognition, known/unknown/verify reasoning, lifecycle sequencing, and dispatcher-scope recognition.
- [ ] Include plausible beginner errors rather than trivia distractors.
- [ ] Ensure no item requires advanced Module 02+ knowledge.
- [ ] Correct every answer key and rationale to match the rebuilt manual.
- [ ] Recalculate thresholds only if item counts change; document the arithmetic.
- [ ] Verify each graded item maps to taught content and a named competency.
- [ ] Commit assessment alignment.

### Task 6: Upgrade the Module 01 practical assessment

**Files:**
- Modify: `03-ASSESSMENTS/Practical-Assessments/Module-01-Practical.md`
- Modify the applicable Module 01 practical scoring/instructor guide.

**Produces:** A practical freight-file exercise that requires integrated foundational judgment rather than role-label recall.

- [ ] Preserve the useful Blue River Foods foundation where it still serves the new competency model.
- [ ] Require the student to trace physical, information, document, and payment flows.
- [ ] Require known/unknown/verify classification for selected facts.
- [ ] Require document-purpose recognition and next-action sequencing.
- [ ] Include at least one incomplete-information condition where guessing is explicitly wrong.
- [ ] Require a short written explanation of where the dispatcher fits and where the student must hand off/escalate instead of overreaching.
- [ ] Synchronize scoring dimensions, instructor expectations, pass threshold, and any critical-failure logic with what Module 01 actually teaches.
- [ ] Verify the practical is meaningfully different from both the exam and SIM-001.
- [ ] Commit practical/instructor alignment.

### Task 7: Audit and repair SIM-001 against the rebuilt curriculum

**Files:**
- Read/modify as necessary under `05-SIMULATIONS-AND-GAMES/Module-01/` and its `runtime/` directory.
- Modify: `.github/workflows/sim001-runtime-tests.yml` only if test coverage requires it.
- Modify/create the SIM-001 QA record as appropriate while preserving release-deferred status.

**Produces:** A simulation that demonstrates the rebuilt Module 01 competencies under progressive reveal.

- [ ] Map every SIM-001 stage and decision to the new competency map.
- [ ] Preserve working decisions that already provide occupational value.
- [ ] Add or repair decisions only where required for four-flow tracing, document recognition, missing-information discipline, verification, or realistic next action.
- [ ] Ensure remediation teaches the mental model rather than revealing an answer without reasoning.
- [ ] Ensure first-attempt evidence remains immutable and persistence behavior remains compatible.
- [ ] Write/adjust failing runtime tests before behavior changes for each repaired runtime rule.
- [ ] Run the complete SIM-001 runtime test suite locally or through the available CI path and require zero failures.
- [ ] Confirm SIM-002/SIM-003 isolation: no unrelated simulation files changed.
- [ ] Keep status `BUILD COMPLETE — RELEASE QA DEFERRED`; do not claim publication readiness.
- [ ] Commit simulation alignment.

### Task 8: Run the premium-depth commercial gate

**Files:**
- Create: `10-PRODUCTION/Module-01-Premium-Depth-Final-QA-2026-08-29.md`
- Update earlier Module 01 QA/status records only where necessary to prevent contradictory status language.

**Produces:** Evidence-based final determination of whether Module 01 meets the new paid-training standard.

- [ ] Re-read the complete student manual in order as a novice learner.
- [ ] Trace every competency to instruction, practice, tool, assessment, practical, and/or simulation evidence as appropriate.
- [ ] Run the Google Test: identify any section whose occupational value is still substantially replaceable by a few ordinary searches; either deepen it with application or remove it.
- [ ] Run the Employment Test: state exactly what a successful student can now do.
- [ ] Run the Buyer Test: document why the module provides organized occupational value beyond compiled definitions.
- [ ] Verify no filler, needless repetition, stale cross-module promises, unsupported categorical statements, or contamination remains.
- [ ] Verify all fictional artifacts are clearly instructional and all date-sensitive claims are controlled.
- [ ] Record file paths and current SHAs for the final inspected package.
- [ ] Record one verdict: `PASS — PREMIUM INSTRUCTIONAL DEPTH GATE` or `REVISE — PREMIUM DEPTH GAPS REMAIN`.
- [ ] Explicitly state that a PASS is not `PUBLICATION_READY`; assembled-course release QA remains deferred.
- [ ] Commit the final QA record.

## Self-review

- Spec coverage: Tasks 1–8 cover competency mapping, manual depth, source control, tools, formal assessments, practical, SIM-001, cross-module synchronization, contamination control, and final premium-depth QA.
- Placeholder scan: No TODO/TBD or unspecified implementation placeholders are used as execution instructions.
- Boundary check: Advanced brokerage law, equipment-fit analysis, load sourcing, profitability math, negotiation, HOS, exception handling, and billing remain in later modules.
- Value check: No task uses page count or lesson count as a success metric.
