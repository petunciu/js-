// conhecendo a estrutura candicional switch(troca)
//bem similar ao if/else. É utilizando para testar multiplos valores de uma mesma variavel ou espressão


/* 
sintaxe básica so switch

switch(expressão/condição){
case valores:
    // código se aexpressão === Valor1
    break;
    case Valores2:
        // código se a expressão === Valores2
        break;
        
        default:
            // código que vai ser executado caso nenhuma das condições acima seja atendida
    }
*/


//exemplo de switch com dias da semana

// troque a o numero do dia e veja o switch em ação
let dia =2;
switch (dia) {
    case 1:
        console.log("domingo");
        break
     case 2:
         console.log("segunda-feira");
         break
     case 3:
        console.log("Terça-feira");
        break
    case 4:
        console.log("quarta-feira")
        break
        default:
            console.log("Dia invalido")
}

// exemplo de switch com operações matemáticas
let operacao = "+";
let a = 10;
let b = 5;

switch (operacao) {
    case '+':
    console.log(a + b);
    break;

    case "-":
    console.log(a - b);
    break;
    
    case "*":
        console.log(a * b);
        break

        case "/":
            console.log(a / b)
            break

            default:
                console.log("Operação invalida ")
}