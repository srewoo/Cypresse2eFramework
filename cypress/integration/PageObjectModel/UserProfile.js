class userProfile {
  // profile icon
  profileIcon() {
    return cy.get('.ant-avatar')
  }

  // My profile text
  myProfile() {
    return cy.get('.userProfileHeadingText > span')
  }

  // Profle icon
  profileicon() {
    return cy.get('.profilePicBlock > .icon')
  }

  // integration header
  integrationHeder() {
    return cy.get('.integrationHeading > span')
  }

  // Manage meetings
  manageMeetings() {
    return cy.get('.ant-tag')
  }

  // Name
  name() {
    return cy.get(':nth-child(1) > :nth-child(1) > .profileCardHeading > span')
  }

  // Name value
  nameValue() {
    return cy.get(':nth-child(1) > :nth-child(1) > .profileCardText')
  }

  // email
  email() {
    return cy.get(':nth-child(2) > .profileCardHeading > span')
  }

  // email value
  emailValue() {
    return cy.get(':nth-child(2) > .profileCardText')
  }

  // Logout button
  logout() {
    return cy.get('[data-testid=logout-button]')
  }

  // change password
  changePassword() {
    return cy.get('.userProfileHeadingBlock > :nth-child(2)')
  }

  // change password heder
  changePasswordHeder() {
    return cy.get('.modalHeading > span')
  }

  // old password
  oldPassword() {
    return cy.get('#oldPassword')
  }

  // New password
  newPassword() {
    return cy.get('#newPassword')
  }

  // confirm password
  confirmPassword() {
    return cy.get('#confirmPassword')
  }

  // cancel button
  cancelBtn() {
    return cy.get('[data-testid=undefined-action-button-cancel]')
  }

  // change passwordButton
  changePasswordBtn() {
    return cy.get('[data-testid=undefined-action-button-done]')
  }

  // toast message
  toastMsg() {
    return cy.get('.toastMessage')
  }

  // Manage meeting heders
  manageMeetingHeder() {
    return cy.get('.headingUpcomingMeetings')
  }

  // Meeting count
  meetingCount() {
    return cy.get('.meetingDetails')
  }

  // disable recording toggle
  disableRecording() {
    return cy.get('.ant-switch')
  }

  // Pop Over disable recording
  popUpDisableRec() {
    return cy.get('.ant-popover-inner-content')
  }

  // pop up header
  popUpHeder() {
    return cy.get('.headingQuestion')
  }

  // Pop up body text
  popUpBody() {
    return cy.get('.bodyText')
  }

  // pop up input
  popUpInput() {
    return cy.get('.ant-input')
  }

  // Done button
  disableButton() {
    return cy.get('[data-testid=undefined-action-button-done]')
  }

  // Cancel button pop up
  cancelButton() {
    return cy.get('[data-testid=undefined-action-button-cancel]')
  }

  // char left
  charLeft() {
    return cy.get('.charTextLeft')
  }

  // enable button
  enable() {
    return cy.contains('Enable')
  }
}

export default userProfile
