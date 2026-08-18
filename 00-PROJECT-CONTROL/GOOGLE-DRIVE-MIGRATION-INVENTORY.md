# Google Drive Migration Inventory

Migration started: 2026-08-14

## Confirmed Core Course Sources

| Drive File | Drive ID | Type | Target Area | Migration State |
|---|---|---|---|---|
| Elite Dispatcher Academy - Module 01 - FINAL | 1WVTqPuo_A4SaU5xDhJq-KIF_uMLTWi0w | DOCX | 02-CURRICULUM/Module-01 | Source read; repository source record created |
| Elite Dispatcher Academy - Module 02 Student Manual - FINAL | 1HM_cxNMEQg3AUOI93uwFC4KpAxFr5PUcO7_1tk12H0A | Google Doc | 02-CURRICULUM/Module-02 | Source read; repository source record created |
| Elite Dispatcher Academy - Module 03 Student Manual - FINAL | 1e1KQcMaxT9shKj1VwFh_ezg7pNTjdcyFBdoKVQqmO0k | Google Doc | 02-CURRICULUM/Module-03 | Migrated; repository content present; DRAFT_COMPLETE pending verification |
| Elite Dispatcher Academy — Module 04 Student Manual — FINAL | 18HvB4wFawfJf7cJxs6hH7TVbxxe312w8Le13b7DCnR0 | Google Doc | 02-CURRICULUM/Module-04 | Migrated; repository content present; DRAFT_COMPLETE pending verification |
| Elite Dispatcher Academy — Module 05 Student Manual — FINAL | 1QEmVXVHRKm_nvxt32IpwBrKUBeQlBMNtim4LmNqu7pU | Google Doc | 02-CURRICULUM/Module-05 | Migrated; repository content present; DRAFT_COMPLETE pending verification |
| Elite Dispatcher Academy - Module 06 Student Manual - FINAL | 1WnWQkR41GmmBAT58ikPsGoGreLCIjrc0k7XuX_VOq4k | Google Doc | 02-CURRICULUM/Module-06 | Migrated; repository content present; DRAFT_COMPLETE pending verification |
| Elite Dispatcher Academy — Module 04 Instructor Answer Guide — FINAL | 1nFCKMnOBghuU8ll34eSAeistLAcWOeVexq40ZVT2v7g | Google Doc | 03-ASSESSMENTS/Instructor-Answer-Guides/Module-04.md | Migrated and contamination-checked; clean normalized repository copy present; DRAFT_COMPLETE pending verification |
| Elite Dispatcher Academy - Module 06 Instructor Answer Guide - FINAL | 1CrpiyDv2mSTlYLhAPELr08_bq8i5tEovfwGeHZ4_yHA | Google Doc | 03-ASSESSMENTS/Instructor-Answer-Guides/Module-06.md | Migrated and contamination-checked; AI coordination metadata excluded from repository copy; DRAFT_COMPLETE pending verification |

## Confirmed Architecture / Production Sources

| Drive File | Drive ID | Type | Target Area | Migration State |
|---|---|---|---|---|
| EAOS Master Production Control — Elite Dispatcher Academy | 1oaaLyatLpqTWp4WN4MGLaSVgogzTqPeJilCcfH7m6HE | Google Sheet | 00-PROJECT-CONTROL / EAOS | Located; detailed audit pending |
| ARCH-001 — Master Academy Architect — Elite Dispatcher Academy | 1OKlUUCEYeVYyHLHA3bSqWjeEl-J1_uOIOWagxgsGWWc | Google Doc | 07-EAOS / 10-PRODUCTION | Located; audit pending |
| JTA-PILOT-001 — Professional Dispatcher Load Evaluation | 1LNgtqOFkSf0EP5iIFFhc52aTTZk9Afv4dTzwi8Qifh8 | Google Doc | 05-SIMULATIONS-AND-GAMES / curriculum analysis | Located; audit pending |
| PR-GPT-002 — Dispatcher Occupational Analyst Configuration Prompt | 1TXKLa9SPsLdGDYrWOXuwfWJW0wGMsNDVLhJ9Ji9Eq8s | Google Doc | 10-PRODUCTION | Located; audit pending |

## Migration Rule
A Drive filename containing FINAL is evidence of the source's prior production state, not automatic evidence that it satisfies the current GitHub repository acceptance criteria. Each source must be mapped, checked for duplicates and superseded versions, and verified before PUBLICATION_READY status.

## Reconciliation Note — 2026-08-18

Repository inspection confirmed that student manuals for Modules 01–06 and instructor answer guides for Modules 01–06 are present. Module 04 and Module 06 instructor-guide repository copies were compared with their identified Drive sources. The repository copies preserve instructional content in normalized Markdown; the Module 06 copy intentionally excludes AI coordination metadata that does not belong in the controlled instructor asset. Presence in the repository does not satisfy the PUBLICATION_READY gate.
