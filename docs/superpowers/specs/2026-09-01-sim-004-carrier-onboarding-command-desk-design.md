# SIM-004 — Module 04 Carrier Onboarding Command Desk — Design

**Design date:** 2026-09-01  
**Branch:** `academy-master-architecture`  
**Status:** APPROVED ARCHITECTURE IMPLEMENTATION — derived from the already-approved Academy simulation architecture and Module 04 alignment contract  
**Module:** 04 — Carrier & Driver Onboarding

## Purpose
SIM-004 tests whether the learner can turn a carrier onboarding packet into an operational readiness decision. It is not a document-name quiz and it does not create a parallel compliance curriculum.

The learner must use the Module 04 operating sequence:

**COLLECT → CLASSIFY → VERIFY → RECONCILE → PROTECT → DECIDE → DOCUMENT → TRACK**

The simulation must distinguish:
- document presence from verified/current status;
- carrier compliance responsibility from dispatcher operational readiness;
- a COI from current operating-authority verification;
- a W-9/entity mismatch from proof of fraud;
- a dispatch profile from the carrier's DQ/compliance program;
- driver/equipment profile completeness from load-specific qualification;
- a payment-change request from authenticated authorization;
- legal expiration, annual renewal, load-by-load verification, and carrier/best-practice review;
- carrier policy from law;
- contact information from decision authority.

## Scenario
The learner is onboarding fictional carrier **Lone Star Ridge Transport**. The file arrives in pieces and develops through progressive events rather than one static question set.

The simulation uses fictional records only. Date-sensitive federal procedures are isolated in a dedicated current-source artifact and decision so they can be replaced or disabled after reverification without rewriting the whole simulation.

## Stage Architecture

1. **Carrier File Intake** — identify what the packet proves and what remains unresolved.
2. **Authority / Insurance Reconciliation** — choose the right source and keep COI evidence limits separate from authority.
3. **W-9 / Entity Reconciliation** — treat mismatch as VERIFY, not fraud.
4. **Driver & Equipment Profiles** — distinguish operational profile from DQ/compliance ownership and identify missing readiness data.
5. **Credential / Endorsement Event** — reject a stated driver/load qualification conflict.
6. **Current Medical-Certification Event** — apply the current 2026 paper-MEC procedure cautiously without making a dispatcher-level final legal determination.
7. **Payment Change Event** — STOP and independently verify an untrusted redirect request.
8. **Scope / Compliance Request** — refuse to silently assume DQ/drug-alcohol compliance-program authority.
9. **Expiration / Policy / Authority Routing** — classify review triggers and distinguish policy from law/decision authority.
10. **Integrated Onboarding Disposition** — reconcile the whole file and issue a defensible readiness decision.

## Decision Model
Target: **20 decisions**, two per stage, using choice, multiselect and sequencing interactions.

### Competency codes
- A — Carrier identity/registration/authority source selection
- B — Insurance/COI evidence limits
- C — W-9/entity reconciliation
- D — Dispatch profile versus DQ/compliance boundary
- E — Driver/equipment operational profile completeness
- F — CDL/endorsement compatibility
- G — Current medical-certification verification discipline
- H — Payment/factoring change verification
- I — Expiration/currentness classification
- J — Carrier policy versus legal requirement
- K — Communication/decision-authority routing
- L — Integrated onboarding disposition

## Locked Critical-Failure Concepts
Exactly three runtime decisions receive repeated-error escalation, matching the current Module 04 Practical and Instructor Guide:

1. **Driver qualification/endorsement conflict** — do not dispatch a driver on a fictional load when the scenario expressly states the required endorsement is missing.
2. **Unverified payment redirect** — do not change payment instructions from an inbound request alone.
3. **Compliance-program scope takeover** — do not treat a dispatch profile or ordinary dispatch agreement as automatic authority to administer the carrier's DQ/drug-alcohol compliance program.

No additional critical failures are invented merely to make the simulation harder.

## Current-Date Isolation
The current NRII/paper-MEC event must live in a clearly marked artifact and decision. The runtime should state the current training control, but the README, student packet, instructor guide, and QA record must all flag the event for reverification before use after October 11, 2026 or if FMCSA procedure changes earlier.

The generic competency being tested is durable:

**current procedure + correct driver/document match + carrier process + appropriate handoff → operational decision without pretending the dispatcher is the final medical-qualification authority.**

## Evidence Model
SIM-004 preserves:
- immutable first attempt;
- final response/mastery;
- attempt count;
- remediation use;
- critical-decision instructor-review state;
- competency status;
- final integrated readiness decision;
- local persistence isolated under a SIM-004 key.

## Product Package
Required files:
- `Module-04-Simulation-Student.md`
- `Module-04-Simulation-Scenario-Packet.md`
- `Module-04-Simulation-Instructor-Guide.md`
- `Module-04-Simulation-Scoring-Rubric.md`
- `Module-04-Simulation-Completion-Record.md`
- `runtime/index.html`
- `runtime/styles.css`
- `runtime/content.js`
- `runtime/logic.js`
- `runtime/app.js`
- `runtime/package.json`
- `runtime/tests/logic.test.js`
- `runtime/README.md`
- `.github/workflows/sim004-runtime-tests.yml`

## Build Gate
SIM-004 may reach **BUILD COMPLETE — RELEASE QA DEFERRED** only after:
1. all product-package files exist;
2. decision/critical concepts are synchronized to Module 04;
3. automated logic tests pass in GitHub Actions on the tested commit;
4. independent ChatGPT content/runtime inspection is recorded;
5. date-sensitive content remains explicitly controlled.

Browser/device/accessibility/LMS/durable-record/branding/deployment/current-source release QA remains deferred.