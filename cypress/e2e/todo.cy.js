describe('agregar tareas', () => {
  it('agregar una tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar leche{enter}")
    cy.get('[data-testid="todo-item-label"]').should("contain", "comprar leche")

     })
  it('marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar leche{enter}")
    cy.get('[data-testid="todo-item-label"]').should("contain", "comprar leche")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item"]').should('have.class', 'completed')
  
     })

  it('desmarcar la tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar leche{enter}")
    cy.get('[data-testid="todo-item-label"]').should("contain", "comprar leche")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item"]').should('have.class', 'completed')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-label"]').should("not.have.class", "completed")

    })
  it('editar una tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar leche{enter}")
    cy.get('[data-testid="todo-item-label"]').should("contain", "comprar leche")
    cy.get('[data-testid="todo-item-label"]').click().click()
    cy.get('[data-testid="text-input"]').clear().type("sacar al perro{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should("contain", "sacar al perro")
      
        })
  it('eliminar una tarea de la lista', () => {
   cy.visit('https://todomvc.com/examples/react/dist/')
   cy.get('[data-testid="text-input"]').type("hacer la cama{enter}")
   cy.get('[data-testid="todo-item-label"]').should("contain", "hacer la cama")
   cy.get('.destroy').click({ force: true })
   cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('have.length', 0)
      
     
     })
it('Filtrar tareas completadas, no completadas y todas', () => {
 cy.visit('https://todomvc.com/examples/react/dist/')
 cy.get('[data-testid="text-input"]').type("hacer la cama{enter}")
 cy.get('[data-testid="text-input"]').type("ir al gym{enter}")
 cy.get('[data-testid="text-input"]').type("estudiar un poco{enter}")
 cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
 cy.get('.todo-list li').should('have.length', 3)
 cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
 cy.get('.todo-list li').should('have.length', 1)
 cy.get('[data-testid="todo-item-label"]').should("contain", "ir al gym")
 cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
 cy.get('.todo-list li').should('have.length', 2);
 cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('contain', 'hacer la cama');
 cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('contain', 'estudiar un poco');
 cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()
 cy.get('.todo-list li').should('have.length', 3)

                 
        })


})
