# Program Assessment Scoring & Remediation Policy

**Status:** DRAFT_COMPLETE — governance/QA review required before PUBLICATION_READY  
**Owner:** Elite Dispatcher Academy assessment system  
**Applies to:** Module Knowledge Checks, graded Module Exams, practical/scenario assessments, future capstone/final assessment

## 1. Assessment Types

### Knowledge Checks

Purpose: diagnostic/formative retrieval practice.

- Not treated as the final graded module credential.
- Used to locate misconceptions before the graded exam.
- Missed items route the learner back to specific sections/objectives.

### Module Exams

Purpose: graded objective-level mastery check using new items, not verbatim copies of Knowledge Checks.

Current controlled standards:

| Module | Passing standard | Critical-failure requirement |
|---|---:|---|
| 01 | 80% | None |
| 02 | 85% | Allocation-of-traffic critical item must pass |
| 03 | 85% | Illegal axle-distribution critical item must pass |
| 04 | 85% | Required CDL/hazmat endorsement critical item must pass |
| 05 | 80% | Shipper-direct/brokerage-boundary critical item must pass |
| 06 | 90% | Payment-redirection and unsupported-fraud-conclusion critical items must both pass |

A critical-failure miss overrides the percentage score.

### Practical / Scenario Assessments

Purpose: demonstrate operational decision-making using realistic multi-step work, not only selected-response recall.

Default practical rule unless a module-specific approved rubric states otherwise:

- **Pass:** at least 80% of available rubric points;
- **and** all designated critical safety/legal/security criteria must be passed;
- **and** required documentation/reasoning must be materially complete.

A learner cannot compensate for an unsafe or unlawful critical decision by accumulating points elsewhere.

## 2. Critical-Failure Standard

A criterion should be designated critical only when the incorrect behavior models a material safety, legal, security, or authority failure rather than an ordinary knowledge gap.

Current examples include:

- treating clear discretionary allocation of shipper freight among competing carriers as ordinary carrier-side agency;
- accepting an illegal axle-weight distribution because gross weight is under the gross baseline;
- dispatching a placarded hazmat load with a driver who lacks the required endorsement;
- acting on unverified payment-redirection instructions;
- declaring fraud as established when the facts only support verify/hold/escalate;
- any future task that directs a driver or carrier to violate an applicable safety/compliance requirement.

Critical designations require explicit documentation in the assessment and answer key/rubric.

## 3. Remediation Workflow

When a learner does not pass:

1. Record the missed objective(s), not just the total score.
2. Route the learner to the exact manual section, job aid, worksheet, or practice scenario tied to the gap.
3. Require targeted practice showing the corrected reasoning/skill.
4. For critical failures, require explicit remediation on the critical misconception before any retest.
5. Retest using materially different items/scenarios that measure the same objective; do not simply repeat the failed question.
6. Record the retest result separately from the original attempt.

The academy should not establish an arbitrary maximum-attempt rule until the commercial/student-progress policy is approved. Any future attempt limit must be documented as a program policy, not silently embedded in one assessment.

## 4. Practical-Assessment Rubric Scale

Unless a specialized rubric replaces it, score each dimension on a 0–3 scale:

- **3 — Meets/Exceeds Standard:** correct decision, complete documentation, defensible reasoning, no material unsupported assumptions.
- **2 — Near Standard:** generally correct but contains a limited omission that does not create an unsafe/unlawful decision.
- **1 — Needs Remediation:** material gap, weak reasoning, multiple missing facts, or an unsupported assumption that changes decision quality.
- **0 — Unacceptable/Critical:** wrong or missing response that creates a designated safety/legal/security/authority failure, or no meaningful attempt.

Critical dimensions are marked separately. A score of 0 on a critical dimension is an automatic non-pass.

## 5. Required Assessment Metadata

Every controlled assessment should identify:

- stable asset name/ID;
- module and audience;
- status/version;
- source manual/objectives;
- prerequisite dependencies;
- passing standard;
- critical-failure criteria, if any;
- answer key/rubric path;
- remediation routing;
- date-sensitive claims and verification date;
- whether the asset is practice, diagnostic, graded, or secure/summative.

## 6. Date-Sensitive Content

Legal, regulatory, FMCSA-system, and platform-specific items must carry a verification flag and as-of date where appropriate.

- A score remains valid for the assessment form administered at that time.
- An outdated form must not continue to be administered merely because an older answer key exists.
- If the governing fact changes, affected items must be revised, superseded, or removed before the next release.

## 7. Security / Separation

Student-facing files must not contain answer keys, instructor classifications, hidden scoring logic, or internal AI-production prompts.

Instructor keys/rubrics should remain in controlled instructor-only areas.

Future LMS/software implementation should support separate permissions for:

- student assessment form;
- instructor key/rubric;
- item-bank metadata;
- analytics/remediation routing.

## 8. Completion Status

An assessment is not `PUBLICATION_READY` merely because questions and answers exist.

Publication requires the repository acceptance gates: content review, terminology review, dependency review, factual/source review, instructional review, formatting/QA, and any required technical testing.