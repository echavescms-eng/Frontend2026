
let jogador1 = Math.floor(Math.random() * 6) + 1;
let jogador2 = Math.floor(Math.random() * 6) + 1;

console.log("Resultado do Jogador 1: " + jogador1);
console.log("Resultado do Jogador 2: " + jogador2);

if (jogador1 > jogador2) {
    console.log("Jogador 1 venceu!");
} else if (jogador2 > jogador1) {
    console.log("Jogador 2 venceu!");
} else {
    console.log("Empate! Os dois tiraram o mesmo número.");
}
