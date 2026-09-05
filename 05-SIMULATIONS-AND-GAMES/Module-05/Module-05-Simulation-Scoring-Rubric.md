# SIM-005 — Scoring & Critical-Remediation Summary

**Simulation:** Live Load Search Desk  
**Model:** Mastery, not points — the simulation itself has no percentage grade.

## Tracked per decision — 18 main-scenario decisions
- first-attempt response, correctness and timestamp — never overwritten;
- final response, correctness and timestamp;
- remediation used;
- attempt count;
- instructor-review state;
- critical-family trigger and trigger timestamp where applicable.

## Overall record
- First-attempt score: X / 18
- Final mastery: X / 18
- Remediation count
- Competency status across all 14 families A–N
- Six-family critical status: NOT_TRIGGERED / REASSESSMENT_REQUIRED / RESOLVED_BY_REASSESSMENT
- Alternate reassessment history

## Exactly six critical families
| Family | Main decision | Occupational failure |
|---|---|---|
| CF-01 | SIM05-D07 | Approves assignment despite stated required endorsement mismatch |
| CF-02 | SIM05-D09 | Treats duplicate-looking postings as proven fraud/double brokering |
| CF-03 | SIM05-D10 | Treats verified brokerage entity as authentication of an unverified contact |
| CF-04 | SIM05-D11 | Processes/signs a materially mismatched rate confirmation as though it matches |
| CF-05 | SIM05-D12 | Assumes signing authority merely because the dispatcher reviewed/handled the document |
| CF-06 | SIM05-D15 | Treats shipper-first discretionary allocation among unrelated carriers as ordinary carrier-side sourcing |

SIM05-D18 truthful role identification is important but is **not** a seventh critical family.

## Critical trigger rule
The existing scenario uses two unsuccessful attempts on the designated critical decision as the trigger for instructor-review/critical history.

Once triggered:
1. the event remains in first-attempt/critical history;
2. a later correct response on the same screen may improve **final mastery**;
3. that same-screen correction does **not** resolve the critical family;
4. resolution requires the corresponding materially different reassessment case;
5. the completion record retains both the original trigger and reassessment result.

## Alternate reassessment bank
The runtime contains one new fact pattern per critical family. Reassessment does not repeat the original posting, contact, rate-confirmation or shipper scenario. The student must transfer the controlling principle to changed facts.

## Simulation status
- **IN_PROGRESS** — main scenario is not yet complete.
- **INSTRUCTOR_REVIEW_REQUIRED** — one or more critical families require alternate reassessment.
- **COMPLETE** — all 18 main decisions have final mastery and no triggered critical family remains unresolved.

## Release boundary
Browser-local state is training/runtime evidence, not durable LMS/student-account evidence. Browser/device, manual accessibility, production deployment, durable record integration and assembled release QA remain separate.
