import AddCartPage from "../PageElements/AddCartPage";
import SearchResultPage from "../PageElements/SearchResultPage";
const searchResult = new SearchResultPage();
const cartPage = new AddCartPage;
class AddCartAction{

    deleteProduct(){
        cartPage.checkCartEmpty().then((value)=>{
            if(value!=1){
                cartPage.deleteCartBtn().first().click().then(()=>{
                    cy.wait(2000);
                    this.deleteProduct();
                })
            }
        })
    };
    emptyCart(){
        cartPage.getCartIcon().click();
        this.deleteProduct();
        cartPage.getcloseCartBtn().click();
    };

    addToCartNVerifyCartDetails(){
        searchResult.getProductNameTxt().then((productName)=>{
            searchResult.getProductPriceTxt().then((priceText)=>{
                searchResult.getAddToCartBtn().click();
                cy.wait(3000);
                cy.readFile("cypress/fixtures/testData.json").then((data) => {
                    data.productName = productName.text().toString();
                    data.productPrice = priceText.text().toString().trim();
                    cy.writeFile("cypress/fixtures/testData.json", JSON.stringify(data))
                              })
                this.verifyCartDetails(productName.text().toString(),priceText.text().toString());

            });
        });
    };
    verifyCartDetails(name,price){
        this.clickAddToCart();
        cartPage.getCartProductName().should('contain.text',name);
        cartPage.getCartProductPrice().should('contain.text',price.trim());
        return name,price;
    }
    clickAddToCart(){
        cartPage.getCartIcon().click();

    }




}export default AddCartAction;