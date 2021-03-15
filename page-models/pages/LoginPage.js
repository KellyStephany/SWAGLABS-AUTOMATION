import {Selector, t} from "testcafe"

class LoginPage{
    constructor() {
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.signInButton = Selector('#login-button')
        this.messageAlert = Selector('#login_button_container h3')
        this.loginContainer = Selector('#login_button_container')
    }

    async logInAction(username, password){

        await t
        .typeText(this.usernameField, username)
        .typeText(this.passwordField, password)
        .click(this.signInButton)
        }

}

export default new LoginPage()