import { requestWithBody } from '../base/rest.service';
import factory from '../../fixtures/factory';

export async function loginUser(typeUser: string) {
  return requestWithBody('/login', factory.users(typeUser));
}
