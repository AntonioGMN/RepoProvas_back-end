import { Router } from "express";
import * as authController from "../controllers/authController.js";
import validateSchema from "../Middlerware/validateSchema.js";
import userDateSchema from "../schemas/userDateSchema.js";

const authRouter = Router();
authRouter.post("/sighUp", validateSchema(userDateSchema), authController.sighUp);
authRouter.post("/login", validateSchema(userDateSchema), authController.login);

export default authRouter;
