 
const teclado = require("prompt-sync")();


let numero = teclado("Digite um numero:");

let resultado = numero % 2;


if(resultado == 1){
            console.log("Este numero é impar");
    }else{
        console.log("Este numero é par");
    }