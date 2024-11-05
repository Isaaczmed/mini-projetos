// Coloca na const a "div" com o id "container-lista-comprados"
const containerListaComprados = document.getElementById("container-lista-comprados")

// Exporta a função que verifica a lista de comprados
export function verificarListaComprados(lista) {

    // Faz uma condicional para pegar todos os "li" da lista, e verifica se possuí algum
    if (lista.querySelectorAll("li").length === 0) {
        // Muda o display da lista para "none" caso esteja vazia
        containerListaComprados.style.display = "none";
    } else {
        // Senão coloca o display como block
        containerListaComprados.style.display = "block";
    }
}