## playwright-typescript-entities-ui-api-tests

![CI](https://github.com/piotrapl/playwright-typescript-entities-ui-api-tests/actions/workflows/cross-layer-e2e.yml/badge.svg)
## Result of running tests in CI environment:
[![CI]([https://github.com/piotrapl/cypress-javascript-wyszukiwanie-podmiotow-gui-tests](https://github.com/piotrapl/playwright-typescript-entities-ui-api-tests)/actions/workflows/cypress.yml/badge.svg)](https://github.com/piotrapl/cypress-javascript-wyszukiwanie-podmiotow-gui-tests/actions)

[![CI](https://github.com/piotrapl/playwright-typescript-entities-ui-api-tests/actions/workflows/cross-layer-e2e.yml/badge.svg)](https://github.com/piotrapl/playwright-typescript-entities-ui-api-tests)/actions)

Example Playwright project demonstrating **Cross-Layer End-to-End testing**.

The test verifies consistency between:

- UI message displayed after REGON search
- backend API response triggered by the UI

Data-driven test cases:

162537906  
664408741

Expected behavior:

API → {"d":""}

UI → message containing:  
"Nie znaleziono podmiotu"

The test passes only if **UI message and API response confirm the same system state**.

## Run locally

```bash
npm install
npx playwright install
npm test
