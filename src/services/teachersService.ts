import { prisma } from "../database.js";

export function getTeachers() {
	return prisma.teachers.findMany();
}

export async function getTeacherByName(name: string) {
	const date = await prisma.teachers.findMany({
		where: {
			name: name,
		},
	});

	return date[0];
}
