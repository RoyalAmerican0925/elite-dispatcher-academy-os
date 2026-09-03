# CLAUDE BUILD ASSIGNMENT — SIM-004 + SIM-005

**Date:** 2026-09-02  
**Assigned by:** ChatGPT production/reconciliation pass  
**Repository:** `RoyalAmerican0925/elite-dispatcher-academy-os`

## Read this first
Do not redesign the Academy workflow or downgrade these simulations into quizzes. Work from the current repository evidence and preserve existing instructional, assessment, critical-failure, and status controls.

The Academy simulation rule is:

**TEACH → DEMONSTRATE → PRACTICE → ASSESS → SIMULATE → REMEDIATE → RECORD COMPETENCY**

Simulations must recreate meaningful dispatcher work with incomplete information, competing considerations, progressive events, judgment, consequences, remediation, and competency evidence.

Release-layer work such as LMS/student accounts, durable production persistence, production deployment, browser/device QA and manual accessibility QA is separate. A simulation that is functionally built and locally/test verified should be reported as:

**BUILD COMPLETE — RELEASE QA DEFERRED**

Do not declare `PUBLICATION_READY`.

---

# ASSIGNMENT A — SIM-004

## Simulation
**SIM-004 — Carrier Onboarding Command Desk**

## Current control state
Module 04 instructional content has already passed the premium instructional gate. SIM-004 has previously been recorded as **BUILD COMPLETE — RELEASE QA DEFERRED** with a historical test record. Your job is not to blindly rebuild it. Inspect the actual current repository implementation and reconcile/repair it where needed so its runtime, scenario logic, scoring, remediation, competency evidence, documentation and tests match the current Module 04 premium standard.

## Required Module 04 operating model
**COLLECT → CLASSIFY → VERIFY → RECONCILE → PROTECT → DECIDE → DOCUMENT → TRACK**

Required decision language:
- COMPLETE
- MISSING
- EXPIRED
- MISMATCH
- VERIFY
- ESCALATE
- DO NOT DISPATCH

## Required occupational outcome
The learner must organize and review an operational carrier/driver onboarding file, identify missing/conflicting/currentness issues, choose appropriate verification sources/actions, distinguish dispatcher readiness from carrier compliance administration, protect payment-change workflows, and issue a documented readiness / hold / do-not-dispatch / escalation decision.

## Module 04 critical failures that must remain synchronized
1. Approving a stated placarded-hazmat assignment when the supplied driver lacks the required H/X qualification.
2. Redirecting payment from an unverified inbound request alone.
3. Silently treating a dispatch profile as authority to assume the carrier's DQ/drug-and-alcohol compliance program.

Do not invent contradictory critical-failure standards.

## SIM-004 implementation requirements
Inspect the current SIM-004 files first. Preserve good work. Repair only what is needed.

The finished build must include:
- progressive onboarding case flow rather than isolated multiple-choice trivia;
- supplied carrier, driver and equipment evidence;
- missing, expired, conflicting and current information;
- verification decisions and source selection;
- payment-change authentication event;
- dispatcher-readiness versus carrier-compliance boundary decision;
- at least one qualification/dispatch stop condition;
- documented disposition and follow-up tracking;
- first-attempt decision evidence;
- remediation path after incorrect reasoning;
- final mastery state;
- critical-decision state;
- competency result/instructor-review state;
- deterministic scenario logic suitable for automated tests;
- README/instructor-facing implementation notes;
- tests covering correct decisions, critical failures, remediation, state transitions and completion behavior.

Historical architecture describes SIM-004 as approximately 10 stages / 20 decisions. Do not reduce its occupational depth. If the current implementation already satisfies that architecture, verify it rather than rewriting it gratuitously.

## SIM-004 verification
Run the available test suite after changes. Report exact tests passed/failed and the tested commit SHA. Do not reuse a historical CI result as if it were fresh evidence.

---

# ASSIGNMENT B — SIM-005

## Simulation
**SIM-005 — Live Load Search Desk**

This is the next simulation in sequence and requires a full production build.

## Module 05 occupational outcome
The learner must run a disciplined freight-sourcing desk: translate a carrier/driver/equipment profile into a search strategy, locate opportunities, distinguish FOUND from VERIFIED AVAILABLE, screen incomplete/conflicting postings, compare viable candidates, separate entity verification from contact authentication, respond to red flags without unsupported accusations, review a supplied rate-confirmation summary for discrepancies, and document a defensible next action.

## Core workflow
**PROFILE → SEARCH → FIND → SCREEN → VERIFY AVAILABILITY → FIRST-PASS VERIFY → COMPARE → SHORTLIST → DOCUMENT → ROUTE FOR NEXT-STAGE DECISION**

Required statuses/language:
- FOUND
- VERIFIED AVAILABLE
- GOOD CANDIDATE
- BAD FIT / REJECT
- NEEDS MORE INFORMATION / VERIFY
- STOP / ESCALATE

Never encode `FOUND = BOOKABLE` or `POSTED = VERIFIED`.

## Required competency families
SIM-005 must test the learner's ability to:
1. build a search profile from carrier/driver/equipment facts;
2. set and adjust search parameters;
3. distinguish FOUND from VERIFIED AVAILABLE;
4. screen equipment, commodity and qualification fit;
5. identify missing information and turn it into verification questions;
6. manage stale/changing availability;
7. compare multiple plausible candidates;
8. distinguish brokerage entity verification from contact authentication;
9. respond to duplicate/fraud indicators without unsupported accusations;
10. conduct/document broker-contact verification;
11. identify rate-confirmation discrepancies and the signing-authority boundary;
12. identify shipper-first/discretionary-allocation brokerage-scope escalation;
13. issue a final shortlist / reject / verify / escalate disposition.

## Required progressive-event design
Do not build a static quiz. Create a realistic workday/case in which the learner receives a carrier profile and imperfect opportunity set, performs the search/screening workflow, and then receives new information.

At minimum include:
- one strong initial candidate;
- one stale or no-longer-available candidate;
- one incomplete posting;
- one equipment/qualification mismatch;
- one carrier-policy or driver constraint conflict;
- duplicate/similar postings that require verification but do not prove fraud;
- a legitimate brokerage entity paired with a new/unverified contact;
- a material rate-confirmation discrepancy;
- a tight timing/HOS-feasibility question that requires actual verification rather than distance-only guessing;
- a factor/credit signal that must not be mislabeled as proof of fraud or loss of authority;
- a shipper-first allocation request that triggers the Module 02 brokerage/scope boundary;
- at least one later fact that changes the attractiveness or viability of an earlier candidate.

## Module 05 practical critical failures — source of truth
The simulation must remain synchronized to these six concepts:
1. Treating the supplied Candidate-E-style placarded-hazmat/endorsement mismatch as viable for the current driver.
2. Treating general shipper solicitation plus discretionary allocation among unrelated carriers as ordinary carrier-side sourcing.
3. Declaring duplicate-looking postings proven fraud/double brokering without verification.
4. Treating a verified brokerage entity as proof that a new/unverified contact is authorized.
5. Processing/signing a supplied mismatched rate confirmation as though it matches confirmed terms.
6. Assuming signing authority merely because the dispatcher reviewed the document.

Do not create hidden critical failures merely to make the simulation harder.

## Required evidence/state model
Preserve separately:
- first-attempt answer/decision;
- first-attempt correctness;
- critical-failure trigger state;
- remediation assigned/completed;
- corrected/final decision;
- final mastery;
- competency family results;
- overall competency status;
- instructor-review flag/state where appropriate.

A learner who fails first and later remediates must not have the first failure erased.

## Scoring philosophy
Do not reward guessing. Score the decision plus controlling reason/evidence where the interface permits. Wrong reasoning with a lucky label should not be treated as equivalent to demonstrated occupational judgment.

## UX requirements
The interface should feel like a dispatcher work desk, not an exam page. Use realistic fictional data only. Make information scannable. Show evolving load/case information clearly. Provide accessible labels and keyboard-usable controls where practical. Do not add vendor logos, copyrighted proprietary board replicas, real credentials or real private carrier information.

## Implementation package
Create/complete the appropriate SIM-005 directory under the repository's simulation architecture with, at minimum:
- runtime entry file(s);
- styles/assets needed for the local simulation;
- scenario/content data separated from core decision logic where practical;
- scoring/competency logic;
- tests;
- README with run/test instructions and instructional alignment;
- any instructor/QA notes required by the existing simulation architecture.

Follow existing SIM-001 through SIM-004 repository conventions where they remain sound. Do not introduce a new framework unless the existing architecture genuinely cannot support the required behavior.

## SIM-005 test requirements
Automated tests should cover at least:
- stage progression;
- FOUND vs VERIFIED AVAILABLE separation;
- incomplete-information verification path;
- candidate comparison/shortlist logic;
- all six critical-failure concepts;
- entity/contact separation;
- rate-confirmation discrepancy handling;
- progressive-event update that changes a prior candidate;
- remediation persistence;
- first-attempt evidence preservation;
- final competency calculation;
- completion/instructor-review state.

Run the test suite and report exact pass/fail counts and tested commit SHA.

---

# SOURCE FILES CLAUDE SHOULD READ BEFORE CODING
Use the current repository versions of these controls, plus any referenced files they point to:

- `00-ACADEMY-MASTER/MODULE-04-MASTER-BRANCH.md`
- `10-PRODUCTION/Module-04-Premium-Completion-QA-2026-09-02.md`
- `03-ASSESSMENTS/Instructor-Guides/Module-04-Instructor-Guide.md`
- current SIM-004 implementation/QA files
- `00-ACADEMY-MASTER/MODULE-05-MASTER-BRANCH.md`
- `10-PRODUCTION/Module-05-C-013-Regular-Closeout-QA-2026-08-30.md`
- `02-CURRICULUM/Module-05/Student-Manual-Part-01.md` through `Student-Manual-Part-07.md`
- `03-ASSESSMENTS/Instructor-Guides/Module-05-Instructor-Guide.md` on branch `academy-master-architecture`
- `03-ASSESSMENTS/Module-Exams/Module-05-Exam.md`
- `03-ASSESSMENTS/Practical-Assessments/Module-05-Practical.md`
- `03-ASSESSMENTS/Practical-Assessments/Modules-01-05-Instructor-Scoring-Guide.md`
- `04-STUDENT-TOOLS/Module-05-Tools/`
- `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`
- `00-ACADEMY-MASTER/INSTRUCTOR-GUIDE-PRODUCT-STANDARD.md`

Important branch note: current premium architecture work is on `academy-master-architecture`; the `agents/` handoff folder is on `main`. Inspect both deliberately. Do not accidentally overwrite newer premium controls with stale `main` copies.

---

# RETURN HANDOFF TO CHATGPT
When finished, create a Claude response/handoff file in `agents/` that states:
- exact files created/modified;
- branch(es) used;
- commit SHA(s);
- exact test commands;
- exact pass/fail counts;
- SIM-004 repairs made, if any;
- SIM-005 architecture/stage/decision count;
- critical-failure implementation locations;
- remediation/competency-record behavior;
- known limitations;
- anything intentionally deferred to release QA.

Do not claim `PUBLICATION_READY`.

Final target statuses, only if fresh verification supports them:

**SIM-004 — BUILD COMPLETE — RELEASE QA DEFERRED**

**SIM-005 — BUILD COMPLETE — RELEASE QA DEFERRED**
