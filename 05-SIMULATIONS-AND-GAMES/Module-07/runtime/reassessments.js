export const CRITICAL_FAILURE_FAMILIES={
 "CF-01":"Unsupported revenue — adds unearned/unverified accessorial revenue to current/guaranteed revenue",
 "CF-02":"Profit mislabeling — represents partial-cost contribution margin as profit/net profit/take-home",
 "CF-03":"Loaded-mile blindness — makes economic choice from loaded RPM/headline rate while bypassing material total-mile evidence",
 "CF-04":"Fabricated input — converts a material unknown to zero/assumed fact without verification or disclosure",
 "CF-05":"Carrier-authority override — represents dispatcher recommendation as the carrier's final decision"
};

export const CRITICAL_TRIGGERS={
 "SIM07-D02":{family:"CF-04",responses:["A","C"]},
 "SIM07-D04":{family:"CF-03",responses:["A","C"]},
 "SIM07-D09":{family:"CF-03",responses:[{alpha:"first",charlie:"second",bravo:"third"}]},
 "SIM07-D16":{family:"CF-02",responses:["A","D"]},
 "SIM07-D17":{family:"CF-01",responses:["A","C"]},
 "SIM07-D27":{family:"CF-03",responses:[{alpha:"take",bravo:"counter",charlie:"counter"},{alpha:"take",bravo:"take",charlie:"take"}]},
 "SIM07-D30":{family:"CF-05",responses:["A","C","D"]}
};

const choice=(id,family,prompt,choices,correctKey)=>({id,family,type:"choice",prompt,choices,correctKey});
const categorize=(id,family,prompt,items,buckets,correctMap)=>({id,family,type:"categorize",prompt,items,buckets,correctMap});

export const REASSESSMENTS={
 "CF-01":choice("SIM07-R01","CF-01","New case: A rate confirmation allows layover pay after 10 hours, but the truck has only been held 6 hours and no supporting documents exist. Can layover pay be added to current load revenue?",[
   {key:"A",text:"Yes, because the clause is written"},{key:"B",text:"No — it has not been triggered, documented or earned"},{key:"C",text:"Add half as a conservative estimate"}
 ],"B"),
 "CF-02":choice("SIM07-R02","CF-02","New case: Revenue is $2,400 and the exercise subtracts only fuel, tolls and dispatch fee, leaving $1,710. What is the defensible label?",[
   {key:"A",text:"Guaranteed net profit"},{key:"B",text:"Estimated contribution margin under the stated included-cost assumptions"},{key:"C",text:"Carrier take-home pay"}
 ],"B"),
 "CF-03":categorize("SIM07-R03","CF-03","New case: rank the loads by effective RPM, not loaded RPM.",[
   {key:"red",text:"Red: $2,100 revenue / 700 loaded mi / 100 deadhead = $2.63 effective RPM"},
   {key:"blue",text:"Blue: $1,920 revenue / 590 loaded mi / 10 deadhead = $3.20 effective RPM"},
   {key:"green",text:"Green: $2,020 revenue / 620 loaded mi / 30 deadhead = $3.11 effective RPM"}
 ],[
   {key:"first",label:"1st"},{key:"second",label:"2nd"},{key:"third",label:"3rd"}
 ],{blue:"first",green:"second",red:"third"}),
 "CF-04":choice("SIM07-R04","CF-04","New case: a load shows $2,250 revenue and 610 loaded miles, but origin deadhead has not been provided. What should the dispatcher enter for deadhead before calculating effective RPM?",[
   {key:"A",text:"0 miles"},{key:"B",text:"Keep it UNKNOWN and verify before calculating a final effective RPM"},{key:"C",text:"Use 25 miles as a reasonable estimate"}
 ],"B"),
 "CF-05":choice("SIM07-R05","CF-05","New case: your analysis shows Load X meets the carrier's stated threshold and Load Y does not. Which briefing preserves carrier authority?",[
   {key:"A",text:"I've decided we're booking Load X"},{key:"B",text:"Load X meets your stated threshold; Load Y does not. My recommendation is X, and the final decision remains yours."},{key:"C",text:"I'll book X now and notify you afterward"}
 ],"B")
};
