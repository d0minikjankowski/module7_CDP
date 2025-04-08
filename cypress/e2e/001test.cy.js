import addRemoveElements from "../page-objects/addRemoveElements";
import basicAuth from "../page-objects/basicAuth";
import checkboxes from "../page-objects/checkboxes";
import homePage from "../page-objects/homePage";
import hovers from "../page-objects/hovers";
import inputs from "../page-objects/inputs";
import keyPresses from "../page-objects/keyPresses";
import statusCodes from "../page-objects/statusCodes";
import urls from "../page-objects/urls";
import iframe from "../page-objects/iframe";
import form from "../page-objects/form";
import dropdown from "../page-objects/dropdown";
import datepicker from "../page-objects/datePicker";
import dragAndDrop from "../page-objects/dragAndDrop";

beforeEach( () => {
    urls.visitHomePage()
})

describe('verification', () => {

    it('visit home page', () => {
        urls.visitHomePage()
    })

    it('checkboxes', () => {
        homePage.clickCheckboxsHeader()
        checkboxes.chooseFirstCheckBox()
    })

    it('hoover', () => {
        homePage.clickhoversHeader()
        hovers.hooverSecondImage()
    })

    it('inputs', () => {
        homePage.clickInputsHeader()
        inputs.fillInput()
    })

    it('BasicAuth', () => {
        homePage.clickBasicAuthHeader()
        basicAuth.fillUsernameAndPassword()
    })

    it('Form', () => {
        homePage.clickFormHeader()
        form.formClickSubmit()
    })

    it('Drop down List', () => {
        homePage.clickDropDownHeader()
        dropdown.dropdownSelect()
    })

    it('Key presses', () => {
        homePage.clickKeyPressHeader()
        keyPresses.enterKeys()
    })

    it('Add/remove elements', () => {
        homePage.clickAddRemoveElementsHeader()
        addRemoveElements.addRemoveElement()
    })

    it('Status codes', () => {
        homePage.clickStatusCodesHeader()
        statusCodes.click200()
        statusCodes.click305()
        statusCodes.click404()
        statusCodes.click500()
    })

    it('iFrame', () => {
        homePage.clickIframeHeader()
        iframe.iframeClickBttn1()
    })

    it.only('drag&drop', () => {
        homePage.clickDragAndDropHeader()
        dragAndDrop.dragAtoB()

    })

    it('date picker', () => {
        homePage.clickDatePickerHeader()
        datepicker.entryDate()
    })
})