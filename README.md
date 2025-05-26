# Cypress QA Automation - AB InBev Test

Projeto de automação de testes com Cypress, criado para um teste técnico.

## ✅ Visão Geral

Este projeto cobre testes automatizados para:

- 🔌 **API:** Usuários, Produtos e Carrinho.
- 🖥️ **Front-end:** Cadastro, Login e Detalhe do produto.
- 🧰 Boas práticas com Custom Commands, uso do faker e organização de cenários.

---

## 🛠️ Pré-requisitos

Você precisa ter instalado em sua máquina:

- **Git**
- **Node.js**
- **npm**

> É recomendado o uso da versão `v24.x` do Node.js ou uma versão LTS mais recente.

---

## 📦 Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seu-usuario/cypress-qa-abinbev.git
cd cypress-qa-abinbev
npm install
```
> O Cypress será instalado automaticamente junto com as dependências do projeto via `npm install`.

---

## 🚀 Como executar os testes

#### Modo headless (linha de comando)
```bash
npm run cy:run
``` 

#### Modo interativo (Cypress App)
```bash
npm run cy:open
```

---

## 🗂️ Estrutura dos testes
```
cypress/
├── e2e/
│   ├── front/
│   │   ├── cadastro.cy.js
│   │   ├── login.cy.js
│   │   └── detalhe_produto.cy.js
│   └── api/
│       ├── usuarios.cy.js
│       ├── produtos.cy.js
│       └── carrinho.cy.js
├── support/
│   ├── commands.api.js
│   ├── commands.gui.js
│   ├── commands.js
│   └── e2e.js
```
* Os testes `front/` automatizam o fluxo completo de um usuário comum.
* Os testes `api/` cobrem endpoints reais da API do [Serverest](https://serverest.dev/).

---

## 🧠 Tecnologias utilizadas
* [Cypress](https://www.cypress.io/)
* [Faker.js](https://github.com/faker-js/faker)
* Github Actions (CI/CD)

---

## ⚙️ Integração contínua (CI)

Este projeto possui pipeline automatizada via GitHub Actions.
A cada `push` ou `pull request` na branch `master`, todos os testes são executados em headless.
Arquivos de configuração:
```
.github/workflows/ci.yml
```

---

## 💡 Autor

Este projeto foi desenvolvido por **Lucas Wagenska** como parte de um teste técnico.