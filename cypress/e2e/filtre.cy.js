describe('template spec', () => {
  let register;

  before(function(){
    cy.fixture('register.json').then(function(data){
      register=data
    })

  })
  it('passes', () => {
    cy.visit('demo.nopcommerce.com')
    register.productName.forEach(function(element){
      cy.get('.menu-toggle').click()
      cy.get('.mobile > :nth-child(1) > .sublist-toggle').click()
      cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click()
      cy.get('.filter-content > :nth-child(2) > :nth-child(3)').click()
      cy.get('#attribute-option-9').should('be.checked')
    })
  })
})