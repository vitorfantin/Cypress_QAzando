
describe('Checkout One', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/');
        cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click(); // Clica no ícone do carrinho
        cy.get('#menuShopText').click(); // Clica no menu SHOP
        cy.get('#checkou1Page').contains('Checkout View One').click(); // Clica na opção Checkout View One
        cy.url().should('eq', 'https://automationpratice.com.br/checkout-one'); // Verifica a URL
    });

    it('Preencher todos os campos obrigatórios', () => {
        cy.get('#fname').type('Vitor');
        cy.get('#lname').type('Fantin');
        cy.get('#cname').type('VFTN Tech X');
        cy.get('#email').type('vitor@teste.com.br');
        cy.get('#country').select('usa');
        cy.get('#city').select(1);
        cy.get('#zip').type('12345-678');
        cy.get('#faddress').type('Rua Teste, 123');
        cy.get('#messages').type('Por favor, entregar entre 9h e 18h.');
        cy.get('#materialUnchecked').check();
        cy.get('#headingTwo > div > [name="payment"]').check();
        cy.get('.checkout-area-bg > .theme-btn-one').click();
        cy.get(':nth-child(2) > h3').should('be.visible').and('contain', 'Billings Information registred with success!');
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').and('contain', 'Place Order').click();
        cy.get('.offer_modal_left').should('be.visible').and('contain', 'Order success!');
        cy.get('.close > span').click();
        cy.get('.offer_modal_left').should('not.exist'); // Verifica se a mensagem de sucesso desapareceu do DOM    

    });

    it('Deve exibir mensagens de erro ao tentar enviar o formulário sem preencher os campos obrigatórios', () => {
        cy.get('.checkout-area-bg > .theme-btn-one').click();
        cy.get(':nth-child(1) > .form-group > #errorMessageFirstName').and('contain', 'O campo First Name deve ser prenchido');
        cy.get(':nth-child(2) > .form-group > #errorMessageFirstName').and('contain', 'O campo Last Name deve ser prenchido');
        cy.get(':nth-child(3) > .form-group > #errorMessageFirstName').and('contain', 'O campo Company deve ser prenchido');
        cy.get(':nth-child(4) > .form-group > #errorMessageFirstName').and('contain', 'O campo E-mail deve ser prenchido ou é inválido');
        cy.get(':nth-child(5) > .form-group > #errorMessageFirstName').and('contain', 'O campo Country deve ser prenchido');
        cy.get(':nth-child(6) > .form-group > #errorMessageFirstName').and('contain', 'O campo City deve ser prenchido');
        cy.get(':nth-child(7) > .form-group > #errorMessageFirstName').and('contain', 'O campo Zip Code deve ser prenchido');
        cy.get(':nth-child(8) > .form-group > #errorMessageFirstName').and('contain', 'O campo Address deve ser prenchido');
        cy.get(':nth-child(9) > .form-group > #errorMessageFirstName').and('contain', 'O campo Additional Notes deve ser prenchido');
        
    });
});