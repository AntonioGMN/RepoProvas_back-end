import { Request, Response } from "express";
import * as testsRepository from "../repositories/testsRepository.js"

export async function getTests(req: Request, res: Response){
  const tests = await testsRepository.getTests();

  res.status(200).send(tests)
}