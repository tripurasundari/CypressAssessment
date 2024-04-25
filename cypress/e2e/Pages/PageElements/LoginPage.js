class LoginPage {

   getloginWithEmailLink() {
        return cy.contains('Login with Email and password');
    }
    getEmailText() {
        return cy.get('#username');
    }
    getPasswordText() {
        return cy.get('#password');
    }
    getLoginButton(){
        return cy.get('[type="submit"]');
    }
    getLoginSucessMsg(){
        return cy.contains('Login Successful');
    }

}export default LoginPage