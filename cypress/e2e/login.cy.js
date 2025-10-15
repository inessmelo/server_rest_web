/// <reference types="Cypress" />

describe('CT - Tela de Login', () => {

    beforeEach(() => {
        //Dado que acesso a tela de Login
        cy.visit('https://front.serverest.dev/login')
        cy.title('Front - ServeRest')
    })

    it("Validar campos obrigatorios", () => {
        cy.btnEntrar()
        cy.msgAlert('Email é obrigatório')
        cy.msgAlert('Password é obrigatório')
    })

    it('Validar obrigatoriedade do campo Senha', () => {
        cy.txtEmail('userAdmin@teste.com')
        cy.btnEntrar()
        cy.msgAlert('Password é obrigatório')
    })

    it('Validar obrigatoriedade do campo Email', () => {
        cy.txtPass('abc@123')
        cy.btnEntrar()
        cy.msgAlert('Email é obrigatório')
    })

    it('Validar login com email invalido', () => {
        cy.txtEmail('userAdmin#teste.com')
        cy.txtPass('abc@123')
        cy.btnEntrar()
        //cy.msgAlert('Email e/ou senha inválidos')

        //Então a msg de erro é exibida nos campos
        //cy.contains('Inclua um "@" no endereço de e-mail. "teste#teste.com" está com um "@" faltarndo.).should('be.visible')
    })

    it('Validar login com senha incorreta', () => {
        cy.txtEmail('userAdmin@teste.com')
        cy.txtPass('abc123')
        cy.btnEntrar()
        cy.msgAlert('Email e/ou senha inválidos')
    })

    it('Validar login com sucesso', () => {
        cy.txtEmail('userAdmin@teste.com')
        cy.txtPass('abc@123')
        cy.btnCadastrar()
        cy.serverRest('Bem Vindo Administrador')
    })

})