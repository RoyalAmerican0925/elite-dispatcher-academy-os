# Next Assignment for Claude — Module 01 Assessment Verification

**Assignment ID:** EDA-ASSESS-M01-AUDIT-001  
**Assigned role:** Claude — Senior Curriculum and Long-Form Writing Engine  
**Asset lifecycle at assignment:** IN_PROGRESS  
**Scope:** Module 01 only. Do not begin Modules 02–06 in this assignment.  
**Prepared by:** ChatGPT — Chief Architect and Integration Engine  
**Audit date:** 2026-08-18

## Why This Is the Next Step

Do not create a new Module 01 exam, worksheet, checklist, SOP, or flashcard set yet.

The audit found an existing embedded Module 01 diagnostic knowledge check and a corresponding instructor answer guide, but no controlled assessment blueprint, objective-to-item map, passing standard, or remediation rules. The repository acceptance criteria require assessment questions to map to taught objectives and require passing/remediation rules before publication. Those controls must be established before additional assessment assets are written.

## Evidence Located

### GitHub sources to inspect

- `02-CURRICULUM/Module-01/Student-Manual-Part-01.md`
- `02-CURRICULUM/Module-01/Student-Manual-Part-02.md`
- `02-CURRICULUM/Module-01/Student-Manual-Part-03.md`
- `03-ASSESSMENTS/Instructor-Answer-Guides/Module-01.md`
- `00-PROJECT-CONTROL/MODULE-MAP.md`
- `10-PRODUCTION/ACCEPTANCE-CRITERIA.md`
- `10-PRODUCTION/CONTEXT-PACKET-STANDARD.md`

### Google Drive provenance

- Module 01 student manual source: `1WVTqPuo_A4SaU5xDhJq-KIF_uMLTWi0w`
- Module 01 instructor answer guide source: `1Dtk12UdJma7X3iHc8v1GqnOUOivV58-FhskrlTWLz3U`
- The directly inspected academy Drive folder contained the six student manuals and six instructor guides, but no standalone Module 01–06 quiz, exam, worksheet, checklist, SOP, or flashcard files.

### Existing Module 01 assessment material

- One practice scenario: Northgate Produce.
- Practice activity: 11 role/load-identification prompts plus 3 reasoning questions.
- Embedded diagnostic knowledge check: 15 items.
  - 7 multiple-choice items.
  - 4 true/false items requiring explanations.
  - 3 matching items.
  - 1 scenario-identification item.
- Instructor answer guide: answers and reasoning for all 15 knowledge-check items.
- The student manual explicitly calls the knowledge check diagnostic and “not a graded exam.”
- No standalone graded module exam was found.
- No passing score, attempt rule, remediation workflow, retake rule, or item-to-objective matrix was found.
- The chapter introduction states a broad outcome—students should identify industry roles and understand how they connect—but formal stable learning-objective IDs are not yet visible in the recovered Module 01 source.

## Verification Risks That Must Be Resolved

The existing assessment tests legal, regulatory, or current-system concepts. Do not approve or rewrite these items from memory. Verify them against authoritative primary sources current as of the verification date:

1. DOT and FMCSA organizational relationship.
2. USDOT number versus operating authority.
3. MC / FF / MX docket-number terminology and current use.
4. Interstate versus intrastate commerce, including an intrastate leg of a broader interstate movement.
5. For-hire versus private carriage and the danger of implying universal USDOT-number requirements.
6. Freight broker versus freight forwarder distinctions.
7. Carrier-side dispatcher scope and the boundary with Module 02.
8. Factoring-company description, clearly classified as industry/business practice rather than a universal legal rule.

Record exact source titles, issuing bodies, URLs, access dates, and the claim each source supports. Prefer DOT, FMCSA, the U.S. Code, and the Code of Federal Regulations. Secondary sources may assist discovery but may not be the sole verification basis for regulated claims.

## Required Claude Workflow

### Step 1 — Inspect before writing

Read every GitHub source listed above in full. Confirm that the 15 student questions correspond exactly to the 15 instructor answers. Check numbering, wording, distractors, scenario facts, references, and answer rationales.

Do not assume that a repository filename or a Drive filename containing “FINAL” means verified or PUBLICATION_READY.

### Step 2 — Build a traceability table

For every existing question and every practice-scenario prompt, record:

- item number / stable proposed item ID;
- item type;
- exact skill or knowledge being tested;
- section where the concept is taught;
- proposed learning-objective ID;
- cognitive level;
- answer-key location;
- source or fact record required;
- date-sensitive or regulatory flag;
- ambiguity, defect, or dependency;
- disposition: KEEP, REVISE, REPLACE, or CONTEXT REQUIRED.

Do not silently repair defects while auditing. Record the defect first.

### Step 3 — Verify the facts

Verify every regulated or potentially time-sensitive claim using current primary sources. If a claim cannot be verified, mark it `VERIFICATION REQUIRED`; do not produce a confident answer key for it.

### Step 4 — Create only the first controlled deliverable

After completing Steps 1–3, create:

`03-ASSESSMENTS/Blueprints/Module-01-Assessment-Blueprint.md`

If `03-ASSESSMENTS/Blueprints/` does not exist, create it and add a concise `README.md` explaining that blueprints control objective coverage, traceability, passing standards, remediation, and assessment lifecycle status.

The Module 01 blueprint must include:

- asset metadata and DRAFT_COMPLETE status;
- audience and purpose;
- approved or proposed stable learning objectives;
- coverage map for the practice scenario and all 15 knowledge-check items;
- factual/source verification ledger;
- defect and ambiguity log;
- proposed passing standard with an evidence-based rationale;
- remediation and retake proposal;
- separation rule for student questions and instructor answers;
- recommendation on whether the existing diagnostic should later become a standalone quiz;
- recommendation on whether a separate graded module exam is needed;
- recommendation and dependency order for later Module 01 worksheets, checklists, SOPs, and flashcards;
- unresolved questions and CONTEXT REQUIRED items.

Do not create the standalone quiz, graded exam, worksheet, checklist, SOP, or flashcard set in this assignment. The blueprint must pass architect review first.

## Quality Gates

The deliverable is not acceptable if it:

- invents objectives without identifying them as proposed;
- cites unsupported legal or regulatory claims;
- treats the existing diagnostic as a graded exam;
- duplicates the existing instructor answer guide;
- exposes answers in a student-facing file;
- contains AI conversation, handoff chatter, email-style coordination text, or copied prompt material;
- uses placeholders;
- marks itself VERIFIED or PUBLICATION_READY without completed evidence;
- begins work on Modules 02–06.

## Completion Report Required

At the end of the blueprint, report:

1. files inspected;
2. exact item counts reconciled;
3. objectives proposed or confirmed;
4. primary sources used;
5. defects found;
6. questions kept, revised, replaced, or blocked;
7. unresolved verification gaps;
8. files created;
9. recommended next single action after architect review.

Stop after Module 01. Do not proceed automatically to Module 02.
