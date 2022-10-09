const arquivo = "historico-de-cpfs.txt";

function salvarCpf (cpf){
    const fs = require('fs');
    fs.appendFileSync(arquivo, cpf);
}

module.exports = salvarCpf;