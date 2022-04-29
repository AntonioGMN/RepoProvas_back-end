import { prisma } from "../database.js";

export async function getTeachersDisciplinesByIds(teacherId: number, disciplineId: number) {
  const date = await prisma.teachersDisciplines.findMany({
    where:{
      teacherId: teacherId,
      disciplineId: disciplineId
    },
    include:{
      teacher: true,
      discipline: true,
    }
  })
  return date[0]
}

export function create(teacherId: number, disciplineId: number ){
	return prisma.teachersDisciplines.create({
		data: {
      teacherId, 
      disciplineId
		}
	})
}

