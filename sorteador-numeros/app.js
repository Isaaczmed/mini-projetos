function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}