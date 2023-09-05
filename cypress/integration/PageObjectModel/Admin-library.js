class adminLibrary {
  // Admin Tab
  adminTab() {
    return cy.get('[data-testid=admin]')
  }

  // Theme Tab
  libraryTab() {
    return cy.get('[class="ant-menu-item"]:nth-child(3)')
  }

  // Add library button
  addLibraryButton() {
    return cy.get('[data-testid=add-library-button]')
  }

  // search Library
  searchLibrary() {
    return cy.get('[data-testid=search]')
  }

  // Library count
  libraryCount() {
    return cy.get('.ant-table-row .libraryTableNameHeading')
  }

  // No results found
  noresultsText() {
    return cy.get('.emptyTableTitle')
  }

  // add librapy pop up
  libraryPopUp() {
    return cy.get('.modalBodyWrapper')
  }

  // Add library header
  libraryHeader() {
    return cy.get('.modalHeading')
  }

  // search results
  searchResults() {
    return cy.get('.ant-table-row > .libraryTableActionsHeading')
  }

  // library name
  libraryName() {
    return cy.get('[data-testid=library-name]')
  }

  // library discription
  libraryDiscription() {
    return cy.get('.ql-container').find('p') // cy.get('.ql-editor')
  }

  // create button
  createLibrary() {
    return cy.get('[data-testid=admin-library-action-button-done]')
  }

  // Cancel button
  cancelButton() {
    return cy.get('[data-testid=admin-library-action-button-cancel]')
  }

  // toast message
  toastMsg() {
    return cy.get('.toastMessage > span')
  }

  // edit library icon
  editLibIcon() {
    return cy.get('.editLibrary')
  }

  // delete library ocon
  deleteIcon() {
    return cy.get('.deleteLibrary')
  }

  // confirm delete box
  confirmDelete() {
    return cy.get('.confirmBoxBody')
  }

  // delete button
  deleteButton() {
    return cy.get('[data-testid=delete-action-button-done]')
  }
}

export default adminLibrary
