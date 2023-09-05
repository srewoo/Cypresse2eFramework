/// <reference types="Cypress" />

import Recordings from '../PageObjectModel/Recording-Recordings'

/*
 * Test Suite for CallAi Platform
 */
describe('CallAi-Recording- ', () => {
  const recordings = new Recordings()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Verify contents of Recordings page
  it('Verify contents of Recordings page', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordings
      .recordingHeader()
      .should('have.text', 'Recordings')
      .should('have.css', 'color', 'rgb(42, 46, 54)')

    /// /cy.wait(4000);

    recordings.filters().should('be.visible')
    recordings.moreFilters().should('be.visible')

    recordings.callScore().should('be.visible')
    recordings.sortBy().should('be.visible')
    // recordings.allThemes().should('be.visible')
  })

  // Verify that more fiter changes to less filter on clicking
  it.skip('Verify that more fiter changes to less filter on clicking', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // //cy.wait(3000);

    recordings.moreFilters().should('contain.text', 'More Filter')

    recordings.moreFilters().click()

    /// /cy.wait(3000);

    recordings.moreFilters().should('contain.text', 'Less Filter')
  })

  // Verify that Meeting count changes after applying theme filter
  it('Verify that Meeting count changes after applying theme filter', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordings.recordingTab().click()

    recordings.allRecordingsCount().then((val) => {
      const Count = val.te
      cy.log(Count)
    })
  })

  // Verify that delete recording is present and enabled for admin
  it('Verify that delete recording is present and enabled for admin ', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    /// /cy.wait(8000);

    recordings.ellipsis().then((res) => {
      res.trigger('mouseover').click()
    })

    recordings
      .deleteIcon()
      .should('be.visible')
      .should('contain.text', 'Delete')
    // .toMatchImageSnapshot()
  })
  // Verify that delete recording is not present and enabled for users
  it('Verify that delete recording is not present and enabled for users', function () {
    cy.login({ email: this.data.email_user, password: this.data.password })

    recordings.doItLaterButton().then((res) => {
      res.click()
    })

    recordings.allRecTab().click()

    recordings.ellipsis().then((res) => {
      res.trigger('mouseover').click()
    })

    recordings
      .deleteIcon()
      .should('be.visible')
      .should('contain.text', 'Delete')
      .should('not.be.enabled')
      .toMatchImageSnapshot()
  })

  // Verify tooltip is present in case of disabled delete button
  it('Verify tooltip is present in case of disabled delete button', function () {
    cy.login({ email: this.data.email_manager, password: this.data.password })

    recordings.doItLaterButton().then((res) => {
      res.click()
    })

    recordings.ellipsis().then((res) => {
      res.trigger('mouseover').click()
      cy.wait(3000)
      recordings.deleteIcon().click()
    })

    recordings.deleteIcon().click()

    recordings
      .deleteDisabledTooTip()
      .should('be.visible')
      .should(
        'contain.text',
        'Only Admins can delete the recordings. To delete this recording, contact one of its Admin.'
      )
  })

  // Verify that delete recording is present and disabled for managers
  it('Verify that delete recording is present and disabled for managers ', function () {
    cy.login({
      email: this.data.email_manager,
      password: this.data.password
    })

    recordings.doItLaterButton().then((res) => {
      res.click()
    })

    recordings.ellipsis().then((res) => {
      res.trigger('mouseover').click()
    })

    recordings
      .deleteIcon()
      .should('be.visible')
      .should('contain.text', 'Delete')
      .should('not.be.enabled')

    recordings.deleteIcon().click()

    recordings
      .deleteDisabledTooTip()
      .should('be.visible')
      .should(
        'contain.text',
        'Only Admins can delete the recordings. To delete this recording, contact one of its Admin.'
      )
  })

  // Verify confirmation pop up for recording deletion
  it('Verify confirmation pop up for recording deletion', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordings.ellipsis().then((res) => {
      res.trigger('mouseover').click()
    })

    recordings.deleteIcon().click()

    recordings.confirmationPopUp().should('be.visible').toMatchImageSnapshot()

    recordings.delete().should('be.visible')
    recordings.cancel().should('be.visible').click()
  })
})
