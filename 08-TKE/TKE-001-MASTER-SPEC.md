# TKE-001 — Transportation Knowledge Engine Master Specification

## Purpose
TKE is the structured transportation-domain knowledge layer underlying the Elite Dispatcher Academy and future transportation products. It separates reusable knowledge from any single course presentation.

## Primary Functions
Maintain controlled transportation terminology. Maintain fact and source records with provenance. Track regulatory and other time-sensitive knowledge. Represent relationships and dependencies between concepts. Supply verified knowledge to curriculum, assessments, simulations, software, and future products. Support a large asset/knowledge manifest without losing identity or lineage.

## Knowledge Record Principles
Every important record should have a stable identifier, record type, title/name, definition or claim, owning domain, source/provenance where applicable, effective/as-of information for time-sensitive records, status, dependencies/relationships, and version history.

## Initial Record Types
Term; Concept; Fact; Source; Regulation/Rule; Organization/Actor Type; Equipment Type; Freight Type; Document Type; Workflow; Calculation; Risk Signal; Scenario Rule; Learning Objective; Asset Reference; Dependency; Regulatory Update.

## Relationship Examples
A term may define a concept. A fact may be supported by one or more sources. A regulation may constrain a workflow. A calculation may support a decision. A risk signal may trigger a verification workflow. A learning objective may depend on several concepts. A curriculum asset may teach concepts while an assessment tests them and a simulation applies them.

## Separation of Concerns
TKE stores normalized knowledge and provenance. EAOS governs educational production and delivery. The Dispatcher Academy is a product built using both. This separation allows the same verified transportation knowledge to support later academies, tools, dashboards, simulations, and software.

## Manifest Direction
The large project manifest should eventually identify every meaningful curriculum, assessment, student-tool, simulation, software, data, dashboard, documentation, and knowledge asset. Manifest size is not itself a success metric; completeness, traceability, usability, and verification are.

## Update Model
Stable knowledge should not be rewritten merely because presentation changes. Date-sensitive knowledge must support reverification and supersession. Changes to a high-impact knowledge record should identify dependent assets requiring review.
