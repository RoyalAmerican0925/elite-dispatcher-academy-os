# Master Plan

## Purpose

Build the Elite Trucking Dispatcher Course as the first commercial product while preserving a direct path toward the full Elite Academy Operating System (EAOS) and Transportation Knowledge Engine (TKE).

## Layer 1 — Near-Term Sellable Academy

The first objective is a complete self-paced dispatcher academy that can be sold and delivered independently of the future software platform.

Core deliverables:

- Student manuals for all course modules.
- Instructor/reference materials where needed.
- Worksheets, checklists, templates, SOPs, and flashcards.
- Module quizzes, exams, answer keys, rubrics, practical assessments, and final assessment.
- Case studies and scenario-based practice.
- Broker verification, load selection, rate calculation, negotiation, trip planning, HOS/ELD awareness, exception handling, invoicing, fraud prevention, and business operations training.
- Playable simulations and games that reinforce real dispatcher decisions.
- Completion standards and certificate requirements.

## Layer 2 — Elite Academy Operating System (EAOS)

EAOS is the operating layer that manages curriculum production and delivery. It will eventually coordinate:

- Content production and versioning.
- Assessment generation and tracking.
- Simulations and games.
- Student and instructor dashboards.
- QA and publication gates.
- AI-assisted production workflows.
- Dependency management between course concepts and assets.

## Layer 3 — Transportation Knowledge Engine (TKE)

TKE is the larger reusable transportation knowledge architecture behind EAOS. It is intended to organize structured transportation knowledge, terminology, source records, regulatory updates, dependencies, manifest items, and future applications beyond the dispatcher academy.

## Governing Principle

Every near-term asset should be built so that it can later plug into EAOS/TKE instead of being discarded and rebuilt.

## Current Repository Strategy

- `00-PROJECT-CONTROL/` controls scope, roadmap, status, terminology, and decisions.
- `01-NEAR-TERM-ACADEMY/` defines the commercial course product.
- `02-CURRICULUM/` stores module source material.
- `03-ASSESSMENTS/` stores quizzes, exams, rubrics, and answer keys.
- `04-STUDENT-TOOLS/` stores worksheets, templates, SOPs, flashcards, and checklists.
- `05-SIMULATIONS-AND-GAMES/` stores training-game and simulator designs/code.
- `06-KNOWLEDGE-SYSTEM/` stores structured facts, sources, dependencies, and terminology.
- `07-EAOS/` stores operating-system architecture.
- `08-TKE/` stores knowledge-engine architecture.
- `09-SOFTWARE/` stores application code.
- `10-PRODUCTION/` stores AI roles, context packet standards, acceptance criteria, QA, and publication controls.

## Production Rule

A file or course asset is not considered complete merely because it exists. It must meet defined acceptance criteria, align with terminology and dependency standards, and pass QA before it is treated as publication-ready.
