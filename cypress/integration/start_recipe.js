// todo make test for making new recipe
describe('Starting new recipe test', () => {
  it('Goes to recipe site', () => {
    cy.visit('http://localhost:3000/recipe');
    cy.get('.chamber:nth-child(2)').click();
    cy.get('button').contains('Load recipe', { timeout: 10000 }).click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.get('button').contains('Start brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    // cy.wait(500);
    cy.get('[alt="arrow"]').should('be.visible');
  });
});
