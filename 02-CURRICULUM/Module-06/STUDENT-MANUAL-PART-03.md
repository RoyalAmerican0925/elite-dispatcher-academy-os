### Myth 9: "An existing email thread makes changed payment instructions safe."

**Why it sounds plausible:** If the message arrives inside a conversation you've already been having, it feels continuous and trustworthy.

**Correct principle:** Per Section 10, thread hijacking specifically exploits this assumption — a fraudulent message can be inserted into a real, ongoing thread.

**Why it matters:** This myth defeats the very purpose of callback verification if a dispatcher trusts thread continuity over independent confirmation.

*Classification: CYBERSECURITY / OPERATIONAL BEST PRACTICE*

### Myth 10: "Active broker authority means every load from that broker is legitimate."

**Why it sounds plausible:** If the company itself checks out, it's tempting to assume every individual transaction from them is automatically fine.

**Correct principle:** Authority verification is one layer of the workflow — individual transactions can still involve compromised contacts, document mismatches, or payment-path problems even from an authorized, legitimate company.

**Why it matters:** This myth encourages skipping the remaining verification layers once the first one clears.

*Classification: OPERATIONAL BEST PRACTICE*

# 20\. Scenario Lab

### S-06-01: Clean Verification

A dispatcher checks a broker's authority (active), entity name (matches records), contact channel (matches a previously established number), and documents (all consistent). No inconsistencies are found.

**Classification:** CLEAR.

All workflow steps in Section 7 check out with no unresolved mismatch. Proceed to the next workflow stage.

### S-06-02: Real MC, Email-Domain Mismatch

The broker's MC number is active and verified. However, the email contacting the dispatcher comes from a domain that doesn't match the broker's known corporate domain.

**Classification:** VERIFY → HOLD IF UNRESOLVED.

Per Section 3 and Myth 1, a real MC number doesn't verify this specific contact. Callback through a trusted, previously verified channel before proceeding.

### S-06-03: Callback Contradicts Incoming Contact

A dispatcher calls the broker's verified corporate number and is told the person who reached out by email doesn't work there and the message wasn't sent by the company.

**Classification:** DO NOT BOOK / ESCALATE.

This is a confirmed contact mismatch — the trusted channel directly contradicted the incoming contact. This has moved past "verify" into a confirmed problem requiring escalation, not further independent investigation by the dispatcher.

### S-06-04: Changed Payment Instructions

An email requests that payment for an upcoming load be sent to a new bank account, different from what's on file.

**Classification:** HOLD / VERIFY.

Per Section 17, this is a textbook payment-path verification trigger. Do not click any links or act on the new instructions — verify through a trusted channel before any change is made.

### S-06-05: Rate Confirmation Name/MC Mismatch

A rate confirmation document lists a broker name and MC number that don't match what's on file for this broker relationship.

**Classification:** HOLD / VERIFY.

Per Section 13, do not sign until this is resolved, and do not call it fraud from the document alone — it could be a clerical error, a related entity, or something more serious. Verification determines which.

### S-06-06: Similar Duplicate Postings

The same-looking load appears posted by two different companies around the same time.

**Classification:** VERIFY.

Per Section 14, do not diagnose double brokering solely from duplicate freight. Ask questions, verify authority for both postings, and escalate only if verification doesn't resolve the inconsistency.

### S-06-07: Factor Declines Broker

The carrier's factoring company declines to purchase invoices from a specific broker.

**Classification:** DO NOT USE, if carrier policy requires factor approval.

Per Section 15, a factor decline is a financial-risk decision, not proof of fraud. If the carrier's own policy requires factor approval before booking with a broker, this decline means DO NOT USE under that policy — but the broker should not be accused of fraud based on this alone.

### S-06-08: Required Broker Authority Inactive

A current FMCSA lookup shows the broker's required operating authority as inactive.

**Classification:** DO NOT BOOK.

Per Section 5, this is a hard stop — required authority is not active. Do not teach or assume this automatically voids cargo or liability insurance protections; that's a separate legal question outside this module's scope. The booking decision itself, however, is clear: do not book.

### S-06-09: Financial-Security Cancellation Pending

A dispatcher notices the broker's BMC-85 filing shows a pending cancellation status.

**Classification:** HOLD / ESCALATE / VERIFY CURRENT STATUS.

Per Section 6, pending cancellation is a risk event, not the same as already-cancelled financial security. Do not teach or assume that payment becomes virtually uncollectible — verify the current, actual status before drawing operational conclusions.

### S-06-10: Real Broker Email Appears Compromised

A known, previously legitimate broker contact's email starts sending unusual requests — urgent tone, new attachment types, requests inconsistent with the established relationship.

**Classification:** HOLD / VERIFY.

Per Section 10, this is a classic BEC pattern — a real, legitimate account may have been compromised. Use trusted callback verification rather than replying to the email itself or ignoring the pattern because the sender is known.

### S-06-11: Urgent Request to Bypass Verification

A message states there's no time to verify — the load will be lost if the dispatcher doesn't act immediately on the instructions as given.

**Classification:** VERIFY / HOLD.

Urgency is itself a manipulation pattern commonly used in fraud attempts. Per Section 17, the verification standard does not change based on how urgent a request sounds — do not skip controls because of time pressure.

### S-06-12: Multiple Small Inconsistencies

No single detail is alarming on its own, but several small things don't quite line up — a slightly different phone extension, a document formatted differently than usual, a slightly delayed response to a routine question.

**Classification:** ESCALATE / PASS IF RISK UNRESOLVED.

Per Section 2's core risk principle, accumulating small inconsistencies deserve the same disciplined sequence as one large red flag. Escalate rather than dismiss the pattern, and do not state the transaction is fraudulent unless that's independently established through the verification process.

# 21\. Module 06 Knowledge Check

Diagnostic check — not a graded exam.

## Part A — Multiple Choice

1. The correct response to a single red flag is generally:
* a) Immediately accuse the broker of fraud
* b) Ignore it if the company has a valid MC number
* c) Verify further before drawing a conclusion
* d) Automatically add the broker to a DNU list

2. As of May 14, 2026, current FMCSA registration/filing activity is found in:
* a) Legacy L&I
* b) Motus
* c) SAFER exclusively
* d) None of the above

3. If FMCSA determines a BMC-85 trustee is ineligible, the broker generally has:
* a) No cure period — immediate suspension
* b) 7 days to replace the filing
* c) 30 days to obtain a replacement filing
* d) One year

4. Verifying that a company is real (entity verification) is:
* a) The same thing as verifying who is contacting you
* b) Sufficient on its own to trust any message from that company
* c) A separate question from contact verification
* d) Not necessary if SAFER shows an active record

5. The safest way to verify a request to change payment instructions is to:
* a) Reply to the email requesting the change
* b) Call the number provided in the request
* c) Call a previously verified, trusted number
* d) Proceed if the request appears urgent

6. Two similar load postings from different companies should be treated as:
* a) Confirmed double brokering
* b) Something to verify, not automatically diagnose
* c) Always legitimate co-brokering
* d) Irrelevant

7. A factoring company's decline of a broker is:
* a) Proof of fraud
* b) A financial-risk decision that may trigger carrier policy, but is not proof of fraud
* c) A government determination
* d) Always resolved by contacting FMCSA

8. DNU lists are best described as:
* a) Official government blacklists
* b) Carrier policy / internal risk control
* c) FMCSA enforcement actions
* d) Legally binding on all carriers

## Part B — True / False (explanation required)

9. A real, active MC number is sufficient by itself to trust an incoming message.
10. Co-brokering and double brokering are the same thing.
11. A pending BMC-85 cancellation means the broker's financial security is already gone.
12. Urgency is a valid reason to skip verification steps.
