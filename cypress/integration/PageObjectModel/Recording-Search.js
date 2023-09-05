class recordingsSearch {
  // recording tab
  searchBox() {
    return cy.get('#react-select-2-input')
  }

  // search box text
  searchText() {
    return cy.get('.search-placeholder-wrapper')
  }

  // searchicon
  searchIcon() {
    return cy.get('.icon.icon-search')
  }

  // mt-react-select__indicators
  // recent search div
  recentSearchDropDown() {
    return cy.get('.recent-searches-wrapper')
  }

  // recent search title
  recentSearchTitle() {
    return cy.get('.recent-title')
  }

  // remove icons
  removeIcons() {
    return cy.get('.remove-icon')
  }

  // recent text rsults
  resentResults() {
    return cy.get('.search-text')
  }

  // 3 chars message
  searchMessage() {
    return cy.get('.tip-text')
  }

  // search all recordings with
  searchAllRec() {
    return cy.contains('Search all recordings with')
  }

  // top results
  topResults() {
    return cy.get('.bottom')
  }

  // show all results
  showAllRes() {
    return cy.contains('Show All Results')
  }

  // list recordings
  listRecordings() {
    return cy.get('.list-recordings')
  }

  // filterResults
  filterResults() {
    return cy.get('.filter-wrapper')
  }

  // thumbnail
  thumbnail() {
    return cy.get('.placeholder-thumbnail')
  }

  // recording title
  recordingTitle() {
    return cy.get('.recording-title')
  }

  // match string
  matchString() {
    return cy.get('.matched-string')
  }

  // participent list
  participentList() {
    return cy.get('.text-block')
  }

  // recording date
  recordingDate() {
    return cy.get('.recording-date')
  }

  // search filter header
  filterHeader() {
    return cy.get('.sc-jZthWk')
  }

  // More filters
  moreFilters() {
    return cy.contains('More Filters')
  }

  // highlited text
  highlitedText() {
    return cy.get('.highlight')
  }

  // meeting title checkbox
  meetingCheckBox() {
    return cy.contains('Meeting title') // cy.get('.ant-checkbox-wrapper :nth-child(2)')
  }
}

export default recordingsSearch
