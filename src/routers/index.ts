import { Router } from "express";
import authRouter from "./authRouter.js";
import termRouter from "./termRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import categoriesRouter from "./categoriesRouter.js";
import testsRouter from "./testsRouter.js";
import teachersRouter from "./teachersRouter.js";

const router = Router();
router.use(authRouter);
router.use(termRouter)
router.use(disciplineRouter)
router.use(categoriesRouter)
router.use(testsRouter)
router.use(teachersRouter)

export default router;
