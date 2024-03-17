export abstract class BasePage {
    protected url: string

    protected constructor(url: string) {
        this.url = url
    }

    public navigate() {
        cy.visit(this.url)

        return this
    }

    protected getUrl() {
        return this.url
    }
}
