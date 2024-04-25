// <reference types="cypress" />
import LoginActions from "../Pages/PageActions/LoginAction";
import HomeAction from "../Pages/PageActions/HomeAction";
import addContext from "mochawesome/addContext";
const home = new HomeAction();
const login= new LoginActions();
let data;

describe('User Login', () => {

    before(() => {
        //access fixture data
        cy.fixture('testData').then((fdata) => {
           data=fdata;
        });
     });

    it('Tc_01_Verify login success message when user login with valid credentails', () => {
       cy.openURL();
        home.clickOnAccountIcon();
        home.clickOnUserLogin();
        login.loginAndVerifySuccess(data.emailID,data.password);
        cy.addTestContext("'login successfull'");

    });

});