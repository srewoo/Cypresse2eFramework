/*
 * Test Suite for CallAi Platform
 */
import Admin from '../PageObjectModel/Admin-analyticsConfiguration'

describe('CallAi-Admin- Analytics configuration', () => {
  const admin = new Admin()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Change fisical month
  it('Change fisical month', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    admin.adminTab().click()

    // click on analytics tab
    admin.analyticsConfigTab().should('be.visible').click()

    admin
      .dropDown()
      .click()
      .invoke('show')
      .each(($el, index, $list) => {
        if ($el.text() === 'May') {
          cy.contains('March').click()
        } else {
          cy.contains('May').click()
        }
      })
    admin.save().should('be.visible').click()
    admin.toastMsg().should('be.visible')
    admin
      .toastMsg()
      .invoke('text')
      .should('eq', 'Configuration saved successfully')
    admin.save().should('not.exist')
  })

  // Set Winning Behaviour
  it('Set Winning Behaviour', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    admin.adminTab().click()

    admin.analyticsConfigTab().click()

    // cy.matchImageSnapshot({ignoreExtraFields: true});

    admin.repNamesBox().click({ force: true })

    cy.get('.react-tags__selected')
      .find('.tagText')
      .each(($el, index, $list) => {
        const repName = $el.text()

        if (repName === 'sharaj_rep') {
          admin.repNamesBox().type('{backspace}')
          admin.save().should('be.visible').click()
        }
      })
    admin.repNamesBox().type('sharaj_rep', { delay: 1000 }).type('{enter}')
    admin.cancel().should('be.visible')
    admin.save().should('be.visible').click()
    admin.save().should('not.exist')
    admin.toastMsg().should('be.visible')
    admin
      .toastMsg()
      .invoke('text')
      .should('eq', 'Configuration saved successfully')
  })
})
