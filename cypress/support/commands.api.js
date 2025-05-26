// Cadastro de usuário via API
Cypress.Commands.add('cadastrarUsuarioViaAPI', (nome, email, senha) => {
  return cy.request('POST', 'https://serverest.dev/usuarios', {
    nome,
    email,
    password: senha,
    administrador: 'false'
  })
})
