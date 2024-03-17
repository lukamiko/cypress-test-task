import {BaseElement} from "./BaseElement";

export class RequestDemoElement extends BaseElement{
    protected rootSelector = 'iframe[data-test-id="interactive-frame"]'

    protected static elements = {
        emailInput_element: '[id="email-input"]',
        firstNameInput_element: '[id="firstname-input"]',
        lastNameInput_element: '[name="lastname"]',
        companyNameInput_element: '[id="company-input"]',
        jobTitleInput_element: '[id="jobtitle-input"]',
        closeButton_element: '[id="interactive-close-button"]'
    }

    private getRootModal() {
        return cy.iframe(this.rootSelector)
    }

    public fillEmail(email: string) {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.emailInput_element).click().type(email)
        })

        return this
    }

    public fillFirstName(firstName: string) {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.firstNameInput_element).type(firstName)
            })

        return this
    }

    public fillLastName(lastName: string) {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.lastNameInput_element).type(lastName)
            })

        return this
    }

    public fillCompanyName(companyName: string) {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.companyNameInput_element).type(companyName)
            })

        return this
    }

    public fillJobTitle(jobTitle: string) {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.jobTitleInput_element).type(jobTitle)
            })

        return this
    }

    public close() {
        this.getRootModal()
            .within(() => {
                cy.get(RequestDemoElement.elements.closeButton_element).click()
            })

        return this
    }
}