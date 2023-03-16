describe('template spec', () => {
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
    cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
    cy.get('#add-to-wishlist-button-4').click()
    cy.get('.bar-notification').should('be.visible').contains("The product has been added to your wishlist")
    cy.get('.header-logo > a > img').click()
    cy.get('.wishlist-label').click()
    cy.get('.add-to-cart > input').click()
    cy.get('.wishlist-add-to-cart-button').click()
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()
  })
  
})
})