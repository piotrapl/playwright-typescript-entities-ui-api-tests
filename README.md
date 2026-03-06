# regon-playwright v5.2

Example Playwright project demonstrating **Cross-Layer End-to-End testing**.

The test verifies consistency between:

- UI message after REGON search
- backend API response triggered by the UI

Data-driven test cases:

162537906  
664408741

Expected behavior:

API → {"d":""}  
UI → "Nie znaleziono podmiotu"

Test passes only if both layers confirm the same system state.
Final Test Execution

Playwright will run 2 scenarios automatically:

REGON negative search: 162537906
REGON negative search: 664408741

Both verify:

UI message
      ⇅
API response