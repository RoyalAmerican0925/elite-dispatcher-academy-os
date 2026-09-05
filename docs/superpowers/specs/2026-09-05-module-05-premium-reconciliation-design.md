# Module 05 Premium Reconciliation Design

## Goal
Close Module 05's premium-depth/platform-currentness gate without rebuilding strong existing work.

## Architecture
Preserve the established M05 workflow and assets, then repair only verified gaps. The controlling occupational chain is PROFILE → SEARCH → FIND → SCREEN → VERIFY AVAILABILITY → VERIFY ENTITY + CONTACT → COMPARE → SHORTLIST / REJECT / ESCALATE → DOCUMENT → HAND OFF. All instruction, tools, assessment, practical, SIM-005 evidence, source controls, and remediation must trace to this chain.

## Premium controls
- Preserve existing manuals/tools/assessment content that already passes occupational tests.
- Verify all nine student tools for unique occupational purpose; consolidate only where duplication is harmful.
- Keep six existing critical-failure families; do not invent new families without a real occupational stake.
- Distinguish broker/entity verification from contact/sender authentication.
- Treat duplicate postings and other anomalies as indicators requiring verification, not proof of fraud.
- Preserve dispatcher authority boundaries; no unauthorized shipper solicitation/allocation, signing, or carrier commitment.
- Rate-confirmation discrepancies must trigger STOP/VERIFY rather than silent acceptance.
- Platform-specific behavior must be labeled as platform-specific and current-source checked before commercial release.
- Current regulatory/source claims must use authoritative FMCSA material where applicable.
- SIM-005 must be independently inspected rather than trusted from prior completion claims.
- First-attempt/remediation behavior, competency evidence, completion record, and critical controls must align with the practical and instructor layer.
- Final build status may be BUILD COMPLETE — RELEASE QA DEFERRED only after independent QA and automated verification; never PUBLICATION_READY.
- `main` remains untouched.

## Implementation approach
1. Repository audit of manuals, nine tools, assessments, instructor controls, SIM-005 package/runtime/tests.
2. Current-source/platform-currentness review.
3. Selective instructional/tool/assessment repair only where the audit proves a gap.
4. TDD for any SIM-005 runtime behavior changes.
5. Package alignment tests that verify the premium chain and six critical families.
6. Permanent M05 premium QA record.
7. Reconcile M05 master and academy truth controls only after the gate passes.

## Success criteria
A learner can independently evaluate a new freight opportunity, distinguish FOUND from VERIFIED AVAILABLE, detect carrier/driver/policy conflicts, verify broker entity separately from contact identity, identify discrepancies without overclaiming fraud, choose SHORTLIST/REJECT/VERIFY/ESCALATE, document why, and hand the opportunity to the next decision stage without exceeding dispatcher authority.
