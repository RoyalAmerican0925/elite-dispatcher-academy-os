# Module 09 Student Manual — Part 05
## Booking Record & Dispatch Packet Construction

### Employment outcome
The learner can turn reconciled booking evidence into a traceable office record and a controlled dispatch packet containing only current, appropriate information.

## 1. The booking record
A booking record should separate:
- **SOURCE FACT:** what a source states.
- **VERIFIED FACT:** source/currentness/identity checks support use.
- **UNRESOLVED FACT:** evidence is missing/conflicting.
- **DECISION:** HOLD/CORRECT/ESCALATE/BOOK.
- **APPROVAL:** who authorized an action, source, time, scope.

This separation prevents office notes from becoming fake facts.

## 2. Minimum booking record
Capture:
- load/reference ID;
- broker/customer/contact evidence;
- carrier;
- assigned driver/truck/equipment facts supplied at M09;
- current rate confirmation ID/version;
- agreed rate/material terms;
- pickup/delivery facts exactly as booked;
- discrepancy/correction history;
- authority/approval evidence;
- acceptance/signature evidence;
- final booking status;
- packet version/time;
- M10 handoff flags.

## 3. Dispatch packet
The packet should contain the current documents/instructions the driver or operations team actually needs for the next workflow, subject to carrier policy. The learner must distinguish:
- current controlling rate confirmation or driver-facing booking information;
- pickup/delivery/reference information;
- required broker/customer instructions appropriate for driver handoff;
- necessary contact/instruction records;
- office-only approval/audit evidence that may remain in the booking file rather than being pushed to the driver.

Do not dump every file into the driver's message and call that control.

## 4. Obsolete-document exclusion
Case file contains:
- RC v1 — superseded;
- RC v2 — corrected driver-assist term but wrong pickup time;
- RC v3 — verified controlling version.

Dispatch packet uses v3. Booking file preserves v1/v2 as history with SUPERSEDED labels. The driver should not receive conflicting versions without a specific operational reason and clear control.

## 5. Driver handoff
A controlled M09 handoff communicates verified booked facts and flags what happens next. Example:
- Load NL-9041; controlling RC v3;
- pickup Dallas Tue 14:00 as booked;
- delivery Nashville Wed 10:00 as booked;
- 53' dry van; packaged food; supplied weight 39,000 lb;
- required reference/tracking instructions exactly as controlled;
- "Trip feasibility/routing/HOS review follows under M10/M11. Do not infer a route or legal-hours conclusion from this booking message."

## 6. Packet quality checks
Before release ask:
1. Is every included document for the correct load/carrier?
2. Is it the current version?
3. Are material discrepancies resolved?
4. Is any office note being misrepresented as source evidence?
5. Are instructions internally consistent?
6. Is the packet free of obsolete/conflicting versions?
7. Is the next workflow clear?

## 7. Coached practice
A corrected confirmation is received at 15:04. At 15:06 the dispatcher sends the driver the old 14:40 attachment because it was already downloaded.

Failure: document version control. Correct response: stop the handoff, identify the controlling version, correct the driver's packet/message, document the correction, and assess whether any material action occurred from the wrong version.

## 8. Common failures
- attaching the first PDF found;
- mixing current and superseded versions;
- failing to identify the controlling document in the booking record;
- sending unresolved terms to the driver as facts;
- overloading driver packet with confusing office artifacts;
- inventing route/HOS conclusions in the booking handoff.

### Part 05 operating rule
**Preserve history in the office file; send controlled current information in the dispatch packet.**