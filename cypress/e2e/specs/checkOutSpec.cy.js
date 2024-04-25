// <reference types="cypress" />
import LoginActions from "../Pages/PageActions/LoginAction";
import SearchResultAction from "../Pages/PageActions/SearchResultAction";
import AddCartAction from "../Pages/PageActions/AddCartAction";
import CheckoutAction from "../Pages/PageActions/CheckoutAction";
const login= new LoginActions();
const searchResult = new SearchResultAction();
const addcart = new AddCartAction();
const checkOut = new CheckoutAction();
let data;

describe('Checkout Process:', () => {

    before(() => {
        cy.fixture('testData').then((fdata) => {
           data=fdata;
        });
     });
     beforeEach(() => {
        login.doLoginNVerifySuccess(data.emailID,data.password);
    });

    it('Tc_06_Verifies functionality of checkout process', () => {
        addcart.emptyCart(data.productRemovedSuccessMsg);
        searchResult.verifySearchedProductName(data.fullProductName);
        addcart.addToCartNVerifyCartDetails();
        addcart.clickAddToCart()
        checkOut.clickOnExpressCheckout();
        checkOut.enterContactDetailsNSaveAddress(data);
        checkOut.verifyCartSummary(data);
        checkOut.clickOnProceedToPayment();

    });

});