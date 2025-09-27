const tamanhoTelas = ['macbook-16', 'macbook-15', 'macbook-13', 'macbook-11', 'ipad-2', 'ipad-mini', 'iphone-xr', 'iphone-x', 'iphone-6', 'iphone-se2', 'iphone-8', 'iphone-7', 'iphone-6', 'iphone-5', 'iphone-4', 'iphone-3', 'samsung-s10', ' samsung-note9'];

// criando forEach de tamanhos de telas diferentes em cada cenário de testes por funcionalidade, onde describe se repetirá todas a lista de tamanhos de telas. 
tamanhoTelas.forEach((tela) => {
    describe(`Funcionalidade de Cadastro em ${tela}`, () => {
        beforeEach(() => {
            cy.viewport(tela);
            cy.visit('https://automationpratice.com.br/');
            cy.get('#top_header').find('a').contains('Cadastro').click();
            cy.url().should('eq', 'https://automationpratice.com.br/register');
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
        })


    })
})