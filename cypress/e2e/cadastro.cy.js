/// <reference types="Cypress" />

describe('template spec', () => {

  beforeEach( () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2')
  })

  it('Devo clicar no no link Cadastrar', () => {
    
  })
})