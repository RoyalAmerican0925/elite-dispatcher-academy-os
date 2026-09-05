# SIM-001 Runtime — Module 01 Freight Movement Desk

**Status:** PREMIUM BUILD CANDIDATE — independent QA required before build-gate closure

This directory contains the browser runtime for the Elite Dispatcher Academy Module 01 simulation.

## Purpose
The runtime delivers the premium **8-stage / 18-decision** Module 01 simulation. The original 13 decisions are preserved and five occupational decisions extend the simulation to the full M01-C01–C15 competency model.

## Architecture
- `index.html` — browser entry point.
- `content.js` — original approved SIM-001 content/data.
- `premium-extension.js` — additive premium competency mapping plus Decisions D14–D18; preserves D01–D13.
- `logic.js` — DOM-free state, evaluation, mastery, remediation, competency, progression and instructor-review logic; loads the premium extension.
- `app.js` — browser rendering, event handling, progressive reveal, local persistence, reset and completion screens.
- `styles.css` — responsive/accessibility-focused presentation.
- `runtime.test.mjs` — runtime/state regression tests.
- `premium-alignment.test.mjs` — M01-C01–C15 and architecture gate.
- `package.json` — ESM/test configuration.

## Run locally
```bash
cd 05-SIMULATIONS-AND-GAMES/Module-01/runtime
python3 -m http.server 8080
```
Then open `http://localhost:8080/`.

## Tests
```bash
npm test
```
Tests use Node's built-in test runner and require no third-party package.

## State and persistence
Student progress is stored locally under `sim001-state-v1`. State includes current decision, immutable first-attempt evidence, final responses, remediation use, attempt count, instructor-review flags and timestamps.

Reset requires confirmation because it erases local attempt history. Local browser storage is **not** durable LMS/student-account evidence.

## Premium progression
1. `SIM01-S1` — New Freight File
2. `SIM01-S2` — Who Does What?
3. `SIM01-S3` — Carrier Identity Check
4. `SIM01-S4` — Dispatch Desk Decisions
5. `SIM01-S5` — Freight & Document Flow
6. `SIM01-S6` — Missing Information Event
7. `SIM01-S7` — Evidence & Document State
8. `SIM01-S8` — Handoff & Next Safe Action

Decisions are `SIM01-D01` through `SIM01-D18`.

Normal runtime completion requires 18/18 final mastery. Ordinary incorrect decisions receive remediation/retry. The missing-information/unsafe-assumption controls can escalate repeated failure to instructor review. M01 does **not** invent an automatic critical-failure family; instructor review is a formative/competency safeguard.

## Competency model
Runtime evidence maps to all 15 controlled Module 01 families:
M01-C01 through M01-C15, including four-flow separation, file reading, USDOT/authority distinction, interstate/intrastate nuance, KNOWN/UNKNOWN/VERIFY, STOP framework, specialized-workflow handoff and misconception correction.

## Interaction types
- choice;
- matching with labeled select controls;
- sequencing with keyboard-accessible Up/Down controls.

## Content/package controls
The original printable SIM files remain active. Premium Stages 7–8 are controlled by the companion premium addenda in the parent directory. Curriculum/runtime wording must remain aligned to the four-part manual and current instructor controls.

## Release boundary
Deferred before commercial release:
- browser/device matrix;
- manual accessibility review;
- production deployment validation;
- LMS/student-account integration;
- durable competency-record storage;
- assembled package QA;
- final current-source recheck of date-sensitive FMCSA registration terminology.

A passing content/runtime gate supports only **BUILD COMPLETE — RELEASE QA DEFERRED**. It does not establish `PUBLICATION_READY`.
