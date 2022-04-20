import { Router } from "express";
import createUser from "../controllers/UserController.js";

const router = Router();
router.get("/create", createUser);

export default router;
