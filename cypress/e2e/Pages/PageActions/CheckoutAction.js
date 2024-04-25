import CheckoutPage from "../PageElements/CheckoutPage";
const checkoutPage = new CheckoutPage();
class CheckoutAction{
    clickOnExpressCheckout(){
        checkoutPage.getExpressCheckoutBtn().click();
    }
    enterName(name){
        checkoutPage.getNameField().type(name);
    }
    enterAddress(address){
        checkoutPage.getAddressField().type(address);
    }
    enterCity(city){
        checkoutPage.getCityField().type(city);
    }
    enterPincode(pincode){
        checkoutPage.getPincodeField().type(pincode);
    }
    enterPhone(phone){
        checkoutPage.getPhoneField().type(phone);
    }
    enterAlterPhone(alterPhone){
        checkoutPage.getAlternativePhoneField().type(alterPhone);
    }
    selectCountryDropDown(country){
        checkoutPage.getCountryDropdown().select(country);
    }
    selectStateDropDown(state){
        checkoutPage.getStateDropdown().select(state);
    }
    enterContactDetailsNSaveAddress(data){
        checkoutPage.checkAddressExists().then((value)=>{
            cy.log("*******value*****"+value);
            if(value==0){

                checkoutPage.getAddressRadioBtn().first().click();
                checkoutPage.getConfirmAddressbtn().click();
            }
            else{
                this.enterName(data.name);
                this.enterAddress(data.address);
                this.enterCity(data.city);
                this.enterPincode(data.pincode);
                this.enterPhone(data.phone);
                this.enterAlterPhone(data.alternativePhone);
                this.selectCountryDropDown(data.country);
                this.selectStateDropDown(data.state);
                this.clickOnSaveAddress();
            }
        });
    }
    verifyCartSummary(data){
        checkoutPage.getCratItemTxt().should('contain.text',data.productName);
        checkoutPage.getCartItemPrice().should('contain.text',data.productPrice);
        checkoutPage.getCartTotalPrice().should('contain.text',data.productPrice);
    }
    clickOnSaveAddress(){
        checkoutPage.getSaveAddressBtn().click();
    }
    clickOnProceedToPayment(){
        checkoutPage.getProceedToPaymentBtn().click();
    }

}
export default CheckoutAction