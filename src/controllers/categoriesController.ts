import { Request, Response } from "express";
import * as categoriesRepositore from "../repositories/categoriesRepository.js";

export async function getCategories(req: Request, res: Response) {
	const categories = await categoriesRepositore.getCategories();

	res.status(200).send(categories);
}
