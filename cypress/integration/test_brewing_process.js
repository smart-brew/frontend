describe('Testing of recipe brewing operations', () => {
  it('Starts recipe', () => {
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

  it('Pauses the recipe', () => {
    cy.get('button').contains('Pause brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    cy.intercept('/api/data').as('data');
    cy.wait('@data');
    cy.get('button')
      .contains('Resume brewing', { timeout: 10000 })
      .should('be.visible');
  });
  it('Resumes the recipe', () => {
    cy.get('button').contains('Resume brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    cy.intercept('/api/data').as('data');
    cy.wait('@data');
    cy.get('button')
      .contains('Pause brewing', { timeout: 10000 })
      .should('be.visible');
  });
  it('Aborts the recipe', () => {
    cy.get('button').contains('Abort brewing', { timeout: 10000 }).click();
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    // second confirm
    cy.get('button').contains('Confirm', { timeout: 10000 }).click();
    cy.intercept('/api/data').as('data');
    cy.wait('@data');
    cy.get('button')
      .contains('Start brewing', { timeout: 10000 })
      .should('be.visible');
  });
});
