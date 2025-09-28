export function acessarPaginaCadastro() {
    cy.visit('https://automationpratice.com.br/register');
    cy.url().should('eq', 'https://automationpratice.com.br/register');

};

export function inserNome(nome) {
    cy.get('#user').type(nome); // Preenche o campo de usuário

}

export function inserirEmail(email) {
    cy.get('#email').type(email); // Preenche o campo de e-mail

}

export function inserirSenha(senha) {
    cy.get('#password').type(senha); // Preenche o campo de senha

}

export function clicarBtnCadastrar() {
    cy.get('#btnRegister').click(); // Clica no botão de cadastro

}

export function validarCadastro(msgSucesso) {
    cy.get('.swal2-popup').should('be.visible').and('contain', msgSucesso); // Verifica se a mensagem de sucesso é exibida

}

export function validarMsgErroCadastro(msgErro) {
    cy.get('#errorMessageFirstName').should('be.visible').and('contain', msgErro);

}