import { Request, Response } from 'express';
import { Cliente } from './clientes';


const clientes: Cliente[] = [];

export const criarCliente = (req: Request, res: Response) => {
    const { nomeCompleto, id, endereco, telefone } = req.body;
    const cliente = new Cliente(nomeCompleto, id, endereco, telefone);
    clientes.push(cliente);
    res.status(201).json(cliente);
};
