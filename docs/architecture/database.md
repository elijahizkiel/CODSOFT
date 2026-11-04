# Database & State Management — CODSOFT Projects

## Database Overview
**This repository does not use an external database.**

## State Architecture by Task
1. **Level 1 Calculator (`Task-3`)**:
   - State held in JavaScript memory (`currentInput`, `previousInput`, `operation`).
2. **Level 2 Online Quiz App (`online-quiz-app`)**:
   - State managed via React hooks:
     | State Variable | Type | Description |
     |---|---|---|
     | `currentQuestion` | Number | Index of current question in question bank |
     | `score` | Number | User's accumulated correct answers |
     | `showScore` | Boolean | Toggles between quiz view and score summary |
     | `selectedOption` | String/Number | Tracks active user selection |
   - **Question Bank**: Embedded JSON/JavaScript data object containing questions, option arrays, and correct answer keys.
