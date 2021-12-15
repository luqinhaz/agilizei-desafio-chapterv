/// <reference types="cypress" />

import signIn from '../../support/pages/signIn'

describe('Realizar login UI', () => {
  beforeEach(() => {
    cy.visit('/')
    signIn.acessarLoginScreen()
  })

  it('Realizar login corretamente', () => {
    signIn.realizarLoginAPI()

    signIn.preencherLoginCorreto()
    signIn.realizarLogin()
    signIn.verificarSeOLoginFoiRealizado()
  })

  it('Realizar login inválido', () => {
    signIn.loginInvalidoAPI()

    signIn.preencherLoginIncorreto()
    signIn.realizarLogin()
    signIn.verificarSeOLoginFoiRealizado()
  })
})
