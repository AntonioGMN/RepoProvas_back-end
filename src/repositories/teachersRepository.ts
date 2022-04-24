import * as teachersService from "../services/teachersService.js";

export function getTeachers() {
	return teachersService.getTeachers();
}
