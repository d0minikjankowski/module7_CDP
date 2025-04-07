class Urls {
    visitHomePage() {
        const url = 'http://simpletestsite.fabrykatestow.pl/'
        cy.visit(url)
    }
}

export default new Urls;