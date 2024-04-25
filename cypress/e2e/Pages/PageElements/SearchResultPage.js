class SearchResultPage {

    getsearchTxtfield() {
         return cy.get('#main-header #div1 #search');
     }
     getsearchIcon() {
        return cy.get('.option-icon svg.svg-icon-search');
    }
    getProductsList(){
        return cy.get('.product-thumb');
    }
    getProductNameTxt(){
        return cy.get('div.product-detail .product-name');
    }
    getProductPriceTxt(){
        return cy.get('div.product-detail .price-new');
    }
    getAddToCartBtn(){
        return cy.get('.product-detail a[title="Add to Cart"]');
    }


 }export default SearchResultPage