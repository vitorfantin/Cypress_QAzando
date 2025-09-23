describe('Funcionalidade de  Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/');
        cy.get('#top_header').find('a').contains('Cadastro').click(); // Clica no link de cadastro no cabeçalho
        cy.url().should('eq', 'https://automationpratice.com.br/register'); // Verifica se a URL é a esperada
    });
    it('Cadastro de novo usuário com sucesso', () => {

        cy.get('#user').type('vitor'); // Preenche o campo de usuário
        cy.get('#email').type('vitor@teste.com.br'); // Preenche o campo de e-mail
        cy.get('#password').type('teste123'); // Preenche o campo de senha
        cy.get('#btnRegister').click(); // Clica no botão de cadastro
        cy.get('.swal2-popup').should('be.visible').and('contain', 'Cadastro realizado!'); // Verifica se a mensagem de sucesso é exibida
        cy.get('.swal2-confirm').contains('OK').click(); // Clica no botão OK do alerta    
        cy.get('.swal2-popup').should('not.exist'); // Verifica se a mensagem de sucesso desapareceu do DOM

    })

    it('Verifica mensagem de erro ao tentar cadastrar SEM PREENCHER OS CAMPOS OBRIGATÓRIOS', () => {
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo nome deve ser prenchido');

    })
    it('Verica mensagem de erro ao cadastrar PREENCHENDO SOMENTE O CAMPO NOME', () => {
        cy.get('#user').type('vitor');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo e-mail deve ser prenchido corretamente');

    });

    it('Verica mensagem de erro ao cadastrar preenchedo SOMENTES os campos NOME e EMAIL', () => {
        cy.get('#user').type('vitor');
        cy.get('#email').type('vitor@teste.com');
        cy.get('#btnRegister').click();
        cy.get('#errorMessageFirstName').should('be.visible').and('contain', 'O campo senha deve ter pelo menos 6 dígitos');
    });


});