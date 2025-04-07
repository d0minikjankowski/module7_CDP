const target = '#target'

class KeyPresses {
    enterKeys() {
        cy.get(target).type('f')
        cy.get('#keyPressResult').should('have.text', 'You entered: F')
    }
}

export default new KeyPresses;