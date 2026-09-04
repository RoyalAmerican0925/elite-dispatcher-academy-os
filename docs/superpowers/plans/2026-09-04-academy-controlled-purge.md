# Academy Controlled Purge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean the active Academy production tree so stale, superseded, misleading, duplicate, placeholder, and subpar material no longer controls the course, while preserving useful historical evidence and upgrading valuable instructional assets.

**Architecture:** Use the September 4 controlled-purge design as the disposition authority. Review exact files before destructive action; separate live master truth from historical evidence; then reconcile module/status controls to the verified repository state.

**Tech Stack:** GitHub contents API, Markdown course assets, HTML/CSS/JavaScript simulation assets where applicable.

**Spec:** `docs/superpowers/specs/2026-09-04-academy-controlled-purge-design.md`

## Global Constraints
- Work only on `academy-master-architecture` for production cleanup.
- No merge to `main`.
- Exact-file review precedes delete/archive.
- Preserve useful history; archive when evidence value remains.
- Premium framework controls active instructional quality.
- `PUBLICATION_READY` remains separate.
- Chat-developed permanent course decisions belong in GitHub.

---

## Task 1 — Reconcile live master truth
- [ ] Review master dashboard, completion matrix, deadline control, master tree, quality gate, release matrix, module-deliverable standard, and instructor-guide standard.
- [ ] Identify contradictory/stale live status claims.
- [ ] Replace stale authority with the September 4 verified completion control where appropriate.
- [ ] Mark historical controls clearly non-authoritative or archive them when they are useful evidence.
- [ ] Fresh-fetch modified controls and verify.

## Task 2 — Purge stale production audits/status controls
- [ ] Review old commercial-readiness/final-QA/completion files that can be mistaken for current truth.
- [ ] Keep current module evidence active.
- [ ] Archive useful historical reports under a clearly deprecated/historical production path or add explicit superseded status.
- [ ] Delete only files with no instructional, evidentiary, or historical value.
- [ ] Fresh-fetch resulting production tree.

## Task 3 — Review M01–M05 active course assets
- [ ] Review known contradictions, stale metadata, duplicate controls, weak placeholders, and superseded instructional assets.
- [ ] Preserve premium assets and simulations.
- [ ] Classify unresolved material as UPGRADE rather than silently calling it complete.
- [ ] Reconcile module master truth after changes.

## Task 4 — Review M06–M08 active course assets
- [ ] Preserve M08 locked curriculum/assessment/instructor architecture.
- [ ] Review M06/M07 missing or weak layers against product standard.
- [ ] Reconcile SIM status claims with actual runtime/evidence.
- [ ] Remove stale language that conflicts with actual builds.

## Task 5 — Protect M09–M15 architecture from fake completion
- [ ] Verify scope-control files remain architecture only until production assets exist.
- [ ] Remove/repair any language implying completed curriculum where only scope/architecture exists.
- [ ] Preserve dependency order into M15 capstone.

## Task 6 — Premium-quality disposition register
- [ ] Create a dated purge register in `00-ACADEMY-MASTER/` listing KEEP / UPGRADE / ARCHIVE / DELETE decisions.
- [ ] Record exact path and reason for every destructive/archive action.
- [ ] Record remaining subpar assets requiring later rebuild.

## Task 7 — Refresh deadline percentages and critical path
- [ ] Recalculate planning percentages from the cleaned tree.
- [ ] Update the September 4 completion/deadline control.
- [ ] Preserve separate Content/Production and Release percentages.
- [ ] Verify percentages do not certify incomplete gates.

## Task 8 — Final verification
- [ ] Fresh-fetch key master controls and affected directories.
- [ ] Confirm no approved premium asset was accidentally removed.
- [ ] Confirm stale live authority is no longer controlling.
- [ ] Report completed dispositions, remaining upgrades, and next critical production action.