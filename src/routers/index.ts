import { Router } from "express";
import authRouter from "./authRouter.js";
import termRouter from "./termRouter.js";
import disciplineRouter from "./disciplineRouter.js";

const router = Router();
router.use(authRouter);
router.use(termRouter)
router.use(disciplineRouter)

export default router;
