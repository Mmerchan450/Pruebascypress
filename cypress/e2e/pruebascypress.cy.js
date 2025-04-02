describe('pruebas de login', () => {
  

  it('login correcto con usuario valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get("#flash").should('contain', 'You logged into a secure area!')

  })
  it('login no correcto con usuario no valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("pacopepe")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get("#flash").should('contain', 'Your username is invalid!')

  })
  it('login no correcto con usuario valido y contraseña no valida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!12")
    cy.get('.fa').click()
    cy.get("#flash").should('contain', 'Your password is invalid!')



  })
    
})
