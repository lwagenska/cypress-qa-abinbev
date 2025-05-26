import { faker } from '@faker-js/faker'

describe('API - Cadastro de usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    const nome = faker.person.fullName()
    const email = faker.internet.email().toLowerCase()
    const senha = faker.internet.password()

    cy.cadastrarUsuarioViaAPI(nome, email, senha).then(res => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})
