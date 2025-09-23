describe('Funcionalidade de Login', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/');
        cy.get('#top_header').find('a').contains('Login').click(); // Clica no link de login no cabeçalho
        cy.url().should('eq', 'https://automationpratice.com.br/login'); // Verifica se a URL é a esperada
    });
    it.only('Login com SUCESSO', () => {
        cy.get('#user').type('vitor@teste.com.br'); // Preenche o campo de usuário
        cy.get('#password').type('teste123');
        cy.get('#materialUnchecked').check();
        cy.wait(3000);
        cy.get('#btnLogin').click(); // Clica no botão de login
        cy.get('.swal2-popup').should('be.visible').and('contain', 'Login realizado'); // Verifica se a mensagem de sucesso é exibida
        cy.get('.swal2-confirm').contains('OK').click(); // Clica no botão OK do alerta    
        cy.get('.swal2-popup').should('not.exist'); // Verifica se a mensagem de sucesso desapareceu do DOM

    });

    it('Login sem preencher e-mail e senha', () => {
        cy.get('#btnLogin').click(); // Clica no botão de login
        cy.get('.invalid_input').should('be.visible').and('contain', 'E-mail inválido.'); // Verifica se a mensagem de erro é exibida
    });

    it('Login preenchendo apenas o campo e-mail', () => {
        cy.get('#user').type('vitor@teste.com.br'); // Preenche o campo de usuário
        cy.get('#btnLogin').click(); // Clica no botão de login
        cy.get('.invalid_input').should('be.visible').and('contain', 'Senha inválida.'); // Verifica se a mensagem de erro é exibida
    });


});