/*
 * Test Suite for CallAi Platform
 */

import AdminUsers from '../PageObjectModel/Admin-users'

const chai = require('chai')

const { expect } = chai // Using Expect style

describe('CallAi-Admin-Users', () => {
  const adminUsers = new AdminUsers()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  // Generate random number
  const randonVal = Math.floor(Math.random() * 9999999 + 1)

  const name = `Jhon${randonVal}Doe`

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Create a new user
  it('Create a new user', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminUsers.adminTab().click()

    // click on analytics tab
    adminUsers.usersTab().click()

    cy.wait(3000)

    adminUsers
      .userCount()
      .invoke('text')
      .then((val) => {
        const Count = val
        const userCount = parseInt(Count)
        cy.log(userCount)

        adminUsers.addUser().click().toMatchImageSnapshot()

        adminUsers.addUserPopUp().should('be.visible').toMatchImageSnapshot()

        adminUsers.fulllNameField().type(name)

        adminUsers.emailField().type(`${name}@gmail.com`)

        adminUsers.chooseManager().type('Sharaj rewoo', { delay: 1000 })
        adminUsers.selectManager().click()

        adminUsers.isAdmin().click()

        adminUsers.saveButton().should('be.enabled').click()

        if (cy.contains('Some Error Occurred')) {
          adminUsers.closePopUp().click()
        }

        cy.reload()

        cy.wait(3000)

        adminUsers.userCount().then((userCountUpdated) => {
          const Count1 = userCountUpdated.text()

          const userCount1 = parseInt(Count1)

          expect(userCount1).not.to.equal(userCount)
        })

        adminUsers.userCount().invoke('text').should('not.be.equal', userCount)
      })
  })

  // Edit existing user
  it('Edit existing user - remove admin', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminUsers.adminTab().click()

    adminUsers.usersTab().click()

    adminUsers.searchUser().type(name, { force: true })

    cy.wait(3000)

    adminUsers.searchResult().trigger('mouseover')

    adminUsers.editUserIcon().click({ force: true })

    adminUsers.isAdmin().click()

    adminUsers.saveButton().should('be.enabled').click()

    /* if(cy.contains('Some Error Occurred')){
            adminUsers.closePopUp().click()
        }
          */
  })

  // Deactivate above user
  it('Deactivate above user', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminUsers.adminTab().click()

    // click on analytics tab
    adminUsers.usersTab().click()

    adminUsers.searchUser().type(name, { delay: 1000 }, { force: true })

    cy.wait(3000)

    adminUsers.searchResult().trigger('mouseover')

    adminUsers
      .deleteUserIcon()
      .trigger('mouseover', { force: true })
      .then(() => {
        expect(adminUsers.deleteUserToolTip()).to.be.exist
      })

    adminUsers
      .deleteUserToolTip()
      .should('be.visible')
      .should('contain.text', 'Deactivate User')

    adminUsers.deleteUserIcon().click({ force: true })

    adminUsers
      .deactivatePopUpHeader()
      .should('be.visible')
      .toMatchImageSnapshot()

    adminUsers.deactivatePopUpBody().should('be.visible').toMatchImageSnapshot()

    adminUsers.deactivateButton().should('be.visible').toMatchImageSnapshot()

    adminUsers.cancelButton().should('be.visible').toMatchImageSnapshot()

    adminUsers.deactivateButton().click()

    adminUsers
      .toastMsg()
      .should('be.visible')
      .should('contain.text', 'User has been deactivated')

    adminUsers
      .userCount()
      .invoke('text')
      .then((val) => {
        const Count = val
        const userCount2 = parseInt(Count)
        cy.log(userCount2)
        expect(userCount2).not.to.equal(this.userCount)
      })
  })

  // Verify user cannot deactivate himself
  it('Verify user cannot deactivate himself', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    // go to admin tab
    adminUsers.adminTab().click()

    // click on analytics tab
    adminUsers.usersTab().click()

    adminUsers
      .searchUser()
      .type(this.data.email, { delay: 1000 }, { force: true })

    adminUsers.searchResult().trigger('mouseover')

    adminUsers
      .deleteUserIcon()
      .trigger('mouseover', { force: true })
      .then((res) => {
        // expect(adminUsers.deleteUserIcon()).to.haveOwnProperty('visibility','hidden')
        // expect(res).to.be.disabled
        // adminUsers.deleteUserIcon().click()
        // expect(res).to.have.css('visibility','hidden')
      })

    adminUsers
      .deleteUserToolTip()
      .should('be.visible')
      .should('contain.text', 'You cannot deactivate yourself')
  })

  // Verify deactivated user cannot login
  it('Verify deactivated user cannot login', function () {
    cy.login({
      email: this.data.email_deleted,
      password: this.data.deactivated_Password
    })

    cy.wait(2000)

    adminUsers
      .deactivatedError()
      .should('be.visible')
      .should(
        'contain.text',
        'Your account has been deactivated. Please contact your site administrator to reactivate your account.'
      )
      .toMatchImageSnapshot()
  })

  // Verify user page components
  it('Verify user page components', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    adminUsers.adminTab().click()

    adminUsers.usersTab().click()

    cy.wait(3000)

    adminUsers
      .totalUserText()
      .should('be.visible')
      .should('contain.text', 'Total Users')
      .toMatchImageSnapshot()

    adminUsers
      .calenderIntegrationText()
      .should('be.visible')
      .should('contain.text', 'With Calendar Integration')
      .toMatchImageSnapshot()

    adminUsers
      .nonCalenderIntegrationText()
      .should('be.visible')
      .should('contain.text', 'Without Calendar Integration')
      .toMatchImageSnapshot()

    adminUsers
      .emailUsers()
      .should('be.visible')
      .should('contain.text', 'Email these users')
      .should('have.css', 'appearance', 'button')
      .toMatchImageSnapshot()

    adminUsers.tableHeading().should('be.visible').toMatchImageSnapshot()
  })
})
