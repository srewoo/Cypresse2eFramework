/*
 * Test Suite for CallAi Platform
 */

/// <reference types="Cypress" />

import AdminLibrary from '../PageObjectModel/Admin-library'
// var chai = require('chai');

describe('CallAi-Admin-Library', () => {
  const adminLibrary = new AdminLibrary()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Generate random number
  const randonVal = Math.floor(Math.random() * 9999999 + 1)

  const libName = `library ${randonVal}`

  // Create a new library
  it('Create a new library', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminLibrary.adminTab().click()

    adminLibrary.libraryTab().click()

    adminLibrary.addLibraryButton().should('be.visible').click()

    adminLibrary.libraryPopUp().should('be.visible')
    adminLibrary.libraryHeader().should('be.visible')
    adminLibrary.createLibrary().should('not.be.enabled')

    adminLibrary.libraryName().type(libName)
    adminLibrary.libraryDiscription().type('This is a demo test library')

    adminLibrary.createLibrary().should('be.enabled').click({ force: true })

    adminLibrary
      .toastMsg()
      .should('be.visible')
      .should('contain.text', 'Successfully added a new library')
  })

  // Verify the library created above
  it('Verify the library created above', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminLibrary.adminTab().click()

    adminLibrary.libraryTab().click()
    adminLibrary
      .searchLibrary()
      .should('be.visible')
      .type(libName, { delay: 1000 })

    adminLibrary
      .libraryCount()
      .should('be.visible')
      .should('contain.text', libName)
  })
  // Verify no results message
  it('Verify no results message', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminLibrary.adminTab().click()

    adminLibrary.libraryTab().click()

    adminLibrary
      .searchLibrary()
      .should('be.visible')
      .type(this.data.randomString)

    adminLibrary.noresultsText().should('be.visible')
  })

  // Verify editing a library
  it('Verify editing a library', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminLibrary.adminTab().click()

    adminLibrary.libraryTab().click()

    adminLibrary
      .searchLibrary()
      .should('be.visible')
      .type(libName, { delay: 2000 }, { force: true })

    adminLibrary.searchResults().trigger('mouseover')

    adminLibrary.editLibIcon().click({ force: true })

    adminLibrary.libraryPopUp().should('be.visible')

    adminLibrary.libraryDiscription().clear().type('-Modified')

    adminLibrary.createLibrary().should('be.enabled').click()

    adminLibrary.toastMsg().should('be.visible')
  })

  // Verify deleting a library
  it('Verify deleting a library', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminLibrary.adminTab().click()

    adminLibrary.libraryTab().click()

    adminLibrary
      .searchLibrary()
      .should('be.visible')
      .type(libName, { delay: 2000 }, { force: true })

    adminLibrary
      .searchResults()
      .trigger('mouseover', { force: true })
      .then(() => {
        expect(adminLibrary.deleteIcon()).to.be.exist
      })

    adminLibrary.deleteIcon().click({ force: true })

    adminLibrary
      .confirmDelete()
      .should('be.visible')
      .should('contain.text', 'Are you sure you want to remove?')

    adminLibrary.deleteButton().click()

    adminLibrary
      .toastMsg()
      .should('be.visible')
      .should('contain.text', 'Successfully deleted library')
  })
})
