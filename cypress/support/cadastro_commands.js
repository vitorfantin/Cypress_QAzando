Cypress.Commands.add('acessarPaginaCadastro', () => {
    cy.visit('https://automationpratice.com.br/');
    cy.get('#top_header').find('a').contains('Cadastro').click();
    cy.url().should('eq', 'https://automationpratice.com.br/register');
});

Cypress.Commands.add('inserirNomeUsuario', (nome) => {
    cy.get('#user').type(nome); // Preenche o campo de usuário
});

Cypress.Commands.add('inserirEmailCadastro', (email) => {
    cy.get('#email').type(email); // Preenche o campo de e-mail
});

Cypress.Commands.add('inserirSenhaCadastro', (senha) => {
    cy.get('#password').type(senha); // Preenche o campo de senha
});

Cypress.Commands.add('clicarBtnCadastrar', () => {
    cy.get('#btnRegister').click(); // Clica no botão de cadastro
});

Cypress.Commands.add('validarCadastroSucesso', (msgSucesso) => {
    cy.get('.swal2-popup').should('be.visible').and('contain', msgSucesso); // Verifica se a mensagem de sucesso é exibida
});

Cypress.Commands.add('fecharJanelaPopup', () => {
    cy.get('.swal2-confirm').contains('OK').click(); // Clica no botão OK do alerta    
    cy.get('.swal2-popup').should('not.exist'); // Verifica se a mensagem de sucesso desapareceu do DOM
});

Cypress.Commands.add('validarMsgErroCadastro', (msgErro) => {
    cy.get('#errorMessageFirstName').should('be.visible').and('contain', msgErro);
});