import homePage from "./homePage"

const iframe = 'iframe'
const iframeBttn1 = '#simpleButton1'
const iframeBttn2 = '#simpleButton2'
const iframeConfirmation = '#whichButtonIsClickedMessage'


class Iframe {
    
    iframeClickBttn1() {
        cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        .find(iframeBttn1)
        .click()

        cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        .find(iframeConfirmation)
        .should('have.text', 'Button 1 was clicked!')
    }
}

export default new Iframe;