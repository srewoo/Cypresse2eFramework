class adminTheme {
  // Admin Tab
  adminTab() {
    return cy.get('[data-testid=admin]')
  }

  // Theme Tab
  themeTab() {
    return cy.get('[class="ant-menu-item"]:nth-child(4)')
  }

  // Theme header
  themeHeader() {
    return cy.get('[class="headerText"] span')
  }

  // Add theme button
  addTheme() {
    return cy.get('[data-testid=add-theme-button]')
  }

  // search theme
  searchTheme() {
    return cy.get('[data-testid=search]')
  }

  // No results
  noResults() {
    return cy.get('.noSearchResultsTextStyle')
  }

  // Add theme body
  addThemePopUp() {
    return cy.get('.modalBodyWrapper')
  }

  // Add theme header
  addThemeHeader() {
    return cy.get('.modalHeading')
  }

  // Theme name
  themeName() {
    return cy.get('[data-testid=theme-name]')
  }

  // Theme Discription
  themeDiscription() {
    return cy.get('.ql-editor')
  }

  // theme tags
  themeTags() {
    return cy.get('.react-tags')
  }

  // create button
  createTheme() {
    return cy.get('[data-testid=admin-themes-action-button-done]')
  }

  // cancel theme
  cancelButton() {
    return cy.get('[data-testid=admin-themes-action-button-cancel]')
  }

  // toast message
  toastMessage() {
    return cy.get('.toastMessage > span')
  }

  // themes
  themesPresent() {
    return cy.get('.themeRecordingNameHeading > :nth-child(2)')
  }

  // key theme
  keyTheme() {
    return cy.get(
      '.key-theme-title-header > .key-theme > .sc-dRKXJR > .ant-switch'
    )
  }

  // cancel button
  cancelButtonTeme() {
    return cy.get('.cancel-button')
  }

  // save button
  saveButton() {
    return cy.get('.save-button')
  }

  // Manager Tab
  managerTab() {
    return cy.get('[data-testid=manager-insights]')
  }

  // side bar menu items
  sidebarMenu() {
    return cy.get('.sidebar-item')
  }

  // Key Theme on voice of Market
  keyThemeVoM() {
    return cy.get('.left-header > .title')
  }

  // delete theme
  deleteTheme() {
    return cy.get('.themeActionButtonHeading .icon.icon-delete')
  }

  // delete button
  deleteButton() {
    return cy.get('[data-testid=delete-action-button-done]')
  }
}

export default adminTheme
