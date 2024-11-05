// Exportando Arrow Function para editar o item que já estava contido na lista
export const editarItem = (elemento) => {
    // Cria a váriavel que vai obter o novo nome do item editado
    let novoItem = prompt("Digite o novo nome do item:");

    // Verifica se o novo item colocado não é vazio ou é apenas preenchido com espaços
    // obs: o .trim() retira todos os espaços contidos da string
    if (novoItem !== null && novoItem.trim() !== ""){
        // Coloca numa const o título do item, de acordo com o id = "item-titulo" 
        // que está contido no parâmetro passado para a função
        const itemTextoAtualizado = elemento.querySelector("#item-titulo")
        // Atualiza o conteúdo do texto contido no título do item para o novo digitado
        itemTextoAtualizado.textContent = novoItem;

        // Coloca na const o checkbox que já estava checked (filtrando com o ".checked") 
        // contido no elemento passado como parâmetro para a função
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        // Caso o elemento esteja checked ele entra no if
        // Como está trocando o título do item anterior, 
        // os elementos que já estavam contidos no título anterior precisam ser colocados novamente
        if(estavaComprado) {
            // Seleciona novamente o checkbox 
            // obs: é necessário o ".checked = true" para colocar novamente o checkbox coletado como checked
            elemento.querySelector(".input-checkbox").checked = true;
            // Adiciona na div pega pela class ".checkbox-customizado" e adiciona a class "checked"
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            // Muda o estilo do texto para "line-through"
            itemTextoAtualizado.style.textContent = "line-through";
        }
    }
}