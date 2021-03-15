import Navbar from "../page-models/components/Navbar";
import { URLS, CREDENTIALS, USERSINFO, MESSAGES } from "../page-models/data/const";
import LoginPage from "../page-models/pages/LoginPage";
import ShopingCartPage from "../page-models/pages/ShopingCartPage";
import UsersInformationPage from "../page-models/pages/UsersInformationPage";
import { standarUser } from "../page-models/data/Roles";

fixture('Users Information testing')
.beforeEach(async t=> {
    await t.useRole(standarUser);
})

test('7. Continue with missing mail information', async t=> {

    await t
        .click(Navbar.shoppingCartButton)
        .click(ShopingCartPage.checkoutButton)
    
    await t
        .typeText(UsersInformationPage.firstNameField, USERSINFO.FIRST_NAME)
        .typeText(UsersInformationPage.lastNameField, USERSINFO.LAST_NAME)
        .click(UsersInformationPage.continueButton)
    
    await t.expect(UsersInformationPage.messageAlert.innerText).eql(MESSAGES.FAILED.POSTAL_CODE_REQUIRED)

})

test('Continue with missing First Name information', async t=> {

    await t
        .click(Navbar.shoppingCartButton)
        .click(ShopingCartPage.checkoutButton)
    
    await t
        .typeText(UsersInformationPage.lastNameField, USERSINFO.LAST_NAME)
        .typeText(UsersInformationPage.postalCodeField, USERSINFO.POSTAL_CODE)
        .click(UsersInformationPage.continueButton)
    
    await t.expect(UsersInformationPage.messageAlert.innerText).eql(MESSAGES.FAILED.FIRST_NAME_REQUIRED)

});



