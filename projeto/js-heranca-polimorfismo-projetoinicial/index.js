import {Cliente} from "./Cliente.js"
import { Conta } from "./conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca } from "./contaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente( 0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteRicardo)
// console.log(contaCorrenteRicardo);   