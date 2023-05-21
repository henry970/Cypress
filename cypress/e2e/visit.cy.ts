describe('Basic', () => {
  it('Explaination', () => {
    cy.visit('/dynamicid')
   
  })
})
describe('classattr page', () =>{
  it('', ()=> {
    cy.visit('/classattr')

  })
})

describe('hiddenlayers page', () =>{
  it('', ()=> {
    cy.visit('/hiddenlayers')
   

  });
})

describe('textinput page', () =>{
  it('', ()=> {
    cy.visit('/textinput')
    cy.get('input#newButtonName').type('input hello world');
    cy.get('button#updatingButton').click();
    
  })
})

