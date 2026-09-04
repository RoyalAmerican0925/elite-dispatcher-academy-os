# SIM-005 — Scoring Summary

**Simulation:** Live Load Search Desk  
**Model:** Mastery, not points — no percentage grade anywhere in this simulation.

## Tracked per decision (17 total)
- First-attempt response, correctness, timestamp (never overwritten by remediation)
- Final response, correctness, timestamp
- Remediation used (yes/no)
- Attempt count
- Instructor-review required (yes/no)

## Tracked overall
- First-attempt score: X / 17
- Final mastery: X / 17 (must be 17/17 for COMPLETE)
- Remediation count
- Competency status across all 13 families (A–M): Mastered / Mastered After Remediation / Needs Instructor Review / In Progress

## Critical-decision escalation
Six decisions (SIM05-D07, D09, D10, D11, D12, D15) escalate to instructor-review status after two incorrect attempts. This is a hard ceiling on ordinary retry — not a general rule applied to all 17 decisions. Escalation clears automatically if a later attempt is correct.

## Simulation status values
- **IN_PROGRESS** — not all 17 decisions have reached final mastery
- **COMPLETE** — 17/17 final mastery, no unresolved instructor-review flags
- **INSTRUCTOR_REVIEW_REQUIRED** — at least one of the six critical decisions escalated and remains unresolved

Build QA (23/23 automated tests passing, see runtime README) does not replace instructor judgment on any transferred, in-person demonstration of the same competencies.
