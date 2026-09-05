# SIM-006 — Scenario & Evidence Packet

**Case:** Kestrel Logistics Group / questioned transaction  
**Release rule:** Instructor/reference packet. Release one stage at a time; do not expose later evidence early.

## Case premise
A dispatcher sees an ordinary-looking dry-van posting from Amarillo, Texas to Springfield, Missouri for $2,150. The broker name and MC information appear plausible. An email arrives moments later referencing the exact posting. The broker entity will prove legitimate; the questioned transaction contact will not.

That design forces the student to separate **entity legitimacy** from **contact/load/document/payment authenticity**.

## Release 1 — Intake
- Posting: Kestrel Logistics Group; self-reported MC/callback; dry van; Amarillo → Springfield; $2,150.
- Email: `dispatch@kestrel-logisticsgroup.com` references exact lane/rate.
- No prior carrier relationship.

**Required judgment:** isolate observed facts, claims and unknowns without trusting or accusing.

## Release 2 — Entity verification
Controlled authoritative-style FMCSA/Motus record shows:
- entity exists;
- required broker authority ACTIVE for the contemplated activity;
- financial-responsibility filing current at lookup time;
- independent general-company contact route.

**Does not prove:** sender authorization, load/document authenticity, payment path or payment certainty.

## Release 3 — Contact mismatch
- Questioned domain: `kestrel-logisticsgroup.com`.
- Independently located corporate domain: `kestrellogistics.com`.
- Email says to use its direct number because the main office is slow.

**Required judgment:** construct independent authentication path.

## Release 4 — Trusted callback
Independently reached company:
- confirms Kestrel is legitimate;
- cannot authenticate sender/domain;
- cannot locate questioned load reference in accessible system;
- asks carrier not to rely on questioned contact while it investigates.

**Required judgment:** STOP/DO NOT BOOK questioned transaction; preserve and escalate evidence.

## Release 5 — Document cross-check
Posting:
- Kestrel Logistics Group;
- correct MC;
- $2,150;
- Amarillo → Springfield.

Rate confirmation:
- `Kestrel Logistic Group` name mismatch;
- MC differs by one digit;
- pickup/reference differs;
- lane and rate match;
- questioned domain appears in footer.

**Required judgment:** record actual mismatches; HOLD reliance until independently verified/corrected.

## Release 6A — Financial responsibility / factor signal
- Training snapshot shows current BMC-85 status at lookup.
- Carrier factor/credit portal shows Kestrel acceptable under that private provider's commercial-risk policy.
- Neither source authenticates the sender or guarantees this transaction/payment.

**Timing discipline:** keep separate the applicable 7-calendar-day liquidity/replenishment context, 7-business-day FMCSA notice-response context, and 30-day replacement context for an ineligible BMC-85 provider.

## Release 6B — Inactive-authority critical mini-case
Alder Ridge Brokerage LLC:
- real entity;
- consistent-looking contact/domain/document;
- required broker authority shown INACTIVE in current authoritative evidence.
- contact calls it a system delay and asks carrier to move now.

**Required judgment:** do not book while required authority is verified inactive.

## Release 7 — Duplicate / re-brokering ambiguity
Similar posting appears with another broker/rate for the same general lane/equipment/window/commodity family.

Evidence does not establish whether this is separate freight, a stale duplicate, authorized co-brokering, another legitimate arrangement, or unauthorized re-brokering.

**Required judgment:** verify; do not declare double brokering from the indicator alone.

## Release 8 — Payment-path attack
Questioned sender requests immediate ACH/remittance change and supplies new banking data plus a confirmation number only within the questioned message.

**Required judgment:** HOLD, preserve, independently authenticate through trusted route, escalate if unresolved/contradicted.

## Release 9 — Pressure
- “Confirm in five minutes or we move the load.”
- “Compliance already approved it.”
- “Do not call the main line again.”

No new verifying evidence appears.

**Required judgment:** commercial urgency does not lower verification standards.

## Release 10 — Evidence-state change
Kestrel compliance, reached through the trusted route:
- confirms entity/authority remain legitimate/current;
- confirms questioned sender/domain is NOT authorized;
- confirms questioned rate confirmation was not issued through Kestrel process;
- confirms Kestrel did not request the payment change.

The duplicate posting remains unresolved and is not needed to reach the transaction disposition.

## Final defensible disposition
**DO NOT BOOK / DECLINE the questioned transaction; ESCALATE preserved evidence under carrier policy.**

Do not convert that transaction finding into an unsupported accusation that the legitimate Kestrel entity itself committed fraud.

## Premium ambiguity control
The case deliberately combines legitimate entity evidence, reassuring-but-limited factor evidence, matching lane/rate fields, a mostly plausible document, an ambiguous duplicate posting, real contact contradictions, pressure, and an unauthorized payment-path change. “Suspect everything” is not a passing strategy; disciplined verification is.
