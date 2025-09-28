import { faker } from '@faker-js/faker/locale/pt_BR';
import * as pageLogin from '../../support/pages/page_login';
describe('Funcionalidade Login | PO - Função JavaScript', () => {

    beforeEach(() => {
        pageLogin.funcAcessarPaginaLogin();
    });

    it('Login com sucesso', () => {
        pageLogin.funcInserirEmail(faker.internet.email().toLowerCase());
        pageLogin.funcInserirSenha(faker.internet.password({ length: 10 }));
        pageLogin.funcMarcarLembrarSenha();
        pageLogin.funcClicarBtnLogin();
        pageLogin.funcValidarLoginSucesso('Login realizado');
    });

    it('Login Invalido - sem preencher nada', () => {
        pageLogin.funcClicarBtnLogin();
        pageLogin.funcValidadarLoginFalha('E-mail inválido.');
    });

    it('Login Invalido - sem senha', () => {
        pageLogin.funcInserirEmail(faker.internet.email().toLowerCase());
        pageLogin.funcClicarBtnLogin();
        pageLogin.funcValidadarLoginFalha('Senha inválida.');
    });
});