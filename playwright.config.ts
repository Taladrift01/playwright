import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
    headless: true,
    baseURL: 'https://automationintesting.online/', // Default base URL for your tests
    screenshot: 'on', // Capture screenshots on failure
    video: 'retain-on-failure', // Record videos for debugging
  },
  reporter: [['html', { open: 'never' }]], // HTML report
});


