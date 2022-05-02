import { login, signUp } from "../../src/repositories/authRepository"
import {faker} from "@faker-js/faker";

export default async function getToken() {
 const user = {
   email:  faker.internet.email(),
   password: faker.internet.password(),
 }

  await signUp(user);

  const reponseLogin = await login(user);

 return reponseLogin;
}