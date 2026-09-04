# Controlled Archive / Deprecation Purge Design

**Status:** APPROVED — 2026-09-04

## Goal
Keep the live Elite Dispatcher Academy production tree authoritative, premium, and uncluttered while preserving historically useful superseded material outside the live production path.

## Governing rule
Live production contains only current authoritative course assets and controls. Historical, stale, superseded, duplicate, or materially substandard artifacts that retain traceability value move to `ARCHIVE-DEPRECATED/`; they do not count toward completion and must not be used for student/instructor delivery.

## Classification
Every candidate is classified as KEEP, UPGRADE, ARCHIVE-DEPRECATED, DUPLICATE, or SUPERSEDED before movement. Current authoritative student manuals, tools, assessments, instructor resources, simulation runtimes, approved specs/plans, and active QA controls are protected from blind deletion.

## Archive structure
`ARCHIVE-DEPRECATED/README.md` defines the non-production status. Historical controls are grouped by their former production area, beginning with `ARCHIVE-DEPRECATED/10-PRODUCTION/` and expanding only when verified candidates exist.

## Movement method
A move is copy-then-delete on the same `academy-master-architecture` branch: fetch the source, create an identical archived copy with provenance, verify the archived copy, then delete the live stale source. No main-branch merge is authorized.

## Replacement truth
The September 04 `00-ACADEMY-MASTER/ACADEMY-COMPLETION-DEADLINE-CONTROL-2026-09-04.md` is the live deadline/status control. Older status snapshots that conflict with current repository reality are archival evidence, not live truth.

## Quality rule
Subpar instructional content is not automatically archived merely because it needs improvement. If it is the only current instructional asset for a required competency, classify it UPGRADE and replace it through the normal module production workflow so the live tree is never left with an accidental competency hole.

## Audit record
Maintain `ARCHIVE-DEPRECATED/DEPRECATION-REGISTER.md` recording original path, archived path, date, reason, replacement/current authority, and disposition.
