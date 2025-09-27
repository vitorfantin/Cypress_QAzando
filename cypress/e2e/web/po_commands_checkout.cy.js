const { faker } = require("@faker-js/faker");

describe('Funcionalidade Checkout One com Page Objects - Commands cy', () => {

    beforeEach(() => {
        cy.paginaCheckoutOne();
    });
    it('Cadastro com sucesso FAKER JS', () => {
        cy.ckPrimeiroNome(faker.person.firstName());
        cy.ckUltimoNome(faker.person.lastName());
        cy.ckNomeEmpresa(faker.company.name());
        cy.ckEmail(faker.internet.email().toLowerCase());
        cy.ckPais('usa');
        cy.ckCidade(1);
        cy.ckCep(faker.location.zipCode());
        cy.ckEndereco(faker.location.streetAddress());
        cy.ckObservacoes(faker.location.direction());
        cy.ckSalvarEndereco();
        cy.ckTipoPagamento();
        cy.ckSalvarInformacoes('Billings Information registred with success!');
        cy.ckEnviarOrdem('Order success!');
    });
});