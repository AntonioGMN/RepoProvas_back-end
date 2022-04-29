import { Request, Response } from "express";
import * as disciplinesRepository from "../repositories/disciplineRepository.js";

export async function getDisciplines(req: Request, res: Response) {
	const disciplines = await disciplinesRepository.getDisciplines();

	res.status(200).send(disciplines);
}
