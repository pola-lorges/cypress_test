/// <reference types="cypress"/>

describe('Login or Logout', () => 

{
  let register;

  before(function(){
    cy.fixture('register.json').then(function(data){
      register=data
    })

  })

    it('User login', () => 
    {
      cy.visit('https://demo.nopcommerce.com')
      cy.title().should('eq','nopCommerce demo store')
      cy.get('.ico-login').should('be.visible').click();
      cy.get('#Email').should('be.visible').should('be.enabled').clear().type(register.email);
      cy.get('.form-fields > :nth-child(2)').should('be.visible').click();
      cy.get('#Password').should('be.visible').should('be.enabled').type(register.password);
      cy.get('form > .buttons > .button-1').should('be.visible').click();


      /* ==== Generated with Cypress Studio ==== */
      cy.get('.ico-logout').click();
      /* ==== End Cypress Studio ==== */
  
    })

    it('User logout', () => 
    {
      cy.visit('https://demo.nopcommerce.com')
      cy.title().should('eq','nopCommerce demo store')
      cy.get('.ico-login').should('be.visible').click();
      cy.get('#Email').should('be.visible').should('be.enabled').clear().type(register.email);
      cy.get('.form-fields > :nth-child(2)').should('be.visible').click();
      cy.get('#Password').should('be.visible').should('be.enabled').type(register.password);
      cy.get('form > .buttons > .button-1').should('be.visible').click();
      cy.get('.ico-account').should('be.visible').contains('My account');


      /* ==== Generated with Cypress Studio ==== */
      cy.get('.ico-logout').click();
      cy.get('.ico-login').should('be.visible').contains('Log in');
      /* ==== End Cypress Studio ==== */
  
    })




})