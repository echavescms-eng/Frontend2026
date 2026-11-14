
const teclado = require("prompt-sync")();

let numero1 = Number(teclado("Digite o primeiro número: "));
let numero2 = Number(teclado("Digite o segundo número: "));

let operacao = teclado("Digite a operação (+, -, * ou /): ");

if (operacao == "+") {
    console.log("Resultado: " + (numero1 + numero2));
} else if (operacao == "-") {
    console.log("Resultado: " + (numero1 - numero2));
} else if (operacao == "*") {
    console.log("Resultado: " + (numero1 * numero2));
} else if (operacao == "/") {
    if (numero2 != 0) {
        console.log("Resultado: " + (numero1 / numero2));
    } else {
        console.log("Não é possível dividir por zero!");
    }
} else {
    console.log("Operação inválida!");
}
