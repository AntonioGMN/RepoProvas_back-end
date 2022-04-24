import { Request, Response } from "express";
import * as teachersRepository from "../repositories/teachersRepository.js";

export async function getTeachers(req: Request, res: Response) {
	const teachers = await teachersRepository.getTeachers();

	res.status(200).send(teachers);
}
