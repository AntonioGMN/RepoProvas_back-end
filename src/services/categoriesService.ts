import { prisma } from "../database.js";

export function getCategories() {
	return prisma.categories.findMany({
		include: {
			tests: {
				include: {
					teachersDiscipline: {
						select: {
							teacher: {
								select: {
									id: true,
									name: true,
								},
							},
							discipline: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			},
		},
	});
}

export async function getByName(name: string){
	return await prisma.categories.findUnique({
		where: {
			name: name
		}
	})
}