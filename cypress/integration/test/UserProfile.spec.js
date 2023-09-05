/*
 * Test Suite for CallAi Platform
 */
/// <reference types="Cypress" />

import UserProfile from '../PageObjectModel/UserProfile'

const chai = require('chai')

const { expect } = chai // Using Expect style

describe('CallAi-User Profile', () => {
  const userProfile = new UserProfile()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Verify user profile
  it('Verify user profile components', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    userProfile.profileIcon().should('be.visible').click()

    userProfile.myProfile().should('contain.text', 'My Profile')

    userProfile.profileIcon().should('be.visible')

    userProfile
      .integrationHeder()
      .should('be.visible')
      .should('contain.text', 'Integrations')

    userProfile
      .manageMeetings()
      .should('be.visible')
      .should('contain.text', 'Manage Upcoming Meetings')

    userProfile.name().should('contain.text', 'Name')
    userProfile.nameValue().should('not.be.empty')

    userProfile.email().should('contain.text', 'Email')
    userProfile.emailValue().should('not.be.empty')
  })

  // Logout user
  it('Logout user', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    userProfile.profileIcon().should('be.visible').click()

    cy.url().should('contain', '/profile')

    userProfile.profileIcon().should('be.visible').click()

    userProfile.logout().should('be.enabled').click()

    cy.url().should('contain', '/login')
  })

  // change password of a user
  it.skip('change password of a user', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    userProfile.profileIcon().should('be.visible').click()

    userProfile.changePassword().should('be.enabled').click()

    userProfile.changePasswordHeder().should('contain.text', 'Change Password')

    userProfile.oldPassword().type(this.data.password)
    userProfile.newPassword().type(this.data.newPassword)
    userProfile.confirmPassword().type(this.data.newPassword)

    userProfile.cancelBtn().should('be.enabled')
    userProfile.changePasswordBtn().should('be.enabled').click()
    userProfile
      .toastMsg()
      .should('be.called')
      .should('contain.text', 'password change')
    // cy.wait(10000);

    userProfile
      .toastMsg()
      .should('be.called')
      .should('contain.text', 'password change')

    // restore old password
    userProfile.oldPassword().clear().type(this.data.newPassword)
    userProfile.newPassword().clear().type(this.data.password)
    userProfile.confirmPassword().clear().type(this.data.password)
    userProfile.changePasswordBtn().click()

    // userProfile.toastMsg().should('be.called').should('contain.text','password change')
  })

  // Manage up comming meetings
  it('Manage up comming meetings', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    userProfile.profileIcon().should('be.visible').click()

    userProfile.manageMeetings().click()

    cy.url().should('contain', '/my-upcoming-meetings')

    userProfile.manageMeetingHeder().should('contain.text', 'Upcoming Meetings')

    cy.wait(2000)

    // userProfile.meetingCount().should('have.length', 'greaterThan', '10')
    userProfile.meetingCount().then((val) => {
      const meetCount = val.length

      expect(meetCount).to.be.greaterThan(1)

      expect(meetCount).not.to.be.NaN
    })

    userProfile.disableRecording().eq(1).should('be.enabled')

    userProfile.disableRecording().eq(1).click()

    userProfile.popUpDisableRec().should('be.visible')

    userProfile
      .popUpHeder()
      .should('be.visible')
      .should('contain.text', 'Are you sure')

    userProfile
      .popUpBody()
      .should('be.visible')
      .should('contain.text', 'it before the meeting ends.')

    userProfile.cancelBtn().should('be.visible')

    userProfile.charLeft().should('contain.text', '200')

    userProfile.popUpInput().should('be.enabled').type('Not Required')

    userProfile.charLeft().should('not.contain.text', '200')

    userProfile.disableButton().click({ force: true })

    userProfile.toastMsg().should('be.visible')

    // restore meeting status
    userProfile.disableRecording().eq(1).click({ force: true })
    userProfile.enable().click({ force: true })
  })
})
