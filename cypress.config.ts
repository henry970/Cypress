import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl :"http://uitestingplayground.com/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env:{
      demoVar:"Hello from the cypress.config.ts"
    },
    
    // pageLoadTimeout: 6000,
  },
    pageLoadTimeout: 60000,
});
