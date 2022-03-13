
import{Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"; 

const cliente1 = new Cliente(); 
cliente1.nome = "Halisson";
cliente1.cpf = "10609065629"; 

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = "06647015663";

const contaCorrenteHalisson = new ContaCorrente();
contaCorrenteHalisson.agencia = 1001;
contaCorrenteHalisson.cliente = cliente1;
contaCorrenteHalisson.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;


contaCorrenteHalisson.transferir(200, conta2)

console.log(conta2);
console.log(contaCorrenteHalisson);