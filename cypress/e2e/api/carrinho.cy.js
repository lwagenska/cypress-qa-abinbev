import { faker } from '@faker-js/faker'

describe('API - Criar carrinho', () => {
  let token
  let produtoId
  const email = faker.internet.email().toLowerCase()
  const senha = faker.internet.password()

  beforeEach(() => {
    const nome = faker.person.fullName()

    cy.cadastrarUsuarioViaAPI(nome, email, senha).then(() => {
      cy.loginViaAPI(email, senha).then(res => {
        expect(res.status).to.eq(200)
        token = res.body.authorization
      })
    })

    cy.listarProdutos().then(produtos => {
      const produtoAleatorio = Cypress._.sample(produtos)
      expect(produtoAleatorio).to.have.property('_id')
      produtoId = produtoAleatorio._id
    })

  })

  it('deve criar carrinho com um produto', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      headers: { Authorization: token },
      body: {
        produtos: [{ idProduto: produtoId, quantidade: 1 }]
      }
    }).then(res => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})
