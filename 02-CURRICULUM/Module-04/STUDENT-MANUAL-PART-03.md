**IMPORTANT:** Label this entire category CARRIER POLICY / OPERATIONAL PREFERENCE — not law. These are business choices the carrier has made, not regulatory requirements. See Scenario S-04-11 for what happens when a preference is overlooked.

# 21\. Communication Hierarchy

Build a professional communication tree covering: driver, carrier owner/operations, safety/compliance, breakdown contact, after-hours contact, factoring contact, insurance contact, and dispatcher.

**IMPORTANT:** A dispatcher should not assume decision-making authority merely because they possess someone's contact information. Knowing who to call is not the same as knowing who can authorize what — confirm decision authority, don't assume it.

# 22\. Expiration & Reverification Tracker

A practical tracker includes: item, owner, status, issue date, expiration/renewal date, last verified, source verified, next review, and notes.

Status labels: CURRENT, EXPIRING SOON, EXPIRED, MISMATCH, VERIFICATION PENDING, ESCALATED, DO NOT DISPATCH.

**IMPORTANT:** Do not invent a universal legal reverification interval where none exists. Keep these categories separate: LEGAL EXPIRATION, ANNUAL RENEWAL, LOAD-BY-LOAD CHECK, and COMPANY/BEST-PRACTICE REVIEW.

# 23\. Carrier Onboarding Checklist

Work through each category with a status label:

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
These are carrier-compliance functions, not routine dispatch-profile tasks. Do not silently accept them.

**S-04-10: Current-Year UCR Issue**
A carrier subject to UCR appears to have registration only for the prior calendar year.
**Classification: VERIFY / CARRIER CORRECTION REQUIRED IF SUBJECT TO UCR.**
UCR is the carrier's responsibility. Verify applicability and current status. If the carrier is subject to UCR and is not current, escalate to the carrier for correction before treating the onboarding file as clear.

**S-04-11: Bank-Change Instructions From a Familiar Email Address**
New banking instructions arrive from the carrier's normal email address and ask the dispatcher to replace the account already on file immediately.
**Classification: STOP / CALLBACK VERIFY.**
A familiar sender address does not defeat business-email-compromise risk. Use a previously verified phone number or trusted contact channel, independently confirm the change, document the verification, and update only after confirmation.

**S-04-12: Altered-Looking Dates or Inconsistent Entity Information**
A carrier packet contains an insurance document with an unusual date format and an entity name that differs from other onboarding records. The PDF also appears visually altered.
**Classification: STOP / VERIFY / ESCALATE.**
An inconsistency is not automatic proof of fraud, but it is enough to stop the onboarding decision. Verify the document and entity information directly with authoritative or trusted sources before proceeding.

# 26\. Module 04 Knowledge Check

Diagnostic check — not a graded exam.

## Part A — Multiple Choice

1. As of 2026, the current FMCSA registration platform is:
* a) Legacy L&I
* b) SAFER
* c) Motus
* d) The FMCSA Portal Registration Options page

2. Legacy L&I, as of May 14, 2026:
* a) Reflects real-time current Motus filings
* b) Is a historical-record system that does not reflect current Motus filings
* c) Has been permanently deleted with no record retained
* d) Is the same system as Motus under a different name

3. The federal BIPD insurance minimum for a non-hazmat for-hire property carrier at or above 10,001 lb GVWR is generally:
* a) $300,000
* b) $750,000
* c) $1,000,000
* d) $5,000,000

4. A COI can be relied upon as:
* a) Proof of current operating authority
* b) A summary of represented insurance information, to be paired with further verification
* c) A guarantee that coverage hasn't changed
