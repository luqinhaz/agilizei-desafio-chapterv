/// <reference types="cypress" />

const el = require('./elements').ELEMENTS

class SignIn {
  // acesso ao form
  acessarLoginScreen () {
    cy.get(el.linkLoginScreen).click()
  }

  preencherLoginCorreto () {
    cy.get(el.inputEmail).type('lqztest@mail.com')
    cy.get(el.inputPassword).type('Teste@123')
  }

  preencherLoginIncorreto () {
    cy.get(el.inputEmail).type('emailnaoexistenteparateste@mail.com.br')
    cy.get(el.inputPassword).type('Teste@123')
  }

  realizarLogin () {
    cy.get(el.buttonSignIn).click()
  }

  verificarSeOLoginFoiRealizado () {
    cy.contains('No articles are here... yet.').should('be.visible')
  }

  verificarSeOUsuarioNaoExiste () {
    cy.contains('email or password is invalid').should('be.visible')
  }

  realizarLoginAPI () {
    cy.intercept({
      method: 'POST',
      path: '/api/users/login'
    }, {
      statusCode: 200,
      fixture: 'signIn/login-com-sucesso'
    }).as('postUsersLogin')
  }

  loginInvalidoAPI () {
    cy.intercept({
      method: 'POST',
      path: '/api/users/login'
    }, {
      statusCode: 403,
      fixture: 'signIn/login-sem-sucesso'
    }).as('postUsersLogin')
  }
}

export default new SignIn()
