**IMPORTANT:** Do not interpret recourse provisions, reserves, security interests, or factoring-contract enforceability — those are legal/contractual analysis questions outside this module's scope unless separately assigned.

# 13\. Banking / Payment Security

Sensitive onboarding items may include the W-9, ACH data, voided checks, bank information, factoring instructions, and identity information. Apply basic cybersecurity discipline to all of it:

* Data minimization — collect only what's operationally necessary.

* Access control — limit who can see or edit sensitive records.

* Secure storage — don't leave sensitive documents in unsecured or overly shared locations.

* Trusted-contact verification — confirm identity through channels you already trust, not just the channel a request arrived on.

* Payment-change callback — never update payment instructions from an inbound message alone.

**IMPORTANT:** Do not teach that ordinary consumer email is automatically illegal for this purpose. Treat this as a cybersecurity-risk-management issue to be handled with the controls above, unless a specific law or contract states otherwise for a given situation.

# 14\. Payment-Change Protocol

Required workflow when new bank or factoring instructions are received:

* 1\. New bank/factoring instructions received.

* 2\. Do not trust the message by itself.

* 3\. Use a previously verified phone number or contact method — not contact information supplied in the new message.

* 4\. Callback verify.

* 5\. Compare entity/account/factor information against what's on file.

* 6\. Document the verification.

* 7\. Update only after confirmation.

**IMPORTANT:** This protocol anticipates the deeper fraud-prevention training in Module 06 — treat it as a foundational habit now, not a complete fraud curriculum.

# 15\. Limited Power of Attorney (LPOA)

A Limited Power of Attorney may grant specifically defined agency authority according to its own written terms and applicable law.

**IMPORTANT:** An LPOA is not universally required for dispatching, and it is not automatically accepted by every broker or load board. It does not automatically determine worker classification, employment status, broker status (see Module 02), or any authority beyond what it actually says in writing. Do not teach "an LPOA lets you sign anything for the carrier." Instead teach: read the scope, act only within authorized limits, and recognize that legal review may be appropriate for anything ambiguous or high-stakes — see Scenario S-04-08.

# 16\. Dispatch Agreement

Building on Module 02, a dispatch agreement should operationally address: the parties, scope of services, the carrier's final decision authority, communication authority, compensation, payment timing, confidentiality, document access, termination, operational limitations, and any signing authority granted.

**IMPORTANT:** This module does not draft individualized legal advice or a specific contract for the student's business — it teaches what a complete agreement should address at an operational level.

# 17\. Equipment Profile

Building on Module 03, store useful verified operational information for each unit:

### Tractor — fields

| Field | Priority |
| :---- | :---- |
| Unit number | ESSENTIAL |
| Day cab / sleeper | ESSENTIAL |
| Plate/state where operationally useful | USEFUL |
| Relevant operating/tare-weight information | USEFUL |
| ELD system | ESSENTIAL |
| Special equipment | OPTIONAL |

### Trailer — fields

| Field | Priority |
| :---- | :---- |
| Unit number | ESSENTIAL |
| Equipment type | ESSENTIAL |
| Nominal size | USEFUL |
| Usable dimensions where known | USEFUL |
| Door/opening dimensions | USEFUL |
| Equipment-specific restrictions | ESSENTIAL |
| Reefer capability where applicable | ESSENTIAL |
| Accessories | OPTIONAL |
| Ownership/interchange status where relevant | USEFUL |

**IMPORTANT:** Not every possible field is mandatory for every unit — use the ESSENTIAL / USEFUL / OPTIONAL classification to prioritize what actually needs to be captured before dispatching that equipment. See Scenario S-04-10.

# 18\. Driver Operational Profile

Reasonable fields: full name, contact method, assigned equipment, CDL class/expiration, applicable endorsements, medical qualification status/expiration where operationally needed, current availability, ELD communication method, home-time commitment, carrier-approved restrictions, and an escalation contact.

**IMPORTANT:** Do not encourage unnecessary sensitive medical data collection. Store the minimum necessary operational information — status and expiration, not underlying medical detail.

# 19\. ELD / HOS Onboarding

Capture only what's needed for dispatch planning: driver availability, current duty-status information needed for planning, the ELD provider/system, authorized portal access, the status-update process, who handles malfunctions, team/solo status, and time zone.

**IMPORTANT:** This module does not teach HOS calculations — that's Module 11's territory. Here, you're just setting up the operational information needed to communicate with and plan around a driver's system, not performing HOS math.

# 20\. Carrier Operating Preferences

Useful operational fields: preferred lanes, restricted lanes, home-time commitments, minimum rate targets, maximum acceptable deadhead, freight preferences, prohibited freight, touch/no-touch, weekend/night operation, toll preferences, equipment restrictions, hazmat capability, port/border capability, and team/solo status.

**IMPORTANT:** Label this entire category CARRIER POLICY / OPERATIONAL PREFERENCE — not law. These are business choices the carrier has made, not regulatory requirements. See Scenario S-04-11 for what happens when a preference is overlooked.

# 21\. Communication Hierarchy

Build a professional communication tree covering: driver, carrier owner/operations, safety/compliance, breakdown contact, after-hours contact, factoring contact, insurance contact, and dispatcher.

**IMPORTANT:** A dispatcher should not assume decision-making authority merely because they possess someone's contact information. Knowing who to call is not the same as knowing who can authorize what — confirm decision authority, don't assume it.

# 22\. Expiration & Reverification Tracker

A practical tracker includes: item, owner, status, issue date, expiration/renewal date, last verified, source verified, next review, and notes.

Status labels: CURRENT, EXPIRING SOON, EXPIRED, MISMATCH, VERIFICATION PENDING, ESCALATED, DO NOT DISPATCH.

**IMPORTANT:** Do not invent a universal legal reverification interval where none exists. Keep these categories separate: LEGAL EXPIRATION (a hard regulatory date), ANNUAL RENEWAL (a recurring registration cycle), LOAD-BY-LOAD CHECK (verified fresh for each dispatch decision), and COMPANY/BEST-PRACTICE REVIEW (an internal policy choice, not a legal requirement).

# 23\. Carrier Onboarding Checklist

Work through each category with a status label (COMPLETE / MISSING / EXPIRED / MISMATCH / VERIFY / ESCALATE / DO NOT DISPATCH):

* Identity

* USDOT / registration

* Operating authority

* UCR

* Insurance

* W-9

* Payment / factoring

* Dispatch agreement

* Signing authority / LPOA if used

* Equipment

* Drivers

* ELD / communication

* Operating preferences

* Restrictions

* Expiration tracking

* Cybersecurity

* Final go / no-go review

# 24\. Driver Onboarding Checklist

A separate checklist — this is NOT the DQ file:

* Identity

* Assigned carrier

* Assigned equipment

* CDL class

* CDL expiration

* Endorsements

* Medical qualification status

* ELD / status communication

* Current availability

* Home-time commitments

* Operational restrictions

* Escalation contact

# 25\. Scenario Lab

**S-04-01: W-9 / FMCSA Naming Difference**  
A carrier provides a W-9 showing an individual owner on Line 1 and an LLC/business name on Line 2, while the FMCSA record uses the business name.  
**Classification: VERIFY / ESCALATE.**  
A name difference is not automatically fraud. A disregarded-entity tax structure can legitimately produce this pattern. STOP, compare the records, verify the entity/tax relationship through appropriate documentation or trusted contacts, resolve the discrepancy, then proceed or reject.  
**S-04-02: COI Looks Current, Authority Status Conflicts**  
A carrier sends a COI showing current-looking liability and cargo coverage, but the current FMCSA registration environment shows the operating authority as revoked, inactive, or otherwise not authorized for the contemplated operation.  
**Classification: DO NOT DISPATCH until resolved.**  
A COI is not operating authority. When a current official source conflicts with a carrier-supplied document, stop the dispatch process and resolve the status before booking.  
**S-04-03: CDL Expires During the Trip**  
A driver's CDL expires in three days, but the proposed trip is expected to continue for five days.  
**Classification: DO NOT BOOK AS PRESENTLY STRUCTURED / RENEWAL REQUIRED.**  
The contemplated assignment would require the driver to operate after the credential expires. The carrier must resolve the credential issue or use a different lawful assignment before dispatch.  
**S-04-04: Sensitive Onboarding Documents Sent Insecurely**  
A carrier sends a W-9, voided check, banking details, and unnecessary medical information to a broadly shared general inbox.  
**Classification: SECURITY RISK / CORRECT PROCESS.**  
This is not automatically unlawful, but it creates unnecessary exposure. Apply data minimization, access control, secure storage, and a more controlled transmission process going forward.  
**S-04-05: Factor Relationship, Missing Payment Documentation**  
A carrier says it factors its invoices, but no Notice of Assignment, factor contact, or verified remittance instructions are available.  
**Classification: NEEDS MORE INFORMATION / PAYMENT SETUP INCOMPLETE.**  
Do not guess where payment should be directed. Complete the factoring profile and obtain verified payment-direction information before treating the account as fully onboarded.  
**S-04-06: Existing NOA Conflicts With New Direct-Payment Request**  
An existing Notice of Assignment directs payment to Factor A. A new inbound message asks that future payments instead go directly to a different account.  
**Classification: STOP / PAYMENT-DIRECTION VERIFICATION / ESCALATE.**  
Do not decide who legally wins the payment dispute and do not redirect funds from the inbound message alone. Use previously trusted contact information, verify with the appropriate parties, document the verification, and escalate unresolved conflicts.  
**S-04-07: Class B Driver Assigned a Class A Combination**  
A driver holds a Class B CDL. The carrier wants to assign that driver to a combination with a GCWR of 26,001 pounds or more and a towed unit over 10,000 pounds GVWR.  
**Classification: DO NOT DISPATCH.**  
The supplied combination requires Class A authority. A Class B CDL does not authorize the driver for this combination.  
**S-04-08: Placarded Hazmat, Required Endorsement Not Verified**  
A load requires placards under the Hazardous Materials Regulations, but the verified driver credential does not show the required H or X endorsement for the contemplated operation.  
**Classification: DO NOT DISPATCH FOR THAT LOAD.**  
Verbal assurances are not enough. The required endorsement and the rest of the shipment-specific qualifications must be verified before dispatch.  
**S-04-09: Carrier Asks Dispatcher to Administer Compliance Files**  
A carrier asks the dispatcher to run Clearinghouse queries, maintain DQ files, manage drug/alcohol compliance, and perform background-check administration as part of ordinary dispatching.  
**Classification: OUTSIDE ORDINARY DISPATCH PROFILE / CONTRACT & COMPETENCY REVIEW.**  
