# Module 02 — Regulatory QA & Source Register

**QA Date:** September 5, 2026  
**Branch:** `academy-master-architecture`  
**Status:** ACTIVE PRODUCTION QA — NOT FINAL RELEASE

## 1. Primary Sources Verified

### 49 U.S.C. § 14916 — Unlawful Brokerage Activities

**Classification:** Federal statute.  
**Verified proposition:** Interstate brokerage services generally may be provided as a broker only when the person is registered under and compliant with 49 U.S.C. § 13904 and has satisfied § 13906 financial-security requirements, subject to statutory exceptions. Section 14916 also establishes federal civil-penalty exposure and liability to injured parties for valid claims.

**Production use:** Unauthorized-brokerage consequences; distinction between broker registration and dispatcher label.

### 49 CFR § 371.2 — Broker / Bona Fide Agent

**Classification:** Federal regulation.  
**Verified proposition:** Bona fide-agent analysis centers on the carrier relationship, direction, preexisting agreement providing a continuing relationship, and the restriction on discretion in allocating traffic between the carrier and others.

**Production use:** Core Module 02 boundary framework.

### FMCSA Final Guidance — 88 FR 39368 (June 16, 2023), Docket FMCSA-2022-0134

**Classification:** Official agency guidance; not itself a CFR regulation.  
**Verified proposition:** Dispatch services may be classified as brokers or bona fide agents depending on the nature and scope of their activities. FMCSA states that the analysis is fact-specific and that no single factor is paramount. Greater carrier control weighs against independent discretion in sourcing and allocating loads.

**Production use:** Dispatch-service factors; multiple-carrier analysis; compensation; handling freight funds; written-contract factor; allocation-of-traffic explanation.

### 49 CFR § 387.307 / FMCSA Financial Responsibility Materials

**Classification:** Federal regulation plus official agency guidance.  
**Verified proposition:** Broker/freight-forwarder financial responsibility generally requires $75,000 through BMC-84 surety bond or BMC-85 trust. Current 2026 rules include provider-eligibility and trust-asset requirements effective January 16, 2026.

**Production use:** Broker-verification and financial-responsibility education.

## 2. Current 2026 Financial-Responsibility Timing — Do Not Conflate

The production edition must keep these separate:

1. **30-day provider-replacement period:** Current FMCSA guidance states that when FMCSA determines a BMC-85 provider is ineligible, affected brokers/freight forwarders relying on that filing have 30 days to obtain a replacement filing from a qualified provider.
2. **7-business-day FMCSA notice-response/suspension process:** Under § 387.307(e), after the applicable provider notification and FMCSA notice, the broker/freight forwarder has a 7-business-day response period before suspension is entered if qualifying evidence is not provided. This must **not** be reduced to the inaccurate shorthand “seven-day replenishment rule.”
3. **7-calendar-day trust-asset liquidity requirement:** Qualifying BMC-85 trust assets must be capable of liquidation to cash within 7 calendar days.
4. **2-business-day provider-notification duty:** Specified provider notification duties under § 387.307(e) operate on a 2-business-day period.

### Superseded Wording Alert

`Student-Manual-Part-04.md` presently contains older shorthand referring to a **“7-business-day financial-security-shortfall replenishment window.”** That shorthand is superseded by the more precise language already used in Part 02 and in this QA register: **7-business-day FMCSA notice-response/suspension process.** The older phrase is a release blocker and must not survive final integration.

## 3. Penalty QA

49 U.S.C. § 14916 states a statutory maximum of $10,000 per knowing violation. The federal civil-penalty schedule is inflation-adjusted through 49 CFR Part 386, Appendix B. Preserved Module 02 material currently states a checked maximum of **$13,676 per violation** for the relevant broker-registration/financial-security violation category.

**Release control:** The exact inflation-adjusted dollar amount is date-sensitive. Reverify Part 386 Appendix B at final publication. Teach the liability structure first; never present a transient inflation-adjusted figure as permanent.

## 4. Legal-Overstatement Controls

The final edition must not state any of the following as universal rules:

- “Dispatchers never need broker authority.”
- “A dispatcher can only represent one carrier.”
- “Three carriers is a federal safe harbor.”
- “Percentage compensation automatically makes a dispatcher a broker.”
- “A written dispatcher agreement automatically creates bona fide-agent status.”
- “Handling freight money automatically proves broker status by itself.”
- “An active MC number proves the contacting person is legitimate.”
- “Any second carrier touching freight automatically means illegal double brokering.”
- “Written contract is expressly required by the text of § 371.2(b).”
- “The 2026 broker financial-responsibility rules contain one generic seven-day replenishment clock.”

## 5. Source-Hierarchy Teaching Rule

For Module 02 instruction:

**STATUTE → REGULATION → CONTROLLING JUDICIAL AUTHORITY WHERE RELEVANT → OFFICIAL AGENCY GUIDANCE → CONTRACT → INDUSTRY INTERPRETATION / TRAINING MATERIAL**

This is an educational ranking for issue-spotting. Contracts can be legally binding on parties concerning lawful commercial matters, but cannot authorize conduct prohibited by controlling law. Agency guidance must be identified as guidance rather than rewritten as CFR text.

## 6. Verification System — Separate Questions

Students must keep the following distinct:

- **Entity verification:** Is this the company it claims to be?
- **Authority verification:** Does the company have the relevant active authority?
- **Financial-responsibility verification:** Is required bond/trust security in place?
- **Identity verification:** Does the person/email/phone actually belong to the company?
- **Credit quality:** Is the company commercially creditworthy?
- **Factoring approval:** Will the carrier's factor purchase/approve the receivable?

One affirmative answer does not prove the others.

## 7. Release QA Checklist

Before Module 02 is marked RELEASE:

- [ ] Recheck 49 U.S.C. §§ 13102, 13901–13906, 14916.
- [ ] Recheck current 49 CFR §§ 371.2 and 387.307.
- [ ] Recheck FMCSA 88 FR 39368 dispatch-service guidance.
- [ ] Recheck current FMCSA BMC-84/BMC-85 guidance.
- [ ] Recheck 49 CFR Part 386, Appendix B inflation-adjusted penalty.
- [ ] Remove superseded “replenishment window” shorthand from integrated Part 04 text.
- [ ] Confirm every scenario answer is consistent with the decision engine.
- [ ] Confirm no scenario presents guidance as binding regulation.
- [ ] Confirm agreement model is labeled educational and jurisdiction-sensitive.
- [ ] Confirm no carrier-count safe harbor appears.
- [ ] Confirm red flags are taught as triggers for verification, not automatic guilt.
- [ ] Confirm entity authority and communicator identity are taught separately.
- [ ] Confirm student assessments reward “insufficient facts” when material facts are genuinely missing.
- [ ] Final instructor/legal-regulatory QA signoff.

## 8. Production Sources

- U.S. House Office of the Law Revision Counsel — Title 49, including § 14916.
- Electronic Code of Federal Regulations — 49 CFR Parts 371, 386, and 387.
- Federal Register — FMCSA Final Guidance, 88 FR 39368 (June 16, 2023), Docket FMCSA-2022-0134.
- FMCSA — Insurance Filing Requirements.
- FMCSA — Broker and Freight Forwarder Financial Responsibility Rule FAQs and 2023 Rule FAQs, current 2026 revisions.

**EDA control:** Commercial blogs, dispatcher websites, social-media posts, and third-party summaries may be used for industry context only. They do not replace primary-source verification.