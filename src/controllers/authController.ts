import { Request, Response } from "express";
import * as authRepository from "../repositories/authRepository.js";

export  async function sighUp(req: Request, res: Response) {
	const { email, password } = req.body;
	const user = { email, password };

	await authRepository.signUp(user);

	res.sendStatus(201);
}

export  async function login(req: Request, res: Response) {
	const { email, password } = req.body;
	const user = { email, password };

	const token = await authRepository.login(user);

	res.send(token)
}
