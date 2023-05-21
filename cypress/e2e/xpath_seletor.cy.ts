describe('selectors',()=>  {
    beforeEach('',() =>{
        cy.visit('/classattr');
    
    })
  it('Xpath selector',() => {
     cy.xpath(`//*[text()='Correct variant is']`).should('have.text','Correct variant is')

    })
    it('Xpath selector',() => {
       cy.xpath(`//*[text()='Class attribute of an element may contain more than one class reference. E.g. ']`).should('have.text','Class attribute of an element may contain more than one class reference. E.g. ')
  
    })
    it('Xpath selector',() => {
       cy.xpath(`//pre[@class=" language-html"]`).should('have.text','<button class="btn btn-primary btn-test">')

       
  })
});