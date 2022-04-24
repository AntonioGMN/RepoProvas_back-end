import { prisma } from "../database.js";

export function getDisciplines() {
	return prisma.disciplines.findMany();
}
