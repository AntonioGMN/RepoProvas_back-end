import { Request, Response } from "express";
import * as disciplineRepositore from "../repositories/disciplineRepository.js"

export async function getDisciplines(req: Request, res: Response){
  const discipline = await disciplineRepositore.getDisciplines();

  res.status(200).send(discipline)
}