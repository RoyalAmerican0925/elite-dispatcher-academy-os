# Module 08 Master Branch — Rate Negotiation and Broker Communication

**Control status:** BUILD COMPLETE — RELEASE QA DEFERRED

## Employment outcome
The student can prepare for a broker rate conversation, establish a carrier-specific negotiating position from verified facts and Module 07 economics, conduct professional discovery, make evidence-supported counters and conditional trades, protect supplied authority limits, document the conversation, and issue an ACCEPT / DECLINE / ESCALATE decision without confusing negotiation with formal booking.

## Prerequisites
- Module 02 — agency and dispatcher/broker boundary controls.
- Module 06 — entity/contact/load/payment verification discipline.
- Module 07 — rate mathematics, total-trip economics and profitability decision support.

## Operating framework
**PREPARE → VERIFY FACTS → SET POSITION → OPEN → QUESTION → LISTEN → COUNTER → TRADE → CONFIRM → DOCUMENT → ACCEPT / DECLINE / ESCALATE**

## Decision language
- PREPARED
- VERIFY BEFORE COUNTER
- TARGET
- FLOOR / MINIMUM SUPPLIED POSITION
- WALK-AWAY
- COUNTER
- CONDITIONAL TRADE
- AGREED IN PRINCIPLE / PENDING BOOKING CONTROL
- DECLINE
- ESCALATE

## Competency map
| ID | Competency | Manual | Tool | KC/Exam | Practical | SIM-008 |
|---|---|---|---|---|---|---|
| M08-C01 | Build a negotiation position from verified load/carrier facts | P02 | Preparation Sheet | Assess | Apply | Apply |
| M08-C02 | Convert Module 07 economics into supplied target/floor/walk-away positions | P02 | Target/Floor/Walk-Away | Assess | Apply | Apply |
| M08-C03 | Distinguish asking rate, target, floor/minimum and walk-away | P01-P02 | Position Worksheet | Assess | Apply | Apply |
| M08-C04 | Open professionally and identify role/load without misrepresentation | P01/P03 | Discovery Sheet | Assess | Apply | Critical |
| M08-C05 | Ask purposeful discovery questions and isolate missing/material facts | P03 | Discovery Sheet | Assess | Apply | Apply |
| M08-C06 | Listen for constraints, objections, assumptions and usable evidence | P03 | Call Record | Assess | Apply | Apply |
| M08-C07 | Construct an evidence-supported counteroffer | P04 | Counteroffer Builder | Assess | Apply | Apply |
| M08-C08 | Use truthful leverage and reject fabricated leverage | P01/P04 | Counteroffer Builder | Critical | Critical | Critical |
| M08-C09 | Use conditional trades/concessions rather than uncontrolled concessions | P04 | Concession & Trade Log | Assess | Apply | Apply |
| M08-C10 | Clarify agreement-specific accessorial/operating terms without inventing universal amounts | P05 | Call Record | Assess | Apply | Apply |
| M08-C11 | Maintain professional communication under resistance | P03-P06 | Call Record | Assess | Apply | Apply |
| M08-C12 | Stay within supplied carrier/dispatcher authority and escalate when needed | P01/P06 | Decision Record | Critical | Critical | Critical |
| M08-C13 | Confirm agreed, unresolved and conditional terms accurately | P05-P06 | Call Record | Assess | Critical | Critical |
| M08-C14 | Document negotiation and hand off to Module 09 without falsely representing booking completion | P06 | Call Record + Decision Record | Critical | Critical | Critical |
| M08-C15 | Decline professionally when opportunity fails supplied carrier requirements | P04/P06 | Decision Record | Assess | Apply | Apply |

## Student manual architecture
1. Part 01 — Negotiation Foundations & Professional Positioning
2. Part 02 — Pre-Negotiation Intelligence
3. Part 03 — Broker Call Discovery
4. Part 04 — Counteroffers & Value-Based Negotiation
5. Part 05 — Terms Beyond the Headline Rate
6. Part 06 — Closing, Documentation & Difficult Conversations

The six-part student curriculum was audited against the premium framework on 2026-09-05. Core content is KEEP — ACTIVE; no cosmetic rewrite is required.

## Required tools
All seven required tools exist:
1. Negotiation Preparation Sheet
2. Target/Floor/Walk-Away Worksheet
3. Broker Discovery Call Sheet
4. Counteroffer Builder
5. Concession & Trade Log
6. Negotiation Call Record
7. Accept/Decline/Escalate Decision Record

## Assessment chain
**TEACH → DEMONSTRATE → PRACTICE → KNOWLEDGE CHECK → APPLIED LAB → EXAM → PRACTICAL → SIMULATE → REMEDIATE → RECORD COMPETENCY**

### Applied Lab
`03-ASSESSMENTS/Module-08/Broker-Negotiation-Applied-Lab.md`

Instructor answer/rationale control:
`03-ASSESSMENTS/Module-08/Broker-Negotiation-Applied-Lab-Answer-and-Rationale-Control.md`

### Practical
`03-ASSESSMENTS/Module-08/Broker-Negotiation-Desk-Practical.md`

Passing standard: **24/30 AND zero unresolved critical failures.**

Permanent scoring/remediation control:
`03-ASSESSMENTS/Module-08/Broker-Negotiation-Desk-Practical-Scoring-and-Remediation-Control.md`

### Instructor control
Dedicated premium instructor guide:
`03-ASSESSMENTS/Instructor-Guides/Module-08-Instructor-Guide.md`

It controls competency evidence, demonstrations, progressive release, first-attempt preservation, six critical-failure families, materially different reassessment, scope boundaries and release-status discipline.

### Controlled critical-failure families
Exactly six:
1. Knowingly accepts below a supplied carrier minimum/floor when supplied facts require authorization and no authorization is present.
2. Fabricates competing offers, market facts, truck position, driver facts or other leverage.
3. Materially misrepresents carrier/truck/driver/load facts.
4. Commits the carrier outside supplied authority.
5. Treats an unresolved material term as agreed.
6. Represents verbal negotiation/agreement-in-principle as completed booking before Module 09 controls.

No seventh critical family is authorized without architecture revision.

## Remediation control
- First-attempt evidence remains in the record.
- A correction does not erase a critical failure.
- Critical reassessment uses materially different facts.
- Corrected performance is recorded separately.
- Raw score cannot override an unresolved critical failure.
- Resolved critical history is labeled RESOLVED BY REASSESSMENT rather than rewritten as no failure observed.

## SIM-008 — Broker Negotiation Lab

Design specification:
`10-PRODUCTION/Module-08-SIM-008-Design-Spec-2026-09-05.md`

Permanent package:
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Student-Instructions.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Scenario-and-Evidence-Packet.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Instructor-Guide.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Scoring-and-Competency-Map.md`
- `05-SIMULATIONS-AND-GAMES/Module-08/SIM-008-Completion-and-Competency-Record.md`
- browser runtime and automated tests under `05-SIMULATIONS-AND-GAMES/Module-08/runtime/`

Verified architecture:
- exactly 12 progressive stages;
- 24 meaningful decisions/actions;
- all 15 competency families evidenced;
- exactly six critical-failure families;
- broker resistance, silence, conditional trades, changed facts, agreement-specific terms, authority pressure, three-bucket closeout and Module 09 handoff;
- first-attempt persistence;
- materially different critical reassessment;
- printable competency summary;
- practical-compatible 30-point scaled first-attempt score;
- no successful `BOOKED` status inside Module 08.

**Current SIM state:** BUILD COMPLETE — RELEASE QA DEFERRED.

## Automated verification
GitHub Actions workflow: `SIM-008 Runtime Tests`  
Run ID: `33979248568`  
Tested commit: `23d44bbeb7cabe0474e895d03387ba184809828d`  
Conclusion: **success**

Full test command covers runtime logic, premium architecture/state controls and package alignment.

Independent QA:
`10-PRODUCTION/SIM-008-Premium-Content-QA-2026-09-05.md`

QA result: **PASS — BUILD COMPLETE / RELEASE QA DEFERRED**.

## Boundary controls
- M02 owns advanced agency/legal boundary analysis.
- M06 owns deeper broker/entity/contact/load/payment verification.
- M07 owns profitability mathematics.
- M08 owns negotiation preparation, communication, countering, trading, confirmation and negotiation documentation.
- M09 owns formal booking, rate-confirmation review and dispatch-document handoff.
- M11 owns detailed HOS/ELD feasibility.
- M13 owns deeper detention/TONU/exception handling.
- M14 owns billing/factoring/closeout.

## Source/currentness controls
- Do not teach market-rate claims as timeless facts.
- Do not teach platform-specific data as universal industry truth.
- Accessorial amounts, trigger conditions and payment terms are agreement-specific unless an authoritative rule controls the point.
- Do not imply a verbal negotiation automatically creates the Academy's completed-booking status.
- Any federal legal/regulatory statement used in final content must be reverified before commercial release.

## Premium audit evidence
Repository audit:
`10-PRODUCTION/Module-08-Premium-Repository-Audit-2026-09-05.md`

Implementation plan:
`10-PRODUCTION/Module-08-Premium-Implementation-Plan-2026-09-05.md`

Premium SIM QA:
`10-PRODUCTION/SIM-008-Premium-Content-QA-2026-09-05.md`

The premium pass repaired material package defects, replaced the obsolete 15-stage/19-decision runtime contract with the locked 12-stage/24-decision architecture, added durable critical-family evidence and materially different reassessment, and completed the five-document simulation package.

## Premium gate
The module passes the content/runtime build gate for:
- **Google Test:** operational decision training rather than generic negotiation tips.
- **Employment Test:** learner performs preparation, discovery, countering, authority control, documentation, closeout and handoff work.
- **Buyer-Value Test:** six manuals, seven desk tools, guided lab, final exam, graded practical, instructor control, premium simulation, remediation logic and competency records form a coherent occupational package.

## Release status rule
Current truthful status:

**BUILD COMPLETE — RELEASE QA DEFERRED**

Still deferred before `PUBLICATION_READY`:
- browser/device compatibility QA;
- production deployment validation;
- LMS/student-account integration;
- durable production records;
- manual accessibility QA;
- final release packaging QA.

Nothing here authorizes a merge to `main`.
