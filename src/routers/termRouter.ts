import { Router } from "express";
import validateSchema from "../Middlerware/validateSchema.js";
import * as termController from "../controllers/termController.js"
import validateToken from "../Middlerware/validateToken.js";

const termRouter = Router();
termRouter.get("/term", validateToken, termController.getTerms);

export default termRouter;