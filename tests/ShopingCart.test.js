import Navbar from "../page-models/components/Navbar";
import { URLS, PAGETITLES } from "../page-models/data/const";
import { standarUser } from "../page-models/data/Roles";
import ProductsPage from "../page-models/pages/ProductsPage";
import ShopingCartPage from "../page-models/pages/ShopingCartPage";


fixture('Shopping Cart Testing')
.beforeEach(async t=> {
    await t.useRole(standarUser);
 })

test('4. Navigate to the shopping cart', async t=> {

    await t.click(Navbar.shoppingCartButton)
    await t
        .expect(ShopingCartPage.shoppinCartPageTitle.innerText).eql(PAGETITLES.SHOPPINGCART)

});

test('5. Add a single item to the shopping cart', async t=> {

    await t.click(ProductsPage.addToCartButton)
    await t.click(Navbar.shoppingCartButton)
    ShopingCartPage.itemsInCartCount(1)

});

test('6. Add Multiple items to the shopping cart', async t=> {

    await t.click(ProductsPage.addToCartButton)
    await t.click(ProductsPage.addToCartButton)
    await t.click(ProductsPage.addToCartButton)
    await t.click(Navbar.shoppingCartButton)
    ShopingCartPage.itemsInCartCount(3)

});