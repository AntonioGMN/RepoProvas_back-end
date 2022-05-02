import app from "../src/app.js"
import supertest from "supertest"
import { prisma } from '../src/database.js'
import dotenv from "dotenv"

import userBodyFactory from "./factories/userBodyFactory";
import userFactory from "./factories/userFactory";
import getToken from "./factories/getTokenFactory"

dotenv.config()

console.log("estou no banco", process.env.DATABASE_URL)

describe("Update views tests", () => {
  //beforeEach(createSeccion);

  afterAll(disconnect);

  it("Update views given valid parameter", async ()=>{
    const token = await getToken();
    const { id } = await prisma.users.findFirst()

    const response = await supertest(app).post(`/tests/update/${id}`).set('Authorization',`${token}`);
    expect(response.status).toEqual(200);
  })

  it("Update views given invalid parameter", async function () {
    const token = await getToken();

    const response = await supertest(app).post(`/tests/update/0`).set('Authorization',`${token}`);
    expect(response.status).toEqual(404);
  })
});

// describe("User tests - POST /login", () => {
//   beforeEach(truncateUsers);

//   afterAll(disconnect);

//   it("should return 200 and a token given valid credentials", async () => {
//     const body = userBodyFactory();
//     await userFactory(body);

//     const response = await supertest(app).post("/login").send(body);

//     expect(response.status).toEqual(200);
//     expect(typeof response.body.token).toEqual("string");
//     expect(response.body.token.length).toBeGreaterThan(0);
//   });

//   it("should return 401 given invalid email", async () => {
//     const body = userBodyFactory();

//     const response = await supertest(app).post("/login").send(body);

//     expect(response.status).toEqual(404);
//   });

//   it("should return 401 given invalid password", async () => {
//     const body = userBodyFactory();
//     await userFactory(body);

//     const response = await supertest(app)
//       .post("/login")
//       .send({
//         ...body,
//         password: "bananinha",
//       });

//     expect(response.status).toEqual(401);
//   });
// });

async function disconnect() {
  await prisma.$disconnect();
}

