// Cadastro de usuário via API
Cypress.Commands.add('cadastrarUsuarioViaAPI', (nome, email, senha) => {
  return cy.request('POST', 'https://serverest.dev/usuarios', {
    nome,
    email,
    password: senha,
    administrador: 'false'
  })
})

// Login via API para obter token
Cypress.Commands.add('loginViaAPI', (email, senha) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email,
      password: senha
    },
    failOnStatusCode: false
  })
})

// Lista produtos
Cypress.Commands.add('listarProdutos', () => {
  return cy.request('GET', 'https://serverest.dev/produtos')
    .then((res) => res.body.produtos)
})