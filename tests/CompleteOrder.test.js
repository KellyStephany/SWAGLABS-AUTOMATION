import Navbar from "../page-models/components/Navbar";
import { URLS, CREDENTIALS, PAGETITLES, USERSINFO } from "../page-models/data/const";
import CompleteOrderPage from "../page-models/pages/CompleteOrderPage";
import { standarUser } from "../page-models/data/Roles";
import OverviewPage from "../page-models/pages/OverviewPage";
import ProductsPage from "../page-models/pages/ProductsPage";
import ShopingCartPage from "../page-models/pages/ShopingCartPage";
import UsersInformationPage from "../page-models/pages/UsersInformationPage";


fixture('Order Complete testing')
.beforeEach(async t=> {
    await t.useRole(standarUser);
 })

test('10. Complete Purchase', async t=> {

    
    await t
        .click(ProductsPage.addToCartButton)
        .click(Navbar.shoppingCartButton)
        .click(ShopingCartPage.checkoutButton)

    await t
        .typeText(UsersInformationPage.firstNameField, USERSINFO.FIRST_NAME)
        .typeText(UsersInformationPage.lastNameField, USERSINFO.LAST_NAME)
        .typeText(UsersInformationPage.postalCodeField, USERSINFO.POSTAL_CODE)
        .click(UsersInformationPage.continueButton)
        .click(OverviewPage.finishButton)

    await t.expect(CompleteOrderPage.CompleteOrderPageTitle.innerText).eql(PAGETITLES.COMPLETE_ORDER_PAGE)
        
})