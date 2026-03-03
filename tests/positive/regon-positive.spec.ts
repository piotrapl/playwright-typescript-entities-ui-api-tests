import { test } from '../../fixtures/test-fixtures';
import { assertValidRegon } from '../../assertions/regon.assert';
import { validRegons } from '../../data/valid-regons';

test.describe('REGON Micro E2E - Positive', () => {

  for (const regon of validRegons) {

    test(`should return company data for REGON: "${regon}"`, async ({ page, regonFlow }) => {
      const response = await regonFlow(regon);
      await assertValidRegon(page, response);
    });

  }

});