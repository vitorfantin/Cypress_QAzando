const { faker } = require("@faker-js/faker");

describe('Funcionalidade Cadastro com Page Objects - Commands cy', () => {

    beforeEach(() => {
        cy.acessarPaginaCadastro();
    });
    it('Cadastro com Sucesso', () => {
        cy.inserirNomeUsuario('Vitor');
        cy.inserirEmailCadastro('testevitor@teste.com.br');
        cy.inserirSenhaCadastro('senhas1234');
        cy.clicarBtnCadastrar();
        cy.validarCadastroSucesso('Cadastro realizado!');
    });

    it('Cadastro INVALIDO - Não preencher nenhum campos obrigatórios', () => {
        cy.clicarBtnCadastrar();
        cy.validarMsgErroCadastro('O campo nome deve ser prenchido');
    });

    it('Cadastro INVALIDO - Preencher somente campo Nome', () => {
        cy.inserirNomeUsuario('Vitor');
        cy.clicarBtnCadastrar();
        cy.validarMsgErroCadastro('O campo e-mail deve ser prenchido corretamente');
    });

    it('Cadastro INVALIDO - FAKE JS- Preencher somentes os campos NOME e EMAIL', () => {
        cy.inserirNomeUsuario(faker.person.lastName());
        cy.inserirEmailCadastro(faker.internet.email({ provider: 'vftntech.com' }).toLowerCase())
        cy.clicarBtnCadastrar();
        cy.validarMsgErroCadastro('O campo senha deve ter pelo menos 6 dígitos')

    });

    it('Cadastro INVALIDO - FAKE JS- Preencher com senha MENOR 6 Digitos', () => {
        cy.inserirNomeUsuario(faker.person.lastName());
        cy.inserirEmailCadastro(faker.internet.email({ provider: 'vftntech.com' }).toLowerCase())
        cy.inserirSenhaCadastro(faker.internet.password({ length: 5 }));
        cy.clicarBtnCadastrar();
        cy.validarMsgErroCadastro('O campo senha deve ter pelo menos 6 dígitos')

    });

    it('Cadastro SUCESSO - FAKE JS- Preencher com senha IGUAL 6 Digitos', () => {
        cy.inserirNomeUsuario(faker.person.lastName());
        cy.inserirEmailCadastro(faker.internet.email({ provider: 'vftntech.com' }).toLowerCase())
        cy.inserirSenhaCadastro(faker.internet.password({ length: 6 }));
        cy.clicarBtnCadastrar();
        cy.validarCadastroSucesso('Cadastro realizado!');
    });


});