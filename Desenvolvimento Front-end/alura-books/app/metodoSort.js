let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

// Variável para controlar a direção da ordenação
let ordem = true;

function ordenarLivrosPorPreco() {
    // Ordena os livros com base na direção da ordenação
    let livrosOrdenados = livros.sort((a, b) => {
        if (ordem) {
            // Ordem crescente
            return a.preco - b.preco;  
        } else {
            // Ordem decrescente
            return b.preco - a.preco;  
        }
    });

    // Exibe os livros ordenados na tela
    exibirOsLivrosNaTela(livrosOrdenados);

    // Alterna a direção da ordenação
    ordem = !ordem;
}