import { Selector } from "testcafe"

class ProductsPage {
    constructor() {
        this.inventorySection = Selector ('#inventory_container')
        this.addToCartButton = Selector ('[class="btn_primary btn_inventory"]').withText('ADD TO CART')

    }
}

export default new ProductsPage()