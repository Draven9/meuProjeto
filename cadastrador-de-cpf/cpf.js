// 1 - Capturar o CPF digitado

let cpfDigitado = process.argv[2];

// 2 - Verificar a validade do CPF
const cpf = require('cpf');

//  2a - Se for válido, salvar o cpf num arquivo

let ehValido = cpf.isValid(cpfDigitado);
if(ehValido){
    //  2a - Se for válido, salvar o cpf num arquivo
    console.log(`${cpfDigitado} é um CPF válido. Salvando...`);
    
    //Importar a  função salvarCpf

    const salvarCpf = require('./functions/salvarCpf.js');

    // Salvar o CPF
    salvarCpf(cpfDigitado);
}else{
    //  2b - Se não for válido, emitir mensagem de erro
    console.error(`${cpfDigitado} não é um CPF válido`);
}