import { Router } from "express";
import * as categoriesController from "../controllers/categoriesController.js";
import validateToken from "../Middlerware/validateToken.js";

const categoriesRouter = Router();
categoriesRouter.get(
	"/categories",
	validateToken,
	categoriesController.getCategories
);

export default categoriesRouter;
