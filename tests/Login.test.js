import { CREDENTIALS, MESSAGES, URLS } from "../page-models/data/const";
import ProductsPage from "../page-models/pages/ProductsPage";
import LoginPage from "../page-models/pages/LoginPage";
import Navbar from "../page-models/components/Navbar";


fixture('Login feature testing').page(URLS.LOGIN_URL)

test('1. Login with a valid user', async t=> {
    
    LoginPage.logInAction(CREDENTIALS.VALID_USER.STANDAR_USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
     await t.expect(ProductsPage.inventorySection.exists).ok()

});

test('2. Login with a invalid user', async t=> {
  
    LoginPage.logInAction(CREDENTIALS.INVALID_USER.USER_NAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(LoginPage.messageAlert.innerText).eql(MESSAGES.FAILED.INVALID_CREDENTIALS)
});

test('3. Logout from products page', async t=> {

    LoginPage.logInAction(CREDENTIALS.VALID_USER.STANDAR_USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
        .click(Navbar.burgerMenu)
        .click(Navbar.logoutOption)
    await t
        .expect(LoginPage.loginContainer.exists).ok()
        

});