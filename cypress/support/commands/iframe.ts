declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            iframe(iframeSelector: string): Chainable<Element>
        }
    }
}

export const iframe = (iframeSelector: any) => {
    return cy.get(iframeSelector)
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)
}
