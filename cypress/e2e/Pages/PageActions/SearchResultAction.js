import SearchResultPage from "../PageElements/SearchResultPage";
const searchResult = new SearchResultPage();
class SearchResultAction {

   searchProduct(text){
    searchResult.getsearchTxtfield().type(text+'{enter}');
    cy.wait(2000);
    searchResult.getProductsList().should('have.length.greaterThan',0);

   }

   verifySearchedProductName(text){
    this.searchProduct(text);
    searchResult.getProductsList().first().click();
    searchResult.getProductNameTxt().should('contain.text',text);
   }


   }
export default SearchResultAction