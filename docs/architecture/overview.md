# Architecture Overview — CODSOFT Projects

## Structural Overview
The CODSOFT repository is partitioned by internship curriculum levels.

```mermaid
flowchart TD
    Root[CODSOFT Root] --> L1[Level 1 Tasks]
    Root --> L2[Level 2 Tasks]
    L1 --> T1[Task 1: Portfolio]
    L1 --> T2[Task 2: Landing Page]
    L1 --> T3[Task 3: Calculator]
    L2 --> Quiz[Online Quiz App: React SPA]
    Quiz --> QState[Question Bank & User Score State]
```

## Architectural Highlights
- **Level 1 (Vanilla Web)**: Employs modular CSS and event-driven JavaScript DOM manipulation. The calculator implements an arithmetic evaluation state machine.
- **Level 2 Task 3 (React Quiz App)**: Implements component state architecture (`useState`) to cycle through quiz questions, evaluate submitted answers, update current scores, and render summary feedback upon completion.
