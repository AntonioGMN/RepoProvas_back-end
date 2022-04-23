import { Request, Response } from "express";
import * as termsRepository from "../repositories/termRepository.js"

export async function getTerms(req: Request, res: Response){
  const terms = await termsRepository.getTerms();

  res.status(200).send(terms)
}