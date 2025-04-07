import homePage from "./homePage"

const url200 = 'https://httpstat.us/200'
const url305 = 'https://httpstat.us/305'
const url404 = 'https://httpstat.us/404'
const url500 = 'https://httpstat.us/500'

class StatusCodes {
    click200() {
        cy.request(url200).then((response) => [
            expect(response.status).to.eq(200)
        ])
    }

    click305() {
        cy.request({
            url: url305,
            followRedirect: false

        }).then((response) => {
            expect(response.status).to.eq(305)
        })
    }

    click404() {
        cy.request({
            url: url404,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    }

    click500() {
        cy.request({
            url: url500,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500)
        })
    }
}

export default new StatusCodes;