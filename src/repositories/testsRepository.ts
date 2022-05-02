import testsService, { test } from "../services/testsService.js";
import * as categoriesService from "../services/categoriesService.js";
import * as disciplineService from "../services/disciplineService.js";
import * as teachersService from "../services/teachersService.js";
import * as teachersDisciplinesService from "../services/teachersDiciplinesService.js"

import * as error from "../utils/errorUtils.js";

export function getTests() {
	return testsService.getTests();
}

export async function updateViews(id: number) {
	const tests = await testsService.getTests();
	const testsIds = tests.map((t) => t.id);

	const validateId = testsIds.includes(id);
	if (!validateId) throw error.notFound("update of views id was invalid");

	return testsService.updateViews(id);
}

export async function create(test: test) {
	const { id: teacherId } = await teachersService.getTeacherByName(test.teacher);
	const { id: disciplineId } = await disciplineService.getDisciplinesByName(test.discipline);
	const { id: categoryId } = await categoriesService.getByName(test.category)
	let teachersDisciplineId;

	const teachersDiscipline = await teachersDisciplinesService.getTeachersDisciplinesByIds(teacherId,disciplineId)
	if(!teachersDiscipline){
		const {id } = await teachersDisciplinesService.create(teacherId, disciplineId);
		teachersDisciplineId = id;
	}else {
		teachersDisciplineId = teachersDiscipline.id
	}

	const createTest = {
		name: test.name,
		pdfUrl: test.pdfUrl,
		categoryId,
		teachersDisciplineId
	}

	await testsService.create(createTest)

	return;
}
