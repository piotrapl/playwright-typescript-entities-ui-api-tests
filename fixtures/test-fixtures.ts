// "test-fixtures.ts" - konfiguracja i definicja fixture dla testów Playwright. 
// Fixture - obiekt tworzony przed każdym testem - używany do udostępniania 
// danych lub funkcji między testami. 
// fixture "regonFlow" - tworzony na podstawie klasy "RegonFlow" (która dzwiedziczy z kl. "RegonPage") 
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

// funkcja "afterEach - wykonywana po każdym teście,
// wykonuje zrzut ekranu i dołącza go do raportu testowego.

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