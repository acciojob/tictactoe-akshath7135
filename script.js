describe('Tic Tac Toe Game', () => {
    it('should start the game and allow players to play', () => {
        cy.visit(baseUrl + "/main.html");
        cy.get('#player-1').should('be.visible').type('Player1');
        cy.get('#player-2').should('be.visible').type('Player2');
        cy.get('#submit').click();
        cy.get('.message').should('contain', "Player1, you're up");
        cy.get('#1').click().should('contain', 'X');
        cy.get('.message').should('contain', "Player2, you're up");
        cy.get('#4').click().should('contain', 'O');
        cy.get('#2').click().should('contain', 'X');
        cy.get('#5').click().should('contain', 'O');
        cy.get('#3').click().should('contain', 'X');
        cy.get('.message').should('contain', "Player1 congratulations you won!");
    });
});