const teclado = require("prompt-sync")();

let valor = Number(teclado("Digite o valor total da compra: R$ "));
let quantidade = Number(teclado("Digite a quantidade de itens: "));

if (valor > 100 || quantidade > 5) {
    let desconto = valor * 0.10;
    let total = valor - desconto;

    console.log("Desconto de R$ " + desconto.toFixed(2));
    console.log("Valor final: R$ " + total.toFixed(2));
} else {
    console.log("Não há desconto.");
    console.log("Valor final: R$ " + valor.toFixed(2));
}
