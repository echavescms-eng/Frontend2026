
const teclado = require("prompt-sync")();

let A = Number(teclado("Digite o lado A: "));
let B = Number(teclado("Digite o lado B: "));
let C = Number(teclado("Digite o lado C: "));

if (A + B > C && A + C > B && B + C > A) {

    if (A == B && B == C) {
        console.log("Triângulo Equilátero!");

    } else if (A == B || A == C || B == C) {
        console.log("Triângulo Isósceles!");

    } else {
        console.log("Triângulo Escaleno!");
    }

} else {
    console.log("Os lados não formam um triângulo válido!");
}
