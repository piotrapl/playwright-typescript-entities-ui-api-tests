import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

import { RegonPage } from '../pages/regon.page';
import { RegonFlow } from '../flows/regon.flow';

type Fixtures = {
  regonFlow: RegonFlow;
};

export const test = base.extend<Fixtures>({
  regonFlow: async ({ page }, use) => {

    const regonPage = new RegonPage(page);
    const regonFlow = new RegonFlow(regonPage);

    await use(regonFlow);

  }
});

test.afterEach(async ({ page }, testInfo) => {

  const screenshot = await page.screenshot();

  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png'
  });

  await allure.attachment(
    'screenshot',
    screenshot,
    'image/png'
  );

});