/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

describe('CT- Tela de Cadstro de Usuário', () => {

  const name = faker.person.fullName()
  const email = faker.internet.email()
  const pass = faker.internet.password(8)

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
    cy.title('Front - ServeRest')
  })

  it('Validar compos obrigatorios', () => {
    cy.cadUser()
    cy.btnCadastrar()
    cy.msgAlert('Nome é obrigatório')
    cy.msgAlert('Email é obrigatório')
    cy.msgAlert('Password é obrigatório')
  })

  it('Validar obrigatoriedade do campo Nome', () => {
    cy.cadUser()
    cy.txtEmail(email)
    cy.txtPass(pass)
    cy.btnCadastrar()
    cy.msgAlert('Nome é obrigatório')
  })

  it('Validar obrigatoriedade do campo Email', () => {
    cy.cadUser()
    cy.txtName(name)
    cy.txtPass(pass)
    cy.btnCadastrar()
    cy.msgAlert('Email é obrigatório')
  })

  it('Validar obrigatoriedade do campo Senha', () => {
    cy.cadUser()
    cy.txtName(name)
    cy.txtEmail(email)
    cy.btnCadastrar()
    cy.msgAlert('Password é obrigatório')
  })

  it('Validar email invalido', () => {
    cy.cadUser()
    cy.txtName(name)
    cy.txtEmail(email)
    cy.txtPass(pass)
    cy.btnCadastrar()

    //Então a msge de obrigatoriedade é exibida nos campos
    //cy.contains('Inclua um "@" no endereço de e-mail. "teste#teste.com" está com um "@" faltarndo.).should('be.visible')
  })

  it('Validar email existente', () => {
    cy.cadUser()
    cy.txtName(name)
    cy.txtEmail(email)
    cy.txtPass(pass)
    cy.btnCadastrar()
    cy.msgAlert('Este email já está sendo usado')
  })

  it('Validar cadastro com sucesso', () => {
    cy.cadUser()
    cy.txtName(name)
    cy.txtEmail(faker)
    cy.txtPass(pass)
    cy.btnCadastrar()
    cy.msgAlert('Cadastro realizado com sucesso')
    cy.serverRest('Serverest Store')
  })

  it.only('Validar cadastro com sucesso Admin', () => {
    //Dado que acesso a tela de Cadastro
    cy.cadUser()
    cy.txtName(name)
    cy.txtEmail(email)
    cy.txtPass(pass)
    cy.chkAdmin()
    cy.btnCadastrar()
    cy.serverRest('Bem Vindo Administrador')
  })

})