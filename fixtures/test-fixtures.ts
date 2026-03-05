import { test as base } from '@playwright/test';
import { RegonPage } from '../pages/regon.page';
import { executeRegonFlow } from '../flows/regon.flow';

type RegonFixtures = {
  regonPage: RegonPage;
  regonFlow: (regon: string) => Promise<any>;
};

export const test = base.extend<RegonFixtures>({
  // Provide Page Object automatically
  regonPage: async ({ page }, use) => {
    const regonPage = new RegonPage(page);
    await use(regonPage);
  },

  // Provide flow wrapper automatically
  regonFlow: async ({ page }, use) => {
    const flow = async (regon: string) => {
      return await executeRegonFlow(page, regon);
    };

    await use(flow);
  }
});

export { expect } from '@playwright/test';