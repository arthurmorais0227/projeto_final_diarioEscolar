import { Router } from "express";
import * as postagemController from '../Controllers/postagemController.js';

const router = Router();

router.get("/", postagemController.listarTodos);
router.get("/:id", postagemController.listarUm);
router.post("/", postagemController.criar);
router.delete("/:id", postagemController.deletar);
router.put("/:id", postagemController.atualizar);

export default router;