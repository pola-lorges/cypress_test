describe('vider panier log', () => {
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
    cy.get('#topcartlink').click()
    cy.get('.no-data')
    while(cy.get('.no-data').should('not.exist')){
      cy.get('tbody > :nth-child(1) > .remove-from-cart').click()
    }

  })
})
})