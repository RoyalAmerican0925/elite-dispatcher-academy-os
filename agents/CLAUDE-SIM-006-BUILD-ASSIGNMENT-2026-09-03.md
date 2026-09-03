# CLAUDE BUILD ASSIGNMENT — SIM-006

**Simulation:** SIM-006 — Broker Verification & Fraud Prevention Desk  
**Date:** 2026-09-03

Read current premium Module 06 controls on branch `academy-master-architecture` before coding. The `agents/` handoff is on `main`; do not overwrite newer architecture content with stale main copies.

## Required student memory model
**VERIFY THE ENTITY → VERIFY THE CONTACT → VERIFY THE LOAD → VERIFY THE PAYMENT PATH**

## Required desk workflow
**RECEIVE → ISOLATE CLAIMS → VERIFY ENTITY → AUTHENTICATE CONTACT → CROSS-CHECK LOAD/DOCUMENTS → VERIFY PAYMENT PATH → RECORD EVIDENCE → CLASSIFY RISK → PROCEED / VERIFY / HOLD / ESCALATE / DECLINE**

## Read first
- `00-PROJECT-CONTROL/MODULE-06-G-013-INDEPENDENT-RESEARCH-2026-09-02.md`
- `10-PRODUCTION/Module-06-G-013-Repository-Reconciliation-2026-09-02.md`
- all five Module 06 student manuals
- `03-ASSESSMENTS/Module-Exams/Module-06-Exam.md`
- `03-ASSESSMENTS/Scenario-Labs/Module-06-Scenario-Lab.md`
- `03-ASSESSMENTS/Practical-Assessments/Module-06-Practical.md`
- `03-ASSESSMENTS/Practical-Assessments/Module-06-Instructor-Scoring-Guide.md`
- `03-ASSESSMENTS/Instructor-Guides/Module-06-Instructor-Guide.md`
- all seven files in `04-STUDENT-TOOLS/Module-06-Tools/`
- `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`

## Build requirement
Build a progressive dispatcher verification desk, not a quiz. Use fictional data only.

Required events/competencies:
1. apparently plausible broker/load offer;
2. isolate claims by verification layer;
3. authoritative entity/authority evidence;
4. entity-versus-contact separation;
5. contact/domain inconsistency;
6. trusted callback choice/result;
7. load/document cross-check and material mismatch;
8. correct interpretation of financial-security/current-status evidence;
9. factor/credit signal that is not fraud proof;
10. duplicate/re-brokering ambiguity that requires verification rather than accusation;
11. changed payment/remittance instruction;
12. urgency/social-pressure attempt;
13. later evidence that materially changes case state;
14. evidence preservation;
15. final risk classification and escalation handoff.

Required statuses should align to Module 06: CLEAR, CLEAR WITH DOCUMENTED QUALIFICATION, VERIFY, HOLD, ESCALATE, DO NOT USE, DO NOT BOOK.

## Critical-failure source of truth
1. acts on unverified/contradicted payment redirection;
2. treats legitimate/active entity as proof an unverified contact is authorized;
3. proceeds after trusted callback confirms impersonation/contact contradiction;
4. knowingly books in supplied case where required broker authority is verified inactive;
5. declares fraud/double brokering established solely from inconclusive duplicate/similar postings or indicators;
6. bypasses a material unresolved identity/document/payment mismatch rather than HOLD/VERIFY/ESCALATE.

Do not invent hidden contradictory critical failures.

## State/evidence requirements
Preserve separately:
- first-attempt decision and reason;
- first-attempt correctness;
- critical-failure state;
- evidence collected/source classification;
- remediation assigned/completed;
- corrected/final decision;
- final mastery;
- competency-family results;
- overall competency status;
- instructor-review state.

A remediated learner's first failure must remain visible in the record.

## Implementation/test requirements
Follow sound conventions from SIM-001–SIM-004. Separate scenario/content from decision/scoring logic where practical. Include runtime, README, instructor/QA notes and automated tests.

Tests must cover stage progression, entity/contact separation, trusted callback, document mismatch, payment redirection, all six critical-failure families, duplicate-posting restraint, factor-signal interpretation, progressive evidence update, remediation persistence, first-attempt preservation, final competency calculation and completion state.

Run fresh tests. Report exact command, pass/fail count and tested commit SHA. Do not cite historical CI as fresh evidence.

## Return handoff
Create an `agents/` handoff for ChatGPT listing files, branch, commits, stage/decision count, test command/results, critical-failure locations, remediation/competency behavior, known limitations and release-QA deferrals.

Target only if fresh evidence supports it:
**SIM-006 — BUILD COMPLETE — RELEASE QA DEFERRED**

Never claim `PUBLICATION_READY`.