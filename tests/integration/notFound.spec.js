describe('Not Found Page', () => {
  it('should display not found page on invalid url', () => {
    cy.visit('/hello-world');
    cy.get('#not-found-msg').contains('Oh no! it looks like this page was wiped out by Thanos');
    cy.location('pathname').should('eq', '/hello-world');
  });
  it('should navigate back', () => {
    cy.visit('/login');
    cy.location('pathname').should('eq', '/login');
    cy.visit('/hellow-world');
    cy.get('#go-back-btn').click();
    cy.location('pathname').should('eq', '/login');
  });
});
