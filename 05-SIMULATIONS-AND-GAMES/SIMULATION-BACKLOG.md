# Simulation & Game Backlog

**Status:** PLANNED / CONTROLLED BACKLOG  
**Owner:** Elite Dispatcher Academy simulation layer  
**Purpose:** Convert the academy's decision skills into progressive practice and future playable assets without treating designs as finished software.

## Backlog Rules

Every simulation must eventually document: learning objective, inputs, decisions, scoring, feedback, success/failure conditions, debrief, dependencies, source/current-date controls, accessibility, and functional test cases where applicable.

Status vocabulary for this backlog: PLANNED → IN_PROGRESS → DRAFT_COMPLETE → REVIEWED → VERIFIED → PUBLICATION_READY. Playable software also requires functional testing before PUBLICATION_READY.

## Priority Backlog

| ID | Working title | Primary module(s) | Learning focus | Initial format | Critical-failure possibilities | Software dependency | Status |
|---|---|---|---|---|---|---|---|
| SIM-001 | Missing Information Desk | 05; LE pilot | Capture load facts, distinguish Missing/Unclear/Verified, write targeted questions | Paper/web form branching | Proceeding despite material unknowns | Low | PLANNED |
| SIM-002 | Equipment & Freight Fit Challenge | 03–04 | Trailer/freight/driver fit, dimensions, weight, endorsements, escalation | Scenario-card / scored web exercise | Illegal axle/endorsement decisions | Low–Medium | PLANNED |
| SIM-003 | Carrier & Driver Onboarding File Review | 04 | Authority, COI, W-9, dispatch-profile boundary, payment changes | Document-review simulation | Unendorsed hazmat; unsafe payment redirection | Medium | PLANNED |
| SIM-004 | Load Board Shortlist Sprint | 05 | Search/filter, FOUND vs VERIFIED AVAILABLE, missing info, candidate ranking | Timed shortlist exercise | Brokerage-boundary or endorsement errors | Medium | PLANNED |
| SIM-005 | Broker Verification Desk | 06 | Entity/contact/load/payment verification, red flags, professional classification | Branching scenario | Acting on unverified payment change; unsupported fraud conclusion | Medium | PLANNED |
| SIM-006 | Rate Math & Profitability Lab | 07 | Loaded/deadhead/total miles, RPM, cost/margin interpretation | Calculator + comparison cases | None unless future safety/legal dependency introduced | Medium | PLANNED |
| SIM-007 | Rate Negotiation Role-Play | 08 | Preparation, opening, countering, documenting concessions, walk-away logic | AI/branching dialogue | Misrepresentation or unauthorized commitments if included | Medium–High | PLANNED |
| SIM-008 | Booking & Rate Confirmation Check | 09 | Confirm terms, detect mismatches, document handoff | Document decision simulation | Signing/booking with unresolved material mismatch | Medium | PLANNED |
| SIM-009 | Trip & HOS Feasibility Planner | 10–11 | Route/time/appointment/HOS feasibility, buffers, exception awareness | Timeline planner | Planning/pressuring unlawful HOS execution | High | PLANNED |
| SIM-010 | Dispatch Monitoring & Communication | 12 | Status cadence, exception detection, documentation, stakeholder updates | Timeline/notification simulation | Concealing material service failure | Medium | PLANNED |
| SIM-011 | Exception Management Desk | 13 | Detention, breakdown, delay, rejected freight, escalation | Multi-event branching | Unsafe/unlawful instruction during disruption | Medium–High | PLANNED |
| SIM-012 | POD, Billing & Factoring Workflow | 14 | Document chain, invoice/POD/factor/payment direction | Document-flow simulation | Unverified payment redirection | Medium | PLANNED |
| SIM-013 | End-to-End Dispatch Desk | 15 | Full workflow from freight sourcing through delivery/payment closeout | Capstone simulation | Aggregate critical controls from prior modules | High | PLANNED |
| GAME-001 | Dispatcher Decision Streak | 01–06 initially | Rapid retrieval/classification without replacing formal assessment | Lightweight game | Must not reward unsafe speed over verification | Low | PLANNED |
| GAME-002 | Red Flag or Not? | 05–06 | Distinguish weak signal, verification trigger, confirmed mismatch, policy stop | Card/quiz game | Unsupported fraud accusation | Low | PLANNED |
| GAME-003 | Build the Best Load Day | 05, 07, 10–11 | Compare candidate loads under truck, time, economics, and home-time constraints | Strategy game | HOS/fit violations | High | PLANNED |

## Build Order

### Wave 1 — Low-Tech Validation

Build SIM-001 through SIM-005 first as document/card/web-form prototypes. These align to Modules 01–06 work already in the repository and can validate scoring/debrief logic before software engineering.

### Wave 2 — Quantitative / Planning

Build SIM-006 and SIM-009 once Modules 07, 10, and 11 controlled content and formulas are stable enough to serve as authoritative dependencies.

### Wave 3 — Communication / Workflow

Build SIM-007, SIM-008, SIM-010, SIM-011, and SIM-012 after their respective modules and SOPs are controlled.

### Wave 4 — Integrated Capstone

Build SIM-013 only after all Modules 01–14 have stable imports/exports and critical controls.

## EAOS/TKE Compatibility Requirements

Every future simulation should use stable IDs for:

- scenario;
- learner decision point;
- objective/competency;
- knowledge/source dependency;
- scoring rule;
- critical-failure rule;
- feedback/debrief block;
- version and verification date.

The runtime should eventually consume structured scenario data rather than hard-code every case into the interface.

## Testing Requirements for Playable Assets

Where practical, each software simulation must include deterministic test cases covering:

- correct path;
- common misconception path;
- incomplete-information path;
- critical-failure path;
- remediation/debrief output;
- date-sensitive dependency behavior;
- save/resume and scoring persistence if implemented.

No playable asset should be labeled PUBLICATION_READY until functional tests and content QA both pass.