// SIM-001 premium reconciliation extension.
// Preserves the original 13 decisions and augments their competency mapping plus five
// additional occupational decisions required by the M01-C01–C15 curriculum lock.

import { STAGES, ARTIFACTS, COMPETENCY_LABELS, DECISIONS, DECISION_ORDER } from './content.js';

const labels = {
  'M01-C01': 'Parties and roles without ownership assumptions',
  'M01-C02': 'Physical freight flow',
  'M01-C03': 'Information / communication flow',
  'M01-C04': 'Document flow',
  'M01-C05': 'Payment flow',
  'M01-C06': 'Basic dispatch-file reading',
  'M01-C07': 'Foundational operating vocabulary',
  'M01-C08': 'USDOT versus operating authority',
  'M01-C09': 'Interstate / intrastate nuance',
  'M01-C10': 'Dispatcher versus other freight functions',
  'M01-C11': 'KNOWN / UNKNOWN / VERIFY',
  'M01-C12': 'Carrier-side lifecycle sequencing',
  'M01-C13': 'STOP → IDENTIFY → TRACE → VERIFY → HAND OFF',
  'M01-C14': 'Recognize later specialized workflow / handoff',
  'M01-C15': 'Correct beginner misconceptions with operational reasoning',
};

for (const key of Object.keys(COMPETENCY_LABELS)) delete COMPETENCY_LABELS[key];
Object.assign(COMPETENCY_LABELS, labels);

const mappings = {
  'SIM01-D01': ['M01-C01'],
  'SIM01-D02': ['M01-C01','M01-C10'],
  'SIM01-D03': ['M01-C01','M01-C07','M01-C10'],
  'SIM01-D04': ['M01-C02','M01-C10','M01-C15'],
  'SIM01-D05': ['M01-C10'],
  'SIM01-D06': ['M01-C08','M01-C15'],
  'SIM01-D07': ['M01-C03','M01-C06','M01-C10'],
  'SIM01-D08': ['M01-C03','M01-C10'],
  'SIM01-D09': ['M01-C03','M01-C11','M01-C15'],
  'SIM01-D10': ['M01-C10','M01-C15'],
  'SIM01-D11': ['M01-C02','M01-C03','M01-C04','M01-C05','M01-C12'],
  'SIM01-D12': ['M01-C02','M01-C03','M01-C04','M01-C05'],
  'SIM01-D13': ['M01-C06','M01-C11','M01-C13','M01-C15'],
};

for (const [id, competencies] of Object.entries(mappings)) {
  DECISIONS[id].competency = competencies[0];
  DECISIONS[id].competencies = competencies;
}

Object.assign(ARTIFACTS, {
  premiumFileUpdate: {
    title: 'Dispatch File Update — PFB-40217',
    lines: [
      'Pickup: Blue River Foods — Omaha, NE',
      'Delivery: Des Moines regional distribution center',
      'Broker message: Pickup FCFS 08:00–13:00',
      'Copied internal note: Pickup appointment 10:30',
      'Delivery timing: tomorrow morning; exact appointment not yet supplied',
      'Rate confirmation: not yet issued',
      'Special instructions: not shown',
    ],
  },
  intrastateQuestion: {
    title: 'Foundation Classification Question',
    lines: [
      'A different training file shows a truck picking up in Houston, Texas and delivering in Dallas, Texas.',
      'The file does not state the shipment’s broader origin, destination, or intended continuous movement.',
    ],
  },
});

Object.assign(DECISIONS, {
  'SIM01-D14': {
    id: 'SIM01-D14',
    stageId: 'SIM01-S7',
    type: 'matching',
    competency: 'M01-C04',
    competencies: ['M01-C04','M01-C05','M01-C06','M01-C07'],
    artifact: 'premiumFileUpdate',
    prompt: 'Match each item to its correct foundation-level document or lifecycle meaning.',
    items: [
      'Broker message with pickup information',
      'Rate confirmation not yet issued',
      'POD after completed delivery',
      'Carrier invoice after billing conditions are satisfied',
    ],
    options: [
      'Information/communication — not itself proof of completed booking',
      'Commercial document state — currently pending/absent',
      'Delivery evidence/document flow',
      'Billing/payment-flow document',
    ],
    correctMap: {
      'Broker message with pickup information': 'Information/communication — not itself proof of completed booking',
      'Rate confirmation not yet issued': 'Commercial document state — currently pending/absent',
      'POD after completed delivery': 'Delivery evidence/document flow',
      'Carrier invoice after billing conditions are satisfied': 'Billing/payment-flow document',
    },
    correctFeedback: 'Correct. M01 separates information, documents, physical completion and payment state instead of treating all of them as generic paperwork.',
    remediation: 'A message can carry operating information without being the same thing as a commercial document, POD, invoice or payment event. Trace each item by purpose and lifecycle position.',
  },
  'SIM01-D15': {
    id: 'SIM01-D15',
    stageId: 'SIM01-S7',
    type: 'matching',
    competency: 'M01-C11',
    competencies: ['M01-C06','M01-C11','M01-C13','M01-C15'],
    artifact: 'premiumFileUpdate',
    prompt: 'Classify the file evidence as KNOWN, UNKNOWN, or VERIFY before relying on it.',
    items: ['Origin city: Omaha', 'Pickup timing', 'Exact delivery appointment', 'Special instructions'],
    options: ['KNOWN', 'UNKNOWN', 'VERIFY'],
    correctMap: {
      'Origin city: Omaha': 'KNOWN',
      'Pickup timing': 'VERIFY',
      'Exact delivery appointment': 'UNKNOWN',
      'Special instructions': 'UNKNOWN',
    },
    correctFeedback: 'Correct. Omaha is stated without supplied conflict; pickup timing conflicts; exact delivery appointment and special instructions are absent.',
    remediation: 'Do not convert a blank field to “none,” and do not silently choose between conflicting sources. Missing is UNKNOWN; conflict is VERIFY.',
  },
  'SIM01-D16': {
    id: 'SIM01-D16',
    stageId: 'SIM01-S7',
    type: 'choice',
    competency: 'M01-C09',
    competencies: ['M01-C09','M01-C15'],
    artifact: 'intrastateQuestion',
    prompt: 'Which statement correctly handles the interstate/intrastate question at Module 01 level?',
    choices: [
      { key: 'A', text: 'It is automatically intrastate for every regulatory purpose because both cities are in Texas.' },
      { key: 'B', text: 'It is automatically interstate because commercial trucks are involved.' },
      { key: 'C', text: 'The visible truck leg is within Texas, but the file does not provide enough facts to make every legal interstate/intrastate classification from geography alone.' },
      { key: 'D', text: 'The classification never matters in trucking operations.' },
    ],
    correctKey: 'C',
    correctFeedback: 'Correct. M01 recognizes the classification question and rejects a geography-only categorical rule when broader movement facts are missing.',
    remediation: 'The city pair is an operating fact, not a universal legal conclusion. Identify what is known and avoid inventing the broader movement.',
  },
  'SIM01-D17': {
    id: 'SIM01-D17',
    stageId: 'SIM01-S8',
    type: 'matching',
    competency: 'M01-C14',
    competencies: ['M01-C07','M01-C14'],
    prompt: 'Match each specialized question to the later Academy workflow that owns the deeper analysis.',
    items: [
      'Will the freight safely/legally fit the available equipment and weight constraints?',
      'Is the opportunity profitable using total-trip economics?',
      'Can the trip be completed within applicable HOS/ELD constraints?',
      'Has the load been formally booked and does the rate confirmation match the agreement?',
    ],
    options: ['M03 — Equipment & Freight Fit', 'M07 — Rate Mathematics & Profitability', 'M11 — HOS & ELD Awareness', 'M09 — Booking / Rate Confirmation / Dispatch Documentation'],
    correctMap: {
      'Will the freight safely/legally fit the available equipment and weight constraints?': 'M03 — Equipment & Freight Fit',
      'Is the opportunity profitable using total-trip economics?': 'M07 — Rate Mathematics & Profitability',
      'Can the trip be completed within applicable HOS/ELD constraints?': 'M11 — HOS & ELD Awareness',
      'Has the load been formally booked and does the rate confirmation match the agreement?': 'M09 — Booking / Rate Confirmation / Dispatch Documentation',
    },
    correctFeedback: 'Correct. M01 identifies the question and hands it to the specialized workflow rather than pretending foundational training answers every downstream problem.',
    remediation: 'The handoff is part of professional judgment. Name the question, preserve the facts, and route it to the module/workflow that owns the deeper decision.',
  },
  'SIM01-D18': {
    id: 'SIM01-D18',
    stageId: 'SIM01-S8',
    type: 'choice',
    competency: 'M01-C13',
    competencies: ['M01-C06','M01-C11','M01-C13','M01-C14','M01-C15'],
    artifact: 'premiumFileUpdate',
    prompt: 'Using STOP → IDENTIFY → TRACE → VERIFY → HAND OFF, what is the strongest next action on this file?',
    choices: [
      { key: 'A', text: 'Book the load now because the cities and broker are known.' },
      { key: 'B', text: 'Assume the FCFS message is right, write “no special instructions,” and move forward.' },
      { key: 'C', text: 'Hold in information/verification status: identify the pickup conflict and missing delivery/special-instruction facts, verify the controlling information, document the result, then hand the file to the applicable specialized workflow.' },
      { key: 'D', text: 'Calculate final profit and HOS feasibility inside Module 01 before asking for missing information.' },
    ],
    correctKey: 'C',
    correctFeedback: 'Correct. The professional foundation is disciplined file triage and handoff, not filling gaps or jumping ahead into specialized conclusions.',
    remediation: 'STOP means stop assumption, not stop working. Identify the facts, trace the flows, verify material gaps/conflicts, document, then hand off to the correct next workflow.',
    escalateAfterAttempts: 2,
  },
});

if (!STAGES.some((stage) => stage.id === 'SIM01-S7')) {
  STAGES.push(
    { id: 'SIM01-S7', title: 'Evidence & Document State', decisionIds: ['SIM01-D14','SIM01-D15','SIM01-D16'] },
    { id: 'SIM01-S8', title: 'Handoff & Next Safe Action', decisionIds: ['SIM01-D17','SIM01-D18'] },
  );
}

for (const id of ['SIM01-D14','SIM01-D15','SIM01-D16','SIM01-D17','SIM01-D18']) {
  if (!DECISION_ORDER.includes(id)) DECISION_ORDER.push(id);
}
