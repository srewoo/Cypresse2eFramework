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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import Login from '../integration/PageObjectModel/Login'

// Screenshot testing
const login = new Login()

Cypress.Commands.add('login', (user) => {
  cy.viewport(2560, 1600)
  cy.visit('https://pathshala.staging.callai.mindtickle.com/')
  login.emailBox().type(user.email)
  login.passwordBox().type(user.password)
  login.signInButton().should('be.enabled').click()
})

addMatchImageSnapshotCommand()
