# Student Tools Recovery Audit — Google Drive

**Audit date:** 2026-08-19  
**Prepared by:** ChatGPT — Chief Architect and Integration Engine  
**Status:** REVIEWED TARGETED RECOVERY FINDINGS  
**Scope:** Existing worksheets, checklists, templates, SOPs, flashcards, job aids, calculators, and related student/instructor tools that may already exist in connected Google Drive.

## Purpose

Prevent duplicate authoring and prevent production prompts, AI configuration material, or architecture-only references from being mistaken for finished student assets.

This is a **targeted recovery audit**, not a claim that every file in the entire Drive has been exhaustively classified.

## Search Work Performed

Targeted Drive searches included combinations of:

- Elite Dispatcher Academy + checklist
- Elite Dispatcher Academy + SOP
- `RES-`
- dispatcher/load worksheet
- Load Evaluation Calculator
- Integrated Load Evaluation Worksheet
- prior searches for flashcards, quizzes, exams, instructor guides, and related academy assets

Results were evaluated by title/type and, where necessary, opened to distinguish actual course resources from production/configuration documents.

## Completed Course Resources Located and Already Recovered

The completed standalone resources confirmed in Drive and already migrated to GitHub are:

| Asset | GitHub location | Current status |
|---|---|---|
| RES-LE-001 — Load Information Capture Workbook & Worksheet | `04-STUDENT-TOOLS/LE-001-Pilot/RES-LE-001-Load-Information-Capture-Workbook.md` | DRAFT_COMPLETE / QA required |
| RES-LE-004 — Clarification Question Quick Guide & Job Aid | `04-STUDENT-TOOLS/LE-001-Pilot/RES-LE-004-Clarification-Question-Quick-Guide.md` | DRAFT_COMPLETE / QA required |
| RES-LE-024A — LE-001 Flashcard & Retrieval Practice Set | `04-STUDENT-TOOLS/LE-001-Pilot/RES-LE-024A-Flashcard-Retrieval-Practice-Set.md` | DRAFT_COMPLETE / QA required |
| RES-LE-021A — LE-001 Instructor Guide & Facilitation Notes | `03-ASSESSMENTS/Instructor-Guides/RES-LE-021A-LE-001-Instructor-Guide.md` | DRAFT_COMPLETE / QA required |

The associated `LES-LE-001 — Load-Offer Information Completeness — Full Lesson` also exists in Drive as pilot curriculum evidence. Its architecture remains governed by `00-PROJECT-CONTROL/LE-001-PILOT-MAPPING-DECISION.md`; it should not be silently renumbered into the current 15-module scheme.

## Production/Configuration Files Found — Not Student Assets

Drive searches also returned files such as:

- `PR-CONT-JOB-001 — Job Aid, Checklist & SOP Production Prompt`
- `PR-TOOL-002 — Dispatch Form, Template & Operational Document Production Prompt`
- `PR-CONT-WBK-001 — Workbook & Worksheet Production Prompt`
- `PR-ASM-006 — Simulation, Scenario & Capstone Assessment Production Prompt`
- other `PR-*`, GPT configuration, research, architecture, and handoff documents

These are production instructions/configuration materials. They were deliberately **not** migrated into student-facing course directories.

## Architecture-Required Assets Not Located as Completed Standalone Files

`CURR-PILOT-001 — Professional Dispatcher Load Evaluation Curriculum Architecture` requires or references additional assets. Targeted Drive searches did **not** locate completed standalone files for several named requirements; results returned architecture, competency, TKE, production-prompt, or master-control references instead.

Known requirements not recovered as completed standalone student tools include:

- RES-LE-002 — Complete Load Offer Example
- RES-LE-003 — Incomplete Load Offer Example
- RES-LE-005 — Load Evaluation Calculator
- RES-LE-006 — Calculation Worksheet
- RES-LE-007 — Formula Reference Card
- Load Comparison Worksheet
- Equipment/Freight Fit Checklist
- Equipment Reference Guide
- Freight Scenario Cards
- Mismatch/Error Detection Exercise
- HOS-Aware Feasibility Worksheet
- driver-status/timeline practice materials
- Integrated Load Evaluation Worksheet
- Risk/Assumption Log
- Decision Outcome Template
- Decision Defense Rubric
- other later-lesson pilot resources listed in the architecture

### Control Decision

These assets must be treated as **PLANNED / NOT YET RECOVERED AS COMPLETED STANDALONE FILES** unless a later Drive search identifies a concrete completed source.

An architecture requirement is not evidence that the deliverable itself was produced.

## Duplication Rule

Before authoring any missing tool:

1. Search Drive by exact intended asset name and meaningful synonyms.
2. Search GitHub by intended asset ID/name.
3. If only a production prompt or architecture reference exists, treat the deliverable as missing rather than copying the prompt into student content.
4. Preserve original pilot IDs/provenance where applicable.
5. If a current-module tool supersedes a pilot asset, archive/retain provenance instead of deleting the source identity.

## Recovery Result

**Recovered completed tool set:** the four LE pilot resources listed above.  
**Additional completed standalone tools found in this targeted pass:** none confirmed.  
**Production/configuration contamination migrated:** none.  
**Next action:** build missing high-priority tools against current module objectives and the simulation/software backlogs, while maintaining the pilot/current-module crosswalk.