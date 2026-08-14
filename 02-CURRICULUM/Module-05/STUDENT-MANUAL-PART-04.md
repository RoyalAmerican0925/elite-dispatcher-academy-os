**APPROVED DEFINITION:** Freight moving under an established commercial agreement.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 3

**RELATED TERMS:** Spot Market, Dedicated Freight

**NOTES:** Terms vary; not always fixed-rate — see Section 3 qualification.

### Dedicated Freight

**APPROVED DEFINITION:** Recurring freight or capacity assigned to a specific carrier or service arrangement.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 3

**RELATED TERMS:** Contract Freight

**NOTES:** Generally the most predictable of the three freight categories.

### Origin / Destination

**APPROVED DEFINITION:** The pickup location (origin) and delivery location (destination) of a load.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 9

**RELATED TERMS:** Deadhead, Radius

**NOTES:** Foundational posting fields.

### Deadhead / Origin Deadhead / Destination Deadhead

**APPROVED DEFINITION:** Empty vehicle movement; origin deadhead is empty movement to a pickup, destination deadhead is empty repositioning after delivery.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 8 (FACT-M05-007)

**RELATED TERMS:** Origin Radius

**NOTES:** Do not reduce destination deadhead to "driving home" — see Section 8 qualification.

### Origin Radius / Destination Radius

**APPROVED DEFINITION:** The geographic search distance used when sourcing freight from a given truck position or toward a given delivery region.

**CLASSIFICATION:** INDUSTRY / CARRIER-POLICY TERM

**FIRST-USE LOCATION:** Module 05, Section 7

**RELATED TERMS:** Deadhead

**NOTES:** No universal radius exists — set by carrier policy, market, and driver availability.

### Pickup Window / Delivery Window

**APPROVED DEFINITION:** The range of acceptable times for pickup or delivery, as opposed to one guaranteed moment.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 10

**RELATED TERMS:** Appointment, FCFS

**NOTES:** Vague or missing windows are a gap to verify, not to assume.

### Appointment

**APPROVED DEFINITION:** A specific scheduled pickup or delivery time arranged with the facility.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 11

**RELATED TERMS:** FCFS

**NOTES:** Distinct from FCFS.

### FCFS (First Come, First Served)

**APPROVED DEFINITION:** A facility-service model where arrival order, not a locked appointment, determines service order.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 11

**RELATED TERMS:** Appointment

**NOTES:** Not equivalent to 24-hour access.

### FTL / Partial

**APPROVED DEFINITION:** Full Truckload (FTL) freight fills the trailer or is treated as exclusive use; a partial shares trailer space with other freight.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 12

**RELATED TERMS:** Weight, Dimensions

**NOTES:** Partial freight requires dimensional verification beyond weight alone.

### Posting Age

**APPROVED DEFINITION:** The elapsed time since a load was posted or last refreshed on a platform.

**CLASSIFICATION:** INDUSTRY / PLATFORM TERM

**FIRST-USE LOCATION:** Module 05, Section 15 (FACT-M05-004)

**RELATED TERMS:** Load Availability

**NOTES:** A priority signal only — not proof of availability or unavailability.

### Reposted Load

**APPROVED DEFINITION:** A posting that reappears or duplicates an earlier listing, for any of several possible reasons.

**CLASSIFICATION:** INDUSTRY / PLATFORM TERM

**FIRST-USE LOCATION:** Module 05, Section 16 (FACT-M05-005)

**RELATED TERMS:** Posting Age

**NOTES:** Not automatic evidence of double brokering.

### Load Reference Number

**APPROVED DEFINITION:** A unique identifier assigned to a specific load posting or booking.

**CLASSIFICATION:** INDUSTRY TERM

**FIRST-USE LOCATION:** Module 05, Section 9

**RELATED TERMS:** Load Board

**NOTES:** Useful for tracking and verification communication.

### Broker Portal

**APPROVED DEFINITION:** A specific broker's own posting/booking system, separate from a public load board.

**CLASSIFICATION:** INDUSTRY / PLATFORM TERM

**FIRST-USE LOCATION:** Module 05, Section 2

**RELATED TERMS:** Load Board, Private Load Board

**NOTES:** Access and functionality are broker-specific.

### Private Load Board

**APPROVED DEFINITION:** A load board with access limited to a defined group, such as a broker's vetted carrier network.

**CLASSIFICATION:** INDUSTRY / PLATFORM TERM

**FIRST-USE LOCATION:** Module 05, Section 2

**RELATED TERMS:** Broker Portal

**NOTES:** Distinct from public commercial load boards.

### Load Candidate

**APPROVED DEFINITION:** A load posting that has passed initial fit screening and is under active consideration.

**CLASSIFICATION:** ACADEMY TERM

**FIRST-USE LOCATION:** Module 05, Section 20

**RELATED TERMS:** Shortlist

**NOTES:** Not yet VERIFIED AVAILABLE or booked.

### Load Availability

**APPROVED DEFINITION:** The confirmed current status of whether a load remains open to be booked.

**CLASSIFICATION:** OPERATIONAL CONCEPT

**FIRST-USE LOCATION:** Module 05, Section 17 (FACT-M05-009)

**RELATED TERMS:** Posting Age

**NOTES:** Confirmed only through direct verification, not by a posting's continued visibility.

### Search Filter

**APPROVED DEFINITION:** A parameter (equipment, radius, weight, etc.) used to narrow load-board search results.

**CLASSIFICATION:** INDUSTRY / PLATFORM TERM

**FIRST-USE LOCATION:** Module 05, Section 6

**RELATED TERMS:** Origin Radius

**NOTES:** Available filters vary by platform — PLATFORM-SPECIFIC.

# Appendix B: Module 05 Dependency Map

## Module 05 Imports

* Module 01: industry participant roles.
* Module 02: bona-fide-agent/broker boundary, applied here to shipper-direct sourcing.
* Module 03: equipment/freight fit-checklist logic, applied here as the sourcing-stage fit screen.
* Module 04: carrier and driver profiles, used as the basis for search parameters and the profile screen.
* FACT-M05-001 through FACT-M05-010.

## Module 05 Exports

| Export | Dependent Modules |
| :---- | :---- |
| Load candidate / shortlist concept and search workflow | 06, 07, 08, 09, 10, 11, 12, 15 |
| Broker information at sourcing stage (name, MC, contact) | 06 |
| Missing-information framework | 07, 09, 10, 11 |
| FOUND vs. VERIFIED AVAILABLE distinction | 06, 09, 12 |
| Duplicate/reposted-load flagging pattern | 06 |
| Deadhead as a sourcing variable | 07, 10 |
| Shipper-direct sourcing boundary | 06, 08, 15 |
| Verified pickup/delivery windows and transit details | 11 |
| Broker/posting-party communication channel established during sourcing | 12 |

**Module 05 Completion**
You should now be able to source and screen freight candidates, identify missing information, distinguish FOUND from VERIFIED AVAILABLE, apply carrier/driver/equipment restrictions, and route qualified opportunities to the appropriate next stage. Complete the Module 05 Knowledge Check before proceeding to Module 06.
