import { Router } from "express";
import * as postagemController from '../Controllers/postagemController.js';

const router = Router();

router.get("/", postagemController.listarTodos);
router.get("/:id", postagemController.listarUm);

export default router;