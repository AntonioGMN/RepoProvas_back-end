import { Router } from "express";
import * as testsController from "../controllers/testsController.js";
import testSchema from "../schemas/testScrema.js";
import validateSchema from "../Middlerware/validateSchema.js";
import validateToken from "../Middlerware/validateToken.js";

const testsRouter = Router();
testsRouter.use(validateToken);
testsRouter.get("/tests", testsController.getTests);
testsRouter.post("/tests/create",validateSchema(testSchema), testsController.create);
testsRouter.post("/tests/update/:id", testsController.updateViews);

export default testsRouter;
