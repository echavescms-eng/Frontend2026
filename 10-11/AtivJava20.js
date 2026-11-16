
const teclado = require("prompt-sync")();

let vetor1 = [];
let vetor2 = [];

for (let i = 0; i < 10; i++) {
    vetor1[i] = Number(prompt("Digite um número inteiro positivo:"));
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        vetor2[i] = vetor1[i] / 2;
    } else {
        vetor2[i] = vetor1[i] * 3;
    }
}

console.log("Vetor original:", vetor1);
console.log("Segundo vetor:", vetor2);
