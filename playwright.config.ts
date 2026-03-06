import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  use: {

    browserName: 'chromium',

    headless: true,

    screenshot: 'on',

    trace: 'on',

    video: 'off',

    baseURL: 'https://wyszukiwarkaregon.stat.gov.pl',

    contextOptions: {
      recordHar: {
        path: 'artifacts/network.har'
      }
    }

  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  outputDir: 'artifacts'

});