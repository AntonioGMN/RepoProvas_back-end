import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"
import validateToken from "../Middlerware/validateToken.js";

const disciplineRouter = Router();
disciplineRouter.get("/disciplines", validateToken, disciplineController.getDisciplines);

export default disciplineRouter;