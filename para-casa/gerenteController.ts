import { Request, Response } from 'express';
import { Gerente } from './Gerente';
import { Cliente } from './clientes';

const gerentes: Gerente[] = [];

export const criarGerente = (req: Request, res: Response) => {
    const { nomeCompleto, id } = req.body;
    const gerente = new Gerente(nomeCompleto, id);
    gerentes.push(gerente);
    res.status(201).json(gerente);
};

export const abrirContaCorrente = (req: Request, res: Response) => {
    const { gerenteId, numeroConta, clienteId } = req.body;
    const gerente = gerentes.find(g => g.id === gerenteId);
    const cliente = clienteId.find((c: { id: any; }) => c.id === clienteId);
    if (gerente && cliente) {
        const contaCorrente = gerente.abrirContaCorrente(numeroConta, cliente);
        res.status(201).json(contaCorrente);
    } else {
        res.status(404).json({ message: 'Gerente ou cliente não encontrado' });
    }
};
