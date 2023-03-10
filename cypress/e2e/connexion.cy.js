

describe('Connexion Auchan', () => {
  it('passes', () => {

    cy.visit('https://www.auchan.fr/')
    cy.wait(5 * 1000)
    cy.get('#onetrust-reject-all-handler').click()
    cy.get('.a-headerMenuBtn__text').click();
    cy.wait(5 * 1000)
    cy.get('.signin__title').should('have.text', 'Se connecter')

    cy.fixture('example.json').then((user)=>{
      cy.get('#username').type(user.email)  
      cy.get('#password').type(user.pwd) 
    })
    
    cy.get(':nth-child(3) > .btn').click();
    //cy.get('.notifier__content > span').should('have.text', 'Nom d\'utilisateur ou mot de passe valide.')
    cy.wait(5 * 1000)
    cy.get('.a-headerMenuBtn__text').should('have.text', 'Anthony')
  })
})