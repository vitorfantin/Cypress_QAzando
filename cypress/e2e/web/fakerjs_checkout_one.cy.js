const { faker } = require("@faker-js/faker");

describe('Preenchimento informações com Faker JS', () => {

      beforeEach(() => {
        cy.visit('https://automationpratice.com.br/');
        cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click(); // Clica no ícone do carrinho
        cy.get('#menuShopText').click(); // Clica no menu SHOP
        cy.get('#checkou1Page').contains('Checkout View One').click(); // Clica na opção Checkout View One
        cy.url().should('eq', 'https://automationpratice.com.br/checkout-one'); // Verifica a URL
    });

     it('Preencher todos os campos obrigatórios', () => {
        cy.get('#fname').type(faker.person.firstName());
        cy.get('#lname').type(faker.person.lastName());
        cy.get('#cname').type(faker.company.name());
        cy.get('#email').type(faker.internet.email({provider: 'vftntech.com.br'}));
        cy.get('#country').select('usa');
        cy.get('#city').select(1);
        cy.get('#zip').type(faker.location.zipCode());
        cy.get('#faddress').type(faker.location.streetAddress());
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
});