import { Router } from 'express';
import pacientesController from '../controller/PacientesController';
const router = new Router();
router.get('/', pacientesController.index)
router.get('/:id', pacientesController.show)
export default router;