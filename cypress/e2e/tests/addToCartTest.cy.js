import { homePage } from '../../page/homePage'
import testData from '../../fixtures/testData.json'

const homePageObj = new homePage()  


describe('Home page in Test Automation',() => {

    before(() => {
        cy.login(testData.login.userName, testData.login.password)
        cy.get('.btn.btn-primary').as('btn').click(); //issue1
        cy.get('@btn').click();

    })


    it('Add a product to cart ',()=>{       
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addCart()
        homePageObj
        .verifySuccessMessage()
        .should('contain',testData.message.successMessage)
        .and('contain', testData.product.productName)
    })
})