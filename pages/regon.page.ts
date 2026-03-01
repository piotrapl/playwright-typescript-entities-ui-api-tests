import { Page, Locator } from '@playwright/test';

export class RegonPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async fillRegon(value: string) {
    await this.page.getByPlaceholder('Enter REGON').fill(value);
  }

  async clickSearch() {
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  getErrorMessage(message: string): Locator {
    return this.page.getByText(message);
  }

  getCompanyName(): Locator {
    return this.page.getByTestId('company-name');
  }
}