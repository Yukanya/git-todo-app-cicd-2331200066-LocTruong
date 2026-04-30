const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 240000, // Increase global timeout
  expect: {
    timeout: 5000
  },
  use: {
    headless: true, // Run tests without opening a visible browser window
    launchOptions: {
      slowMo: 50, // Slow down operations to see them more clearly if needed
    },
  },
});
