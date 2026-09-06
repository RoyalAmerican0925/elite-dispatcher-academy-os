# Module 09 Date-Sensitive Claim Register

**Control date:** 2026-09-05

## Claims requiring pre-publication recheck
| Claim family | Classification | Build-gate treatment | Release action |
|---|---|---|---|
| Federal broker recordkeeping / transparency | regulatory | cite current Part 371; do not promote proposal text to final law | recheck eCFR + FMCSA docket |
| Electronic-signature legal effect | federal statute + applicable law | state only the narrow E-SIGN principle; do not infer authority/authenticity | recheck 15 USC Ch. 96 and applicable exceptions |
| Electronic record retention | federal statute where a legal retention rule applies | describe accuracy/accessibility principle without inventing universal carrier period | recheck controlling retention rule for each claim |
| Rate-confirmation signature method | contract/carrier/platform specific | no universal method | verify actual agreement/policy/platform |
| Detention / TONU / lumper amounts and triggers | agreement specific | fictional case terms only unless sourced | verify actual contract |
| Tracking / check-call frequency | agreement/platform/carrier specific | fictional case terms only | verify actual agreement/platform |
| Cancellation / late / missed-appointment consequences | agreement specific | no universal amount or trigger | verify actual agreement |
| Payment/document-submission terms | agreement/factoring/carrier specific | M09 extracts and hands off; M14 owns billing/closeout | verify actual agreement and M14 sources |
| Vendor load-board/TMS/e-sign UI steps | platform specific | not required by core M09 | live product check before publishing screenshots/instructions |

## Stable Academy controls
These are instructional controls, not claims of federal mandate: `KNOWN / UNKNOWN / VERIFY`, `MATCH`, `MISMATCH — MATERIAL`, `MISMATCH — NONMATERIAL / CLERICAL`, `SUPERSEDED`, `HOLD`, `CORRECT`, `ESCALATE`, `AUTHORIZED`, `NOT AUTHORIZED`, `BOOKED / DISPATCH PACKET READY`, and `HAND OFF TO M10`.

## Scope protection
M09 records booked pickup/delivery facts and may flag later feasibility. M10 owns detailed trip planning; M11 HOS/ELD; M12 monitoring; M13 exceptions/claims; M14 billing/closeout.

## Release rule
A current build-gate check is not permanent authority. Final commercial release requires a fresh source recheck.