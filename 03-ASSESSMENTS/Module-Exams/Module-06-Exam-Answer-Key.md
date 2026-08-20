# Module 06 Exam — Instructor Answer Key

**Instructor use only.** Keep separate from the student edition.  
**Corresponds to:** `03-ASSESSMENTS/Module-Exams/Module-06-Exam.md`  
**Status:** DRAFT_COMPLETE — QA and instructor review required before PUBLICATION_READY

## Answer Key

### Part A — Verification Framework and Current Systems

1. **a** — Entity legitimacy and contact legitimacy are separate verification questions.
2. **b** — Use Motus/current FMCSA sources appropriate to the specific fact being checked.
3. **b** — Legacy L&I is historical-review only; current Motus filings are not reflected there.
4. **c — $75,000 through BMC-84 or BMC-85.**
5. **b — 30 days.** Current FMCSA guidance provides a 30-day replacement period after a trustee/provider is determined ineligible.
6. **a — 7 business days.** Current 49 CFR § 387.307(e)(5)–(6) uses a 7-business-day FMCSA notice/suspension response period.
7. **a — 7 calendar days for asset liquidity.** This is the separate § 387.307(b) requirement and must not be confused with the § 387.307(e) 7-business-day notice-response period.
8. **b** — DNU lists are carrier/internal risk policy, not government blacklists.
9. **b** — Authorized co-brokering and unauthorized double brokering are not the same thing.
10. **b** — Independently verify payment changes through a previously trusted channel.

### Part B — True / False

11. **False** — A real entity record does not prove the person/message is authorized.
12. **True** — Factor decisions are financial/internal-risk decisions, not fraud adjudications.
13. **False** — Urgency does not lower the verification standard.
14. **True** — Document appearance alone does not verify legitimacy; cross-check material details.

### Part C — Risk Classification

15. **CLEAR** — All relevant supplied layers match with no unresolved discrepancy.
16. **VERIFY / HOLD** — Look-alike domain mismatch requires trusted-channel verification even though the entity is real.
17. **DO NOT USE** under the stated carrier policy — factor approval is required. Do not label the broker fraudulent from this fact alone.
18. **VERIFY / HOLD** — Name/MC mismatch requires resolution before proceeding.
19. **VERIFY / HOLD** — The apparently legitimate account may be compromised; use trusted callback verification rather than acting on the message.
20. **DO NOT BOOK** — Required broker authority is inactive.
21. **VERIFY / HOLD** — Similar postings alone do not prove double brokering.
22. **VERIFY / HOLD / ESCALATE** — Pending cancellation is a risk event that requires current-status verification; it is not the same as already-lapsed security.
23. **VERIFY / HOLD** — Time pressure does not justify bypassing controls.
24. **ESCALATE** — Accumulating inconsistencies warrant escalation even when none alone proves fraud.

### Part D — Critical-Failure Scenarios

25. **b — HOLD and independently verify through a previously trusted channel. CRITICAL.** Thread continuity does not prove safety; compromised accounts and thread hijacking are specifically why independent callback verification exists. **Any other answer fails the exam regardless of overall percentage.**

26. **b — DO NOT BOOK / ESCALATE.** The trusted corporate channel has directly contradicted the incoming contact, so the contact mismatch is confirmed. Do not continue booking and do not accuse the legitimate broker itself without basis.

27. **b — Incorrect; verify/hold/escalate without an unsupported fraud declaration. CRITICAL.** Two similar postings and a formatting difference are inconclusive facts. **Any other answer fails the exam regardless of overall percentage.**

### Part E — Sample Reasoning

28. **Expected:** Identify the red flag; preserve the facts; cross-check the entity, contact, load, documents, financial-security/payment path, and other relevant records; use a previously trusted channel for independent verification; document what was checked and what remains unresolved; classify the operational risk; proceed only if material discrepancies are resolved, otherwise hold, escalate, do not use, or do not book as appropriate. The dispatcher should describe verified facts and operational decisions rather than publicly declaring fraud unless fraud has actually been established by competent evidence/authority.

## Scoring

Passing standard: **90% = 26/28**, **and Items 25 and 27 must both be correct.**

A student who scores 26 or more but misses either critical item does not pass.

## Mandatory Critical-Failure Remediation

- **Item 25:** trusted-channel payment verification, BEC/thread hijacking, payment-redirection controls.
- **Item 27:** red flag vs. proof, professional classification, escalation, and prohibition on unsupported fraud conclusions.

Retesting should use materially different scenarios.

## Remediation Routing

| Missed items | Route student to |
|---|---|
| 1–3 | Module 06 Sections 3–4; entity/contact distinction and current FMCSA systems |
| 4–7 | Module 06 Section 6 + `REGULATORY-VERIFICATION-2026-08-19-M04-M06.md` |
| 8–10 | Sections 8, 14–17; DNU, co-/double brokering, trusted payment verification |
| 11–14 | Myth audit and document/contact verification sections |
| 15–24, 26 | Verification workflow, risk-classification system, and Scenario Lab patterns |
| **25 (critical)** | **Mandatory payment-redirection/BEC remediation before retest** |
| **27 (critical)** | **Mandatory fraud-vs-red-flag/professional-language remediation before retest** |
| 28 | Full verification workflow and documentation/debrief section |

## Current-Date Control

- Items 2–7 depend on 2026 FMCSA systems/financial-responsibility rules.
- Current verification record: `00-PROJECT-CONTROL/REGULATORY-VERIFICATION-2026-08-19-M04-M06.md`.
- **Important correction:** current § 387.307(e)(5)–(6) uses **7 business days** for the FMCSA notice/suspension response period; **7 calendar days** in § 387.307(b) refers to trust-asset liquidity. Older Module 06 repository prose that conflates these must be corrected during regulatory reconciliation.
- Reverify all date-sensitive content again before `PUBLICATION_READY`.