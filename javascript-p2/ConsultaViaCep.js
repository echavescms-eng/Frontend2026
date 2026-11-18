const prompt = require("prompt-sync")();

// funcao responsavel por consultar a api
async function consultarCEP() {
    let cep = prompt("Digite o cep:");

    if(cep.length !== 8){
        console.log("Cep inválido.");
        return
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let resposta = await fetch(url);

    let dados = await resposta.json();

    console.log("Dados do cep:");
    console.log("Cep:" + dados.cep);
    console.log("Logradouro:" + dados.logradouro);
    console.log("Complemento:" + dados.complemento);
    console.log("Bairro:" + dados.bairro);
}

consultarCEP();