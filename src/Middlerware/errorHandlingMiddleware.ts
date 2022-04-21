import { Request, Response, NextFunction } from 'express';
import { AppError } from "../utils/errorUtils.js";
import pkg  from '@prisma/client';
const {Prisma} = pkg;


export default function errorHandlingMiddleware(
	error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
	if (error instanceof Prisma.PrismaClientKnownRequestError) {
     if (error.code === 'P2002') {
	 		return res.status(409).send(error.message)
     }
	 }

   console.log(error)
  if ("type" in error) {
    if (error.type === "not_found") {
      return res.sendStatus(404);
    }

    if (error.type === "bad_request") {
      return res.sendStatus(400);
    }

    if (error.type === "unauthorized") {
      return res.sendStatus(401);
    }
  }

	return res.sendStatus(500);
}
