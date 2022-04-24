import { Router } from "express";
import * as teachersController from "../controllers/teachersController.js";
import validateToken from "../Middlerware/validateToken.js";

const teachersRouter = Router();
teachersRouter.get(
	"/teachers",
	validateToken,
	teachersController.getTeachers
);

export default teachersRouter;
