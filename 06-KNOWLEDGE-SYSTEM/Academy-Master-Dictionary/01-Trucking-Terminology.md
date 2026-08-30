# Academy Master Dictionary — Trucking Terminology

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Branch:** Trucking terminology (first branch of the Academy Master Dictionary)
**Relationship to other academy vocabulary files:**
- `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` is the **controlled subset** — the small list of terms specifically flagged as needing one locked meaning across curriculum, assessments, simulations, and software. Where a term below is already in the Ledger, this file cross-references it rather than restating a second, potentially drifting definition.
- This file is the **general foundational layer**: broad trucking-industry vocabulary every student needs before any role-specific or topic-specific branch makes sense.
- Later branches (Dispatch, Carrier, Broker, Shipper/Receiver, Equipment, Load-Board, Rate/Pricing, Documentation, Compliance/Regulatory, HOS, Billing/Factoring, Exception/Problem-Resolution terminology) will go deeper on their own topics. Where a term below will get fuller treatment in one of those branches, this entry stays intentionally light and says so — to avoid two competing definitions of the same term living in two files.

**Format for every entry:** Correct term → What it means → What it does NOT mean → Common misuse → Operational example → Regulatory distinction (when applicable).

---

## Section 1: Freight & Load Fundamentals

### Freight
**What it means:** Goods or commodities being transported for compensation.
**What it does NOT mean:** The vehicle, the paperwork, or the transportation service itself — "freight" is the cargo, not the truck or the transaction.
**Common misuse:** Using "freight" and "load" as if they mean exactly the same thing in every context (see Load below — related but not identical).
**Operational example:** "The freight is palletized canned goods" describes what's being moved, separate from which truck moves it.

### Load
**What it means:** A specific shipment of freight being moved on a specific trip, with its own origin, destination, and terms.
**What it does NOT mean:** The general category of goods (that's freight/commodity) — a load is the specific instance, not the type.
**Common misuse:** Referring to "the load" when multiple shipments are combined, without clarifying whether it's one load or several.
**Operational example:** "We booked Load #48213, Chicago to Dallas, dry van."

### Shipment
**What it means:** Often used interchangeably with "load," though in some contexts refers more specifically to the freight itself as tendered by the shipper, independent of which carrier ultimately moves it.
**What it does NOT mean:** A guarantee of a single, unbroken movement — a shipment can move via multiple legs, carriers, or modes.
**Common misuse:** Assuming "shipment" and "load" are always perfectly interchangeable in every professional context; some parties draw a distinction.
**Operational example:** A shipper's "shipment" of 20 pallets might become two separate carrier "loads" if split.

### Commodity
**What it means:** The general category or type of goods being transported (e.g., produce, steel, electronics, dry goods).
**What it does NOT mean:** A specific shipment — commodity describes the *type*, not the individual load.
**Common misuse:** Using "commodity" when a precise product description is actually required (e.g., for hazmat or temperature-sensitive handling).
**Operational example:** "Commodity: frozen food" tells you the category; it doesn't by itself tell you the exact temperature requirement — see Module 03's equipment-fit discipline.

### FTL (Full Truckload)
**What it means:** A shipment large enough to fill (or be billed as filling) an entire trailer, moving directly from origin to destination without being combined with other shippers' freight.
**What it does NOT mean:** That the trailer is physically packed to capacity — FTL is a service/booking category, not a literal fullness measurement.
**Common misuse:** Assuming FTL freight never makes any stops; some FTL loads are multi-stop (see Multi-Stop below).
**Operational example:** A single shipper's 40,000 lb shipment booked as one dedicated trailer, no other freight mixed in.

### LTL (Less-Than-Truckload)
**What it means:** A shipment too small to require a full trailer, typically combined with other shippers' freight and moved through a network of terminals/hubs.
**What it does NOT mean:** A single dispatcher-coordinated point-to-point move — LTL generally involves a different operational and terminal network model than FTL dispatching.
**Common misuse:** Treating LTL and FTL dispatch workflows as interchangeable; they generally are not, and this academy's carrier-side dispatch model is built around FTL-style operations unless a module states otherwise.
**Operational example:** A 3-pallet shipment consolidated with other shippers' freight moving through an LTL carrier's hub network.

### Partial (Partial Truckload)
**What it means:** A shipment larger than typical LTL freight but not large enough to justify a full dedicated trailer — often shares trailer space with one or two other shippers' freight.
**What it does NOT mean:** The same thing as LTL — partials typically move more directly, with fewer terminal stops, than classic LTL network freight.
**Common misuse:** Confusing "partial" with a load that's simply light in weight; partial refers to a booking/service category, not just weight.
**Operational example:** Two shippers' freight sharing one trailer on a shared lane, each paying for their portion.

### Freight Class (NMFC)
**What it means:** A standardized classification system (the National Motor Freight Classification) used primarily in LTL pricing, based on factors like density, handling, and liability.
**What it does NOT mean:** A federal safety or legal classification — NMFC freight class is an industry pricing/classification system, not a government regulatory category.
**Common misuse:** Confusing freight class with hazmat hazard class (a completely different, safety-driven classification — see Module 03/06 hazmat content).
**Operational example:** Two commodities of similar weight can carry different freight classes because one is bulkier or harder to handle.

## Section 2: Movement Types

### Linehaul
**What it means:** The main, longer-distance transportation movement of freight between two points — the core revenue-generating leg of a trip.
**What it does NOT mean:** Deadhead, drayage, or short local movements — linehaul specifically refers to the substantial point-to-point transport leg.
**Common misuse:** Using "linehaul" to describe any driving at all, including empty repositioning.
**Operational example:** The 800-mile loaded run from the origin terminal to the destination terminal.

### Backhaul
**What it means:** A load secured for the return trip after an initial delivery, allowing the truck to earn revenue on the way back rather than deadheading empty.
**What it does NOT mean:** Any load at all on a return route — specifically, one intentionally planned to avoid empty miles after an original delivery.
**Common misuse:** Using "backhaul" and "deadhead" as synonyms — they describe opposite outcomes (revenue miles vs. non-revenue miles) for the same return-leg situation.
**Operational example:** After delivering in Dallas, the dispatcher books a Dallas-to-Chicago backhaul instead of running empty back to the truck's home region.

### Deadhead
*(Already a controlled term — see `TERMINOLOGY-LEDGER.md`.)* Non-revenue miles traveled to reposition equipment, reach a pickup, or move between revenue loads.

### Drayage
**What it means:** Short-distance freight movement, typically moving containers between a port, rail ramp, or intermodal facility and a nearby warehouse or distribution point.
**What it does NOT mean:** Long-haul over-the-road transportation — drayage is specifically the short connecting leg, often container-based.
**Common misuse:** Applying "drayage" to any short local trucking job; it specifically implies an intermodal/port/rail connection context.
**Operational example:** Moving a shipping container from the Port of Los Angeles to a nearby distribution warehouse.

### Intermodal
**What it means:** Freight transportation that uses more than one mode (e.g., rail and truck) to complete a single shipment's journey, typically using standardized containers.
**What it does NOT mean:** Any load that happens to be a container — intermodal specifically implies a multi-mode journey, not just container use on an all-truck move.
**Common misuse:** Calling any container move "intermodal" even when no rail or ocean leg is actually involved.
**Operational example:** A container moving by rail from a coastal port to an inland rail ramp, then completing its final leg by truck (drayage).

### Transload
**What it means:** The process of transferring freight from one mode or container type to another (e.g., from an ocean container into a domestic trailer) at a facility, rather than moving the original container all the way to final destination.
**What it does NOT mean:** Simple cross-docking of like-for-like freight (see Cross-Dock below) — transloading specifically involves a change in container/mode.
**Common misuse:** Using "transload" and "cross-dock" interchangeably; they describe related but distinct warehouse processes.
**Operational example:** Freight arriving in an ocean container is transloaded into two domestic 53-foot trailers for final delivery.

### Cross-Dock
**What it means:** A facility or process where freight is unloaded from an inbound trailer and reloaded directly onto an outbound trailer with minimal or no storage in between.
**What it does NOT mean:** A long-term storage warehouse — the defining feature of cross-docking is speed and minimal dwell time.
**Common misuse:** Referring to any warehouse stop as "cross-docking" even when freight sits in storage for an extended period.
**Operational example:** LTL freight arriving from multiple regional pickups gets sorted and reloaded onto outbound trailers by destination, same day.

### Multi-Stop
**What it means:** A single load involving more than one pickup and/or delivery location.
**What it does NOT mean:** Multiple separate loads booked back-to-back — multi-stop refers to one load/one rate confirmation covering several stops.
**Common misuse:** Failing to account for the extra mileage and time multi-stop routing adds beyond simple origin-to-destination distance (see Module 03's total-trip-miles discipline).
**Operational example:** One trailer picks up partial freight at two different shippers before making a single delivery, or delivers to two different receivers from one pickup.

### Consolidation
**What it means:** Combining freight from multiple shippers into a single load or shipment to improve efficiency and reduce per-unit cost.
**What it does NOT mean:** The same thing as multi-stop from one shipper — consolidation specifically implies freight originating from more than one source.
**Common misuse:** Assuming consolidated freight always moves through an LTL network; some FTL partials are consolidated directly between two shippers without a hub.
**Operational example:** Two small shippers' freight consolidated into one trailer to share transportation cost.

## Section 3: Operating Scope & Routing

### OTR (Over-the-Road)
**What it means:** Long-haul trucking operations, typically covering multiple states and requiring the driver to be away from home for extended periods.
**What it does NOT mean:** Any interstate movement, no matter how short — OTR specifically implies an extended-duration, longer-distance operating model, distinct from regional or local operations.
**Common misuse:** Applying "OTR" to a same-day regional round trip.
**Operational example:** A driver runs coast-to-coast routes, spending multiple nights on the road between home visits.

### Regional
**What it means:** Trucking operations confined to a defined multi-state area, typically allowing more frequent home time than OTR.
**What it does NOT mean:** A single state or strictly local operation (see Local below) — regional sits between local and OTR in scope.
**Common misuse:** Treating "regional" as a precisely defined federal term; it's an industry operating-model description, not a regulatory category.
**Operational example:** A driver running routes within a five-state Midwest region, typically home on weekends.

### Local / Short-Haul
**What it means:** Trucking operations confined to a small geographic area, typically allowing the driver home every day or nearly every day.
**What it does NOT mean:** The same thing as "regional" — local implies daily or near-daily return, not just more frequent home time than OTR.
**Common misuse:** Assuming local drivers are exempt from Hours of Service rules; local operation affects routing and scheduling, not automatic HOS exemption (HOS terminology is its own future branch — don't infer exemptions here).
**Operational example:** A driver making multiple deliveries within a single metro area and returning to the yard each night.

### Route
**What it means:** The specific path of travel planned or taken between origin and destination.
**What it does NOT mean:** The same thing as "lane" (see below) — a route is the specific physical path; a lane is the broader origin-destination pairing that may support many different specific routes over time.
**Common misuse:** Using "route" when discussing general origin-destination business patterns rather than a specific trip's actual path.
**Operational example:** "The route avoids the mountain pass due to a weight restriction" describes a specific trip's path choice.

### Lane
**What it means:** A general origin-destination pairing or corridor that a carrier or dispatcher regularly works, independent of any single trip's specific route.
**What it does NOT mean:** A single trip — a lane is the recurring pattern (e.g., "the Chicago-to-Dallas lane"), not one specific movement.
**Common misuse:** Using "lane" to describe a one-time, non-repeating movement with no ongoing pattern.
**Operational example:** "This carrier's strongest lane is Atlanta to Miami" describes a recurring business pattern, not a single load.

### Origin / Destination
**What it means:** Origin is where a load's movement begins (pickup); destination is where it ends (delivery).
**What it does NOT mean:** Interchangeable terms — mixing these up in dispatch communication creates real operational risk (wrong pickup/delivery confusion).
**Common misuse:** Assuming origin/destination determine interstate-vs-intrastate classification by themselves, without considering the broader movement (see Module 01's interstate/intrastate content).
**Operational example:** "Origin: Omaha, NE. Destination: Des Moines, IA."

### Practical Miles vs. Shortest-Route Miles
**What it means:** Practical miles reflect a realistic, drivable route (accounting for truck restrictions, road types, and reasonable routing conventions). Shortest-route miles reflect the mathematically shortest path, which may not be legally or practically drivable for a commercial vehicle.
**What it does NOT mean:** That the two figures are interchangeable — using shortest-route miles for RPM or fuel calculations can produce a misleadingly optimistic number.
**Common misuse:** Quoting a rate-per-mile figure calculated on shortest-route miles when the truck will actually run a longer practical route.
**Operational example:** A mapping tool's "shortest path" might route through a restricted road; the practical mileage used for planning and RPM should reflect the route the truck can actually run.

## Section 4: Vehicles & Basic Configuration

**Note:** Full equipment-type depth (dry van, reefer, flatbed, step deck, Conestoga, specialized trailers, weight/dimension figures) belongs to the future **Equipment terminology** branch and Module 03. This section covers only the foundational vehicle vocabulary needed before that branch makes sense.

### Tractor
**What it means:** The powered vehicle unit that pulls a trailer; does not itself carry freight.
**What it does NOT mean:** The same thing as "truck" in every context — "truck" is sometimes used loosely for the whole combination, while "tractor" specifically refers to the power unit.
**Common misuse:** Referring to the tractor when weight/dimension figures actually apply to the full combination (tractor + trailer + cargo).
**Operational example:** "The tractor needs an oil change" refers to the power unit specifically, not the trailer.

### Trailer
**What it means:** The unpowered unit that carries the freight, pulled by the tractor.
**What it does NOT mean:** A self-contained vehicle — a trailer cannot move without a tractor (or another powered unit) attached.
**Common misuse:** Assuming all trailers share identical dimensions or capacity because they share a nominal size label (see Module 03's "nominal size is a starting point, not a guarantee" discipline).
**Operational example:** "The 53-foot dry van trailer is loaded and ready for pickup."

### Bobtail
**What it means:** A tractor operating without a trailer attached.
**What it does NOT mean:** An empty trailer being pulled (that's deadheading with an empty trailer, not bobtailing) — bobtail specifically means no trailer at all.
**Common misuse:** Using "bobtail" and "deadhead" interchangeably; deadhead can involve an empty trailer, while bobtail specifically means the tractor alone.
**Operational example:** "The driver bobtailed to the shop for repairs" — no trailer was involved in that specific move.

### Straight Truck / Box Truck
**What it means:** A single vehicle where the cargo area and the power unit are part of the same, non-separable chassis (no separate tractor and trailer).
**What it does NOT mean:** The same configuration as a tractor-trailer combination — a straight truck cannot be uncoupled the way a trailer can be dropped from a tractor.
**Common misuse:** Assuming straight trucks and tractor-trailer combinations require the same CDL class; requirements depend on the specific vehicle's weight rating and configuration (see Module 04).
**Operational example:** A local delivery straight truck making multiple stops within one metro area.

### Combination Vehicle / CMV (Commercial Motor Vehicle)
**What it means:** The tractor and trailer operating together as a single unit; CMV is the broader regulatory term covering commercial vehicles subject to applicable federal/state rules.
**What it does NOT mean:** That every commercial vehicle is automatically a tractor-trailer combination — CMV also covers straight trucks and other configurations.
**Common misuse:** Assuming CMV status by itself always determines every applicable requirement; specific rules can depend on additional factors like weight and operation type.
**Operational example:** "The combination weighs 78,000 lb total" refers to tractor + trailer + cargo together.

### CDL (Commercial Driver's License)
**What it means:** The license required to operate specified categories of commercial motor vehicles, with classes and endorsements reflecting different vehicle types and cargo.
**What it does NOT mean:** A single universal qualification for every load — CDL class and endorsements must match the specific vehicle and cargo (see Module 04's CDL Class A/B distinction and Module 03's H/N/X endorsement content).
**Common misuse:** Assuming a valid CDL alone qualifies a driver for any load, regardless of endorsement requirements.
**Operational example:** A Class A CDL is generally required for the combination vehicles this academy's carrier-side model is built around.

### GVW (Gross Vehicle Weight) / GVWR (Gross Vehicle Weight Rating)
**What it means:** GVW is the actual current total weight of a vehicle (or combination) including cargo. GVWR is the manufacturer's rated maximum safe operating weight for a given unit.
**What it does NOT mean:** The same thing as cargo weight alone — both GVW and GVWR refer to the total vehicle/combination weight, not just what's being hauled (see Module 03's gross-vs-cargo-weight discipline).
**Common misuse:** Treating GVWR as a legal roadway limit; it's a manufacturer's equipment rating, related to but distinct from federal/state legal weight limits.
**Operational example:** A trailer's GVWR sets its manufacturer-rated capacity; the federal 80,000 lb combination baseline is a separate, roadway-legal figure (see Module 03).

### GCWR (Gross Combination Weight Rating)
**What it means:** The manufacturer-rated maximum safe total weight for a tractor and trailer operating together.
**What it does NOT mean:** The same thing as GVWR — GCWR applies to the combined unit, GVWR to an individual vehicle.
**Common misuse:** Confusing GCWR with the federal legal weight baseline; GCWR is an equipment rating, used alongside (not instead of) legal weight limits.
**Operational example:** CDL Class A eligibility is tied partly to GCWR thresholds (see Module 04).

### Axle
**What it means:** A structural shaft connecting a vehicle's wheels; axle groups (single, tandem) each carry their own portion of total vehicle weight and are subject to their own separate legal limits.
**What it does NOT mean:** A figure automatically covered by overall gross-weight legality — axle-group weight is an independent check (see Module 03's central lesson on this exact point).
**Common misuse:** Assuming a legal gross weight automatically means legal axle distribution.
**Operational example:** "The drive tandem is carrying 35,000 lb" describes one specific axle group's load, checked separately from the combination's total gross weight.

### Weigh Station
**What it means:** A roadside facility where commercial vehicles may be checked for weight, credentials, and safety compliance.
**What it does NOT mean:** An optional stop at the driver's discretion — weigh station requirements depend on applicable state rules and vehicle status, not personal preference.
**Common misuse:** Assuming all weigh stations operate identically or are staffed at all times; practices vary by state and facility.
**Operational example:** "The route passes two weigh stations — confirm the load's paperwork is in order before departure."

## Section 5: Facilities & Locations

### Dock
**What it means:** The loading/unloading area at a shipper or receiver facility where freight is physically transferred.
**What it does NOT mean:** The entire facility — "dock" specifically refers to the loading interface, not the whole warehouse or plant.
**Common misuse:** Assuming every facility's dock configuration is standard; dock height, door width, and equipment requirements vary by facility.
**Operational example:** "Check in at the dock office before backing in."

### Yard
**What it means:** A facility (carrier-operated, broker-operated, or third-party) used for staging, parking, or storing trailers and equipment.
**What it does NOT mean:** A shipper or receiver's freight-handling dock — a yard is primarily for equipment staging, not cargo loading/unloading.
**Common misuse:** Confusing a drop yard (see below) with a shipper/receiver facility.
**Operational example:** "Drop the empty trailer at the yard before heading to the next pickup."

### Drop Yard / Trailer Pool
**What it means:** A location where trailers are staged (dropped) for later pickup, or pooled for shared carrier use, without requiring the tractor to wait on-site.
**What it does NOT mean:** A guaranteed live-loading location — drop yards specifically exist to decouple tractor and trailer scheduling.
**Common misuse:** Assuming drop-and-hook (see below) is available at every facility without confirming in advance.
**Operational example:** A driver drops a loaded trailer at the pool and hooks to a different, already-loaded trailer for the next run.

### Drop-and-Hook
**What it means:** A loading/unloading method where the driver drops one trailer and immediately hooks to another already-loaded or already-empty trailer, avoiding wait time for live loading/unloading.
**What it does NOT mean:** The default method at every facility — many facilities require live loading (see below) instead, and this must be confirmed, not assumed.
**Common misuse:** Assuming drop-and-hook availability without verifying it with the specific facility for the specific load.
**Operational example:** "Confirm with the shipper whether this is drop-and-hook or live load before dispatching."

### Live Load / Live Unload
**What it means:** A loading or unloading method where the driver waits on-site with the tractor attached while freight is physically loaded or unloaded.
**What it does NOT mean:** A process with a guaranteed time limit — live loading/unloading duration varies by facility, and extended waits may or may not trigger detention depending on the actual agreement (see TERMINOLOGY-LEDGER.md's Detention entry).
**Common misuse:** Assuming a live load will always be quick; facility-specific delays are common and should be planned for, not assumed away.
**Operational example:** "This is a live unload — the driver waits while the receiver's crew unloads the trailer."

### Terminal
**What it means:** A carrier or network facility used for sorting, transferring, or staging freight and equipment, often central to LTL and intermodal operations.
**What it does NOT mean:** The same thing as a shipper's or receiver's facility — a terminal is carrier/network infrastructure, not the origin or destination business itself.
**Common misuse:** Assuming every load passes through a terminal; most FTL point-to-point moves do not.
**Operational example:** "The LTL shipment routes through the regional terminal before final delivery."

### Hub and Spoke
**What it means:** A network model where freight is routed through central hub facilities that connect to multiple outlying (spoke) destinations, common in LTL and some intermodal operations.
**What it does NOT mean:** The typical model for FTL point-to-point dispatching, which this academy's carrier-side model is generally built around.
**Common misuse:** Assuming hub-and-spoke routing applies to a direct FTL move with no intermediate stops.
**Operational example:** An LTL carrier's freight from multiple small shippers converges at a regional hub before being redistributed to final destinations.

## Section 6: Time & Scheduling

### Appointment
**What it means:** A scheduled pickup or delivery time confirmed with the specific facility.
**What it does NOT mean:** A guarantee of immediate service at that exact time — facility conditions can still cause delays even with a confirmed appointment.
**Common misuse:** Treating "appointment" and "FCFS" as the same thing — they are different scheduling models (see FCFS below).
**Operational example:** "Delivery appointment: Tuesday, 8:00 AM — confirmed with the receiver."

### FCFS (First Come, First Served)
**What it means:** A facility scheduling approach where arrival order — within the facility's actual operating hours — determines service order, rather than a pre-booked appointment time.
**What it does NOT mean:** Guaranteed 24-hour facility access — FCFS still operates only within the facility's real hours and capacity.
**Common misuse:** Assuming FCFS means "show up any time, day or night, and get served immediately."
**Operational example:** "This shipper runs FCFS from 6 AM to 4 PM — arrival order within that window determines your place in line."

### Transit Time
**What it means:** The expected or actual duration of a load's movement from pickup to delivery.
**What it does NOT mean:** A fixed, universal figure — transit time depends on distance, route, HOS-driven scheduling, and operating conditions, and should be planned rather than assumed.
**Common misuse:** Calculating transit time from raw mileage and average speed alone, without accounting for required rest, loading/unloading time, or route-specific conditions.
**Operational example:** "Estimated transit time: two driving days, accounting for the required rest period."

### ETA (Estimated Time of Arrival)
**What it means:** A projected arrival time communicated to a receiver, broker, or other party, based on the best current information available.
**What it does NOT mean:** A binding guarantee — an ETA is an estimate that should be updated as conditions change, not treated as a fixed commitment once given.
**Common misuse:** Providing an ETA based on a guess rather than verified route/schedule information (see Module 01's verification discipline).
**Operational example:** "Current ETA is 2 PM, based on the driver's last check-in and remaining distance."

### Layover
**What it means:** A period where a driver and equipment are held overnight or longer at a location, typically due to a delay or scheduling gap, separate from ordinary required rest.
**What it does NOT mean:** Automatic entitlement to a specific accessorial payment — whether layover pay applies depends entirely on the actual agreement and documentation (see Module 07's accessorial-verification discipline).
**Common misuse:** Assuming any overnight delay automatically qualifies as a billable layover without checking the applicable agreement.
**Operational example:** "The driver is on a layover at the receiver — check the rate confirmation for whether layover pay applies."

## Section 7: Movement & Freight-Source Variations

### Spot Freight / Spot Market
**What it means:** Freight priced and tendered on a one-time or short-term basis, outside a longer-term contracted lane arrangement.
**What it does NOT mean:** Always emergency or last-minute freight — spot freight simply means the transaction isn't governed by an existing contract for that lane.
**Common misuse:** Assuming spot rates are always higher (or always lower) than contract rates; the relationship shifts with market conditions.
**Operational example:** A one-time load booked directly off a load board at the currently posted spot rate.

### Contract Freight / Dedicated Freight
**What it means:** Freight moved under an ongoing or prearranged relationship or lane agreement, rather than a one-off spot transaction.
**What it does NOT mean:** A fixed rate that never changes — contract terms vary and can include rate adjustments.
**Common misuse:** Assuming contract freight guarantees consistent volume; actual volume commitments depend on the specific agreement.
**Operational example:** A carrier running the same shipper's freight on a recurring weekly schedule under a standing agreement.

### Split Delivery
**What it means:** A single shipment divided and delivered to more than one location.
**What it does NOT mean:** The same thing as multi-stop pickup — split delivery specifically refers to dividing freight across multiple delivery points, though the two can occur on the same load.
**Common misuse:** Failing to plan for the added complexity (multiple BOLs, multiple PODs) a split delivery requires.
**Operational example:** One trailer's freight is divided and delivered to two different distribution centers.

### Diversion
**What it means:** Changing a load's destination or routing after it has already been dispatched or is in transit.
**What it does NOT mean:** A routine or cost-free change — diversions often carry additional cost, documentation, and coordination requirements.
**Common misuse:** Treating a diversion request casually without updating all affected paperwork and parties (broker, receiver, carrier records).
**Operational example:** "The shipper requested a diversion — the load now delivers to a different distribution center than originally booked."

### Reconsignment
**What it means:** Formally changing the named consignee/receiver of a shipment, typically requiring updated documentation and authorization.
**What it does NOT mean:** The same thing as a simple diversion — reconsignment specifically involves changing who the freight is legally being delivered to, not just the route or delivery point for the same consignee.
**Common misuse:** Executing a consignee change without proper documentation or authorization from the party with the right to redirect the shipment.
**Operational example:** A shipment is reconsigned to a different buyer after the original sale falls through.

### Refused Freight
**What it means:** Freight that a receiver declines to accept at delivery, for reasons ranging from damage to order discrepancy.
**What it does NOT mean:** A situation the driver or dispatcher should resolve unilaterally on-site — refused freight typically requires escalation and documentation, not an independent decision.
**Common misuse:** Assuming refused freight can simply be left at the destination or disposed of without proper instruction from the appropriate party.
**Operational example:** "The receiver refused the freight due to visible damage — document it and escalate to the broker/shipper for instructions."

---

## Cross-References to Already-Controlled Terms

The following terms already have a locked, controlled definition in `06-KNOWLEDGE-SYSTEM/TERMINOLOGY-LEDGER.md` and are intentionally not redefined here: **Dispatcher, Motor Carrier, Broker, Shipper, Consignee/Receiver, Rate Confirmation, RPM, Deadhead, Detention, TONU, POD, HOS, ELD.**

## What's Deliberately NOT in This File

Per the Academy Master Dictionary's branch structure, the following are intentionally reserved for their own future branches rather than covered here:
- Dispatcher-specific workflow language → **Dispatch terminology**
- Carrier operational/business terms (owner-operator, fleet, for-hire vs. private authority detail) → **Carrier terminology**
- Broker-specific terms (bona fide agent, allocation of traffic, brokerage authority detail) → **Broker terminology**
- Deeper shipper/receiver-side terms (BOL specifics, consignee instructions, accessorial billing from the shipper side) → **Shipper/Receiver terminology**
- Full equipment-type catalog (dry van, reefer, flatbed, step deck, Conestoga, specialized trailers) → **Equipment terminology**
- Load-board-specific vocabulary (posting, board fee structures, credit scores on boards) → **Load-Board terminology**
- Rate/pricing depth (contribution margin, break-even, accessorial economics) → **Rate/Pricing terminology**
- Document-specific deep dives (Bill of Lading fields, rate confirmation clauses) → **Documentation terminology**
- Regulatory/compliance vocabulary (USDOT, MC, FMCSA structures) → **Compliance/Regulatory terminology**
- HOS-specific vocabulary (14-hour window, 30-minute break, sleeper-berth provision) → **HOS terminology**
- Billing/factoring vocabulary (NOA, recourse/non-recourse, quick-pay) → **Billing/Factoring terminology**
- Problem-resolution vocabulary (claims, exceptions beyond refused freight above) → **Exception/Problem-Resolution terminology**

## Status Note

This is the first branch of the Academy Master Dictionary. Terms here are general-industry vocabulary, not regulatory citations — none of them required new regulatory research beyond what earlier modules already verified, and none introduce a new date-sensitive claim. Where a term touches something regulatory (CDL, GVWR, axle limits, HOS), this file points to the module that already carries the sourced, verified treatment rather than restating it here.

## Revision Log

| Date | Change |
|---|---|
| 2026-08-30 | Initial file: Sections 1–6 (30 terms) |
| 2026-08-30 | Added: Consolidation, Practical Miles vs. Shortest-Route Miles, Bobtail, Straight Truck/Box Truck, Weigh Station, Terminal, Hub and Spoke, Layover, and new Section 7 (Spot Freight, Contract Freight, Split Delivery, Diversion, Reconsignment, Refused Freight) — 13 additional terms in response to a completeness check |
