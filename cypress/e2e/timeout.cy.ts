Cypress.config("defaultCommandTimeout", 16000);
describe('Automatic wait',()=>  {
    beforeEach('test 1',() =>{
        cy.visit('/loaddelay');
    });

    it('timeout', ()   => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.');

    }) 
    it('Progress Bar Scenario', () =>  {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#startButton')

    }) 
});



