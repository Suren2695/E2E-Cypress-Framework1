export class registerPage {

    webLocators = {

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fname){
        cy.get(this.webLocators.firstName).type(fname)
    }
    enterLastName(lname){
        cy.get(this.webLocators.lastName).type(lname)
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(tphone){
        cy.get(this.webLocators.telephone).type(tphone)
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
    }
    enterPasswordConfirm(passwordConfirm){
        cy.get(this.webLocators.passwordConfirm).type(passwordConfirm)
    }
    selectCheckbox(){
        cy.get(this.webLocators.policyCheckbox).check()
    }
    clickOnContinue(){
        cy.get(this.webLocators.continue).click()
    }

}