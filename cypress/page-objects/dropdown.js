const dropdown = '#dropdown'

class Dropdown {
    dropdownSelect() {
        cy.get(dropdown).select('Option 2').find('option:selected').should('have.text', 'Option 2')
    }
}

export default new Dropdown;