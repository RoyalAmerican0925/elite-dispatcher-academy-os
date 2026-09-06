# Module 09 Premium Design Specification — 2026-09-05

**Module:** M09 — Booking Loads, Rate Confirmations, and Dispatch Documentation  
**Branch:** `module-09-premium-build`  
**Integration target:** `academy-master-architecture`  
**Main:** DO NOT TOUCH

## 1. Employment outcome
The learner can convert a Module 08 negotiation handoff into a controlled carrier-side booking record by verifying the agreement state, reviewing every material rate-confirmation term, reconciling verbal and written terms, identifying discrepancies and missing facts, staying within supplied authority, obtaining correction or escalation when required, creating a traceable booking record, building an accurate dispatch-document packet, and issuing a controlled handoff without performing later-module trip-planning, HOS, monitoring, exception, or billing work.

## 2. Operating framework
**NEGOTIATION HANDOFF → VERIFY AGREEMENT → RECEIVE DOCUMENT → AUTHENTICATE / IDENTIFY → READ ALL MATERIAL TERMS → RECONCILE VERBAL vs WRITTEN → CLASSIFY DISCREPANCIES → CORRECT / ESCALATE → CONFIRM AUTHORITY → ACCEPT / SIGN WITHIN AUTHORITY → BUILD BOOKING RECORD → BUILD DISPATCH PACKET → ISSUE CONTROLLED DRIVER HANDOFF → RECORD COMPETENCY**

## 3. Boundary rules
- M08 owns negotiation and agreement-in-principle; M09 does not retroactively rewrite negotiation evidence.
- M09 owns formal booking control, rate-confirmation review, discrepancy resolution, booking evidence, and dispatch-document handoff.
- M10 owns detailed trip planning, routing, fuel/time/appointment planning.
- M11 owns detailed HOS/ELD feasibility.
- M12 owns active-load monitoring and driver communication after dispatch.
- M13 owns deeper detention, TONU, breakdown, claim, delay, and exception management.
- M14 owns POD/invoicing/factoring/recordkeeping/load closeout.
- A successful M09 outcome may be `BOOKED / DISPATCH PACKET READY` only when all M09 booking controls are satisfied; it does not mean the trip is operationally complete.

## 4. Competency families — exactly 15
- **M09-C01** Interpret the M08 negotiation handoff and distinguish agreed, conditional, unresolved, and unverified terms.
- **M09-C02** Identify the parties, load, carrier, equipment, locations, dates, rate, and document version before acting.
- **M09-C03** Distinguish a rate confirmation from a quote, load-board posting, broker email, BOL, POD, invoice, and carrier packet.
- **M09-C04** Read and extract all material rate-confirmation terms instead of headline-rate scanning.
- **M09-C05** Reconcile verbal/agreement-in-principle terms against written terms using a controlled comparison record.
- **M09-C06** Classify discrepancies as material, nonmaterial/clerical, missing/unknown, or later-workflow issue.
- **M09-C07** Stop and obtain correction/clarification when a material booking term conflicts with the supplied agreement.
- **M09-C08** Recognize agreement-specific accessorial, tracking, check-call, documentation, cancellation, detention, lumper, and payment-related terms without teaching invented universal terms.
- **M09-C09** Stay within supplied carrier/dispatcher authority and escalate when acceptance/signature/commitment authority is absent or exceeded.
- **M09-C10** Preserve document integrity, version control, timestamps, source, and change history.
- **M09-C11** Create a complete booking record that separates source facts, verified facts, unresolved facts, decisions, and approvals.
- **M09-C12** Build a dispatch packet containing the correct current documents and instructions while excluding obsolete/conflicting versions.
- **M09-C13** Issue a controlled driver handoff that communicates verified booking facts without inventing trip-planning/HOS conclusions.
- **M09-C14** Identify when a load is not ready for dispatch and use HOLD / CORRECT / ESCALATE rather than false completion.
- **M09-C15** Close the M09 workflow with a traceable `BOOKED / DISPATCH PACKET READY`, `HOLD`, `DECLINE/CANCEL PER AUTHORITY`, or `ESCALATE` record and correct M10 handoff.

## 5. Student manual architecture — six parts
1. **Part 01 — From Negotiation to Booking Control**: booking-state vocabulary, agreement-in-principle vs formal booking, role boundaries, source hierarchy, booking file anatomy.
2. **Part 02 — Rate Confirmation Anatomy & Material-Term Extraction**: parties, load identity, rate, pickup/delivery, equipment, commodity, weight, accessorial/operating terms, signatures/acceptance, version/source controls.
3. **Part 03 — Verbal vs Written Reconciliation & Discrepancy Control**: comparison matrix, materiality, missing facts, conflicting versions, correction loop, escalation.
4. **Part 04 — Authority, Acceptance, Signature & Document Integrity**: supplied authority, signature/acceptance boundaries, no unauthorized commitments, no alteration/fabrication, audit trail.
5. **Part 05 — Booking Record & Dispatch Packet Construction**: booking record, document checklist, version control, driver-facing vs office-facing information, controlled handoff.
6. **Part 06 — Booking Exceptions, Closeout & M10 Handoff**: HOLD/CORRECT/ESCALATE, cancellation/decline within authority, unresolved later-workflow items, final booking status and transfer.

Every part must include worked examples, occupational decision points, common failure patterns, coached practice, and explicit handoff boundaries.

## 6. Required student tools — nine
1. M09 Negotiation-to-Booking Handoff Sheet
2. Rate Confirmation Material-Term Extraction Worksheet
3. Verbal-vs-Written Reconciliation Matrix
4. Booking Discrepancy & Correction Log
5. Authority / Approval / Signature Control Record
6. Document Version & Integrity Log
7. Booking Record Builder
8. Dispatch Packet Assembly Checklist
9. BOOK / HOLD / CORRECT / ESCALATE Decision Record

## 7. Assessment chain
**TEACH → DEMONSTRATE → PRACTICE → KNOWLEDGE CHECK → APPLIED LAB → EXAM → PRACTICAL → SIMULATE → REMEDIATE → RECORD COMPETENCY**

- Knowledge Check: diagnostic/application mix; not the final graded gate.
- Applied Lab: multi-document rate-confirmation reconciliation exercise.
- Final Exam: 30 items, pass 27/30, with controlled critical items.
- Practical: 10 dimensions × 0–3 = 30 points; pass 24/30 plus zero unresolved critical failures.
- Instructor guide controls demonstrations, evidence, scoring, remediation, reassessment, and scope.

## 8. Exactly six critical-failure families
- **M09-CF-01 — Unauthorized carrier commitment:** accepts/signs/commits the carrier outside supplied authority.
- **M09-CF-02 — Material rate-confirmation acceptance error:** knowingly accepts or dispatches from a written document containing a material term that conflicts with the supplied agreement without correction/authorization.
- **M09-CF-03 — Unresolved verbal/written discrepancy represented as resolved:** marks a material disagreement as agreed/booked when evidence remains conflicting or missing.
- **M09-CF-04 — Wrong/obsolete/unverified booking document used for dispatch:** knowingly builds or issues the dispatch packet from a superseded, wrong-load, wrong-carrier, or otherwise unverified rate-confirmation version.
- **M09-CF-05 — Document fabrication/material alteration:** fabricates, materially alters, deletes, backdates, or misrepresents booking evidence or approval history.
- **M09-CF-06 — False booking completion:** represents the load as `BOOKED / DISPATCH PACKET READY` while a required M09 booking control remains unresolved.

No seventh critical family is authorized without architecture revision.

## 9. Critical remediation
- Preserve first-attempt response, timestamp, and triggering evidence.
- Same-screen correction never erases a critical failure.
- Critical resolution requires materially different reassessment facts.
- Corrected mastery and critical-history resolution are recorded separately.
- Raw score cannot override an unresolved critical failure.
- Resolved history is labeled `RESOLVED BY REASSESSMENT`, never rewritten as though no failure occurred.

## 10. SIM-009 — Booking Control Desk
Target architecture:
- exactly **12 progressive stages**;
- at least **24 meaningful decisions/actions**;
- all **15 competency families** evidenced;
- exactly **six critical-failure families**;
- realistic multi-document evidence packet with M08 handoff, broker communication, initial rate confirmation, corrected/revised version, carrier authority facts, and dispatch-packet documents;
- conflicting and missing terms that require classification rather than guessing;
- first-attempt persistence;
- materially different critical reassessment;
- separate first-attempt score, final mastery, competency status, critical history, reassessment history, and instructor state;
- browser localStorage may be used for demonstration persistence but must be truthfully labeled non-durable; production LMS/account persistence remains release QA.

## 11. SIM-009 stage model
1. Receive M08 negotiation handoff
2. Establish booking identity and authority
3. Receive and authenticate rate confirmation
4. Extract material terms
5. Reconcile rate and money terms
6. Reconcile operational terms
7. Detect discrepancies / missing facts / version problems
8. Correction and escalation loop
9. Acceptance / signature / authority control
10. Build booking record
11. Assemble dispatch packet and driver handoff
12. Final BOOKED / HOLD / ESCALATE closeout and M10 handoff

## 12. Evidence packet design
Use fictional training entities and clearly label all case-specific numbers/terms as instructional assumptions. Include:
- M08 negotiation call record and decision record;
- broker/load identity communication;
- Rate Confirmation v1 with at least two material conflicts and one nonmaterial discrepancy;
- correction communication;
- Rate Confirmation v2 with a changed term requiring version control;
- supplied carrier authority matrix;
- driver/truck/equipment identity facts sufficient for M09 but not detailed HOS planning;
- dispatch packet source documents;
- one irrelevant/obsolete document to test exclusion/version control.

## 13. Error handling / decision language
Use explicit states rather than guessing:
- VERIFIED
- MATCH
- MISMATCH — MATERIAL
- MISMATCH — NONMATERIAL / CLERICAL
- UNKNOWN / MISSING
- SUPERSEDED
- HOLD
- CORRECT
- ESCALATE
- AUTHORIZED
- NOT AUTHORIZED
- BOOKED / DISPATCH PACKET READY
- HAND OFF TO M10

## 14. Source/currentness rules
- Do not teach broker/carrier contract terms as universal law.
- Accessorial amounts, tracking/check-call requirements, detention/TONU conditions, cancellation terms, signature methods, and payment terms are agreement-specific unless an authoritative rule controls the point.
- Federal regulatory/legal statements must be sourced to current primary authority and reverified before commercial release.
- Vendor/platform workflow screenshots or instructions are date-sensitive and cannot be treated as permanent industry rules.
- Electronic records/signatures must be described accurately without claiming a particular platform is legally required.

## 15. Automated gates
SIM-009 CI must verify:
- 12 stages;
- >=24 meaningful decisions;
- all 15 competencies;
- exactly six critical families;
- first-attempt immutability;
- same-screen correction cannot resolve a critical family;
- materially different reassessment can resolve without deleting history;
- completion blocked by unresolved critical family;
- successful final state is not available with unresolved M09 controls;
- package alignment across student instructions, evidence packet, instructor guide, scoring map, completion record, practical, and runtime;
- no `PUBLICATION_READY` claim.

## 16. Premium value gates
- **Google Test:** student must do multi-document reconciliation, authority control, version control, discrepancy classification, booking evidence, and dispatch packet construction—not memorize definitions.
- **Employment Test:** artifacts and decisions resemble real carrier-side booking desk work.
- **Buyer Test:** manual, tools, labs, assessments, practical, simulation, remediation, instructor controls, and competency record operate as one coherent paid occupational system.

## 17. Maximum completion status
`BUILD COMPLETE — RELEASE QA DEFERRED` only after fresh independent QA and exact-head CI.

Still deferred before `PUBLICATION_READY`: browser/device compatibility, production deployment, LMS/student-account persistence, durable competency records, manual accessibility, final assembled print/export/branding/editorial QA, and final live-source recheck.