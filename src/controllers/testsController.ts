import { Request, Response } from "express";
import { string } from "joi";
import * as testsRepository from "../repositories/testsRepository.js"

export async function getTests(req: Request, res: Response){
  const tests = await testsRepository.getTests();

  res.status(200).send(tests)
}

export async function updateViews(req: Request, res: Response) {
  const {id} = req.params;
  const number = Number(id)
    

  const test = await testsRepository.updateViews(number)
  res.status(200).send(test);
}