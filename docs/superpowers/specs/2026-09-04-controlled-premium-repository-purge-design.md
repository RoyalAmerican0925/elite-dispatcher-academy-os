# Controlled Premium Repository Purge — Design Specification

**Date:** 2026-09-04  
**Repository:** `RoyalAmerican0925/elite-dispatcher-academy-os`  
**Branch:** `academy-master-architecture`  
**Status:** APPROVED DESIGN — IMPLEMENTATION PLANNING AUTHORIZED

## 1. Purpose

This specification governs a repository-wide cleanup of the Elite Dispatcher Academy so that only material deserving a place in a top-tier paid dispatcher academy remains active in the production tree.

The purge is not a mass-delete exercise. It is a controlled source-of-truth correction that separates canonical premium assets from repair work, historical evidence, and material that no longer deserves to remain in the live production path.

## 2. Governing Academy Standard

Every live production artifact must support the Academy dependency chain:

**TEACH → DEMONSTRATE → PRACTICE → ASSESS → SIMULATE → RECORD COMPETENCY**

Every artifact must also survive three commercial tests:

1. **Google test:** Could the student obtain substantially the same value from a first-page search? If yes, the artifact is not premium enough.
2. **Employment test:** Does the artifact help the student perform a real dispatcher task reliably and within role boundaries?
3. **Buyer test:** Would the artifact, as part of the module package, feel like professional paid training rather than notes, filler, or a generic checklist?

No artificial page, word, scenario, or activity count may substitute for competency depth.

## 3. Purge Taxonomy

Every inspected artifact must receive one of four dispositions.

### A. ACTIVE / CANONICAL
Retain in the live production path when the artifact is the current source of truth and meets, or is actively being brought to, the approved premium framework.

### B. REPAIR
Retain temporarily only when the artifact contains material worth preserving but fails the current premium, structural, currentness, alignment, or packaging standard. A REPAIR artifact must have an identified repair path; it may not remain indefinitely as ambiguous live content.

### C. ARCHIVE / DEPRECATED
Move out of the active production path when the artifact has useful historical, evidentiary, audit, or traceability value but is no longer a governing production source. Archived material must be clearly marked non-canonical.

### D. DELETE
Remove when the artifact is a duplicate, abandoned placeholder, obsolete superseded file with no meaningful evidentiary value, junk, contradictory dead-end content, or other material that should not remain in the Academy repository.

## 4. Decision Rules

### Delete when
- content is duplicated by a clearly superior canonical artifact;
- a placeholder or abandoned draft has no remaining production or audit value;
- the file is obsolete and retaining it would create source-of-truth confusion;
- content is materially inferior and contains nothing worth salvaging;
- the file is operational junk or an accidental artifact.

### Archive when
- an old audit, status report, reconciliation, or control is useful for traceability;
- a superseded artifact documents a material prior decision;
- the file should remain available for historical reconstruction but must not be mistaken for live production truth.

### Repair when
- core instructional value is sound but packaging is weak;
- a tool is useful but underdeveloped, duplicated in function, or misaligned with the final workflow;
- an assessment is valuable but no longer synchronized with the competency chain;
- a simulation is functional but needs curriculum-alignment repair;
- current-source or legal/operational language must be refreshed;
- status language is stale while the underlying artifact remains useful.

### Keep canonical when
- the file is the current master control, approved premium lesson, current tool, current assessment, current instructor resource, current simulation artifact, or current production/release control;
- its claims and status are supported by current repository evidence;
- it belongs in the student, instructor, production, or release pathway.

## 5. Source-of-Truth Hierarchy

The active hierarchy is:

1. approved Academy master architecture and premium standards;
2. module master branch controls that have been reconciled to actual assets;
3. current curriculum, tools, assessments, instructor resources, and simulations;
4. current production QA and release controls;
5. archived historical controls only for traceability.

Chat is not a production repository. Academy build decisions and assets developed in project chat must be transferred to the proper GitHub production location.

Google Drive/Docs remains the visual publishing/review layer, not a competing content master.

## 6. Scope

The controlled purge applies repository-wide, including:

- `00-ACADEMY-MASTER/`
- `01-ONBOARDING/`
- `02-CURRICULUM/`
- `03-ASSESSMENTS/`
- `04-STUDENT-TOOLS/`
- `05-SIMULATIONS-AND-GAMES/`
- `06-INSTRUCTOR-RESOURCES/`
- production, QA, release, source/register, and supporting folders
- legacy module folders and duplicate structures
- stale status/audit documents
- abandoned placeholders and superseded artifacts

The purge must not mix TWC-VR material into this repository. TWC-VR remains separate.

## 7. Module-Level Inspection Standard

For each module M01–M15, inspection must establish the actual state of:

- employment outcome;
- competency map;
- student manuals/lessons;
- demonstrations/worked examples;
- operational tools;
- guided practice;
- knowledge check;
- final exam;
- practical assessment;
- answer keys/scoring/remediation;
- full instructor guide;
- simulation;
- competency record;
- current-source controls;
- production QA;
- release-layer dependencies.

A filename or old dashboard status is not proof that a component is complete.

## 8. Premium Content Rules

Live content must not be retained merely because it is accurate. It must materially do at least one of the following:

- teach a required concept;
- demonstrate professional reasoning;
- build an occupational skill;
- prevent a consequential mistake;
- prepare the student for assessment or simulation;
- provide a reusable operational tool;
- establish a necessary legal/role boundary;
- provide a decision framework, worked example, or documented workflow.

Thin summaries, generic definitions, arbitrary file splits, duplicated quizzes inside manuals, glossary fragments presented as lessons, and historical scaffolding that no longer serves the learning path should be consolidated, archived, or removed.

## 9. Simulation Rules

Each module must include its simulation before the next module is considered commercially closed.

Simulation status is controlled as:

**BUILD COMPLETE — RELEASE QA DEFERRED**

until later browser/device, LMS/student-account, durable-record, deployment, and manual accessibility QA are performed.

Functional simulation code that is misaligned with the curriculum is REPAIR, not canonical complete.

## 10. Status Truth Rules

Stale status text must be corrected when current assets prove a different state.

Old dashboards and audit files may not overrule current repository evidence.

`PUBLICATION_READY` must not be used merely because a content gate passes. Final instructor/editor/legal/current-source/release controls remain separate.

## 11. Historical Evidence Preservation

Useful historical files should be moved to a clearly non-canonical archive rather than left beside active controls.

Recommended archive root:

`99-ARCHIVE-DEPRECATED/`

Recommended substructure:

- `MASTER-CONTROLS/`
- `MODULE-AUDITS/`
- `SUPERSEDED-STATUS/`
- `LEGACY-CURRICULUM/`
- `LEGACY-ASSESSMENTS/`
- `LEGACY-TOOLS/`
- `LEGACY-SIMULATION-CONTROLS/`

Archived files must be labeled as historical/non-canonical when practical.

## 12. Destructive Change Safety

Before deleting or moving an artifact:

1. inspect the actual file;
2. identify inbound references where material;
3. confirm a canonical replacement or lack of evidentiary value;
4. record disposition and reason in the purge register;
5. repair references if the path is live;
6. perform the move/delete only on `academy-master-architecture`;
7. verify the resulting path/state.

No merge to `main` is authorized by this specification.

## 13. Purge Register

`00-ACADEMY-MASTER/CONTROLLED-PURGE-DISPOSITION-REGISTER-2026-09-04.md` is the live disposition ledger during implementation.

The register must record, at minimum:

- path;
- module/system;
- disposition;
- reason;
- canonical replacement or repair owner/path where applicable;
- reference-repair requirement;
- execution state;
- verification evidence.

## 14. Current Known Priority Findings

The September 4 completion audit established high deadline risk and identified M09–M15 as the largest production gap. Purge work must therefore avoid spending disproportionate time polishing low-value history while core Academy production remains incomplete.

Known examples requiring reconciliation include:

- stale master-dashboard/status language;
- Module 01 premium-rebuild branch reconciliation;
- Module 04 instructor-guide metadata that understates SIM-004 state;
- Module 05 arbitrary seven-part manual packaging and duplicated/fragmented assessment/reference content;
- Module 05 tool-package status still marked draft despite stronger downstream build work;
- Module 06 status truth vs newer tool/practical/guide assets;
- Module 08 simulation curriculum-alignment repair;
- architecture-only or near-empty production states for M09–M15.

These are starting points, not permission to delete without file-level inspection.

## 15. Module 05 Specific Purge Direction

The existing Module 05 premium-content purge audit is adopted as a module-specific control:

- Parts 01, 02, and 07 contain core material worth preserving/upgrading;
- Parts 03–06 require restructuring/consolidation because they contain scenario, knowledge-check, glossary, terminology-ledger, or dependency fragments that do not deserve to remain as arbitrary numbered paid-course lessons;
- all nine student tools require individual desk-utility and duplication review;
- the current Knowledge Check, 30-item exam, practical, instructor guide, and SIM-005 must be synchronized to the final competency chain before Module 05 can be called premium instructional complete;
- no destructive deletion of M05 student content occurs until replacement structure and references are secured.

## 16. Execution Order

Implementation should proceed in controlled batches:

1. reconcile governing master/status controls;
2. establish archive structure and purge register conventions;
3. purge obvious repository-wide junk/duplicates/placeholders;
4. perform module-by-module premium disposition, starting with near-finished and currently active modules where stale artifacts create immediate source-of-truth risk;
5. repair references after each batch;
6. update the September 4 completion control with post-purge truth;
7. verify that no live pathway depends on deleted/moved files;
8. continue core module production against the corrected repository.

The purge must not become a substitute for finishing the Academy.

## 17. Acceptance Criteria

The controlled purge is successful only when:

- the live repository has one understandable source of truth;
- stale governing statuses no longer contradict actual assets;
- historical evidence is clearly separated from active production;
- obvious junk, dead placeholders, and valueless duplicates are removed;
- useful subpar material is repaired or explicitly queued for repair rather than silently treated as finished;
- every retained live instructional artifact has a defensible role in the premium competency pathway;
- module and simulation states are evidence-based;
- the disposition register is current;
- the September 4 completion control reflects the post-purge production truth;
- no merge to `main` has occurred without separate explicit authorization.

## 18. Non-Goals

This purge does not by itself:

- declare the Academy `PUBLICATION_READY`;
- finish missing M09–M15 production content;
- perform final legal review;
- perform final editor review;
- perform browser/device/LMS/accessibility release QA;
- connect Google Drive/Docs or other apps;
- merge the architecture branch to `main`.

Those remain separate production/release activities.
