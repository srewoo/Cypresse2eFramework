class languageConfiguration {
  // Admin Tab
  adminTab() {
    return cy.get('[data-testid=admin]')
  }

  // Analytics Tab
  languageConfigTab() {
    return cy.get('[class="ant-menu-item"]:nth-child(8)')
  }

  // language Box
  languageBox() {
    return cy.get('.sc-gJnNTc')
  }

  // heading
  heading() {
    return cy.get('.heading')
  }

  // secondary header
  secondaryHeader() {
    return cy.get('.secondary-header')
  }

  // add language button
  addLanguage() {
    return cy.get('.trigger')
  }

  // language bar
  langaugeBar() {
    return cy.get('.language-config')
  }

  // remove button
  remove() {
    return cy.get('.remove-button')
  }

  // done button
  doneButton() {
    return cy.get('[data-testid=undefined-action-button-done]:visible')
  }

  // cancel button
  cancelButton() {
    return cy.get('[data-testid=undefined-action-button-cancel]:visible')
  }

  // languageListPopUp
  languageList() {
    return cy.get('.list-wrapper')
  }

  // pop up header
  popUpHeader() {
    return cy.get('.header')
  }

  // language CheckBox
  languageCheckBox() {
    return cy.get('.checkbox-wrapper')
  }

  // toastmessage
  toastMessage() {
    return cy.get('.toast')
  }
}

export default languageConfiguration
