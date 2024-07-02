import { Conta } from './conta';
import { Cliente } from './clientes';

export class ContaCorrente extends Conta {
    limiteChequeEspecial: number;

    constructor(numeroConta: string, cliente: Cliente) {
        super(numeroConta, cliente);
        this.limiteChequeEspecial = 100.0;
    }

    sacar(valor: number): void {
        if (valor > this.saldo + this.limiteChequeEspecial) {
            throw new Error("Saldo insuficiente para realizar o saque.");
        } else if (valor <= 0) {
            throw new Error("Valor de saque deve ser positivo.");
        } else {
            this.saldo -= valor;
        }
    }
}
