export class homePage {
    weblocators = {

        searchInput : '.form-control.input-lg',
        clickSearch : 'btn.btn-default.btn-lg',
        product : 'img[title="MacBook"]',
        addToCart : '#button-cart',
        successMessage : 'div.alert.alert-success.alert-dismissible'

    }

    searchProduct(productName){
        cy.get(this.weblocators.searchInput).type(productName);
        cy.get(this.weblocators.clickSearch).click();
    }

    addCart(){
     //   cy.get(this.weblocators.addToCart).click()
     cy.contains(this.weblocators.addToCart).first().click()
    }

    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage)
    }
}