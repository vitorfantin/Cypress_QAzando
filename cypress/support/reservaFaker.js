import { faker } from "@faker-js/faker";

export function gerarReservaFaker() {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        totalprice: faker.finance.currencyNumericCode({ min: 50, max: 5000 }),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: faker.date.past().toISOString().split('T')[0],
            checkout: faker.date.future().toISOString().split('T')[0],
        },
        additionalneeds: faker.lorem.word(),

    };
}
