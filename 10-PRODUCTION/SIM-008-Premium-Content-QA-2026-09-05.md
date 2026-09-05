# SIM-008 Premium Content QA — 2026-09-05

**Module:** 08 — Rate Negotiation & Broker Communication  
**Branch inspected:** `academy-master-architecture`  
**Gate result:** **FAIL — PREMIUM REPAIR REQUIRED**

## Scope independently inspected
- `00-ACADEMY-MASTER/MODULE-08-MASTER-BRANCH.md`
- `10-PRODUCTION/Module-08-SIM-008-Design-Spec-2026-09-05.md`
- `03-ASSESSMENTS/Instructor-Guides/Module-08-Instructor-Guide.md`
- existing SIM-008 runtime `content.js`, `logic.js`, `app.js`, `README.md`, `package.json`, `tests/logic.test.js`
- SIM-006 and current SIM-007 runtime patterns for regression/control comparison

## Findings

### Q1 — Locked architecture mismatch — FAIL
Current runtime: **15 stages / 19 decisions**.  
Locked premium design: **12 progressive stages / at least 24 meaningful decisions/actions**.

This is not a cosmetic naming difference. The design requires a deeper decision trail while the current runtime has fewer meaningful learner actions than the locked minimum.

### Q2 — Critical-failure mapping — FAIL
The master and premium design require exactly six critical-failure families:
CF-01 below-floor unauthorized acceptance; CF-02 fabricated leverage; CF-03 material fact misrepresentation; CF-04 unauthorized carrier commitment; CF-05 false agreement state; CF-06 premature booking representation.

Current runtime does not expose these six families as explicit `criticalFailureFamily` data across the scenario. Five older critical decisions use `escalateAfterAttempts:2`; CF-05 is described only in README/test comments. This prevents durable family-level evidence and clean completion reporting.

### Q3 — Critical-failure persistence — FAIL
Current logic can clear `instructorReviewRequired` when the learner later submits the correct answer on the same decision. This conflicts with the premium rule: a critical failure is not erased by same-screen correction and requires a materially different reassessment before resolution.

### Q4 — First-attempt preservation — PARTIAL PASS
Current logic preserves first-attempt response/correctness/timestamp and marks remediation. This is useful and must be retained. However, it does not preserve a durable critical-family trigger/resolution record independent of the mutable instructor-review flag.

### Q5 — Competency coverage — PASS WITH DEPTH REPAIR REQUIRED
All 15 M08 competency IDs are represented in the current runtime. The existing curriculum-alignment repair materially improved discovery, four-part accessorial clarification, three-bucket closeout and Module 09 boundary language. Preserve these strengths in the premium rebuild.

### Q6 — Completion gate — FAIL
Current `computeSimulationStatus` completes only when all 19 decisions are finally correct. The premium design instead requires a practical-compatible raw threshold, sufficient competency evidence, and zero unresolved critical failures. The current runtime does not implement that combined gate.

### Q7 — Completion record — FAIL
The UI displays first-attempt/final mastery/remediation and competency summary, but there is no pure `computeCompletionRecord` control that exports first-attempt score, final score, competency map, critical-failure status/history, reassessment history and instructor-review state as one testable record.

### Q8 — Package completeness — FAIL
`05-SIMULATIONS-AND-GAMES/Module-08/` contains only `runtime/`. The premium package documents required by the module framework are absent. Required build package:
- `SIM-008-Student-Instructions.md`
- `SIM-008-Scenario-and-Evidence-Packet.md`
- `SIM-008-Instructor-Guide.md`
- `SIM-008-Scoring-and-Competency-Map.md`
- `SIM-008-Completion-and-Competency-Record.md`

### Q9 — Automated alignment gate — FAIL
Current M08 has only `tests/logic.test.js`. It lacks the separate package/alignment test pattern already used by SIM-006. A premium gate must verify package docs, locked stage/decision architecture, six CF families, competency coverage, answer-key isolation/boundaries and completion-record controls.

### Q10 — README status — FAIL
Current README claims `BUILD COMPLETE — RELEASE QA DEFERRED`, but the newly locked premium architecture and instructor controls are stricter than the older build. Until repaired and independently retested, the truthful status is **PREMIUM REPAIR REQUIRED**.

## Preserve from existing runtime
KEEP — ACTIVE / PORT INTO REPAIR:
- verified-fact preparation logic;
- target/floor/walk-away distinctions;
- VERIFY-before-assume behavior;
- truthful leverage controls;
- professional opening and purposeful discovery;
- evidence-supported counter without forced disclosure of internal economics;
- conditional trade logic;
- TRIGGER → AMOUNT/METHOD → EVIDENCE → PROCESS;
- material-fact-change re-evaluation;
- authority boundary;
- three-bucket closeout;
- Module 09 booking boundary;
- first-attempt evidence fields;
- local-storage limitation disclosure.

## Repair order
1. Write premium-gate tests before changing production logic.
2. Rebuild scenario to exactly 12 stages and at least 24 meaningful decisions while preserving strong current content.
3. Explicitly map all six critical families in content.
4. Persist first critical action and require materially different reassessment for resolution.
5. Implement practical-compatible completion gate and pure completion-record output.
6. Add five package documents.
7. Add separate alignment/package tests and run full runtime test command.
8. Independently inspect actual committed files before changing master status.

## Status
**SIM-008 PREMIUM QA: FAIL — REPAIR IN PROGRESS.**

This QA document does not authorize a merge to `main` and does not establish `PUBLICATION_READY`.
