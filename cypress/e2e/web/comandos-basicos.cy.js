describe('Comandos Básicos em Cypress', () => {
    
    it('Preencher um campo de e-mail no newslatter', () => {
        cy.visit('https://automationpratice.com.br/');
        cy.get('.mc-form').find('.form-control').type('vitor@teste.com{enter}');

    });
    it('Clicar no botão ou elemento', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#btnLogin').click();
        // cy.get('#btnLogin').dbclick();  <- Dá um duplo clique
        //cy.get('#btnLogin').rightclick(); <- Dá um clique com o botão direito
    });
    it('Escolher opção em uma lista select ', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#country').select(2); // Seleciona o segundo item do dropdown
    });

    it('Marcar opção checkbox ou radio', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#materialUnchecked').check(); // Marca o checkbox
        cy.get('#materialUnchecked').uncheck(); // Desmarca o checkbox    

    });
}); 