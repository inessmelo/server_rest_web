/// <reference types="Cypress" />

import { faker} from '@faker-js/faker' 

describe('template spec', () => {

    //Gerando Nome, Email e Senha
    const name = faker.person.fullName()
    const email = faker.internet.email()
    const pass = faker.internet.password(8)

  beforeEach( () => {
    cy.visit('https://front.serverest.dev/login')
    cy.title('Front - ServeRest')
  })
  
  it('Validar compos obrigatorios', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando não preencho os campo obrigatorios
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Nome é obrigatório').should('be.visible')
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')

  })

  it('Validar obrigatoriedade do campo Nome', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Nome
    cy.get("input[name=email]").type(email)
    cy.get("input[name=password]").type(pass)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Nome é obrigatório').should('be.visible')
  })

  it('Validar obrigatoriedade do campo Email', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Email
    cy.get("input[name=nome]").type(name)
    cy.get("input[name=password]").type(pass)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Email é obrigatório').should('be.visible')
  })

  it('Validar obrigatoriedade do campo Senha', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Email
    cy.get("input[name=nome]").type(name)
    cy.get("input[name=email]").type(email)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Password é obrigatório').should('be.visible')
  })

  it('Validar email invalido', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Email
    cy.get("input[name=nome]").type(name)
    cy.get("input[name=email]").type('teste#teste.com')
    cy.get("input[name=password]").type(pass)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    //cy.contains('Inclua um "@" no endereço de e-mail. "teste#teste.com" está com um "@" faltarndo.).should('be.visible')
  })

  it('Validar email existente', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Email
    cy.get("input[name=nome]").type(name)
    cy.get("input[name=email]").type('teste@teste.com')
    cy.get("input[name=password]").type(pass)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Este email já está sendo usado').should('be.visible')
  })

  it('Validar cadastro com sucesso', () => {
    //Dado que acesso a tela de Cadastro
    cy.get('a[data-testid="cadastrar"]').should('be.visible').click()
    cy.get('h2').contains('Cadastro')

    //Quando nao preencho o campo Email
    cy.get("input[name=nome]").type(name)
    cy.get("input[name=email]").type(email)
    cy.get("input[name=password]").type(pass)

    //E clico no btn Cadastrar
    cy.get("button[type='submit']").should("be.visible").click()

    //Então a msge de obrigatoriedade é exibida nos campos
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    cy.get('h1').contains('Serverest Store').should('be.visible')
  })

})