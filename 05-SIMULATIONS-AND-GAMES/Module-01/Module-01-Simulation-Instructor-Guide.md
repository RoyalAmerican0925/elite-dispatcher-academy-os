# SIM-001 — Module 01 Freight Movement Desk — Instructor Guide

**Status:** DRAFT_COMPLETE — QA required before PUBLICATION_READY
**Instructor use only.** Do not distribute to students. Contains answer logic and branching reasoning not present in the student version.
**Note on file structure:** This guide consolidates the "Decision Map" and "Remediation Guide" contemplated in the original assignment structure into one document, since remediation logic is entirely instructor-facing and the branching/decision map is best understood alongside the answer reasoning rather than as a separate abstract diagram. The student-facing branching itself lives directly in `Module-01-Simulation-Student.md`.

---

## Simulation Purpose

SIM-001 gives a beginner student their first experience applying Module 01 role concepts (shipper, broker, motor carrier, dispatcher, driver, receiver, factoring company) inside a realistic, progressively-revealed freight movement, rather than a static list of definitions. It reinforces — and does not replace — the Module 01 Student Manual, Knowledge Check, Exam, and Practical Assessment.

## Learning Objectives

By completing this simulation, a student should be able to:

1. Identify each party's role from a realistic freight communication, not just a textbook definition.
2. Distinguish arranging transportation from physically transporting it.
3. Correctly position the carrier-side dispatcher relative to the broker and driver.
4. Distinguish a USDOT number from operating authority at a beginner level.
5. Make appropriate real-time dispatch-desk decisions across multiple stakeholders.
6. Sequence physical freight flow, communication/arrangement flow, document flow, and payment/factoring flow correctly.
7. Recognize missing information and choose to verify rather than guess.

## Setup Instructions

No special software is required. Provide the student `Module-01-Simulation-Student.md` directly, or print it. The Scenario Packet (`Module-01-Simulation-Scenario-Packet.md`) is embedded inline in the student document already — it exists separately only for reuse/reference. Instruct the student to work through stages in order without reading ahead, and to write down their answer before checking the response.

## Expected Student Path

A well-prepared student (one who has completed the Module 01 Student Manual first) should move through all six stages with zero or one incorrect attempts. A student who has not yet completed the manual will likely need at least one remediation pass in Stages 1–2 (role confusion) and should be redirected to the manual before continuing.

## Answer Key and Branching Logic

### Stage 1

- **1.1:** Blue River Foods = Shipper; Prairie Freight Brokers = Broker; North Star Transport = Motor Carrier; Des Moines DC = Consignee/Receiver. No wrong-answer branch is scored here (open matching exercise) — use it as a diagnostic warm-up; note in the Completion Record whether the student needed the correction text.
- **1.2:** Correct = B. Wrong-answer pattern to watch for: students who assign dispatcher/driver to the broker (A) are pre-confusing dispatcher and broker — flag this student for extra attention in Stage 2/4.

### Stage 2

- **2.1:** Open matching exercise, same diagnostic approach as 1.1.
- **2.2:** Correct = B. This is the single most load-bearing concept in the whole simulation (arranging vs. transporting). A wrong answer here should be treated as a signal to slow down, not just show the correction text and move on — consider having the student re-read Module 01 Section 2 in full before Decision 2.3.
- **2.3:** Correct = B. Wrong answers (A, C, D) indicate the student hasn't yet separated "dispatcher" from either "broker" or "driver" as adjacent-but-distinct roles built on the same Section 2 foundation.

### Stage 3

- **3.1:** Correct = B. This question is intentionally narrow — it does not require or reward deeper registration/verification knowledge (that's Modules 04/06). If a student over-answers with Module 04/06-level detail, that's not wrong, but redirect them: this simulation only needs the basic USDOT-vs-authority distinction.

### Stage 4

- **4.1:** Correct = B. This is a low-stakes warm-up for the "dispatcher coordinates" concept in a real-time setting.
- **4.2:** Correct = A. This is the most important Stage 4 item — it directly tests whether the student has internalized that ordinary broker communication doesn't convert a dispatcher into a broker. A student who selects B, C, or D is showing early signs of the exact overcorrection Module 02 spends a full module correcting — note this for the instructor if the student struggles with Module 02 later.
- **4.3:** Correct = B. Low-stakes reinforcement.
- **4.4:** Correct = B. Direct restatement check of Decision 2.2's core lesson, phrased differently to test retention rather than pattern-matching the earlier question.

### Stage 5

- **5.1:** Correct sequence = 2, 4, 6, 1, 3, 5. Common error pattern: placing the dispatcher's coordination (6) after the driver's physical transport (1) — this suggests the student sees dispatching as a reactive rather than coordinating role. Worth a verbal check-in if this happens.
- **5.2:** Correct matches as shown in the student document. Common error: classifying the factoring submission as "Document Flow" rather than "Payment/Factoring Flow" — acceptable partial credit if the student can explain the reasoning, since an invoice submission genuinely involves both a document and a payment action; use judgment.

### Stage 6

- **6.1:** Correct = C. This is the single highest-stakes decision in the simulation. A, B, and D are all versions of the same underlying error (filling a gap with something other than verified fact). If a student selects A, B, or D on their first attempt, this is expected and should not be treated as a failure — it's the most common beginner instinct this exercise exists to correct. If a student repeats the error on a second attempt after the remediation text, that's the signal for direct instructor intervention, not just another automated retry.

## Remediation Paths

| If the student confuses... | Route them to... |
|---|---|
| Broker and carrier | Module 01 Student Manual, Section 2 (role definitions), then retry Decision 2.2 |
| Dispatcher and broker | Module 01 Student Manual, Section 8 (carrier-side dispatch model), then retry Decision 2.3 or 4.2 |
| USDOT number and operating authority | Module 01 Student Manual, Section 4, then retry Decision 3.1 |
| Missing information handling (guesses instead of verifies) | Module 01 Student Manual's STOP/VERIFY framing referenced throughout the academy, then retry Decision 6.1 |

**General principle:** do not punish ordinary beginner errors with excessive failure mechanics. The goal is competency, not a high-stakes pass/fail gate. Every remediation path above ends in a retry, not a lockout.

## First-Attempt vs. Final-Mastery Tracking

For each of the 13 decisions, record two data points using the Completion Record template:

1. **First-attempt result** — correct or incorrect, recorded before any remediation text is shown
2. **Final result** — correct or incorrect after remediation and retry

A student who reaches 13/13 final-correct but only 8/13 first-attempt-correct has reached competency through remediation — a legitimate and expected outcome, not a red flag, but useful information for an instructor deciding whether to review Module 01 content with that student before they move to Module 02.

## Completion Criteria

A student has completed SIM-001 when all 13 decisions show a final-correct result. There is no time limit and no critical-failure item, consistent with the existing Module 01 Practical Assessment's own "no module-specific critical failure" standard — preserved here deliberately rather than inventing a new failure mechanic.

## Debrief Questions (for instructor-led discussion, optional)

1. "What was the hardest distinction to keep straight — broker vs. carrier, or dispatcher vs. broker? Why?"
2. "In Decision 6.1, what made guessing feel tempting even though you knew the right answer was to verify?"
3. "How did the four types of flow in Stage 5 (physical, communication, document, payment) map onto a load you might actually work?"
4. "What questions do you still have about the dispatcher's role that you expect Module 02 to answer?"
