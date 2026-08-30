# Academy Master Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete controlling master curriculum/product tree for Elite Dispatcher Academy without inventing unverified curriculum scope.

**Architecture:** A new `00-ACADEMY-MASTER/` control layer will map the Academy from student entry through module competency, simulations, capstone, production, and release. The master tree will point to live production assets rather than replacing them and will use status markers to expose gaps.

**Tech Stack:** Markdown, GitHub repository/version control.

**Spec:** `docs/superpowers/specs/2026-08-30-academy-master-architecture-design.md`

## Global Constraints
- No filler or artificial content-count limits.
- GitHub remains the curriculum/production source of truth.
- Do not invent unverified later-module titles/scopes.
- Professional language is a cumulative assessable competency.
- Use EXISTS / NEEDS UPGRADE / PLANNED / MISSING / RELEASE-LAYER status language.
- Trace competencies through TEACH → DEMONSTRATE → PRACTICE → ASSESS → SIMULATE → RECORD COMPETENCY.
- PASS does not equal PUBLICATION_READY.

---

### Task 1: Inventory live Academy structure
**Files:** Read repository curriculum, assessment, student-tool, simulation, production, and program-control paths.
- [ ] Inspect module directories and manifests.
- [ ] Identify verified module titles/scopes.
- [ ] Identify existing assessment/tool/simulation assets.
- [ ] Record uncertain later-module scope rather than guessing.

### Task 2: Create master control layer
**Files:** Create `00-ACADEMY-MASTER/README.md` and `00-ACADEMY-MASTER/MASTER-CURRICULUM-AND-PRODUCT-TREE.md`.
- [ ] Define status legend and governance.
- [ ] Map program foundations.
- [ ] Map verified Modules 01–15 at the deepest level supported by repository evidence.
- [ ] Map capstone/graduation and commercial/release layers.

### Task 3: Create professional-language architecture
**Files:** Create `MASTER-PROFESSIONAL-DICTIONARY.md`, `MASTER-ACRONYM-DICTIONARY.md`, `PROFESSIONAL-LANGUAGE-STANDARDS.md`.
- [ ] Define dictionary entry schema.
- [ ] Seed only verified/high-confidence foundational terms.
- [ ] Map cumulative module fluency and professional communication expectations.

### Task 4: Create competency/dependency controls
**Files:** Create `MASTER-COMPETENCY-MAP.md`, `PRODUCT-DEPENDENCY-MAP.md`, `ASSESSMENT-ARCHITECTURE.md`.
- [ ] Define competency IDs and evidence chain.
- [ ] Map taught/practiced/assessed/simulated/recorded relationships.
- [ ] Expose gaps instead of masking them.

### Task 5: Create simulation/capstone controls
**Files:** Create `SIMULATION-ARCHITECTURE.md`, `STUDENT-JOURNEY-MAP.md`.
- [ ] Map SIM-001 through SIM-015, preserving verified statuses.
- [ ] Mark unverified scopes honestly.
- [ ] Define capstone dependency on verified curriculum.

### Task 6: Create craftsmanship/release controls
**Files:** Create `REPUTATION-AND-CRAFTSMANSHIP-STANDARD.md`, `RELEASE-READINESS-MATRIX.md`.
- [ ] Encode accuracy/depth/language/usability/presentation/competency/commercial/craftsmanship standards.
- [ ] Define premium-depth gates and release-layer distinction.
- [ ] Establish future visual-branding/delivery integration placeholders as architecture categories, not implementation promises.

### Task 7: Verify master tree
- [ ] Cross-check every named module/simulation against live repository evidence.
- [ ] Check links/paths and status labels.
- [ ] Scan for invented claims, filler, TODO/TBD language, duplicated control definitions, and AI/process chatter.
- [ ] Record final architecture QA verdict without declaring publication readiness.