# Module 05 Premium Reconciliation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close Module 05's premium-depth and platform-currentness build gate while preserving valid existing curriculum and SIM-005 work.

**Architecture:** Audit first, then repair only evidence-backed gaps. Maintain one competency chain across curriculum, tools, assessments, practical, instructor controls and SIM-005; use TDD for runtime changes and package-level automated gates for alignment.

**Tech Stack:** Markdown curriculum/assets, browser JavaScript SIM runtime, Node built-in test runner, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-05-module-05-premium-reconciliation-design.md`

## Global Constraints
- Work only on `module-05-premium-reconciliation` until verified integration.
- Do not merge to `main`.
- Preserve strong existing assets; no cosmetic rewrites.
- Exactly six existing critical-failure families remain controlling unless repository evidence proves a correction is needed.
- Entity verification and contact authentication remain distinct.
- Duplicate postings are indicators, not proof of fraud.
- Platform-specific behavior must not be presented as universal.
- Final maximum build status is `BUILD COMPLETE — RELEASE QA DEFERRED`.

---

### Task 1: Repository and competency audit
**Files:**
- Create: `10-PRODUCTION/Module-05-Premium-Repository-Audit-2026-09-05.md`
- Read: M05 master, manuals, nine tools, KC/exam/practical/keys, instructor guide, five SIM docs, runtime/tests.

- [ ] Inventory every M05 production asset and map it to the sourcing workflow.
- [ ] Identify duplicated tools versus distinct occupational evidence.
- [ ] Verify six critical families across practical/instructor/SIM controls.
- [ ] Record KEEP / UPGRADE / ARCHIVE / DELETE findings with evidence.
- [ ] Commit the audit.

### Task 2: Current-source and platform-currentness control
**Files:**
- Create: `10-PRODUCTION/Module-05-Current-Source-Recheck-2026-09-05.md`
- Modify only files containing stale procedural/platform claims.

- [ ] Verify FMCSA broker/authority/financial-responsibility concepts from current authoritative sources.
- [ ] Verify any named load-board platform behavior from current official documentation where used instructionally.
- [ ] Replace universal platform statements with platform-specific/current wording where required.
- [ ] Commit source/currentness control.

### Task 3: Selective curriculum/tool/assessment repair
**Files:** existing M05 manuals/tools/assessments/instructor guide as identified by Task 1.

- [ ] Preserve content that passes Google/Employment/Buyer tests.
- [ ] Repair only proven competency gaps.
- [ ] Synchronize FOUND vs VERIFIED AVAILABLE, entity vs contact, fraud-indicator restraint, rate-confirmation discrepancy, authority boundary, and handoff evidence.
- [ ] Ensure practical and scoring preserve all six critical families.
- [ ] Commit each coherent repair layer.

### Task 4: SIM-005 independent premium audit and TDD repair
**Files:**
- Read/modify: `05-SIMULATIONS-AND-GAMES/Module-05/runtime/**`
- Test: existing runtime tests plus new premium/alignment tests.

- [ ] Write failing premium tests for any verified runtime gap before production changes.
- [ ] Run and confirm RED.
- [ ] Implement minimum repair.
- [ ] Run GREEN and regression suite.
- [ ] Verify 18-decision/14-competency claim against actual code; correct master truth if counts differ.
- [ ] Verify first-attempt/remediation/critical evidence and completion record.

### Task 5: Package alignment gate
**Files:**
- Create or extend runtime alignment tests.
- Update package test command and CI path if required.

- [ ] Test presence/alignment of manuals/tools/assessments/instructor/SIM package.
- [ ] Test six critical families are represented without a seventh invented family.
- [ ] Test platform-specific/currentness boundary language where practical.
- [ ] Run full test command to zero failures.

### Task 6: Permanent QA and reconciliation
**Files:**
- Create: `10-PRODUCTION/Module-05-Premium-Content-QA-2026-09-05.md`
- Modify: `00-ACADEMY-MASTER/MODULE-05-MASTER-BRANCH.md`
- Modify: Architecture Completion Matrix and Completion/Deadline Control only after pass.

- [ ] Independently inspect actual committed branch files.
- [ ] Apply Google / Employment / Buyer tests.
- [ ] Record source/currentness findings and runtime verification evidence.
- [ ] Set `BUILD COMPLETE — RELEASE QA DEFERRED` only if every content/runtime gate passes.
- [ ] Do not recompute Academy percentages from M05 alone.
- [ ] Open PR to `academy-master-architecture`, verify PR CI, merge only there, then verify target-branch CI.
