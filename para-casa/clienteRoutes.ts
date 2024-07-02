import { Router } from 'express';
import { criarCliente } from './clienteController';

const router = Router();

router.post('/', criarCliente);

export default router;
