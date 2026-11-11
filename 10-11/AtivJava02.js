const teclado = require("prompt-sync")();


let numero1 = teclado("Digite um numero:");
let numero2 = teclado("Digite um numero:");
let numero3 = teclado("Digite um numero:");

let maior = numero1;

if(numero2 > maior){
        maior = numero2
}
if(numero3 > maior){
        maior = numero3
}

console.log( "O maior número é", maior);