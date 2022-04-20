import { prisma } from "../database";

export default function createUser(){
  await prisma.users.create(re)
}