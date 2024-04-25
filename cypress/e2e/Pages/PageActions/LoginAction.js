import LoginPage from "../PageElements/LoginPage";
import HomeAction from "./HomeAction";
const loginPage = new LoginPage();
const homeAction = new HomeAction();
class LoginActions {

   clickOnLoginEmailLink(){
    loginPage.getloginWithEmailLink().click();
   }
   enterEmail(email){
    loginPage.getEmailText().type(email);
   }
   enterPassword(password){
    loginPage.getPasswordText().type(password);
   }
   clickLoginbutton(){
    loginPage.getLoginButton().click();
   }
   verifyLoginSuccess(){
    loginPage.getLoginSucessMsg().should('exist');
   }
   loginAndVerifySuccess(email,password){
    this.clickOnLoginEmailLink();
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginbutton();
    this.verifyLoginSuccess();
   }
   doLoginNVerifySuccess(email,password){
      cy.openURL();
      homeAction.clickOnAccountIcon();
      homeAction.clickOnUserLogin();
      this.loginAndVerifySuccess(email,password)
   }

}
export default LoginActions