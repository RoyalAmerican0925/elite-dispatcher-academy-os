export const CRITICAL_FAMILIES={
  "M03-CF-01":{decisionId:"SIM03-D09",label:"Driver lacks scenario-stated required hazardous-material qualification"},
  "M03-CF-02":{decisionId:"SIM03-D11",label:"Axle/tandem violation ignored because gross is below overall baseline"},
};
export const DECISION_TO_CRITICAL_FAMILY=Object.fromEntries(Object.entries(CRITICAL_FAMILIES).map(([f,v])=>[v.decisionId,f]));
export const REASSESSMENTS={
  "M03-CF-01":{scenario:"A new load file states that the shipment requires the X endorsement because the scenario involves a placarded hazardous-material tank movement. The assigned driver's verified credential file shows H only, not X.",prompt:"What is the correct dispatch decision?",choices:{A:"Dispatch because H and X are interchangeable",B:"Do not dispatch this driver on the scenario-stated X-required load; verify/assign a properly qualified driver",C:"Change trailers and keep the same driver"},correctKey:"B"},
  "M03-CF-02":{scenario:"A different combination projects 78,900 lb gross, but the supplied axle sheet projects 34,800 lb on a tandem axle group against the applicable 34,000 lb baseline taught in this module.",prompt:"What controls the decision?",choices:{A:"Approve because gross is under 80,000 lb",B:"Do not dispatch as stated; gross and axle-group compliance are separate checks and the tandem condition must be corrected/verified",C:"Ignore the axle sheet because only cargo weight matters"},correctKey:"B"},
};
