class recordings {
  // recording tab
  recordingTab() {
    return cy.get('[data-testid=recordings]')
  }

  // Recording header
  recordingHeader() {
    return cy.get('.recording-title')
  }

  // Weeks highlights header
  weekHighLightHeder() {
    return cy.get('.highlights-header')
  }

  // highlight ToolTip
  highlightToolTip() {
    return cy.get('.highlights-header > .icon')
  }

  // weeks highlight
  weekHighLight() {
    return cy.get('.sc-gmAETw')
  }

  // All recoreding
  allRecordings() {
    return cy.get('#tab-nav-allRecordings')
  }

  // My recordings
  myRecordings() {
    return cy.get('#tab-nav-myRecordings')
  }

  // Shared with me
  sharedWithMe() {
    return cy.get('#tab-nav-shared')
  }

  // Bookmarked
  bookmarked() {
    return cy.get('#tab-nav-bookmarked')
  }

  // Filters
  filters() {
    return cy.get('.filter-wrapper')
  }

  // More filters
  moreFilters() {
    return cy.contains('More Filters')
  }

  // Sort by
  sortBy() {
    return cy.get('.ant-select-selection__rendered')
  }

  // all themes
  allThemes() {
    return cy.get('.sc-hKKeuH')
  }

  // call score
  callScore() {
    return cy.get('.recording-score')
  }

  // all Recording count
  allRecordingsCount() {
    return cy.get('#tab-nav-allRecordings').find('.inner-content')
  }

  // first recording
  meetingRecording() {
    return cy.get('.recording-item').eq(0)
  }

  // ellipsis menu
  ellipsis() {
    return cy.get('.icon-dropdown').eq(0)
  }

  // delete icon
  deleteIcon() {
    return cy.get('.cautious > .common-style-button')
  }

  // disabled button tool tip
  deleteDisabledTooTip() {
    return cy.get('.ant-tooltip-inner')
  }

  // confirmation pop up
  confirmationPopUp() {
    return cy.get('.ant-modal-body')
  }

  // notify users
  notifyUsers() {
    return cy.get('.notify-wrapper')
  }

  // delete button
  delete() {
    return cy.get('[data-testid=delete-action-button-done]')
  }

  // cancel Button
  cancel() {
    return cy.get('[data-testid=delete-action-button-cancel]')
  }

  // All recordings tab
  allRecTab() {
    return cy.get('#tab-nav-allRecordings')
  }

  // Do it later Button
  doItLaterButton() {
    return cy.get('[data-testid=undefined-action-button-cancel]')
  }
}

export default recordings
