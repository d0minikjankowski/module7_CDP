class Urls {
    visitHomePage() {
        const url = 'https://simpletestsite.fabrykatestow.pl/'
        cy.visit(url)
    }
}

export default new Urls;