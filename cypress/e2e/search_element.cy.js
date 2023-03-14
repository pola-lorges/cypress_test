/// <reference types="cypress"/>

describe('Search element', () => 

{
  let register;

  before(function(){
    cy.fixture('register.json').then(function(data){
      register=data
    })

  })

  it('Doing search', () => 
  {
   
    cy.visit('demo.nopcommerce.com')
   register.productName.forEach(function(element){
   cy.get('#small-searchterms').should('be.visible').clear();
   cy.get('#small-searchterms').type(element);
   cy.get('#small-search-box-form > .button-1').click();
   cy.get('.product-title > a').should('be.visible').contains(element);
   })

 
  })



  it('search_add', function() {


    cy.visit('demo.nopcommerce.com')
    cy.get('#small-searchterms').should('be.visible').clear();
    cy.get('#small-searchterms').type(register.productName[0]);
    cy.get('#small-search-box-form > .button-1').click();
    cy.get('.product-title > a').should('be.visible').contains(register.productName[0]);
    cy.get('.product-box-add-to-cart-button').should('be.visible').click();
    cy.get('#product_attribute_9').select(register.size);
    cy.get('#product_enteredQuantity_25').clear();
    cy.get('#product_enteredQuantity_25').type(register.quantity);
    cy.get('#add-to-cart-button-25').click();
    cy.get('.bar-notification').should('have.text', 'The product has been added to your shopping cart');


  });


  
  it('addComputertrue', function() {
    cy.visit('demo.nopcommerce.com');
    cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();
    cy.get('#product_attribute_2').should('be.visible').select('4');
    cy.get('#product_attribute_3_7').check().should('be.checked');
    cy.get('#product_attribute_4_9').check().should('be.checked');
    cy.get('#product_attribute_5_10').uncheck().should('not.be.checked');
    cy.get('#product_attribute_5_11').check().should('be.checked');
    cy.get('#product_enteredQuantity_1').should('be.visible').clear();
    cy.get('#product_enteredQuantity_1').should('be.visible').type(register.quantity);
    cy.get('#add-to-cart-button-1').should('be.visible').click();
    cy.get('.bar-notification').should('have.text', 'The product has been added to your shopping cart');
 
  });

  
}) 