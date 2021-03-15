import Navbar from "../page-models/components/Navbar";
import { URLS, CREDENTIALS, PAGETITLES, USERSINFO } from "../page-models/data/const";
import OverviewPage from "../page-models/pages/OverviewPage";
import ProductsPage from "../page-models/pages/ProductsPage";
import ShopingCartPage from "../page-models/pages/ShopingCartPage";
import UsersInformationPage from "../page-models/pages/UsersInformationPage";
import { standarUser } from "../page-models/data/Roles";



fixture('Overview Page testing')
.beforeEach(async t=> {
    await t.useRole(standarUser);
 })

test('8. Fill users information', async t=> {

    await t
        .click(Navbar.shoppingCartButton)
        .click(ShopingCartPage.checkoutButton)

    
    await t
        .typeText(UsersInformationPage.firstNameField, USERSINFO.FIRST_NAME)
        .typeText(UsersInformationPage.lastNameField, USERSINFO.LAST_NAME)
        .typeText(UsersInformationPage.postalCodeField, USERSINFO.POSTAL_CODE)
        .click(UsersInformationPage.continueButton)
    
    await t.expect(OverviewPage.overviewPagetitle.innerText).eql(PAGETITLES.OVERVIEW)

});

test('9. Final Order items', async t=> {

    await t
        .click(ProductsPage.addToCartButton)
        .click(Navbar.shoppingCartButton)

    const itemAdded = await ShopingCartPage.itemName.innerText

    await t.click(ShopingCartPage.checkoutButton)

    
    await t
        .typeText(UsersInformationPage.firstNameField, USERSINFO.FIRST_NAME)
        .typeText(UsersInformationPage.lastNameField, USERSINFO.LAST_NAME)
        .typeText(UsersInformationPage.postalCodeField, USERSINFO.POSTAL_CODE)
        .click(UsersInformationPage.continueButton)
    
    await t.expect(OverviewPage.itemName.innerText).eql(itemAdded)

})