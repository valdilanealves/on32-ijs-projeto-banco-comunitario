import { Cliente } from './clientes';
import { ContaCorrente } from './ContaCorrente';
import { ContaPoupanca } from './ContaPoupanca';

export class Gerente {
    nomeCompleto: string;
    id: string;

    constructor(nomeCompleto: string, id: string) {
        this.nomeCompleto = nomeCompleto;
        this.id = id;
    }

    abrirContaCorrente(numeroConta: string, cliente: Cliente): ContaCorrente {
        return new ContaCorrente(numeroConta, cliente);
    }

    abrirContaPoupanca(numeroConta: string, cliente: Cliente): ContaPoupanca {
        return new ContaPoupanca(numeroConta, cliente);
    }
}
