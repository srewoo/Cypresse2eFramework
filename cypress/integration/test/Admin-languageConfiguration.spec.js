/*
 * Test Suite for CallAi Platform
 */
import LanguageConfiguration from '../PageObjectModel/Admin-languageConfiguration'

describe('CallAi-Admin-languageConfiguration', () => {
  const languageConfiguration = new LanguageConfiguration()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Verify page components
  it('Verify page components', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    languageConfiguration.adminTab().click()

    languageConfiguration.languageConfigTab().should('be.visible').click()

    languageConfiguration
      .languageBox()
      .should('be.visible')
      .toMatchImageSnapshot()

    languageConfiguration.heading().should('be.visible').toMatchImageSnapshot()

    languageConfiguration
      .secondaryHeader()
      .should('be.visible')
      .toMatchImageSnapshot()

    languageConfiguration
      .addLanguage()
      .should('be.visible')
      .toMatchImageSnapshot()
  })

  // Remove all languages
  it('Remove all languages', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    languageConfiguration.adminTab().click()

    languageConfiguration.languageConfigTab().should('be.visible').click()

    languageConfiguration
      .langaugeBar()
      .eq(1)
      .trigger('mouseover', { force: true })
      .then(() => {
        expect(languageConfiguration.remove()).to.be.exist
      })

    languageConfiguration
      .remove()
      .invoke('show')
      .each(($el, index, $list) => {
        cy.log($el.text())

        $el.click()
      })

    languageConfiguration.addLanguage().toMatchImageSnapshot()

    languageConfiguration.cancelButton().should('be.visible')
    languageConfiguration.doneButton().should('be.enabled').click()

    languageConfiguration.doneButton().click({ force: true })

    languageConfiguration
      .toastMessage()
      .should('be.visible')
      .should('contain.text', 'Languages were removed')
  })

  // Add all languages
  it('Add all languages', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    languageConfiguration.adminTab().click()

    languageConfiguration.languageConfigTab().should('be.visible').click()

    languageConfiguration.addLanguage().click()

    languageConfiguration
      .languageList()
      .should('be.visible')
      .toMatchImageSnapshot()

    languageConfiguration.languageCheckBox().each(($el, index, $list) => {
      $el.click()
    })

    languageConfiguration.doneButton().should('be.enabled').click()

    languageConfiguration.doneButton().click()

    languageConfiguration
      .toastMessage()
      .should('be.visible')
      .should('contain.text', 'Languages were added')
  })
})
