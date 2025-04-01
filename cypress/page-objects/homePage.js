const checkboxsHeader = '#checkbox-header'
const datePickerHeader = '#datepicker-header'
const hoversHeader = '#hovers-header'
const inputsHeader = '#inputs-header'
const basicAuthHeader = "#basicauth-header"
const formHeader = "#form-header"
const dropDownHeader = "dropdownlist-header"
const keyPressesHeader = "#keypresses-header"
const dragAndDropHeader = "#draganddrop-header"
const addRemoveElementsHeader = "#addremoveelements-header"
const statusCodesHeader = "#statuscodes-header"
const iframeHeader = "#iframe-header"


class HomePage {
    clickCheckboxsHeader() {
        cy.get(checkboxsHeader).click()
    }

    clickDatePickerHeader() {
        cy.get(datePickerHeader).click()
    }

    clickhoversHeader() {
        cy.get(hoversHeader).click()
    }

    clickInputsHeader() {
        cy.get(inputsHeader).click()
    }

    clickBasicAuthHeader() {
        cy.get(basicAuthHeader).click()
    }

    clickFormHeader() {
        cy.get(formHeader).click()
    }

    clickDropDownHeader() {
        cy.get(dropDownHeader).click()
    }

    clickKeyPressHeader() {
        cy.get(keyPressesHeader).click()
    }

    clickDragAndDropHeader() {
        cy.get(dragAndDropHeader).click()
    }

    clickAddRemoveElementsHeader() {
        cy.get(addRemoveElementsHeader).click()
    }

    clickStatusCodesHeader() {
        cy.get(statusCodesHeader).click()
    }

    clickIframeHeader() {
        cy.get(iframeHeader).click()
    }
}

export default new HomePage();