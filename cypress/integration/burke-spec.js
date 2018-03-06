describe('Fulfill Testing of Bucket 2 Project', function() {
  it('.should pass all tests', function () {
    cy.visit('http://localhost:8080/#/')
    cy.get('#splash > div > h1').should('have.text', 'Burke Weather!')
    cy.get('h3').should('have.length', 2)
    cy.get('button').click()
    cy.get('h1').should('have.text', 'Burke Weather!')
    cy.get('input').click().type('80020').type('{enter}')
    cy.get('.city-name').contains('Broomfield')
    cy.get('.weather-pic').should('not.have.attr', 'src', '')
  })
})
