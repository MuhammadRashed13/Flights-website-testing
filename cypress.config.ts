import { defineConfig } from "cypress";

export default defineConfig({
  scrollBehavior: 'center',
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  retries: {
    openMode: 3,
    runMode: 3,
  },
  e2e: {
    baseUrl: 'https://airmalta.com/en',
  },
});
