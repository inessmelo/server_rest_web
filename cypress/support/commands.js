
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('cadUser', () => {
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')
})

Cypress.Commands.add('txtName', (name) => {
    cy.get("input[name=nome]").type(name).should('have.value', name)
})

Cypress.Commands.add('txtEmail', (email) => {
    cy.get("#email").type(email).should('have.value', email)
})

Cypress.Commands.add('txtPass', (pass) => {
    cy.get("#password").type(pass).should('have.value', pass)
})

Cypress.Commands.add('chkAdmin', () => {
    cy.get('#administrador').should('be.visible')
    .check().should('be.checked')
})

Cypress.Commands.add('btnCadastrar', () => {
    cy.get("button[type='submit']").should("be.visible").click()
})

Cypress.Commands.add('btnEntrar', () => {
    cy.get("button[type='submit']").should("be.visible").click()
})

Cypress.Commands.add('msgAlert', (msg) => {
    cy.contains(msg).should('be.visible')
})

Cypress.Commands.add('serverRest', (msg) => {
    cy.get('h1').contains(msg).should('be.visible')
})