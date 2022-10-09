/**
 * Fonte:
 * https://www.digitalhouse.com/br/blog/livros-de-programacao/
 * 15 livros de programação para iniciantes em tecnologia (jun/2021)
 */

// 1 - Ler o conteúdo do arquivo livros.txt e guardar a string dele em uma variável stringLivros (fs, readFileSync)
const fs = require("fs");
let stringLivros = fs.readFileSync("./database/livros.txt", {encoding: 'utf-8'});
console.log(stringLivros);

// 2 - Transformar essa stringLivros num array guardado na variável livros
//stringLivros.split

 let livros = [
    "Padrões de Projetos",
    "O Programador Apaixonado",
    "Algoritmos e estruturas de dados",
    "Código Limpo",
    "Como Ser um Programador Melhor: um manual para programadores que se importam com código",
    "Expressões Regulares: Uma abordagem divertida",
    "Domain Driven Design: Atacando as complexidades no coração do software",
    "Java®: Como programar",
    "Desenvolvendo Websites com PHP",
    "Javascript e Jquery: desenvolvimento de interfaces web interativas",
    "HTML e CSS: projete e construa websites",
    "Introdução à programação com Python",
    "Lógica de Programação - Crie seus primeiros programas usando Javascript e HTML",
    "PHP - Programando com orientação a objetos",
    "Aprenda programação orientada a objetos em 21 dias",
  ];
  
  
  // Função listar:
  // Receber um array de livros e exibir estes livros em uma tabela
  // Essa função não retorna NADA.
  function listar(arrayDeLivros) {
    console.table(arrayDeLivros);
  }
  
 
  // Função adicionar:
  // Recebe dois parâmetros. O primeiro, um array de livros. O segundo
  // uma string com o título do novo livro. Essa função retorna false caso o
  // livro já exista no array. Neste caso, ela NÃO ADICIONA o livro.
  // Caso contrário, ela adiciona o livro ao final do array e retorna true.
  /*
  recebe array
  recebe novoTitulo
  
  Verificar se existe o titulo
  
  - Titulo existe -> (returna false)
  - Título não existe -> (adiciona título -> retorna true)
  */
  
  
  function adicionar(arrayDeLivros, novoTitulo){
    if(arrayDeLivros.indexOf(novoTitulo) == -1){
      arrayDeLivros.push(novoTitulo)
      return true
    }else{
      return false
    }
  }
  
  adicionar(livros, "Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos");
  
  listar(livros)