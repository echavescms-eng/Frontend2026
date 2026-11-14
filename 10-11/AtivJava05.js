const teclado = require("prompt-sync")();
const numero = Number(teclado("Digite um número:"));

const primo =
  Number.isInteger(numero) &&
  numero >= 2 &&
  !Array.from({ length: Math.floor(Math.sqrt(numero)) - 1 }, (_, i) => i + 2)
    .some(divisor => numero % divisor === 0);

console.log(primo ? "Este número é primo" : "Este número não é primo");