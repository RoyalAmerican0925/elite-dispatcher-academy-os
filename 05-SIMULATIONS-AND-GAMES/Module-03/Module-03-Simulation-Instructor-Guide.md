# SIM-003 — Module 03 Load Compatibility Desk — Instructor Guide

**Build status:** BUILD COMPLETE  
**Release status:** RELEASE QA DEFERRED

## Purpose
Test integrated equipment/freight-fit judgment, not trailer trivia. Required reasoning chain:
**CHECK EQUIPMENT → COMMODITY → TEMPERATURE → DIMENSIONS → WEIGHT/AXLES → DRIVER QUALIFICATIONS → MISSING INFORMATION → VERIFY → PROCEED / REJECT / ESCALATE**.

## Locked Architecture
Seven stages / 15 decisions / competencies A–I. Preserve known facts versus assumptions; commodity/equipment fit; temperature capability; dimensions/overwidth verification; driver qualification; gross versus axle limits; missing information; operational disposition.

## Critical Families
- **M03-CF-01 / D09:** the fictional scenario states the load requires H or X and the assigned driver has neither. Do not dispatch that driver on that load.
- **M03-CF-02 / D11:** projected gross is 79,400 lb but a tandem is 35,000 lb. Gross and axle-group checks remain separate.

Do not manufacture additional critical failures merely to make the simulation harder.

## Critical Remediation Protocol
1. Preserve original response, correctness, timestamp and critical trigger.
2. A same-screen correction may improve final mastery but cannot erase the critical family.
3. Present the module's materially different reassessment: a different stated qualification conflict for CF-01 or different gross/tandem numbers for CF-02.
4. Require explanation/application of the safety principle.
5. Record reassessment response, result and timestamp separately.
6. Resolve the family only after the alternate reassessment passes; preserve original trigger history.

## Ordinary Remediation
Identify the ignored/assumed fact, return the learner to the relevant artifact, require a second decision, and record remediation use. Do not convert remediated performance into a false first-attempt score.

## Decision Controls
- Standard dry-van fit must use multiple facts, not gross weight alone.
- Frozen freight requiring continuous temperature control is a straightforward mismatch for the supplied non-temperature-controlled equipment.
- 104-inch freight is SPECIALIZED / ESCALATE pending jurisdiction/route/permit/equipment verification; neither automatically illegal nor automatically permit-ready.
- H/N/X distinctions are not interchangeable.
- Incomplete “53-foot van, 44,500 lb” data remains NEEDS MORE INFORMATION until material facts are verified.

## Evidence / Completion
Record first attempt separately from final mastery; preserve critical history and reassessment history; distinguish Mastered, Mastered After Remediation, Needs Instructor Review and In Progress. COMPLETE requires 15/15 final mastery and zero unresolved M03-CF families.

Browser-local persistence is not a durable LMS/student record. Current-source review, accessibility, browser/device QA, production deployment and assembled release QA remain separate. Passing this build gate is not `PUBLICATION_READY`.