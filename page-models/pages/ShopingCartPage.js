import { Selector, t } from "testcafe";

class ShoppinCartPage {
    constructor(){
        this.shoppinCartPageTitle = Selector ('[class="subheader"]')
        this.cartItem = Selector ('[class=cart_item]')
        this.checkoutButton = Selector ('[class="btn_action checkout_button"]')
        this.itemName = Selector('[class="inventory_item_name"]')
    }

    async itemsInCartCount(totalItems){
        const itemCount=this.cartItem.count

        await t.expect(itemCount).eql(totalItems)

    }

}

export default new ShoppinCartPage()