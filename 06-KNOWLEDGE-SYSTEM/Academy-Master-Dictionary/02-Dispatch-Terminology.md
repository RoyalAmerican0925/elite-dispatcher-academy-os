# Academy Master Dictionary — Dispatch Terminology

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Branch:** Dispatch terminology (second branch of the Academy Master Dictionary)
**Relationship to other academy vocabulary files:**
- Builds on `01-Trucking-Terminology.md` (general industry vocabulary) and cross-references `TERMINOLOGY-LEDGER.md` (controlled terms) rather than redefining them.
- This file covers the **carrier-side dispatcher's own workflow vocabulary** — what a dispatcher actually does, plans, decides, and tracks.
- Deliberately does NOT cover: the legal boundary between dispatching and brokering (that's Module 02 content, cross-referenced but not restated), carrier business/ownership terms (Carrier terminology), broker-specific vocabulary (Broker terminology), or load-board mechanics (Load-Board terminology).

**Format for every entry:** Correct term → What it means → What it does NOT mean → Common misuse → Operational example → Regulatory distinction (when applicable).

---

## Section 1: Core Dispatch Role & Activity

### Dispatching
**What it means:** The ongoing activity of coordinating a motor carrier's trucks, drivers, and loads — sourcing freight, planning trips, assigning equipment, and managing a load from booking through delivery.
**What it does NOT mean:** Arranging transportation generally for an undefined network of carriers — that activity can cross into broker territory (see Module 02).
**Common misuse:** Using "dispatching" to describe brokerage activity, or vice versa — the two are legally and operationally distinct.
**Operational example:** "Dispatching today's loads" means coordinating them for this carrier's own trucks and drivers.

### Carrier-Side Dispatch
*(Already introduced in Module 01/02 — the core model this academy teaches.)* Coordinating on behalf of one motor carrier, as distinct from brokerage (arranging transportation generally) or freight forwarding.

### Book / Booking
**What it means:** Formally committing a carrier's truck to a specific load, typically confirmed by a rate confirmation.
**What it does NOT mean:** The same thing as merely inquiring about a load's availability — booking is the commitment step, after verification (see Module 05's FOUND vs. VERIFIED AVAILABLE distinction).
**Common misuse:** Treating a load as booked before the rate confirmation is actually reviewed and accepted (see Module 05 Section 26).
**Operational example:** "The load is booked — rate confirmation received and reviewed, driver assigned."

### Cover / Covering a Load
**What it means:** Successfully assigning an available truck/driver to a load that needs to move, so the load has committed capacity.
**What it does NOT mean:** Guaranteed on-time performance — covering a load means capacity is assigned, not that every subsequent step will go smoothly.
**Common misuse:** Confusing "covered" with "delivered" — covering happens at the assignment stage, well before delivery.
**Operational example:** "That load is covered — Truck 12 is assigned and confirmed."

### Tender / Tendering
**What it means:** A broker or shipper formally offering a specific load to a carrier for acceptance.
**What it does NOT mean:** A guarantee that the carrier must accept — a tender is an offer requiring a decision, not an automatic assignment.
**Common misuse:** Assuming a tendered load is automatically accepted without an actual accept/decline decision being made and recorded.
**Operational example:** "The broker tendered the load; we need to accept or decline before the offer expires."

### Accept / Decline
**What it means:** The dispatcher's formal response to a tendered load — accept commits the carrier, decline releases the opportunity back to its source.
**What it does NOT mean:** A silent or implied response — accept/decline should be an actual, recorded decision, not something inferred from inaction.
**Common misuse:** Letting a tender lapse without an explicit decision, creating ambiguity about whether the carrier is committed.
**Operational example:** "We're declining this tender — driver hours don't support the delivery window."

### Solicitation (Dispatcher Context)
*(See Module 02 for the full legal-boundary treatment.)* A dispatcher soliciting freight specifically on behalf of one named, represented carrier is consistent with carrier-side agency; holding oneself out as generally able to arrange transportation for any shipper is a different activity that presents brokerage risk — the distinction Module 02 exists to teach.

## Section 2: Planning & Assignment

### Trip Planning
**What it means:** Mapping out a load's full route, timing, and requirements before or during dispatch — including pickup/delivery windows, HOS feasibility, and any special handling.
**What it does NOT mean:** A one-time calculation that never needs revisiting — trip plans often require adjustment as conditions change.
**Common misuse:** Treating initial mileage/time estimates as fixed rather than verifying feasibility against the driver's actual current hours (see Module 05's HOS-timing discipline).
**Operational example:** "Trip plan confirms the delivery window is achievable given the driver's remaining hours."

### Load Assignment
**What it means:** Designating which specific truck, trailer, and driver will handle a given load.
**What it does NOT mean:** A decision made from equipment type alone — assignment should account for the full multi-factor fit check (see Module 03).
**Common misuse:** Assigning a load based only on driver availability without confirming equipment/commodity/dimension/weight compatibility.
**Operational example:** "Load assignment: Driver Martinez, Truck 12, Trailer 204."

### Dispatch Sheet / Dispatch Board
**What it means:** The operational record (physical or digital) tracking which drivers/trucks are assigned to which loads, their status, and key details.
**What it does NOT mean:** A legal or billing document — the dispatch sheet is an internal operational tracking tool, distinct from a rate confirmation or invoice.
**Common misuse:** Treating dispatch-sheet notes as if they carry the same legal weight as a signed rate confirmation.
**Operational example:** "Check the dispatch board — Truck 8 shows available as of this morning."

### Available / Availability
**What it means:** A truck/driver's current status as open to receive a new load assignment, based on current location, hours, and equipment condition.
**What it does NOT mean:** A permanent or static status — availability changes constantly as loads are booked, hours are used, and equipment moves.
**Common misuse:** Relying on stale availability information instead of confirming a driver's current status before committing to a load.
**Operational example:** "Truck 12 shows available Thursday morning, pending confirmation of the current load's on-time delivery."

### Empty Time / Idle Time
**What it means:** Time a truck spends without an assigned load, generating no revenue.
**What it does NOT mean:** The same thing as deadhead (already controlled — deadhead is empty *miles*, while empty/idle time can include a truck sitting still with no load at all).
**Common misuse:** Using "empty time" and "deadhead" interchangeably; one is about mileage, the other about duration without a load.
**Operational example:** "Minimizing empty time between deliveries is a core dispatch efficiency goal."

### Utilization
**What it means:** A general measure of how effectively a truck's available time and capacity are being used for revenue-generating work.
**What it does NOT mean:** A single standardized metric with one universal formula — different carriers may track utilization differently.
**Common misuse:** Assuming utilization figures are directly comparable across different carriers or systems without knowing how each one calculates it.
**Operational example:** "This week's utilization improved after reducing empty time between loads."

### Pre-Plan / Pre-Planning
**What it means:** Lining up a truck's likely next load or general direction before its current load is even delivered, to reduce idle time.
**What it does NOT mean:** A finalized booking — a pre-plan is a working assumption that still needs to be verified and confirmed as the current load nears completion.
**Common misuse:** Treating a pre-planned load as guaranteed and communicating it to the driver as fixed before it's actually confirmed.
**Operational example:** "Pre-planning a reload out of the delivery area so the truck doesn't sit once it's empty."

### Standing Instructions / Carrier Preferences
**What it means:** A carrier's general, ongoing operating preferences (preferred lanes, commodities to avoid, minimum rate expectations, home-time commitments) that inform routine dispatch decisions without needing to be re-confirmed on every single load.
**What it does NOT mean:** A substitute for load-specific verification — standing preferences shape which opportunities get pursued, but each individual load still needs its own fit check.
**Common misuse:** Assuming old standing instructions are still current without periodically confirming they haven't changed.
**Operational example:** "Standing instructions: this carrier doesn't run into New York City — filter that out before presenting load options."

### Home Time
**What it means:** A driver's scheduled or expected time away from the road, spent at home — a key planning factor when sourcing and assigning loads.
**What it does NOT mean:** A fixed, universal schedule — home-time expectations vary by driver agreement, operating model (OTR/regional/local), and individual carrier policy.
**Common misuse:** Assigning a load without checking whether it conflicts with a driver's committed home-time expectation.
**Operational example:** "This load's delivery timing conflicts with the driver's home-time commitment — look for an alternative before assigning it."

### Relay
**What it means:** A method of moving a load using more than one driver in sequence, handing off the load (and sometimes the equipment) partway through the route rather than one driver completing the entire trip.
**What it does NOT mean:** The same thing as team driving (see Trucking Terminology's Team Driver entry) — a relay uses separate drivers taking turns at different points, rather than two drivers riding together in one truck.
**Common misuse:** Assuming a relay handoff happens automatically without confirming both drivers, timing, and location details in advance.
**Operational example:** "This load uses a relay — the first driver hands off to a second driver at the halfway point."

## Section 3: Verification & Decision Judgment

### FOUND vs. VERIFIED AVAILABLE
*(Established in Module 05.)* FOUND means a potentially relevant load opportunity has been located; VERIFIED AVAILABLE means its availability has actually been confirmed. The two are not the same status, and treating them as equivalent risks pursuing freight that's already covered.

### Fit Check
**What it means:** The multi-factor process of confirming a load is actually compatible with the assigned equipment, driver, and carrier restrictions before booking.
**What it does NOT mean:** A single check on one factor (like weight or equipment label alone) — a genuine fit check covers commodity, dimensions, weight/axles, temperature, and driver qualifications together (see Module 03).
**Common misuse:** Calling a load "fit-checked" after confirming only one factor, like nominal equipment type.
**Operational example:** "Fit check complete: equipment, weight, and endorsement all confirmed compatible."

### Red Flag
**What it means:** An indicator that something about a load, contact, or document warrants closer verification before proceeding.
**What it does NOT mean:** Proof of a problem — a red flag triggers verification, not an automatic conclusion of fraud, incompatibility, or refusal (see Module 05/06's fraud-recognition discipline).
**Common misuse:** Treating a single red flag as confirmed wrongdoing rather than a signal to verify.
**Operational example:** "The rate confirmation mismatch is a red flag — verify with the broker before signing."

### STOP / VERIFY / ESCALATE
*(Core methodology used throughout this academy, most explicitly in Modules 02, 03, 05, and 06.)* A decision discipline for handling uncertainty: stop before acting on incomplete or questionable information, verify it through an appropriate source, and escalate if verification doesn't resolve the concern or exceeds the dispatcher's own judgment/authority.

### Missing Information
**What it means:** A recognized gap in the facts needed to make a sound dispatch decision.
**What it does NOT mean:** Permission to guess or assume — recognizing missing information should trigger verification, not invented facts (a theme repeated across every module in this academy).
**Common misuse:** Filling a missing-information gap with an assumption based on a similar past load rather than verifying this specific one.
**Operational example:** "Pickup appointment time is missing — verify with the broker before finalizing driver instructions."

### Escalation Path
**What it means:** The defined chain of who a dispatcher contacts when a decision exceeds their own authority or judgment — typically carrier ownership, a manager, or another appropriate specialist.
**What it does NOT mean:** A last resort used only in emergencies — escalation is a normal, expected part of the STOP/VERIFY/ESCALATE discipline, not a sign of failure.
**Common misuse:** Avoiding escalation out of a sense that asking for help reflects poorly on the dispatcher, leading to a decision made beyond one's actual authority.
**Operational example:** "This is outside my authority to resolve — escalating to the carrier owner per our escalation path."

## Section 4: Communication & Status Tracking

### Check Call
**What it means:** A scheduled or routine communication with a driver to confirm status, location, and progress on a load.
**What it does NOT mean:** A one-time event — check calls are typically recurring throughout a trip, not a single confirmation at dispatch.
**Common misuse:** Relying on a single early check call for the entire trip's status rather than maintaining ongoing contact.
**Operational example:** "Scheduled check call with the driver at the halfway point of the route."

### Status Update
**What it means:** Current information about a load's progress, communicated to relevant parties (broker, receiver, carrier records).
**What it does NOT mean:** A guess or a stale figure carried forward without confirmation — status updates should reflect verified current information (see ETA in Section 1 of the Trucking Terminology file).
**Common misuse:** Providing a status update based on an outdated check call rather than the most current available information.
**Operational example:** "Status update to the broker: on schedule, expected delivery tomorrow morning."

### Load Confirmation Call
**What it means:** A call to the broker or shipper confirming a load's details and availability before formally booking it.
**What it does NOT mean:** A substitute for reviewing the actual written rate confirmation — the verbal call supports, but does not replace, the document review (see Module 05 Section 26).
**Common misuse:** Treating a verbal confirmation call as fully binding without still reviewing the written rate confirmation for discrepancies.
**Operational example:** "Confirmation call complete — broker verified pickup window and rate; awaiting the written rate confirmation."

### Dispatch Note
**What it means:** A brief, professional written record of a decision, instruction, or piece of information relevant to a load, kept for operational and accountability purposes.
**What it does NOT mean:** An informal or optional habit — dispatch notes create the record that supports later decisions and can matter if a dispute arises.
**Common misuse:** Skipping documentation of verbal instructions or decisions, leaving no record if a question comes up later.
**Operational example:** "Dispatch note: driver authorized to wait for a new appointment window after being bumped at the dock."

### No-Show
**What it means:** A situation where a driver fails to arrive for a scheduled appointment without prior notice or cancellation.
**What it does NOT mean:** The same thing as a documented, communicated delay — a no-show specifically implies the facility received no advance notice.
**Common misuse:** Treating any late arrival as a no-show, even when the delay was communicated in advance.
**Operational example:** "Contact the driver immediately — the receiver is reporting a no-show for the scheduled appointment."

### Load Cancellation
**What it means:** A formal decision by the broker, shipper, or carrier to call off a previously booked load before it's completed.
**What it does NOT mean:** A cost-free or purely administrative event — cancellations can carry financial and relationship consequences depending on timing and the applicable agreement.
**Common misuse:** Treating a cancellation casually without documenting the reason or checking whether any cancellation terms apply.
**Operational example:** "The broker cancelled the load two hours before pickup — document the cancellation and reason."

## Section 5: Performance & Records

### On-Time Performance
**What it means:** A measure of how consistently loads are picked up and delivered within their agreed windows.
**What it does NOT mean:** A figure carriers/brokers calculate identically — specific definitions of "on time" (e.g., grace periods) can vary.
**Common misuse:** Assuming a universal definition of "on time" applies across every broker or shipper relationship without checking their specific standard.
**Operational example:** "On-time performance this month reflects two loads delayed by facility-side bumped appointments, not carrier error."

### Load Count
**What it means:** The number of loads a dispatcher, driver, or truck has moved over a given period — a basic activity/volume metric.
**What it does NOT mean:** A measure of profitability or efficiency by itself — load count says nothing about rate, deadhead, or margin (see Module 07's introductory rate-screening content).
**Common misuse:** Treating a high load count as automatically good performance without considering the economics of those loads.
**Operational example:** "Load count is up this week, but check whether deadhead also increased before calling it a good week."

### Trip Sheet
**What it means:** A record documenting the details of a specific completed or in-progress trip — route, stops, times, and relevant notes.
**What it does NOT mean:** The same document as the dispatch sheet (which tracks current assignments across the fleet) — a trip sheet is specific to one load's journey.
**Common misuse:** Conflating trip-sheet records with the broader dispatch board; they serve different tracking purposes.
**Operational example:** "The trip sheet shows the delay occurred at the second stop, not in transit."

### Detention Log
**What it means:** A running record tracking detention time and circumstances across loads, used to support billing claims and identify problem facilities.
**What it does NOT mean:** An automatic entitlement to payment — a detention log supports a claim, but whether detention pay actually applies still depends on the specific agreement and documentation (see TERMINOLOGY-LEDGER.md's Detention entry).
**Common misuse:** Assuming logged detention time automatically converts to paid detention without confirming it against the applicable agreement.
**Operational example:** "The detention log shows this receiver has caused delays on three of the last five loads — worth flagging to the carrier."

### Dead Zone / Freight Desert
**What it means:** A geographic area with historically low freight volume, making it difficult to find a reload without significant deadhead.
**What it does NOT mean:** A permanent or universal condition — freight density in a given area can shift over time and by season.
**Common misuse:** Assuming an area is a dead zone based on outdated experience rather than checking current conditions.
**Operational example:** "That delivery area is a known dead zone — plan for likely deadhead before committing to the load."

---

## Cross-References to Already-Controlled Terms

The following terms already have a locked, controlled definition in `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` and are intentionally not redefined here: **Dispatcher, Motor Carrier, Rate Confirmation, RPM, Deadhead, Detention, TONU, POD, HOS, ELD.**

## What's Deliberately NOT in This File

- The legal boundary between carrier-side dispatching and brokerage (allocation of traffic, bona fide agent, etc.) — that's Module 02's territory; this file uses the dispatcher role as already established there, without re-litigating the boundary.
- Carrier business/ownership vocabulary (owner-operator, fleet structure) → **Carrier terminology**
- Broker-specific vocabulary → **Broker terminology**
- Load-board mechanics (posting, board features) → **Load-Board terminology**
- Rate/pricing depth (dispatcher compensation/fee structure) → **Rate/Pricing terminology**
- Exception/claims handling depth → **Exception/Problem-Resolution terminology**

## Status Note

All terms here are operational/workflow vocabulary already consistent with Modules 01–07's established teaching — no new regulatory claims were introduced, and nothing here required fresh verification beyond what those modules already carry.

## Revision Log

| Date | Change |
|---|---|
| 2026-08-30 | Initial file: Sections 1–5 (28 terms) |
| 2026-08-30 | Added Pre-Plan/Pre-Planning, Standing Instructions/Carrier Preferences (Section 2); Escalation Path (Section 3); No-Show, Load Cancellation (Section 4); Detention Log, Dead Zone/Freight Desert (Section 5) — 8 additional terms (36 total) |
| 2026-08-30 | Added Solicitation (Section 1), Home Time, Relay (Section 2) — 3 additional terms (39 total) |
