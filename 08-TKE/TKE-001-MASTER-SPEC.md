# TKE-001 — Transportation Knowledge Engine Master Specification

## Purpose
The Transportation Knowledge Engine (TKE) is the long-term structured knowledge layer behind the Elite Dispatcher Academy and future transportation products.

## Strategic Role
TKE is not merely a document library. It is intended to normalize transportation-domain knowledge so facts, terminology, regulations, workflows, dependencies, source evidence, assessments, simulations, and software can reference the same underlying concepts.

## Core Capabilities

### Knowledge Registry
Maintain structured transportation concepts, definitions, operational rules, practices, calculations, documents, roles, entities, and relationships.

### Source Registry
Track authoritative and supporting sources, provenance, jurisdiction, publication/update dates, retrieval dates, and confidence/review status.

### Fact Registry
Store material claims separately from narrative curriculum so they can be verified, reused, updated, and traced to sources.

### Regulatory Update Layer
Track time-sensitive legal, regulatory, filing, authority, insurance, safety, HOS, ELD, medical-certification, and other compliance-related information with effective/as-of dates and reverification status.

### Terminology System
Provide controlled definitions, aliases, context-specific meanings, and disallowed/misleading uses across all products.

### Dependency Graph
Represent instructional, operational, factual, and software dependencies between concepts and assets.

### Manifest System
Maintain a scalable inventory of curriculum assets, assessments, tools, simulations, software components, dashboards, databases, source records, and future product artifacts.

### Retrieval and Reuse
Enable future applications to retrieve verified knowledge by topic, role, task, module, jurisdiction, equipment type, workflow stage, or dependency.

## Design Principles
1. Evidence before assertion.
2. Separate stable knowledge from date-sensitive knowledge.
3. Preserve source provenance and review history.
4. Use stable IDs for reusable entities.
5. Avoid duplicating the same fact independently across many modules when one controlled source record can serve them.
6. Make uncertainty and unresolved conflicts visible.
7. Support both human-readable documentation and machine-readable representations.
8. Allow incremental implementation; the course may operate before the complete TKE software stack exists.

## Initial Data Families
- terms and definitions
- roles and entities
- equipment and freight concepts
- operational workflows
- calculations and formulas
- documents and records
- business practices
- regulations and compliance records
- risks and fraud indicators
- facts and claims
- sources
- learning objectives
- dependencies
- assessments
- simulations
- asset manifest records

## Relationship to EAOS
TKE supplies normalized transportation knowledge and evidence. EAOS governs how educational products use that knowledge to create curriculum, assessments, simulations, student experiences, QA, and publication releases.

## Relationship to the Dispatcher Academy
The dispatcher academy is the first commercial application and therefore the first major source of requirements, terminology, facts, workflows, dependencies, and reusable assets for TKE.

## Implementation Path
Phase 1 uses controlled Markdown registries and repository files. Phase 2 adds structured schemas and machine-readable manifests. Phase 3 adds retrieval/indexing services. Phase 4 integrates knowledge updates, application APIs, dashboards, and automated QA/update workflows.
