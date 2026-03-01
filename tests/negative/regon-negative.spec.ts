import { test } from '@playwright/test';
import { executeRegonFlow } from '../../flows/regon.flow';
import { assertInvalidRegon } from '../../assertions/regon.assert';
import { invalidRegons } from '../../data/invalid-regons';

test.describe('REGON Micro E2E - Negative', () => {
  for (const regon of invalidRegons) {
    test(`Invalid REGON: "${regon}"`, async ({ page }) => {
      const response = await executeRegonFlow(page, regon);
      await assertInvalidRegon(page, response);
    });
  }
});