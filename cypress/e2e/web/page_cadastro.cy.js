import { faker } from '@faker-js/faker/locale/pt_BR';
import * as pageCadastro from '../../support/pages/page_cadastro';
describe('Funcionalidade Cadastro |  PO - Função JavaScript ', () => {

    beforeEach(() => {
        pageCadastro.acessarPaginaCadastro();
    });
    it('Cadastro com Sucesso', () => {
    pageCadastro.inserNome(faker.person.firstName());
    pageCadastro.inserirEmail(faker.internet.email().toLowerCase());
    pageCadastro.inserirSenha(faker.internet.password());
    pageCadastro.clicarBtnCadastrar();
    pageCadastro.validarCadastro('Cadastro realizado!')
    });


    
});