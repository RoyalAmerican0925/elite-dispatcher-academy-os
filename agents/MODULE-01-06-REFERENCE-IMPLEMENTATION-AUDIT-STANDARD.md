TO: ALL ELITE DISPATCHER ACADEMY AI AGENTS
FROM: Kenya — Executive / Project Owner
CC: ChatGPT — Chief Architect / Production Lead
SUBJECT: Modules 01–06 Reference Implementation Audit Standard
PROJECT: Elite Dispatcher Academy / EAOS
STATUS: AUTHORIZED PRODUCTION STANDARD

# Purpose

Modules 01 through 06 are the proving ground and reference implementation for the remainder of the Elite Dispatcher Academy. Do not begin a wholesale rebuild. Preserve completed and verified work, audit what exists, clean it, separate student-facing material from internal production architecture, and fill only genuine gaps.

The objective is to make each of the first six modules complete, clean, reusable, measurable, automation-compatible, simulation-ready, and suitable to become the production pattern for Modules 07–15.

# Non-Destructive Rule

DO NOT delete, discard, or unnecessarily rewrite useful existing curriculum.

When material must be replaced, preserve the prior controlled version through Git history and/or the appropriate archive process. Reuse, extend, refactor, or relocate before recreating.

# Student-Edition Cleanliness Standard

A final student-facing module may contain:

- instructional lessons and explanations;
- student-facing examples;
- dispatcher workflows;
- warnings and safety/compliance cautions written directly to the student;
- scenarios and exercises;
- knowledge checks where appropriate;
- student reference material and glossary content;
- legitimate source/current-date notices where instructionally useful;
- clean module summaries and transitions.

A final student-facing module must NOT contain:

- AI prompts, ChatGPT/Claude/Gemini conversations, agent handoffs, context packets, or production emails;
- internal TO/FROM/RE coordination language;
- TODO, TBD, INSERT HERE, lorem ipsum, unfinished placeholders, or blank content stubs;
- author/instructor instructions such as “Do not teach...” when the same point should be written directly to the student;
- internal production-control metadata displayed as student curriculum;
- raw dependency imports/exports, production notes, first-use-location records, terminology-ledger candidate language, or similar architecture-control material unless intentionally converted into a student reference;
- instructor answers or scoring keys that should remain separated from student assessments;
- accidental duplicate passages or duplicate scenarios caused by file splits;
- unrelated material that does not support the module learning objectives.

Student-facing cautions should be written to the learner. Example: replace an author-facing instruction such as “Do not teach that X is always true” with student-facing language such as “Do not assume X is always true; verify the controlling facts.”

# Structured Information Preservation Rule

Cleaning the student manual does NOT authorize flattening or destroying valuable structured information.

Fact IDs, learning-objective IDs, terminology records, dependencies, scenario IDs, competencies, risk classifications, source-control information, assessment mappings, remediation mappings, current-date controls, and other machine-useful information should be retained in the appropriate internal or machine-readable layer.

The intended separation is:

1. STUDENT-FACING CONTENT — clean instructional material.
2. INSTRUCTOR-FACING CONTENT — teaching guidance, answer keys, rubrics, facilitation notes, remediation guidance.
3. PRODUCTION-CONTROL CONTENT — QA notes, dependency maps, terminology governance, publication controls, source verification, handoffs.
4. MACHINE-READABLE CONTENT — structured facts, objectives, terminology, scenarios, assessment relationships, competencies, dependencies, risk classifications, simulation hooks, and automation metadata.
5. SOFTWARE/SIMULATION CONTENT — code, game logic, scoring logic, test fixtures, simulation state, analytics/event definitions, and technical documentation.

Do not mix these layers merely because they describe the same subject.

# Fact ID Visibility Rule

Default recommendation for the polished student manual: Fact IDs such as FACT-M06-003 should not interrupt normal student-facing prose unless there is a specific instructional reason to expose them.

The factual statement and appropriate source/reference information may remain visible to students. The stable Fact ID should remain available in the internal/machine-readable layer so EAOS can associate lessons, assessments, simulations, remediation, and source verification with the same fact.

# Machine-Readable Companion Standard

Each module should eventually support structured records for, where applicable:

- Module ID;
- module title;
- lesson/section IDs;
- learning objectives;
- Fact IDs;
- terminology IDs and approved definitions;
- source citations and verification dates;
- dependencies/imports/exports;
- scenarios and scenario IDs;
- assessment item IDs;
- correct answers and scoring rules;
- competencies;
- critical-failure conditions;
- risk classifications;
- remediation links;
- current-date/reverification requirements;
- simulation hooks;
- game hooks;
- automation hooks;
- publication/readiness status.

YAML and/or JSON may be used when the implementation architecture is finalized. Do not lock the academy into a format before compatibility with GitHub, Make, the EAOS application, and future tooling is tested.

# Canonical Asset Categories Per Module

Audit every Module 01–06 for the following categories. Mark each asset as EXISTS, VERIFIED, NEEDS CORRECTION, MISSING, NOT APPLICABLE, or PLANNED.

## Curriculum

- Student Manual
- Instructor Guide / Instructor Material
- Learning Objectives
- Terminology / Glossary
- Source / Fact Verification
- Module Summary and Transition

## Assessments

- Knowledge Check / Diagnostic Quiz
- Graded Module Exam
- Separate Instructor Answer Key
- Practical / Scenario Assessment
- Rubric / Scoring Guide
- Critical-Failure Rules where applicable
- Remediation Mapping
- Retest Strategy

## Student Tools

- Worksheet(s)
- SOP(s) / Checklist(s)
- Job Aid(s) / Quick Reference
- Flashcards / Retrieval Practice where useful
- Templates / Forms where useful
- Calculation / Decision Tools where applicable

## Interactive Training

- Realistic Dispatcher Scenarios
- Simulation Opportunities
- Game Opportunities
- Progressive Difficulty Opportunities
- Timed Decision Opportunities where appropriate
- Feedback / Remediation Design
- Competency Scoring
- Cross-Module Capstone Hooks

## System / EAOS

- Structured Data
- Fact IDs
- Objective IDs
- Scenario IDs
- Assessment IDs
- Competency Mapping
- Dependencies
- Automation Hooks
- Simulation Hooks
- Current-Date/Reverification Flags
- Version / Publication Status
- Student-Performance Tracking Requirements

# Module Reference-Implementation Checklist

A Module 01–06 reference implementation is not complete merely because a student manual exists.

Before a module is considered the reference standard, verify:

1. The student manual is complete and clean.
2. Internal production material has been relocated or rewritten appropriately.
3. No AI/chat/handoff contamination exists in student-facing files.
4. No placeholders or unfinished content stubs remain.
5. Duplicate/split content has been reconciled.
6. Instructor material exists where needed.
7. Knowledge checks and graded assessments are mapped to learning objectives.
8. Answer keys remain separated from student-facing graded assessments.
9. Practical competency is assessed where the module requires performance, not merely recall.
10. Scoring and remediation are defined.
11. Student tools have been audited and genuine gaps identified.
12. Simulation/game opportunities have been identified based on measurable competencies.
13. Valuable structured information has been preserved outside the polished student prose.
14. Machine-readable requirements have been identified.
15. Current-date or regulatory material has a reverification control.
16. Cross-module dependencies are accurate.
17. Accessibility/formatting QA has been completed before publication.
18. The module has passed required human approval gates.

# Simulation / Game Acceptance Standard

Do NOT call an activity a completed simulation or game merely because it displays questions on a screen.

A simulation/game should define, where applicable:

- simulation/game ID;
- module and learning-objective IDs;
- competency being trained or measured;
- scenario/state inputs;
- student decisions/actions;
- expected or acceptable decision paths;
- scoring logic;
- critical-failure conditions;
- feedback logic;
- remediation path;
- difficulty/progression rules;
- time pressure where instructionally justified;
- achievement/progress hooks where useful;
- instructor/analytics outputs;
- test cases verifying the activity behaves correctly.

Interactive training must measure a real dispatcher competency and connect to the applicable curriculum objectives.

# Automation Status Model

Assets should use controlled statuses so automation never has to guess readiness.

Recommended production states:

PLANNED → ASSIGNED → IN_PROGRESS → DRAFT_COMPLETE → QA_REQUIRED → REVIEWED → VERIFIED → APPROVAL_REQUIRED → PUBLICATION_READY → PUBLISHED → SUPERSEDED

Not every asset must pass through every state if a documented workflow defines otherwise, but no automation may infer PUBLICATION_READY merely from file existence.

# Automation Safety Gates

Automation may assist with routing, status updates, handoff generation, QA assignment, organization, research requests, and notifications.

Automation must NOT automatically:

- publish curriculum;
- merge unverified regulatory/legal material;
- overwrite approved assets;
- delete or destructively replace controlled work;
- bypass QA;
- bypass Kenya's required executive approval;
- convert PLANNED specifications into claims of implemented functionality;
- promote an asset to PUBLICATION_READY without its required gates.

# First-Six-Module Audit Questions

For each Module 01–06, answer explicitly:

WHAT ALREADY EXISTS?
WHAT IS VERIFIED?
WHAT IS MISSING?
WHAT REQUIRES CORRECTION?
WHAT INTERNAL MATERIAL MUST BE RELOCATED FROM THE STUDENT EDITION?
WHAT SUPPORTING ASSETS STILL NEED PRODUCTION?
WHAT CAN BECOME INTERACTIVE?
WHAT SHOULD BECOME A GAME OR SIMULATION?
WHAT DATA SHOULD BE MACHINE-READABLE?
WHAT STEPS ARE REPEATED OFTEN ENOUGH TO AUTOMATE?
WHAT REQUIRES CURRENT-DATE REVERIFICATION?
WHAT REQUIRES KENYA'S APPROVAL?

# Known Cleanup Findings From Current Audit

These findings are starting points, not permission for destructive editing.

- Module 01 is presently the cleanest student-manual baseline but still requires normal final QA/publication gates.
- Module 02 contains useful terminology/fact/dependency architecture that should be preserved but separated from the polished student edition where it reads as production metadata.
- Module 03 contains author-facing “Do not teach...” language and internal fact/configuration labels that should be converted or relocated while preserving the underlying cautions and structured information.
- Module 04 contains author/instructor-style language and duplicate scenario overlap across split student-manual files that requires controlled reconciliation.
- Module 05 contains terminology-ledger/dependency-style internal material that should be preserved outside the polished student edition where appropriate.
- Module 06 contains similar internal terminology/dependency material and duplicate scenario overlap across split files that requires controlled reconciliation. The previously identified 7-calendar-day versus 7-business-day regulatory wording issue was corrected on 2026-08-20; do not reintroduce the stale wording.

# Agent Handoff Requirement

Every agent completing an audit, cleanup, assessment, simulation, automation, or production task must leave a structured handoff containing:

- Assignment ID;
- module(s);
- files inspected;
- files created/modified;
- status before work;
- status after work;
- verification performed;
- contamination/placeholder scan result;
- duplicate/reconciliation result;
- factual/current-date verification result where applicable;
- structured-data impact;
- simulation/automation opportunities identified;
- unresolved issues;
- dependencies;
- recommended next action;
- items requiring Kenya's approval.

# Immediate Execution Order

1. Audit Module 01 against this standard and establish the clean reference pattern.
2. Apply the same controlled audit to Modules 02–06.
3. Preserve existing verified work; do not rebuild merely for stylistic uniformity.
4. Separate student-facing content from internal architecture without destroying structured information.
5. Reconcile duplicates and student-edition contamination.
6. Audit supporting assessments and student tools against each module's objectives.
7. Produce a Module 01–06 gap matrix showing EXISTS / VERIFIED / NEEDS CORRECTION / MISSING / NOT APPLICABLE / PLANNED.
8. Identify machine-readable, automation, game, and simulation hooks while completing—not delaying—the current module work.
9. Do not proceed deeper into Modules 07–15 until the first-six reference pattern is sufficiently established for production reuse, unless Kenya explicitly changes priority.

# Executive Direction

FIRST-SIX-MODULE COMPLETION REMAINS PRIORITY.
EXISTING VERIFIED WORK MUST BE PRESERVED.
STUDENT EDITIONS MUST BE CLEAN.
STRUCTURED INFORMATION MUST BE PRESERVED FOR EAOS.
AUTOMATION MUST NOT BYPASS HUMAN APPROVAL.
SIMULATIONS/GAMES MUST TEACH MEASURABLE COMPETENCIES.
MODULES 01–06 WILL DEFINE THE PRODUCTION STANDARD FOR THE REMAINDER OF THE ACADEMY.