declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to go to Air Malta website and assert on the title.
         * @example cy.goToAirMalta()
         */
        goToAirMalta(): Chainable<Element>
    }
}

Cypress.Commands.add('goToAirMalta', () => {
    cy.visit('/');
    cy.title().should('contain', 'Air Malta');
})