**RELATED TERMS:** Posting Age

**NOTES:** Not automatic evidence of double brokering — see Section 16 qualification.

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

**NOTES:** Available filters vary by platform — [PLATFORM-SPECIFIC].

# Appendix B: Module 05 Dependency Map

## Module 05 Imports

* Module 01: industry participant roles.
* Module 02: bona-fide-agent/broker boundary, applied here to shipper-direct sourcing (Section 19).
* Module 03: equipment/freight fit-checklist logic, applied here as the sourcing-stage fit screen (Section 12).
* Module 04: carrier and driver profiles, used as the basis for search parameters and the profile screen (Sections 6, 13).
* FACT-M05-001 through FACT-M05-010.

## Module 05 Exports

| Export | Dependent Modules |
| :---- | :---- |
| Load candidate / shortlist concept and search workflow | 06, 07, 08, 09, 10, 11, 12, 15 |
| Broker information at sourcing stage (name, MC, contact) | 06 |
| Missing-information framework | 07, 09, 10, 11 |
| FOUND vs. VERIFIED AVAILABLE distinction | 06, 09, 12 |
| Duplicate/reposted-load flagging pattern | 06 |
| Deadhead as a sourcing variable | 07 (rate mathematics), 10 (trip planning) |
| Shipper-direct sourcing boundary | 06, 08, 15 |
| Verified pickup/delivery windows and transit details | 11 (HOS / ELD feasibility) |
| Broker/posting-party communication channel established during sourcing | 12 (load monitoring / communication continuity) |

**Module 05 Completion**  
You should now be able to source and screen freight candidates, identify missing information, distinguish FOUND from VERIFIED AVAILABLE, apply carrier/driver/equipment restrictions, and route qualified opportunities to the appropriate next stage. Complete the Module 05 Knowledge Check before proceeding to Module 06.