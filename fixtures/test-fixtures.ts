import { test as base } from '@playwright/test';

import { RegonPage } from '../pages/regon.page';
import { RegonFlow } from '../flows/regon.flow';

type Fixtures = {
  regonFlow: RegonFlow;
};

export const test = base.extend<Fixtures>({

  regonFlow: async ({ page }, use) => {

    const regonPage = new RegonPage(page);

    const regonFlow = new RegonFlow(
      regonPage
    );

    await use(regonFlow);

  }

});