/// <reference types="cypress" />

const Chance = require('chance')
const chance = new Chance()

const el = require('./elements').ELEMENTS

class SignUp {
  // acesso ao form
  acessarRegisterScreen () {
    cy.get(el.linkRegisterScreen).click()
  }

  cadastrarNovoUsuario () {
    cy.get(el.inputUsername).type(chance.name())
    cy.get(el.inputEmail).type(chance.email())
    cy.get(el.inputPassword).type('Teste@123')
  }

  cadastrarUsuarioExistente () {
    cy.get(el.inputUsername).type('luqinhaz')
    cy.get(el.inputEmail).type(chance.email())
    cy.get(el.inputPassword).type('Teste@123')
  }

  cadastrarEmailExistente () {
    cy.get(el.inputUsername).type(chance.name())
    cy.get(el.inputEmail).type('lqztest@mail.com')
    cy.get(el.inputPassword).type('Teste@123')
  }

  realizarCadastro () {
    cy.get(el.buttonSignUp).click()
  }

  verificarSeOCadastroFoiRealizado () {
    cy.title().should('contain', 'Home')
  }

  verificarSeOUsuarioJaExiste () {
    cy.contains(el.messageUserExist).should('be.visible')
  }

  verificarSeOEmailJaExiste () {
    cy.contains(el.messageEmailExist).should('be.visible')
  }

  cadastroNovoUsuarioAPI () {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'signUp/cadastro-com-sucesso'
    }).as('postUsers')
  }

  cadastrUsuarioExistenteAPI () {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'signUp/cadastro-usuario-existente'
    }).as('postUsers')
  }

  cadastrarEmailExistenteAPI () {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'signUp/cadastro-email-existente'
    }).as('postUsers')
  }
}

export default new SignUp()
