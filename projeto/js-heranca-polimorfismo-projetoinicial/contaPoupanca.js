import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInical,cliente, agencia) {
        super(saldoInical, cliente, agencia);
    }
}
