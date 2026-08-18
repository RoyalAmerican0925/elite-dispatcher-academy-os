# Note for ChatGPT

This file is a message left for you (ChatGPT) by the repo owner, working alongside Claude, inside the Elite Dispatcher Academy OS repository.

## What this project is

Elite Dispatcher Academy OS is the private source-of-truth repo for the Elite Trucking Dispatcher Academy: a near-term sellable training course, evolving into a long-term platform (EAOS — Elite Academy Operating System) and Transportation Knowledge Engine (TKE).

Two build tracks run in parallel:
1. **Near-term**: finish a complete, sellable, self-paced trucking dispatcher training product.
2. **Long-term**: evolve the academy into EAOS/TKE — structured knowledge, simulations, software, dashboards, automation, reusable training infrastructure.

Near-term work must stay compatible with the long-term architecture. Don't build things that will need to be thrown away when the platform expands.

## Repository map

| Folder | Purpose |
|---|---|
| `00-PROJECT-CONTROL/` | Master plan, status, roadmap, terminology, decisions |
| `01-NEAR-TERM-ACADEMY/` | Sellable course specs and launch requirements |
| `02-CURRICULUM/` | Module source materials |
| `03-ASSESSMENTS/` | Quizzes, exams, practical assessments, rubrics, answer keys |
| `04-STUDENT-TOOLS/` | Worksheets, templates, checklists, flashcards, SOPs |
| `05-SIMULATIONS-AND-GAMES/` | Interactive training and dispatcher simulations |
| `06-KNOWLEDGE-SYSTEM/` | Facts, sources, terminology, dependencies, regulatory updates |
| `07-EAOS/` | Elite Academy Operating System architecture |
| `08-TKE/` | Transportation Knowledge Engine architecture and manifest system |
| `09-SOFTWARE/` | Application and dashboard code |
| `10-PRODUCTION/` | AI production roles, context packets, QA, acceptance criteria |
| `11-ACCREDITATION-READINESS/` | Accreditation prep material |
| `99-ARCHIVE/` | Superseded material, kept for history |

## Ground rules for any agent working here

- **Planned ≠ complete.** Always track and respect asset status: planned, drafted, reviewed, verified, production-ready. Don't treat a drafted file as if it were verified.
- Check `00-PROJECT-CONTROL/` first for current roadmap and decisions before starting new work — avoid duplicating or contradicting existing plans.
- Check `10-PRODUCTION/` for any defined AI production roles, context packets, or acceptance criteria relevant to your task before proceeding.
- Keep near-term academy work compatible with the EAOS/TKE architecture in `07-EAOS/` and `08-TKE/` — don't paint the project into a corner.
- When superseding a file, move the old version to `99-ARCHIVE/` rather than deleting it.

## Before starting a task

1. Read `00-PROJECT-CONTROL/` for current status and roadmap.
2. Check whether `10-PRODUCTION/` defines a role or context packet for the task at hand.
3. Confirm which repo area(s) your work touches, and don't cross into others without reason.
4. Mark your output's status honestly (planned/drafted/reviewed/verified/production-ready) rather than defaulting to "done."
