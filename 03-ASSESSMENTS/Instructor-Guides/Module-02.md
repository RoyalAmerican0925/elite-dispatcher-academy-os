# Module 02 — Full Instructor Guide

**Status:** DRAFT_COMPLETE — built to the Academy Instructor Guide Product Standard (`00-ACADEMY-MASTER/INSTRUCTOR-GUIDE-PRODUCT-STANDARD.md`). This is a delivery-intelligence document, distinct from and complementary to the Answer Key, Practical Scoring Guide, SIM-002 Scoring/Completion Record, and the Regulatory/Date-Sensitive Source Registers — it does not duplicate their content and must not contradict them.

---

## A. Module Control Header

- **Module:** 02 — Dispatcher Role & Legal Boundaries (Agency Boundary Desk)
- **Revision date:** 2026-09-04
- **Instructional status:** REPRESENTED / earlier commercial-content pass complete; PREMIUM RE-AUDIT OPEN per the current Architecture Completion Matrix
- **Source-sensitive status:** HIGH — this module carries this project's most actively revised date-sensitive content (the unauthorized-brokerage penalty figure has changed within this project's own production history; BMC-85 trust timelines are similarly volatile)
- **Prerequisites/imports:** Module 01 (shipper/carrier/broker/dispatcher role vocabulary, USDOT-vs-authority distinction)
- **Exports to later modules:** Modules 04, 05, 06, 08, 09, 13, 15 (per Module 02's own Appendix B dependency map)
- **Related simulation:** SIM-002 (Agency Boundary Desk) — 18 decisions, 14 competency families, 6 critical-escalation decisions
- **Associated paths:** `02-CURRICULUM/Module-02/` (4 manual parts), `03-ASSESSMENTS/Module-Quizzes/Module-02...`, `03-ASSESSMENTS/Module-Exams/Module-02-Exam.md` + Answer Key, `03-ASSESSMENTS/Practical-Assessments/Module-02-Practical.md`, `04-STUDENT-TOOLS/Module-02-Tools/Module-02-Decision-Tool-Worksheet.md`, `05-SIMULATIONS-AND-GAMES/Module-02/`, `00-KNOWLEDGE-SYSTEM`-adjacent Broker/Carrier Terminology branches of the Academy Master Dictionary.

## B. Employment Outcome and Competency Map

**Observable occupational outcome:** the student can look at a real carrier-side dispatch scenario and correctly classify it as Consistent with Carrier-Side Agency, More Facts Required, or Significant Brokerage Risk — using actual conduct, not labels — and apply STOP → IDENTIFY → CHECK → ESCALATE when facts are missing, rather than guessing in either direction.

**Competency IDs (observable actions, not vague objectives):**
- **identify** who the dispatcher represents and the source of a freight opportunity
- **classify** a dispatch scenario against the three-category framework above
- **distinguish** representing multiple carriers from discretionary allocation of traffic among them
- **distinguish** returning/declining an opportunity from taking control and reassigning it
- **evaluate** a contract label against actual conduct and correctly weight conduct as controlling
- **verify** facts before concluding, rather than assuming safety or risk
- **escalate** appropriately when a scenario exceeds the student's own authority to resolve

## C. Instructor Preparation

**Files to review before teaching:** all 4 Student Manual parts, the Practical (5 named Opportunities A–E), the Decision Tool Worksheet, and SIM-002's Instructor Guide (for the simulation-specific critical-decision list, which this guide's Section H aligns to but does not duplicate).

**Current sources requiring re-verification before each delivery:** the unauthorized-brokerage civil-penalty figure under 49 U.S.C. § 14916 (check Module 02's own Date-Sensitive Claim Register — do not present a memorized number), and BMC-84/BMC-85 financial-security timeline specifics.

**Fictional artifacts to prepare:** the five Opportunity scenarios (A–E) from the Practical, and — if running SIM-002 — Meridian Line Freight LLC and its related fictional entities (Falcon Point Transport, Redline Freight Co., Central Plains Brokerage, Harlow Manufacturing).

**Tools/worksheets students need:** the Decision Tool Worksheet (STOP/IDENTIFY/CHECK/ESCALATE structure).

**Runtime/simulation requirements:** SIM-002 runs as a static-hosted ES-module app (`python3 -m http.server` locally); no backend, no student-identity collection.

**Terminology that must remain consistent:** "allocation of traffic," "bona fide agent," "preexisting agreement/continuing relationship," "label vs. conduct" — these are controlled terms; do not paraphrase them into softer or stronger language mid-module.

**Material not to show students:** the Answer Key, the Practical Scoring Guide's critical-failure criteria, and SIM-002's `content.js` correct-answer fields.

## D. Lesson-by-Lesson Teaching Notes

**Part 1 — What is a broker vs. a dispatcher:**
- *Instructional purpose:* establish the legal category distinction before any scenario work.
- *Essential point:* a broker arranges transportation generally; a carrier-side dispatcher coordinates for one represented carrier under a preexisting agreement.
- *Workplace application:* this distinction determines what a student's future job title can and cannot legally do.
- *Misconception to watch for:* students conflate "I talk to brokers all day" with "I am basically a broker." Communicating with brokers does not, by itself, make a dispatcher a broker.
- *Demonstration suggestion:* have students state, in their own words, what a broker does that a carrier-side dispatcher does not (arranges for the general market vs. one carrier).
- *Professional-language expectation:* students should say "I dispatch for [carrier]" not "I broker loads," even informally.
- *Transition:* this sets up Part 2's core allocation-of-traffic concept.

**Part 2 — Allocation of traffic and the bona fide agent standard:**
- *Essential point:* the risk factor is discretionary allocation of freight among competing represented carriers — not the number of carriers represented, not compensation structure, not communication with brokers.
- *Misconception to watch for (the single most common and most dangerous one in this module):* students assume representing multiple carriers is itself risky. Correct the record every time this surfaces: representing multiple carriers is fine; *choosing* which one gets a specific opportunity is the risk.
- *Demonstration suggestion:* contrast the overlapping-carrier roster (Opportunity-adjacent scenario, genuinely risky if allocation occurs) against a non-overlapping roster (safe, since no allocation choice exists).
- *Embedded practice connection:* this maps directly to SIM-002 Stage 4 ("Multi-Carrier Decision") and its two contrasting decisions.

**Part 3 — Label vs. conduct:**
- *Essential point:* a contract's title ("bona fide agent," "dispatch service agreement") does not by itself determine legal classification. Actual conduct controls.
- *Misconception to watch for:* students either over-trust the label ("it says bona fide agent, so it's fine") or over-distrust all labels ("labels don't matter at all"). Both are wrong — the label is evidence, not proof, in either direction.
- *Demonstration suggestion:* the Opportunity E fact pattern (bona fide agent label, but freight received from shipper first, then allocated to an unrelated carrier afterward) is the sharpest teaching example in the module. Use it, not a milder substitute.

**Part 4 — Rejected loads and the return/decline vs. reassignment distinction:**
- *Essential point:* returning a declined opportunity to its source is materially different from taking control and reassigning it — even with good intentions.
- *Misconception to watch for:* students treat "I was just trying to help the shipper" as a defense. It isn't — intent doesn't change the conduct pattern.
- *Workplace application:* explicitly connect to compensation-motivated reassignment (Opportunity D) — this is where the risk becomes sharpest, since a self-interested motive compounds the discretionary-allocation problem.

**Part 5 (if present) — STOP/IDENTIFY/CHECK/ESCALATE:**
- *Essential point:* when facts are genuinely missing, the correct response is the four-step discipline, not a guess in either direction.
- *Misconception to watch for:* students guess "probably fine" as often as they guess "probably risky" — both are wrong for the same underlying reason (acting without sufficient facts).

The guide does not reproduce full manual text — refer to the manual parts directly for complete scenario language.

## E. Professional-Language Coaching

| Correct term | Common misuse | Consequence of misuse | Acceptable student phrasing |
|---|---|---|---|
| Allocation of traffic | "Just picking a carrier" | Minimizes a real risk factor to a routine task | "This would require me to allocate freight among carriers — that's a risk pattern, not routine sourcing." |
| Bona fide agent | "I'm basically an agent for everyone I work with" | Overclaims a specific legal status without meeting its actual requirements (preexisting agreement, continuing relationship, no allocation discretion) | "I'd need to confirm this relationship actually meets the bona fide agent criteria, not just call it that." |
| Represented carrier | "My client" (used loosely for any party) | Blurs the specific carrier-side relationship this module's legal analysis depends on | "The carrier I represent is [name], under [agreement]." |
| STOP/IDENTIFY/CHECK/ESCALATE | "I'll just wait and see" | Passive waiting is not the same as active verification | "I'm stopping here to identify what's missing and check it before proceeding." |

**Language that overstates evidence or legal conclusions — instructors must correct on sight:** "this is definitely legal/illegal," "this is 100% brokering," or any absolute legal conclusion. This academy trains issue-spotting and escalation, not legal adjudication — a dispatcher is not positioned to make a final legal determination, and neither is a student in this module.

**Later-module transfer:** this vocabulary reappears directly in Module 05 (SIM-005's shipper-first allocation decision explicitly reuses this exact framework) and Module 06 (broker verification).

## F. Activity Facilitation

**Decision Tool Worksheet:**
- *Purpose:* practice applying STOP/IDENTIFY/CHECK/ESCALATE to an ambiguous fact pattern.
- *Setup:* distribute after Part 4/5 content, not before — students need the allocation-of-traffic concept first.
- *Expected reasoning path:* identify missing facts → determine what verification source is appropriate → decide whether resolution is possible at the student's own level or requires escalation.
- *Predictable errors:* students skip straight to a classification without identifying what's actually missing first.
- *Debrief question:* "What specific fact, if you had it, would have let you classify this confidently?"
- *Formative, not scored.*

**Practical Assessment (5 Opportunities A–E):**
- *Purpose:* scored demonstration of classification competency across a realistic weekly workload.
- *Expected reasoning path:* students should explicitly name which fact(s) drove each classification, not just state a conclusion.
- *Critical-failure connection:* Opportunities B, D, and E carry critical-failure status in the Practical's own scoring — see Section H below; this guide does not restate the scoring rubric's point values, only flags where instructor attention should concentrate.

## G. Assessment Administration

- **Knowledge Check:** diagnostic, governed by `03-ASSESSMENTS/Module-Quizzes/Module-02-Knowledge-Check.md` and its own answer key.
- **Module Exam:** graded, governed by `Module-02-Exam.md` / `Module-02-Exam-Answer-Key.md`.
- **Practical Assessment:** governed by `Module-02-Practical.md` and the shared `Modules-01-05-Instructor-Scoring-Guide.md` — this guide does not create a competing local scoring rule.
- **Simulation:** SIM-002, governed by its own Scoring Rubric and Completion Record in `05-SIMULATIONS-AND-GAMES/Module-02/`.
- **Remediation/reassessment:** route students back to the specific manual Part tied to their missed competency (see Section I).

## H. Critical-Failure Controls

Three critical-failure patterns are occupationally justified and must be synchronized with the Practical's own scoring (Opportunities B, D, E) and SIM-002's three critical-escalation decisions:

1. **Treating shipper-direct multi-carrier allocation as ordinary sourcing** (Opportunity B pattern; SIM-002 D06). This is a critical failure because it represents the student missing the module's central risk concept entirely, not a difficult edge case.
2. **Reassigning a rejected load instead of returning it to source** (Opportunity D pattern; SIM-002 D10). Critical because it demonstrates the student converting a low-risk action (declining) into a high-risk one (allocating) without recognizing the shift.
3. **Letting a "bona fide agent" label override described allocation conduct** (Opportunity E pattern; SIM-002 D13). Critical because it shows the student has not internalized label-vs-conduct — the module's other central concept.

A critical failure here is not a difficult question answered wrong once — it is a repeated (2+ attempt) demonstration that the student would, in a real dispatch desk, actually commit the allocation-of-traffic error rather than recognize and avoid it.

## I. Diagnostic Remediation

| Observed error | Likely misconception | Owning competency | Revisit | Targeted practice |
|---|---|---|---|---|
| Classifies shipper-direct multi-carrier request as safe | Believes "sourcing for my carriers" is always safe regardless of source | Allocation-of-traffic recognition | Manual Part 2 | Contrast Opportunity A (safe) vs. B (risky) side by side |
| Reassigns a declined load to a different carrier | Believes good intent (helping the shipper) changes the legal analysis | Return/decline vs. reassignment | Manual Part 4 | Walk through Opportunity D's compensation-motive twist explicitly |
| Accepts "bona fide agent" label at face value | Has not separated label from conduct | Label vs. conduct | Manual Part 3 | Opportunity E fact pattern, isolated from its label |
| Guesses instead of using STOP/IDENTIFY/CHECK/ESCALATE | Treats missing information as something to work around rather than resolve | Verification discipline | Decision Tool Worksheet | Re-run the worksheet with a new ambiguous fact pattern |

Evidence required on reassessment: student must state the *specific fact* that drove their revised classification, not just produce the correct label.

## J. Source/Currentness Notes

This module's controlling source registers are `MODULE-02-REGULATORY-SOURCE-REGISTER.md` and `MODULE-02-DATE-SENSITIVE-CLAIM-REGISTER.md`. Do not present the unauthorized-brokerage penalty figure or BMC-84/85 timeline specifics from memory — both have changed within this project's own production history. Distinguish clearly in class: the *allocation-of-traffic principle itself* is stable federal regulatory concept; the *specific dollar penalty figure* is inflation-adjusted and must be rechecked before each delivery cycle.

## K. Simulation Facilitation (SIM-002)

- **Learning purpose:** apply the classification framework under realistic, progressively revealed conditions rather than static recall.
- **Prerequisite competencies:** Manual Parts 1–5 completed; Decision Tool Worksheet practiced.
- **Runtime setup:** static-hosted, no login, no student-identity collection; state persists only in the local browser via `localStorage`.
- **Attempts:** independent — first-attempt evidence is preserved and never overwritten by remediation.
- **Critical decisions:** SIM02-D06, D10, D13 (see Section H — same three patterns, not a fourth set).
- **Remediation behavior:** ordinary wrong answers retry with remediation text; the three critical decisions escalate to `instructorReviewRequired` after 2 wrong attempts and clear automatically on a later correct attempt.
- **Instructor debrief:** for any student who reaches `INSTRUCTOR_REVIEW_REQUIRED`, conduct the Section I diagnostic conversation directly — do not simply let the student retry unattended.
- **What completion status means:** `BUILD COMPLETE — RELEASE QA DEFERRED` describes the software build state only. A student's `COMPLETE` simulation status means 18/18 final mastery with no unresolved critical flags — it is evidence of competency demonstration, not a substitute for the Practical or Exam.

## L. Module Closeout

Before advancing a student to Module 03, the instructor confirms:
- [ ] All 7 competency IDs from Section B have been observably assessed (KC, Exam, Practical, or SIM-002)
- [ ] All three critical-failure patterns (Section H) are cleared, not just attempted
- [ ] Practical evidence is recorded per the shared scoring guide
- [ ] SIM-002 completion record shows no unresolved `INSTRUCTOR_REVIEW_REQUIRED` state
- [ ] Professional-language standard (Section E) was observably met in at least one live discussion or written response
- [ ] Any remediation from Section I was completed with the specified evidence, not just re-attempted

---

## Status Note

This guide fills the specific gap the Architecture Completion Matrix identified for Module 02 ("answer guide exists; full guide MISSING"). It does not modify or contradict the existing Answer Key, Practical Scoring Guide, or Source Registers — it adds the delivery-intelligence layer the Instructor Guide Product Standard requires and the Answer Key alone cannot provide.
