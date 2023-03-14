/// <reference types="cypress"/>

describe('My User Registration', () => 

{
  let register;

  before(function(){
    cy.fixture('register.json').then(function(data){
      register=data
    })

  })

    it('User Register', () => 
    {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
    
      cy.get('.ico-register').should('be.visible').click();
      cy.get('#gender-male').check().should('be.checked').and('have.value','M');
      cy.get('#FirstName').should('be.visible').should('be.enabled').type(register.firstname);
      cy.get('#LastName').should('be.visible').should('be.enabled').type(register.lastname);
      cy.get('[name="DateOfBirthDay"]').select(register.DateOfBirthDay);
      cy.get('[name="DateOfBirthMonth"]').select(register.DateOfBirthMonth);
      cy.get('[name="DateOfBirthYear"]').select(register.DateOfBirthYear);
      cy.get('#Email').should('be.visible').should('be.enabled').type(register.email);
      cy.get('#Company').should('be.visible').should('be.enabled').type(register.company);
      cy.get('#Password').should('be.visible').should('be.enabled').type(register.password);
      cy.get('#ConfirmPassword').should('be.visible').should('be.enabled').type(register.confirmpassword);
      cy.get('#register-button').should('be.visible').click();
      cy.get('.result').should('be.visible');
      cy.get('.buttons > .button-1').click();

    })



})