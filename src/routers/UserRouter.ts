import { Router } from "express";

const router = Router();
router.get("/createUser", (req, res) => res.send("toto"));

export default router;