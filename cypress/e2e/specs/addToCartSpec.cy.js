// <reference types="cypress" />
import LoginActions from "../Pages/PageActions/LoginAction";
import SearchResultAction from "../Pages/PageActions/SearchResultAction";
import AddCartAction from "../Pages/PageActions/AddCartAction";
const login= new LoginActions();
const searchResult = new SearchResultAction();
const addcart = new AddCartAction();
let data;

describe('Add to cart/update cart', () => {

    before(() => {
           cy.fixture('testData').then((fdata) => {
           data=fdata;
        });
     });
     beforeEach(() => {
        login.doLoginNVerifySuccess(data.emailID,data.password);
     });

    it('Tc_04_verifies  functionality of adding a product to the cart', () => {
        addcart.emptyCart(data.productRemovedSuccessMsg);
        searchResult.verifySearchedProductName(data.fullProductName);
        addcart.addToCartNVerifyCartDetails();

    });
    it.only('Tc_05_verifies  functionality of remove product from cart', () => {
        searchResult.verifySearchedProductName(data.fullProductName);
        addcart.addToCartNVerifyCartDetails();
        addcart.emptyCart(data.productRemovedSuccessMsg);
    });

});