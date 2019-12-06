describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should find all component', () => {
    cy.get('input[type="email"]').should('have.attr', 'type', 'email').type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[type="password"]').should('have.attr', 'type', 'password').type('password')
      .should('have.value', 'password');
  });
});
