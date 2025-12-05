import { Router } from "express";
import * as comentariosController from '../Controllers/comentariosController.js';

const router = Router();

router.get("/", comentariosController.listarTodos);
router.get("/:id", comentariosController.listarUm);
router.post("/", comentariosController.criar);
router.delete("/:id", comentariosController.deletar);
router.put("/:id", comentariosController.atualizar);

export default router;