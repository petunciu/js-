// Os objetos eles são como caixa organizadoras, aonde você guarda vários coisas relacionadas
// Exmplo: caixa de informações de uma pessoas
// nome, idade, profissão
// cada um dessas coisas guardadas na caixa tem um nome (chave) e um valor 

// definição técnica
// um objeto no js é uma estrutura que armazena pares de chaves e valor

// os objetos são identificados por{}
const pessoa = {nome: "Pedro Henrique",
    idade: 20,
    profissao: "Estudante"
};


const pessoa2 = ["Pedro Henrique", 20, "Estudante"];


// acessando chaves para exibir os valores do objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
