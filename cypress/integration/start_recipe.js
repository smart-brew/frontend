describe('Starting new recipe test', () => {
  it('Goes to recipe site', () => {
    // go to /recipe site from default baseUrl in cypress.json
    cy.visit('recipe');
    cy.get('.chamber:nth-child(2)').click();
    // select button with text
    cy.get('button').contains('Load recipe', { timeout: 10000 }).click();
    // wait for data otherwise test crashes
    cy.intercept('/api/data').as('data');
    cy.wait('@data');
    cy.get('button').contains('Start brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    // arrow must be visible to pass test
    cy.get('[alt="arrow"]').should('be.visible');
  });
});
