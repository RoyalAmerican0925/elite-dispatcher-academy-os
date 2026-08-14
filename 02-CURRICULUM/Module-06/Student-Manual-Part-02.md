Building on Module 04's payment-change protocol: new bank, factoring, or remittance instructions are never trusted from the message alone. Use a previously verified contact method, callback-verify, compare entity/account/factor information against what's on file, document the verification, and update only after confirmation.

IMPORTANT: This applies with equal force whether the change arrives by email, text, phone call, or an in-person conversation with someone claiming new authority. The verification standard doesn't change based on how convincing or urgent the request sounds — see Scenario S-06-11.

# 18. Common Red Flags — Summary Reference

None of these prove fraud individually. Each one triggers VERIFY, not an automatic conclusion:

Contact channel doesn't match records on file.

Email domain has subtle irregularities (Section 9).

Unexpected payment/routing/factoring change (Sections 10, 17).

Document details don't match across sources (Section 12).

Required broker authority shows inactive or lapsed (Section 5).

Financial security shows a pending cancellation or trustee issue (Section 6).

Similar freight posted under multiple company names (Section 14).

Urgent pressure to skip verification steps (Section 17, Scenario S-06-11).

Multiple small inconsistencies accumulating across a single transaction (Scenario S-06-12).

# 19. Myth Audit

### Myth 1: "A real MC number means it's a safe broker."

Why it sounds plausible: A valid, active MC number confirms the company is registered, so it's natural to assume that settles the question.

Correct principle: Entity registration is one verification layer, not the whole picture. It doesn't verify the contact person (Section 3), the payment path, or whether this specific transaction is legitimate.

Why it matters: Treating entity verification as complete verification skips several of the layers this module teaches.

Classification: OPERATIONAL BEST PRACTICE

### Myth 2: "A normal-looking email address means it's a safe message."

Why it sounds plausible: If the domain and formatting look right, the message feels trustworthy.

Correct principle: A legitimate account can be compromised (Section 10, BEC/ATO). Appearance doesn't rule out account takeover or thread hijacking.

Why it matters: This myth is exactly what makes BEC attacks effective — they rely on the message looking normal.

Classification: CYBERSECURITY / OPERATIONAL BEST PRACTICE

### Myth 3: "Low credit automatically means fraud."

Why it sounds plausible: Financial risk and legal legitimacy feel like they should track together.

Correct principle: Credit and financial risk are separate from fraud. A financially struggling but entirely legitimate broker is a real, common category.

Why it matters: Confusing the two can cause a dispatcher to make an unfounded accusation instead of applying the correct risk-policy response.

Classification: INDUSTRY PRACTICE / CARRIER POLICY

### Myth 4: "A factor decline automatically means fraud."

Why it sounds plausible: A financial company's rejection sounds like a red flag about legitimacy.

Correct principle: Per Section 15, a decline reflects that factor's own risk decision — exposure limits, slow pay, internal policy — not a fraud finding.

Why it matters: This myth can lead to an unsupported accusation against an otherwise legitimate broker.

Classification: INDUSTRY PRACTICE / CARRIER POLICY

### Myth 5: "A duplicate posting automatically means double brokering."

Why it sounds plausible: Two similar listings feel like conclusive evidence of unauthorized re-brokering.

Correct principle: Per Section 14, duplicate listings have several possible innocent explanations. Verify before concluding anything.

Why it matters: This is one of the most common overreactions in freight sourcing, and this module exists partly to correct it.

Classification: LEGAL / INDUSTRY TERMINOLOGY — QUALIFIED

### Myth 6: "Co-brokering and double brokering are the same thing."

Why it sounds plausible: Both involve more than one broker touching the same freight.

Correct principle: Co-brokering can be authorized and legitimate; double brokering specifically refers to unauthorized re-brokering. The authorization and knowledge of the original parties is what distinguishes them.

Why it matters: Conflating the terms leads to false alarms over legitimate business arrangements.

Classification: LEGAL / INDUSTRY TERMINOLOGY — QUALIFIED

### Myth 7: "A professional-looking logo means it's a legitimate document."

Why it sounds plausible: Polished branding feels like evidence of a real, established company.

Correct principle: Per Section 12, document appearance alone doesn't verify legitimacy — logos and formatting can be copied easily.

Why it matters: Relying on visual polish instead of cross-checked details is an easy way to miss a real inconsistency.

Classification: OPERATIONAL BEST PRACTICE

### Myth 8: "A SAFER company record verifies the individual contacting you."

Why it sounds plausible: SAFER confirms the company is real, so it feels like it should cover the person too.

Correct principle: Per Section 3, entity verification and contact verification are separate questions. SAFER answers the first, not the second.

Why it matters: This is the same underlying error as Myth 1, applied specifically to the public-lookup tool.

Classification: OPERATIONAL BEST PRACTICE

### Myth 9: "An existing email thread makes changed payment instructions safe."

Why it sounds plausible: If the message arrives inside a conversation you've already been having, it feels continuous and trustworthy.

Correct principle: Per Section 10, thread hijacking specifically exploits this assumption — a fraudulent message can be inserted into a real, ongoing thread.

Why it matters: This myth defeats the very purpose of callback verification if a dispatcher trusts thread continuity over independent confirmation.

Classification: CYBERSECURITY / OPERATIONAL BEST PRACTICE

### Myth 10: "Active broker authority means every load from that broker is legitimate."

Why it sounds plausible: If the company itself checks out, it's tempting to assume every individual transaction from them is automatically fine.

Correct principle: Authority verification is one layer of the workflow (Section 7) — individual transactions can still involve compromised contacts, document mismatches, or payment-path problems even from an authorized, legitimate company.

Why it matters: This myth encourages skipping the remaining verification layers once the first one clears.

Classification: OPERATIONAL BEST PRACTICE

# 20. Scenario Lab

### S-06-01: Clean Verification

A dispatcher checks a broker's authority (active), entity name (matches records), contact channel (matches a previously established number), and documents (all consistent). No inconsistencies are found.

Classification: CLEAR.

All workflow steps in Section 7 check out with no unresolved mismatch. Proceed to the next workflow stage.

### S-06-02: Real MC, Email-Domain Mismatch

The broker's MC number is active and verified. However, the email contacting the dispatcher comes from a domain that doesn't match the broker's known corporate domain.

Classification: VERIFY → HOLD IF UNRESOLVED.

Per Section 3 and Myth 1, a real MC number doesn't verify this specific contact. Callback through a trusted, previously verified channel before proceeding.

### S-06-03: Callback Contradicts Incoming Contact

A dispatcher calls the broker's verified corporate number and is told the person who reached out by email doesn't work there and the message wasn't sent by the company.

Classification: DO NOT BOOK / ESCALATE.

This is a confirmed contact mismatch — the trusted channel directly contradicted the incoming contact. This has moved past "verify" into a confirmed problem requiring escalation, not further independent investigation by the dispatcher.

### S-06-04: Changed Payment Instructions

An email requests that payment for an upcoming load be sent to a new bank account, different from what's on file.

Classification: HOLD / VERIFY.

Per Section 17, this is a textbook payment-path verification trigger. Do not click any links or act on the new instructions — verify through a trusted channel before any change is made.

### S-06-05: Rate Confirmation Name/MC Mismatch

A rate confirmation document lists a broker name and MC number that don't match what's on file for this broker relationship.

Classification: HOLD / VERIFY.

Per Section 13, do not sign until this is resolved, and do not call it fraud from the document alone — it could be a clerical error, a related entity, or something more serious. Verification determines which.

### S-06-06: Similar Duplicate Postings

The same-looking load appears posted by two different companies around the same time.

Classification: VERIFY.

Per Section 14, do not diagnose double brokering solely from duplicate freight. Ask questions, verify authority for both postings, and escalate only if verification doesn't resolve the inconsistency.

### S-06-07: Factor Declines Broker

The carrier's factoring company declines to purchase invoices from a specific broker.

Classification: DO NOT USE, if carrier policy requires factor approval.

Per Section 15, a factor decline is a financial-risk decision, not proof of fraud. If the carrier's own policy requires factor approval before booking with a broker, this decline means DO NOT USE under that policy — but the broker should not be accused of fraud based on this alone.

### S-06-08: Required Broker Authority Inactive

A current FMCSA lookup shows the broker's required operating authority as inactive.

Classification: DO NOT BOOK.

Per Section 5, this is a hard stop — required authority is not active. Do not teach or assume this automatically voids cargo or liability insurance protections; that's a separate legal question outside this module's scope. The booking decision itself, however, is clear: do not book.

### S-06-09: Financial-Security Cancellation Pending

A dispatcher notices the broker's BMC-85 filing shows a pending cancellation status.

Classification: HOLD / ESCALATE / VERIFY CURRENT STATUS.

Per Section 6, pending cancellation is a risk event, not the same as already-cancelled financial security. Do not teach or assume that payment becomes virtually uncollectible — verify the current, actual status before drawing operational conclusions.

### S-06-10: Real Broker Email Appears Compromised

A known, previously legitimate broker contact's email starts sending unusual requests — urgent tone, new attachment types, requests inconsistent with the established relationship.

Classification: HOLD / VERIFY.

Per Section 10, this is a classic BEC pattern — a real, legitimate account may have been compromised. Use trusted callback verification rather than replying to the email itself or ignoring the pattern because the sender is known.

### S-06-11: Urgent Request to Bypass Verification

A message states there's no time to verify — the load will be lost if the dispatcher doesn't act immediately on the instructions as given.

Classification: VERIFY / HOLD.

Urgency is itself a manipulation pattern commonly used in fraud attempts. Per Section 17, the verification standard does not change based on how urgent a request sounds — do not skip controls because of time pressure.

### S-06-12: Multiple Small Inconsistencies

No single detail is alarming on its own, but several small things don't quite line up — a slightly different phone extension, a document formatted differently than usual, a slightly delayed response to a routine question.

Classification: ESCALATE / PASS IF RISK UNRESOLVED.

Per Section 2's core risk principle, accumulating small inconsistencies deserve the same disciplined sequence as one large red flag. Escalate rather than dismiss the pattern, and do not state the transaction is fraudulent unless that's independently established through the verification process.
