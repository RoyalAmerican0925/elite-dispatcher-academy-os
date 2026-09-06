# Module 09 Applied Lab — Rate Confirmation Reconciliation

## Scenario
**Fictional training case.** Carrier: Summit Lane Transport. Broker: Northline Brokerage. Load: NL-9041.

### M08 handoff
- rate: $2,450;
- Dallas, TX pickup Tuesday 14:00;
- Nashville, TN delivery Wednesday 10:00;
- 53' dry van;
- driver assist: no;
- dispatcher authority: may accept only if written terms match the approved negotiation record; otherwise stop and obtain carrier approval or corrected documents.

### Rate Confirmation v1
- Load NL-9041;
- $2,450 total;
- pickup Tue 14:00;
- delivery Wed 10:00;
- dry van;
- driver assist required;
- tracking required before pickup;
- POD required within 24 hours;
- acceptance signature requested.

### Broker message after correction request
“Driver assist was copied from another template. I’ll fix it.”

### Rate Confirmation v2
- driver assist removed;
- pickup changed to Tue 12:00;
- all other listed terms unchanged;
- document received 16 minutes after v1.

## Required work
1. Complete a negotiation-to-booking handoff classification: AGREED / CONDITIONAL / UNRESOLVED / UNVERIFIED.
2. Extract every material field from RC v1.
3. Reconcile RC v1 against M08 evidence.
4. Classify driver-assist conflict and choose BOOK / HOLD / CORRECT / ESCALATE.
5. Draft the correction request.
6. Log v1 and v2 in version/integrity history.
7. Reconcile v2. Explain why removal of driver assist does not automatically make the file bookable.
8. Identify the new pickup-time conflict and state what evidence is required to resolve it.
9. Apply the supplied authority rule. May the dispatcher sign v2 now? Explain.
10. List what may and may not be placed in the dispatch packet at this moment.
11. Produce the booking status record.
12. State the correct M10 handoff condition.

## Evidence standard
Responses must cite supplied evidence and distinguish fact from assumption. Unsupported statements such as “that’s standard,” “the broker probably meant,” or “the driver can work it out” do not satisfy the lab.

## Submission package
- Handoff Sheet
- Material-Term Extraction Worksheet
- Reconciliation Matrix
- Discrepancy & Correction Log
- Authority Control Record
- Document Version & Integrity Log
- provisional Booking Record
- provisional Dispatch Packet Checklist
- BOOK/HOLD/CORRECT/ESCALATE Decision Record