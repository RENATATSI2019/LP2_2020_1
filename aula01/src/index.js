import ClienteController from './controller/ClienteController';

let nome = 'João da Silva';
let endereco = 'Rua 6 de Dezembro, 77';
let cpf = '111111111111';
let telefone = '(67) 9999-9999';

//Instanciar um controlador
let clienteCtrl = new ClienteController();

//Cria um novo objeto de Cliente
let cliente = clienteCtrl
.criarCliente(nome, endereco, cpf, telefone);

//Exibe o objeto de cliente no Console
console.log(cliente);