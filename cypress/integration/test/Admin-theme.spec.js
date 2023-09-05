/*
 * Test Suite for CallAi Platform
 */
/// <reference types="Cypress" />

import AdminTheme from '../PageObjectModel/Admin-Theme'

describe('CallAi-Admin-Theme', () => {
  const adminTheme = new AdminTheme()

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

  const themeName = `Theme007${randonVal}`

  // Search a non existing theme
  it('Search a non existing theme', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminTheme.adminTab().click()

    // click on analytics tab
    adminTheme.themeTab().should('be.visible').click()

    adminTheme.themeHeader().should('be.visible')

    adminTheme.searchTheme().should('be.visible')

    adminTheme.searchTheme().type(this.data.randomString)

    adminTheme
      .noResults()
      .should('be.visible')
      .should('contain.text', 'No Search Results Found!')
  })

  // Create a new theme
  it('Create a new theme', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminTheme.adminTab().click()

    adminTheme.themeTab().should('be.visible').click()

    adminTheme.themeHeader().should('be.visible')

    adminTheme.searchTheme().should('be.visible')

    adminTheme.addTheme().should('be.visible').click()

    adminTheme.addThemePopUp().should('be.visible')

    adminTheme.addThemeHeader().should('contain', 'Add Theme')

    adminTheme.themeName().type(themeName)

    adminTheme
      .themeDiscription()
      .type('This is theme discription in plain text format')

    adminTheme.themeTags().type('Hi').type('{enter}')
    adminTheme.themeTags().type('Hello').type('{enter}')
    adminTheme.themeTags().type('good bye').type('{enter}')

    adminTheme.cancelButton().should('be.visible')
    adminTheme.createTheme().should('be.visible').click()

    adminTheme.toastMessage().should('be.visible')

    adminTheme.searchTheme().type(themeName, { delay: 1000 })

    adminTheme.noResults().should('not.exist')

    adminTheme.themesPresent().should('be.visible')
  })

  // Add theme as key theme
  it('Add theme as key theme', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminTheme.adminTab().click()

    adminTheme.themeTab().should('be.visible').click()

    cy.wait(3000)

    adminTheme.themesPresent().each(($el, index, $list) => {
      const theme = $el.text()
      if (theme === themeName) {
        adminTheme.keyTheme().eq(index).click()
        /* expect(adminTheme.keyTheme().eq(index)).to.have.attr(
          'aria-checked',
          'true'
        ) */
      }
    })
    adminTheme.cancelButtonTeme().should('be.visible')
    adminTheme.saveButton().should('be.visible')

    adminTheme.saveButton().click()
  })

  // Verify key theme is reflected in Voice of market
  it('Verify key theme is reflected in Voice of market', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    adminTheme.managerTab().click()
    cy.wait(3000)

    adminTheme.sidebarMenu().each(($el, index, $list) => {
      if ($el.text() === 'Voice of Market') {
        $el.click()
      }
    })
    cy.wait(3000)

    adminTheme.keyThemeVoM().each(($el, index, $list) => {
      if ($el.text() === `Most Talked About in '${themeName}'`) {
        console.log('pass')
      }
    })
  })

  // Delete theme
  it('Delete theme', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminTheme.adminTab().click()

    adminTheme.themeTab().should('be.visible').click()

    cy.wait(3000)

    adminTheme.themesPresent().each(($el, index, $list) => {
      const theme = $el.text()
      if (theme === themeName) {
        adminTheme.deleteTheme().eq(index).click({ force: true })
      }
    })

    adminTheme.deleteButton().click()

    adminTheme
      .toastMessage()
      .should('be.visible')
      .should('contain.text', 'Successfully deleted theme')
  })
})
