// Alguns CPFs válidos para teste
// 893.083.970-35
// 778.848.800-32
// 929.508.050-51
// 694.567.900-45
// 315.465.360-00
// O script deve ser executado com o seguinte comando:
// node cadastrarPessoa [cpf] [nomeDaPessoa]
// Ele deve testar se o CPF é válido.
// Também deve verificar se o nome da pessoa foi digitado.
// Caso esteja tudo ok,
//  - Criar um objeto contendo os dados da pessoa
//  - Importar o array de pessoas presente em pessoas.json
//  - Adicionar a nova pessoa ao final do array de pessoas
//  - Salvar esse array de volta no arquivo pessoas.json

let cpfDigitado = process.argv[2] 
let nomeDigitado = process.argv[3]

// Testar se o cpf é válido. caso ele NÃO SEJA,
// mostrar erro e interromper script. Dica: process.exit() interrompe a execução, 
//do script

const cpf = require('cpf'); // importando a biblioteca do cpf
let ehValido = cpf.isValid(cpfDigitado);
if (!ehValido) {
    console.error(`CPF ${cpfDigitado} não é válido`);
    process.exit();
}

//1 - Importar o array de pessoas.json ára uma variável pessoas
//2 - Criar um objeto literal com dados da pessoa:
//      let pessoa = {nome: nomeDigitado, cpf Digitado}
//3 - Adicionar o objeto
