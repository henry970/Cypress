describe('Login Functionality', () => {
    const validUsername = 'standard_user';
    const validPassword = 'validPass';
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/'); // Now only need the relative path
    });
  
    it('Successful login with valid credentials', () => {
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input').type(validUsername);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input').type(validPassword);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/input').click();
      cy.url().should('include', '/dashboard'); // Assuming successful login redirects to /dashboard
    });
  
    it('Failed login with invalid credentials', () => {
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input').type(invalidUsername);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input').type(invalidPassword);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/input').click();
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3').should('be.visible');
    });
  
    it('Error message display when login fails', () => {
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input"]').type(validUsername);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input').type(invalidPassword);
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/input').click();
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3').should('be.visible');
    });
  });
  
  