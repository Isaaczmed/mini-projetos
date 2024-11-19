// Importa a função criada no adicionarItem.js
import { adicionarItem } from "./js/adicionarItem.js";

// Seleciona o botão que salva o item na lista
const botaoSalvarItem = document.getElementById("adicionar-item");
// Adiciona um evento ao clicar no botão, que é (evento, ação)
botaoSalvarItem.addEventListener("click", adicionarItem);