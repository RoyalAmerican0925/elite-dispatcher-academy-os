# Module 06 — Broker Verification Case Desk — Instructor Scoring Guide

**Total:** 30 points  
**Pass:** 24/30 **and no critical failure**

## Rubric
### Task 1 — Isolate claims — 3
- 3: ≥5 material claims correctly separated into verification layers.
- 2: mostly correct; one meaningful omission/misclassification.
- 1: partial list with weak layer separation.
- 0: does not isolate claims.

### Task 2 — Entity verification — 4
- 4: correctly states active entity/authority/BMC-84 evidence and clearly states entity evidence does not authenticate contact, document or payment instruction.
- 3: correct core result with one omission.
- 1–2: recognizes active entity but overstates evidence.
- 0: treats entity record as complete transaction authentication.

### Task 3 — Contact authentication — 5
- 5: uses independently trusted callback; records that legitimate broker contradicts incoming identity; stops transaction and escalates.
- 3–4: correct disposition with incomplete documentation.
- 1–2: recognizes mismatch but leaves transaction open.
- 0: proceeds despite confirmed contradiction.

### Task 4 — Document cross-check — 4
Full credit requires identifying branding/MC appearance as insufficient, pickup-reference mismatch, payment/deposit instruction, and need for verified/corrected documentation before reliance.

### Task 5 — Payment-path control — 5
Full credit requires HOLD, no payment/deposit/account change, independent trusted-channel verification, and documentation/escalation of contradicted instruction.

### Task 6 — Risk-signal interpretation — 3
Full credit: factor approval is a commercial-risk signal about legitimate entity, not contact authentication; duplicate posting requires verification and does not alone establish fraud/double brokering.

### Task 7 — Final disposition/escalation — 6
Full credit requires a defensible DO NOT BOOK / ESCALATE disposition for this supplied transaction based on confirmed contact contradiction, preserved evidence, stopped booking/document/payment actions, and professional factual language.

## Critical failures
Any one = practical failure regardless of points:
1. Acts on the unverified/contradicted payment redirection or expedite-deposit instruction.
2. Treats the active legitimate broker entity as proof the incoming unverified contact is authorized.
3. Proceeds with booking after the trusted callback confirms the incoming person is not authorized and the offer was not sent by the broker.
4. In a supplied alternate/retest case, knowingly books through a broker whose required authority is verified inactive.
5. Declares fraud/double brokering established solely from ambiguous duplicate/similar postings or other inconclusive indicators.
6. Bypasses a material unresolved identity/document/payment mismatch rather than HOLD / VERIFY / ESCALATE.

## Expected case reasoning
- Entity: legitimate/current for facts supplied.
- Contact: **CONTRADICTED** by trusted callback.
- Document: cannot be relied on; contains material mismatch and suspicious payment/deposit instruction.
- Payment path: **DO NOT CHANGE / HOLD**; instruction contradicted/unverified.
- Factor: does not authenticate contact.
- Duplicate posting: verification flag only.
- Overall: **DO NOT BOOK / ESCALATE this incoming transaction**. This conclusion is about the transaction/contact evidence; it is not an accusation that the legitimate Meridian Gate entity committed fraud.

## Remediation
For a critical failure:
1. identify failed mental model;
2. reteach only the failed verification layer;
3. require learner to complete the applicable tool correctly;
4. reassess with a materially different fictional fact pattern;
5. preserve first-attempt failure and remediation result separately.

A corrected retest does not erase the first-attempt evidence.