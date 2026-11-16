
const teclado = require("prompt-sync")();

let vetor1 = [];
let vetor2 = [];

for (let i = 0; i < 10; i++) {
    vetor1[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 10; i++) {
    vetor2[i] = vetor1[9 - i];
}

console.log("Primeiro vetor:", vetor1);
console.log("Segundo vetor:", vetor2);
