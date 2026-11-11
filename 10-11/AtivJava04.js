const teclado = require("prompt-sync")();

let temperaturaFahrenheit = Number(teclado("Digite a temperatura em Fahrenheit:"));
let celsius = ((temperaturaFahrenheit - 32) * 5 / 9);
console.log("Esta temperatura em Celsius fica:", celsius);