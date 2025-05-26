import { faker } from '@faker-js/faker'

describe('Detalhes do produto', () => {
  let nome, email, senha

  beforeEach(() => {
    nome = faker.person.fullName()
    email = faker.internet.email().toLowerCase()
    senha = faker.internet.password()

    cy.cadastrarUsuarioViaAPI(nome, email, senha)
    cy.loginUsuario(email, senha)
  })

  it('deve permitir acessar o detalhe de um produto após o login', () => {
    cy.get('.card-title')
      .first()
      .should('exist')
      .and('be.visible')
      .invoke('text')
      .then(tituloProduto => {
        cy.contains('a', 'Detalhes')
          .first()
          .click()
    
        cy.url()
          .should('include', '/detalhesProduto/')
        cy.contains('Detalhes do produto')
          .should('be.visible')
        cy.get('[data-testid="product-detail-name"]')
          .should('be.visible')
          .invoke('text')
          .then(tituloDetalhe => {
            expect(tituloDetalhe.trim()).to.eq(tituloProduto.trim())
          })
      })
  })
})
