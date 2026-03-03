import { test } from '../../fixtures/test-fixtures';
import { assertInvalidRegon } from '../../assertions/regon.assert';
import { invalidRegons } from '../../data/invalid-regons';

test.describe('REGON Micro E2E - Negative', () => {

  for (const regon of invalidRegons) {

    test(`should reject invalid REGON: "${regon}"`, async ({ page, regonFlow }) => {
      const response = await regonFlow(regon);
      await assertInvalidRegon(page, response);
    });

  }

});