alert("Bem-vindo ao jogo!");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * + numeroMaximo + 1);
let tentativas = 1;
let chute;

while (chute != numeroSecreto){

    let chute = prompt("Escolha um número entre 1 e " + numeroMaximo);

    if (chute == numeroSecreto){

    break;

    } else{

        if (chute > numeroSecreto){
            alert("O número secreto é menor que " + chute);
            tentativas++
        } else{
            alert("O número secreto é maior que " + chute);
            tentativas++
        }
    }
}

let palavaTentativa = tentativas > 1 ? " tentativas" : " tentativa";
alert("Isso! Você acertou o número secreto: " + numeroSecreto + " com " + tentativas + palavaTentativa);