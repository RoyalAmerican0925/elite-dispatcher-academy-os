# Module 02 Student Manual — Part 06

## 34. Dispatcher Business-Model Lab

Design a hypothetical dispatcher operation that remains on the carrier-representation side of the boundary taught in this module.

Required components:

1. Target carrier type and equipment.
2. Number and type of carrier clients.
3. Service scope.
4. Compensation model and payer.
5. Load-search workflow.
6. Carrier approval workflow.
7. Rate-negotiation authority.
8. Rate-confirmation signature authority.
9. Driver communication boundaries.
10. Document and record workflow.
11. Billing/factoring support.
12. Claims and OS&D escalation.
13. Broker-authority verification.
14. Entity-versus-identity verification.
15. Prohibited activities.
16. Termination and credential-control process.

### Defense Requirement

The student must defend the operating model by answering:

- Who does the business represent?
- How is freight sourced for each represented carrier?
- Could the business receive freight before a represented carrier is identified?
- If several represented carriers could haul the same shipment, who selects the carrier?
- Who pays the dispatch service?
- Does the dispatch service ever control shipper-to-carrier freight proceeds?
- What documents may the dispatcher sign?
- What happens when the originally represented carrier cannot perform?
- What actions are explicitly prohibited?
- What facts would cause the business to hold or escalate a transaction?

An instructor should challenge any answer that relies on a title, a carrier-count myth, or a contract label rather than the actual workflow.

## 35. Multiple-Carrier Applied Lab

### Case 35-A — Separate Equipment

Carrier Redwood operates reefer equipment in Texas and Oklahoma. Carrier Stone operates flatbeds in Louisiana and Arkansas. The dispatcher searches separately using each carrier's instructions. A frozen-food load appears in Dallas requiring a reefer.

**Expected analysis:** The load is tied by equipment and geography to Redwood's operating profile. The supplied facts do not create a meaningful discretionary choice between the two carriers. The student must still trace the source and confirm the load is being sourced for Redwood rather than acquired generally.

### Case 35-B — Overlapping Dry Vans

Carrier North, Carrier Vale, and Carrier Summit all operate dry vans in Dallas and all could haul Dallas–Atlanta. A shipper emails the dispatch service a load and says, “Use whichever one pays you the best fee.”

**Expected analysis:** Significant brokerage/allocation risk. The freight arrived before a specific represented carrier was tied to it, several carriers overlap, and the dispatcher is being asked to select among them.

### Case 35-C — Carrier-Specific Search With Overlap Elsewhere

The dispatcher represents three dry-van carriers, but Carrier North has specifically asked for Dallas–Memphis freight for Truck 214. While searching for Truck 214, the dispatcher finds a suitable Dallas–Memphis load and presents it to Carrier North. Other clients could theoretically haul the lane but were not the subject of this search.

**Expected analysis:** More favorable to carrier-side agency than Case 35-B because the search was undertaken for an identified carrier/truck. The student must document the carrier-specific search, instructions, and absence of discretionary reallocation.

### Case 35-D — Breakdown

Carrier North books a load. Its truck breaks down. The dispatcher also represents Carrier Vale and knows Vale has an empty truck nearby.

**Expected action:** Do not silently substitute Vale. Return/cancel through the authorized source or obtain appropriate authorization and escalate the regulatory/contract issue before arranging a different independent carrier.

## 36. Payment-Flow Forensics Lab

For each model, identify what is known, what is missing, and the risk level.

### Model A

Carrier pays dispatcher 7% of gross load revenue under an ongoing dispatch agreement. Broker pays carrier or carrier's factor directly.

**Read:** Percentage compensation alone does not establish brokerage. Analyze the full relationship and conduct.

### Model B

Shipper pays dispatch service $4,000. Dispatch service tells carrier the shipment pays $3,500 and keeps $500 without disclosing the shipper price.

**Read:** High-risk brokerage/payment-spread structure. The dispatch service is controlling freight proceeds and retaining a spread while arranging transportation.

### Model C

Carrier pays dispatcher a weekly retainer. Broker separately offers dispatcher $300 personally for every represented truck routed to the broker.

**Read:** Conflict and authority concern. The dispatcher may be incentivized to act contrary to the represented carrier's interests. Hold and disclose/escalate according to policy.

### Model D

Carrier's factoring company remits the dispatcher's contractually authorized service fee from carrier proceeds after carrier approval.

**Read:** Requires full facts. Factoring involvement does not itself make the dispatcher a broker. Determine whose funds they are, who authorized the deduction, and whether the dispatcher ever controls shipper-to-carrier transportation payments.

## 37. Fraud and Rebrokering Boundary Lab

Module 02 introduces issue recognition. Detailed fraud operations may be expanded in a dedicated fraud module.

### Lawful Brokerage

A properly authorized broker arranges transportation under its authority and agreements.

### Co-Brokering

Two properly authorized brokers may participate in an arrangement when permitted by applicable agreements and authority. Students must not assume that every second intermediary is automatically fraudulent.

### Unauthorized Rebrokering / Double Brokering

A carrier accepts freight as the hauling carrier and secretly re-tenders it to another carrier without required authority or consent. The exact facts and agreements matter, but concealment of the actual hauling carrier is a major red flag.

### Carrier Identity Theft

A fraudster impersonates a legitimate carrier or broker using copied authority information, altered emails, or false payment instructions.

### EDA Rule

**ROLE + AUTHORITY + CONSENT + CONTRACT + ACTUAL CONDUCT** must be examined together.

## 38. CAPSTONE SIMULATION — “ARE YOU DISPATCHING, OR BROKERING?”

### Simulation Position

You operate **Atlas Carrier Support**, a fictional dispatch service. Atlas has continuing agreements with several motor carriers. Your task is not to maximize the number of loads booked. Your task is to make defensible decisions that remain within delegated authority and stop questionable transactions.

For every event, complete:

1. Represented principal.
2. Freight source.
3. Relevant delegated authority.
4. Carrier-selection control.
5. Money-flow facts.
6. Contract/document risk.
7. Identity/authority verification needs.
8. Material unknowns.
9. Preliminary classification.
10. Operational decision.
11. Documentation entry.
12. Escalation message if required.

### Event 1 — Normal Carrier-Specific Search

Carrier A has a dry van empty in Dallas and asks Atlas to locate freight toward Memphis. Atlas searches a load board specifically for Carrier A and finds a load that fits its equipment and timing.

**Target competency:** Identify normal carrier-side sourcing and remain within Carrier A's delegated parameters.

### Event 2 — Shipper Direct

A shipper contacts Atlas: “I have five Dallas–Atlanta loads every day. Can you find trucks for me?” Atlas represents several unrelated carriers.

**Target competency:** Recognize that the request is freight-first and asks Atlas to arrange transportation generally. Do not promise trucks. Hold and analyze broker-authority implications.

### Event 3 — Freight First, Carrier Second

Atlas receives a shipment opportunity before any client carrier is identified. Three represented carriers could haul it. Atlas considers giving it to the carrier that generates Atlas the largest fee.

**Target competency:** Recognize discretionary allocation and compensation conflict. Do not proceed as proposed.

### Event 4 — “Sign Anything”

Carrier B's owner says, “You can sign anything you need.” A new broker sends a master broker-carrier agreement containing broad indemnity, mandatory arbitration in a distant state, unilateral setoff rights, and language allowing significant cargo deductions.

**Target competency:** Distinguish generalized operating permission from informed authority to accept material master-contract obligations. Hold for carrier/legal-contract approval.

### Event 5 — Active MC, Suspicious Identity

A party offers unusually high-paying freight using the MC number of a real active broker. The email domain differs by one character from the independently verified company domain, and the callback number is not associated with the company.

**Target competency:** Separate entity authority from communicator identity. Place on fraud hold and independently verify.

### Event 6 — Breakdown Substitution

Carrier C accepts a load but breaks down before pickup. Atlas also represents Carrier D, whose truck is nearby. The broker has not authorized substitution.

**Target competency:** Do not silently transfer the load. Identify allocation/rebrokering and contract risks. Contact the authorized source, document the breakdown, and escalate before any substitute arrangement.

### Event 7 — Personal Broker Bonus

A broker offers Atlas's dispatcher a $300 personal bonus for each Atlas client routed to that broker.

**Target competency:** Identify conflict of interest and possible distortion of carrier-directed representation. Document and escalate; do not route freight based on undisclosed personal compensation.

### Event 8 — Payment Redirection

A “broker accounting representative” emails new banking instructions and asks Atlas to tell Carrier A's factor to redirect payment to a different account.

**Target competency:** Treat payment-instruction changes as identity/fraud-sensitive. Do not act on incoming instructions alone. Independently verify through established contacts.

### Event 9 — Concealed Carrier

Carrier E says its truck is unavailable but asks Atlas to keep Carrier E on the paperwork while another carrier actually transports the freight.

**Target competency:** Critical stop. Do not participate in misrepresentation of the actual transportation provider.

### Event 10 — Incomplete Facts

A freight opportunity arrives through a third party who says, “I'm working with the shipper.” The party's exact role, authority, compensation, and relationship are unknown.

**Target competency:** Use **INSUFFICIENT FACTS — VERIFY** rather than forcing a binary answer. Obtain role, authority, freight-source, carrier-selection, and payment information.

## 39. Capstone Required Deliverables

The student must submit:

- Dispatcher/Broker Classification Report.
- Authority Analysis.
- Broker/Entity/Identity Verification Worksheet where applicable.
- Contract-Risk Flags.
- Written Escalation Communications.
- Decision Log.
- Corrective Action Record.
- Governing-Framework Explanation.
- End-of-Simulation Compliance Report.

A conclusion without supporting facts does not pass.

## 40. Performance Assessment

### Performance Standard

The student receives unfamiliar transaction packets rather than memorized quiz questions. Each packet contains realistic but fictional emails, carrier instructions, rate confirmation excerpts, broker information, payment information, and incomplete facts.

The student must demonstrate:

1. **Role identification** — correctly identifies represented principal and counterparties.
2. **Authority identification** — states what authority is delegated and what is not.
3. **Freight trace** — identifies who obtained the freight and for whom.
4. **Selection analysis** — identifies who controls carrier selection and whether allocation discretion exists.
5. **Money-flow analysis** — traces payer, payee, freight proceeds, and dispatch compensation.
6. **Agreement-versus-conduct analysis** — identifies inconsistencies.
7. **Verification discipline** — separates entity, authority, bond/trust, identity, credit, and factoring questions.
8. **Contract issue spotting** — recognizes master-contract and rate-confirmation terms requiring approval/escalation.
9. **Decision quality** — chooses proceed, hold, verify, escalate, or do-not-proceed based on facts.
10. **Documentation quality** — produces a usable decision record.

### Scoring

- **90–100:** Professional-ready for Module 02 competency.
- **80–89:** Pass with targeted coaching notes.
- **70–79:** Remediation required before progression.
- **Below 70:** Full Module 02 remediation.

A numerical score does not override a critical failure.

## 41. Critical Failure Rubric

Automatic remediation applies when the student knowingly:

- arranges transportation as a broker without required authority after the issue has been identified;
- obtains freight and secretly redistributes it among carriers;
- conceals the actual hauling carrier;
- participates in double brokering or fraudulent re-tendering;
- falsifies carrier paperwork;
- uses another carrier's MC or insurance improperly;
- signs material obligations beyond delegated authority without required approval;
- collects/redistributes freight proceeds as part of an unauthorized brokerage structure;
- instructs a carrier or driver to misrepresent who is transporting the load;
- continues after verified identity theft/fraud;
- treats a business title as overriding actual conduct;
- fabricates missing facts to justify proceeding.

## 42. Remediation Path

A student who triggers critical failure must:

1. Identify the exact failed decision.
2. Reconstruct the fact pattern without hindsight distortion.
3. Identify the controlling authority/boundary principle.
4. State the safe operational decision that should have been made.
5. Draft the correct documentation/escalation communication.
6. Complete a materially different replacement scenario.
7. Pass the replacement scenario without the same critical error.

Remediation is performance-based, not merely rereading the lesson.

## 43. Independent Practice — Decision Defense

For each case below, write a one-page operational defense.

### Practice A

A dispatcher represents two carriers. Both operate dry vans in the same region. A broker offers a load specifically after the dispatcher calls asking for freight for Carrier A. Carrier A declines. The dispatcher wants to offer it to Carrier B.

**Required analysis:** Identify whether the original carrier-specific sourcing changes when the dispatcher redirects the same opportunity after Carrier A declines. Determine what facts must be clarified before doing so.

### Practice B

A dispatcher is paid by the carrier but also receives a marketing referral fee from a load-board vendor unrelated to any specific freight transaction.

**Required analysis:** Do not assume all double-side compensation is equivalent. Analyze whether the second payment is tied to carrier selection or transportation arrangement.

### Practice C

A broker's authority is active and financial responsibility appears current, but the broker has poor payment history and the carrier's factoring company will not approve it.

**Required analysis:** Explain why regulatory authority and financial security do not equal good credit or factoring approval.

### Practice D

A carrier owner gives a dispatcher authority to sign rate confirmations but never addresses master broker-carrier agreements.

**Required analysis:** Explain why document-specific authority matters.

## 44. Module 02 Final Competency Statement

A graduate who passes Module 02 can examine a complicated freight arrangement and explain:

**WHO REPRESENTS WHOM → WHAT AUTHORITY EXISTS → WHO OBTAINED THE FREIGHT → WHO CONTROLS CARRIER SELECTION → HOW MONEY FLOWS → WHAT THE AGREEMENTS SAY → WHAT ACTUAL CONDUCT SHOWS → WHAT FACTS ARE MISSING → WHAT MUST BE VERIFIED → WHETHER THE TRANSACTION MAY PROCEED, MUST BE HELD, OR MUST BE ESCALATED.**

The graduate is not trained to give legal advice. The graduate is trained to recognize regulatory boundaries early enough to avoid improvising through them.