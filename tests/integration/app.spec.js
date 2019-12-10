describe('Cy#App', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should open the app', () => {
    cy.location('pathname').should('eq', '/');
  });
});
