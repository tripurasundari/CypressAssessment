class CheckoutPage{
    getExpressCheckoutBtn(){
        return cy.contains('EXPRESS CHECKOUT');
    }
    getNameField(){
        return cy.get('input[placeholder="Name"]');
    }
    getAddressField(){
        return cy.get('input[placeholder="Address"]');
    }
    getCityField(){
        return cy.get('input[placeholder="City"]');
    }
    getCountryDropdown(){
        return cy.get('select[name="country"]');
    }
    getPincodeField(){
        return cy.get('input[placeholder="Pin Code"]');
    }
    getPhoneField(){
        return cy.get('input[placeholder="Phone"]');
    }
    getAlternativePhoneField(){
        return cy.get('input[placeholder="Alternate Phone Number"]');
    }
    getSaveAddressBtn(){
        return cy.contains('Save Address');
    }
    getStateDropdown(){
        return cy.get('select[name="state"]');
    }
    checkAddressExists(){
        return cy.isElementExist('input[placeholder="Name"]');
    }
    getConfirmAddressbtn(){
        return cy.contains('Confirm');
    }
    getAddressRadioBtn(){
        return cy.get('div.address-icon');
    }
    getCratItemTxt(){
        return cy.get('a.cart-item-name');
    }
    getCartItemPrice(){
        return cy.get('span.cart-product-original-price');
    }
    getCartTotalPrice(){
        return cy.get('.order_subtotal .cart-table-td span');
    }
    getProceedToPaymentBtn(){
        return cy.get('[ng-click="create_order()"]');
    }

}export default CheckoutPage