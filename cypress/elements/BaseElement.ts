export class BaseElement {
    protected rootSelector = ''

    protected getRootElement() {
        return cy.get(this.rootSelector)
    }
}