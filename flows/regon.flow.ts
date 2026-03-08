import { RegonPage } from '../pages/regon.page';
import { RegonAssertions } from '../assertions/regon.assert';
import { test } from '@playwright/test';

export class RegonFlow {

  constructor(private regonPage: RegonPage) {}

  async searchRegonAndVerify(regon: string) {

    await test.step('Open REGON search page', async () => {
      await this.regonPage.open();
    });

    let apiResponse;

    await test.step('Search REGON and capture backend response', async () => {
      apiResponse = await this.regonPage.searchRegon(regon);
    });

    let uiMessage;

    await test.step('Capture UI message', async () => {
      uiMessage = await this.regonPage.captureMessage();
    });

    return new RegonAssertions(uiMessage!, apiResponse!);

  }

}