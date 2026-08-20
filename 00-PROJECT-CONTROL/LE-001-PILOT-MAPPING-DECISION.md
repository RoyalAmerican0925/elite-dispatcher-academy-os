# LE-001 Pilot Mapping Decision

**Decision date:** 2026-08-19  
**Decision owner:** ChatGPT — Chief Architect and Integration Engine  
**Status:** REVIEWED ARCHITECTURE DECISION  
**Applies to:** `04-STUDENT-TOOLS/LE-001-Pilot/` and related `LES-LE-*`, `OBJ-LE-*`, `COMP-LE-*`, `RES-LE-*` pilot identifiers

## Decision

Preserve the LE pilot namespace and identifiers. Do **not** renumber `LES-LE-001`, `OBJ-LE-001-*`, `RES-LE-001`, `RES-LE-004`, or `RES-LE-024A` into Module 05 or any other single Module-01 through Module-15 namespace at this time.

The recovered LE-001 resources remain controlled pilot assets outside the formal 15-module numbering sequence until a deliberate curriculum crosswalk/integration pass is completed.

## Source Evidence

### CURR-PILOT-001

`CURR-PILOT-001 — Professional Dispatcher Load Evaluation Curriculum Architecture` explicitly defines:

- Proposed Module ID: `MOD-LE-001`
- Proposed Module Title: **Load Evaluation & Feasibility**
- A multi-lesson pilot sequence:
  - `LES-LE-001` — Load-Offer Information Completeness
  - `LES-LE-002` — Miles, Rate, and Deadhead Analysis
  - `LES-LE-003` — Driver, Equipment, and Freight Fit
  - `LES-LE-004` — Appointment and HOS-Aware Feasibility
  - `LES-LE-005` — Counterparty Verification and Role Boundaries
  - `LES-LE-006` — Integrated Risk and Load Decision
  - `LAB-LE-007` — Load Evaluation Desk Simulation
  - `LE-PA-001` — Summative Practical

`LES-LE-001` is explicitly mapped to `COMP-LE-001`, supports `COMP-LE-007` and `COMP-LE-008`, and uses `TKE-CON-003` plus related load-information objects. Its objectives are the same objective IDs retained in the recovered resources.

### TKE-PILOT-001

`TKE-PILOT-001 — Load Evaluation Knowledge Object Pack` defines `TKE-CON-003 — Load-Offer Information Completeness` as one component of a broader load-evaluation knowledge system that also includes rate calculations, feasibility, HOS-aware planning, equipment/freight fit, counterparty verification, dispatcher/broker role boundaries, and decision/risk objects.

This confirms the LE pilot was designed as a cross-functional load-evaluation slice, not as a synonym for the current Module 05.

## Current 15-Module Crosswalk

This is a **crosswalk for integration planning**, not a renumbering decision.

| LE pilot content | Strongest current-module relationship | Notes |
|---|---|---|
| LES-LE-001 — load-offer information completeness | Module 05 — Load Boards and Freight Sourcing | Strong conceptual overlap with screening, missing-information control, and FOUND vs. VERIFIED AVAILABLE. Preserve LE IDs for now. |
| LES-LE-002 — miles/rate/deadhead analysis | Module 07 — Rate Mathematics and Profitability | Direct downstream fit. |
| LES-LE-003 — driver/equipment/freight fit | Module 03 — Equipment and Freight Fit; Module 04 carrier/driver profile inputs | Cross-module dependency. |
| LES-LE-004 — appointment/HOS-aware feasibility | Module 10 — Trip Planning; Module 11 — Hours of Service and ELD Feasibility | Requires current regulatory verification. |
| LES-LE-005 — counterparty verification and role boundaries | Module 06 — Broker Verification and Fraud Prevention; Module 02 — Dispatcher vs. Broker Boundaries | Deliberately spans two current modules. |
| LES-LE-006 / LAB-LE-007 — integrated decision | Module 15 — Capstone and Integrated Dispatch Operations | Also consumes Modules 03–11. |

## Treatment of Recovered LE-001 Resources

The following stay in `04-STUDENT-TOOLS/LE-001-Pilot/` with their original IDs:

- `RES-LE-001-Load-Information-Capture-Workbook.md`
- `RES-LE-004-Clarification-Question-Quick-Guide.md`
- `RES-LE-024A-Flashcard-Retrieval-Practice-Set.md`

They may be referenced by current Module 05 development as pilot/supporting material, but they are **not formally owned by Module 05** until the curriculum integration pass determines whether to reuse, adapt, supersede, or split them.

## Integration Rule

When the academy reaches formal lesson-level integration for Modules 05–15:

1. Compare each LE pilot objective against current module objectives.
2. Decide whether each pilot resource is reused unchanged, adapted under a new current-module asset ID, or retained only as pilot evidence.
3. If a new current-module asset supersedes an LE resource, preserve the LE source and provenance; do not silently overwrite its original identity.
4. Record explicit imports/exports and dependency impacts.
5. Do not promote any mapped resource to `PUBLICATION_READY` until current acceptance criteria and date-sensitive verification gates are satisfied.

## Result

**Formal mapping decision:** standalone controlled pilot namespace retained.  
**Module 05 relationship:** strong conceptual crosswalk, not ownership/renumbering.  
**Renumbering:** deferred until full curriculum integration.