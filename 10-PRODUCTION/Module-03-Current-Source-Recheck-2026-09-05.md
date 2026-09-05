# Module 03 — Current-Source Recheck — 2026-09-05

**Module:** 03 — Trucks, Trailers, Freight & Equipment  
**Gate:** Premium/currentness reconciliation  
**Result:** PASS WITH RELEASE-GATE RECHECK RETAINED  
**Branch:** `modules-02-03-premium-reconciliation`

## Purpose
Recheck the Module 03 federal equipment/size/weight/driver-qualification source chain before closing the premium content/runtime build gate. This record keeps federal requirements separate from state-specific rules, unit-specific equipment facts and Academy safety practices.

## Sources checked

### 1. Interstate weight baseline — current federal regulation
**23 CFR § 658.17** remains consistent with the module's weight instruction. Current eCFR text states, for the Interstate System framework addressed by the section:
- maximum gross vehicle weight: **80,000 lb**, subject to the bridge formula;
- maximum gross weight on a single axle: **20,000 lb**;
- maximum gross weight on tandem axles: **34,000 lb**.

The regulation separately applies axle/tandem and bridge-formula controls. Therefore, a load can be below 80,000 lb gross and still fail a separate axle-group requirement.

**Disposition:** KEEP — ACTIVE. SIM-003 D11/D12 and the Practical correctly reject gross-weight-only legality reasoning.

### 2. National Network width — current federal regulation
**23 CFR § 658.15** continues to use **102 inches** (approximately 2.6 meters) as the National Network width figure, while also recognizing special-use permits for vehicles exceeding that width.

**Disposition:** KEEP — ACTIVE. The module is correct not to teach a 104-inch load as automatically illegal or automatically permit-ready; the jurisdiction/route/permit facts still require verification.

### 3. Semitrailer length floor — current federal regulation
**23 CFR § 658.13** continues to prohibit a State from imposing a semitrailer length limitation below **48 feet** for the covered truck-tractor/semitrailer National Network framework. The regulation does not create a universal federal statement that every State's maximum semitrailer length is 53 feet.

**Disposition:** KEEP — ACTIVE. The module correctly treats 53-foot equipment as common industry equipment rather than a universal federal maximum/guarantee.

### 4. CDL endorsement framework — current federal regulation
**49 CFR § 383.93** continues to require specialized endorsements for covered vehicle/cargo categories, including tank vehicles and vehicles used to transport hazardous materials as defined by the regulation. **49 CFR § 383.153** continues to identify the federal CDL endorsement codes:
- **N** — tank vehicle;
- **H** — hazardous materials;
- **X** — combination of tank vehicle and hazardous materials endorsements.

**Disposition:** KEEP — ACTIVE. The module's instruction that H, N and X are distinct concepts remains supported. Continue verifying the actual shipment and driver credential rather than treating any one letter as a universal answer.

### 5. Hazardous-material offeror responsibility — current federal regulation
**49 CFR § 173.22(a)** continues to place classification/description and packaging-determination duties on the person offering hazardous material for transportation. The rule requires the offeror to class and describe the hazardous material in accordance with Parts 172 and 173 and to determine that required packaging is authorized/compliant.

**Disposition:** KEEP — ACTIVE. The module is correct to teach the dispatcher not to invent a hazmat classification and to rely on verified shipping/offeror information and carrier/driver qualification checks.

## Currentness conclusion
No curriculum rewrite is required from this 2026-09-05 recheck. The current federal source chain supports the module's central occupational controls:

**EQUIPMENT → COMMODITY → TEMPERATURE → DIMENSIONS → WEIGHT/AXLES → DRIVER QUALIFICATIONS → MISSING INFORMATION → VERIFY → PROCEED / REJECT / ESCALATE**

## Scope controls retained
- 80,000/20,000/34,000 figures are federal Interstate baselines within the cited framework, not a substitute for every State/configuration/bridge/permit rule.
- 102 inches is the cited National Network width figure; oversize-permit availability/process remains jurisdiction-specific.
- 48 feet is a federal minimum semitrailer length floor in the cited framework, not a universal 53-foot maximum rule.
- Actual trailer tare weight, usable dimensions, loading method and payload remain unit/load-specific facts.
- Hazmat classification and endorsement applicability remain shipment-specific and must be verified.

## Release-gate controls retained
Before `PUBLICATION_READY`, perform final source/currentness review for any changed federal or state-specific requirement, manual accessibility QA, browser/device QA, assembled-course editorial QA and production deployment verification.

**Maximum status supported by this record:** `BUILD COMPLETE — RELEASE QA DEFERRED`.