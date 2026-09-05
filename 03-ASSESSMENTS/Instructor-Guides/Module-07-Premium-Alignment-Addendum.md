# Module 07 Instructor Guide — Premium Alignment Addendum

**Date:** 2026-09-05  
**Status:** ACTIVE CONTROL ADDENDUM  
**Applies with:** `03-ASSESSMENTS/Instructor-Guides/Module-07.md`

This addendum resolves premium-alignment gaps discovered during the 2026-09-05 repository-truth audit. Where it conflicts with stale wording in the existing Module 07 Instructor Guide, this addendum controls until the guide is fully consolidated.

## 1. Critical-Failure Reconciliation

The existing Instructor Guide Section H states that Module 07 does not currently have a formally defined critical-failure list comparable to earlier modules. That statement is no longer sufficiently precise when read against the actual assessment files.

Repository truth:

- `03-ASSESSMENTS/Module-Exams/Module-07-Exam.md` explicitly marks **Item 24 — Unsupported Revenue** as a CRITICAL ITEM.
- The same Exam explicitly marks **Item 26 — Profit Mislabeling** as a CRITICAL ITEM.
- `03-ASSESSMENTS/Practical-Assessments/Module-07-Practical.md` explicitly states that treating unearned detention as guaranteed/already-earned revenue is a critical failure.
- The Practical Scoring Guide assigns a `0 — CRITICAL FAILURE` when the student adds unearned detention to guaranteed/current revenue.

Therefore, instructors must treat these as existing assessment-inherited critical controls:

### M07-ACF-01 — Unsupported / Unearned Revenue
Student counts possible, conditional, untriggered, undocumented, or otherwise unearned accessorial revenue as guaranteed/current revenue.

### M07-ACF-02 — Profit Mislabeling
Student represents a calculation that subtracts only a limited set of costs as guaranteed profit, net profit, or take-home.

These are not merely style errors. They materially misrepresent load economics.

## 2. SIM-007-Specific Occupational Controls

The approved SIM-007 design adds occupational critical controls that do **not** falsely claim to have existed in the current Practical:

- Loaded-mile blindness that drives a final economic decision while material deadhead/total-mile evidence is bypassed.
- Fabricating a material unknown input by silently converting it to zero or unsupported fact.
- Overriding carrier final decision authority.

When facilitating SIM-007, clearly distinguish:

**assessment-inherited controls** from **simulation-specific occupational controls**.

Do not tell students or reviewers that the existing Practical already contained all SIM-007 critical families.

## 3. Missing-Data Teaching Standard

Module 07 now uses a controlled input-state method:

- **P — Provided / Verified**
- **U — Unknown / Unresolved**
- **A — Assumed for Training**

A known zero and an unknown are not interchangeable.

Instructor correction language:

> “You entered zero. Show me the evidence that the value is actually zero. If the value is merely unknown and could change the recommendation, this load is HOLD FOR DATA.”

## 4. HOLD FOR DATA Standard

HOLD FOR DATA is a valid professional disposition, not an incomplete answer, when:

1. a material input is unresolved;
2. the unresolved value could reasonably reverse TAKE / COUNTER / DECLINE; and
3. the dispatcher lacks carrier authorization or evidence to treat the input another way.

Do not reward students for guessing merely to complete arithmetic.

Do not reward blanket HOLD behavior when the missing information is immaterial to the decision.

The skill is **materiality judgment**.

## 5. Counter-Threshold Boundary

Module 07 may teach the arithmetic needed to determine a minimum supported revenue threshold from carrier-provided economics.

Example:

`required effective RPM × total trip miles = minimum required total revenue`

Module 07 does **not** own broker negotiation language, anchoring, persuasion, concession strategy, or call scripting. Those belong to Module 08.

Instructor standard:

- Correct: “The carrier's supplied $2.25 effective-RPM floor over 700 total miles implies $1,575 minimum total revenue.”
- Out of scope for M07: teaching the student exactly how to open the broker negotiation or what negotiation anchor to use.

## 6. Changed-Evidence Recalculation

Students must learn that an economic recommendation is provisional to its evidence.

If a material input changes, require the student to:

1. identify what changed;
2. identify which calculations are affected;
3. recalculate;
4. reclassify TAKE / COUNTER / HOLD / DECLINE;
5. preserve the original basis when the exercise requires first-attempt evidence.

Anchoring on the first answer after the evidence changes is a reasoning failure even when the original arithmetic was correct.

## 7. Tool Use

Current premium tools:

- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Calculation-Worksheet.md`
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Load-Comparison-Worksheet.md`
- `04-STUDENT-TOOLS/Module-07-Tools/Module-07-Carrier-Onboarding-Cost-Information-Worksheet.md`

Required student curriculum addendum:

- `02-CURRICULUM/Module-07/Student-Manual-Premium-Decision-Protocol.md`

Instructors should teach the Decision Protocol before SIM-007 administration.

## 8. Premium Facilitation Questions

Use questions that expose reasoning rather than only arithmetic:

- “Which of these inputs is evidence and which is assumption?”
- “What did you enter as zero that might actually be unknown?”
- “Could that unknown reverse your recommendation?”
- “Which revenue are you counting now, and which revenue is only possible?”
- “What costs are absent from this contribution calculation?”
- “What changed since your first calculation?”
- “What carrier criterion are you applying?”
- “Is your counter number mathematically supported or just a negotiating guess?”
- “Which part of this recommendation still belongs to the carrier?”

## 9. Remediation Principle

For critical or material reasoning failures, do not remediate by showing the correct answer and allowing the student to select it immediately.

Require:

- explanation of the failure mechanism;
- corrected reasoning;
- materially different numbers/facts on reassessment when the failure is critical;
- separate preservation of original and corrected performance where SIM-007 supports it.

## 10. Status Control

This addendum strengthens Module 07 instructional alignment. It does not certify SIM-007, complete Module 07, or make the module publication/release ready.

SIM-007 must still pass independent content/runtime QA after its committed build is available.