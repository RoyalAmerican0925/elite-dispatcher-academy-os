// SIM-009 critical controls. Exactly six critical-failure families per the
// approved design spec. No seventh family is authorized without architecture
// revision. Each family has exactly one reassessment scenario using facts
// materially different from its triggering decision (different load, different
// numbers, different clause) — never the same question restated.

export const CRITICAL_FAMILIES = {
  "M09-CF-01": {
    label: "Unauthorized carrier commitment",
    definition: "Student accepts, signs, or commits the carrier outside supplied authority.",
  },
  "M09-CF-02": {
    label: "Material rate-confirmation acceptance error",
    definition: "Student knowingly accepts or dispatches from a written document containing a material term conflicting with the supplied agreement without correction or authorization.",
  },
  "M09-CF-03": {
    label: "Unresolved verbal/written discrepancy represented as resolved",
    definition: "Student represents a material conflict as agreed/booked while evidence remains conflicting or missing.",
  },
  "M09-CF-04": {
    label: "Wrong/obsolete/unverified booking document used for dispatch",
    definition: "Student knowingly builds or issues the dispatch packet using a superseded, wrong-load, wrong-carrier, or otherwise uncontrolled rate-confirmation version.",
  },
  "M09-CF-05": {
    label: "Document fabrication/material alteration",
    definition: "Student fabricates, materially alters, deletes, backdates, or misrepresents booking evidence or approval history.",
  },
  "M09-CF-06": {
    label: "False booking completion",
    definition: "Student represents the load as BOOKED / DISPATCH PACKET READY while a required M09 booking control remains unresolved.",
  },
};

export const REASSESSMENTS = {
  "M09-CF-01": {
    stageContext: "Reassessment — Load REF-334",
    prompt: "Load REF-334: the negotiated rate ($1,800) matches the written rate confirmation exactly. But the rate confirmation also adds a new clause: the carrier must post a $500 refundable damage deposit before dispatch. The supplied Authority Matrix does not list damage-deposit commitments as dispatcher-approvable. What should the dispatcher do?",
    choices: [
      { key: "A", text: "Accept and sign — the rate itself matches, so the load is fine" },
      { key: "B", text: "Escalate the deposit clause to the authorized approver before accepting anything; do not sign in the meantime" },
      { key: "C", text: "Sign, then mention the deposit clause to the owner afterward" },
      { key: "D", text: "Refuse the load entirely without escalating" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. A matching rate does not authorize a new financial commitment outside the supplied authority. Escalate before accepting anything.",
    remediation: "Signing now and mentioning it later still commits the carrier outside supplied authority in the interim. Refusing outright skips the escalation step that might actually resolve it. Escalate first, sign nothing until authorized.",
  },
  "M09-CF-02": {
    stageContext: "Reassessment — Load REF-561",
    prompt: "Load REF-561's rate confirmation includes a layover fee clause ($150/day) that was never discussed in the M08 negotiation handoff. The base rate otherwise matches exactly. How should the layover clause be treated?",
    choices: [
      { key: "A", text: "Treat it as accepted, since the base rate matches and layover fees are common" },
      { key: "B", text: "Classify it as an unverified/unauthorized new term; do not treat the document as fully accepted until it is verified and authorized" },
      { key: "C", text: "Delete the clause from the copy sent to the driver since it wasn't negotiated" },
      { key: "D", text: "Ignore it — layover terms are not material" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. A term that was never part of the negotiated agreement is not automatically accepted just because it's common industry practice or the base rate matches. It must be verified and authorized before the document is treated as fully accepted.",
    remediation: "Knowingly accepting or dispatching from a document containing a term that goes beyond the supplied agreement, without correction or authorization, is exactly this module's material-acceptance-error failure. Altering the driver's copy is document integrity fabrication, not a fix. And a financial term is not automatically nonmaterial just because it's common.",
  },
  "M09-CF-03": {
    stageContext: "Reassessment — Load REF-902",
    prompt: "Load REF-902: negotiated equipment is a 53' dry van. The rate confirmation states 48' flatbed. The broker has not yet responded to a correction request. Can the dispatcher currently tell the carrier this load is agreed and ready?",
    choices: [
      { key: "A", text: "Yes — the rate and dates match, so the equipment mismatch is a minor detail" },
      { key: "B", text: "No — the equipment mismatch is material and unresolved; it cannot be represented as agreed until corrected or authorized" },
      { key: "C", text: "Yes, since the carrier can probably supply either equipment type" },
      { key: "D", text: "It depends on which equipment the carrier prefers" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. Equipment type is a material term. Until the broker corrects it or it's otherwise authorized, this load cannot be represented as agreed — regardless of what else matches.",
    remediation: "Representing a load as agreed while a material conflict remains open is exactly this module's unresolved-discrepancy-represented-as-resolved failure. Assuming the carrier can 'probably' supply either equipment type substitutes a guess for verified evidence.",
  },
  "M09-CF-04": {
    stageContext: "Reassessment — Load REF-118",
    prompt: "Load REF-118 has two rate confirmation versions on file: v1 (superseded, contains an uncorrected pickup-time error) and v2 (current, corrected and authorized). A teammate is about to send the dispatch packet to the driver and grabs v1 because it was the first email in the thread. What should happen?",
    choices: [
      { key: "A", text: "Let it go — both versions have the same reference number, so it doesn't matter which one is sent" },
      { key: "B", text: "Stop the teammate and ensure only the current, corrected v2 is used in the dispatch packet" },
      { key: "C", text: "Send both versions so the driver can decide which is correct" },
      { key: "D", text: "Send v1 now and follow up with v2 later" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. Only the current, verified version belongs in the dispatch packet. A shared reference number does not make a superseded version safe to use.",
    remediation: "Using a superseded or uncontrolled version for dispatch — even briefly, even with a follow-up planned — is exactly this module's wrong-document failure. Sending both versions pushes the version-control decision onto the driver, which is not their job.",
  },
  "M09-CF-05": {
    stageContext: "Reassessment — Load REF-763",
    prompt: "A colleague suggests changing the timestamp on a correction-request email for Load REF-763 to make it look like the correction was requested earlier than it actually was, so the paperwork \"looks cleaner\" for the file. What should the dispatcher do?",
    choices: [
      { key: "A", text: "Go along with it since the actual correction content is accurate" },
      { key: "B", text: "Refuse — backdating the record is fabrication of booking evidence, regardless of whether the underlying correction is accurate" },
      { key: "C", text: "Adjust only the display timestamp but keep the original file untouched" },
      { key: "D", text: "Ask the broker to backdate their response instead" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. Backdating evidence is fabrication/material alteration of the booking record, even when the underlying content is accurate. Refuse and preserve the actual history.",
    remediation: "Backdating, or having someone else backdate it, or adjusting even just a displayed timestamp, is still altering the evidentiary record — exactly this module's document-fabrication failure. Accuracy of the correction's content does not excuse falsifying when it happened.",
  },
  "M09-CF-06": {
    stageContext: "Reassessment — Load REF-449",
    prompt: "Load REF-449: every rate-confirmation term now matches the negotiated agreement exactly. The only outstanding item is that the carrier's own required internal sign-off on the booking is still pending. Can the dispatcher mark this load BOOKED / DISPATCH PACKET READY?",
    choices: [
      { key: "A", text: "Yes — since every commercial term matches, the load is effectively booked" },
      { key: "B", text: "No — a required M09 booking control (the internal sign-off) remains unresolved, so BOOKED / DISPATCH PACKET READY is not yet supported" },
      { key: "C", text: "Yes, and note the pending sign-off as a footnote" },
      { key: "D", text: "Mark it HOLD but tell the driver to proceed anyway" },
    ],
    correctKey: "B",
    correctFeedback: "Correct. Matching commercial terms is not the same as satisfying every required booking control. With the sign-off still pending, BOOKED / DISPATCH PACKET READY is not supported yet.",
    remediation: "Marking a load BOOKED / DISPATCH PACKET READY while a required control remains outstanding — even as a footnoted exception, and especially while telling the driver to proceed anyway — is exactly this module's false-completion failure.",
  },
};
