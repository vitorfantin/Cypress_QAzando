import { faker } from '@faker-js/faker/locale/pt_BR';
import * as pageCheckoutOne from '../../support/pages/page_checkout_one';

describe('Funcionalidade CHECKOUT ONE com Page Objects - Função JavaScript', () => {
    beforeEach(() => {
        pageCheckoutOne.acessarPaginaCheckoutOne();
    });
    it('Checkout com Sucesso', () => {
       pageCheckoutOne.inserirPrimeiroNome(faker.person.firstName());
       pageCheckoutOne.inserirSobrenome(faker.person.lastName());
       pageCheckoutOne.inserirNomeEmpresa(faker.company.name());
       pageCheckoutOne.inserirEmail(faker.internet.email().toLowerCase());
       pageCheckoutOne.inserirPais('usa');
       pageCheckoutOne.selecionarCidade(1);
       pageCheckoutOne.inserirCep(faker.location.zipCode());
       pageCheckoutOne.inserirEndereco(faker.location.streetAddress());
       pageCheckoutOne.inserirObs(faker.location.direction());
       pageCheckoutOne.habilidarSaveAddress();
       pageCheckoutOne.clicarBtnSalvar();
       pageCheckoutOne.validadarSalvamentoInformacoes('Billings Information registred with success!');
       pageCheckoutOne.escolherTipoPagamento();
       pageCheckoutOne.clicarBtnPlaceOrder('Place Order');
       pageCheckoutOne.validarOrdemSucesso('Order success!');

    });
});