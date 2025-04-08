const hover = '.figure'

class Hovers {
    hooverSecondImage() {
        cy.get(hover).eq(1).trigger('mouseover').contains('user2')
    }
}

export default new Hovers;