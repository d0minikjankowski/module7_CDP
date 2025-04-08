const firstNameInput = '#fname'
const lastNameInput = '#lname'
const formBttnSubmit = '#formSubmitButton'

class Form {
    formClickSubmit() {
        cy.get(firstNameInput).click().type('tralalala')
        cy.get(lastNameInput).click().type('trolololo')
        cy.get(formBttnSubmit).click()

        cy.on('window:alert',(a) => {
            expect(a).to.contain('success')
        })
    }
}

export default new Form;