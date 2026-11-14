
const teclado = require("prompt-sync")();

let numero = teclado("Digite um número: ");

let invertido = numero.split('').reverse().join('');

console.log("Número invertido: " + invertido);
