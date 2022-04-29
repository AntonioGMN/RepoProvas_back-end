import { prisma } from "../database.js";

export interface test {
	name: string;
	pdfUrl: string;
	category: string;
	discipline: string;
	teacher: string;
}

export interface createTest{
	name: string;
	pdfUrl: string;
	categoryId: number;
	teachersDisciplineId: number;
}

function getTests() {
	return prisma.tests.findMany({
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
	});
}

function updateViews(id: number) {
	return prisma.tests.update({
		where: { id: id },
		data: {
			views: {
				increment: 1,
			},
		},
	});
}

function create(createTest: createTest ){
	return prisma.tests.create({
		data: {
			name: createTest.name,
		  pdfUrl: createTest.pdfUrl,
		  categoryId: createTest.categoryId,
		  teachersDisciplineId: createTest.teachersDisciplineId
		}
	})
}

export default { getTests, updateViews, create };
