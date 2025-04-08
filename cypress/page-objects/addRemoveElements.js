const addelement = 'button[onclick="addElement()"]'
const deleteelement = '.added-manually'

class AddRemoveElements {
    addRemoveElement() {
        cy.get(addelement).click()
        cy.get(deleteelement).should('exist')
        cy.get(deleteelement).click()
        cy.get(deleteelement).should('not.exist')
    }
}

export default new AddRemoveElements;