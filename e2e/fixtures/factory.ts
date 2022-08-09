const faker = require('faker-br');
export default {
  users: (option: string) => {
    switch (option) {
      case 'valid':
        return {
          email: process.env.EMAIL,
          password: process.env.PASSWORD,
        };
      case 'invalid':
        return {
          email: faker.internet.email(),
          password: faker.internet.password(),
        };
      default:
        return `A opcao ${option} nao existe!`;
    }
  },
};
