# Academy Master Dictionary — Shipper/Receiver Terminology

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Branch:** Shipper/Receiver terminology (fifth branch of the Academy Master Dictionary)
**Relationship to other academy vocabulary files:**
- Builds on `01-Trucking-Terminology.md` (which already covers Dock, Yard, Drop-and-Hook, Live Load, FCFS, Appointment) through `04-Broker-Terminology.md`; cross-references `TERMINOLOGY-LEDGER.md` rather than redefining controlled terms.
- This file covers **the shipper's and receiver's side of a transaction** — the facility-side vocabulary, documentation touchpoints, and expectations a dispatcher needs to recognize, as distinct from the carrier/dispatcher's own workflow (already covered) or the physical facility-type vocabulary already established in Trucking Terminology.
- Deliberately kept light on: full Bill of Lading field-level detail and claims/damage procedure — reserved for **Documentation terminology** and **Exception/Problem-Resolution terminology** respectively.

**Format for every entry:** Correct term → What it means → What it does NOT mean → Common misuse → Operational example → Regulatory distinction (when applicable).

---

## Section 1: Core Parties

### Shipper
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md`.)* The party that owns the freight and needs it moved; typically the origin point of a load.

### Consignee / Receiver
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md`.)* The party the freight is being delivered to; typically the destination point of a load.

### Shipper of Record
**What it means:** The party formally identified as the shipper on a load's official documentation, regardless of who may have originally sourced or arranged the freight.
**What it does NOT mean:** Automatically the same party as whoever first contacted the carrier or broker about the load — the shipper of record is a documentation fact, confirmed on the bill of lading and rate confirmation, not assumed from who made first contact.
**Common misuse:** Assuming the shipper of record without confirming it against the actual documentation, especially on loads involving multiple intermediary parties.
**Operational example:** "Confirm the shipper of record matches what's shown on the bill of lading before finalizing pickup paperwork."

### Third-Party Billing
**What it means:** An arrangement where the freight charges are billed to a party other than the shipper or receiver named on the shipment — often a broker or a separate company managing transportation costs.
**What it does NOT mean:** A change to who the shipper or receiver actually is — third-party billing affects who pays, not who ships or receives the freight.
**Common misuse:** Confusing the billing party with the shipper or consignee on the actual freight documentation.
**Operational example:** "This load is third-party billed to the broker — the shipper and receiver on the paperwork remain the actual originating and destination companies."

## Section 2: Facility Access & Scheduling

**Note:** Dock, Yard, Drop-and-Hook, Live Load/Unload, Appointment, and FCFS are already covered in `01-Trucking-Terminology.md`. This section adds shipper/receiver-specific facility vocabulary not yet covered there.

### Facility Requirements
**What it means:** The specific rules, equipment, or credentials a shipper's or receiver's location requires for a driver or carrier to gain access and complete a pickup or delivery — e.g., specific PPE, check-in procedures, or facility-specific paperwork.
**What it does NOT mean:** A universal standard — facility requirements vary significantly by location, and assuming one facility's rules apply to another risks a failed or delayed pickup/delivery.
**Common misuse:** Assuming a driver already knows a new facility's requirements based on experience at a different, unrelated facility.
**Operational example:** "This receiver requires a hard hat and safety vest at check-in — confirm the driver is prepared before arrival."

### Check-In Procedure
**What it means:** The specific process a driver must follow upon arrival at a shipper or receiver facility before being directed to a dock or loading area.
**What it does NOT mean:** A guarantee of immediate dock assignment — checking in starts the process; it doesn't by itself confirm a specific loading time.
**Common misuse:** Assuming check-in and dock assignment happen simultaneously without verifying the facility's actual process.
**Operational example:** "Check in at the guard shack and provide the reference number before proceeding to the dock area."

### Appointment Window
**What it means:** A scheduled range of time (rather than one exact moment) within which a facility expects a pickup or delivery to occur.
**What it does NOT mean:** The same as a guaranteed exact time — an appointment window still requires the driver to arrive within the range, but doesn't promise service the instant the window opens.
**Common misuse:** Treating the start of an appointment window as a guaranteed exact service time rather than the beginning of an acceptable arrival range.
**Operational example:** "The appointment window is 8:00–10:00 AM — plan arrival within that range, not exactly at 8:00."

### Facility Hours
**What it means:** The specific hours during which a shipper or receiver location is open and able to process pickups or deliveries.
**What it does NOT mean:** The same thing as 24-hour access, even under an FCFS scheduling model (see Trucking Terminology's FCFS entry — FCFS still only operates within actual facility hours).
**Common misuse:** Assuming a facility operates around the clock without confirming its actual posted hours.
**Operational example:** "Confirm the receiver's facility hours before committing to a late-evening delivery window."

### Detention-Triggering Event
**What it means:** The specific documented occurrence (e.g., check-in time, or the end of a facility's stated free time) that a detention claim's timing calculation is based on.
**What it does NOT mean:** An automatic determination that detention pay applies — identifying when the clock arguably started is different from confirming detention is actually owed, which still depends on the applicable agreement (see TERMINOLOGY-LEDGER.md's Detention entry).
**Common misuse:** Assuming any documented delay automatically qualifies for detention without checking the specific facility's free-time terms and the carrier's actual agreement.
**Operational example:** "Document the exact check-in time — that's the detention-triggering event this claim will be measured from, if detention applies under the agreement."

## Section 3: Loading, Unloading & Handling

### Loading Method
**What it means:** The specific process by which freight is loaded onto the trailer — e.g., dock-level loading, ground loading, forklift loading, or crane loading.
**What it does NOT mean:** A universal process across every shipper — loading method is facility- and commodity-specific and must be confirmed for each load (see Module 03's equipment/facility-fit discipline).
**Common misuse:** Assuming a load's loading method without confirming it, especially for non-standard freight.
**Operational example:** "This shipper uses forklift loading — confirm the assigned trailer and driver are set up for that method."

### Piece Count
**What it means:** The number of individual units (pallets, boxes, items) being shipped, as documented at pickup.
**What it does NOT mean:** The same thing as weight or volume — piece count is a separate figure from the shipment's total weight or cubic space.
**Common misuse:** Treating piece count as sufficient information about a shipment's size or weight without separately confirming those figures.
**Operational example:** "Piece count confirmed at 22 pallets — still need weight and dimensions to complete the fit check."

### Pallet Count vs. Pallet Exchange
**What it means:** Pallet count is simply the number of pallets in a shipment. Pallet exchange is a separate practice where a receiver provides empty pallets back to the driver in exchange for the ones delivered, to avoid pallet loss.
**What it does NOT mean:** That pallet exchange is a universal practice — not all receivers participate in pallet exchange, and assuming it's available without confirming can leave a carrier short on pallets.
**Common misuse:** Assuming pallet exchange applies at a facility without confirming it in advance.
**Operational example:** "Confirm whether this receiver does pallet exchange before the driver leaves without picking up replacement pallets."

### Floor-Loaded
**What it means:** Freight loaded directly onto the trailer floor without pallets, often requiring hand-unloading.
**What it does NOT mean:** The same handling ease as palletized freight — floor-loaded freight typically takes significantly longer to load/unload and may affect facility scheduling and labor needs.
**Common misuse:** Assuming a floor-loaded shipment will load or unload as quickly as a comparable palletized shipment.
**Operational example:** "This load is floor-loaded — budget extra time for loading compared to a standard palletized shipment."

### Lumper / Lumper Service
**What it means:** A third-party labor service, common at certain receivers (particularly in food/grocery distribution), hired to load or unload a trailer, typically paid for by the carrier or reimbursed depending on the agreement.
**What it does NOT mean:** An automatically reimbursed cost — whether a lumper fee is reimbursed, and whether it's excluded from dispatcher commission, depends on the specific carrier agreement (see Module 07's accessorial-verification discipline).
**Common misuse:** Assuming lumper fees are automatically reimbursed without checking the applicable agreement and without a receipt supporting the claim.
**Operational example:** "Lumper fee paid at delivery — keep the receipt and check the carrier agreement for whether it's reimbursable."

### Seal / Seal Number
**What it means:** A tamper-evident device applied to a trailer's doors after loading, with a unique identifying number recorded on the shipping documents to help confirm the trailer wasn't opened in transit.
**What it does NOT mean:** A guarantee that freight wasn't tampered with through some other means — a seal is one control, not an absolute guarantee.
**Common misuse:** Failing to record and verify the seal number at both pickup and delivery, which weakens its usefulness as a control.
**Operational example:** "Confirm the seal number matches between the pickup documentation and what the receiver observes at delivery."

## Section 4: Facility-Specific Requirements & Credentials

### TWIC (Transportation Worker Identification Credential)
**What it means:** A credential some port and secure-facility environments require for access.
**What it does NOT mean:** A universal requirement at every facility — TWIC applies specifically to certain secure facilities (particularly port-related), not general trucking operations broadly.
**Common misuse:** Assuming TWIC is required at a facility without confirming that specific facility's actual access requirements.
**Operational example:** "Confirm whether this port-adjacent facility requires TWIC before assigning a driver who doesn't hold one."

### Washout / Wash Ticket
**What it means:** A cleaning of a trailer's interior (a "washout") performed between loads, particularly important for food-grade or sensitive commodities; a wash ticket is the documentation confirming it was done.
**What it does NOT mean:** A universal requirement for every load — whether a washout is needed depends on the previous and next commodities and the specific facility's requirements.
**Common misuse:** Assuming a trailer is clean enough for a food-grade load without confirming washout status and documentation.
**Operational example:** "This receiver requires a current wash ticket before accepting a food-grade delivery into this trailer."

### Food-Grade / Food-Safe Requirements
**What it means:** Facility- and commodity-specific requirements ensuring a trailer meets sanitary conditions appropriate for transporting food products.
**What it does NOT mean:** A single universal standard — specific requirements vary by shipper, receiver, and commodity, and general trailer cleanliness alone doesn't automatically satisfy food-grade requirements.
**Common misuse:** Assuming a trailer that "looks clean" automatically satisfies food-grade requirements without the appropriate documentation or washout.
**Operational example:** "Confirm this shipper's specific food-grade requirements before assigning a trailer that previously hauled a non-food commodity."

## Section 5: Delivery Outcomes

### Proof of Delivery (POD)
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md`.)* Documentation confirming freight was delivered, typically including a signature, and often required before an invoice can be submitted.

### Short / Shortage
**What it means:** A situation where the quantity of freight actually delivered is less than what was documented as shipped.
**What it does NOT mean:** Automatic proof of carrier fault — a shortage could originate at the shipper (freight never loaded), in transit, or at the receiver's own counting; the cause requires investigation, not assumption.
**Common misuse:** Assuming a shortage is automatically the carrier's fault, or automatically the shipper's fault, without documentation supporting either conclusion.
**Operational example:** "Receiver reports a shortage of two pallets — document the discrepancy and compare against the pickup piece count before assuming fault."

### Overage
**What it means:** A situation where the quantity of freight delivered is greater than what was documented as shipped.
**What it does NOT mean:** A benign or ignorable event — an overage can indicate a documentation error or a misdirected shipment and should be documented and reported, not just accepted.
**Common misuse:** Simply accepting an overage without documenting it or flagging the discrepancy to the shipper/broker.
**Operational example:** "The receiver noted an overage of one pallet — document it and report the discrepancy rather than ignoring it."

### Concealed Damage
**What it means:** Damage to freight that isn't apparent from the outside of packaging and is only discovered after the shipment is opened, sometimes after the driver has already departed.
**What it does NOT mean:** The same as damage noted at time of delivery — concealed damage claims involve different timing and documentation considerations (full claims procedure is reserved for the future Exception/Problem-Resolution terminology branch).
**Common misuse:** Assuming concealed damage automatically implicates the carrier's most recent transport leg without considering the freight's full handling history.
**Operational example:** "The receiver reported concealed damage discovered after unpacking — this requires its own documentation process, separate from damage noted at the time of delivery."

### Signed for Exception / Clean Signature
**What it means:** A "clean" signature on a POD indicates the receiver accepted the freight without noting any visible problems; a signature "for exception" specifically notes a problem (damage, shortage) at the time of signing.
**What it does NOT mean:** That a clean signature eliminates the possibility of any later claim (see Concealed Damage above) — it specifically means no *visible* exception was noted at that time.
**Common misuse:** Treating a clean signature as an absolute, permanent release from any possible future claim, when it specifically addresses only what was visible at the time of signing.
**Operational example:** "Encourage the driver to note any visible damage on the POD at delivery — a clean signature only speaks to what was visible at that moment."

---

## Cross-References to Already-Controlled Terms

The following terms already have a locked, controlled definition in `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` and are intentionally not redefined here: **Shipper, Consignee/Receiver, POD, Detention, TONU.**

The following terms are already covered in `01-Trucking-Terminology.md` and are not redefined here: **Dock, Yard, Drop-and-Hook, Live Load/Unload, Appointment, FCFS, Refused Freight, Diversion, Reconsignment.**

## What's Deliberately NOT in This File

- Full Bill of Lading field-level detail → **Documentation terminology**
- Formal claims/damage-dispute procedure → **Exception/Problem-Resolution terminology**
- Accessorial billing mechanics (lumper reimbursement specifics, detention pay calculation) → **Billing/Factoring terminology** and Module 07
- Broker-side handling of shipper relationships → already covered in **Broker terminology**

## Status Note

All terms here are operational vocabulary consistent with Modules 01–07's established teaching, particularly the accessorial-verification discipline (never assume a fixed amount or automatic entitlement) that recurs across detention, lumper fees, and shortage/damage handling. No new regulatory claims were introduced in this file.

## Revision Log

| Date | Change |
|---|---|
| 2026-08-30 | Initial file: Sections 1–5 (22 terms) |
