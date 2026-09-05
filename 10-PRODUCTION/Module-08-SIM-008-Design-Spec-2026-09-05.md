# SIM-008 — Broker Negotiation Lab Design Specification

**Module:** 08 — Rate Negotiation & Broker Communication  
**Status:** APPROVED ARCHITECTURE FOR PREMIUM BUILD  
**Branch:** `academy-master-architecture`

## 1. Purpose
SIM-008 measures whether the learner can perform a realistic carrier-side broker negotiation from prepared economics and authority while facts, broker positions and commercial terms change.

It is not a multiple-choice quiz with decorative dialogue. The learner must create a chronological evidence trail and make decisions under uncertainty, resistance and authority pressure.

## 2. Employment Outcome
Given a verified opportunity and supplied Module 07 economics, the learner can:
- prepare a negotiating position;
- identify material unknowns;
- conduct discovery;
- distinguish statements from established facts;
- counter from truthful evidence;
- use controlled concessions and conditional trades;
- clarify agreement-specific terms;
- react correctly to material fact changes;
- protect carrier authority boundaries;
- document what is agreed, unresolved and not established;
- issue an ACCEPT / DECLINE / ESCALATE or agreed-in-principle status;
- hand the opportunity to Module 09 without falsely claiming booking completion.

## 3. Simulation Structure
Use **12 progressive stages** to mirror the module's strongest occupational flow while remaining distinct from the Practical.

### Stage 1 — Carrier File & Readiness
Learner receives carrier/equipment/authority profile plus incomplete opportunity facts. Must classify readiness and identify material unknowns.

### Stage 2 — Position Build
Learner imports supplied Module 07 economics and distinguishes broker offer, target, floor and walk-away/approval condition.

### Stage 3 — Broker Opening
Learner opens professionally and selects/constructs purposeful discovery actions.

### Stage 4 — Broker Statements vs Facts
Broker provides vague schedule and market assertions. Learner must preserve source/status rather than convert statements into facts.

### Stage 5 — First Counter
Enough facts are supplied for an evidence-supported counter. Learner must use truthful leverage only.

### Stage 6 — Resistance & Silence
Broker resists and pauses. Learner must avoid uncontrolled self-negotiation.

### Stage 7 — Conditional Trade
Broker offers a non-rate operating condition plus partial rate movement. Learner must evaluate whether the condition is actually established and whether movement remains within authority.

### Stage 8 — Agreement-Specific Terms
Learner must apply TRIGGER → AMOUNT/METHOD → EVIDENCE → PROCESS to a detention/extra-stop/other term without inventing universal values.

### Stage 9 — Material Fact Change
A stop, mileage, appointment or operating fact changes. Learner must invalidate stale assumptions/position where material and route back to verification/economic review.

### Stage 10 — Authority Pressure
Broker offers a number just below a revised supplied floor and demands immediate commitment. Learner must escalate/decline/hold for approval rather than treat proximity as authority.

### Stage 11 — Closeout Classification
Learner builds three buckets: AGREED IN PRINCIPLE / UNRESOLVED / NOT DISCUSSED-NOT ESTABLISHED.

### Stage 12 — Module 09 Handoff
Learner selects final Module 08 status and generates a concise handoff containing negotiated points, unresolved terms, statements needing document confirmation and next action. BOOKED is not an available successful Module 08 conclusion.

## 4. Competency Families
SIM-008 must collect observable evidence for all 15 master competencies:
- M08-C01 preparation from verified facts;
- M08-C02 Module 07 economic-position import;
- M08-C03 asking/target/floor/walk-away distinction;
- M08-C04 professional opening/no misrepresentation;
- M08-C05 purposeful discovery;
- M08-C06 listening/constraint/source-status discipline;
- M08-C07 evidence-supported counter;
- M08-C08 truthful leverage;
- M08-C09 conditional trade/concession control;
- M08-C10 agreement-specific term clarification;
- M08-C11 professional resistance handling;
- M08-C12 authority discipline/escalation;
- M08-C13 accurate resolved/unresolved classification;
- M08-C14 negotiation documentation + Module 09 handoff;
- M08-C15 professional decline when required.

No competency may be marked mastered merely because the learner visited a stage. Evidence must come from scored action/decision/output.

## 5. Controlled Critical-Failure Families
Exactly six:

**CF-01 — Below-floor unauthorized acceptance**  
Knowingly accepts below supplied floor when approval is required and absent.

**CF-02 — Fabricated leverage**  
Invents competing offer, market fact, truck/driver fact, urgency or equivalent leverage.

**CF-03 — Material fact misrepresentation**  
Materially misstates carrier/truck/driver/equipment/load/operating facts.

**CF-04 — Unauthorized carrier commitment**  
Promises or commits a term outside supplied authority.

**CF-05 — False agreement state**  
Classifies material unresolved term as agreed/established.

**CF-06 — Premature booking representation**  
Represents verbal alignment as BOOKED before Module 09 controls.

Do not add a seventh critical family without architecture revision.

## 6. Decision Design
SIM-008 should contain at least **24 meaningful decisions/actions** across the 12 stages. Not every interaction must be multiple choice.

Use a mix of:
- classification decisions;
- short structured text;
- selection of purposeful discovery questions;
- counter amount/position choice from supplied bounds;
- condition construction;
- source-status classification;
- closeout bucket placement;
- final status/handoff generation.

Avoid trivia and obvious cartoonishly bad distractors. Wrong choices should represent plausible beginner mistakes.

## 7. Scenario Ambiguity Rules
- Highest rate is not automatically the best action.
- Broker urgency does not expand authority.
- Broker statements are not automatically lies or verified truths.
- A favorable non-rate term is not valuable until its meaning/status is sufficiently established.
- Reaching floor does not resolve every material term.
- Material fact changes can invalidate a previously sound position.
- ESCALATE can be the strongest answer.
- DECLINE can be the strongest answer.
- A professional learner may continue negotiating without revealing internal carrier economics.

## 8. First-Attempt Evidence
For every scored decision preserve:
- stage ID;
- decision ID;
- prompt/facts visible at time;
- learner first response;
- timestamp/order;
- score/evidence flags;
- competency tags;
- critical-failure trigger if any.

A later correction must not overwrite first-attempt evidence.

## 9. Remediation
For noncritical errors:
- explain the missed decision rule;
- provide a short changed example;
- record corrected evidence separately.

For critical failure:
- preserve original action;
- identify CF family;
- explain occupational consequence;
- require materially different reassessment;
- keep CF unresolved until competent reassessment is completed.

The same prompt repeated with the answer revealed does not qualify as reassessment.

## 10. Scoring
Recommended runtime score:
- 30 weighted points for decision quality;
- passing raw score 24/30;
- all required competency families must have sufficient evidence;
- zero unresolved critical failures.

The runtime may accumulate more than 30 internal evidence events but should normalize/report the practical-compatible 30-point outcome for coherence.

## 11. Completion Record
Export/printable summary should contain:
- learner/session identifier;
- first-attempt raw score;
- final post-remediation score/state;
- 15-competency map;
- triggered/resolved/unresolved CF families;
- remediation/reassessment history;
- final status;
- instructor-review state;
- note that local/browser output is not represented as durable LMS record unless actual integration exists.

## 12. Content / Code Separation
Runtime should separate:
- scenario/stage content;
- pure scoring/critical-rule logic;
- state/evidence persistence;
- user interface;
- tests.

Do not hard-code answer logic invisibly into presentation markup where it cannot be independently tested.

## 13. Test Contract
Before implementation, write failing tests for at least:
1. exactly 12 stages;
2. all 15 competency IDs represented;
3. exactly six CF families;
4. stage progression cannot reveal future-stage facts;
5. first-attempt response cannot be overwritten;
6. CF-01 through CF-06 trigger correctly;
7. ordinary weak response does not incorrectly become a new CF family;
8. critical failure persists after simple correction;
9. materially different reassessment can resolve CF;
10. closeout buckets preserve unresolved terms;
11. successful Module 08 final state cannot be BOOKED;
12. completion requires raw threshold + competency evidence + no unresolved CF;
13. exported summary distinguishes first-attempt and corrected performance.

## 14. Answer-Key Isolation
Student runtime must not expose:
- correct-choice flags;
- future broker moves;
- instructor rationale;
- hidden thresholds beyond facts legitimately supplied to learner;
- remediation answer text before first attempt.

## 15. Boundary Controls
M07 owns profitability arithmetic. SIM-008 may consume supplied economics but should not become a rate-math exam.

M09 owns formal booking/rate-confirmation review. SIM-008 must stop at negotiation handoff.

M11 owns detailed HOS feasibility. Use schedule facts as supplied constraints rather than requiring logbook calculation.

M13/M14 own deeper exception and billing workflows.

## 16. Build Gate
SIM-008 can reach only:

**BUILD COMPLETE — RELEASE QA DEFERRED**

when all package documents/runtime/tests exist and independent review confirms actual behavior.

Browser/device/LMS/manual-accessibility/durable-record/commercial-release QA remains a separate gate. `PUBLICATION_READY` is prohibited from content/runtime testing alone.