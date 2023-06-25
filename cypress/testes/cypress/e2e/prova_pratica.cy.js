/// <reference types="cypress"/>

describe('Testes da UI com o the-internet', () => {
  it('Test Case: Carregar home page com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('.heading').contains('Welcome to the-internet')
  })

  it('Test case: Teste de autenticação com sucesso',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area!')
    cy.get('.icon-2x').click()
    cy.get('#flash').contains('You logged out of the secure area!')
  })

  it('Test case: Teste autenticação com usuário inexistente',()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
    let userData = gerarDadosUsuario()
    cy.get('#username').type(userData.username)
    cy.get('#password').type(userData.password)
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
  })


})

function gerarDadosUsuario() {
  const nomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Laura", "Diego", "Julia"];
  const sobrenomes = ["Silva", "Santos", "Souza", "Lima", "Pereira", "Melo", "Ferreira", "Costa"];
  const username = nomes[Math.floor(Math.random() * nomes.length)] + sobrenomes[Math.floor(Math.random() * sobrenomes.length)];

  const password = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('');

  return {
    nome: nomes[Math.floor(Math.random() * nomes.length)],
    sobrenome: sobrenomes[Math.floor(Math.random() * sobrenomes.length)],
    username: username.toLowerCase(),
    password: password
  };
}
