const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // defaultCommandTimeout: 10000,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        }
        
    }
});

// module.exports= (on,congig)=>{
//   require('cypress-grep/src/plugin')(congig)
// }