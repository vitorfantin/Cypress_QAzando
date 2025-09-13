describe('API Public Dispositivos Celulares', () => {
    it('Listar todos os dispositivos', () => {
        cy.request('GET', 'https://api.restful-api.dev/objects')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });


    });

    it('Listar dispositivo por ID', () => {
        const dispositivoId = "7"; // Substitua pelo ID do dispositivo que deseja testar
        cy.request('GET', `https://api.restful-api.dev/objects/${dispositivoId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                // Verifica se o objeto retornado tem o id desejado
                expect(response.body).to.have.property('id', dispositivoId);
            });

    });

    it('Listar dispositivo por ID (INVÁLIDO)', () => {
        const dispositivoId = 9999; // ID inválido para teste
        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${dispositivoId}`,
            failOnStatusCode: false // Impede que o Cypress falhe automaticamente na resposta de erro
        }).then((response) => {
            expect(response.status).to.eq(404); // Verifica se o status é 404
            expect(response.body).to.have.property('error'); // Verifica se te a propriedade chamado error
        });

    });

    it('Cadastrar um dispositivo', () => {
        const novoDispositivo = {

            'name': "Apple MacBook Pro 16",
            'data': {
                'year': 2019,
                'price': 1849.99,
                'CPU model': "Intel Core i9",
                'Hard disk size': "1 TB"
            }
        }

        cy.request('POST', 'https://api.restful-api.dev/objects', novoDispositivo)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Apple MacBook Pro 16');
            
            });

    });

})

