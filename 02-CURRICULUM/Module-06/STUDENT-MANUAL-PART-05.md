**APPROVED DEFINITION:** Financial signals reflecting a broker's payment history and risk profile, often provided by factoring companies or platforms.

**CLASSIFICATION:** INDUSTRY PRACTICE / CARRIER POLICY

**FIRST-USE LOCATION:** Module 06, Section 15 (FACT-M06-007)

**RELATED TERMS:** DNU

**NOTES:** One risk factor among several — not a fraud determination.

### Payment Redirection

**APPROVED DEFINITION:** A fraud pattern involving a request to change payment instructions, often via a compromised or spoofed contact channel.

**CLASSIFICATION:** CYBERSECURITY / OPERATIONAL BEST PRACTICE

**FIRST-USE LOCATION:** Module 06, Section 17

**RELATED TERMS:** BEC, Callback Verification

**NOTES:** Always requires trusted-channel verification before any change.

### Red Flag / Material Mismatch

**APPROVED DEFINITION:** An observation warranting further verification (red flag) or a significant unresolved inconsistency (material mismatch) in the verification workflow.

**CLASSIFICATION:** OPERATIONAL RISK TERM

**FIRST-USE LOCATION:** Module 06, Section 2

**RELATED TERMS:** Risk Classification

**NOTES:** Neither term alone constitutes proof of fraud.

### Escalation

**APPROVED DEFINITION:** Referring an issue beyond a dispatcher's authority or competency to carrier ownership, management, compliance, or another specialist.

**CLASSIFICATION:** OPERATIONAL PROCESS

**FIRST-USE LOCATION:** Module 06, Section 7

**RELATED TERMS:** Risk Classification

**NOTES:** Appropriate when verification cannot resolve a material issue.

# Appendix B: Module 06 Dependency Map

## Module 06 Imports

* Module 01: industry roles.
* Module 02: broker/agent legal boundaries.
* Module 03: equipment/freight fit.
* Module 04: carrier operational profile and verification discipline (payment-change protocol foundation).
* Module 05: qualified load candidate.
* FACT-M06-001 through FACT-M06-007.

## Module 06 Exports

| Export | Dependent Modules |
| :---- | :---- |
| Verified load/broker information | 07 (rate evaluation) |
| Verified contact for negotiation | 08 |
| Verified entity/contact/document before booking | 09 |
| Trusted communication channel for ongoing monitoring | 12 |
| Verified baseline for incident escalation | 13 |
| Verified payment/factoring path | 14 |
| Full fraud-prevention workflow | 15 (capstone) |

**Module 06 Completion**
You should now be able to verify a broker entity, verify the contact independently, cross-check load and document details, verify payment-path changes through trusted channels, classify risk without making unsupported fraud accusations, and route unresolved issues to the appropriate next step. Complete the Module 06 Knowledge Check before proceeding to Module 07.
