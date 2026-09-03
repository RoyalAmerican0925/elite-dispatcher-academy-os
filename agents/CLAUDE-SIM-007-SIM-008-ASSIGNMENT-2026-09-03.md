# CLAUDE ASSIGNMENT — SIM-007 + SIM-008

**Date:** 2026-09-03  
**Repository:** RoyalAmerican0925/elite-dispatcher-academy-os

## Branch warning
The current academy architecture and premium controls are on `academy-master-architecture`. The `agents/` folder is on `main`. Read the premium branch deliberately. Do not overwrite newer architecture content with stale main-branch copies. Do not merge branches.

---

# SIM-007 — Profitability Decision Desk

## Current module state
Module 07 is **Rate Mathematics & Profitability**. Current control status is production draft / premium-depth and full-component audit required. Existing curriculum includes three student-manual parts, formulas, worked examples, additional scenarios, exam, answer key, practical, practical scoring, and student tools. SIM-007 is planned and is the next simulation after SIM-006.

## Required source files
Read before coding:
- `00-ACADEMY-MASTER/MODULE-07-MASTER-BRANCH.md`
- all `02-CURRICULUM/Module-07/` manuals
- all Module 07 student tools
- Module 07 Knowledge Check
- Module 07 Exam + answer key
- Module 07 Practical + scoring guide
- Module 07 instructor/reference materials that currently exist
- `00-ACADEMY-MASTER/SIMULATION-ARCHITECTURE.md`
- current Academy assessment/remediation policy

## Employment outcome
The student must be able to calculate and compare competing load economics using **total trip miles** and carrier-specific costs, distinguish gross revenue/cash flow/profit concepts, identify loaded-mile blindness, evaluate factoring/quick-pay/accessorial effects, and explain why the higher headline rate is not always the stronger operating decision.

## Core competency families
- gross load revenue versus profit
- loaded miles / deadhead / total trip miles
- loaded RPM versus effective RPM
- fuel-cost calculation
- carrier-cost and contribution-margin reasoning
- break-even analysis
- accessorial economics
- factoring / quick-pay effects
- competing-load comparison
- destination positioning
- carrier-specific decision criteria

## Simulation character
This is a dispatcher profitability desk, not a calculator quiz.

Use realistic fictional load offers with incomplete/competing operational information. The learner should receive multiple plausible loads and must determine what is known, what is missing, what must be calculated, what must be verified, and what best serves the carrier under the supplied assumptions.

Required progressive conditions should include, where supported by the current curriculum:
- one load with a higher headline rate but substantially more deadhead;
- one load with a lower headline rate but stronger effective RPM or contribution result;
- fuel-price or fuel-burn input supplied as fictional training data;
- accessorial possibility that cannot be counted as guaranteed revenue until actually earned/approved under the supplied terms;
- factoring or quick-pay effect that changes cash received but must not be confused with gross revenue or true profitability;
- destination positioning/truck-reload consideration;
- missing cost or mileage fact that requires VERIFY rather than invention;
- a later event that changes economics after the learner's initial ranking.

Do not hard-code market prices as universal facts. Any fuel/market figure used for arithmetic must be clearly fictional training data or tied to an authoritative current source.

## Decision evidence
Preserve separately:
- first-attempt calculations;
- first-attempt ranking;
- calculation errors by competency family;
- decision/reasoning evidence;
- remediation assigned/completed;
- corrected calculations;
- corrected/final ranking;
- final mastery;
- instructor-review state.

Remediation must not erase first-attempt evidence.

## Critical-failure principles
Do not invent arbitrary critical failures. Synchronize to actual Module 07 assessment controls. At minimum, test for severe reasoning failures such as:
- choosing a load solely from headline rate while ignoring supplied deadhead/total-trip economics;
- treating loaded RPM as if it were automatically effective RPM;
- counting unearned/conditional accessorial revenue as guaranteed;
- treating cash-flow timing or factoring advance as equivalent to profit;
- inventing missing cost/mileage data instead of verifying or flagging uncertainty.

If current Module 07 practical/scoring defines exact critical failures, those controls govern.

## Build package
Follow sound SIM-001 through SIM-006 conventions where applicable:
- runtime UI
- scenario/content data separated from logic where practical
- calculation and scoring logic
- competency state
- remediation
- README
- automated tests
- instructor/QA notes

## Automated tests
Cover at minimum:
- arithmetic correctness;
- total-trip-mile calculation;
- loaded vs effective RPM distinction;
- fuel-cost calculation;
- contribution/break-even reasoning where taught;
- competing-load comparison;
- accessorial handling;
- factoring/quick-pay distinction;
- missing-info VERIFY behavior;
- progressive event reprioritization;
- first-attempt evidence preservation;
- remediation persistence;
- final competency calculation;
- instructor-review/completion state.

Run fresh tests and report exact command, pass/fail count, tested commit SHA, files changed, stage/decision count, critical-control locations, known limitations and release-QA deferrals.

Target status only if fresh verification supports it:
**SIM-007 — BUILD COMPLETE — RELEASE QA DEFERRED**

---

# SIM-008 — Broker Negotiation Lab

## IMPORTANT DESIGN GATE
The current architecture control says Module 08 is **Rate Negotiation and Broker Communication**, but its production curriculum assets are not yet present. The architecture explicitly states that **SIM-008 is to be specified only after Module 08 curriculum design is locked**.

At the time this assignment was created, `02-CURRICULUM/Module-08/` was not present on `academy-master-architecture`.

Therefore:

### Claude must first check whether Module 08 curriculum/design has been locked by the time this assignment is executed.
- If a current locked Module 08 design/curriculum now exists, read it and proceed with a full SIM-008 build aligned to that actual content.
- If Module 08 is still only a verified planned scope, **do not invent or fabricate the curriculum**. Return a design-gate handoff that states SIM-008 is blocked pending Module 08 curriculum lock and lists the exact inputs needed.

## Verified Module 08 scope
- Title: Rate Negotiation and Broker Communication
- Primary purpose: prepare, negotiate, document and escalate rate discussions.
- Dependencies: Module 02 and Modules 06–07.
- Simulation name: **SIM-008 — Broker Negotiation Lab**

## If the curriculum is locked, required simulation behavior
Build a realistic negotiation desk, not a scripted quiz. The learner should have to prepare from carrier economics and verification constraints, communicate professionally, respond to broker counteroffers, document concessions/terms, recognize when information is missing, and escalate or stop when authority/scope/risk boundaries are crossed.

Use only competencies actually supported by the locked Module 08 content. Do not smuggle later Module 09 booking/rate-confirmation workflow into SIM-008 unless the locked curriculum deliberately imports that competency.

Potential interaction families to test **only if supported by the locked Module 08 curriculum**:
- opening position and target rate;
- carrier cost/economic floor imported from Module 07;
- broker communication tone and professional language;
- counteroffer reasoning;
- concession control;
- accessorial/term clarification;
- documenting what was offered/accepted/rejected;
- distinguishing negotiation from unauthorized brokerage activity under Module 02 boundaries;
- broker/contact verification awareness imported from Module 06;
- STOP / VERIFY / ESCALATE when a material fact is unresolved;
- final negotiated disposition.

## If full build is allowed
Preserve first-attempt negotiation decisions, evidence/reasoning, remediation, corrected/final decisions, final mastery and instructor-review state separately. Include runtime, data/logic separation where practical, tests, README and QA notes. Run fresh tests and report exact evidence.

Target status only if the locked curriculum exists and fresh verification supports it:
**SIM-008 — BUILD COMPLETE — RELEASE QA DEFERRED**

Otherwise return:
**SIM-008 — DESIGN GATE BLOCKED PENDING MODULE 08 CURRICULUM LOCK**

---

# Required Claude return handoff
Create a response file in `agents/` stating:
- branch(es) used;
- exact files created/modified;
- commit SHA(s);
- exact test commands;
- exact pass/fail counts;
- SIM-007 stage/decision architecture;
- Module 07 assessment/critical-control alignment;
- SIM-008 gate result;
- if SIM-008 built, its stage/decision architecture and assessment alignment;
- first-attempt/remediation/competency-record behavior;
- known limitations;
- release-QA deferrals;
- no `PUBLICATION_READY` claim.