describe('My First Test', () => {
  let testData_AngularPractice ;
  let productData ;
  
  before(() => {
    // runs once before all tests in the block
    //cy.fixture('03_RS-AngularPractice.json')
    cy.fixture('user_data.json').then(function(JSonInside){
        testData_AngularPractice = JSonInside;
    })
    cy.fixture('products.json').then(function(JSonInside){
      productData = JSonInside;
  })
    
    //then
  })//before

  it('Register', () =>
    {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.ico-register').should('be.visible').click();
      cy.get('#gender-male').check().should('be.checked').and('have.value',testData_AngularPractice.sex);
      cy.get('#FirstName').should('be.visible').should('be.enabled').type(testData_AngularPractice.name);
      cy.get('#LastName').should('be.visible').should('be.enabled').type(testData_AngularPractice.surname);
      cy.get('[name="DateOfBirthDay"]').select(testData_AngularPractice.DateOfBirthDay);
      cy.get('[name="DateOfBirthMonth"]').select(testData_AngularPractice.DateOfBirthMonth);
      cy.get('[name="DateOfBirthYear"]').select(testData_AngularPractice.DateOfBirthYear);
      cy.get('#Email').should('be.visible').should('be.enabled').type(testData_AngularPractice.mail);
      cy.get('#Company').should('be.visible').should('be.enabled').type(testData_AngularPractice.company);
      cy.get('#Password').should('be.visible').should('be.enabled').type(testData_AngularPractice.password);
      cy.get('#ConfirmPassword').should('be.visible').should('be.enabled').type(testData_AngularPractice.passwordc);
      cy.get('#register-button').should('be.visible').should('be.enabled').click();
      cy.get('.result').should('be.visible').contains("completed");
      // cy.get('.buttons > .button-1').click();
    })




  it('Login', () => {
    cy.visit('https://demo.nopcommerce.com')
    cy.title().should('eq','nopCommerce demo store')
    cy.get('.ico-login').should('be.visible').click();
    cy.title().should('eq','nopCommerce demo store. Login')
    cy.get('#Email').should('be.visible').clear();
    cy.get('#Email').should('be.visible').type(testData_AngularPractice.mail);
    cy.get('#Password').should('be.visible').click();
    cy.get('#Password').should('be.visible').clear();
    cy.get('#Password').should('be.visible').type(testData_AngularPractice.password);
    cy.get('form > .buttons > .button-1').should('be.visible').click();
    cy.get('.ico-account').should('be.visible').contains("My account")
    


  })


})