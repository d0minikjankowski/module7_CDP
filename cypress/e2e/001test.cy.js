import basicAuth from "../page-objects/basicAuth";
import checkboxes from "../page-objects/checkboxes";
import homePage from "../page-objects/homePage";
import hovers from "../page-objects/hovers";
import inputs from "../page-objects/inputs";
import urls from "../page-objects/urls";

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
})