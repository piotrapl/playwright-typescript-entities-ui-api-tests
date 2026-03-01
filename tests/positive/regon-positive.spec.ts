import { test } from '@playwright/test';
import { executeRegonFlow } from '../../flows/regon.flow';
import { assertValidRegon } from '../../assertions/regon.assert';
import { validRegons } from '../../data/valid-regons';

test.describe('REGON Micro E2E - Positive', () => {
  for (const regon of validRegons) {
    test(`Valid REGON: "${regon}"`, async ({ page }) => {
      const response = await executeRegonFlow(page, regon);
      await assertValidRegon(page, response);
    });
  }
});