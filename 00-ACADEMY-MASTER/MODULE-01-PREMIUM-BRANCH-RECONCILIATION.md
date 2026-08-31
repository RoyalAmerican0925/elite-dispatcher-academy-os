# Module 01 — Premium Branch Reconciliation Record

**Architecture branch:** `academy-master-architecture`  
**Production branch:** `module-01-premium-depth-rebuild`  
**Status:** RECONCILED AT ARCHITECTURE/CONTROL LEVEL — PRODUCTION BRANCH REMAINS AUTHORITATIVE FOR ACTIVE M01 REBUILD

## Purpose
The Academy master architecture and the dedicated Module 01 premium rebuild intentionally evolved on separate branches. This record prevents either branch from silently overwriting the other and identifies exactly what the master architecture must recognize from the production branch.

## Verified premium-branch delta
The dedicated Module 01 rebuild contains three post-plan production commits that are not to be discarded:

1. `08753c326765810f475b82d6fdaf128ab33db6a1` — premium competency map.
2. `9b24a61a6d19b8b3ceacae91d18b5bd8f9a4414b` — Student Manual Part 04, Reading the Dispatch Desk.
3. `25613ef79a8d63bc8f5edf60fd...` — Dispatch File Intake & Verification Map commit lineage; exact current file blob remains controlled on the production branch.

The branches are diverged from their shared planning lineage. Therefore the correct control is reconciliation, not force-moving one branch onto the other.

## Production assets recognized by the master architecture

### Premium competency map
The master architecture recognizes the active M01-C01 through M01-C15 competency system, including:
- roles without ownership assumptions;
- physical freight flow;
- information/communication flow;
- document flow;
- payment flow;
- dispatch-file reading;
- foundational operating vocabulary;
- USDOT versus operating-authority concepts;
- interstate/intrastate nuance;
- dispatcher versus other freight functions;
- KNOWN / UNKNOWN / VERIFY;
- lifecycle sequencing;
- STOP → IDENTIFY → TRACE → VERIFY → HAND OFF;
- later-workflow recognition;
- correction of beginner misconceptions using operational reasoning.

### Student Manual Part 04 — Reading the Dispatch Desk
The architecture recognizes Part 04 as valid active rebuild work. It introduces the operational mental model that must drive the rest of Module 01:

**PARTIES + FOUR FLOWS + DISPATCH FILE + KNOWN/UNKNOWN/VERIFY + NEXT SAFE ACTION**

It contains:
- physical, information, document and payment flows;
- foundational document recognition;
- basic dispatch-file anatomy;
- contextual operating vocabulary;
- file-triage drills;
- STOP → IDENTIFY → TRACE → VERIFY → HAND OFF;
- four fictional freight-file labs;
- weak-versus-professional reasoning contrasts;
- an end-of-module operating standard.

### Dispatch File Intake & Verification Map
The architecture recognizes this as the active premium intake tool. It requires the student to record:
- carrier/driver/truck/equipment context;
- commodity/origin/destination/timing;
- weight/dimensions/special requirements;
- rate/offering party/contact/status/documents;
- KNOWN / UNKNOWN / VERIFY status;
- source/person to confirm with;
- four-flow trace;
- STOP/IDENTIFY/TRACE/VERIFY/HAND OFF reasoning;
- next action and rationale.

## Architecture synchronization decisions
1. Do **not** copy the production files into `00-ACADEMY-MASTER/`; they belong in their existing production paths.
2. Do **not** force-reset either branch.
3. `MODULE-01-MASTER-BRANCH.md` remains the Academy control summary; the production branch remains the source for active M01 rebuild content.
4. When M01 production work is complete and verified, merge/reconcile through a controlled branch-integration decision rather than manually recreating the content.
5. The Academy dictionary and language map must use the same role/four-flow/verification terminology as the premium rebuild.
6. Existing Parts 01–03 are not considered synchronized merely because Part 04 exists.

## Required production repairs still open
- repair Part 03 shipper/ownership contradiction;
- verify all live cross-module promises;
- reconcile Parts 01–04 so the manual reads as one designed course rather than an appended expansion;
- complete authoritative-source controls for legal/date-sensitive M01 claims;
- align role map/lifecycle/intake/decision tools;
- align knowledge check and exam to the competency blueprint;
- upgrade practical to integrated four-flow + verification judgment;
- audit/repair instructor materials under the Academy Instructor Guide Product Standard;
- align SIM-001 to the rebuilt mental model without indiscriminate rewrite;
- run premium-depth final QA.

## Release rule
This reconciliation means the master architecture now truthfully recognizes the separate premium work. It does **not** mean Module 01 is finished, merged to `main`, commercially released, or `PUBLICATION_READY`.