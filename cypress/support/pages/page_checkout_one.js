export function acessarPaginaCheckoutOne() {
    cy.visit('https://automationpratice.com.br/checkout-one');
    cy.url().should('eq', 'https://automationpratice.com.br/checkout-one'); // Verifica a URL
}

export function inserirPrimeiroNome(nome) {
    cy.get('#fname').type(nome);

}

export function inserirSobrenome(sobrenome) {
    cy.get('#lname').type(sobrenome);

}

export function inserirNomeEmpresa(empresa) {
    cy.get('#cname').type(empresa);

}

export function inserirEmail(email) {
    cy.get('#email').type(email);

}

export function inserirPais(pais) {
    cy.get('#country').select(pais);

}

export function selecionarCidade(cidade) {
    cy.get('#city').select(cidade);

}

export function inserirCep(cep) {
    cy.get('#zip').type(cep);

}

export function inserirEndereco(endereco) {
    cy.get('#faddress').type(endereco);

}

export function inserirObs(obs) {
    cy.get('#messages').type(obs);

}

export function habilidarSaveAddress() {
    cy.get('#materialUnchecked').check();

}

export function escolherTipoPagamento() {
    cy.get('#headingTwo > div > [name="payment"]').check();

}

export function clicarBtnSalvar() {
    cy.get('.checkout-area-bg > .theme-btn-one').click();

}
export function validadarSalvamentoInformacoes(msg) {
    cy.get(':nth-child(2) > h3').should('be.visible').and('contain', msg);

}

export function clicarBtnPlaceOrder(msg) {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').and('contain', msg).click();

}

export function validarOrdemSucesso(msgSucesso) {
    cy.get('.offer_modal_left').should('be.visible').and('contain', msgSucesso);

}
