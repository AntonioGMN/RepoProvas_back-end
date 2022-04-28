import { Router } from "express";
import * as testsController from "../controllers/testsController.js"
import validateToken from "../Middlerware/validateToken.js";

const testsRouter = Router();
testsRouter.get("/tests", validateToken, testsController.getTests);
testsRouter.post("/tests/update", validateToken, testsController.updateViews)

export default testsRouter;