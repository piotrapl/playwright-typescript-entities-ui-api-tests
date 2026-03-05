import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    //baseURL: process.env.BASE_URL || 'http://localhost:3000',
    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } } //,
    //{ name: 'firefox', use: { browserName: 'firefox' } }
  ]
});