/// <reference types="cypress" />

import signIn from '../../support/pages/signIn'

describe('Realizar login E2E', () => {
  beforeEach(() => {
    cy.visit('/')
    signIn.acessarLoginScreen()
  })
  it('Quando eu digito login e senha corretos, devo ser logado no sistema', () => {
    signIn.preencherLoginCorreto()
    signIn.realizarLogin()
    signIn.verificarSeOLoginFoiRealizado()
  })
  it('Quando eu digito login e senha incorretos, devo ser logado no sistema', () => {
    signIn.preencherLoginIncorreto()
    signIn.realizarLogin()
    signIn.verificarSeOLoginFalhou()
  })
})
