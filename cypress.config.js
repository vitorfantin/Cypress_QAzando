const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // <- Serve para definir timeout dos testes para 10s , por padrão é 4s, essa linha nao vem por padrão. 
    baseUrl: "https://restful-booker.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
