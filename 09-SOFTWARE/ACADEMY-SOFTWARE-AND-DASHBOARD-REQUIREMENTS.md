# Academy Software & Dashboard Requirements

**Status:** PLANNED / REQUIREMENTS BASELINE  
**Owner:** EAOS software layer  
**Purpose:** Define the minimum technical capabilities needed to deliver the near-term dispatcher academy while preserving a path into EAOS/TKE.

## 1. Governing Principles

1. GitHub remains the controlled source for authored specifications/content during build.
2. Student-facing content, instructor keys, internal production controls, and source/provenance metadata must be permission-separated.
3. Stable IDs, statuses, versions, dependencies, and source verification dates must survive future platform migration.
4. Software must not silently promote DRAFT_COMPLETE content to published/learner-visible status.
5. Date-sensitive content must support review/expiration flags.

## 2. Core Data Objects

The platform should eventually support structured records for:

- Program
- Module
- Lesson
- Learning objective / competency
- Knowledge/source fact
- Student tool / resource
- Assessment form
- Assessment item
- Answer key / rubric
- Critical-failure rule
- Remediation route
- Scenario / simulation
- Learner
- Enrollment
- Attempt / score
- Objective mastery record
- Publication/version record
- Regulatory/source verification record

Each object needs a stable ID, lifecycle status, version, owner, timestamps, and dependency links where applicable.

## 3. Student Application — MVP Requirements

The learner experience should support:

- secure sign-in / enrollment association;
- module sequence and prerequisite gating;
- readable student manual/lesson content;
- downloadable/printable student tools where allowed;
- Knowledge Checks;
- graded Module Exams;
- practical/scenario assignments;
- score/result display appropriate to the assessment type;
- targeted remediation instructions;
- progress/completion view;
- resume where left off;
- accessibility for keyboard, screen reader, text scaling, and non-color-only status signals.

Answer keys and instructor-only classifications must never be exposed through the student route.

## 4. Assessment Engine

Must support:

### Assessment Types

- diagnostic/formative Knowledge Checks;
- graded Module Exams;
- practical/scenario assessments;
- future final/certification exam;
- future item-bank generated forms.

### Scoring

- module-specific passing percentages;
- critical-failure override rules;
- rubric-based practical scoring;
- multi-part item scoring if later approved;
- attempt history;
- separate first-attempt and retest records;
- objective-level result mapping.

Current exam thresholds/rules must be representable exactly as defined in `03-ASSESSMENTS/PROGRAM-ASSESSMENT-SCORING-AND-REMEDIATION-POLICY.md`.

### Remediation

The engine must be able to route a learner from a missed item/dimension to:

- module section;
- lesson/objective;
- job aid/worksheet;
- practice scenario;
- mandatory critical-failure remediation.

Retests should support materially different items/scenarios rather than simply repeating the failed question.

### Security

Separate:

- student form;
- instructor answer key;
- rubric/scoring logic;
- secure item-bank content;
- analytics metadata.

## 5. Simulation Runtime

Future simulation service should support:

- structured scenario inputs;
- learner decisions at one or more decision points;
- branching consequences;
- scoring rules;
- critical-failure conditions;
- feedback/debrief;
- source/current-date dependencies;
- deterministic tests where practical;
- saved state / resume;
- attempt/replay history;
- scenario versioning.

Backlog authority: `05-SIMULATIONS-AND-GAMES/SIMULATION-BACKLOG.md`.

## 6. Instructor / Operations Dashboard

Minimum dashboard views:

### Learner Progress

- enrollment status;
- module completion;
- assessment attempts;
- scores;
- practical status;
- certificate/completion eligibility.

### Objective Mastery

- objectives mastered;
- repeated misconceptions;
- critical-failure events;
- remediation status;
- retest outcome.

### Remediation Queue

- learner;
- module/objective;
- failed item/rubric dimension;
- assigned remediation;
- critical/non-critical;
- completion/retest state.

### Content Readiness

- asset lifecycle status;
- missing dependencies;
- unresolved QA gates;
- current-source verification date;
- expiring regulatory/content flag;
- publication eligibility.

### Assessment Quality — Later Phase

- item difficulty;
- distractor performance;
- objective coverage;
- pass/fail distribution;
- critical-item performance;
- potential bad/ambiguous item flags.

Do not implement psychometric conclusions until there is enough real learner data.

## 7. Regulatory / Dynamic-Content Controls

The system must support:

- `as_of_date` / verified date;
- authoritative source references;
- review trigger / expiration date;
- dependency impact list;
- flag when an assessment item depends on an expired/unverified fact;
- prevention of publication/administering an assessment version that has crossed a hard verification gate without review.

Example: Module 04 NRII temporary-exemption items must be flagged for review before administration after October 11, 2026.

## 8. Content Registry / Publication Workflow

Required states should align with repository vocabulary:

PLANNED → IN_PROGRESS → DRAFT_COMPLETE → REVIEWED → VERIFIED → PUBLICATION_READY → PUBLISHED → SUPERSEDED

Publication workflow should require configured gates such as:

- content review;
- terminology review;
- dependency review;
- factual/source review;
- instructional review;
- formatting/accessibility review;
- technical test completion where applicable.

Superseded assets remain traceable; do not destroy provenance/version history.

## 9. Roles & Permissions

At minimum:

- Learner
- Instructor/Reviewer
- Content Editor
- Assessment Manager
- Operations/Admin
- System/Technical Admin

Permissions should be least-privilege. Learners must not have access to instructor keys or internal AI/production documents.

## 10. Audit & History

Record, where technically practical:

- content/version change history;
- who changed approval/status;
- assessment attempt timestamp/form version;
- rubric/score adjustments;
- remediation assignments;
- publication/supersession events;
- regulatory-verification updates.

## 11. Knowledge / TKE Integration

Future TKE integration should allow curriculum and assessments to reference structured knowledge/source records by stable ID rather than copying date-sensitive facts into multiple isolated places with no dependency tracking.

A changed high-impact fact should eventually be able to identify impacted:

- modules;
- student tools;
- assessments;
- scenarios;
- instructor guidance;
- publication versions.

## 12. Technical/API Requirements — Architecture Level

The eventual implementation should expose clean service boundaries for:

- content retrieval;
- assessment delivery/scoring;
- learner progress;
- remediation;
- simulations;
- publication/version control;
- source/knowledge lookups;
- dashboard reporting.

Exact framework/database choices are intentionally deferred until implementation planning; this file defines behavior/data requirements, not a premature technology lock-in.

## 13. Security & Privacy Baseline

- protect learner account and assessment data;
- minimize collection of unnecessary personal information;
- separate student and instructor content;
- avoid storing secrets in repository content;
- maintain appropriate access control and auditability;
- validate uploaded/linked documents if later supported;
- do not expose answer keys through predictable public endpoints;
- design backups/export so academy records are not trapped in one vendor.

## 14. Implementation Phases

### Phase A — Near-Term Academy MVP

- student module delivery;
- progress tracking;
- Knowledge Checks + Module Exams;
- manual/instructor-scored practicals;
- remediation records;
- operations dashboard;
- content readiness/current-date flags.

### Phase B — Interactive Training

- simulation runtime;
- richer scenario grading;
- document-based exercises;
- learner replay/debrief.

### Phase C — EAOS/TKE Foundation

- normalized content/knowledge registry;
- dependency graph;
- automated change-impact alerts;
- advanced QA/publication workflow;
- AI-assisted controlled production with human/acceptance gates.

### Phase D — Analytics / Scale

- item analytics;
- cohort reporting;
- version-comparison dashboards;
- controlled item-bank assembly;
- broader academy/program reuse.

## 15. Acceptance Rule

This specification is a PLANNED requirements baseline, not evidence that software exists.

No dashboard, runtime, API, or student app should be marked implemented until there is actual code, functional testing, and verification against these requirements.