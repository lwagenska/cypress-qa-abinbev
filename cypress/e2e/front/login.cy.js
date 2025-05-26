import { faker } from '@faker-js/faker'

describe('Login', () => {
  let nome, email, senha

  beforeEach(() => {
    nome = faker.person.fullName()
    email = faker.internet.email().toLowerCase()
    senha = faker.internet.password()

    cy.cadastrarUsuarioViaAPI(nome, email, senha)
  })

  it('deve logar com sucesso', () => {
    cy.loginUsuario(email, senha)

    cy.url()
      .should('include', '/home')
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Serverest Store')
    cy.get('.card-title')
      .first()
      .should('exist')
      .and('be.visible')
  })
})

