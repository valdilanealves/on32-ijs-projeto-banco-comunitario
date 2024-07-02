import { Router } from 'express';
import { criarGerente, abrirContaCorrente } from './gerenteController';

const router = Router();

router.post('/', criarGerente);
router.post('/contaCorrente', abrirContaCorrente);

export default router;
