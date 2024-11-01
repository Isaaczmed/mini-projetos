let totalGeral = 0;
limpar();

function adicionar(){
    //pegar o nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    //calcular o preço subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    
    //calculo do valor total
    totalGeral += preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = ("R$" + totalGeral);
    document.getElementById("quantidade").value = "";
}

function limpar(){
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = 0;
}