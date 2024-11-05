// Importa a função que verifica a lista dos Comprados
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

// Coloca nas const as devidas listas
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

// Criando uma função anônima, pois só vai ser usada neste arquivo o sinal "=>" é uma Arrow Function
const excluirItem = (elemento) => {

    // Cria a variável que pergunta uma confirmação
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    // Caso o usuário confirme ele remove o elemento que foi passado como parâmetro
    if (confirmacao) {
        elemento.remove();

        // Atualiza as listas
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

// O export foi montado desse jeito por ser uma Arrow Function, 
// o que mostra que poderia ser exportado mais de uma função
export {excluirItem};