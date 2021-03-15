import {Selector} from "testcafe"

class Navbar{
    constructor() {
        this.burgerMenu = Selector ('#react-burger-menu-btn')
        this.logoutOption = Selector ('#logout_sidebar_link')
        this.shoppingCartButton = Selector ('#shopping_cart_container')
    }

    

}

export default new Navbar()