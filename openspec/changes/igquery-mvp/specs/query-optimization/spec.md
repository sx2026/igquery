## ADDED Requirements

### Requirement: Generate optimized queries based on input
The system must interact with standard prompts to generate 4 groups of queries.

#### Scenario: User submits seed keyword
- **WHEN** the user submits "vintage watches"
- **THEN** the API returns exactly 4 groups of structured JSON data (Core, Long-tail, Goal-based, Recency-Oriented).

#### Scenario: User changes search goal
- **WHEN** the user selects "Local Discovery"
- **THEN** the returned queries must heavily incorporate the local context.
