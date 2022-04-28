import { prisma } from "../database.js";

export function getTerms() {
	return prisma.terms.findMany();

}