/*impporta a classe Cliente com a
função require (forma antiga do JS)
-----> const Cliente = require ('../model/Cliente');
*/


/*impporta a classe Cliente com a
a palavra reservada import (forma mais moderna ES6)
*/
import Cliente from '../model/Cliente';

export default class ClienteController{

    criarCliente (nome, endereco, cpf, telefone){
        /*
        Instancia um novo objeto da classe Cliente
        */
    let cliente = new Cliente(nome, endereco, cpf, telefone);   
    return cliente;
    }
}
