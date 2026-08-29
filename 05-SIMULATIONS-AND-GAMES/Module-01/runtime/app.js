// SIM-001 browser application layer.
// This file owns DOM rendering, event handling, and localStorage persistence.
// All correctness/scoring logic lives in logic.js and is imported, not duplicated.

import { DECISIONS, STAGES, ARTIFACTS, COMPETENCY_LABELS } from "./content.js";
import {
  createInitialState,
  normalizePersistedState,
  getResponseValidationError,
  submitAttempt,
  shouldAdvance,
  getNextDecisionId,
  computeSimulationStatus,
  computeFirstAttemptScore,
  computeFinalMasteryScore,
  computeRemediationCount,
  computeCompetencyStatus,
  getStageForDecision,
  getProgress,
} from "./logic.js";

const STORAGE_KEY = "sim001-state-v1";

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalizePersistedState(JSON.parse(raw));
  } catch {
    return null;
  }
}

function saveState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage can fail (private browsing, quota, etc.) — the simulation still works
    // for the current session, it just won't survive a refresh. Not fatal.
  }
}

let state = loadState() || createInitialState();
let pendingResponse = null;
let feedbackVisible = false;
let validationMessage = null;

const root = document.getElementById("app");

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const child of [].concat(children)) {
    if (child == null) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function renderArtifact(artifactKey) {
  const artifact = ARTIFACTS[artifactKey];
  if (!artifact) return null;
  return el("div", { class: "artifact-card", role: "group", "aria-label": artifact.title }, [
    el("div", { class: "artifact-title" }, artifact.title),
    el("div", { class: "artifact-body" }, artifact.lines.map((line) => el("p", {}, line || "\u00A0"))),
  ]);
}

function renderChoice(decision) {
  const fieldset = el("fieldset", { class: "choice-group" }, [el("legend", { class: "sr-only" }, decision.prompt)]);
  for (const choice of decision.choices) {
    const inputId = `choice-${decision.id}-${choice.key}`;
    const input = el("input", {
      type: "radio",
      name: `choice-${decision.id}`,
      id: inputId,
      value: choice.key,
      onchange: () => { pendingResponse = choice.key; },
    });
    if (pendingResponse === choice.key) input.checked = true;
    fieldset.appendChild(el("label", { for: inputId, class: "choice-option" }, [
      input,
      el("span", { class: "choice-key" }, choice.key),
      el("span", { class: "choice-text" }, choice.text),
    ]));
  }
  return fieldset;
}

function renderMatching(decision) {
  if (!pendingResponse || typeof pendingResponse !== "object" || Array.isArray(pendingResponse)) pendingResponse = {};
  const table = el("div", { class: "matching-table", role: "table", "aria-label": decision.prompt });
  for (const item of decision.items) {
    const rowId = `match-${decision.id}-${item.replace(/\W+/g, "-")}`;
    const select = el("select", {
      id: rowId,
      "aria-label": `Role for: ${item}`,
      onchange: (e) => { pendingResponse[item] = e.target.value; },
    }, [
      el("option", { value: "" }, "Choose…"),
      ...decision.options.map((opt) => {
        const o = el("option", { value: opt }, opt);
        if (pendingResponse[item] === opt) o.selected = true;
        return o;
      }),
    ]);
    table.appendChild(el("div", { class: "matching-row", role: "row" }, [
      el("label", { for: rowId, class: "matching-item", role: "cell" }, item),
      el("div", { role: "cell" }, select),
    ]));
  }
  return table;
}

function renderSequencing(decision) {
  if (!Array.isArray(pendingResponse)) pendingResponse = decision.items.map((i) => i.key).slice().reverse();
  const list = el("ol", { class: "sequence-list", "aria-label": decision.prompt });
  pendingResponse.forEach((key, index) => {
    const item = decision.items.find((i) => i.key === key);
    list.appendChild(el("li", { class: "sequence-item" }, [
      el("span", { class: "sequence-text" }, item.text),
      el("div", { class: "sequence-controls" }, [
        el("button", {
          type: "button", class: "sequence-btn", "aria-label": `Move "${item.text}" up`,
          disabled: index === 0 ? "true" : null,
          onclick: () => {
            if (index === 0) return;
            const arr = pendingResponse.slice();
            [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
            pendingResponse = arr;
            renderCurrent();
          },
        }, "↑ Up"),
        el("button", {
          type: "button", class: "sequence-btn", "aria-label": `Move "${item.text}" down`,
          disabled: index === pendingResponse.length - 1 ? "true" : null,
          onclick: () => {
            if (index === pendingResponse.length - 1) return;
            const arr = pendingResponse.slice();
            [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
            pendingResponse = arr;
            renderCurrent();
          },
        }, "↓ Down"),
      ]),
    ]));
  });
  return list;
}

function renderResponseControl(decision) {
  if (decision.type === "choice") return renderChoice(decision);
  if (decision.type === "matching") return renderMatching(decision);
  if (decision.type === "sequencing") return renderSequencing(decision);
  return null;
}

function renderProgress(decisionId) {
  const { current, total } = getProgress(decisionId);
  const stage = getStageForDecision(decisionId);
  const stageIndex = STAGES.findIndex((s) => s.id === stage.id) + 1;
  return el("div", { class: "progress-bar", role: "status", "aria-live": "polite" }, [
    el("div", { class: "progress-text" }, `Stage ${stageIndex} of ${STAGES.length}: ${stage.title} — Decision ${current} of ${total}`),
    el("div", { class: "progress-track" }, [el("div", { class: "progress-fill", style: `width:${(current / total) * 100}%` })]),
  ]);
}

function renderFeedback(decisionId, correct) {
  const decision = DECISIONS[decisionId];
  const record = state.decisions[decisionId];
  const panel = el("div", { class: `feedback-panel ${correct ? "feedback-correct" : "feedback-incorrect"}`, role: "alert" });
  panel.appendChild(el("p", { class: "feedback-heading" }, correct ? "Correct" : "Not quite"));
  panel.appendChild(el("p", {}, correct ? decision.correctFeedback : decision.remediation));

  if (record.instructorReviewRequired) {
    panel.appendChild(el("p", { class: "feedback-escalation" }, "This item has been flagged for instructor review after repeated attempts. You'll move on, and an instructor will follow up on this specific decision."));
  }

  const canAdvance = shouldAdvance(state, decisionId);
  panel.appendChild(el("button", {
    type: "button", class: "btn btn-primary",
    onclick: () => {
      if (canAdvance) {
        const next = getNextDecisionId(decisionId);
        pendingResponse = null;
        feedbackVisible = false;
        validationMessage = null;
        if (next) state = { ...state, currentDecisionId: next };
        else state = { ...state, status: computeSimulationStatus(state), completedAt: Date.now() };
        saveState(state);
        renderCurrent();
      } else {
        feedbackVisible = false;
        validationMessage = null;
        renderCurrent();
      }
    },
  }, canAdvance ? "Continue" : "Try again"));
  return panel;
}

function renderDecisionScreen(decisionId) {
  const decision = DECISIONS[decisionId];
  const container = el("div", { class: "decision-screen" });
  container.appendChild(renderProgress(decisionId));
  if (decision.artifact) {
    const rendered = renderArtifact(decision.artifact);
    if (rendered) container.appendChild(rendered);
  }
  container.appendChild(el("h2", { class: "decision-prompt" }, decision.prompt));

  if (!feedbackVisible) {
    container.appendChild(renderResponseControl(decision));
    if (validationMessage) {
      container.appendChild(el("p", { class: "validation-message", role: "alert", "aria-live": "assertive" }, validationMessage));
    }
    container.appendChild(el("button", {
      type: "button", class: "btn btn-primary",
      onclick: () => {
        const validationError = getResponseValidationError(decision, pendingResponse);
        if (validationError) {
          validationMessage = validationError;
          renderCurrent();
          return;
        }
        validationMessage = null;
        state = submitAttempt(state, decisionId, pendingResponse, Date.now());
        saveState(state);
        feedbackVisible = true;
        renderCurrent();
      },
    }, "Submit"));
  } else {
    container.appendChild(renderFeedback(decisionId, state.decisions[decisionId].finalCorrect));
  }
  return container;
}

function renderStartScreen() {
  return el("div", { class: "start-screen" }, [
    el("h1", {}, "Module 01 — Freight Movement Desk"),
    el("p", {}, "A six-stage dispatch-desk simulation reinforcing Module 01: identifying roles, distinguishing arranging from transporting, and recognizing when to verify rather than guess."),
    el("button", {
      type: "button", class: "btn btn-primary btn-large",
      onclick: () => {
        state = { ...state, startedAt: state.startedAt || Date.now() };
        saveState(state);
        renderCurrent();
      },
    }, state.startedAt ? "Resume Simulation" : "Start Simulation"),
  ]);
}

function renderCompletionScreen() {
  const firstAttempt = computeFirstAttemptScore(state);
  const mastery = computeFinalMasteryScore(state);
  const remediation = computeRemediationCount(state);
  const competencyStatus = computeCompetencyStatus(state);
  const isReview = state.status === "INSTRUCTOR_REVIEW_REQUIRED";

  const container = el("div", { class: "completion-screen" }, [
    el("h1", {}, isReview ? "Instructor Review Required" : "Simulation Complete"),
    el("p", {}, isReview
      ? "You've reached the end of the simulation, but at least one decision needs instructor follow-up before this is marked complete."
      : "You've worked through a full freight movement from a Module 01 dispatcher's perspective."),
  ]);

  container.appendChild(el("div", { class: "completion-stats" }, [
    el("div", { class: "stat" }, [el("div", { class: "stat-label" }, "First-Attempt Performance"), el("div", { class: "stat-value" }, `${firstAttempt.correct} / ${firstAttempt.total}`)]),
    el("div", { class: "stat" }, [el("div", { class: "stat-label" }, "Final Mastery"), el("div", { class: "stat-value" }, `${mastery.correct} / ${mastery.total}`)]),
    el("div", { class: "stat" }, [el("div", { class: "stat-label" }, "Remediation Used"), el("div", { class: "stat-value" }, `${remediation} decision${remediation === 1 ? "" : "s"}`)]),
  ]));

  const competencyList = el("div", { class: "competency-summary" }, [el("h2", {}, "Competency Summary")]);
  for (const [code, label] of Object.entries(COMPETENCY_LABELS)) {
    const status = competencyStatus[code] || "In Progress";
    const statusClass = status === "Needs Instructor Review" ? "status-review" : status === "Mastered" ? "status-mastered" : "status-remediated";
    competencyList.appendChild(el("div", { class: "competency-row" }, [
      el("span", { class: "competency-label" }, label),
      el("span", { class: `competency-status ${statusClass}` }, status),
    ]));
  }
  container.appendChild(competencyList);
  container.appendChild(el("p", { class: "next-step" }, "Next step: complete the Module 01 Knowledge Check, Exam, and Practical Assessment if you haven't already — this simulation reinforces that material, it doesn't replace it."));
  return container;
}

function renderResetControl() {
  return el("button", {
    type: "button", class: "btn btn-text reset-btn",
    onclick: () => {
      const confirmed = window.confirm("Resetting will permanently erase your progress on this simulation attempt, including first-attempt history. This cannot be undone. Reset anyway?");
      if (!confirmed) return;
      state = createInitialState();
      pendingResponse = null;
      feedbackVisible = false;
      validationMessage = null;
      saveState(state);
      renderCurrent();
    },
  }, "Reset simulation");
}

function renderCurrent() {
  root.innerHTML = "";
  root.appendChild(el("header", { class: "app-header" }, [
    el("div", { class: "app-title" }, "Elite Dispatcher Academy — SIM-001"),
    renderResetControl(),
  ]));

  let body;
  if (!state.startedAt) body = renderStartScreen();
  else if (state.status === "COMPLETE" || state.status === "INSTRUCTOR_REVIEW_REQUIRED") body = renderCompletionScreen();
  else body = renderDecisionScreen(state.currentDecisionId);
  root.appendChild(el("main", {}, body));
}

renderCurrent();
