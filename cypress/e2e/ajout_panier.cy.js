const { equal } = require("assert");

describe('Ajout panier log', () => {
  tag : log;
  let testData_AngularPractice ;
  it('passes', () => {
    cy.fixture('user_data.json').then(function(JSonInside){
      testData_AngularPractice = JSonInside;
  }).then( () => {
    cy.visit('https://demo.nopcommerce.com')
    cy.get('.ico-login').click();
    cy.get('#Email').type(testData_AngularPractice.mail);
    cy.get('#Password').type(testData_AngularPractice.password);
    cy.get('form > .buttons > .button-1').click()
    cy.get('.ico-account').should('be.visible').contains("My account")
    cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').should('be.visible').click()
    cy.get('#product_enteredQuantity_4').clear().type(testData_AngularPractice.qty)
    cy.get('#add-to-cart-button-4').click()
    cy.get('.content').should('be.visible').contains("The product has been added to your shopping cart")
    cy.get('.header-logo > a > img').click()
    cy.get('.cart-label').click()
    
  })
  

  })
})