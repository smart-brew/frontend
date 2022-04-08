describe('Starting new recipe test', () => {
  it('Goes to recipe site', () => {
    cy.visit('recipe');
    cy.get('.chamber:nth-child(2)').click();
    cy.get('button').contains('Load recipe', { timeout: 10000 }).click();
    // wait for data otherwise test crashes
    cy.intercept('/api/data').as('data');
    cy.wait('@data');
    cy.get('button').contains('Start brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    cy.get('[alt="arrow"]').should('be.visible');
  });
});
