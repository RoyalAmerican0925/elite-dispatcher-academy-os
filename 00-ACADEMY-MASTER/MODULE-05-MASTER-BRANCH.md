# Module 05 Master Branch — Load Boards & Freight Sourcing

**Control status:** BUILD COMPLETE — RELEASE QA DEFERRED

## Employment outcome
Student can run a disciplined freight-sourcing desk: translate a carrier/driver/equipment profile into a search strategy, locate opportunities, distinguish FOUND from VERIFIED AVAILABLE, screen incomplete or conflicting postings, compare viable candidates, separate entity verification from contact authentication, detect and route red flags without unsupported accusations, review a supplied rate-confirmation summary for discrepancies, document a defensible next action, and remain within dispatcher authority.

## Operational sourcing sequence
**PROFILE → SEARCH → FIND → SCREEN → VERIFY AVAILABILITY → VERIFY ENTITY + CONTACT → COMPARE → SHORTLIST / REJECT / ESCALATE → DOCUMENT → HAND OFF**

## Core competency families
SIM-005 controls 14 runtime competency families:
A. search profile construction;
B. search parameter setting;
C. FOUND vs VERIFIED AVAILABLE;
D. equipment/commodity/qualification screening;
E. missing-information verification questions;
F. candidate comparison and final disposition;
G. entity vs contact verification;
H. red-flag response without unsupported accusation;
I. rate-confirmation discrepancy handling;
J. signing-authority boundary;
K. timing/HOS feasibility verification;
L. factor/credit signal classification;
M. shipper-first allocation/scope escalation;
N. truthful role identification.

## Professional language layer
Load board; posting; lane; origin radius; destination radius; equipment filter; deadhead; rate; RPM; broker; authority; surety/trust; BMC-84/BMC-85; rate confirmation; double brokering; identity verification; contact verification; shortlist; verified available; discrepancy; escalation; handoff.

## Student tools
Nine tools are VERIFIED and KEEP — ACTIVE because each creates a distinct occupational work product:
1. Load Search Worksheet;
2. Load Search Activity Log;
3. Load Screening Checklist;
4. Load Comparison Worksheet;
5. Broker Call Sheet;
6. Broker Verification Worksheet;
7. Freight Fraud Red Flag Checklist;
8. Rate Confirmation Review Checklist;
9. STOP-VERIFY-ESCALATE Load Decision Tool.

The premium repository audit found functional layering rather than harmful duplication; consolidation would reduce evidence separation.

## Assessment chain
- Knowledge Check — EXISTS / active diagnostic layer.
- Final Exam — 30 items; pass 24/30; Critical Item 24 mandatory.
- Practical — Morning Load Board Shortlist; pass 24/30 and no critical failure.
- Full Instructor Guide — VERIFIED EXISTS.
- Practical scoring/instructor controls — VERIFIED aligned.

Exactly six critical-failure families remain controlling:
1. endorsement mismatch approved;
2. shipper-first discretionary carrier allocation treated as ordinary carrier-side sourcing;
3. duplicate-looking posting treated as proven fraud/double brokering;
4. verified brokerage entity treated as authentication of an unverified contact;
5. materially mismatched rate confirmation processed/signed as though it matches;
6. signing authority assumed merely because the dispatcher reviewed/handled the document.

Do not invent a seventh family. Truthful role identification remains a required competency but is not a critical family.

## Simulation
**SIM-005 — Live Load Search Desk**  
**Status: BUILD COMPLETE — RELEASE QA DEFERRED.**

Verified premium runtime:
- 13 stages;
- 18 stable main-scenario decisions;
- all 14 competency families represented;
- exactly six critical families;
- six materially different reassessment scenarios;
- immutable first-attempt evidence;
- permanent critical-trigger history;
- same-screen correction cannot erase a critical family;
- alternate reassessment required for critical resolution;
- pure completion record separates first attempt, final mastery, competency state, critical history and reassessment history;
- browser UI routes unresolved critical families through alternate reassessment;
- runtime README states local-storage and release limitations truthfully.

### Automated verification
TDD RED: GitHub Actions run `33982085015` failed after the premium gate was introduced against the legacy runtime.

Verified GREEN: GitHub Actions run `33982315079`, head `546d6c4134989ae5da7be1ecec7ccf218ebdeb92`, completed successfully.

Full test command:
`node --check app.js && node tests/logic.test.js && node tests/premium-gate.test.js && node tests/alignment.test.js`

Verified results:
- 25 regression/state tests — 0 failures;
- 7 premium critical-remediation tests — 0 failures;
- 7 package/currentness alignment tests — 0 failures;
- application syntax check — pass.

## Source / currentness controls
Current-source recheck stored at `10-PRODUCTION/Module-05-Current-Source-Recheck-2026-09-05.md`.

2026 controls:
- Motus is treated as the current FMCSA registration environment rather than teaching an obsolete universal legacy click path;
- BMC-84/BMC-85 and broker financial-responsibility concepts remain controlled by current FMCSA material;
- January 16, 2026 financial-responsibility changes are recognized where relevant;
- vendor load-board UI/search behavior is explicitly platform-specific;
- vendor pricing, proprietary mileage, credential-sharing permissions, filter names and Terms of Service are not taught as universal rules;
- duplicate/similar postings remain verification indicators rather than automatic proof of fraud.

Module 05 owns first-pass sourcing verification. Module 06 owns deeper fraud/identity/authority/financial-security verification. Module 07 owns deeper profitability mathematics.

## Permanent QA authority
Current M05 premium gate truth is controlled by:
- this master file;
- `10-PRODUCTION/Module-05-Premium-Repository-Audit-2026-09-05.md`;
- `10-PRODUCTION/Module-05-Current-Source-Recheck-2026-09-05.md`;
- `10-PRODUCTION/Module-05-Premium-Content-QA-2026-09-05.md`;
- actual SIM-005 package/runtime/tests on `academy-master-architecture` after verified integration.

## Premium tests
### Google Test — PASS
The paid value is an integrated sourcing workflow, reusable operational tools, evidence discipline, realistic ambiguity, assessment, remediation and applied simulation rather than definitions alone.

### Employment Test — PASS
Learners must independently turn a carrier profile plus imperfect opportunity set into a verified, documented shortlist/reject/verify/escalate decision and professional handoff.

### Buyer-Value Test — PASS
The module includes substantial instruction, nine operational tools, assessment/practical/instructor controls, a 13-stage simulation, first-attempt evidence, six critical controls, alternate reassessment and currentness governance.

## Completion gate
**Module 05 content/runtime premium build gate: CLOSED.**  
**Assembled release gate: OPEN / DEFERRED.**

Remaining release controls:
- browser/device compatibility matrix;
- manual accessibility review;
- production deployment validation;
- LMS/student-account + durable competency-record integration;
- branding/editorial assembled-package QA;
- final pre-publication vendor/current-source recheck.

**Final controlled status: MODULE 05 / SIM-005 — BUILD COMPLETE — RELEASE QA DEFERRED.**

Do not assign `PUBLICATION_READY` until assembled release controls pass. This file does not authorize any merge to `main`.
