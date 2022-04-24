import { prisma } from "../database.js";

export function getTeachers() {
	return prisma.teachers.findMany()
}
