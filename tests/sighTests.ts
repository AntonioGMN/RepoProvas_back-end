import app from "../src/app.js"
import supertest from "supertest"
import { prisma } from '../src/database.js'

describe('Sigh Test',()=>{
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE receitas;`;
  });

  it('Test SighUp', async ()=>{
    const body = {
      email: "toto@gmail.com",
      password: '123'
    }

    await supertest(app).post('/sighUp').send(body,)
  })

  afterAll(async () => {
    await prisma.$disconnect();
 });
})