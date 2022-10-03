/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.getByTestId('submit-button', options)
     */
    getByTestId(id: string, options: object): Chainable<Subject>;
  }
}
