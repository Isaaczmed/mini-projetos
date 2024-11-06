function calculoIMC() {
    alert("Bem-Vindo à calculadora de IMC!");
    let peso = parseFloat(prompt("Digite seu peso em kg:"));
    let altura = parseFloat(prompt("Digite sua altura em metros:"));

    let IMC = (peso / (altura * altura));
    alert("Seu IMC é igual a: " + IMC.toFixed(2));
}

function calculoFatorial(){
    alert("Bem-Vindo à calculadora de Fatorial");
    let numeroEscolhido = parseInt(prompt("Digite um número:"));
    contador = numeroEscolhido;
    let fatorial = 1;

    while (contador > 1){
        fatorial *= contador;
        contador--
    }

    alert("O fatorial de " + numeroEscolhido + " é igual à: " + fatorial);
}

function conversaoDolar(){
    alert("Bem-Vindo à conversão de Dólar para Real!");
    let valorDolar = parseFloat(prompt("Digite o valor atual do dólar:"));
    let dolar = parseFloat(prompt("Digite o valor em dólar que quer converter:"));

    let palavraDolar = dolar > 1 ? " dólares" : " dólar";
    let real = dolar * valorDolar;

    alert("O valor de " + dolar + palavraDolar + " em reais é igual à: R$" + real.toFixed(2));
}

function areaRetangular(){
    alert("Bem-Vindo ao cálculo de uma sala retangular!");
    let alturaR = parseFloat(prompt("Digite a altura da sala:"));
    let larguraR = parseFloat(prompt("Digite a largura da sala:"));

    let areaR = larguraR * alturaR;
    let perimetroR = 2*(alturaR + larguraR);

    alert("A área retangular é igual à: " + areaR.toFixed(2));
    alert("O perímetro retangular é igual à: " + perimetroR.toFixed(2));
}

function areaCircular() {
    alert("Bem-Vindo ao cálculo de uma sala circular!");
    let raio = parseFloat(prompt("Digite o raio da sala:"));

    let areaC = 3.14 * (raio ** 2);
    let perimetroC = 2 * (3.14 * raio);

    alert("A área circular é igual à: " + areaC.toFixed(2));
    alert("O perímetro circular é igual à: " + perimetroC.toFixed(2));
}

function calcularTabuada(){
    alert("Bem-Vindo à tabuada!");
    let numeroTabuada = parseInt(prompt("Digite um número para saber sua tabuada:"));
    let tabuada = 1;

        for (let i = 1; i <= 10; i++){
            tabuada = numeroTabuada * i;
            alert(numeroTabuada + " * " + i + " = " + tabuada);
        }
}