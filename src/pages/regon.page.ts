import { Page, Locator } from '@playwright/test';

export class RegonPage {
  readonly page: Page;
  readonly regonInput: Locator;
  readonly searchButton: Locator;
  readonly messageField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.regonInput = page.locator('#txtRegon');
    this.searchButton = page.locator('#btnSzukaj');
    this.messageField = page.locator('#divInfoKomunikat');
  }

  async goto() {
    await this.page.goto('/appBIR/index.aspx');
  }

  async searchByRegon(regon: string) {
    await this.regonInput.fill(regon);
    await this.searchButton.click();
  }

  async getMessageText(): Promise<string> {
    return await this.messageField.innerText();
  }
}