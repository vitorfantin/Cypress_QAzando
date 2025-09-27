Cypress.Commands.add('acessarPaginaLogin', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.url().should('eq', 'https://automationpratice.com.br/login'); // Verifica se a URL é a esperada

});

Cypress.Commands.add('inserirEmail', (email) => {
    cy.get('#user').type(email);
});

Cypress.Commands.add('inserirSenha', (senha) => {
    cy.get('#password').type(senha);
});

Cypress.Commands.add('marcarLembrarSenha', () => {


    cy.get('.form-check-label').contains('Lembrar de mim');
    cy.get('#materialUnchecked').check();

});

Cypress.Commands.add('clicarBtnLogin', () => {
    cy.get('#btnLogin').click();
});

Cypress.Commands.add('verificarLoginComSucesso', () => {
    cy.get('.swal2-popup').should('be.visible').and('contain', 'Login realizado'); // Verifica se a mensagem de sucesso é exibida

});

Cypress.Commands.add('clicarBtnFecharPopup', () => {
    cy.get('.swal2-confirm').contains('OK').click(); // Clica no botão OK do alerta    
    cy.get('.swal2-popup').should('not.exist'); // Verifica se a mensagem de sucesso desapareceu do DOM
});

Cypress.Commands.add('validarMsgErro', (msgErro) => {
    cy.get('.invalid_input').should('be.visible').and('contain', msgErro); // Verifica se a mensagem de erro é exibida

});