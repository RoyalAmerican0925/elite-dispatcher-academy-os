# SIM-006 — Premium Broker Verification & Fraud Prevention Desk Design

**Date:** 2026-09-05  
**Branch:** `academy-master-architecture`  
**Status:** APPROVED — PRODUCTION AUTHORIZED

## Purpose
SIM-006 is the Module 06 competency simulation. It must prove that a student can work a suspicious or incomplete broker transaction as a dispatcher-side verification desk—not merely recognize fraud vocabulary.

## Employment outcome
Given an initially plausible broker/load opportunity with incomplete and progressively changing evidence, the student must independently verify the broker entity, authenticate the contact/channel, cross-check the load and documents, protect the payment path, preserve evidence, classify risk, and issue a defensible PROCEED / VERIFY / HOLD / ESCALATE / DECLINE decision without unsupported accusations.

## Governing Module 06 models
Memory model:

**VERIFY THE ENTITY → VERIFY THE CONTACT → VERIFY THE LOAD → VERIFY THE PAYMENT PATH**

Execution model:

**RECEIVE → ISOLATE CLAIMS → VERIFY ENTITY → AUTHENTICATE CONTACT → CROSS-CHECK LOAD/DOCUMENTS → VERIFY PAYMENT PATH → RECORD EVIDENCE → CLASSIFY RISK → PROCEED / VERIFY / HOLD / ESCALATE / DECLINE**

## Premium simulation structure
SIM-006 will operate as one continuous Broker Verification Case Desk with progressive evidence releases. It is not a disconnected quiz bank.

### Stage 1 — Intake and claim isolation
Student receives a plausible load/broker approach and must separate established facts, claims, unknowns, and required verification actions. The simulation must punish premature conclusions.

### Stage 2 — Entity verification
Student uses supplied authoritative-style evidence to determine whether the broker entity/authority/financial-responsibility information supports the claimed entity. A real/active entity must never be treated as proof that the contacting person is authorized.

### Stage 3 — Contact authentication
A channel inconsistency is introduced: email/domain/phone/callback detail does not cleanly align. Student must select a trusted callback or other independently sourced verification path rather than relying on contact information supplied inside the suspicious communication.

### Stage 4 — Load and document cross-check
Student receives load/rate-confirmation or related document evidence containing at least one meaningful mismatch. Student must compare names, identifiers, load details, contact/channel information, and relevant commercial terms and document the discrepancy.

### Stage 5 — Financial-security/current-status interpretation
Student must interpret supplied current-status/financial-responsibility evidence without collapsing distinct regulatory clocks or treating financial security as proof of contact identity, creditworthiness, or payment certainty.

### Stage 6 — Duplicate/re-brokering ambiguity
Student receives a duplicate/similar posting or other ambiguous re-brokering indicator. Correct behavior is evidence-based verification and classification—not declaring fraud solely from an inconclusive indicator.

### Stage 7 — Payment-path attack
A payment instruction or payment destination changes through an unverified channel. This is a critical-control event. Student must HOLD the change, preserve the original instruction, independently verify through a trusted path, and escalate according to supplied policy.

### Stage 8 — Urgency/social-pressure event
The contacting party creates artificial urgency or pressure. Student must resist pressure and continue the verification chain rather than bypassing unresolved identity/document/payment contradictions.

### Stage 9 — Evidence-state change
Later evidence changes the case state. The student must update the risk classification based on new evidence instead of anchoring to the first impression. The scenario may become safer or more dangerous; the competency is disciplined reclassification.

### Stage 10 — Final disposition and escalation packet
Student must produce a defensible final disposition and handoff record showing verified facts, unresolved facts, evidence consulted, actions taken, risk classification, decision, and next decision owner/action.

## Required evidence/artifacts
The simulation must make the student use or reproduce the logic of all seven Module 06 tools:
1. Broker Verification Evidence Record
2. Entity vs Contact Authentication Worksheet
3. Trusted Callback Verification Record
4. Load & Document Cross-Check Sheet
5. Payment-Instruction Change Verification Record
6. Risk Classification & Decision Record
7. Verification Evidence & Escalation Packet

## Decision design
Target approximately 18–24 meaningful decisions across the continuous case. Decision count is not a quality target by itself; every decision must test a taught competency or critical control.

Decision families must include:
- claim vs evidence classification;
- authoritative-source selection;
- entity status interpretation;
- entity/contact separation;
- trusted callback selection;
- domain/email/phone inconsistency handling;
- document mismatch identification;
- financial-security interpretation;
- duplicate/re-brokering ambiguity;
- payment-change verification;
- urgency/social-pressure resistance;
- evidence preservation;
- risk reclassification after new evidence;
- final disposition;
- escalation/handoff completeness.

## Critical failures
Any unresolved critical failure prevents a passing competency result even if the point score is otherwise high:
1. acts on an unverified or contradicted payment redirection;
2. treats a real/active broker entity as proof that an unverified contact is authorized;
3. proceeds through confirmed impersonation/contact contradiction;
4. knowingly proceeds in a supplied case where required broker authority is verified inactive;
5. declares fraud/double brokering solely from ambiguous duplicate/similar postings or other inconclusive indicators;
6. bypasses a material unresolved identity/document/payment mismatch instead of HOLD / VERIFY / ESCALATE.

## Scoring and evidence model
Simulation scoring must align to the Module 06 practical rather than invent a second competency system. The runtime must retain:
- first-attempt decision;
- first-attempt correctness/classification;
- remediation shown;
- corrected decision where permitted;
- competency family affected;
- critical-failure state;
- final case disposition.

A corrected answer after remediation demonstrates recovery but does not erase first-attempt evidence.

## Remediation design
Wrong decisions receive targeted operational remediation explaining:
- what evidence was missing or misread;
- what risk the choice created;
- which Module 06 control applies;
- the next defensible verification action.

Remediation must not simply reveal the correct button.

## Premium-depth requirements
SIM-006 must pass these tests:
- **Google test:** value cannot be replaced by reading a fraud-warning article.
- **Employment test:** student must perform a broker-verification workflow under incomplete/changing evidence.
- **Buyer test:** case artifacts, progressive evidence, consequences, remediation and competency record must feel like professional desk training.
- **No-filler test:** every stage materially changes evidence, risk, decision state or documentation duty.

## Module boundaries
- M05 owns sourcing/screening/first-pass flagging.
- M06 owns deep entity/contact/load/document/payment-path verification and evidence-based risk classification.
- M07 owns profitability mathematics.
- M08 owns rate negotiation.
- M09 owns deeper booking/rate-confirmation execution.
- M14 owns deeper billing/factoring/closeout operations.
SIM-006 may reference neighboring concepts only as inputs to the verification decision; it must not reteach those modules.

## Current-source safeguards
Date-sensitive FMCSA/Motus/financial-responsibility content must be represented through controlled evidence and reverified before publication. Do not teach a generic 'seven-day rule': the current controls distinguish seven calendar days for applicable trust-asset liquidity context from seven business days in the applicable notice/suspension response context.

## Build package
Production implementation must create/reconcile:
- student simulation instructions;
- scenario/evidence packet;
- instructor facilitation guide;
- scoring rubric/competency map;
- completion/competency record;
- browser runtime;
- automated logic/alignment tests;
- production QA record.

## Release status rule
Passing content/runtime QA earns:

**SIM-006 — BUILD COMPLETE — RELEASE QA DEFERRED**

It does not earn `PUBLICATION_READY`. Browser/device matrix, LMS/durable-record integration, manual accessibility review and assembled release QA remain later release-layer controls.