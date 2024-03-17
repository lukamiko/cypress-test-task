import { BasePage } from "./BasePage"

export class MainPage extends BasePage {

    constructor() {
        super("/")

        this.url = super.getUrl()
    }
}
