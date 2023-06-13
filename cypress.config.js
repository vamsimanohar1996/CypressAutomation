const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 8000,
  projectId: "8maurh",
  retries: {

    runMode: 0,
 
  },
  env:
  {
   url : "https://rahulshettyacademy.com/angularpractice/",

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/examples/*.js'

  },

  
});
