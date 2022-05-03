import { Router } from "express";
import * as authController from '../controllers/resetControler.js'

const resetRouter = Router();
resetRouter.delete('/resetUsers',authController.resetUsers)

export default resetRouter;