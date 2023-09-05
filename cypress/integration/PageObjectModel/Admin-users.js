class adminUsers {
  // Admin Tab
  adminTab() {
    return cy.get('[data-testid=admin]')
  }

  // Users Tab
  usersTab() {
    return cy.get('[class="ant-menu-item"]:nth-child(1)')
  }

  // Active user count
  userCount() {
    return cy.get(
      '[data-testid=active-users-widget] > .overview-menu-item-header'
    )
  }

  // Add user Buttton
  addUser() {
    return cy.get('[data-testid=add-user-button]')
  }

  // add user model
  addUserPopUp() {
    return cy.get('.modalHeading')
  }

  // Full Name
  fulllNameField() {
    return cy.get('[data-testid=user-name]')
  }

  // email Field
  emailField() {
    return cy.get('[data-testid=user-email]')
  }

  // Choose Manager
  chooseManager() {
    return cy.get('.css-1hwfws3')
  }

  // Is admin
  isAdmin() {
    return cy.get('[data-testid=toggle-admin]')
  }

  // select Manager
  selectManager() {
    return cy.get('.menuOption')
  }

  // save Button
  saveButton() {
    return cy.get('[data-testid=admin-user-action-button-done]')
  }

  // Close User pop up
  closePopUp() {
    return cy.get('.ant-modal-close-x > .anticon > svg')
  }

  // Search a user
  searchUser() {
    return cy.get('[data-testid=search]')
  }

  // search result
  searchResult() {
    return cy.get('.ant-table-row > .userTableActionButtonHeading') // cy.get('.userTableActionButtonHeading')
  }

  // edit user icon
  editUserIcon() {
    return cy.get('.icon-edit')
  }

  // delete user icon
  deleteUserIcon() {
    return cy.get('.icon-delete')
  }

  // delete user icon
  deleteUserToolTip() {
    return cy.get('.ant-tooltip-inner')
  }

  // deactivate pop up
  deactivatePopUpHeader() {
    return cy.get('.confirmBoxHeading')
  }

  // deactivate pop up
  deactivatePopUpBody() {
    return cy.get('.confirmBoxBody')
  }

  // deactivate button
  deactivateButton() {
    return cy.get('[data-testid=delete-action-button-done]')
  }

  // cancel button
  cancelButton() {
    return cy.get('[data-testid=delete-action-button-cancel]')
  }

  // toast message
  toastMsg() {
    return cy.get('#toast')
  }

  // total user text
  totalUserText() {
    return cy.get(
      '[data-testid=active-users-widget] > .overview-menu-item-body > span'
    )
  }

  // calender integration text
  calenderIntegrationText() {
    return cy.get(
      '[data-testid=integrated-users-widget] > .overview-menu-item-body > span'
    )
  }

  // without calender integration text
  nonCalenderIntegrationText() {
    return cy.get(
      '[data-testid=non-integrated-users-widget] > .overview-menu-item-body > span'
    )
  }

  // emailUsers
  emailUsers() {
    return cy.get(':nth-child(3) > .ant-btn')
  }

  // table heading
  tableHeading() {
    return cy.get('.ant-table-thead')
  }

  // deactivated user error
  deactivatedError() {
    return cy.get('.error')
  }
}

export default adminUsers
