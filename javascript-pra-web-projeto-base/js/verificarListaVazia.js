// Insere um "p" na const pegando pelo id
const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

// Exporta a função verificarListaVazia, que recebe como parâmetro a lista para ser verificada
export function verificarListaVazia(lista) {
    // Faz uma condicional para ver quantos elementos filhos, aquela lista tem
    if (lista.childElementCount === 0) {
        // Define o style para display = block na mensagem
        mensagemListaVazia.style.display = "block";
    } else {
        // Define o style para display = none na mensagem
        mensagemListaVazia.style.display = "none";
    }
}