/*
 * Test Suite for CallAi Platform
 */

import Login from '../PageObjectModel/Login'

describe('CallAi-Login Page- ', () => {
  const login = new Login()

  // Import fixture file
  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  // Return false on Failure
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Verify login page components
  it('Verify login page components', function () {
    cy.viewport(2560, 1600)
    cy.visit(this.data.stagingPathshala) // .toMatchImageSnapshot()

    login.pageHeader().should('be.visible')
    login.pageHeader().should('have.text', 'MindTickle Pathshala')
    login.pageHeader().should('have.css', 'font-size', '14px')
    login
      .pageHeader()
      .should('have.css', 'font-family', '"Open Sans", sans-serif')
    login.signInComponents().toMatchImageSnapshot()
  })

  // Login to application with correct credentials
  it('Login to application with correct credentials', function () {
    cy.visit(this.data.stagingPathshala)

    login.emailBox().type(this.data.email)
    login.passwordBox().type(this.data.password)
    login.signInButton().should('be.enabled').click()

    cy.title().should('eq', 'Recordings')
  })

  // Login to application with incorrect password
  it('Login to application with incorrect password', function () {
    cy.visit(this.data.stagingPathshala)

    login.emailBox().type(this.data.email)
    login.passwordBox().type(this.data.wrongPassword)
    login.signInButton().should('be.enabled').click()
    login.passwordError().should('be.visible')
    login
      .passwordError()
      .should('have.text', 'Password is incorrect')
      .toMatchImageSnapshot()
  })

  // Login to application with incorrect email format
  it('Login to application with incorrect email format', function () {
    cy.visit(this.data.stagingPathshala)

    login.emailBox().type(this.data.emailWrong)
    login.emailBox().type(this.data.password)
    login.emailError().should('be.visible')
    login
      .emailError()
      .should('have.text', 'Email is invalid')
      .toMatchImageSnapshot()
  })

  // Verify mandatory components message
  it('Verify mandatory components message', function () {
    cy.visit(this.data.stagingPathshala)

    login.signInButton().should('be.enabled').click()

    login
      .passwordMandatory()
      .should('be.visible')
      .should('contain.text', 'Required')

    login
      .emailMandatory()
      .should('be.visible')
      .should('contain.text', 'Required')

    login.signInComponents().toMatchImageSnapshot()
  })

  // Verify error message for unresigtered email
  it('Verify error message for unresigtered email', function () {
    cy.visit(this.data.stagingPathshala)

    login.emailBox().type(this.data.unRegisteredEmail)
    login.passwordBox().type(this.data.password)
    login.signInButton().should('be.enabled').click()

    login
      .unregisteredToast()
      .should('be.visible')
      .should(
        'contain.text',
        'Your password is not set. Please set your password by clicking the link on the invitation mail or contact your admin.'
      )

    login.signInComponents().toMatchImageSnapshot()
  })

  // Verify error message for non existing email
  it('Verify error message for non existing email', function () {
    cy.visit(this.data.stagingPathshala)

    login.emailBox().type(this.data.nonExistingEmail)
    login.passwordBox().type(this.data.password)
    login.signInButton().should('be.enabled').click()

    login
      .passwordError()
      .should('be.visible')
      .should('contain.text', 'This email is not registered')

    login.signInComponents().toMatchImageSnapshot()
  })
})
