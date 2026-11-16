
const teclado = require("prompt-sync")();

function compararVetores(vetor1, vetor2) {

    if (vetor1.length != vetor2.length) {
        return false;
    }

    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] != vetor2[i]) {
            return false;
        }
    }

    return true;
}

let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];

if (compararVetores(a, b)) {
    console.log("Os vetores são iguais!");
} else {
    console.log("Os vetores são diferentes!");
}
