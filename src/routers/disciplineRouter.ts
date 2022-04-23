import { Router } from "express";
import * as disciplinesController from "../controllers/disciplinesController.js"
import validateToken from "../Middlerware/validateToken.js";

const disciplineRouter = Router();
disciplineRouter.get("/disciplines", validateToken, disciplinesController.getDisciplines);

export default disciplineRouter;