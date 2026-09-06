import fs from 'node:fs';
import assert from 'node:assert/strict';

const app=fs.readFileSync(new URL('../app.js', import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../styles.css', import.meta.url),'utf8');
const html=fs.readFileSync(new URL('../index.html', import.meta.url),'utf8');
const combined=`${app}\n${css}\n${html}`;

for(const marker of ['Booking Desk: Save the Load','dispatcher-desktop','inbox-panel','document-viewer','booking-workbench','event-queue','load-status-controls']){
  assert.ok(combined.includes(marker),`game experience must include ${marker}`);
}

for(const stale of ['Decision ${p.current} of ${p.total}','>Submit<','Try again']){
  assert.ok(!app.includes(stale),`player-facing workdesk must not use stale quiz-loop marker: ${stale}`);
}

assert.ok(app.includes('Operational consequence') || app.includes('operational consequence'),'feedback must be framed as an operational consequence');
console.log('SIM-009 game-experience contract: PASS');
