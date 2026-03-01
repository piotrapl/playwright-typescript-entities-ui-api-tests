import { Page } from '@playwright/test';
import { RegonPage } from '../pages/regon.page';
import { waitForRegonResponse } from '../api/regon.api';

export async function executeRegonFlow(
  page: Page,
  regon: string
) {
  const regonPage = new RegonPage(page);

  await regonPage.open();
  await regonPage.fillRegon(regon);

  const responsePromise = waitForRegonResponse(page);

  await regonPage.clickSearch();

  return await responsePromise;
}