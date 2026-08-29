# SIM-001 — Module 01 Freight Movement Desk — Instructor Guide

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Instructor use only.** Do not distribute to students. Contains answer logic, branching reasoning, and internal production data not present in the student version.
**Note on file structure:** This guide consolidates the "Decision Map" and "Remediation Guide" into one document (approved consolidation, SIM-001-R1). The student-facing branching lives in `Module-01-Simulation-Student.md`; this guide is the authoritative structured branch logic behind it.

---

## Simulation Purpose

SIM-001 gives a beginner student their first experience applying Module 01 role concepts (shipper, broker, motor carrier, dispatcher, driver, receiver, factoring company) inside a realistic, progressively-revealed freight movement, rather than a static list of definitions. It reinforces — and does not replace — the Module 01 Student Manual, Knowledge Check, Exam, and Practical Assessment.

## Learning Objectives

1. Identify each party's role from a realistic freight communication.
2. Distinguish arranging transportation from physically transporting it.
3. Correctly position the carrier-side dispatcher relative to the broker and driver, in this scenario specifically.
4. Distinguish a USDOT number from operating authority at a beginner level, without overclaiming what either one proves.
5. Make appropriate real-time dispatch-desk decisions across multiple stakeholders.
6. Sequence physical freight flow, communication/arrangement flow, document flow, and payment/factoring flow correctly.
7. Recognize missing information and choose to verify rather than guess.

## Setup Instructions

No special software is required at this stage. Provide the student `Module-01-Simulation-Student.md` directly, or print it. Instruct the student to record their answer to each decision before reading that stage's Feedback section — the student document is structured with prompts grouped first, then feedback, specifically to preserve this discipline in a printable format.

## Expected Student Path

A well-prepared student (one who has completed the Module 01 Student Manual first) should move through all six stages with zero or one incorrect attempts. A student who has not yet completed the manual will likely need at least one remediation pass in Stage 1–2 (role confusion) and should be redirected to the manual before continuing.

## Mastery Model (Replaces Point-Based Scoring)

**SIM-001-R1 change:** the earlier 110-point competency rubric has been retired. It created an unnecessary contradiction with the simulation's own formative, no-numeric-threshold design. SIM-001 now uses a pure mastery model:

- **FIRST-ATTEMPT PERFORMANCE:** X / 13 decisions correct before any remediation
- **FINAL MASTERY:** 13 / 13 required for completion
- **REMEDIATION COUNT:** number of decisions that required remediation to reach final-correct
- **COMPETENCY STATUS** per category: Mastered / Mastered After Remediation / Needs Instructor Review

Competency categories (A–H) are retained as an instructional grouping only — they carry no points and gate nothing. Their only function is to help an instructor see *where* a student needed help, not to produce a pseudo-grade. See the Completion Record for the tracking template.

## Open-Matching Decision Tracking (Normalized)

SIM01-D01, D03, D11, and D12 are matching/sequencing exercises rather than single-choice decisions. They are tracked identically to choice decisions using this rule:

- **FIRST ATTEMPT CORRECT** = all required matches/sequence positions correct before the student reads the feedback section
- **FIRST ATTEMPT NEEDS REMEDIATION** = one or more matches/positions incorrect
- **FINAL MASTERY** = all matches/positions corrected after reviewing feedback

This definition is used consistently across this guide, the Completion Record, and the mastery model above — there is no separate scoring rule for matching items.

## Normalized Decision Table

| ID | Stage | Type | Competency | Prompt Summary | Correct Response | Incorrect Response Pattern | Remediation | Retry | Next State |
|---|---|---|---|---|---|---|---|---|---|
| SIM01-D01 | 1 | Matching | A | Match 4 parties (Blue River Foods, Prairie Freight Brokers, North Star Transport, Des Moines DC) to roles | Shipper / Broker / Motor Carrier / Consignee-Receiver | Any role swapped, most commonly broker↔carrier | Re-read the Freight Opportunity Notice with role definitions in mind | Immediate re-attempt within Stage 1 Feedback | SIM01-D02 |
| SIM01-D02 | 1 | Choice | B | Who fills dispatcher and driver roles | B — dispatcher coordinates for North Star; driver physically drives | A/C/D each misassign dispatcher/driver to the wrong party or merge them | Module 01 Student Manual §2 | Re-attempt after remediation text | Stage 2 |
| SIM01-D03 | 2 | Matching | A/B | Match 7 actions to roles | See student document answer key | Most common: swapping dispatcher-coordinates with driver-physically-drives | Module 01 Student Manual §2 | Immediate re-attempt within Stage 2 Feedback | SIM01-D04 |
| SIM01-D04 | 2 | Choice | C | Broker vs. carrier distinction | B — broker arranges, carrier transports | A/C/D all conflate or reverse the two roles | Module 01 Student Manual §2 | Re-attempt after remediation text | SIM01-D05 |
| SIM01-D05 | 2 | Choice | D | Dispatcher's role in this scenario | B — coordinating on behalf of North Star, scenario-specific framing | A/C/D equate dispatcher with broker or driver, or misplace the role in time | Module 01 Student Manual §8 | Re-attempt after remediation text | Stage 3 |
| SIM01-D06 | 3 | Choice | E | USDOT number vs. operating authority | B — distinct regulatory concepts; presence of one doesn't prove the other | A/D treat the two as interchangeable or one as automatic proof of the other | Module 01 Student Manual §4 | Re-attempt after remediation text | Stage 4 |
| SIM01-D07 | 4 | Choice | D | Driver requests pickup info | B — provide the information on file | A/C/D each avoid or deflect the coordination task | Module 01 Student Manual §2/§8 | Re-attempt after remediation text | SIM01-D08 |
| SIM01-D08 | 4 | Choice | D | Broker calls to confirm load | A — confirm status; this is normal coordination, not brokerage | B/C/D overcorrect by refusing normal broker contact | Module 01 Student Manual §8; flag for Module 02 follow-up if repeated | Re-attempt after remediation text | SIM01-D09 |
| SIM01-D09 | 4 | Choice | D | Receiver requests ETA | B — provide verified/current info, or verify if uncertain | A/C/D avoid, deflect, or fabricate | Module 01 Student Manual §8 | Re-attempt after remediation text | SIM01-D10 |
| SIM01-D10 | 4 | Choice | C | Trainee asks who drives | B — driver drives, dispatcher coordinates | A/C/D restate earlier role confusion | Review Stage 1–2 | Re-attempt after remediation text | Stage 5 |
| SIM01-D11 | 5 | Sequencing | F | Sequence 6 flow events | 2→4→6→1→3→5 | Most common: placing dispatcher coordination (6) after physical transport (1) | Module 01 Student Manual §7 | Immediate re-attempt within Stage 5 Feedback | SIM01-D12 |
| SIM01-D12 | 5 | Matching | G | Classify 4 events into 4 flow types | See student document answer key | Classifying factoring submission as pure Document Flow (acceptable with justification — see note) | Module 01 Student Manual §7 | Immediate re-attempt within Stage 5 Feedback | Stage 6 |
| SIM01-D13 | 6 | Choice | H | Missing receiver contact/dock info | C — verify before proceeding | A/B/D each fill the gap with a guess, deflection, or borrowed data | STOP/VERIFY/DO NOT ASSUME framing throughout Module 01 | Re-attempt after remediation text; escalate to direct instructor intervention on a second failure | Simulation Complete |

**FIRST-ATTEMPT TRACKED: YES** and **FINAL-MASTERY TRACKED: YES** for all 13 decisions — no exceptions.

## Remediation Paths (Summary Table)

| If the student confuses... | Route them to... | Applies to |
|---|---|---|
| Broker and carrier | Module 01 Student Manual, Section 2, then retry | SIM01-D01, D03, D04 |
| Dispatcher and broker | Module 01 Student Manual, Section 8, then retry | SIM01-D02, D05, D08 |
| USDOT number and operating authority | Module 01 Student Manual, Section 4, then retry | SIM01-D06 |
| Real-time coordination responsibilities | Module 01 Student Manual, Sections 2 and 8, then retry | SIM01-D07, D09, D10 |
| Flow sequencing/classification | Module 01 Student Manual, Section 7, then retry | SIM01-D11, D12 |
| Missing information handling (guesses instead of verifies) | The STOP/VERIFY/DO NOT ASSUME framing used throughout the academy, then retry | SIM01-D13 |

**General principle:** do not punish ordinary beginner errors with excessive failure mechanics. Every remediation path ends in a retry, not a lockout. SIM01-D13 is the one decision where a second failure should trigger direct instructor conversation rather than a third automated retry — see the decision table.

## Completion Criteria

A student has completed SIM-001 when all 13 decisions in the Completion Record show FINAL MASTERY. There is no time limit and no critical-failure item, consistent with the existing Module 01 Practical Assessment's own "no module-specific critical failure" standard.

## Debrief Questions (optional, instructor-led)

1. "What was the hardest distinction to keep straight — broker vs. carrier, or dispatcher vs. broker? Why?"
2. "In SIM01-D13, what made guessing feel tempting even though you knew the right answer was to verify?"
3. "How did the four types of flow in Stage 5 map onto a load you might actually work?"
4. "What questions do you still have about the dispatcher's role that you expect a later module to answer?"

---

## INTERNAL PRODUCTION MATERIAL — NOT STUDENT FACING

## Interactive Runtime Handoff

This section is the content contract for later conversion into a coded interactive runtime. No implementation code is included here — that work belongs to a separate future build.

**Stage IDs:** SIM01-S1 (New Freight File), SIM01-S2 (Who Does What?), SIM01-S3 (Carrier Identity Check), SIM01-S4 (Dispatch Desk Decisions), SIM01-S5 (Freight & Document Flow), SIM01-S6 (Missing Information Event)

**Decision IDs and types:**

| ID | Stage | Type |
|---|---|---|
| SIM01-D01 | SIM01-S1 | matching |
| SIM01-D02 | SIM01-S1 | choice |
| SIM01-D03 | SIM01-S2 | matching |
| SIM01-D04 | SIM01-S2 | choice |
| SIM01-D05 | SIM01-S2 | choice |
| SIM01-D06 | SIM01-S3 | choice |
| SIM01-D07 | SIM01-S4 | choice |
| SIM01-D08 | SIM01-S4 | choice |
| SIM01-D09 | SIM01-S4 | choice |
| SIM01-D10 | SIM01-S4 | choice |
| SIM01-D11 | SIM01-S5 | sequencing |
| SIM01-D12 | SIM01-S5 | matching |
| SIM01-D13 | SIM01-S6 | choice |

**Branch destinations:** linear within each stage (see "Next State" column in the Normalized Decision Table above); stage-to-stage progression is also linear (S1→S2→S3→S4→S5→S6→Complete). No stage is currently skippable or reorderable — a future runtime could introduce branching variation, but none exists in this content version.

**Remediation states:** each decision has exactly one remediation state (shown text + retry). SIM01-D13 has a second-tier remediation state (instructor-review flag) triggered on a second consecutive incorrect final attempt — this is the only decision with a two-tier remediation path.

**Data fields requiring persistence per student per decision:** decision ID, first-attempt response, first-attempt correct (boolean), remediation shown (boolean), final response, final correct (boolean), timestamp(s).

**Data fields requiring persistence per student overall:** student ID/name, simulation ID (SIM-001), start date, completion date, first-attempt score (X/13), final mastery score (X/13, must reach 13/13 for completion), remediation count, per-competency status (Mastered / Mastered After Remediation / Needs Instructor Review) for categories A–H, simulation status (COMPLETE / INSTRUCTOR REVIEW REQUIRED).

**Completion condition:** final mastery = 13/13.

**Instructor-review condition:** any decision reaching a second consecutive incorrect final attempt (currently only explicitly defined for SIM01-D13, but the same escalation logic should apply to any decision if it recurs in practice).

**Regulatory claims requiring independent QA:** SIM01-D06's USDOT-vs-authority framing inherits previously-verified Module 01 manual content; no new regulatory claim was introduced in this repair pass beyond softening the categorical wording per the SIM-001-R1 repair order.
