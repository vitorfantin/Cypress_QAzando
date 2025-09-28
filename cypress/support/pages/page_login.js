export function funcInserirEmail(email) {
    cy.get('#user').type(email); // Preenche o campo de usuário

};

export function funcInserirSenha(senha) {
    cy.get('#password').type(senha);

};

export function funcMarcarLembrarSenha() {
    cy.get('#materialUnchecked').check();

};

export function funcClicarBtnLogin() {
    cy.get('#btnLogin').click(); // Clica no botão de login

};

export function funcValidarLoginSucesso(msgSucesso) {
    cy.get('.swal2-popup').should('be.visible').and('contain', msgSucesso); // Verifica se a mensagem de sucesso é exibida

};

export function funcValidadarLoginFalha(msgFalha) {
    cy.get('.invalid_input').should('be.visible').and('contain', msgFalha); // Verifica se a mensagem de erro é exibida

};

export function funcAcessarPaginaLogin() {
    cy.visit('https://automationpratice.com.br/login');
    cy.url().should('eq', 'https://automationpratice.com.br/login'); // Verifica se a URL é a esperada

}