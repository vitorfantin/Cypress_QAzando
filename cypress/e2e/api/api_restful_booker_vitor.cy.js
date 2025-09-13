

describe('API Restful Vitor', () => {
    //beforeEach é um gatilho que executa antes de cada it 
    //é usado para deixar o código mais limpo e reaproveitável
    //nesse caso, o beforeEach está sendo usado para gerar um token e cadastrar uma reserva antes de cada teste
    //assim, cada teste começa com um estado conhecido e consistente
    //isso é especialmente útil em testes de API, onde o estado do servidor pode mudar entre os testes
    let id_reserva;
    let token;
    beforeEach(() => {
        cy.loginGerarToken().then((resposta) => { 
            expect(resposta.status).to.eq(200)
            expect(resposta.body).to.have.property('token')
            token = resposta.body.token;
        });

     //cy.request é um comando do Cypress usado para fazer requisições HTTP
     //nesse caso, está sendo usado para fazer uma requisição POST para o endpoint /booking
     //o corpo da requisição é carregado a partir de um arquivo JSON localizado em cypress/fixtures/cadastrar_reserva_vitor.json
     //o then é usado para lidar com a resposta da requisição
     //dentro do then, são feitas algumas asserções para verificar se a resposta está correta
     //se tudo estiver correto, o id da reserva criada é armazenado na variável id_reserva  

        const cadastrar_reserva_vitor = require('../../fixtures/cadastrar_reserva_vitor.json')
       
        cy.request({
            method: 'POST',
            url: '/booking',
            body: cadastrar_reserva_vitor
        }).then((resposta) => {
            expect(resposta.status).to.eq(200)
            expect(resposta.body).to.have.property('bookingid')
            cy.log(resposta.body.bookingid)
            id_reserva = resposta.body.bookingid
            
        });
        
    });

//teste para alterar a reserva criada no beforeEach
//usa o id da reserva e o token gerados no beforeEach
//faz uma requisição PUT para o endpoint /booking/{id_reserva}
//o corpo da requisição é carregado a partir de um arquivo JSON localizado em cypress/fixtures/alterar_reserva_vitor.json
//o then é usado para lidar com a resposta da requisição
//dentro do then, são feitas algumas asserções para verificar se a resposta está correta
//verifica se os dados da reserva foram alterados corretamente
//se tudo estiver correto, o teste passa

    it('Alterar reserva do Vitor', () => {
        const alterar_reserva_vitor = require('../../fixtures/alterar_reserva_vitor.json')
        cy.request({
            method: 'PUT',
            url: `/booking/${id_reserva}`,
            headers: {
                'Cookie': `token=${token}`
            },
            body: alterar_reserva_vitor
        }).then((resposta) => {
            expect(resposta.status).to.eq(200)
            expect(resposta.body).to.have.property('firstname', alterar_reserva_vitor.firstname)
            expect(resposta.body).to.have.property('lastname', alterar_reserva_vitor.lastname)
            expect(resposta.body).to.have.property('totalprice', alterar_reserva_vitor.totalprice)
            expect(resposta.body).to.have.property('depositpaid', alterar_reserva_vitor.depositpaid)
            expect(resposta.body.bookingdates).to.have.property('checkin', alterar_reserva_vitor.bookingdates.checkin)
            expect(resposta.body.bookingdates).to.have.property('checkout', alterar_reserva_vitor.bookingdates.checkout)
            expect(resposta.body).to.have.property('additionalneeds', alterar_reserva_vitor.additionalneeds)
        });
    })
})
