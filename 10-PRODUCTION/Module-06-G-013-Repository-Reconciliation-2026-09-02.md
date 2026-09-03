# Module 06 — G-013 Repository Reconciliation

**Module:** 06 — Broker Verification & Fraud Prevention  
**Date:** 2026-09-02  
**Branch:** `academy-master-architecture`  
**Status:** RECONCILIATION COMPLETE — TARGETED PRODUCTION BUILD REQUIRED

## Purpose
Reconcile the completed G-013 independent research against the actual Module 06 repository package before production unlock. This document distinguishes strong existing instruction from missing product layers and prevents unnecessary rewriting.

## Evidence inspected
- `00-ACADEMY-MASTER/MODULE-06-MASTER-BRANCH.md`
- `00-PROJECT-CONTROL/MODULE-06-G-013-INDEPENDENT-RESEARCH-2026-09-02.md`
- current Module 06 curriculum directory inventory
- `02-CURRICULUM/Module-06/Student-Manual-Part-01.md`
- `02-CURRICULUM/Module-06/Student-Manual-Part-02.md`
- `03-ASSESSMENTS/Module-Exams/Module-06-Exam.md`
- `03-ASSESSMENTS/Scenario-Labs/Module-06-Scenario-Lab.md`
- existing Academy assessment/product architecture and previously verified Module 06 inventory controls.

## 1. Curriculum inventory reconciliation
The live Module 06 curriculum contains five files:
1. `Student-Manual-Part-01.md`
2. `Student-Manual-Part-01B.md`
3. `Student-Manual-Part-02.md`
4. `Student-Manual-Part-03.md`
5. `Student-Manual-Part-04.md`

The master control's five-file inventory is therefore consistent with the live directory.

## 2. Core instructional model — RETAIN
The existing student manual already teaches the correct conceptual spine:

**VERIFY THE ENTITY → VERIFY THE CONTACT → VERIFY THE LOAD → VERIFY THE PAYMENT PATH**

It also teaches a professional uncertainty discipline rather than a simplistic scam checklist. The current manual explicitly distinguishes proof of fraud from sufficient verification and directs the learner to observe, cross-check, verify, document, classify risk, and proceed/hold/escalate/decline.

This is consistent with G-013 and should not be replaced.

### Production enhancement
The instructor/practical/simulation layers should operationalize the fuller desk sequence:

**RECEIVE → ISOLATE CLAIMS → VERIFY ENTITY → AUTHENTICATE CONTACT → CROSS-CHECK LOAD/DOCUMENTS → VERIFY PAYMENT PATH → RECORD EVIDENCE → CLASSIFY RISK → PROCEED / VERIFY / HOLD / ESCALATE / DECLINE**

The longer sequence is an execution model, not a contradiction of the four-layer student memory model.

## 3. Strong content already present — DO NOT REWRITE GRATUITOUSLY
Current manuals already contain substantial premium-value concepts:
- entity verification versus contact authentication;
- current FMCSA system distinctions;
- active authority versus ambiguous/pending status;
- BMC-84/BMC-85 financial-responsibility concepts;
- separate 30-day, 7-business-day and 7-calendar-day regulatory contexts;
- trusted callback/channel verification;
- email/domain mismatch and typosquatting awareness;
- BEC/account-takeover/thread-hijacking concepts;
- document cross-checking;
- duplicate-posting restraint;
- co-brokering versus unauthorized re-brokering distinction;
- factoring/credit signals as risk evidence rather than proof of fraud;
- payment-change verification;
- non-accusatory professional language;
- CLEAR / CLEAR WITH DOCUMENTED QUALIFICATION / VERIFY / HOLD / ESCALATE / DO NOT USE / DO NOT BOOK classifications;
- 12 scenario patterns covering clean verification, contact mismatch, payment change, document mismatch, duplicate postings, factor decline, inactive authority, pending financial-security event, compromised contact, urgency and cumulative inconsistencies.

These areas pass the basic Google Test because the package teaches distinctions, decision language and verification behavior rather than definitions alone.

## 4. Assessment reconciliation
### Exam
The current exam contains 28 items with a controlled passing standard of **26/28 (90%) plus Critical Items 25 and 27 correct**.

Critical Item 25 protects against unverified payment redirection.

Critical Item 27 protects against unsupported public fraud conclusions based on inconclusive indicators.

The exam also samples:
- entity/contact separation;
- current FMCSA systems;
- $75,000 BMC-84/BMC-85 baseline;
- separate timing concepts;
- DNU policy classification;
- co-brokering/double-brokering distinction;
- payment-change verification;
- factor decline interpretation;
- document cross-checking;
- risk classification;
- inactive authority;
- cumulative inconsistencies.

**Verdict:** retain exam architecture. Later QA must synchronize any new practical critical-failure controls without arbitrarily changing the existing exam threshold.

### Scenario Lab
The 12-scenario lab is useful guided practice and explicitly states that it is not the secure graded practical. That separation is correct.

**Verdict:** retain as practice. Do not relabel it as the Module 06 graded practical.

## 5. Confirmed product gaps
G-013 confirms that the missing layers are substantive commercial-product gaps:

### A. Dedicated operational student tools — MISSING
Module 06 needs a distinct tool set that converts verification into documented desk work. The tools must not simply duplicate Module 05's first-pass sourcing forms.

Approved production tool architecture:
1. **Broker Verification Evidence Record** — entity identifiers, authoritative source, date/time, status/result, evidence note.
2. **Entity vs Contact Authentication Worksheet** — separately records what proves the company and what authenticates the person/channel.
3. **Trusted Callback Verification Record** — source of trusted contact, callback result, person/role, unresolved discrepancy.
4. **Load & Document Cross-Check Sheet** — names, MC/USDOT where applicable, load identifiers, facilities, rate/document facts and mismatches.
5. **Payment-Instruction Change Verification Record** — old instruction, proposed change, trusted-channel verification, authority/result, HOLD control.
6. **Risk Classification & Decision Record** — CLEAR / QUALIFIED / VERIFY / HOLD / ESCALATE / DNU / DNB with evidence and next action.
7. **Verification Evidence & Escalation Packet** — compact handoff record for management/compliance/cybersecurity/carrier ownership.

A separate generic red-flag checklist is not required if the evidence/decision tools capture indicators and required action; avoiding redundant paperwork improves occupational usability.

### B. Integrated graded practical — MISSING
The practical must be a desk exercise, not another red-flag quiz.

Approved architecture: **Broker Verification Case Desk**.

Learner receives a fictional broker/load/contact/document/payment evidence packet and must:
1. isolate claims;
2. verify entity facts;
3. authenticate the contact independently;
4. cross-check load/document facts;
5. evaluate financial-security/current-status evidence correctly;
6. interpret factor/credit information without converting it into a fraud finding;
7. respond to a changed payment instruction;
8. preserve evidence;
9. assign an operational status;
10. write a professional next-action/escalation note.

Required practical critical-failure families:
1. acts on an unverified payment redirection;
2. treats a real/active broker entity as proof an unverified contact is authorized;
3. proceeds through a confirmed impersonation/contact contradiction;
4. knowingly books through a supplied scenario where required broker authority is verified inactive;
5. declares fraud/double brokering as established solely from ambiguous duplicate/similar postings or other inconclusive indicators;
6. bypasses a material unresolved identity/document/payment mismatch rather than HOLD/VERIFY/ESCALATE.

Exact scoring points must be designed with the Academy scoring/remediation policy and synchronized across practical, instructor guide and SIM-006.

### C. Full Instructor Guide — REQUIRES BUILD/UPGRADE
The instructor layer must teach how to facilitate evidence-based verification, distinguish law/system facts from carrier policy and industry signals, diagnose reasoning errors, administer the practical, control critical failures, remediate, facilitate SIM-006 and close competency.

An answer key cannot substitute for this product.

### D. SIM-006 — MISSING
SIM-006 must implement the same evidence-based workflow with progressive events and changing information. It must not be a disguised 12-question lab.

## 6. Boundary reconciliation
### Module 05 boundary
Module 05 owns sourcing, screening and first-pass verification flags. Module 06 owns deeper identity/contact/load/document/payment-path verification and evidence-based risk classification.

### Module 07 boundary
Do not turn Module 06 into profitability math. Credit/factor signals are interpreted only as risk/policy evidence here.

### Module 09 boundary
Module 06 may cross-check a rate confirmation/document for identity and mismatch risk. Module 09 owns deeper booking/rate-confirmation workflow.

### Module 14 boundary
Module 06 protects changed payment/remittance instructions from fraud/impersonation. Module 14 owns deeper billing/factoring/closeout operations.

## 7. Premium-depth verdict
### Google Test — PARTIAL PASS
Existing curriculum and scenario reasoning exceed basic searchable definitions. The complete paid product still fails until reusable operational records, integrated practical and simulation exist.

### Employment Test — PARTIAL PASS
A learner can explain and classify many verification events, but the current package does not yet require a complete documented verification desk workflow from evidence intake through handoff.

### Buyer-Value Test — NOT YET PASS
The missing tools, integrated graded practical, full instructor facilitation layer and SIM-006 prevent the package from yet reaching the Academy's commercial completion standard.

## 8. Production unlock decision
**TARGETED PRODUCTION BUILD UNLOCKED.**

G-013 and repository reconciliation now provide enough evidence to build the missing product layers without speculative redesign.

Authorized next production sequence:
1. build the seven Module 06 operational tools;
2. build the integrated graded practical and synchronized scoring;
3. build/upgrade the full Instructor Guide;
4. perform assessment alignment across KC/exam/scenario/practical;
5. lock SIM-006 architecture and send heavy build to Claude;
6. inspect/test/repair SIM-006;
7. run premium completion QA.

This reconciliation does **not** mark Module 06 premium complete and does **not** authorize `PUBLICATION_READY`.