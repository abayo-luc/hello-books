describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should fail on invalid login', () => {
    cy.get('input[type="email"]').should('have.attr', 'type', 'email').type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[type="password"]').should('have.attr', 'type', 'password').type('password')
      .should('have.value', 'password');
    cy.get('button').click();
    cy.get('.react-toast-notifications__container').contains('Invalid email or password');
  });
  it('should navigate to home on login success', () => {
    cy.get('input[type="email"]').type('jean.abayo@gmail.com');
    cy.get('input[type="password"]').type('password');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/');
  });
});
