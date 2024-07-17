import { Router } from 'express';
import procedimentosController from '../controller/ProcedimentosController';
const router = new Router();
router.get('/', procedimentosController.index)
export default router;