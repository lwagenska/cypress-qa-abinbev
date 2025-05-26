// Comando customizado para cadastrar usuários
Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {
  cy.visit('/cadastrarusuarios')
  cy.get('#nome').type(nome)
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('#administrador').uncheck()
  cy.contains('button', 'Cadastrar').click()
})

// Comando customizado para login
Cypress.Commands.add('loginUsuario', (email, senha) => {
  cy.visit('/login')
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.contains('button', 'Entrar').click()
})