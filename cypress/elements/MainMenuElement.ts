import {BaseElement} from "./BaseElement"

export class MainMenuElement extends BaseElement {
    protected rootSelector = "[class='main-navigation']"

    protected static elements = {
        menuItem_element: "[class='nobl9__mega-menu--item']",
        subMenuItem_element: "[class='nobl9__mega-menu--sub-item']",
        resourcesTab_text: "Resources",
        blogTile_text: "Nobl9 Blog",
        requestDemo_element: "a[id='header-trial']"
    }

    public openResourcesTab() {
        this.getRootElement()
            .within(() => {
                cy.contains(MainMenuElement.elements.menuItem_element, MainMenuElement.elements.resourcesTab_text)
                    .click()
            })

        return this
    }

    public selectBlog() {
        this.getRootElement()
            .within(() => {
                cy.contains(MainMenuElement.elements.subMenuItem_element, MainMenuElement.elements.blogTile_text)
                    .click()
            })

        return this
    }

    public clickRequestDemo() {
        cy.get(MainMenuElement.elements.requestDemo_element).click()

        return this
    }
}
