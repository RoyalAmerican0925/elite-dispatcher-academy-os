# SIM-002 — Module 02 Agency Boundary Desk — Instructor Guide

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED  
**Instructor use only.**  
**Primary student asset:** `Module-02-Simulation-Student.md`  
**Runtime:** `05-SIMULATIONS-AND-GAMES/Module-02/runtime/`

## 1. Simulation Purpose

SIM-002 tests whether the learner can perform Module 02 boundary analysis under realistic dispatch conditions rather than recite definitions. It reinforces the Student Manual, Decision Tool, Exam, Practical, and remediation system.

It does not provide individualized legal advice and must not invent a legal safe harbor.

## 2. Required Operating Model

Every simulation debrief and remediation must align to:

**STOP → IDENTIFY → TRACE → CHECK → CLASSIFY → ACT → DOCUMENT → ESCALATE**

Instructor expectations:

- **STOP:** pause before acting on an incomplete or high-risk fact pattern;
- **IDENTIFY:** determine represented principal and actual relationship;
- **TRACE:** follow the freight opportunity to its source and determine whether a specific carrier was already tied to it;
- **CHECK:** distinguish verified facts from assumptions and examine allocation, compensation/fund flow, solicitation, agreements, and actual conduct;
- **CLASSIFY:** use carrier-side agency / insufficient verified information / significant brokerage risk based on controlling facts;
- **ACT:** require PROCEED, HOLD, VERIFY, ESCALATE, or DO NOT PROCEED AS PROPOSED;
- **DOCUMENT:** require a usable operational case record;
- **ESCALATE:** require a specific professional handoff when qualified review is needed.

This sequence is an **ACADEMY CONTROL MODEL**, not statutory text.

## 3. Learning Objectives

The learner must demonstrate that they can:

1. identify the represented carrier/principal;
2. trace the freight source;
3. distinguish known facts from unknown facts;
4. identify discretionary carrier allocation;
5. distinguish ordinary carrier-side coordination from broader arranging activity;
6. distinguish return/cancellation from reassignment;
7. reject contract-label, compensation, carrier-count, tax-status, non-overlap, or “not touching freight” safe harbors;
8. preserve insufficient information rather than guess;
9. identify what changed fact could change the classification;
10. choose and document an operational next action;
11. escalate with a fact-based handoff when appropriate.

## 4. Mastery Model

SIM-002 uses a mastery system, not a percentage grade:

- **FIRST-ATTEMPT PERFORMANCE:** X/15
- **FINAL MASTERY:** 15/15 required
- **REMEDIATION COUNT:** decisions requiring retry
- **COMPETENCY STATUS:** Mastered / Mastered After Remediation / Needs Instructor Review / In Progress

A written exam pass does not override an unresolved simulation high-stakes decision.

## 5. Decision Map

| ID | Core evidence | Correct instructional result |
|---|---|---|
| D01 | Principal | Meridian Line Freight |
| D02 | Known vs unknown | Relationship/equipment known; specific-load facts unknown |
| D03 | Carrier-side classification | Consistent with carrier-side agency on supplied facts |
| D04 | Controlling facts | One represented carrier + no competing-carrier selection |
| D05 | TRACE | Shipper supplied freight; dispatcher would select carrier |
| D06 | Allocation risk | Significant brokerage risk |
| D07 | Risk factors | Shipper-direct source + dispatcher carrier selection |
| D08 | Multiple-carrier reasoning | Multiple representation alone is not the controlling issue |
| D09 | Non-overlap reasoning | Relevant evidence on supplied facts, **not a safe harbor** |
| D10 | Return vs reassignment | Return opportunity to source |
| D11 | Allocation/compensation | Selection discretion is the core issue; compensation motive adds concern but is not a standalone test |
| D12 | Agreement label | Relevant evidence, not controlling by itself |
| D13 | Actual conduct | Significant brokerage risk despite label |
| D14 | Missing facts | Insufficient verified information + HOLD/VERIFY + document/escalate as needed |
| D15 | Full workflow | STOP → IDENTIFY → TRACE → CHECK → CLASSIFY → ACT → DOCUMENT → ESCALATE |

## 6. High-Stakes Runtime Decisions

The runtime retains repeated-error instructor-review escalation on:

- **D06** — discretionary allocation of shipper-supplied freight;
- **D10** — return/decline versus reassignment;
- **D13** — actual conduct contradicting the agreement label.

These are high-stakes simulation controls. Do **not** state that they map one-for-one to the Practical's critical-failure list. The Practical separately controls its own critical failures, including false-safe-harbor behavior.

## 7. False-Safe-Harbor Guardrails

Never teach or accept any of the following as a universal rule:

- “three carriers is safe”;
- “one carrier is always safe”;
- “non-overlap automatically makes the structure lawful”;
- “percentage compensation automatically means broker”;
- “carrier-paid compensation automatically means dispatcher”;
- “a bona fide-agent contract settles the issue”;
- “1099 status settles the issue”;
- “not touching freight means there is no brokerage.”

When a student uses one factor as the entire analysis, route them back to the full fact pattern and eight-stage model.

## 8. Stage Facilitation

### Stages 1–2: principal and ordinary carrier-side work
Require the learner to explain **why** the supplied facts support the classification. Do not accept answer-letter memorization.

### Stage 3: shipper-direct allocation
Ask the learner to TRACE the opportunity and identify who would exercise carrier-selection discretion. A repeated miss at D06 requires instructor review.

### Stage 4: overlapping versus non-overlapping carriers
Teach the contrast carefully. Overlap/non-overlap helps analyze whether a real allocation choice exists; neither fact creates a categorical safe harbor.

### Stage 5: rejected load
Require a source-to-disposition trace. The learner must distinguish returning the opportunity from taking control and selecting a replacement carrier.

### Stage 6: label versus conduct
Require the learner to compare the written relationship with actual practice. Labels cannot erase contradictory operating facts.

### Stage 7: incomplete file
This is the capstone decision. The learner must preserve **insufficient verified information** and use the complete workflow rather than the old four-step shortcut.

## 9. Remediation Rules

For any failed decision:

1. identify the failed competency;
2. route to the matching Module 02 manual/tool section;
3. use an alternate fact pattern where practical;
4. require corrected reasoning, not answer repetition;
5. preserve first-attempt evidence;
6. record final mastery separately;
7. retain instructor-review flags until resolved.

### Targeted remediation

| Error | Remediation |
|---|---|
| Principal confusion | Alternate principal-identification exercise |
| Source/control confusion | TRACE a new opportunity from source to proposed disposition |
| Allocation miss | Alternate overlapping-carrier scenario |
| Non-overlap safe-harbor error | Change one fact so overlap appears; require reclassification |
| Reassignment error | Side-by-side return vs redirect trace |
| Label reliance | Compare agreement text to contradictory conduct |
| Missing-fact guessing | Deliberately withhold facts; require UNKNOWN + HOLD/VERIFY |
| Weak action/documentation | Require case note, owner, deadline/trigger, and escalation question |

## 10. Instructor Debrief Questions

Use changed-fact questions rather than asking students to repeat the answer:

- What fact controlled your decision?
- What fact, if changed, would alter the classification?
- Who supplied the freight opportunity?
- Who would choose the carrier?
- What do you still not know?
- What evidence would verify it?
- What action happens now?
- What belongs in the case note?
- What exact question would you escalate?

## 11. Runtime Data and Persistence

The runtime preserves, per decision:

- first attempt response/correctness/timestamp;
- final response/correctness/timestamp;
- remediation used;
- attempt count;
- instructor-review state.

Overall state preserves simulation ID, current decision, status, start/completion fields, final mastery, and competency state as implemented by the runtime.

Do not represent browser-local/demo persistence as durable LMS production records.

## 12. Completion Standard

SIM-002 instructional completion requires:

1. all 15 decisions at final mastery;
2. no unresolved instructor-review condition;
3. full eight-stage model demonstrated on D14–D15;
4. no false-safe-harbor reasoning left unresolved;
5. remediation recorded where needed.

The simulation remains **BUILD COMPLETE — RELEASE QA DEFERRED** until production LMS/student-account persistence, production deployment, browser/device QA, manual accessibility QA, and final release controls are completed.

## 13. Source/Legal Control

Simulation classification language must stay within the Module 02 source framework and distinguish statute/regulation from FMCSA interpretive guidance and Academy control models. Do not add new legal conclusions during facilitation.

When an instructor is uncertain whether a real-world fact pattern requires broker authority or other regulatory treatment, the correct teaching behavior is to preserve uncertainty and route for qualified regulatory/legal review rather than improvise.