import { Page, APIResponse, expect } from '@playwright/test';

export async function assertInvalidRegon(
  page: Page,
  response: APIResponse
) {
  expect(response.status()).toBe(400);

  const body = await response.json();

  expect(body).toMatchObject({
    status: 400
  });

  await expect(page.getByText(body.error)).toBeVisible();
}

export async function assertValidRegon(
  page: Page,
  response: APIResponse
) {
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.name).toBeTruthy();

  await expect(page.getByTestId('company-name'))
    .toHaveText(body.name);
}