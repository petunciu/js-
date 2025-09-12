//operadores de comparação
// São usados para comparar valores
//Eles sempre retornar True (verdadeiro) ou false(falso)
//Lógica de boole
// tipo de dado boolean/ booleano

/*
operadores mais comuns:
> - maior que
< - menor que
>= maior ou igual
< menor igual

== igualdade

*/

let numero = 5 
let numero2 = "5"
let numero3 = 7;
console.log(numero > numero3);

console.log(numero < numero3);

console.log(5 >=7);

console.log(9 <= 9);

console.log(10 == 10);

console.log(10 == "10");

//== ele converte o === tem q ser msm tipo e msm valor

// falso, pois os tipos de dados são diferentes embora os valores sejam os mesmos
console.log(11 == "11");

// verdadeiro,pois os tipos de dados e os valores  são inguais
console.log(11 == 11);

console.log(11 === 11);

// !== diferente
console.log(5 != "5");

// !== diferente estrito
console.log(5 !== "5");