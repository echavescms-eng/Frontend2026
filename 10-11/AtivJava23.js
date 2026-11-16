
const teclado = require("prompt-sync")();

let numeros = [];
let pares = [];
let impares = [];

let quantidade = Number(prompt("Quantos números deseja digitar?"));

for (let i = 0; i < quantidade; i++) {
    numeros[i] = Number(prompt("Digite um número inteiro:"));

    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

let resultado = pares.concat(impares);

console.log("Pares em ordem crescente:", pares);
console.log("Ímpares em ordem decrescente:", impares);
console.log("Resultado final:", resultado);
