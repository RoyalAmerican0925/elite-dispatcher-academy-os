# Module Map

## Core Academy Sequence

| Module | Working Title | Primary Purpose | Key Dependencies |
|---|---|---|---|
| 01 | Industry Foundations | Define participants, agencies, identifiers, commerce concepts, and carrier-side dispatcher scope. | Foundation |
| 02 | Dispatcher vs. Broker Boundaries | Teach broker, bona fide agent, allocation-of-traffic, compensation, and unauthorized-brokerage boundaries. | 01 |
| 03 | Equipment and Freight Fit | Teach trailers, equipment, freight types, restrictions, and load-to-equipment fit. | 01-02 |
| 04 | Carrier and Driver Onboarding | Build carrier, driver, insurance, authority, document, and operational profiles. | 01-03 |
| 05 | Load Boards and Freight Sourcing | Find, screen, shortlist, and verify availability of freight candidates. | 01-04 |
| 06 | Broker Verification and Fraud Prevention | Verify entities, contacts, documents, payment paths, and risk indicators. | 01-05 |
| 07 | Rate Mathematics and Profitability | Evaluate deadhead, loaded miles, RPM, costs, margin, and load economics. | 05-06 |
| 08 | Rate Negotiation | Prepare, negotiate, document, and escalate rate discussions. | 02, 06-07 |
| 09 | Booking Loads | Confirm booking terms, rate confirmations, documents, and handoff. | 02, 04-08 |
| 10 | Trip Planning | Plan routes, appointments, fuel, time, miles, and operational constraints. | 04-09 |
| 11 | Hours of Service and ELD Feasibility | Evaluate legal/operational trip feasibility using current HOS concepts and ELD awareness. | 01, 04-10 |
| 12 | Driver Communication and Load Monitoring | Track execution, maintain communication, document updates, and manage continuity. | 04-11 |
| 13 | Exceptions and Escalation | Handle detention, breakdowns, rejected freight, delays, service failures, and escalation. | 02, 04, 06, 09-12 |
| 14 | Billing, POD, Factoring, and Payment | Complete documentation, invoice flow, POD handling, factoring awareness, and payment follow-up. | 01-02, 04, 06, 09, 12-13 |
| 15 | Capstone and Integrated Dispatch Operations | Apply the full workflow in realistic end-to-end scenarios. | 01-14 |

## Cross-Module Design Rules

- Every module must declare imports and exports.
- Every regulated or date-sensitive claim must link to a source/fact record or carry a verification flag.
- Terminology introduced in one module must not silently change meaning later.
- Scenario IDs should remain stable across revisions.
- Final assessments must test integrated decisions, not only vocabulary recall.
- Modules may be revised independently, but dependency-impact review is required before publication.

## Existing Evidence

Current recovered manuals confirm the dependency architecture is already in use in Modules 01, 02, 04, 05, and 06. Preserve that pattern as the official academy convention.
