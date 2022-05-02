import {prisma} from "../src/database.js"

async function main() {
	//upsert = update/insert
	//melhor que create por que pode dar conflito em campos unicos
	await prisma.users.upsert({
    where: { email: "neto@gmail.com" },
    update: {},
    create: {
      email: "neto@gmail.com",
      password: "123",
    },
  });

  await prisma.terms.upsert({
    where: { number: 1 },
    update: {},
    create: {
     number: 1
    },
  })

  await prisma.disciplines.upsert({
    where: { name: "HTML" },
    update: {},
    create: {
     termId: 1,
     name: 'HTML'
    },
  })

  await prisma.teachers.upsert({
    where: { name: "Dina" },
    update: {},
    create: {
     name: 'Dina'
    },
  })

  await prisma.teachersDisciplines.upsert({
    where: { id: 1 },
    update: {},
    create: {
     teacherId: 1,
     disciplineId: 1
    },
  })
 
  await prisma.categories.upsert({
    where: { name: "P1" },
    update: {},
    create: {
      name: "P1" 
    },
  })

  await prisma.tests.upsert({
    where: { id: 1 },
    update: {},
    create: {
     name: "Prova HTML",
     pdfUrl: "https://paginas.fe.up.pt/~ci07041/scc/exercicios/enunciados/exer1.pdf",
     categoryId: 1,
     teachersDisciplineId: 1
    },
  })

  
  
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });