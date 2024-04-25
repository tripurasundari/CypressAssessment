// <reference types="cypress" />
import LoginActions from "../Pages/PageActions/LoginAction";
import SearchResultAction from "../Pages/PageActions/SearchResultAction";
const login= new LoginActions();
const searchResult = new SearchResultAction();
let data;

describe('Search Products:', () => {

    before(() => {
        cy.fixture('testData').then((fdata) => {
           data=fdata;
        });
     });
     beforeEach(() => {
      login.doLoginNVerifySuccess(data.emailID,data.password);
     });
     it('Tc_02_Verify  functionality of searching products with full name', () => {
      searchResult.searchProduct(data.fullProductName);
    });

    it('Tc_03_Verify  functionality of searching products with partial name', () => {

      searchResult.searchProduct(data.partialProductName);

    });

    it('Verify searched product is displayed in product detail', () => {
      searchResult.verifySearchedProductName(data.fullProductName);
    });

});