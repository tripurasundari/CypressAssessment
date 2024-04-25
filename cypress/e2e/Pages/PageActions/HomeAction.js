import HomePage from "../PageElements/HomePage";
const homePage = new HomePage()

class HomeAction {

    clickOnAccountIcon(){
        homePage.getAccountIcon().click();

        return this;
    }
    clickOnUserLogin(){
        homePage.getLoginBtn().click();
        return this;
    }





}
export default HomeAction