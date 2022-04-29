import { prisma } from "../database.js";

export function getDisciplines() {
	return prisma.disciplines.findMany();
}

export function getDisciplinesByName(name: string) {
	return prisma.disciplines.findUnique({
		where: {
			name: name,
		},
	});
}
