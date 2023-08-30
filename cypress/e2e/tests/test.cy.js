
describe('test',()=>{
    it('True statement',()=>{
      //  cy.visit('https://www.google.co.in/')
        cy.visit("https://webpack.js.org/concepts/#loaders")
    })

    //Failure case

    it("No Match Failure Statement",()=>{
      expect(true).to.eq(false)
    })
})