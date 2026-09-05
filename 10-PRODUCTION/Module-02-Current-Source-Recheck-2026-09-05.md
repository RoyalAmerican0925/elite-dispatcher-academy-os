# Module 02 — Current-Source Recheck — 2026-09-05

**Module:** 02 — Dispatcher Role & Legal Boundaries  
**Gate:** Premium/currentness reconciliation  
**Result:** PASS WITH RELEASE-GATE RECHECK RETAINED  
**Branch:** `modules-02-03-premium-reconciliation`

## Purpose
Recheck the Module 02 legal/regulatory source chain against current federal material before closing the premium content/runtime build gate. This record distinguishes binding statute/regulation from interpretive guidance and from Academy control models.

## Sources checked

### 1. Broker / bona fide agent definitions — current regulation
**49 CFR § 371.2** remains consistent with the module's core framework. The current 2026 text defines a broker as a person who, for compensation, arranges or offers to arrange transportation of property by an authorized motor carrier, and excludes motor carriers/employees/bona fide agents when acting within the specified carrier-side circumstances. The bona fide-agent definition continues to require duties under the carrier's directions pursuant to a preexisting agreement providing a continuing relationship and precluding the agent's discretion in allocating traffic between the carrier and others.

**Disposition:** KEEP — ACTIVE. The module's focus on actual conduct, represented principal and discretionary allocation remains supported.

### 2. FMCSA dispatch-service guidance — interpretive, not binding law
FMCSA's final guidance published at **88 FR 39368 (June 16, 2023)** remains the controlling dispatch-service interpretive guidance used by the module. FMCSA expressly describes the guidance as interpretive and explains that regulatory changes would require rulemaking. It addresses broker/bona fide-agent definitions, dispatch services, multi-carrier analysis, money flow and circumstances that may indicate broker authority is required.

**Disposition:** KEEP — ACTIVE. Continue labeling this material as **FMCSA GUIDANCE**, not statute/regulation.

### 3. Broker financial responsibility — current 2026 framework
**49 CFR § 387.307** is effective January 16, 2026 and, as amended through July 21, 2026, continues to require a **$75,000** BMC-84 surety bond or BMC-85 trust fund. Current text also supports the module's separation of the major timing controls:

- BMC-85 acceptable trust assets must be liquidatable to cash within **7 calendar days** — § 387.307(b).
- A surety company/financial institution must notify FMCSA within **2 business days** of the specified payment or determination — § 387.307(e)(4).
- Following qualifying provider notification, FMCSA gives the broker a **7-business-day** notice-response period before suspension under § 387.307(e)(5)-(6).
- A provider facing FMCSA suspension has **30 calendar days** to contest the proposed provider suspension under § 387.307(g)(2).

FMCSA's June 26, 2026 financial-responsibility FAQ separately states that when FMCSA determines an existing BMC-85 trust provider is ineligible, affected brokers/freight forwarders relying on that filing have **30 days to obtain a replacement filing from a qualified provider**. The FAQ itself states that the guidance is not legally binding in its own right.

**Disposition:** KEEP — ACTIVE. The Student Manual correctly separates the 30-day provider-replacement guidance from the 7-business-day regulatory notice-response process, 7-calendar-day asset-liquidity rule and 2-business-day provider-notification rule. Do not collapse these into one generic "seven-day rule."

### 4. Unauthorized-brokerage penalty source — current inflation-adjusted schedule
The current eCFR Appendix B to 49 CFR Part 386 states at **Appendix B(g)(2)** that a person who knowingly operates as a broker in violation of 49 U.S.C. § 13904 registration requirements or § 13906 financial-security requirements is liable for a penalty **not to exceed $13,676 for each violation**. The current Appendix shows later amendments through **July 21, 2026** and expressly states that adjusted civil penalties supersede corresponding unadjusted statutory amounts.

**Disposition:** KEEP — ACTIVE, DATE-SENSITIVE. The module is correct to teach the liability framework rather than treating $13,676 as permanent. Recheck this amount again at the final commercial/publication release gate.

## Currentness conclusion
No curriculum rewrite is required from this 2026-09-05 recheck. The live federal source chain supports the module's major legal-boundary instruction and the current financial-responsibility figures/process distinctions presently taught.

## Release-gate controls retained
The following remain mandatory before `PUBLICATION_READY`:
1. final current-source/legal wording review against live federal sources;
2. recheck of inflation-adjusted civil-penalty amount;
3. recheck of FMCSA financial-responsibility FAQs and any later § 387.307 amendments;
4. assembled-course editorial/legal-risk review.

**Maximum status supported by this record:** `BUILD COMPLETE — RELEASE QA DEFERRED`.