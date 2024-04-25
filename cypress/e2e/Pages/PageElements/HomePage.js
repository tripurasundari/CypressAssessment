class HomePage {

    getAccountIcon() {
       return cy.get('[ng-show="show.accountoptions == false"]');
    }
    getLoginBtn() {
        return cy.get('[href="/user/login"]');
    }

   }   export default HomePage