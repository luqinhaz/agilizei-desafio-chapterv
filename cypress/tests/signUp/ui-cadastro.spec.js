/// <reference types="cypress" />

import signUp from '../../support/pages/signUp'

describe('Cadastro de UI', () => {
  beforeEach(() => {
    cy.visit('/')

    signUp.acessarRegisterScreen()
  })
  it('Cadastro com sucesso', () => {
    signUp.cadastroNovoUsuarioAPI()
    // Preenchendo os campos
    signUp.cadastrarNovoUsuario()
    signUp.realizarCadastro()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    signUp.cadastrUsuarioExistenteAPI()
    // Preenchendo os campos
    signUp.cadastrarUsuarioExistente()
    // Click no botão de Submit
    signUp.realizarCadastro()
    signUp.verificarSeOUsuarioJaExiste()
  })

  it('Cadastro com e-mail já existente', () => {
    signUp.cadastrarEmailExistenteAPI()
    // Preenchendo os campos
    signUp.cadastrarEmailExistente()
    // Click no botão de Submit
    signUp.realizarCadastro()
    signUp.verificarSeOEmailJaExiste()
  })
})
