import { defineConfig } from '@playwright/test';
import { ENV } from './utils/env';

export default defineConfig({

  testDir: './tests',

  use: {

    baseURL: ENV.baseUrl,

    browserName: 'chromium',

    headless: true,

    screenshot: 'on',

    trace: 'on',

    video: 'off',

    contextOptions: {
      recordHar: {
        path: 'artifacts/network.har'
      }
    }

  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  outputDir: 'artifacts'

});