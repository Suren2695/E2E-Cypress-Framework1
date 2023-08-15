import {registerPage} from '../../page/registerPage'
import Data from '../../fixtures/registerData.json'

const registerObj = new registerPage() // creating object



describe('Registeration page in Test Automation',()=>{
    it('Enter the value in the register page',()=>{
        registerObj.openURL();
        registerObj.enterFirstName(Data.firstName)
        registerObj.enterLastName(Data.lastName)
        registerObj.enterEmail(Data.email)
        registerObj.enterTelephone(Data.telephone)
        registerObj.enterPassword(Data.password)
        registerObj.enterPasswordConfirm(Data.passwordConfirm)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })
})