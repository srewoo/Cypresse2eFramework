class login {
  // pageHeder
  pageHeader() {
    return cy.get('.logoBlock')
  }

  // SignIn title
  signInTitle() {
    return cy.get('.ant-card-head-title')
  }

  // Sign in page components
  signInComponents() {
    return cy.get('.stylesheet-manager-wrp')
  }

  // Mindtickle Signin buttom
  mTSignInButtom() {
    return cy.get('.ant-col > .ant-btn')
  }

  // emailBox
  emailBox() {
    return cy.get('[data-testid=email]')
  }

  // password box
  passwordBox() {
    return cy.get('[data-testid=password]')
  }

  // sign in Button
  signInButton() {
    return cy.get('[data-testid=signin-button]')
  }

  // email Address Text
  emailAddressText() {
    return cy.get('[class=ant-form-item-required]')
  }

  // forgot password  Text
  forgotpassword() {
    return cy.get('[class=ant-form-item-required]')
  }

  // error message password
  passwordError() {
    return cy.get('.error')
  }

  // error message password
  emailError() {
    return cy.get('.ant-form-item-explain > div')
  }

  // Password mandatory
  passwordMandatory() {
    return cy.get(
      ':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-explain'
    )
  }

  // email mandatory
  emailMandatory() {
    return cy.get(
      '.error-relative > .ant-row > .ant-form-item-control > .ant-form-item-explain'
    )
  }

  // Un registered email
  unregisteredToast() {
    return cy.get('.formToast')
  }
}

export default login
