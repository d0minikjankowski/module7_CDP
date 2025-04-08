const usernameInput = "#ba_username"
const passwdInput = "#ba_password"
const loginBttn = 'button[onclick="onLoginSubmit()"]'

class BasicAuth {
    fillUsernameAndPassword() {
        cy.get(usernameInput).type('admin')
        cy.get(passwdInput).type('admin')
        cy.get(loginBttn).click()
        cy.get('#loggedInMessage').should('have.text', 'You are logged in!')
    }
}

export default new BasicAuth;