describe('Sign Up ', () => {
  it('should navigate to sign up', () => {
    cy.visit('/signup');
    cy.get('input[type="text"]').should('have.attr', 'type', 'text').type('Username');
    cy.get('input[type="email"]').should('have.attr', 'type', 'email').type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[type="password"]').should('have.attr', 'type', 'password').type('password')
      .should('have.value', 'password');
    cy.get('button').click();
  });
});
