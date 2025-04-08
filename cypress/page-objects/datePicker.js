const datePicker = 'input[type="date"]'

class DatePicker {
    entryDate() {
        cy.get(datePicker).type('1944-06-06').should('have.value', '1944-06-06') //nie mam pojęcia dlaczego mogę wpisać daty spoza zakresu i je przyjmie
    }
}

export default new DatePicker;