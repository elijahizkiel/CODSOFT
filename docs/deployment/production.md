# Production Deployment — CODSOFT Projects

## 1. Hosting Strategy
Each subproject can be independently deployed to static hosting platforms:
- **Level 1 Tasks**: Deploy via GitHub Pages by committing static HTML/CSS/JS files.
- **Level 2 Quiz App**: Compile static React build and deploy to Netlify, Vercel, or GitHub Pages.

## 2. Building the React Quiz App
```bash
cd Level-2-Tasks/online-quiz-app
npm install
npm run build
```
This generates the optimized production bundle in `Level-2-Tasks/online-quiz-app/build/`.

## 3. Static Server Example
```bash
npx serve -s Level-2-Tasks/online-quiz-app/build
```
