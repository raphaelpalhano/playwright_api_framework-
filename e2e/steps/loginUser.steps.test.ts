import { loginUser } from '../functions/services/users.service';
import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('o acesso com usuario {string}', async (typeUser: string) => {
  globalThis.response = loginUser(typeUser);
});

Then('deve exibir a mensagem {string}', async (messageText: string) => {
  const body = await (await response).json();
  expect(body.message).to.be.eq(messageText);
});
