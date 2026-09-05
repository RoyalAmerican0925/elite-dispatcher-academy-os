# Module 06 Master Branch — Broker Verification & Fraud Prevention

**Control status:** G-013 RECONCILIATION COMPLETE / TARGETED PRODUCTION LAYERS BUILT / SIM-006 + FINAL PREMIUM QA OPEN

## Verified scope
Module 06 is **Broker Verification & Fraud Prevention**.

## Employment outcome
Student can receive a suspicious or incomplete broker transaction, isolate claims, verify the entity, independently authenticate the contact, cross-check load/documents, protect the payment path, preserve evidence, classify risk, and issue a defensible proceed/verify/hold/escalate/decline decision without unsupported accusations.

## Core models
Student memory model:

**VERIFY THE ENTITY → VERIFY THE CONTACT → VERIFY THE LOAD → VERIFY THE PAYMENT PATH**

Operational desk model:

**RECEIVE → ISOLATE CLAIMS → VERIFY ENTITY → AUTHENTICATE CONTACT → CROSS-CHECK LOAD/DOCUMENTS → VERIFY PAYMENT PATH → RECORD EVIDENCE → CLASSIFY RISK → PROCEED / VERIFY / HOLD / ESCALATE / DECLINE**

The four-layer model is the memory model; the longer sequence is the execution model.

## Professional-language families
Broker authority; entity identity; contact identity; impersonation; double brokering; co-brokering; fraudulent load; surety/trust; BMC-84/BMC-85; verification source; trusted callback; domain/email verification; rate confirmation; payment instruction; payment redirection; red flag; evidence; risk classification; hold; escalation; DNU/carrier policy; Motus; SAFER; legacy L&I.

## Verified production inventory
The repository now contains:
- five Module 06 curriculum/manual files;
- Module 06 Knowledge Check;
- 28-item Module 06 Exam + answer key;
- 12-scenario Module 06 Scenario Lab;
- Instructor Answer Guide;
- seven dedicated Module 06 operational tools;
- integrated `Broker Verification Case Desk` graded practical;
- dedicated practical scoring guide;
- full Module 06 Instructor Guide;
- current-source/regulatory verification controls;
- completed G-013 independent research and repository reconciliation.

The earlier snapshot claims that the tool package, practical and full Instructor Guide were missing are superseded by the actual files now present on `academy-master-architecture`.

## Seven operational tools
1. Broker Verification Evidence Record
2. Entity vs Contact Authentication Worksheet
3. Trusted Callback Verification Record
4. Load & Document Cross-Check Sheet
5. Payment-Instruction Change Verification Record
6. Risk Classification & Decision Record
7. Verification Evidence & Escalation Packet

These tools convert verification into documented desk work and are deliberately deeper than Module 05 first-pass sourcing forms.

## Assessment chain
### Knowledge / practice
- Knowledge Check — EXISTS.
- 12-scenario lab — EXISTS and remains guided practice, not the secure graded practical.

### Final exam
- 28 items.
- Pass: **26/28 (90%) plus Critical Items 25 and 27 correct**.
- Critical Item 25 protects against unverified payment redirection.
- Critical Item 27 protects against unsupported fraud conclusions from inconclusive indicators.

### Integrated practical
**Broker Verification Case Desk — EXISTS.**

Pass: **24/30 plus no critical failure.**

Critical-failure families:
1. acts on unverified/contradicted payment redirection;
2. treats active/real broker entity as proof an unverified contact is authorized;
3. proceeds through confirmed impersonation/contact contradiction;
4. knowingly books in a supplied case where required broker authority is verified inactive;
5. declares fraud/double brokering solely from ambiguous duplicate/similar postings or other inconclusive indicators;
6. bypasses a material unresolved identity/document/payment mismatch rather than HOLD/VERIFY/ESCALATE.

## Instructor product
A full Module 06 Instructor Guide now exists and covers employment outcome, preparation, facilitation, professional language, tools, assessment administration, critical failures, diagnostic remediation, source/currentness control, SIM-006 alignment and closeout.

An answer key remains separate from the full Instructor Guide.

## Current-source controls
Current federal controls retained in the course include:
- broker financial-responsibility baseline: **$75,000**, BMC-84/BMC-85 under current 49 CFR § 387.307;
- BMC-85 acceptable trust-asset liquidity context: **7 calendar days**;
- current § 387.307 notice/suspension response context: **7 business days**;
- current BMC-85 trustee/provider ineligibility replacement context: **30 days** under the applicable FMCSA guidance;
- Motus as the current FMCSA registration environment, with legacy L&I treated as historical-record review rather than current filing display.

Do not collapse those separate clocks into a single generic seven-day rule. Reverify date-sensitive procedures before publication.

## G-013 status
**COMPLETE AND RECONCILED.**

`10-PRODUCTION/Module-06-G-013-Repository-Reconciliation-2026-09-02.md` unlocked the targeted production build. The prior language saying G-013 was still open or production was locked is stale and no longer controls.

## SIM-006
**SIM-006 — Broker Verification & Fraud Prevention Desk**

Status: **NOT YET VERIFIED BUILT ON THIS BRANCH.**

Locked simulation contract:
- progressive verification desk, not a quiz;
- plausible broker/load offer;
- authoritative entity evidence;
- contact/channel inconsistency;
- trusted callback decision;
- document mismatch;
- financial-security/current-status interpretation;
- factor/credit signal;
- duplicate/re-brokering ambiguity;
- payment-change event;
- urgency/social-pressure event;
- later evidence changing case state;
- evidence preservation and escalation handoff;
- critical controls aligned to the practical;
- first-attempt, remediation, corrected-decision and competency evidence retained.

## Boundary controls
- Module 05 owns sourcing, screening and first-pass verification/flagging.
- Module 06 owns deeper entity/contact/load/document/payment-path verification and evidence-based risk classification.
- Module 07 owns advanced rate mathematics/profitability.
- Module 09 owns deeper booking/rate-confirmation workflow.
- Module 14 owns deeper billing/factoring/closeout operations.
- Avoid duplicate instruction unless deliberate spaced practice serves a new competency purpose.

## Completion gate
**Targeted curriculum/tool/practical/instructor build: BUILT.**  
**G-013 reconciliation: CLOSED.**  
**Remaining:** assessment-chain final synchronization check → SIM-006 design/build/test/repair → premium-depth/current-source completion QA → later assembled release QA.

Module 06 is **not** `PUBLICATION_READY`.