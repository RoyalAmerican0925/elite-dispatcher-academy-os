# Module 05 — C-013 Regular Closeout QA

**Module:** 05 — Load Boards & Freight Sourcing  
**Branch:** `academy-master-architecture`  
**QA date:** 2026-08-30  
**Verdict:** `REGULAR C-013 CLOSEOUT — PASS / PREMIUM RE-AUDIT STILL REQUIRED`

## Purpose
This QA record closes the specific regular-production defects assigned under C-013. It does not declare Module 05 premium-complete or `PUBLICATION_READY`.

## 1. Dedicated entity-versus-contact practical — VERIFIED
The current `Module-05-Practical.md` contains **Verification Event 1 — Entity vs. Contact**.

The scenario deliberately separates:
- confirmation that a brokerage entity exists/has active authority in an appropriate current source; from
- authentication of a new person/email/instruction purporting to act for that brokerage.

Required student reasoning:
1. identify what has actually been verified about the entity;
2. identify what remains unverified about the contact;
3. reject the assumption that a legitimate entity record authenticates a person/email/instruction;
4. verify the new contact through an appropriate trusted/independently obtained channel before reliance.

This satisfies the C-013 requirement for a dedicated entity-versus-contact verification task.

## 2. Dedicated rate-confirmation discrepancy practical — VERIFIED
The current practical contains **Verification Event 2 — Rate Confirmation Discrepancy Review**.

The supplied call information states:
- agreed exercise rate: `$1,150`;
- no extra deduction/tracking fee discussed.

The fictional written rate-confirmation summary instead states:
- rate: `$1,050`;
- added `$75 tracking-compliance deduction` condition.

Required student actions include:
- field-by-field comparison;
- identify every material discrepancy supplied;
- classify fields as MATCH / DISCREPANCY / NOT SHOWN;
- stop rather than sign/process as matching;
- verify conflicting terms directly;
- obtain corrected/confirmed terms through the carrier's authorized workflow;
- confirm actual dispatcher signing/processing authority;
- avoid silently rewriting the document or making an unsupported legal-effect conclusion.

This satisfies the C-013 discrepancy-review requirement and tests operational judgment rather than simple document recognition.

## 3. Scoring synchronization — VERIFIED
`Modules-01-05-Instructor-Scoring-Guide.md` now assigns Module 05 **30 points** across ten dimensions and explicitly scores both C-013 additions:
- entity-versus-contact verification distinction and next action — 0–3, critical where the student treats entity verification as contact authentication;
- rate-confirmation discrepancy identification — 0–3, critical where the student treats the supplied mismatched document as matching/ready to process;
- rate-confirmation STOP/VERIFY/signing-authority response — 0–3, critical where the student assumes signing authority or proceeds through the unresolved discrepancy.

The scoring guide also preserves the pre-existing critical controls for endorsement mismatch, shipper-direct allocation boundary, and unsupported fraud/double-brokering accusation.

**Pass rule:** 24/30 and no critical failure.

## 4. Student tools — VERIFIED
Current Module 05 student tools include, among others:
- Broker Verification Worksheet;
- Rate Confirmation Review Checklist;
- Freight Fraud Red Flag Checklist;
- STOP/VERIFY/ESCALATE Load Decision Tool;
- Broker Call Sheet;
- Load Screening Checklist;
- Load Search Worksheet/Activity Log;
- Load Comparison Worksheet.

The practical therefore references actual student tools rather than imaginary or missing artifacts.

## 5. Manual alignment — VERIFIED
`Student-Manual-Part-07.md` contains the instructional foundation for:
- rate-confirmation operational review;
- signing-authority boundary;
- introductory rate screening;
- broker credit/factoring distinctions;
- HOS/timing verification boundary;
- entity verification versus contact verification;
- sourcing-stage fraud red flags;
- load-board account security;
- professional broker communication.

The manual expressly avoids teaching that a rate confirmation is always the controlling contract, that a legitimate brokerage proves the contacting person is authentic, that duplicate postings prove fraud, or that mileage/elapsed time alone proves an HOS violation.

## 6. Instructor-answer alignment — VERIFIED
`03-ASSESSMENTS/Instructor-Answer-Guides/Module-05.md` identifies itself as the integrated C-013 final answer guide and contains the expected reasoning for Sections 26–33, including:
- operational rate-confirmation review;
- entity/contact distinction;
- payment-redirection handling;
- commercial credit versus federal financial-security distinction;
- HOS timing verification;
- Module 06 depth boundary;
- Module 07 profitability-depth boundary.

## 7. Transition repair — COMPLETED
The old Part 04 transition still implied that Module 06 picked up directly from only the early duplicate-posting/verification sections, which became stale after Part 07 added Module 05's own introductory verification layer.

The transition is now corrected to state:

**Module 05 = FIND → SCREEN → FLAG → FIRST-PASS VERIFY → ROUTE FOR DEEPER VERIFICATION**

**Module 06 = deeper identity/authority/fraud/financial-security verification and prevention workflow.**

This removes the stale implication that verification/fraud concepts are entirely deferred out of Module 05.

## 8. Critical-failure synchronization
The student practical and scoring guide agree that critical failures include:
- approving Candidate E despite the stated required endorsement mismatch;
- treating general shipper solicitation plus discretionary allocation among unrelated carriers as ordinary carrier-side sourcing;
- declaring duplicate-looking postings proven fraud/double brokering without verification;
- treating entity verification as contact authentication;
- processing/signing the supplied mismatched rate-confirmation as though it matches;
- assuming signing authority merely because the dispatcher reviewed the document.

No additional C-013 critical failure was invented solely to increase difficulty.

## 9. What this PASS means
The assigned **regular C-013 closeout defects are resolved in the current branch snapshot**:
- dedicated rate-confirmation discrepancy task — present;
- dedicated entity-versus-contact task — present;
- scoring synchronization — present;
- instructor-answer synchronization — present;
- Part 07 instructional support — present;
- stale Module 06 transition — repaired;
- student tools — present.

## 10. What remains open
This PASS does **not** grandfather Module 05 into final commercial release.

Still required under the stronger Academy standard:
- premium instructional-depth audit using Google / Employment / Buyer tests;
- full instructor-guide audit against `INSTRUCTOR-GUIDE-PRODUCT-STANDARD.md`;
- source/currentness re-verification before publication, especially platform-specific claims;
- simulation SIM-005 design/build in the established sequential simulation workflow;
- visual/brand/editorial/accessibility/LMS/durable-record release QA;
- final contamination scan and assembled-system release gate.

## Final verdict
**Module 05 C-013 regular-production closeout: PASS.**  
**Module 05 overall status: PREMIUM RE-AUDIT / SIM-005 STILL REQUIRED.**  
**Publication status: NOT `PUBLICATION_READY`.**