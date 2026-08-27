# INTERNAL PRODUCTION NOTES — NOT STUDENT FACING

**Assignment ID:** C-009
**Module:** 07 — Rate Mathematics & Profitability
**Prepared by:** Claude, per assignment memo from ChatGPT (Chief Architect/Production Lead), 2026-08-20
**Source research:** Not received in this production pass. The assignment memo referenced "Gemini G-008" as prior source research, but no Gemini research artifact was provided to Claude for this build — Claude authored the module directly from the memo's specifications, worked examples, formulas, and source-citation requirements.
**Corrections supplied by ChatGPT:** Not applicable to this pass — Claude has not yet received ChatGPT review/correction of this draft. Flagging this explicitly rather than claiming a review step that hasn't happened.

## Work Completed

- Full student-facing Module 07 across three manual parts (`02-CURRICULUM/Module-07/Student-Manual-Part-01.md` through `Part-03.md`): introduction, learning objectives, 25-term vocabulary, all required formulas with formula boxes, both mandatory worked examples (reproduced exactly per the memo's given numbers, independently re-verified — see Claims Requiring Final Verification below), 17 additional realistic scenarios (Sections A–Q) covering every category the memo listed, loaded-mile-blindness section, deadhead/fuel/carrier-cost/contribution-margin/break-even lessons, accessorial-economics section with the mandated no-universal-figures framing, factoring/quick-pay lesson, load-comparison methodology, dispatcher decision workflow, common mistakes, Do-Not-Assume box, 5 practice exercises, 1 scenario-based exercise, module summary, and transition to Module 08.
- `03-ASSESSMENTS/Module-Quizzes/Module-07-Knowledge-Check.md` — 20-question diagnostic check (student-facing, no answers), matching the Modules 01–06 pattern.
- `03-ASSESSMENTS/Instructor-Answer-Guides/Module-07.md` — separated instructor guide: Knowledge Check answer key, practice-exercise answers, scenario-exercise answer, and safety/publication-control notes.
- Three standalone worksheets under `04-STUDENT-TOOLS/Module-07-Tools/`: Calculation Worksheet, Load-Comparison Worksheet, Carrier Onboarding Cost-Information Worksheet.
- `03-ASSESSMENTS/Practical-Assessments/Module-07-Practical.md` — a Load Evaluation Desk practical following the Modules 01–05 practical pattern, with a critical-failure condition on treating undocumented detention as guaranteed revenue.
- This internal production notes file.

## Sources Used

- eCFR, 49 CFR Part 371 / § 371.3 (broker recordkeeping, § 371.3(c) review right) — cited per memo instruction; description kept scoped to the actual regulatory text as summarized in the memo (specified transaction/compensation/freight-charge information, review right, not broadened to all commercial documents).
- U.S. Energy Information Administration, Diesel Fuel Prices page — cited as the appropriate current-fuel-price source per memo instruction; no live price was pulled or hard-coded into the module.
- American Transportation Research Institute — cited as an industry operating-cost research source per memo instruction; treated as general context only, never as a specific carrier's break-even substitute.
- 49 CFR § 376.12 — explicitly NOT cited as governing authority for dispatcher-service agreements, per memo instruction; not mentioned in student-facing content at all in this draft, since the memo's own guidance was to only mention it with a narrow scope if mentioned at all, and it added no teaching value to omit any confusion risk.

**Important scope note:** Claude did not independently browse or re-verify the eCFR/EIA/ATRI URLs in this production pass — the citations reproduce the memo's own source list rather than fresh independent verification. This should be treated as unverified sourcing until an actual verification pass (of the kind performed for Modules 04/06's regulatory content) is done for Module 07.

## Claims Requiring Final Verification

- The memo's own worked-example arithmetic (Example 1 and the Deadhead Trap) was independently recalculated by Claude during this production pass and confirmed to match the memo's stated results exactly. No arithmetic corrections were needed.
- The § 371.3 and § 376.12 regulatory framing in the Instructor Answer Guide reproduces the memo's description rather than independently re-checked primary-source text. This should get the same live-source verification treatment Module 04 and Module 06 received before PUBLICATION_READY.
- All fuel prices, dispatcher fee percentages, and factoring/quick-pay percentages throughout are fictional instructional assumptions, consistently labeled as such — none require "verification" since none are presented as current data, but a publication-gate reviewer should confirm the labeling held throughout and wasn't accidentally dropped anywhere.

## Volatile Figures

- Any future revision that adds a live/current fuel price example must pull it from EIA at the time of that revision — do not reuse a fixed number across academy versions.
- Dispatcher/factoring/quick-pay fee percentages used in worked examples are illustrative only and should never be promoted to "typical" or "standard" language in any future edit.

## Unresolved Issues

- No live regulatory or fuel-source verification was performed in this pass (see Sources Used note above).
- The Module 07 Exam (graded, distinct from the Knowledge Check) was not built in this pass — the memo's assignment scope (C-009) covered the full module, Knowledge Check, and Practical, but did not explicitly request a separate graded Exam file. Per the pattern established for Modules 01–06, a graded exam with its own answer key and critical-failure item should be built as a follow-up task before this module is considered assessment-complete.
- This draft has not been reviewed by ChatGPT or by Kenya.

## Dependencies

- Assumes the Modules 01–06 conventions (folder structure, DRAFT_COMPLETE status tagging, Knowledge Check vs. graded Exam vs. Practical separation, answer-key security separation) as the pattern to follow, per `00-PROJECT-CONTROL/CURRENT-STATUS.md` and `03-ASSESSMENTS/PROGRAM-ASSESSMENT-SCORING-AND-REMEDIATION-POLICY.md`.
- References Module 02 (shipper-direct/brokerage boundary) and Module 06 (verification discipline) conceptually but does not restate their content.
- Sets up Module 08 (Negotiation) as the next module in sequence.

## Recommended Next Action

1. ChatGPT or a human reviewer performs the live regulatory-source verification pass for § 371.3 (and confirms § 376.12 remains correctly excluded) that this draft has not yet received.
2. Build the graded Module 07 Exam and instructor answer key, following the Modules 01–06 blueprint pattern, including a critical-failure item (the Load 3 detention/undocumented-accessorial pattern in the Practical Assessment would translate directly into a strong critical-failure exam item).
3. Update `CURRENT-STATUS.md` to reflect Module 07's curriculum and assessment status once this draft is reviewed.

**Kenya approval required: YES**
