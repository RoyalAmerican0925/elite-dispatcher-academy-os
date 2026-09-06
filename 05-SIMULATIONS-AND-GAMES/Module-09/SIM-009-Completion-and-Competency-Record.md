# SIM-009 — Booking Control Desk
## Completion and Competency Record

This document describes the structure of the completion/competency record the runtime produces for each student attempt (`computeCompletionRecord` in `logic.js`) and the rules governing how each field is populated.

---

## Record structure

- **`simulationId`** — always `"SIM-009"`.
- **`firstAttemptScore`** — `{ correct, total }` across all 27 decisions, counting only the very first response submitted to each decision. Never changes once a decision has been attempted, regardless of later correction.
- **`finalMasteryScore`** — `{ correct, total }` counting the final accepted response to each decision.
- **`remediationCount`** — number of decisions where the first attempt was incorrect and a later attempt corrected it.
- **`competencyStatus`** — a status per competency (M09-C01–M09-C15): `In Progress`, `Mastered`, `Mastered After Remediation`, or `Needs Instructor Review` (the last applies whenever a competency's evidence includes a decision tied to a still-unresolved critical-failure family, even if that specific decision was later answered correctly).
- **`criticalHistory`** — the full record per critical-failure family: whether triggered, which decision triggered it, the exact triggering first-attempt response and timestamp, and the full reassessment record (attempted, response, correct, timestamp).
- **`criticalFailureStatus`** — a status per family (M09-CF-01–M09-CF-06): `NOT_YET_REACHED`, `REASSESSMENT_REQUIRED`, or `RESOLVED_BY_REASSESSMENT`.
- **`instructorReviewRequired`** — `true` whenever any triggered family remains unresolved.
- **`finalStatus`** — `IN_PROGRESS`, `REASSESSMENT_REQUIRED`, or `COMPLETE`.
- **`completedAt`** — timestamp when the simulation reached `COMPLETE`, or `null`.

## What is preserved permanently

Per the design spec's remediation rule, the following are never overwritten or deleted:

- The exact first-attempt response to every decision, and whether it was correct.
- The exact response, decision, and timestamp that triggered a critical-failure family.
- The full reassessment history for every critical-failure family, including unsuccessful reassessment attempts.

A student cannot erase a critical-failure trigger by resubmitting a different (or the same) answer on the original decision screen — this is enforced directly in `submitAttempt`, not a UI convention. Resolution requires a **separate, materially different reassessment scenario** per family (see the Scenario and Evidence Packet). Even a successful reassessment does not delete the original trigger record — it adds a resolution record alongside it, and the status changes to `RESOLVED_BY_REASSESSMENT`, never rewritten as though the failure never occurred.

## Completion rule

The simulation reports `COMPLETE` only when:

1. Every one of the 27 main-scenario decisions has `finalCorrect: true`, **and**
2. Every critical-failure family that was triggered has reached `RESOLVED_BY_REASSESSMENT`.

Raw score cannot override an unresolved critical failure — a student who answers all 27 decisions correctly but has one unresolved triggered family remains at `REASSESSMENT_REQUIRED`, not `COMPLETE`. This is independently verified by automated test (`completion is blocked ... even with all 27 decisions eventually correct`, `raw score cannot override an unresolved critical failure`).

## What `COMPLETE` does and does not mean

A `COMPLETE` result means the booking is controlled: the written document matches the negotiated agreement (or deviations are authorized and documented), the dispatch packet contains only current, correct documents, and the M10 handoff is traceable. **It does not mean the trip is operationally complete.** Detailed trip planning, routing, fuel, and appointment management belong to Module 10; HOS/ELD feasibility belongs to Module 11; active-load monitoring belongs to Module 12; deeper detention/TONU/breakdown/claims exception management belongs to Module 13; and POD/invoicing/factoring/closeout belongs to Module 14. This simulation's `COMPLETE` state itself only ever supports **BUILD COMPLETE — RELEASE QA DEFERRED** as a build status for the runtime — it is never a claim that the module is ready to publish.

## Critical-failure families referenced by this record

For completeness, the six families this record's `criticalHistory` and `criticalFailureStatus` fields track by ID are: M09-CF-01 (unauthorized carrier commitment), M09-CF-02 (material rate-confirmation acceptance error), M09-CF-03 (unresolved discrepancy represented as resolved), M09-CF-04 (wrong/obsolete document used for dispatch), M09-CF-05 (document fabrication/material alteration), and M09-CF-06 (false booking completion). See `SIM-009-Scoring-and-Competency-Map.md` for the full trigger/reassessment mapping.

## Durability note

This runtime currently persists attempt state only in the student's local browser storage (`localStorage`), keyed per browser/device — truthfully labeled as non-durable demonstration persistence. It does not write to any durable, cross-device, or instructor-visible record store. A student who clears browser data or switches devices will lose their attempt history. Durable LMS/student-record integration remains explicitly deferred release-layer work.
