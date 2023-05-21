describe('locators',()=>  {
    beforeEach('',() =>{
        cy.visit('/dynamicid');
    
    })
  it('CSSelector',() => {
     cy.contains('Button with Dynamic ID').should('have.text','Button with Dynamic ID');

  })
  it('cy.get & cy.find',() => {
    cy.get('div').find('button').should('have.text','Button with Dynamic ID');

 })
 it('CSS selector using any attribute',() => {
  cy.get(`button[class="btn btn-primary"]`).should('have.text','Button with Dynamic ID');
  
 })
it('CSS selector using any class',() => {
 cy.get('.btn-primary').should('have.text','Button with Dynamic ID');
 

 })
});
