import {Selector} from "testcafe"

class OverviewPage{
    constructor(){
        this.overviewPagetitle = Selector('[class="subheader"]')
        this.finishButton = Selector('[class="btn_action cart_button"]').withText('FINISH')
        this.itemName = Selector('[class="inventory_item_name"]')
    }
}

export default new OverviewPage()