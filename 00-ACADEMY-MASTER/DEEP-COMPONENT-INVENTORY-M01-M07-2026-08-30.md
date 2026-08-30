# Deep Component Inventory — Modules 01–07

**Inventory date:** 2026-08-30
**Branch inspected:** `academy-master-architecture`
**Purpose:** Map live repository assets to the Academy Module Deliverable Standard. Existence is not a quality verdict.

## Cross-program findings
- Live curriculum directories exist for Modules 01–07 only.
- Knowledge checks exist for Modules 01–07.
- Exams and answer keys exist for Modules 01–07; the shared exam blueprint currently covers Modules 01–06.
- Instructor Answer Guides exist for Modules 01–07.
- The `Instructor-Guides/` directory does **not** contain module-specific instructor guides for Modules 01–07; it currently contains a separate LE-001 instructor guide. This is a product-package gap to evaluate rather than silently treating answer keys as full instructor guides.
- Practical assessments exist for Modules 01–05 and 07. **No Module 06 practical exists in `Practical-Assessments/`.**
- A shared practical scoring guide exists for Modules 01–05; Module 07 has a dedicated practical scoring guide.
- The only standalone Scenario Lab currently in `Scenario-Labs/` is Module 06.
- Coded simulation directories exist for Modules 01–03. No Module 04–07 simulation directory exists yet.
- Student-tool directories exist for Modules 01–05 and 07. **No Module 06 student-tool directory exists.**

---

## Module 01 — Industry Foundations
### Curriculum
- `Student-Manual-Part-01.md` — SHA `0830fe22023a91d579dec0b524aa94a74dbf230e`
- `Student-Manual-Part-02.md` — SHA `75ffb55854328fa3a78b73f84da604fbdb653bc1`
- `Student-Manual-Part-03.md` — SHA `fffa8e4b5c2aee15061dac78a0eb2051a91956ee`

### Active premium-rebuild delta
Dedicated branch `module-01-premium-depth-rebuild` additionally contains:
- `Student-Manual-Part-04.md` — SHA `e9c6770d814caf31b2d086a13863a2bf31994dd3`
- `Module-01-Dispatch-File-Intake-and-Verification-Map.md` — SHA `798de079fa811370ecf950b5cd9f254145be576e`
- Premium competency map in `10-PRODUCTION/`.
These are not yet reconciled into this architecture branch.

### Student tools on architecture branch
- Freight Role Map Worksheet — SHA `578e433c3fa6357a7f26a0999385db889430e137`
- Load Lifecycle Sequencing Worksheet — SHA `7615d56881afab8e1c693f80121435c7effcd4ce`

### Assessment / instructor
- Knowledge Check — SHA `913da554d676597c5e3c24a58af9f2c6cd4eb92d`
- Exam — SHA `932452826e5c94173e548f84e6dcc781d38c4588`
- Exam Answer Key — SHA `b531853b0ece915228ea2385d3da30293d7daa1e`
- Practical — SHA `64e8be49905c7cefdf85f5025fe00a48d0838185`
- Instructor Answer Guide — SHA `cd51abf0ceea6097ab635a2fe2af9b739b3ba5f3`
- Practical scoring is controlled in the shared Modules 01–05 scoring guide.

### Simulation
- `05-SIMULATIONS-AND-GAMES/Module-01/` exists.
- SIM-001 commercial-readiness QA record exists in `10-PRODUCTION/`.
- Status remains `BUILD COMPLETE — RELEASE QA DEFERRED`, with curriculum-alignment re-audit required after premium rebuild.

### Control verdict
**ACTIVE RECONCILIATION REQUIRED.** Do not merge architecture and premium branches by overwriting one with the other.

---

## Module 02 — Dispatcher vs. Broker Boundaries
### Curriculum
Four manual parts exist:
- Part 01 SHA `13b6684369e4df5153b9146a2811fe6dfd2378dd`
- Part 02 SHA `6e506f2b21cf5ca0406b4189de84a1569d63433e`
- Part 03 SHA `3e794fc2cc6b252030cef1822ace9f2ea3dcda06`
- Part 04 SHA `9bfc78f0765fef30879c3f2642290e85ad8693b1`

### Student tools
- Decision Tool Worksheet — SHA `fc174d4a32acc46150ad309a44b8ec8ae39af0c6`
- Answer/control content is also present in instructor materials; keep student and instructor exposure separated.

### Assessment / instructor
- Knowledge Check — SHA `36322f3be79b4dd53dfc67fd9ac8adcfad543278`
- Exam — SHA `06bb23c318cafc3653909bfb20e079a03fc90521`
- Exam Answer Key — SHA `0707a16d9c4583c0d005f2474531db31eccbe59d`
- Practical — SHA `5b9b5809ed3e482688dc98f1113642208dd062e7`
- Instructor Answer Guide — SHA `2165a5dcaf63ed522ac257f6a6d895a4165212bc`
- Shared practical scoring guide: 18 points; 15/18 + critical-failure control.

### Source controls
- `MODULE-02-REGULATORY-SOURCE-REGISTER.md`
- `MODULE-02-DATE-SENSITIVE-CLAIM-REGISTER.md`
- Final commercial-readiness QA record exists.

### Simulation
- `05-SIMULATIONS-AND-GAMES/Module-02/` exists.
- SIM-002 commercial-readiness QA record exists.
- Status: `BUILD COMPLETE — RELEASE QA DEFERRED`; stronger premium-depth re-audit remains.

### Control verdict
**COMPONENT CHAIN SUBSTANTIALLY PRESENT; PREMIUM RE-AUDIT + FULL INSTRUCTOR-GUIDE PRODUCT LAYER OPEN.**

---

## Module 03 — Equipment and Freight Fit
### Curriculum
Four manual parts exist:
- Part 01 SHA `013bb35f38d225c57173a56959cec92d296fff77`
- Part 02 SHA `0a2efa4cda46ac24b4b61f863a87ecc547dc54e3`
- Part 03 SHA `4bf51d9e9b94c15248585819ac8a64b37dbb7db4`
- Part 04 SHA `3e65a10392d78d3cf180f2dd5db4efb164624088`

### Student tools
- Load Fit Verification Checklist — SHA `665b1f9c1bde4a7f3465acd452e3d2fc6daa8333`
- STOP-VERIFY-ESCALATE Decision Tool — SHA `65864d829e7ea101b50d7bba276ab0db930aa9ea`
- Weight-Dimension Verification Worksheet — SHA `942c8054ab223af371eca48d3b431478c1a4b541`

### Assessment / instructor
- Knowledge Check — SHA `b60b3c62e6b42ac21c8ca922f235209fba276e7a`
- Exam — SHA `8382dcf02e81e7e1e49f9ecc4962259d63e43ca4`
- Exam Answer Key — SHA `cbbf5dcc5fed52d8e814bd38fe55b8555c113bd0`
- Practical — SHA `d0e9ddcbe8ab730a4b16d8c6fdcf9a0280f4a456`
- Instructor Answer Guide — SHA `84379db4bc2ed6ac7ffcd587644373216f63279b`
- Shared practical scoring guide controls two critical failures.

### Source controls
- Module 03 regulatory source register
- Module 03 date-sensitive/state-specific claim register
- Final commercial-readiness QA record

### Simulation
`05-SIMULATIONS-AND-GAMES/Module-03/` now exists with student/instructor/scoring/completion documents and a coded runtime. Runtime README describes a seven-stage, 15-decision build and 26 assertions. **Important gap:** no `sim003-runtime-tests.yml` workflow is present in `.github/workflows/` on this branch. Runtime documentation itself still says QA is required. Do not mark SIM-003 BUILD COMPLETE from file existence alone.

### Control verdict
**CONTENT CHAIN STRONG; SIM-003 BUILD EXISTS BUT CHATGPT QA/CI GATE IS NOT CLOSED.**

---

## Module 04 — Carrier and Driver Onboarding
### Curriculum
Three manual parts exist:
- Part 01 SHA `963c73341d1d63c43cc41a572e71f2d14f5b3727`
- Part 02 SHA `553b8a5016a3fac80dec4ffccd7bbe4113719242`
- Part 03 SHA `bf7026dd57e8ea8720b59db141c0e4da8777baac`

### Student tools
- Carrier Onboarding Checklist — SHA `8ba127378092b55679fa90ad935f44fdeee8db53`
- Driver Dispatch Profile Template — SHA `f0986a560b56ed5e23f8e0937b04e9ea304b0a48`
- Equipment Profile Template — SHA `51a341943d6c6546d5d131ac4f69183f1301e2c2`
- Expiration/Reverification Tracker — SHA `73da79485a52ae9416811fb38282425d221953af`
- Payment-Change STOP-VERIFY-ESCALATE Tool — SHA `030b93e872ac78fc21e40fb243c351c69d82d95c`

### Assessment / instructor
- Knowledge Check — SHA `9956ac0016f7887258e919eaf3ce69deb4d4adb1`
- Exam — SHA `7ef305eeff296361bb69de1d57d6b8bf35ed7263`
- Exam Answer Key — SHA `bfd4c432a0ef6cd78f8ebcefcf69ab5cbb93d722`
- Practical — SHA `451bbff3bdda9f702eba80dfe9ee8576b2b04371`
- Instructor Answer Guide — SHA `12d72274f06e57c85bd8682caee2973e7014438f`
- Shared practical scoring guide controls 21 points and critical conditions.

### Source controls
- Module 04 regulatory source register
- Module 04 date-sensitive claim register
- final commercial-readiness QA record

### Simulation
No Module 04 simulation directory exists. SIM-004 remains planned.

### Control verdict
**SUBSTANTIAL COURSEWARE PRESENT; PREMIUM RE-AUDIT + SIM-004 + FULL INSTRUCTOR-GUIDE PRODUCT LAYER OPEN.**

---

## Module 05 — Load Boards & Freight Sourcing
### Curriculum
Seven manual parts exist. Current SHAs include:
- P01 `1abea4178ecf5a4378986d0876f912cf4ed9f5ff`
- P02 `4d701d05ee51c37118a9b903fe37ce7b878edee7`
- P03 `62ada7c4a5d3475b8d9bf92437db4a8af359e6c0`
- P04 `1956f2d651624c97ad44a9cb5ed09c7fb1671dba`
- P05 `ed9fc592bc4515dbf44e2396bbf45b15f92a43f3`
- P06 `deeb01e22b8884bbd6d84db1ad936edff902a235`
- P07 `90523bfd81167fb118c79edfadfe5177adef3db5`

Part 04 currently transitions correctly into Module 06 Broker Verification & Fraud Prevention; the older stale-transition concern should therefore be treated as repaired on this branch, not repeated as an active defect without new evidence.

### Student tools
Nine live tools:
- Broker Call Sheet
- Broker Verification Worksheet
- Freight Fraud Red-Flag Checklist
- Load Comparison Worksheet
- Load Screening Checklist
- Load Search Activity Log
- Load Search Worksheet
- Rate Confirmation Review Checklist
- STOP-VERIFY-ESCALATE Load Decision Tool

### Assessment / instructor
- Knowledge Check — SHA `356bf3ebf651e2e2b84c7785c7eb24e03f8cc55a`
- Exam has C-013-FINAL expansion to 30 items, 24/30 pass + Critical Item 24; it explicitly adds rate-confirmation, entity/contact, credit/factoring and timing judgment.
- Practical — SHA `a181c86f829c5ab2b103f5a60f79da88e8427bf4`
- Instructor Answer Guide — SHA `39f368c4cc4302738ed9127e25d1921a1e1912e9`
- Shared practical scoring guide currently gives Module 05 seven dimensions / 21 points, 17/21 pass.

### Active closeout defect confirmed
The live practical currently has eight tasks but does **not** contain the dedicated rate-confirmation discrepancy review or dedicated entity-versus-contact verification task requested by the C-013 closeout. Therefore the regular closeout is still open even though the exam and tools have advanced.

### Source controls
- Module 05 Regulatory Source Register — DRAFT_COMPLETE / pre-publication review required.
- Module 05 Date-Sensitive Claim Register — flags commercial load-board platform descriptions and Motus as high-revision-risk content.

### Simulation
No Module 05 simulation directory exists. SIM-005 remains planned.

### Control verdict
**C-013 PARTIALLY LANDED; PRACTICAL/SCORING SYNCHRONIZATION STILL BLOCKS REGULAR CLOSEOUT. PREMIUM AUDIT FOLLOWS.**

---

## Module 06 — Broker Verification & Fraud Prevention
### Curriculum
Five live manual files:
- Part 01 SHA `3907e4f9b8d91622a3704dad239f0bfd41e2aa86`
- Part 01B SHA `7ba2a64d8eead0f11940064bfe58419ff5aeef9f`
- Part 02 SHA `7281dc5079718fc5e63c9544a254cdc4041cddbf`
- Part 03 SHA `f05f02818dd6fe6e7334cafe63d80a9df18c91b2`
- Part 04 SHA `46e0befe5abe1bb65abbb81f5553ec96adf41cbc`

The manual already teaches the layered sequence `VERIFY THE ENTITY → VERIFY THE CONTACT → VERIFY THE LOAD → VERIFY THE PAYMENT PATH`, a risk classification system, trusted-channel verification, and date-sensitive 2026 FMCSA/BMC-85 material.

### Student tools
**MISSING:** no `04-STUDENT-TOOLS/Module-06-Tools/` directory exists.

### Assessment / instructor
- Knowledge Check — SHA `65163f01d3b32cf91587e89f7916c7e8f3a320dd`
- Exam exists: 28 items, 90% / 26 of 28 + Critical Items 25 and 27.
- Exam Answer Key exists.
- Scenario Lab — SHA `75aa9ed9bdf66739ebf9126fb85e0dd9d820876c`; contains 12 verification/fraud-prevention scenarios.
- Instructor Answer Guide — SHA `e33ea5a9f2ea95a08e1f5bfc4c9fbdd48d97888a`
- **MISSING:** no Module 06 practical exists in `Practical-Assessments/`.
- **MISSING/PRODUCT GAP:** no module-specific full instructor guide.

### Source/current-date controls
`REGULATORY-VERIFICATION-2026-08-19-M04-M06.md` exists, but current Module 06 content itself explicitly requires pre-publication re-verification of evolving FMCSA systems and 2026 financial-security rules. G-013 research/reconciliation remains useful; do not treat old verification as final currency.

### Simulation
No Module 06 simulation directory exists. SIM-006 design must follow verified workflow and research reconciliation.

### Control verdict
**MORE COMPLETE THAN THE PREVIOUS MASTER BRANCH IMPLIED, BUT MATERIAL PRODUCT GAPS ARE NOW CONFIRMED: STUDENT TOOLS + PRACTICAL + SIMULATION + PREMIUM/CURRENT-SOURCE GATES.**

---

## Module 07 — Rate Mathematics & Profitability
### Curriculum
Three manual parts:
- Part 01 SHA `798d48c097de3a552fe03459826b8f2e40516f7e`
- Part 02 SHA `d98f3d65d6e6326322ce81a71bac3c21ab4a95b3`
- Part 03 SHA `4b661a707c66bab5369cb5899d64554b552bce73`

### Student tools
- Calculation Worksheet — SHA `fae175938b5cdb5ad94437e40057c187a67949c2`
- Carrier Onboarding Cost Information Worksheet — SHA `537fee284510c1ca7b530f9511f1ba208886b02a`
- Load Comparison Worksheet — SHA `c21f982ea57c8b58a95857870d169d587710d84d`

### Assessment / instructor
- Knowledge Check — SHA `118f40665723c2a51c4c6675217dfaac45b596f5`
- Exam — 28 items; 90% / 26 of 28 + Critical Items 24 and 26; fictional-data notice present.
- Exam Answer Key exists.
- Practical — SHA `65ae8b5d8640e1a63f8d85bbb760a1228b4d3445`
- Dedicated Practical Scoring Guide — SHA `87aa16e82cb1b7c989176009e620642f6c147714`
- Instructor Answer Guide — SHA `71cc1718105cd8c92baff3fea78d6ec877531ac7`
- **No standalone Module 07 Scenario Lab exists in `Scenario-Labs/`.** This is not automatically a defect if the manual/practical provides sufficient guided scenario practice, but the premium audit must make that determination explicitly.
- **No module-specific full instructor guide exists.**

### Source controls
Instructor Answer Guide includes primary-source control for 49 CFR Part 371/§371.3, EIA fuel-price sourcing and ATRI industry-cost context, while requiring pre-publication reconfirmation. Fictional exercise values are explicitly distinguished from current market benchmarks.

### Simulation
No Module 07 simulation directory exists. SIM-007 remains planned.

### Control verdict
**SUBSTANTIAL ASSESSMENT/TOOL PACKAGE EXISTS; PREMIUM AUDIT + SIM-007 + INSTRUCTOR PRODUCT LAYER + SOURCE REGISTER/RELEASE CONTROLS REMAIN.**

---

# Priority gaps exposed by inventory
1. Reconcile Module 01 premium branch into architecture without losing either branch's newer work.
2. Close Module 05 practical/scoring gaps before calling C-013 complete.
3. Module 06 needs student tools and a graded practical before its module chain can be complete.
4. SIM-003 needs independent ChatGPT QA and CI/workflow closure; file presence is not completion.
5. SIM-004 through SIM-007 are absent.
6. Module-specific full instructor guides are not presently represented for Modules 01–07; decide and build the instructor-product standard rather than assuming answer guides are sufficient.
7. Modules 08–15 have controlled scope in project maps but no live curriculum directories; build them only after scope reconciliation and production authorization.
