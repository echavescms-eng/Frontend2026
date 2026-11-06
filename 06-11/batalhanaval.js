/*************************************************************************************************
 * Emily Chaves
 * versão 1.0
 * Data: 06/11/2024
 * 
 * Batalha Naval - Jogo de tabuleiro
 */

const teclado = require('prompt-sync')();

let Fim_jogo = false;

while(Fim_jogo == false){
    
        //variaveis de ambiente colunas e linhas do tabuleiro
        let Tamanho_Mapa = 5;
        let Quant_Barcos = 5;
        let Quant_Tiros = 5;
        let Quant_Jogadas = 5;
        let Pontos = 0;

        //Cria o mapa do jogo
        let Tabuleiro = [];

        //Preenche o mapa com agua
        for(let linha = 0; linha <= Tamanho_Mapa; linha++){


        //Cria o mapa do jogo

        Tabuleiro[linha] = []
        for(let coluna = 0; coluna <= Tamanho_Mapa; coluna++){
            Tabuleiro[linha][coluna] = false;
        }
        }

        //console.log(Tabuleiro);

        for(let i = 0; i <= Quant_Barcos; i++){
        let PosicaoX = parseInt(Math.floor(Math.random() *5));
        let PosicaoY = parseInt(Math.floor(Math.random() *5));
        Tabuleiro[PosicaoX][PosicaoY] = true;
        }   
        console.log(Tabuleiro);


        /***********************************************
        * Jogada do Player
        */

        for(let j = 1; j <= Quant_Jogadas; j++){
        let TiroPosicaoX = parseInt(teclado("Digite a coordenada em x:"));
        let TiroPosicaoY = parseInt(teclado("Digite a coordenada em y:"));
        

            //Verifica se não é nulo
            if(isNaN(TiroPosicaoX) || isNaN(TiroPosicaoY)){
            console.log("Digite uma coordenada válida");
            let TiroPosicaoX = teclado("Digite a coordenada em x:");
            let TiroPosicaoY = teclado("Digite a coordenada em y:");
            }


            if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === true){
                //acerto um barco
                console.log("*********************************************");
                console.log("****BARCO NAUFRAGADO****");
                console.log("*********************************************");
                Pontos += 10;

            }
            if(Tabuleiro[TiroPosicaoX][TiroPosicaoY] === false){
                //acerto um barco
                console.log("*********************************************");
                console.log("****TIRO NA ÁGUA****");
                console.log("*********************************************");

            }
            //Reduz a quantidade de tiros
            Quant_Tiros--;

            //Quantidade de tiros
            console.log("*********************************************");
                console.log("****QUANTIDADE DE TIROS****", Quant_Tiros);
                console.log("*********************************************");

            //Quantidade de pontos
            console.log

            if(Quant_Tiros == 0){
                if(Pontos >= 50){
                    console.log("_______________________________________________")
                    console.log("--------PARABÉNS VOCÊ VENCEU \O/--------")
                    console.log("_______________________________________________")
                else{
                    console.log("_______________________________________________")
                    console.log("--------VOCÊ PERDEU IDT--------")
                    console.log("_______________________________________________")
                }
                }
            }
        
            //Encerra o jogo ou continua
            // s = sair
            // n = continuar

            let Continuar = teclado("Digite N para jogar novamente")
            
            if(Continuar == "n"){
                Fim_jogo = false;
            }else{
                Fim_jogo = true;
            } 
            

        }
}