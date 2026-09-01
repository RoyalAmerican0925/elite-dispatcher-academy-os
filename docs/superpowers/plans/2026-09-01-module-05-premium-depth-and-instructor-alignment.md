# Module 05 Premium Depth & Instructor Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit, repair and synchronize Module 05 into premium occupational-training depth and build its complete instructor product layer before SIM-005 design.

**Architecture:** Preserve the existing seven-part Module 05 learning chain where it already meets standard. Perform a gap-first audit, repair instruction before assessment, synchronize tools and assessments to the repaired competency map, then build the full instructor guide and run an independent alignment gate. SIM-005 remains locked until this chain passes.

**Tech Stack:** Markdown curriculum/control assets in GitHub; no runtime software in this plan.

**Spec:** `docs/superpowers/specs/2026-09-01-module-05-premium-depth-and-instructor-alignment-design.md`

## Global Constraints

- Work on `academy-master-architecture` only.
- Do not merge to `main`.
- No filler or arbitrary page/question/activity quotas.
- Preserve the Module 05 / Module 06 boundary.
- Instruction precedes assessment; simulation does not repair missing curriculum.
- Do not assign `PUBLICATION_READY`.

---

### Task 1: Inventory and premium gap audit

**Files:**
- Read: `02-CURRICULUM/Module-05/Student-Manual-Part-01.md` through `Student-Manual-Part-07.md`
- Read: all `04-STUDENT-TOOLS/Module-05-Tools/` assets
- Read: Module 05 knowledge check, exam/key, practical/scoring, instructor answer material, source controls and master branch control
- Create: `10-PRODUCTION/Module-05-Premium-Depth-Gap-Audit-2026-09-01.md`

- [ ] Map every taught competency to manual/tool/practice/assessment evidence.
- [ ] Apply Google, Employment, Buyer and continuity tests.
- [ ] Identify factual/currentness issues, shallow material, missing workflows, duplicated Module 06 material and assessment-without-instruction defects.
- [ ] Record KEEP / DEEPEN / REPAIR / ADD / REMOVE-or-ROUTE decisions with exact target files.
- [ ] Commit the audit separately.

### Task 2: Repair/deepen the student manual

**Files:**
- Modify only the Module 05 manual parts identified by Task 1.

- [ ] Strengthen operational workflows and judgment before adding assessment demands.
- [ ] Preserve FIND → SCREEN → FLAG → FIRST-PASS VERIFY → COMPARE → COMMUNICATE → REVIEW WRITTEN TERMS → ROUTE FOR DEEPER VERIFICATION.
- [ ] Add realistic examples, evidence limits, consequences, professional language and handoff logic where the audit requires them.
- [ ] Recheck cross-module boundaries.
- [ ] Commit the manual repair as a coherent change.

### Task 3: Synchronize student tools

**Files:**
- Modify/create only Module 05 tools justified by the audit.

- [ ] Ensure every tool supports a taught workflow and observable employment task.
- [ ] Remove redundant fields/steps and add missing evidence/decision fields where required.
- [ ] Verify tools distinguish KNOWN / UNKNOWN / VERIFY and STOP / VERIFY / ESCALATE where appropriate.
- [ ] Verify the Module 06 handoff is explicit rather than duplicated.
- [ ] Commit tool synchronization separately.

### Task 4: Synchronize knowledge check, exam and practical

**Files:**
- Modify Module 05 knowledge check, exam/key, practical and scoring controls as justified by repaired instruction.

- [ ] Confirm every graded concept is explicitly taught and practiced.
- [ ] Preserve valid existing C-013 entity-versus-contact and rate-confirmation discrepancy work.
- [ ] Remove trivia-only or ambiguous grading where found.
- [ ] Verify passing thresholds and critical controls are internally consistent.
- [ ] Commit assessment synchronization separately.

### Task 5: Build full Module 05 Instructor Guide

**Files:**
- Create: `03-ASSESSMENTS/Instructor-Guides/Module-05-Instructor-Guide.md`

- [ ] Conform to `00-ACADEMY-MASTER/INSTRUCTOR-GUIDE-PRODUCT-STANDARD.md`.
- [ ] Include employment outcome and competency map.
- [ ] Include instructor prep and prerequisite/transfer controls.
- [ ] Include lesson-by-lesson teaching notes.
- [ ] Include professional-language coaching and tool/activity facilitation.
- [ ] Include assessment administration and diagnostic remediation.
- [ ] Include current-source controls and Module 06 boundary notes.
- [ ] Include a SIM-005 alignment contract without designing SIM-005 runtime.
- [ ] Include module closeout criteria.
- [ ] Commit the guide separately.

### Task 6: Independent premium/instructor alignment QA

**Files:**
- Create: `10-PRODUCTION/Module-05-Premium-Instructor-Alignment-QA-2026-09-01.md`
- Update as supported: `00-ACADEMY-MASTER/MODULE-05-MASTER-BRANCH.md`, dashboard/completion matrix.

- [ ] Re-read the actual repaired manual, tools, assessments and instructor guide from GitHub.
- [ ] Verify competency synchronization end to end.
- [ ] Verify no Module 06 production material was improperly pulled forward.
- [ ] Apply Google, Employment and Buyer tests again to the finished chain.
- [ ] Record remaining current-source/release-layer limitations truthfully.
- [ ] Unlock SIM-005 design only if the evidence supports the gate.
- [ ] Do not mark Module 05 `PUBLICATION_READY`.
