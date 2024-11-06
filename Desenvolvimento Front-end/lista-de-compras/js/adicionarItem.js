// Importa a função que faz todos os processos de criação do item na lista
import { criarItemDaLista } from "./criarItemDaLista.js";
// Importa a função que verifica a lista
import { verificarListaVazia } from "./verificarListaVazia.js";

// Seleciona o input em que o item foi colocado pelo seu id
const item = document.getElementById("input-item");
// Seleciona a lista de compras 
const listaDeCompras = document.getElementById("lista-de-compras");

// Exporta a função para o botão que adiciona o item na lista
export function adicionarItem(evento) {
    // Previne que os eventos padrôes do Form aconteça 
    // (obs: o Form atualiza a tela automaticamente, por isso o comando previne que isso aconteça)
    evento.preventDefault();

    // Faz uma condicional para ver se o item digitado era vazio
    if (item.value === null || item.value.trim() === ""){
        alert("Por favor, insira um item!");
        // Faz com que o resto da função não execute
        return;
    }

    // Adiciona na const, a função para fazer todo o processo de criação do item dentro da lista
    const itemDaLista = criarItemDaLista(item.value);
    // Faz com que o itemDaLista("div") fique identado dentro da listaDeCompras("ul") 
    listaDeCompras.appendChild(itemDaLista);
    // Envia a lista de compras para a função de verificar lista
    verificarListaVazia(listaDeCompras);
    // Limpa o valor do item
    item.value = "";
}