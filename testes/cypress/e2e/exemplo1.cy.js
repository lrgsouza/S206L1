/// <reference types="cypress"/>

describe('Criando cenário de teste para o site clobalsqa',() => {

  it('Caso de teste: Registrando unm usuário no site com sucesso', ()=> {
    let info = criarUsuario()
  })

  it('Caso de teste: Registrando unm usuário com falha (faltando senha)', ()=> {
    let info = criarUsuario(true)
  })


  it('Caso de teste: Realizando login com sucesso', ()=> {

    let info = criarUsuario(false)
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text',info[0])

  })

})

function criarUsuario(falha){

  let horas = new Date().getHours().toString();
  let minutos = new Date().getMinutes().toString();
  let segundos = new Date().getSeconds().toString();

  let user = generateRandomUsername()
  let senha = generateRandomPassword(10)
  let userInfo = [user,senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  if(falha){
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text','Password is required')
    cy.get('.btn-primary').should('be.disabled')
  }else{
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')
  }
  return userInfo
}


function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}


function generateRandomUsername() {
  const adjectives = ["happy", "lucky", "clever", "brave", "funny", "kind", "silly", "friendly", "honest", "wise"];
  const nouns = ["dog", "cat", "bird", "fish", "bear", "tiger", "lion", "fox", "owl", "horse"];
  
  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const randomNounIndex = Math.floor(Math.random() * nouns.length);
  
  const adjective = adjectives[randomAdjectiveIndex];
  const noun = nouns[randomNounIndex];
  
  const username = adjective + noun + Math.floor(Math.random() * 100);
  
  return username;
}