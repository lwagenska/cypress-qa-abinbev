import { faker } from '@faker-js/faker'

describe('Cadastro de usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email().toLowerCase()
    const senha = faker.internet.password()

    cy.cadastrarUsuario(nome, email, senha)

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')
    cy.url().should('include', '/home')
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Serverest Store')
    cy.get('.card-title')
      .first()
      .should('exist')
      .and('be.visible')
  })
})
