import { Cliente } from "./clientes";

export class Conta {
    numeroConta: string;
    cliente: Cliente;
    saldo: number;

    constructor(numeroConta: string, cliente: Cliente) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0.0;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            throw new Error("Valor de depósito deve ser positivo.");
        }
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente para realizar o saque.");
        } else if (valor <= 0) {
            throw new Error("Valor de saque deve ser positivo.");
        } else {
            this.saldo -= valor;
        }
    }

    verificarSaldo(): number {
        return this.saldo;
    }
}
