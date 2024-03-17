import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1201,
  viewportHeight: 800,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://www.nobl9.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
