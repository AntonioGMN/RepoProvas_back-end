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
