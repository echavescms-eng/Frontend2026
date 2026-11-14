const teclado = require("prompt-sync")();

for (let i = 0; i < 1000; i++) {
  const numero = Math.floor(Math.random() * 100);
  console.log(numero);
}