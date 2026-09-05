# SIM-006 Runtime — Broker Verification & Fraud Prevention Command Desk

**Status:** BUILD COMPLETE — RELEASE QA DEFERRED

Coded interactive runtime for SIM-006 (Module 06 — Broker Verification & Fraud Prevention), 8 stages, 20 decisions, built directly from the Module 06 Student Manual (Parts 01, 01B, 02, 03, 04), `MODULE-06-MASTER-BRANCH.md`, and two of the seven Module 06 production tools (`Module-06-Risk-Classification-and-Decision-Record.md`, `Module-06-Entity-vs-Contact-Authentication-Worksheet.md`) on `academy-master-architecture`.

## Isolation

No sibling-simulation files were opened for writing during this build. The 12-scenario Module 06 Scenario Lab (S-06-01 through S-06-12) was read for classification logic and is reflected in this simulation's decision-correctness rules, but no Scenario Lab scenario is reused verbatim — SIM-006 runs a single progressive fictional case (Kestrel Logistics Group / Bristlecone Freight) distinct from every Scenario Lab item.

## Scenario arc

A single continuous case runs across all 8 stages, per the assignment's locked contract (a progressive verification desk, not a quiz):

1. **Intake** — classify posting/email content as KNOWN / CLAIMED / NEEDS VERIFICATION.
2. **Entity verification** — an authoritative FMCSA lookup confirms the broker entity is real, authorized, and financially current.
3. **Contact authentication** — the inbound email's domain doesn't match the known corporate domain; an independently-obtained trusted number is called, and the company confirms the sender is *not* who they claim to be — a confirmed contact contradiction.
4. **Load/document cross-check** — the rate confirmation's broker name and MC number don't match the posting or the entity record (an unresolved material mismatch, distinct from the contact issue).
5. **Payment-path event** — a payment-instruction change arrives; it cannot be confirmed through the trusted channel.
6. **Pressure/social engineering** — an artificial deadline, then a claimed-but-unverifiable manager approval instructing the dispatcher to skip verification.
7. **Evidence record + risk classification** — the student must keep the verified entity, contradicted contact, unresolved document mismatch, and unconfirmed payment change in separate lanes, and select the risk classification the evidence actually supports (DO NOT BOOK, not CLEAR).
8. **Final disposition + handoff** — DECLINE with escalation of the contact contradiction, full disposition reasoning, and professional (non-accusatory) language.

The entity check clearing in Stage 2 deliberately does **not** resolve the Stage 3–6 problems — this is the core "verified entity ≠ verified contact ≠ verified load ≠ verified payment path" doctrine, tested by keeping each layer's evidence state independently trackable through to Stage 7.

## How to Run

```
cd 05-SIMULATIONS-AND-GAMES/Module-06/runtime
python3 -m http.server 8000
```

## How to Test

```
cd 05-SIMULATIONS-AND-GAMES/Module-06/runtime
npm test
```

51 assertions covering: stage/decision structure, all 14 competencies (C01–C14), claims-vs-facts classification (categorize type), entity-verification source selection, all seven named critical-failure families (CF-01–CF-07) via attempt-based escalation, trusted-channel/callback logic, document cross-check and materiality judgment, payment-path verification, pressure resistance, evidence-lane separation at the classification stage, final disposition and non-accusatory professional language, scenario continuity across artifacts, first-attempt evidence preservation (including after critical-decision remediation), remediation persistence, final competency calculation, and instructor-review/completion state.

Two genuine defects were caught and fixed by this test suite before commit: C01 was not covered by any decision (D01 was miscategorized under C02), and D05 had an accidental `escalateAfterAttempts` flag that didn't belong to any of the seven named critical-failure families. Both were corrected and the full suite re-run clean.

## Critical-Failure Design Note

The assignment names seven critical-failure behaviors (CF-01 through CF-07). Eight decisions carry attempt-based escalation: CF-01 (D04), CF-02 (D12), CF-03 (D10 and D18 — the same unresolved-material-mismatch judgment tested once mid-transaction and once at final booking, which is deliberate spaced practice rather than duplication), CF-05 (D07), CF-06 (D20), and CF-07 (D15). CF-04 (knowingly representing an unverified claim as verified fact) is tested at D02 and reinforced at D16.

## Known Limitations

- Built from 5 of the 5 Module 06 Student Manual parts and 2 of the 7 production tools (Risk Classification & Decision Record, Entity vs Contact Authentication Worksheet) — the remaining five tools (Broker Verification Evidence Record, Trusted Callback Verification Record, Load & Document Cross-Check Sheet, Payment-Instruction Change Verification Record, Verification Evidence & Escalation Packet) were not individually opened; this simulation's artifacts and decisions were checked for consistency with the risk-classification vocabulary and entity/contact-separation doctrine that all seven tools share, per the master branch's description of them, but exact field-level mirroring of the other five was not verified.
- The Module 06 Instructor Guide, Exam, Exam Answer Key, and Practical Scoring Guide referenced in `MODULE-06-MASTER-BRANCH.md` were not opened during this build.
- No headless-browser DOM test coverage.
- No device/accessibility QA performed.
- Browser/device QA, production deployment, LMS/student-account integration, durable production records, and manual accessibility QA remain deferred.
- Per `MODULE-06-MASTER-BRANCH.md`, current-date FMCSA material (Motus/SAFER/Legacy L&I, BMC-84/85 timing rules) must be reverified before commercial publication; this simulation's artifacts reference these systems only at the level the manual already establishes and do not restate specific dates as settled fact beyond what the manual states.
