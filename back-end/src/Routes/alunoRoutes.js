import { Router } from 'express';
import * as alunoController from '../Controllers/alunoController.js';

const router = Router();

router.get('/', alunoController.listarTodos);
router.get('/:id', alunoController.listarUm);

export default router;
