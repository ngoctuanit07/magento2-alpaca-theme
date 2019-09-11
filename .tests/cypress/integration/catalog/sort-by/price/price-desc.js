describe('CATALOG - Sort By Price descending test', () => {
  it('selects sorting by price descending', () => {
    cy.randomCategory()
    cy.get('.choices')
      .first()
      .click()
    cy.get('#choices-sort-by-item-choice-4').click()
    cy.url().should('include', '?order=price&dir=desc')
  })

  it('checks active sort by price descending in next page', () => {
    cy.nextPage()
    cy.url().should('include', '?p=2&order=price&dir=desc')
  })

  it('checks active sort by price descending in previous page', () => {
    cy.previousPage()
    cy.url().should('include', '?order=price&dir=desc')
  })
})
