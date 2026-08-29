# SIM-001 Runtime — Module 01 Freight Movement Desk

This directory contains the browser runtime for the Elite Dispatcher Academy Module 01 simulation.

## Purpose

The runtime delivers the approved six-stage, 13-decision simulation as an interactive browser experience. It preserves the Markdown simulation files in the parent directory as the printable/non-interactive fallback.

## Architecture

- `index.html` — browser entry point.
- `content.js` — approved simulation content/data: stages, decisions, artifacts, competencies, correct responses, feedback, remediation, and escalation metadata.
- `logic.js` — DOM-free state, evaluation, mastery, remediation, competency, progression, and instructor-review logic.
- `app.js` — browser rendering, event handling, progressive reveal, local persistence, reset, and completion screens.
- `styles.css` — responsive and accessibility-focused presentation.
- `runtime.test.mjs` — Node regression tests for structure and core simulation logic.
- `package.json` — minimal ESM/test configuration.

## Run locally

Because the runtime uses JavaScript modules, serve this directory over HTTP rather than opening `index.html` directly with `file://`.

Example with Python 3:

```bash
cd 05-SIMULATIONS-AND-GAMES/Module-01/runtime
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser.

Any ordinary static web server can host the directory. The simulation has no paid API dependency and no backend requirement for this version.

## Tests

From this directory:

```bash
npm test
```

The tests use Node's built-in test runner and require no third-party packages.

## State and persistence

Student progress is stored locally in the browser under the key `sim001-state-v1`. The state includes the current decision, first-attempt evidence, final responses, remediation use, attempt counts, instructor-review flags, and simulation timestamps.

The runtime intentionally preserves first-attempt evidence after retries. Resetting the simulation requires confirmation because reset erases the local attempt history.

## Progression and mastery

Stages run in the approved order:

1. `SIM01-S1` — New Freight File
2. `SIM01-S2` — Who Does What?
3. `SIM01-S3` — Carrier Identity Check
4. `SIM01-S4` — Dispatch Desk Decisions
5. `SIM01-S5` — Freight & Document Flow
6. `SIM01-S6` — Missing Information Event

Decisions are `SIM01-D01` through `SIM01-D13`.

Normal completion requires 13/13 final mastery. Incorrect ordinary decisions route through remediation and retry. `SIM01-D13` escalates to instructor review after the configured repeated-failure threshold instead of allowing endless guessing.

## Interaction types

The runtime supports:

- choice decisions;
- matching decisions using labeled select controls;
- sequencing decisions using keyboard-accessible Up/Down controls.

The architecture keeps content, logic, and presentation separate so the interaction patterns can be reused later without turning SIM-001 into an oversized universal simulation platform.

## Accessibility and responsive behavior

The current implementation includes semantic controls, visible keyboard focus, text labels in addition to color feedback, screen-reader labels/status regions, and a mobile layout that stacks matching, statistics, header, and sequencing controls when space is limited.

## Content control

The approved Module 01 simulation Markdown remains the curriculum source of truth. Runtime implementation should not silently change regulatory or role-language claims. Any factual curriculum change should be handled through curriculum QA first.

## Future simulations

Future simulations may reuse the same general pattern — structured content data, DOM-free logic, interaction rendering, mastery tracking, remediation, and persistence — but SIM-002 remains a separate production task and is not included here.
