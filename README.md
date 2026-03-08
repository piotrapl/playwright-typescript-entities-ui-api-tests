# regon-playwright

![CI](https://github.com/YOUR_USERNAME/playwright-typescript-entities-ui-api-tests/actions/workflows/cross-layer-e2e.yml/badge.svg)

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