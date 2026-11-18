const prompt = require("prompt-sync")();

// funcao responsavel por consultar a api
async function consultarCPF() {
    let cpf = prompt("Digite o CPF:");

    if(cpf.length !== 11){
        console.log("CPF inválido.");
        return
    }

    let url = `Frontend2026/javascript-p2/ConsultaViaCPF.js`;

    let resposta = await fetch(url);

    let dados = await resposta.json();

    console.log("Número CPF:" + dados.numeroCPF);
    console.log("Nome pessoa fisica:" + dados.nomePessoaFisica);
    console.log("Data de Nascimento:" + dados.dataNascimento);
    console.log("óbito:" + dados.possuiObito);
    console.log("Situação cadastral:" + dados.situacaoCadastral);
}

consultarCPF();