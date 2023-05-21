describe.skip('Click Challange', () => {
    beforeEach(()  =>{
        cy.visit('/click')
    })
    
    it('class Assersion', () => {
        cy.get('button[class="btn btn-primary"]').click().should('have.class','btn btn-success')

    });
    it('Background Assersion', () => {
        cy.get('button#badButton').click().should('have.css','background-color', 'rgb(40, 167, 69)')
    });
    it('border color', () => {
        cy.get('button#badButton').click().should('have.css','border-color', 'rgb(40, 167, 69)') 
    });
});


describe.skip('Hover Challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseover')
    })
    it('hover with cypress workaround', () => {
        cy.get(".text-primary").trigger('mouseover')
    });
    it('hover with cypress workaround', () => {
        cy.get(".text-primary").realHover();
    });
});

describe('Table Dynamic', () => {
    beforeEach(() => {
        cy.visit('/dynamictable')
    });
    it.skip('Chrome CPU test', () => {
        cy.get(`div[role="row"] span`).each(($cell) =>{
            cy.log($cell.text());
        })
   
    });
    it('Chrome CPU test 2', () => {
        cy.get(`div[role="row"] span`).each(($cell) =>{
            if($cell.text().includes('%')){
                cy.log(`I have found the ${$cell.text()} row!`);
                let chromeRowValue: string[] = [];
                chromeRowValue.push($cell.next().text());
                chromeRowValue.push($cell.next().next().text());
                chromeRowValue.push($cell.next().next().next().text());
                chromeRowValue.push($cell.next().next().next().next().text());
                cy.log("Chrome row Values", chromeRowValue);
                chromeRowValue.forEach((chromeValue) => {
                    cy.log(chromeValue);
                    cy.get('.bg-warning' );
                   
                })

            }
            
        })
   
    });
});