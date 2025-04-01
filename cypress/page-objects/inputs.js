const input = 'input[type="number"]'

class Input {
    fillInput() {
        cy.get(input).type('12345').should('have.value', '12345')
        cy.get(input).clear().should('be.empty')
    }
}

export default new Input;