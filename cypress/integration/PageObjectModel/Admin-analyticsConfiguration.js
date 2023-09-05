class admin {
  // Admin Tab
  adminTab() {
    return cy.get('[data-testid=admin]')
  }

  // Analytics Tab
  analyticsConfigTab() {
    return cy.get('[class="ant-menu-item"]:nth-child(7)')
  }

  // cancel
  cancel() {
    return cy.get('.cancel-button > .ant-btn')
  }

  // Save button
  save() {
    return cy.get('.save-button > .ant-btn')
  }

  // drop down
  dropDown() {
    return cy.get('.stringToHtmlText')
  }

  // Rep cpunt
  repCount() {
    return cy.get('.react-tags .react-tags__selected')
  }

  // repNames box
  repNamesBox() {
    return cy.get('.react-tags')
  }

  // toast message
  toastMsg() {
    return cy.get('.toastMessage > span')
  }

  // Select Rep
  selectRep() {
    return cy.get('.ant-btn-primary')
  }
}

export default admin
