import { Cliente } from './clientes';
import { Conta } from './conta';

export class ContaPoupanca extends Conta {
    taxaJuros: number;

    constructor(numeroConta: string, cliente: Cliente) {
        super(numeroConta, cliente);
        this.taxaJuros = 0.05;
    }

    calcularTaxa(): number {
        return this.saldo * this.taxaJuros;
    }
}
