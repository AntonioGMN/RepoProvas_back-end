import { Request, Response, NextFunction } from 'express';
import authService from "../services/authService.js";
import jwt from 'jsonwebtoken';

export default async function validateToken(req: Request, res: Response, nest: NextFunction) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const chaveSecreta = process.env.JWT_SECRET;


  try {
	  const {userId} = jwt.verify(token, chaveSecreta);
    const session = await authService.findSession(userId, token)
    if(!session) res.status(401).send("session not found")

  } catch {
	  res.status(401).send("invalide token")
  }
  
  res.locals.token = token;
  
  nest();
}