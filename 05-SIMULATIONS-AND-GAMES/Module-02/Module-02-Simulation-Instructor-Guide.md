# SIM-002 — Module 02 Agency Boundary Desk — Instructor Guide

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Instructor use only.** Do not distribute to students. Contains answer logic, branching reasoning, and internal production data not present in the student version.
**Note on file structure:** Following the approved SIM-001-R1 pattern, this guide consolidates the "Decision Map" and "Remediation Guide" into one document — remediation logic is instructor-facing and reads better alongside the answer reasoning it responds to. The student-facing branching lives in `Module-02-Simulation-Student.md`.

---

## Simulation Purpose

SIM-002 trains a student to recognize the operational boundary between carrier-side dispatch activity, situations requiring more facts, and conduct presenting significant brokerage risk — by analyzing actual conduct across a realistic week of dispatch decisions, not by memorizing definitions. It reinforces — and does not replace — the Module 02 Student Manual, Knowledge Check, Exam, and Practical Assessment. It does not provide individualized legal advice.

## Learning Objectives

1. Identify who you represent and distinguish that from other parties in a transaction.
2. Distinguish a straightforward carrier-side opportunity from one requiring more facts or presenting risk.
3. Recognize the shipper-direct allocation-of-traffic pattern: freight supplied directly by a shipper, with the dispatcher choosing among carriers.
4. Distinguish representing multiple carriers (not itself a problem) from discretionary allocation of a specific opportunity among them (the actual risk factor).
5. Distinguish returning/declining a rejected opportunity from taking control of it and reassigning it — including when compensation creates a motive to reassign.
6. Recognize that a contract label (e.g., "bona fide agent") does not by itself decide classification — actual conduct does.
7. Apply STOP → IDENTIFY → CHECK → ESCALATE when controlling facts are missing, rather than guessing in either direction.

## Setup Instructions

No special software required today. Provide `Module-02-Simulation-Student.md` directly, or print it (see Scenario Packet for artifacts in isolation). Instruct the student to record their answer to each decision before reading that stage's Feedback section — the document is structured with prompts grouped first, then feedback, to preserve this discipline in a printable format.

## Expected Student Path

A well-prepared student (Module 02 manual completed first) should move through all seven stages with zero or one incorrect attempts per decision. Stage 3 (shipper-direct) and Stage 6 (label vs. conduct) are the two stages most likely to require remediation, since they test the module's core, most commonly-missed distinction. A student who repeatedly misses SIM02-D06, D10, or D13 is showing exactly the misunderstanding the Module 02 Practical's own critical-failure criteria are built to catch — treat repeated escalation on any of these three as a signal for direct instructor conversation, not just more automated retries.

## Mastery Model (No Point-Based Scoring)

Following the SIM-001-R1 correction, SIM-002 uses a pure mastery model from the start — no percentage grade:

- **FIRST-ATTEMPT PERFORMANCE:** X / 15 decisions correct before any remediation
- **FINAL MASTERY:** 15 / 15 required for completion
- **REMEDIATION COUNT:** number of decisions that required remediation to reach final-correct
- **COMPETENCY STATUS** per category (A–H): Mastered / Mastered After Remediation / Needs Instructor Review / In Progress

Competency categories are an instructional grouping only — they carry no points and gate nothing.

## Multiselect Tracking (New in SIM-002)

Four decisions (D02, D04, D07, D11) use a "select all that apply" format, evaluated as an exact match against the full correct set — partial credit is not given; selecting some but not all correct options, or selecting any incorrect option, counts as that attempt being incorrect. This is tracked identically to single-choice decisions using the same first-attempt/final-mastery rule.

## Normalized Decision Table

| ID | Stage | Type | Competency | Prompt Summary | Correct Response | Incorrect Response Pattern | Remediation | Retry | Next State |
|---|---|---|---|---|---|---|---|---|---|
| SIM02-D01 | 1 | Choice | A | Who do you represent | B — Meridian Line Freight LLC | Confusing broker/shipper/best-rate-carrier with the actual represented carrier | Module 02 Student Manual §5–6 | Re-attempt after remediation text | SIM02-D02 |
| SIM02-D02 | 1 | Multiselect | B | Known vs. unknown facts | Relationship + equipment/lanes only | Assuming today's specific-load facts are known before they're presented | Module 02 Student Manual §5–6 | Immediate re-attempt within Stage 1 Feedback | Stage 2 |
| SIM02-D03 | 2 | Choice | C | Classify Opportunity A pattern | A — Consistent with Carrier-Side Agency | Overcomplicating a straightforward one-carrier offer | Module 02 Student Manual §5, 9 | Re-attempt after remediation text | SIM02-D04 |
| SIM02-D04 | 2 | Multiselect | C | Supporting facts for D03 | One-offer + no-choice-required | Crediting broker involvement or pay level as classification factors | Module 02 Student Manual §9 | Immediate re-attempt within Stage 2 Feedback | Stage 3 |
| SIM02-D05 | 3 | Choice | B | Source/control of Opportunity B pattern | B — shipper direct, dispatcher selects | Misreading who supplied the freight and who chooses the carrier | Module 02 Student Manual §7 | Re-attempt after remediation text | SIM02-D06 |
| SIM02-D06 | 3 | Choice | D | Classify shipper-direct allocation | C — Significant Brokerage Risk | Treating shipper-direct multi-carrier selection as ordinary dispatching or merely "more facts needed" | Module 02 Student Manual §9–10 | Re-attempt after remediation text | SIM02-D07 |
| SIM02-D07 | 3 | Multiselect | D | Risk factors for D06 | Shipper-direct + dispatcher-chooses-carrier | Crediting load count or communication channel as risk factors | Module 02 Student Manual §9–10 | Immediate re-attempt within Stage 3 Feedback | Stage 4 |
| SIM02-D08 | 4 | Choice | D | Overlapping-carrier roster | B — representing multiple is not itself the problem | Treating carrier count/overlap alone as automatically safe or automatically prohibited | Module 02 Student Manual §10–11 | Re-attempt after remediation text | SIM02-D09 |
| SIM02-D09 | 4 | Choice | D | Non-overlapping-carrier contrast | A — no allocation choice exists | Treating representing two carriers as inherently risky, or requiring compensation info to classify | Module 02 Student Manual §11 | Re-attempt after remediation text | Stage 5 |
| SIM02-D10 | 5 | Choice | F | Rejected load — what to do | A — return to source | Reassigning, holding, or compensation-driven reassignment instead of returning | Module 02 Student Manual §12, Myth 9 | Re-attempt after remediation text | SIM02-D11 |
| SIM02-D11 | 5 | Multiselect | F | Why reassignment (Opportunity D) is risky | Allocation-discretion + compensation-motive | Crediting delivery speed or broker awareness as the risk factors | Module 02 Student Manual §12 | Immediate re-attempt within Stage 5 Feedback | Stage 6 |
| SIM02-D12 | 6 | Choice | E | Does the "bona fide agent" label settle it | B — label is evidence, not controlling | Treating the label as either fully controlling or fully irrelevant | Module 02 Student Manual §6, 16 | Re-attempt after remediation text | SIM02-D13 |
| SIM02-D13 | 6 | Choice | E | Classify actual conduct vs. label (Opportunity E) | B — Significant Brokerage Risk | Letting the "bona fide agent" label override the described receive-first-then-allocate conduct | Module 02 Student Manual §6, 16, Myth 8–9 | Re-attempt after remediation text | Stage 7 |
| SIM02-D14 | 7 | Choice | G | Missing-facts response | C — STOP/IDENTIFY/CHECK/ESCALATE | Guessing safe or guessing risky instead of identifying and checking the specific gap | Module 02 Student Manual §21 (Decision Tool) | Re-attempt after remediation text | SIM02-D15 |
| SIM02-D15 | 7 | Sequencing | H | Sequence the response | STOP → IDENTIFY → CHECK → ESCALATE | Any other order, especially identifying before stopping | Module 02 Student Manual §21 (Decision Tool) | Immediate re-attempt within Stage 7 Feedback | Simulation Complete |

**FIRST-ATTEMPT TRACKED: YES** and **FINAL-MASTERY TRACKED: YES** for all 15 decisions, no exceptions.

## Critical-Concept Escalation (Three Decisions, Not One)

Unlike SIM-001 (one critical decision), SIM-002 has three: **SIM02-D06, SIM02-D10, and SIM02-D13**. This mirrors the Module 02 Practical's own critical-failure criteria, which name Opportunities B and D specifically and treat Opportunity E's label-versus-conduct issue as carrying the same weight — three separate instances of the same underlying allocation-of-traffic risk, not one canonical example the curriculum happens to repeat. Each escalates to `instructorReviewRequired` after 2 incorrect attempts, matching SIM-001's precedent, and clears automatically if a later attempt is correct (e.g., after direct instructor intervention).

## Remediation Paths (Summary Table)

| If the student confuses... | Route them to... | Applies to |
|---|---|---|
| Who they represent | Module 02 Student Manual §5–6 | D01, D02 |
| Ordinary carrier-side sourcing vs. risk | Module 02 Student Manual §5, 9 | D03, D04 |
| Shipper-direct allocation risk | Module 02 Student Manual §9–10, Myth 3 | D05, D06, D07 |
| Representing multiple carriers vs. discretionary allocation | Module 02 Student Manual §10–11, Myth 2 | D08, D09 |
| Return/decline vs. reassignment | Module 02 Student Manual §12, Myth 9 | D10, D11 |
| Contract labels vs. actual conduct | Module 02 Student Manual §6, 16, Myths 4, 8 | D12, D13 |
| Missing-fact guessing instead of STOP/IDENTIFY/CHECK/ESCALATE | Module 02 Student Manual §21 (Decision Tool Worksheet) | D14, D15 |

**General principle:** do not punish ordinary beginner errors with excessive failure mechanics. Every remediation path ends in a retry, not a lockout, except the three critical decisions' second-failure escalation — which routes to a human, not a lockout either.

## Completion Criteria

A student has completed SIM-002 when all 15 decisions in the Completion Record show FINAL MASTERY and no decision remains in an unresolved instructor-review state. There is no time limit.

## Debrief Questions (optional, instructor-led)

1. "Which situation felt most like 'normal dispatching' even though it wasn't — the shipper-direct request, the rejected-load reassignment, or the bona fide agent label? Why did it feel that way?"
2. "In Stage 5, what made redirecting to the higher-paying carrier tempting, even once you recognized the risk?"
3. "How did Stage 6 change how you'd read a contract in your own future work?"
4. "What made Stage 7's missing-fact scenario harder than Stage 2's straightforward one — and what does that tell you about when to escalate in real practice?"

---

## INTERNAL PRODUCTION MATERIAL — NOT STUDENT FACING

## Interactive Runtime Handoff

This section is the content contract behind the coded runtime in `runtime/`. It documents what the runtime actually implements, for future maintenance and for any SIM-003+ consolidation work.

**Stage IDs:** SIM02-S1 (Who Do You Represent?) → SIM02-S2 (First Freight Opportunity) → SIM02-S3 (Shipper-Direct Request) → SIM02-S4 (Multi-Carrier Decision) → SIM02-S5 (Rejected Load Event) → SIM02-S6 (Contract Label Event) → SIM02-S7 (Final Boundary Decision)

**Decision IDs and types:**

| ID | Stage | Type |
|---|---|---|
| SIM02-D01 | SIM02-S1 | choice |
| SIM02-D02 | SIM02-S1 | multiselect |
| SIM02-D03 | SIM02-S2 | choice |
| SIM02-D04 | SIM02-S2 | multiselect |
| SIM02-D05 | SIM02-S3 | choice |
| SIM02-D06 | SIM02-S3 | choice (critical) |
| SIM02-D07 | SIM02-S3 | multiselect |
| SIM02-D08 | SIM02-S4 | choice |
| SIM02-D09 | SIM02-S4 | choice |
| SIM02-D10 | SIM02-S5 | choice (critical) |
| SIM02-D11 | SIM02-S5 | multiselect |
| SIM02-D12 | SIM02-S6 | choice |
| SIM02-D13 | SIM02-S6 | choice (critical) |
| SIM02-D14 | SIM02-S7 | choice |
| SIM02-D15 | SIM02-S7 | sequencing |

**Branch destinations:** linear within each stage and stage-to-stage (S1→S2→...→S7→Complete). No branching variation exists in this content version.

**Remediation states:** each non-critical decision has one remediation state (shown text + retry). The three critical decisions (D06, D10, D13) have a second-tier state: `instructorReviewRequired = true` after 2 incorrect attempts, which still allows the student to advance (rather than blocking them indefinitely) but flags the simulation's final status as `INSTRUCTOR_REVIEW_REQUIRED` instead of `COMPLETE`.

**Data fields requiring persistence per student per decision:** decisionId, firstAttemptResponse, firstAttemptCorrect, firstAttemptTimestamp, finalResponse, finalCorrect, remediationUsed, attemptCount, finalTimestamp, instructorReviewRequired — exactly the fields specified in the SIM-002-BUILD assignment, implemented verbatim in `logic.js`'s `createInitialState`.

**Data fields requiring persistence per student overall:** simulationId ("SIM-002"), currentDecisionId, startedAt, completedAt, status (IN_PROGRESS / COMPLETE / INSTRUCTOR_REVIEW_REQUIRED).

**Completion condition:** final mastery = 15/15 AND no decision has `instructorReviewRequired: true`.

**Instructor-review condition:** any of SIM02-D06, D10, or D13 reaching 2 consecutive incorrect final attempts without a later correct attempt clearing it.

**Persistence normalization:** implemented as `normalizeLoadedState` in `logic.js` — new relative to SIM-001, explicitly tested against corrupt/non-object input, a foreign simulation's saved state, partial/legacy decision records, and an invalid current-decision pointer.

**Regulatory claims requiring independent QA:** none newly introduced. Every classification and remediation statement in this simulation traces directly to an existing, already-QA'd Module 02 source (Student Manual sections, Practical opportunities, Instructor Answer Guide myths, or the Decision Tool Worksheet) — no new legal conclusion was invented for this build, consistent with the assignment's instruction not to independently invent new law.
