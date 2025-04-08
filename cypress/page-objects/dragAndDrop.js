const dragA = '#column-a'
const dragB = '#column-b'

class DragAndDrop {
    dragAtoB() {
        cy.get(dragA).drag(dragB, { force: true }) //użyto @4tw/cypress-drag-drop
        cy.get(dragB).contains('header', 'A')
        cy.get(dragA).contains('header', 'B')
    }
}

export default new DragAndDrop;