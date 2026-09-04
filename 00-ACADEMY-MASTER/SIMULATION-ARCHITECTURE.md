# Academy Simulation Architecture

## Standard
A simulation recreates meaningful dispatcher work. It is not a quiz with decorative buttons.

Each simulation should use the module's actual mental model and may include incomplete information, competing considerations, realistic fictional artifacts, progressive events, professional communication, judgment calls, consequences, verification, escalation, remediation, and competency tracking.

## Sequential Track
| Simulation | Current scope | Status |
|---|---|---|
| SIM-001 | Module 01 Freight Movement Desk | BUILD COMPLETE — RELEASE QA DEFERRED; premium alignment audit required |
| SIM-002 | Module 02 Agency Boundary Desk | BUILD COMPLETE — RELEASE QA DEFERRED |
| SIM-003 | Module 03 Load Compatibility Desk | BUILD COMPLETE — RELEASE QA DEFERRED; 26/26 CI tests passed |
| SIM-004 | Module 04 Carrier Onboarding Command Desk | BUILD COMPLETE — RELEASE QA DEFERRED; 21/21 CI tests passed; current-date D11 requires reverification control |
| SIM-005 | Module 05 Live Load Search Desk | BUILD COMPLETE — RELEASE QA DEFERRED; 23/23 CI tests passed; premium alignment audit required |
| SIM-006 | Module 06 simulation | PLANNED — exact scope follows verified curriculum/G-013 reconciliation |
| SIM-007 | Module 07 Profitability Decision Desk | PLANNED |
| SIM-008 | Module 08 simulation | PLANNED — SCOPE VERIFY |
| SIM-009 | Module 09 simulation | PLANNED — SCOPE VERIFY |
| SIM-010 | Module 10 simulation | PLANNED — SCOPE VERIFY |
| SIM-011 | Module 11 simulation | PLANNED — SCOPE VERIFY |
| SIM-012 | Module 12 simulation | PLANNED — SCOPE VERIFY |
| SIM-013 | Module 13 simulation | PLANNED — SCOPE VERIFY |
| SIM-014 | Module 14 simulation | PLANNED — SCOPE VERIFY |
| SIM-015 | Module 15 integrated capstone simulation | PLANNED — final design waits for M08–M14 competency maps |

## SIM-004 control note
SIM-004 uses 10 stages / 20 decisions and preserves three Module 04 critical-failure concepts: stated driver-qualification conflict, unverified payment redirect, and automatic compliance-program scope takeover. The September 2026 NRII/paper-MEC event is isolated as current-date material and must be reverified before use after October 11, 2026 or if procedure changes earlier.

## SIM-005 control note
SIM-005 uses 13 stages / 17 decisions across all 13 required competency families (A–M) and preserves six critical-failure concepts: endorsement/qualification mismatch treated as curable, duplicate postings declared proven fraud without verification, a verified brokerage entity treated as authenticating an unverified new individual contact, signing past a material rate-confirmation discrepancy, assuming signing authority merely from document review, and shipper-first discretionary allocation treated as ordinary sourcing (the Module 02 boundary carried into a live sourcing context). Stage 13 implements the required progressive-event design: an already-confirmed candidate (Candidate A, Stage 2) is revisited with new material information and must be re-evaluated, not just answered once and forgotten. No current-date-sensitive material is present in this simulation. Content was built from working knowledge of Module 05's curriculum rather than a linked Module 05 premium master-branch reference — flagged for the same premium alignment audit noted for SIM-001, pending confirmation the built content matches the current Module 05 master-branch standard.

## Simulation Evidence
Each completed simulation requires:
- student instructions;
- scenario/event architecture;
- realistic fictional artifacts;
- stable decision/event IDs where digital;
- competency mapping;
- first-attempt/final-state logic where appropriate;
- meaningful remediation;
- scoring/mastery logic;
- instructor/scoring package;
- completion record;
- runtime tests where digital;
- accessibility and fallback considerations;
- content/runtime QA record.

## Release State
`BUILD COMPLETE — RELEASE QA DEFERRED` means the instructional/runtime build passed its current gate while assembled-system items such as production deployment, durable LMS/student records, browser/device QA, and manual accessibility QA remain deferred. It does not mean PUBLICATION_READY.
