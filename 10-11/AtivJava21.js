
const teclado = require("prompt-sync")();

let nomes = [];

for (let i = 0; i < 10; i++) {
    nomes[i] = prompt("Digite um nome:");
}

let pesquisa = prompt("Digite o nome que deseja procurar:");

if (nomes.includes(pesquisa)) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}
