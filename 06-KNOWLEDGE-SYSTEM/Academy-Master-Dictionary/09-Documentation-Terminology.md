# Academy Master Dictionary — Documentation Terminology

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Branch:** Documentation terminology (ninth branch of the Academy Master Dictionary)
**Relationship to other academy vocabulary files:**
- Builds on `01-Trucking-Terminology.md` through `08-Rate-Pricing-Terminology.md`; cross-references `TERMINOLOGY-LEDGER.md` rather than redefining controlled terms.
- This file is where **document-specific field-level detail** finally lives — every other branch has deferred Bill of Lading specifics, rate confirmation clause detail, and related documentation mechanics here.
- Draws on Module 05's rate-confirmation review discipline (Section 26) and the Shipper/Receiver branch's delivery-outcome documentation (POD, shortage, damage) without restating those; this file focuses on the documents themselves as artifacts — what they are, what they establish, and what they don't.

**Format for every entry:** Correct term → What it means → What it does NOT mean → Common misuse → Operational example → Regulatory distinction (when applicable).

---

## Section 1: Core Shipping Documents

### Bill of Lading (BOL)
**What it means:** The core shipping document issued at pickup, recording the shipper, consignee, carrier, freight description, and terms of carriage — serves as a receipt for the freight and evidence of the contract of carriage.
**What it does NOT mean:** A document whose legal effect is identical in every circumstance — like a rate confirmation, a BOL's precise legal weight can depend on its specific terms, the parties, and applicable law; this academy trains dispatchers to read and verify documents carefully, not to render legal conclusions about them.
**Common misuse:** Treating the BOL as interchangeable with the rate confirmation — they serve different purposes and are generated at different points in the process.
**Operational example:** "The BOL confirms what was actually picked up and its condition at origin — compare it against the rate confirmation's stated commodity and weight."

### Straight Bill of Lading
**What it means:** A non-negotiable BOL specifying a named consignee, who alone is entitled to receive the freight.
**What it does NOT mean:** A document that can be transferred to a different party by endorsement — that's the distinguishing feature of an order BOL (see below), not a straight BOL.
**Common misuse:** Assuming a straight BOL can be reassigned to a different receiver the way an order BOL can.
**Operational example:** "This is a straight BOL naming a specific consignee — delivery should go to that named party."

### Order Bill of Lading
**What it means:** A negotiable BOL that can be transferred (endorsed) to a different party, often used when freight ownership may change hands during transit.
**What it does NOT mean:** The standard or default document type — most domestic truckload freight uses a straight BOL; an order BOL is the exception used for specific commercial reasons.
**Common misuse:** Assuming any BOL can be treated as negotiable without checking whether it's actually an order BOL.
**Operational example:** "Confirm whether this is an order BOL before assuming the named party is the only one entitled to the freight."

### Rate Confirmation
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md` and Module 05, Section 26.)* The document confirming a load's negotiated terms — rate, origin, destination, equipment, and other specifics. Its legal effect can depend on the parties, authority, agreement language, and surrounding facts; the operational rule is careful review against negotiated terms, with STOP/VERIFY on any material discrepancy, not a categorical legal conclusion.

### Proof of Delivery (POD)
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md` and Shipper/Receiver Terminology.)* Documentation confirming freight was delivered, typically including a signature, and often required before an invoice can be submitted.

### Packing List / Packing Slip
**What it means:** A document, typically prepared by the shipper, itemizing the specific contents of a shipment — more granular than the BOL's summary description.
**What it does NOT mean:** A substitute for the BOL — the packing list details contents; the BOL is the governing shipping/receipt document.
**Common misuse:** Relying on the packing list alone for shipment verification without cross-checking it against the BOL's stated piece count and description.
**Operational example:** "Cross-check the packing list's itemized contents against the BOL's summary piece count."

## Section 2: Carrier & Compliance Documents (Introductory Cross-Reference)

**Note:** Full compliance/regulatory depth on these documents (USDOT/MC registration records, safety-rating documentation, insurance-filing specifics) is reserved for the future **Compliance/Regulatory terminology** branch. This section covers only the documents themselves as artifacts already introduced elsewhere.

### Certificate of Insurance (COI)
*(Already established in Carrier Terminology and Module 04.)* A document summarizing represented insurance information — useful, but not proof by itself of current operating authority or that coverage hasn't changed since issuance.

### Carrier Packet
*(Already established in Carrier Terminology.)* The standard set of documents (authority information, insurance information, W-9, references) a carrier provides when establishing a new working relationship — represented information that still benefits from independent verification where it matters.

### W-9
*(Already established in Carrier Terminology.)* An IRS tax-identification/certification form commonly used in business payment setup. A name difference from FMCSA-registered information is commonly explainable for disregarded-entity structures and is not, by itself, evidence of fraud.

### Dispatch Agreement
*(Already established in Carrier Terminology.)* The written agreement between a dispatch business and a carrier establishing the terms of their working relationship — its title alone does not determine legal classification; actual conduct controls.

## Section 3: Rate Confirmation Review Detail

### Rate Confirmation Review
*(Established in Module 05, Section 26.)* The operational practice of carefully reviewing a rate confirmation's specific fields — broker identity, carrier identity, load/reference number, origin, destination, pickup/delivery information, commodity, weight, equipment, rate, accessorial provisions, special instructions, deductions/fees, and payment/remittance information — against the negotiated terms before accepting, signing, or processing it.

### Material Discrepancy
*(Established in Module 05, Section 26.)* A conflict between a rate confirmation's stated terms and what was actually negotiated that's significant enough to require STOP/VERIFY before proceeding — as distinct from an immaterial variation that doesn't affect the substance of the deal.
**What it does NOT mean:** Something the dispatcher should resolve by simply assuming which version (verbal or written) is correct — a material discrepancy requires verifying the actual discrepancy with the broker before proceeding, not guessing.

### Signing Authority
**What it means:** The specific scope of authorization a dispatcher actually holds to accept, sign, or process a rate confirmation or other document on a carrier's behalf.
**What it does NOT mean:** An automatic authority that comes with the dispatcher role generally — signing authority is controlled by the carrier's actual authorization (Dispatch Agreement, LPOA, or other applicable agreement), not assumed simply because the dispatcher is the one reviewing the document.
**Common misuse:** Signing a document under the assumption that reviewing it implies authority to sign it, without confirming the actual scope of authorization.
**Operational example:** "Confirm this falls within the dispatcher's actual signing authority under the carrier's Dispatch Agreement before signing."

## Section 4: Delivery & Exception Documentation (Cross-Reference)

**Note:** Full claims/exception procedure is reserved for the future **Exception/Problem-Resolution terminology** branch. This section covers only the documents already introduced in Shipper/Receiver Terminology.

### Signed for Exception / Clean Signature
*(Already established in Shipper/Receiver Terminology.)* A "clean" POD signature indicates no visible problem was noted at delivery; a signature "for exception" specifically notes a problem. A clean signature only speaks to what was visible at that moment — it does not eliminate the possibility of a later concealed-damage claim.

### Seal / Seal Number
*(Already established in Shipper/Receiver Terminology.)* A tamper-evident device applied after loading, with its number recorded on shipping documents — one control among several, not an absolute guarantee against tampering.

### Wash Ticket
*(Already established in Shipper/Receiver Terminology.)* Documentation confirming a trailer washout was performed — relevant for food-grade or sensitive-commodity requirements.

## Section 5: Document Handling Practices

### Document Retention
**What it means:** The practice of keeping copies of load-related documents (BOL, rate confirmation, POD, and related records) for a defined period after a load is completed.
**What it does NOT mean:** A universal retention period — how long specific documents should be retained can depend on applicable requirements and business practice, and this academy does not state a single universal retention period as a categorical rule.
**Common misuse:** Assuming a casual, undefined retention practice is adequate without an actual documented policy.
**Operational example:** "Retain the full document set — BOL, rate confirmation, POD — per the carrier's document retention policy."

### Document Discrepancy
**What it means:** Any inconsistency between two or more documents related to the same load (e.g., BOL vs. rate confirmation, packing list vs. BOL).
**What it does NOT mean:** Automatic proof of fraud or error by any specific party — a discrepancy is a signal to verify and resolve, not a conclusion about fault (consistent with the same non-diagnostic discipline applied to red flags throughout this academy).
**Common misuse:** Assuming which document is "correct" without actually verifying the discrepancy with the relevant party.
**Operational example:** "The BOL and rate confirmation show different weights — document discrepancy noted; verify with the broker before proceeding."

### Electronic Signature / E-Sign
**What it means:** A digital method of signing a document electronically rather than with a physical/wet signature.
**What it does NOT mean:** A universally identical process across every platform or every document type — specific electronic-signature requirements and validity can depend on the applicable document and platform.
**Common misuse:** Assuming every document type accepts electronic signature without confirming it's appropriate for that specific document.
**Operational example:** "Confirm the rate confirmation platform's electronic-signature process is properly completed before treating the load as booked."

---

## Cross-References to Already-Controlled Terms

The following terms already have a locked, controlled definition in `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` and are intentionally not redefined here: **Rate Confirmation, POD.**

The following terms are already established in other branches and are cross-referenced (not restated) here: **COI, Carrier Packet, W-9, Dispatch Agreement** (Carrier Terminology); **Signed for Exception/Clean Signature, Seal/Seal Number, Wash Ticket** (Shipper/Receiver Terminology).

## What's Deliberately NOT in This File

- Full compliance/regulatory registration document mechanics (USDOT/MC filing documents, safety-rating records) → **Compliance/Regulatory terminology**
- Full claims/damage-dispute documentation procedure → **Exception/Problem-Resolution terminology**
- Invoice/billing document mechanics → **Billing/Factoring terminology**

## Status Note

All terms here are consistent with the document-handling discipline already established across Modules 04–07 — no document is treated as automatically resolving a legal question on its own, and every discrepancy routes to STOP/VERIFY rather than assumption. No new regulatory claims were introduced in this file.

## Revision Log

| Date | Change |
|---|---|
| 2026-08-31 | Initial file: Sections 1–5 (16 new terms, 6 cross-referenced) |
