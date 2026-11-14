const teclado = require("prompt-sync")();

let nota1 = Number(teclado("Digite a primeira nota: "));
let nota2 = Number(teclado("Digite a segunda nota: "));
let nota3 = Number(teclado("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média do aluno: " + media.toFixed(2));

if (media >= 7) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}