# Controlled Archive / Deprecation Purge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove stale/superseded material from the live Academy production path without destroying historical traceability or creating competency gaps.

**Architecture:** Classify before movement; preserve authoritative current assets; move verified stale controls into `ARCHIVE-DEPRECATED/`; maintain a deprecation register; use the September 04 completion control as live status truth. Subpar but still-required instructional assets remain live as UPGRADE until replaced.

**Tech Stack:** GitHub repository contents/branch controls; Markdown production assets.

**Spec:** `docs/superpowers/specs/2026-09-04-controlled-archive-deprecation-purge-design.md`

## Global Constraints
- Work only on `academy-master-architecture`.
- No merge to `main` without explicit authorization.
- Never archive the only current asset for a required competency merely because it is subpar; replace it first.
- Archived files do not count toward completion or delivery.
- Preserve provenance in the deprecation register.

---

### Task 1: Establish archive controls
- [ ] Create `ARCHIVE-DEPRECATED/README.md`.
- [ ] Create `ARCHIVE-DEPRECATED/DEPRECATION-REGISTER.md`.
- [ ] Verify both files from GitHub.

### Task 2: Purge stale status/dashboard controls
- [ ] Classify old status/dashboard files against September 04 master truth.
- [ ] Copy verified superseded controls to `ARCHIVE-DEPRECATED/` with original content preserved.
- [ ] Verify archived copies.
- [ ] Delete original stale live copies.
- [ ] Record each movement.

### Task 3: Classify production audits
- [ ] Review dated commercial-readiness/instructor-guide/QA audits.
- [ ] Archive only those superseded by later module-specific authoritative QA or master controls.
- [ ] Keep current evidence needed for unresolved gates.
- [ ] Record dispositions.

### Task 4: Module-by-module subpar-content classification
- [ ] M01–M08: classify current assets KEEP/UPGRADE/ARCHIVE/SUPERSEDED/DUPLICATE.
- [ ] Protect unresolved source material required for current rebuilds.
- [ ] Add UPGRADE items to live deadline control rather than removing the only competency asset.

### Task 5: M09–M15 protection
- [ ] Preserve approved scope/architecture controls as current planning authority.
- [ ] Do not archive placeholders if they are the only approved scope definition; mark them planning-only where necessary.

### Task 6: Final live-tree verification
- [ ] Re-fetch archive register and live master controls.
- [ ] Verify stale status controls no longer appear as live authority.
- [ ] Update completion/deadline control if classification changes percentages or blockers.
- [ ] Report exact archived paths and remaining UPGRADE work.