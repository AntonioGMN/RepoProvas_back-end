import { Request, Response } from "express";
import * as authRepository from "../repositories/authRepository.js";

export async function resetUsers(req: Request, res: Response) {
  await authRepository.truncate();
	res.sendStatus(200)
}
