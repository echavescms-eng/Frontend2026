
const teclado = require("prompt-sync")();

let vetor1 = [];
let vetor2 = [];

let diferenca = [];
let soma = [];
let multiplicacao = [];

for (let i = 0; i < 20; i++) {
    vetor1[i] = Number(prompt("Digite um número para o vetor 1:"));
}

for (let i = 0; i < 20; i++) {
    vetor2[i] = Number(prompt("Digite um número para o vetor 2:"));
}

for (let i = 0; i < 20; i++) {
    diferenca[i] = vetor1[i] - vetor2[i];
    soma[i] = vetor1[i] + vetor2[i];
    multiplicacao[i] = vetor1[i] * vetor2[i];
}

console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Diferença:", diferenca);
console.log("Soma:", soma);
console.log("Multiplicação:", multiplicacao);
