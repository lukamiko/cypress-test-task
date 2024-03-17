import {BasePage} from "./BasePage";

export class BlogPage extends BasePage {

    constructor() {
        super('/resources')

        this.url = super.getUrl()
    }

    protected static elements = {
        singlePost_element: "section article",
        learnMore_text: "Learn More"
    }

    public openLatestPost() {
        cy.get(BlogPage.elements.singlePost_element)
            .first()
            .within(() => {
                cy.findByText(BlogPage.elements.learnMore_text)
                    .click()
            })

        return this
    }
}