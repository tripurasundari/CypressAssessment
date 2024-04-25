class AddCartPage{
    getCartIcon(){
        return cy.get('.cartOption .option-icon');
    }
    checkCartEmpty(){
        return cy.isElementExist('div.empty-text:contains(Your Bag Is Empty)');

    }
    deleteCartBtn(){
        return cy.get('div.cartDeleteItem ');
    }
    getProductRemovedSucessMsg(){
        return cy.get('[ms-data-name="ms.entity.carts.remove_product_success"]');
    }
    getcloseCartBtn(){
        return cy.get('div[ng-click="show.cartmenu = false"]');
    }
    getCartProductName(){
        return cy.get('div.cartProductName');
    }
    getCartProductPrice(){
        return cy.get('div.cartProductPrice');
    }
    getCartTotalPrice(){
        return cy.get('div.totalValue');
    }





}export default AddCartPage