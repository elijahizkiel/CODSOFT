# Getting Started with CODSOFT Projects

## 1. System Prerequisites
- **Web Browser**: Chrome, Firefox, Safari, or Edge.
- **Node.js & npm** (Required specifically for Level 2 Task 3 Quiz App): Node >= 16.x.
- **Git**.

## 2. Repository File Layout
```
CODSOFT/
├── Level-1-Tasks/
│   ├── Task-1/              # Portfolio Website
│   ├── Task-2/              # Landing Page
│   └── Task-3/              # Calculator Web App
├── Level-2-Tasks/
│   └── online-quiz-app/     # React SPA Quiz Application
├── docs/                    # Technical documentation
└── README.md
```

## 3. Running Static Tasks (Level 1)
To view Level 1 tasks, open their respective `index.html` files directly in a browser or serve them:
```bash
cd Level-1-Tasks/Task-3
python3 -m http.server 8080
```

## 4. Running the Level 2 React Quiz App
```bash
cd Level-2-Tasks/online-quiz-app
npm install
npm start
```
The React development server will start at `http://localhost:3000`.

## 5. Troubleshooting
- **Missing Quiz Dependencies**: Run `npm install` inside `Level-2-Tasks/online-quiz-app` before running `npm start`.
- **Path References**: Ensure relative CSS/JS paths match task directory hierarchies.

## 6. Navigation Links
- [Architecture Overview](architecture/overview.md)
- [Database & State](architecture/database.md)
- [Production Deployment](deployment/production.md)
