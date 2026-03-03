import { test, expect } from '../../fixtures/test-fixtures';

test.describe('REGON Smoke', () => {

  test('basic search flow returns response', async ({ regonFlow }) => {
    const response = await regonFlow('123456785');
    expect(response.status()).toBeLessThan(500);
  });

});