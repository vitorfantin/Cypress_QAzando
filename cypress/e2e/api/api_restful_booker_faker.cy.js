import { gerarReservaFaker } from '../../support/reservaFaker';

describe('API Restful com Faker', () => {
  let id_reserva;
  let token;
  let reservaFaker;

  beforeEach(() => {
    reservaFaker = gerarReservaFaker();

    cy.loginGerarToken().then((resposta) => {
      expect(resposta.status).to.eq(200)
      expect(resposta.body).to.have.property('token')
      token = resposta.body.token;
    });

    cy.request({
      method: 'POST',
      url: '/booking',
      body: reservaFaker
    }).then((resposta) => {
      expect(resposta.status).to.eq(200)
      expect(resposta.body).to.have.property('bookingid')
      cy.log(resposta.body.bookingid)
      id_reserva = resposta.body.bookingid
    });
  });

  it('Alterar reserva gerada com Faker', () => {
    const novaReserva = gerarReservaFaker();
    cy.request({
      method: 'PUT',
      url: `/booking/${id_reserva}`,
      headers: {
        'Cookie': `token=${token}`
      },
      body: novaReserva
    }).then((resposta) => {
      expect(resposta.status).to.eq(200)
      expect(resposta.body).to.have.property('firstname', novaReserva.firstname)
      expect(resposta.body).to.have.property('lastname', novaReserva.lastname)
      expect(resposta.body).to.have.property('totalprice', Number(novaReserva.totalprice))
      expect(resposta.body).to.have.property('depositpaid', novaReserva.depositpaid)
      expect(resposta.body.bookingdates).to.have.property('checkin', novaReserva.bookingdates.checkin)
      expect(resposta.body.bookingdates).to.have.property('checkout', novaReserva.bookingdates.checkout)
      expect(resposta.body).to.have.property('additionalneeds', novaReserva.additionalneeds)
    });
  });
});
