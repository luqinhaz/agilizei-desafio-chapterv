/// <reference types="cypress" />

import signUp from '../../support/pages/signUp'

describe('Cadastro completo de um usuário por tela.', () => {
  beforeEach(() => {
    cy.visit('/')

    signUp.acessarRegisterScreen()
  })

  it('Cadastrar novo usuário no sistema.', () => {
    // Preenchendo os dados necessários
    signUp.cadastrarNovoUsuario()
    // Apertar o botão de cadastro.
    signUp.realizarCadastro()
    signUp.verificarSeOCadastroFoiRealizado()
  })

  it('Cadastrar um usuário já existente no sistema.', () => {
    signUp.cadastrarUsuarioExistente()
    signUp.realizarCadastro()
    signUp.verificarSeOUsuarioJaExiste()
  })

  it('Cadastrar um e-mail já existente no sistema.', () => {
    signUp.cadastrarEmailExistente()
    signUp.realizarCadastro()
    signUp.verificarSeOEmailJaExiste()
  })
})
