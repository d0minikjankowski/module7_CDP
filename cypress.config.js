const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
    baseUrl: 'https://simpletestsite.fabrykatestow.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
