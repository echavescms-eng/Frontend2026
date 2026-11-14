
const teclado = require("prompt-sync")();

let numero = parseInt(teclado("Digite um número de 1 a 20:"));

let numeros = [
    "um", "dois", "três", "quatro", "cinco",
    "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "quatorze", "quinze",
    "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"
];

if (numero >= 1 && numero <= 20) {
    console.log(numeros[numero - 1]);
} else {
    console.log("Número inválido! Digite um número de 1 a 20.");
}
