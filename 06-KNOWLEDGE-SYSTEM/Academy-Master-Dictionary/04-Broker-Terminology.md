# Academy Master Dictionary — Broker Terminology

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Branch:** Broker terminology (fourth branch of the Academy Master Dictionary)
**Relationship to other academy vocabulary files:**
- Builds on `01-Trucking-Terminology.md`, `02-Dispatch-Terminology.md`, and `03-Carrier-Terminology.md`; cross-references `TERMINOLOGY-LEDGER.md` rather than redefining controlled terms.
- This file covers **broker-specific business and legal vocabulary** — terms describing what a broker is, how brokerage is regulated, and how brokers interact with carriers and shippers.
- Draws heavily on Module 02 (dispatcher/broker legal boundary) and Module 06 (broker verification & fraud prevention), which already carry the full sourced, verified regulatory treatment. This file organizes and cross-references that content as vocabulary rather than re-deriving it.
- Deliberately does NOT independently invent new legal conclusions anywhere in this file — every regulatory-adjacent term here points back to the module that already established and verified it.

**Format for every entry:** Correct term → What it means → What it does NOT mean → Common misuse → Operational example → Regulatory distinction (when applicable).

---

## Section 1: Broker Definition & Core Concepts

### Broker
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md` and Module 02, FACT-M02-001.)* A person who, for compensation, arranges or offers to arrange transportation of property by an authorized motor carrier, and who is not a motor carrier or qualifying employee/bona fide agent of one.

### Bona Fide Agent
*(Established in Module 02, FACT-M02-002.)* A person who is part of the normal organization of a motor carrier, performing duties under the carrier's direction pursuant to a preexisting agreement providing a continuing relationship, and precluded from exercising discretion in allocating traffic.

### Brokerage
**What it means:** The general business activity of arranging transportation for compensation, or the term for a company organized to conduct that activity.
**What it does NOT mean:** A activity automatically triggered by any involvement in freight movement — whether specific conduct constitutes brokerage depends on the actual factors Module 02 teaches (who supplies the freight, who selects the carrier, allocation discretion), not just general industry proximity.
**Common misuse:** Assuming any company with "logistics" or "freight" in its name is automatically operating as a broker.
**Operational example:** "This company operates a brokerage, arranging transportation for multiple shippers across various carriers."

### Allocation of Traffic
*(Established in Module 02, Section 9.)* Any exercise of discretion on an agent's part in deciding which represented motor carrier receives a given load — the central risk factor distinguishing ordinary carrier-side dispatching from brokerage activity.

### Freight Forwarder
**What it means:** A party similar to a broker in that it arranges transportation, but which takes on a broader scope of responsibility — legally assuming responsibility for the freight from the time it's received until it reaches its destination, as defined under federal law.
**What it does NOT mean:** The same thing as a broker — do not teach brokers and freight forwarders as interchangeable (see Module 01's explicit caution on this point).
**Common misuse:** Using "broker" and "freight forwarder" interchangeably in professional communication; they carry different legal responsibilities.
**Operational example:** "This freight forwarder handles multi-leg international shipments and assumes responsibility for the freight throughout the journey."

## Section 2: Legal Boundary Concepts (Cross-Referencing Module 02)

### Carrier-Side Agency
*(Central to Module 02.)* Coordinating on behalf of one represented motor carrier under a preexisting agreement, without exercising discretion to allocate freight among competing carriers — the pattern consistent with lawful dispatching rather than brokerage.

### Significant Brokerage Risk
*(A classification category used throughout Module 02's scenarios and SIM-002.)* A conduct pattern — most commonly discretionary allocation of freight among multiple represented carriers — that presents a meaningful risk of crossing from carrier-side dispatching into unauthorized brokerage activity.
**What it does NOT mean:** A conclusive legal determination that brokerage has definitely occurred — it's a risk classification prompting STOP/VERIFY/ESCALATE, not a final legal verdict (which a dispatcher is not positioned to make independently).

### Label vs. Conduct
*(Central to Module 02's teaching, e.g., Myth 4 and the SIM-002 contract-label stage.)* The principle that a contract's title or a business's chosen label ("dispatch service," "bona fide agent") does not by itself determine legal classification — actual conduct controls.
**Common misuse:** Assuming a well-drafted agreement title resolves the classification question regardless of what actually happens in practice.

### Preexisting Agreement / Continuing Relationship
*(Established in Module 02, Section 8; part of FACT-M02-002.)* The regulatory requirement that a bona fide agent operate under an agreement made in advance that establishes an ongoing relationship with the carrier — not a one-off arrangement.

### Return / Decline vs. Reassignment
*(Central to Module 02's rejected-load teaching and one of SIM-002's critical decisions.)* Returning a declined freight opportunity to its original source is materially different from taking control of it and reassigning it to a different represented carrier — the latter is the allocation-of-traffic pattern that presents risk, even when done with good intentions like keeping a shipper's freight moving.

### Broker Authority
*(Introduced in Module 02, Section 18.)* Federal operating authority, obtained through FMCSA registration, that authorizes a person to lawfully conduct brokerage of property transportation — introductory-level in Module 02; full compliance mechanics are reserved for the future Compliance/Regulatory branch.

## Section 3: Broker Verification (Cross-Referencing Module 06)

### Entity Verification
*(Established in Module 05/06.)* Confirming that a legitimate brokerage exists and holds appropriate current registration/authority through authoritative FMCSA sources — one of two distinct verification questions (see Contact Verification below).

### Contact Verification
*(Established in Module 05/06.)* Confirming that the specific person calling, emailing, or messaging you actually represents the legitimate entity in question — a separate question from entity verification. A legitimate brokerage existing does not prove that a given contact represents it.

### BMC-84 / BMC-85
*(Established in Module 02 and 06.)* FMCSA forms evidencing a broker's or freight forwarder's required $75,000 financial security — BMC-84 for a surety bond, BMC-85 for a trust fund. Full current-rule detail (trustee eligibility, replenishment timelines, trust-asset liquidity standards) lives in Modules 02 and 06 and their companion date-sensitive registers, not restated here.

### Financial Security (Broker)
**What it means:** The $75,000 minimum financial responsibility a property broker must maintain, satisfied through a BMC-84 bond or BMC-85 trust.
**What it does NOT mean:** A guarantee that a specific carrier will be paid on a specific load — a broker's financial security is one verification layer, not a payment guarantee (see Module 06, Section 6).
**Common misuse:** Treating a broker's active financial security filing as proof that a specific transaction will be paid without issue.
**Operational example:** "Confirmed the broker's BMC-85 trust filing is active — that's one verification layer, not a payment guarantee for this specific load."

### Broker Packet / Broker Profile
**What it means:** The set of information a dispatcher or carrier gathers about a broker — authority status, financial security, contact information, and payment history — typically before or during a new working relationship.
**What it does NOT mean:** A one-time check that stays valid indefinitely — authority and financial-security status can change, and load-by-load verification of current status remains appropriate for what actually matters at the time (see Module 06).
**Common misuse:** Relying on an outdated broker profile instead of confirming current status when it matters for a specific transaction.
**Operational example:** "Broker profile on file shows active authority as of last month — reverify current status before this specific booking given the load's value."

## Section 4: Broker-Carrier/Dispatcher Interaction

### Load Posting
*(General concept; full load-board-specific mechanics reserved for the future Load-Board terminology branch.)* A broker's advertisement of available freight, typically including origin, destination, equipment type, and sometimes rate — a sourcing lead requiring further verification, not proof the load is currently available (see FOUND vs. VERIFIED AVAILABLE in Dispatch Terminology).

### Broker-Carrier Agreement
**What it means:** The agreement governing the working relationship and terms between a broker and a carrier, often executed once and referenced across multiple subsequent loads.
**What it does NOT mean:** A substitute for reviewing each individual load's specific rate confirmation — the general agreement and the load-specific rate confirmation serve different purposes (see Rate Confirmation in the Ledger and Module 05's rate-confirmation review discipline).
**Common misuse:** Assuming the general broker-carrier agreement's terms automatically override or make unnecessary the review of a specific load's rate confirmation.
**Operational example:** "The broker-carrier agreement sets general payment terms; the rate confirmation for each load still needs its own review."

### Double Brokering
**What it means:** Broadly, a pattern where freight is re-brokered to another party without proper authorization or disclosure — an unauthorized-re-brokering concern that Module 05 and 06 teach students to recognize through fact patterns rather than a single bright-line rule.
**What it does NOT mean:** Anything automatically proven by a single fact like a duplicate-looking posting — Module 05 explicitly teaches that duplicate postings alone do not establish double brokering, and this academy does not use an unverified regulatory citation to support an oversimplified "double-brokering rule" (see Module 05's Regulatory Source Register).
**Common misuse:** Concluding double brokering has occurred from a single ambiguous fact rather than verifying through an appropriate source.
**Operational example:** "Two similar postings under different company names is a signal to verify, not a confirmed double-brokering conclusion on its own."

### Unauthorized Brokerage
*(Established in Module 02, Section 19, FACT-M02-007.)* Conducting brokerage activity without the required federal authority — carries a civil-penalty framework under 49 U.S.C. § 14916, with a current inflation-adjusted maximum penalty figure that is explicitly flagged as date-sensitive and subject to revision (see Module 02's Date-Sensitive Claim Register — the exact figure is not restated here to avoid this dictionary drifting out of sync with that register over time).

### Rate Negotiation
**What it means:** The back-and-forth process of agreeing on a load's rate between a dispatcher (representing the carrier) and a broker.
**What it does NOT mean:** A process with a single "correct" outcome — negotiated rates depend on market conditions, carrier costs, and both parties' positions, not a fixed formula (full rate-mathematics depth is Module 07's and the future Rate/Pricing branch's territory).
**Common misuse:** Treating an initial posted rate as non-negotiable, or conversely assuming every posted rate is automatically negotiable regardless of context.
**Operational example:** "Negotiating the rate up slightly to reflect the actual deadhead involved in reaching this pickup."

## Section 5: Fraud & Risk Recognition (Cross-Referencing Modules 05–06)

### Broker Impersonation
*(Established in Module 05/06's fraud-recognition content.)* A fraud pattern where a bad actor poses as a legitimate broker or brokerage employee to deceive a carrier or dispatcher, often to redirect freight, payment, or information.

### Carrier Identity Theft
**What it means:** A fraud pattern where a bad actor poses as a legitimate carrier (using a real carrier's authority information or identity) to fraudulently obtain and abscond with freight.
**What it does NOT mean:** The same thing as a legitimate carrier simply having an authorized subcontractor or lease-on arrangement — the distinguishing fact is unauthorized impersonation, not any multi-party involvement.
**Common misuse:** Treating every unfamiliar carrier or unusual arrangement as automatically fraudulent rather than verifying through appropriate channels.
**Operational example:** "Verify the carrier's identity through a trusted channel before releasing pickup information — carrier identity theft is a real fraud pattern this industry sees."

### Payment Redirection
*(Established in Module 04/06's fraud-recognition content.)* A fraud attempt where a bad actor requests that payment or remittance instructions be changed, typically via a compromised or spoofed communication channel — the correct response is always STOP and verify through a previously trusted, out-of-band channel before acting.

### Rate Confirmation Discrepancy
*(Established in Module 05, Section 26.)* A material difference between a signed rate confirmation's terms and what was actually negotiated — a red flag requiring STOP/VERIFY before proceeding, not something to sign past or assume is a simple error.

---

## Cross-References to Already-Controlled Terms

The following terms already have a locked, controlled definition in `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` and are intentionally not redefined here: **Broker, Motor Carrier, Dispatcher, Rate Confirmation.**

## What's Deliberately NOT in This File

- Full USDOT/MC registration mechanics and current financial-security dollar figures → **Compliance/Regulatory terminology** (Modules 02, 04, 06 already carry the sourced depth; this file cross-references rather than restates volatile figures)
- Load-board-specific posting mechanics and platform features → **Load-Board terminology**
- Full rate-mathematics and profitability vocabulary → **Rate/Pricing terminology**
- Claims/exception-handling procedure depth → **Exception/Problem-Resolution terminology**
- Carrier business/ownership structure vocabulary → already covered in **Carrier terminology**

## Status Note

Every regulatory-adjacent term in this file points back to Module 02 or Module 06's already-verified content rather than restating a fresh claim — this is especially important here given how date-sensitive some of the underlying figures (financial security rules, penalty amounts) are known to be. No new regulatory research was conducted or required for this file; where a figure could drift out of date, this file deliberately avoids repeating the exact number and points to the source module and its date-sensitive register instead.

## Revision Log

| Date | Change |
|---|---|
| 2026-08-30 | Initial file: Sections 1–5 (24 terms) |
