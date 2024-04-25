const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3xapbw',
  defaultCommandTimeout: 6000,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    videoOnFailOnly:true,
    embeddedScreenshots: true,
    },
      e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
