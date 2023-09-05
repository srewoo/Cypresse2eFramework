/// <reference types="Cypress" />

import RecordingsSearch from '../PageObjectModel/Recording-Search'

const chai = require('chai')

/*
 * Test Suite for CallAi Platform
 */
describe('CallAi-Recording-Search-', () => {
  const recordingsSearch = new RecordingsSearch()

  beforeEach(() => {
    cy.fixture('stagingData.json').then(function (data) {
      this.data = data
    })
  })

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => false) // returning false here prevents Cypress from failing the test
  })

  // Verify the recording search box
  it('Verify the recording search box', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch.searchBox().should('be.visible').toMatchImageSnapshot()
    recordingsSearch.searchText().should('contain.text', 'Search recordings')
  })

  // Verify recent search are present
  it('Verify recent search are present', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch.searchBox().click({ force: true })

    recordingsSearch.recentSearchDropDown().should('be.visible')

    recordingsSearch
      .recentSearchTitle()
      .should('contain.text', 'Recent Searches')

    recordingsSearch.removeIcons().invoke('show') // to be checked
    recordingsSearch
      .resentResults()
      .invoke('show')
      .each(($el, index, $list) => {
        cy.log($el.text())
      })
  })

  // Verify search results with 2 chars
  it('Verify search results with 2 chars', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch
      .searchBox()
      .click({ force: true })
      .type('aa', { delay: 2000 })
      .click()

    recordingsSearch
      .searchMessage()
      .should('be.visible')
      .should(
        'contain.text',
        'Minimum 3 characters are required for the results to appear.'
      )
  })

  // Verify search results dropdown
  it('Verify search results dropdown', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch
      .searchBox({ force: true })
      .click({ force: true })
      .type('sharaj rewoo', { force: true })
      .then(() => {
        cy.wait(2000)
        recordingsSearch.searchBox().click({ force: true })
      })

    recordingsSearch
      .searchAllRec()
      .should('be.visible')
      .should('contain.text', 'Search all recordings with')

    recordingsSearch
      .topResults()
      .should('be.visible')
      .should('contain.text', 'Top Results')

    recordingsSearch
      .showAllRes()
      .should('be.visible')
      .should('contain.text', 'Show All Results')
  })

  // Verify search results on clicking show all results
  it('Verify search results on clicking show all results', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch
      .searchBox()
      .click({ force: true })
      .type('Sharaj Rewoo', { force: true })
      .then(() => {
        recordingsSearch.searchBox().click({ force: true })

        recordingsSearch.showAllRes().click()
        cy.wait(3000)
      })

    cy.url().should('contain', '/recordings/search?searchQuery=Sharaj%20Rewoo')

    recordingsSearch.listRecordings().should('be.visible')

    recordingsSearch.filterResults().should('be.visible').toMatchImageSnapshot()
  })

  // Verify search results page components
  it('Verify search results page components ', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch
      .searchBox()
      .should('be.visible')
      .click({ force: true })
      .type('Sharaj Rewoo')
      .click()
      .type('{enter}')

    recordingsSearch.thumbnail().should('be.visible').should('have.length', 10)

    recordingsSearch
      .recordingTitle()
      .should('be.visible')
      .should('have.length', 10)

    recordingsSearch
      .matchString()
      .should('be.visible')
      .should('have.length', 10)

    recordingsSearch
      .participentList()
      .should('be.visible')
      .should('have.length', 10)

    recordingsSearch
      .recordingDate()
      .should('be.visible')
      .should('have.length', 10)

    // recordingsSearch.filterHeader().should('be.visible').should('have.length', 1)

    recordingsSearch.moreFilters().should('be.visible').should('have.length', 1)

    recordingsSearch.highlitedText().each(($el, index, $list) => {
      expect($el).to.have.css('background-color', 'rgb(228, 239, 251)')
    })
  })

  // Verify filters in search page
  it('Verify filters in search page', function () {
    cy.login({ email: this.data.email, password: this.data.password })

    recordingsSearch
      .searchBox()
      .click({ force: true })
      .type('Sharaj Rewoo')
      .type('{enter}')

    recordingsSearch
      .recordingTitle()
      .its('length')
      .as('totalCount')
      .then(function (data) {
        this.data = parseInt(data)

        cy.log(this.data)
      })

    recordingsSearch.meetingCheckBox().click({ force: true })

    cy.wait(3000)

    recordingsSearch
      .recordingTitle()
      .its('length')
      .as('totalCountNew')
      .then(function (data) {
        this.data = parseInt(data)

        cy.log(this.data)

        expect(this.totalCount).to.be.greaterThan(this.totalCountNew)
      })
  })
})
