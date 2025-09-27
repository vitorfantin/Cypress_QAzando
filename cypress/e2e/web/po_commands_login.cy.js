

describe('Funcionalidade de Login com Page Objects - Commands Cy', () => {

    beforeEach(() => {
        cy.acessarPaginaLogin();
    });
    it('Login com Sucesso FIXO', () => {
        cy.inserirEmail('fantin@teste.com.br');
        cy.inserirSenha('senha123456');
        cy.marcarLembrarSenha();
        cy.clicarBtnLogin();
        cy.verificarLoginComSucesso();
    });

    it('Login INVALIDO - sem preencher e-mail e senha', () => {
        cy.clicarBtnLogin();
        cy.validarMsgErro('E-mail inválido.');
    });

    it('Login INVALIDO - sem preencher campo senha', () => {
        cy.inserirEmail('fantin@teste.com.br')
        cy.clicarBtnLogin();
        cy.validarMsgErro('Senha inválida.');
    });

    it('Longin INVALIDO - sem preencher campo e-mail', () => {
        cy.acessarPaginaLogin();
        cy.inserirSenha('senhas123454');
        cy.clicarBtnLogin();
        cy.validarMsgErro('E-mail inválido.');
    });
});

describe('Funcionalidade de Login FAKE-JS com Page Objects - Commands Cy', () => {
 const { faker } = require("@faker-js/faker");
    beforeEach(() => {
        cy.acessarPaginaLogin();
    });
    it('Login com Sucesso FAKER JS', () => {
cy.inserirEmail(faker.internet.email().toLowerCase());        cy.inserirSenha(faker.internet.password(8));
        cy.marcarLembrarSenha();
        cy.clicarBtnLogin();
        cy.verificarLoginComSucesso();
    });

    it('Login INVALIDO - sem preencher e-mail e senha', () => {
        cy.clicarBtnLogin();
        cy.validarMsgErro('E-mail inválido.');
    });

    it('Login INVALIDO - sem preencher campo senha', () => {
        cy.inserirEmail(faker.internet.email({provider: 'vftntech.com.br'}));
        cy.clicarBtnLogin();
        cy.validarMsgErro('Senha inválida.');
    });

    it('Longin INVALIDO - sem preencher campo e-mail', () => {
        cy.acessarPaginaLogin();
        cy.inserirSenha(faker.internet.password(8));
        cy.clicarBtnLogin();
        cy.validarMsgErro('E-mail inválido.');
    });
});
