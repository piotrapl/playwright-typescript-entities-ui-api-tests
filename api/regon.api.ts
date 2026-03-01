import { Page } from '@playwright/test';

export async function waitForRegonResponse(page: Page) {
  return page.waitForResponse(response =>
    response.url().includes('/api/regon') &&
    response.request().method() === 'GET'
  );
}