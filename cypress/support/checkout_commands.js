Cypress.Commands.add('paginaCheckoutOne', () => {
    cy.visit('https://automationpratice.com.br/checkout-one');
    cy.url().should('eq', 'https://automationpratice.com.br/checkout-one'); // Verifica a URL
});

Cypress.Commands.add('ckPrimeiroNome', (nome) => {
    cy.get('#fname').type(nome);

});

Cypress.Commands.add('ckUltimoNome', (ultimoNome) => {
    cy.get('#lname').type(ultimoNome);

});

Cypress.Commands.add('ckNomeEmpresa', (empresa) => {
    cy.get('#cname').type(empresa);

});

Cypress.Commands.add('ckEmail', (email) => {
    cy.get('#email').type(email);

});

Cypress.Commands.add('ckPais', (pais) => {
    cy.get('#country').select(pais);

});

Cypress.Commands.add('ckCidade', (cidade) => {
    cy.get('#city').select(cidade);

});

Cypress.Commands.add('ckCep', (cep) => {
    cy.get('#zip').type(cep);

});

Cypress.Commands.add('ckEndereco', (endereco) => {
    cy.get('#faddress').type(endereco);
});

Cypress.Commands.add('ckObservacoes', (obs) => {
    cy.get('#messages').type(obs);

});

Cypress.Commands.add('ckSalvarEndereco', () => {
    cy.get('#materialUnchecked').check();

});

Cypress.Commands.add('ckTipoPagamento', () => {
    cy.get('#headingTwo > div > [name="payment"]').check();

});

Cypress.Commands.add('ckSalvarInformacoes', (msgComSucesso) => {
    cy.get('.checkout-area-bg > .theme-btn-one').click();
    cy.get(':nth-child(2) > h3').should('be.visible').and('contain', msgComSucesso);

});

Cypress.Commands.add('ckEnviarOrdem', (msgComSucesso) => {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').and('contain', 'Place Order').click();
    cy.get('.offer_modal_left').should('be.visible').and('contain', msgComSucesso);

});


