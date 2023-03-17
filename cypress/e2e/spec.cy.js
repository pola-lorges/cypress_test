describe('login', () => {
  let testData_AngularPractice ;
  let productData ;
  
  before(() => {
    // runs once before all tests in the block
    cy.fixture('user_data.json').then(function(JSonInside){
        testData_AngularPractice = JSonInside;
    })
    cy.fixture('products.json').then(function(JSonInside){
      productData = JSonInside;
  }).then( () => {
    cy.visit('https://demo.nopcommerce.com');
    cy.get('.ico-login').click();
    cy.get('#Email').should('be.visible').click();
    cy.get('#Email').should('be.visible').clear();
    cy.get('#Email').should('be.visible').type(testData_AngularPractice.mail);
    cy.get('#Password').should('be.visible').clear();
    cy.get('#Password').should('be.visible').type(testData_AngularPractice.password);
    cy.get('form > .buttons > .button-1').should('be.visible').click();
    cy.get('.ico-account').should('be.visible').contains("My account")
  })
    

    //then
  })//before

  // it('Register', () =>
  //   {
  //     cy.visit('https://demo.nopcommerce.com/')
  //     cy.title().should('eq','nopCommerce demo store')
  //     /* ==== Generated with Cypress Studio ==== */
  //     cy.get('.ico-register').should('be.visible').click();
  //     cy.get('#gender-male').check().should('be.checked').and('have.value',testData_AngularPractice.sex);
  //     cy.get('#FirstName').should('be.visible').should('be.enabled').type(testData_AngularPractice.name);
  //     cy.get('#LastName').should('be.visible').should('be.enabled').type(testData_AngularPractice.surname);
  //     cy.get('[name="DateOfBirthDay"]').select(testData_AngularPractice.DateOfBirthDay);
  //     cy.get('[name="DateOfBirthMonth"]').select(testData_AngularPractice.DateOfBirthMonth);
  //     cy.get('[name="DateOfBirthYear"]').select(testData_AngularPractice.DateOfBirthYear);
  //     cy.get('#Email').should('be.visible').should('be.enabled').type(testData_AngularPractice.mail);
  //     cy.get('#Company').should('be.visible').should('be.enabled').type(testData_AngularPractice.company);
  //     cy.get('#Password').should('be.visible').should('be.enabled').type(testData_AngularPractice.password);
  //     cy.get('#ConfirmPassword').should('be.visible').should('be.enabled').type(testData_AngularPractice.passwordc);
  //     cy.get('#register-button').should('be.visible').should('be.enabled').click();
  //     cy.get('.result').should('be.visible').contains("completed");
  //     // cy.get('.buttons > .button-1').click();
  //   })




  it('Add to cart', () => {


      
      productData.productName.forEach(function(element){
      cy.get('.product-item > .details > .product-title > a').contains(element).eq(0).click();
      cy.get('.qty-input').clear();
      cy.get('.qty-input').type('5');
      cy.get('button').contains('Add to cart').click();
      cy.get('.content').should('have.text', 'The product has been added to your shopping cart');
      cy.visit('https://demo.nopcommerce.com');
    });

    cy.get('.product-item > .details > .product-title > a').contains("Build your own computer").eq(0).click();
    cy.get('#product_attribute_3_7').check();
    cy.get('#product_attribute_4_9').check();
    cy.get('#product_attribute_5_11').check();
    cy.get('#product_attribute_2').select('3');
    cy.get('#product_enteredQuantity_1').clear();
    cy.get('#product_enteredQuantity_1').type('5');
    cy.get('#add-to-cart-button-1').click();
    cy.get('.content').should('have.text', 'The product has been added to your shopping cart');
    cy.visit('https://demo.nopcommerce.com');
     





  })
})
