describe('API - Lista de produtos', () => {
  it('deve retornar uma lista de produtos com estrutura válida', () => {
    cy.request('GET', 'https://serverest.dev/produtos').then(res => {
      expect(res.status).to.eq(200)
      expect(res.body.quantidade).to.be.greaterThan(0)
      expect(res.body.produtos[0]).to.include.all.keys('_id', 'nome', 'preco', 'descricao', 'quantidade')
    })
  })
})
