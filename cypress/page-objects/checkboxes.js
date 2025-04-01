const checkboxes = 'input[type="checkbox"]'

class Checkboxes {
    chooseFirstCheckBox() {
        cy.get(checkboxes).first().check().should('be.checked')
    }
}

export default new Checkboxes;