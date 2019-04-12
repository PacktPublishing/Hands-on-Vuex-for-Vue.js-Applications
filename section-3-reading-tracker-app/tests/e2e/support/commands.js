// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import mockData from "../../mockData";
import { types as userActions } from "@/store/user/actions";

Cypress.Commands.add("navigate", path =>
  cy
    .window()
    .its("app.$router")
    .invoke("push", { path })
);

Cypress.Commands.add("getStore", () => cy.window().its("app.$store"));

Cypress.Commands.add("register", () => {
  cy.getStore().then(({ dispatch }) =>
    dispatch(userActions.REGISTER_USER, mockData.NEW_USER)
  );
});

Cypress.Commands.add("login", () => {
  cy.getStore().then(({ dispatch }) =>
    dispatch(userActions.LOGIN, mockData.NEW_USER)
  );
});
