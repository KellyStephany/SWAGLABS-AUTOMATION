import {Selector} from "testcafe"

class CompleteOrderPage {
    constructor() {
        this.CompleteOrderPageTitle= Selector('[class="subheader"]')

    }
}

export default new CompleteOrderPage()