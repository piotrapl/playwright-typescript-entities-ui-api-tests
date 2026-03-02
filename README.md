# playwright-typescript-entities-ui-api-tests (v4.0)
Cross-Layer Micro E2E Architecture

## 🔎 Abstract (PL)

Projekt ma architekturę Micro E2E (UI + API), której celem jest walidacja spójności między warstwą frontend i backend w ramach jednego scenariusza testowego. Repozytorium realizuje separację warstw (Page Object, Flow, API, Assertions) oraz integrację z CI. Projekt realizuje walidację zachowania systemu jako całości.

---

# 1️⃣ Project Structure
```bash
regon-playwright/
│
├── tests/
│ ├── negative/
│ ├── positive/
│ └── smoke/
│
├── pages/
├── flows/
├── api/
├── assertions/
├── data/
├── fixtures/
├── utils/
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
```
### Layered Architecture

- **pages/** → UI interaction layer (Page Object Model)
- **api/** → Network-level handling
- **flows/** → Business scenario orchestration
- **assertions/** → Cross-layer validation
- **data/** → Test datasets
- **tests/** → Lightweight orchestration only

This separation keeps test logic clean, scalable, and maintainable.

---

# 2️⃣ Environment Requirements

- Node.js ≥ 18
- npm ≥ 9
- Playwright browsers installed

Optional:
- Linux / macOS / Windows
- GitHub Actions (for CI)

---

# 3️⃣ Running the Project

## Install dependencies

```bash
npm ci
Install Playwright browsers
npx playwright install --with-deps
Run all tests
npm test
Run specific groups
npm run test:negative
npm run test:positive
npm run test:smoke
Run per browser
npm run test:chromium
npm run test:firefox
View HTML report
npm run report
```
# 4️⃣ Test Scenarios
## Negative Scenarios

Too short REGON

Invalid checksum

Non-numeric input

Empty input

Validation covers:

HTTP status (400)

API error structure

UI error message visibility

Consistency between backend response and frontend display

## Positive Scenarios

Valid REGON number

Proper company data returned

UI renders backend-provided company name

Validation covers:

HTTP status (200)

Response body correctness

UI rendering matches API response

## Smoke Test

Basic search flow

# 5️⃣ Micro E2E (UI + API Consistency) — What It Is

Micro E2E is a focused end-to-end validation approach where:

A real UI interaction triggers backend communication

The actual network response is intercepted

Backend payload is validated

UI state is validated

Cross-layer consistency is asserted

Instead of testing:

Only UI or only API

we validate:

User Action → Network Call → Backend Response → UI Rendering → Consistency Check

This reduces false positives and ensures frontend and backend remain synchronized.

# 6️⃣ CI Integration

GitHub Actions workflow:

.github/workflows/cross-layer-e2e.yml
Features:

Multi-browser matrix (Chromium + Firefox)

Parallel execution

HTML report artifacts upload

Triggered on push and pull request

Isolated CI badge group

This project has its own CI group:

Cross-Layer E2E Validation

# 7️⃣ Playwright Features Deployed Here
### page.waitForResponse()

Intercepts real network request triggered by UI.

Ensures we validate actual backend communication — not synthetic API calls.

### Playwright Test Runner (Projects + Matrix)

Multiple browser projects

Parallel execution

Structured test grouping

### Built-in Assertions with Auto-Waiting

Using expect() with:

Auto retry

DOM synchronization

Structured payload validation (toMatchObject)

# 8️⃣ Future Improvements

Introduce API schema validation (e.g. JSON schema)

Add contract validation layer

Add environment matrix (dev / stage)

Add performance timing assertions

Introduce custom Playwright fixtures

Add Docker-based execution

Extend to full E2E flow (multi-step user journey)

# Purpose of this project

### This repository is designed to demonstrate:

Layered test architecture

Cross-layer validation strategy

Clean separation of concerns

CI-ready automation structure

Scalable Micro E2E approach