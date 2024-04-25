# Cypress Page Object Model Framework

This project is to support Page Object Model (POM) using Cypress. 
## Setup
* Clone this repository
* Navigate to the cloned folder
* Download node JS and install
* Install the dependencies with respect to this project by `npm install`


## To Run the tests
* To run all specs in under specs folder and genearte reports
npm run e2e:chrome -- --spec "cypress/e2e/specs/*cy.js"
* To run specific spec and genarate html report
  npm run e2e:chrome -- --spec "cypress/e2e/specs/loginSpec.cy.js"
* To open cypress dashboard
  npx cypress open

## Supports
* Multiple browser automation
* Headless run
* Failed Screenshots
* Retries of failed tests

  ## Breakdown in to testcases
### Adding locator methods to the project 

1. Add locator methods inside the 'Page elements'folder structure.

```
getEmailText() {
    return cy.get('#username');
}

```

2. For each page respective page actions is added and included within the Page Actions.

Importing page elements to action classes
....
import LoginPage from "../PageElements/LoginPage";
....
enterEmail(email){
 loginPage.getEmailText().type(email);
}

### Creating a new spec file under specs folder
....
importing actions in spec and use required action function in test steps
.....
import LoginActions from "../Pages/PageActions/LoginAction";

it('Tc_01_Verify login success message when user login with valid credentails', () => {
   cy.openURL();
    home.clickOnAccountIcon();
    home.clickOnUserLogin();
    login.loginAndVerifySuccess(data.emailID,data.password);
    cy.addTestContext("'login successfull'");
});



