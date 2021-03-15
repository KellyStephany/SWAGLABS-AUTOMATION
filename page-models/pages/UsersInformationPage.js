import {Selector} from "testcafe"

class UsersInformation{
    constructor() {
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('[class="btn_primary cart_button"]')
        this.messageAlert = Selector('#checkout_info_container h3')

    }
}

export default new UsersInformation()