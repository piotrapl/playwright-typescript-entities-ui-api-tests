import { Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { ApiResponse } from '../types/api.types';

export class RegonPage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto(ENV.baseUrl);
  }

  async searchRegon(regon: string): Promise<ApiResponse> {

    await this.page.locator('#txtRegon').fill(regon);

    const responsePromise = this.page.waitForResponse(
      response =>
        response.url().includes('daneSzukaj') &&
        response.request().method() === 'POST'
    );

    await this.page.locator('#btnSzukaj').click();

    const response = await responsePromise;

    const body = await response.json();

    return {
      status: response.status(),
      body
    };

  }

}