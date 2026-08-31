# Academy Instructor-Guide Product Audit — Modules 01–07

**Audit date:** 2026-08-31  
**Branch:** `academy-master-architecture`  
**Governing standard:** `00-ACADEMY-MASTER/INSTRUCTOR-GUIDE-PRODUCT-STANDARD.md`  
**Status:** COMPLETE INVENTORY / PRODUCT GAP CONFIRMED

## Executive finding

The Academy currently has module-specific **Instructor Answer Guides** for Modules 01–07, but it does **not** have module-specific full Instructor Guides in `03-ASSESSMENTS/Instructor-Guides/` for those modules. The only file presently verified in that directory is `RES-LE-021A-LE-001-Instructor-Guide.md`, which is not a Module 01–07 instructor guide.

This is a product-layer gap, not merely a filename issue. The Academy standard explicitly separates:

- Instructor Guide — how to teach, observe, diagnose, facilitate, remediate and close the module;
- Answer Key — correct answers/rationales;
- Practical Scoring Guide — observable practical criteria and critical failures;
- Simulation scoring/competency record — decision-level evidence;
- Source Register — evidence/currentness control.

Existing answer guides may contain useful publication notes, rationales and safety controls, but they are not substitutes for the required instructor-delivery layer.

## Module-by-module status

| Module | Instructor Answer Guide | Full module Instructor Guide | Current product status | Required action |
|---|---|---|---|---|
| 01 — Trucking Industry Foundations | VERIFIED EXISTS | MISSING | PREMIUM REBUILD ACTIVE | Build only after M01 premium manual/tools/assessment reconciliation so guide does not encode stale structure. |
| 02 — Dispatcher Role & Legal Boundaries | VERIFIED EXISTS | MISSING | PREMIUM RE-AUDIT REQUIRED | Build from final boundary workflow, practical, exam, source controls and SIM-002. |
| 03 — Trucks, Trailers, Freight & Equipment | VERIFIED EXISTS | MISSING | PREMIUM RE-AUDIT REQUIRED | Build from equipment/freight-fit workflow, practical, exam and SIM-003. |
| 04 — Carrier & Driver Onboarding | VERIFIED EXISTS | MISSING | PREMIUM RE-AUDIT REQUIRED / SIM-004 BLOCKED | Build/align before SIM-004 architecture is locked. |
| 05 — Load Boards & Freight Sourcing | VERIFIED EXISTS | MISSING | C-013 REGULAR CLOSEOUT PASS / PREMIUM AUDIT REQUIRED | Build after premium audit; include sourcing, verification handoff, practical events and later SIM-005. |
| 06 — Broker Verification & Fraud Prevention | VERIFIED EXISTS | MISSING | RESEARCH/RECONCILIATION GATE | Do not finalize guide until G-013/current-source reconciliation authorizes production. |
| 07 — Rate Mathematics & Profitability | VERIFIED EXISTS | MISSING | SUBSTANTIAL PRODUCTION DRAFT / PREMIUM AUDIT REQUIRED | Build after component/premium audit and SIM-007 design alignment. |

## Minimum guide content required

Every Module 01–07 guide must include the Academy standard's full delivery controls:

1. module control header and file map;
2. observable employment outcome and competency IDs;
3. instructor preparation and source-currentness checks;
4. lesson-by-lesson teaching intelligence rather than copied manual prose;
5. professional-language coaching and misuse consequences;
6. activity/worksheet facilitation notes;
7. knowledge-check, exam, practical, simulation and remediation administration boundaries;
8. synchronized critical-failure controls;
9. diagnostic remediation by failed mental model;
10. source/currentness notes distinguishing regulation, platform terms, carrier policy, contract terms and Academy controls;
11. simulation facilitation where the simulation exists;
12. module closeout and evidence requirements.

## SIM-004 gate consequence

SIM-004 must not begin merely because Module 04 previously passed a commercial-content gate. Under the current Academy architecture, Module 04 still requires a premium-depth/instructor alignment check. The missing full Module 04 Instructor Guide is therefore a real prerequisite gap.

The correct sequence is:

**M04 premium/instructor alignment → lock SIM-004 occupational decisions and critical failures → build SIM-004 → independent runtime/content/test QA → BUILD COMPLETE — RELEASE QA DEFERRED.**

This prevents the simulation from becoming a parallel curriculum that teaches or scores rules the instructor layer does not support.

## Production strategy

Do not bulk-generate seven generic guides. Build each guide from that module's final synchronized competency chain:

**MANUAL → TOOLS → PRACTICE → ASSESSMENT → PRACTICAL → SIMULATION → REMEDIATION → CLOSEOUT.**

Where a module is still changing, record the guide as blocked rather than authoring content that will immediately become stale.

## Release decision

**FAIL — instructor-guide product layer incomplete for Modules 01–07.**

This does not reverse verified factual or assessment work. It identifies a missing commercial delivery layer that must be completed before Academy publication.