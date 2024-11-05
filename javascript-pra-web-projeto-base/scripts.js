// Seleciona o input em que o item foi colocado pelo seu id
const item = document.getElementById("input-item");
// Seleciona o botão que salva o item na lista
const botaoSalvarItem = document.getElementById("adicionar-botao");
// Seleciona o ul do carrinho de compras
const listaDeCompras = document.getElementById("lista-de-compras");
// Cria uma váriavel "contador" para diferienciar os itens adicionados na lista
let contador = 0;

// Adiciona um evento ao clicar no botão, que é (evento, ação)
botaoSalvarItem.addEventListener("click", adicionarItem);

// Função para o botão adicionar o item na lista
function adicionarItem(evento) {
    // Previne que os eventos padrôes do Form aconteça 
    // (obs: o Form atualiza a tela automaticamente, por isso o comando previne que isso aconteça)
    evento.preventDefault();

    // Adiciona na const itemDaLista o comando para criar um elemento ("li")
    const itemDaLista = document.createElement("li");
    // Adiciona na const containerItemDaLista o comando para criar um elemento ("div")
    const containerItemLista = document.createElement("div");
    // Adiciona uma class na div criada anteriormente
    containerItemLista.classList.add("item-lista-container");

    // Adiciona na const containerNomeDoItem o comando para criar um elemento ("div")
    const containerNomeDoItem = document.createElement("div");

    // Adiciona na const containerCheckbox o comando para criar um elemento ("div")
    const containerCheckbox = document.createElement("div");
    // Adiciona uma class na div criada anteriormente
    containerCheckbox.classList.add("checkbox-container");

    // Adiciona na const checkboxInput o comando para criar um elemento ("input")
    const checkboxInput = document.createElement("input");
    // Altera o tipo do input mudando o .type para "checkbox"
    checkboxInput.type = "checkbox";
    // Adiciona uma class no input criado anteriormente
    checkboxInput.classList.add("checkbox-input");
    // Altera o .id do checkbox mudando pelo contador, aumentando para cada item adicionado
    checkboxInput.id = "checkbox-" + contador++;

    // Adiciona na const checkboxLabel o comando para criar um elemento ("label")
    const checkboxLabel = document.createElement("label");
    // Altera o "for" do label 
    // obs: poderia ser alterado com .for, mas foi usado o setAttribute para mostrar outras maneiras 
    checkboxLabel.setAttribute("for", checkboxInput.id);

    // Adiciona um evento ao checkbox contido na label, 
    // no qual ao clicar ativa uma função apenas para essa linha de código
    checkboxLabel.addEventListener("click", function (evento) {
        /* Seleciona o evento e o elemento que está sendo clicado através do currentTarget.
        Com o querySelector() pode-se selecionar o conteúdo do elemento clicado que possuí 
        a classe .checkbox-input */ 
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        // Faz o mesmo para o checkbox customizado
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");

        // Verifica caso o input está checked, caso esteja, adiciona a class "checked", caso não retira
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
        } else {
            checkboxCustomizado.classList.remove("checked");
        }
    });
    
    // Adiciona na const checkboxCustomizado o comando para criar um elemento ("div")
    const checkboxCustomizado = document.createElement("div");
    // Adiciona uma class no na div criada anteriormente
    checkboxCustomizado.classList.add("checkbox-customizado");

    // Faz com que o checkboxInput("input") fique identado dentro do checkboxLabel("label")
    checkboxLabel.appendChild(checkboxInput);
    // Faz com que o checkboxCustomizado("div") fique identado dentro do checkboxLabel("label")
    checkboxLabel.appendChild(checkboxCustomizado);

    // Faz com que o checkboxLabel("label") fique identado dentro do containerCheckbox("div")
    containerCheckbox.appendChild(checkboxLabel);
    // Faz com que o containerCheckbox("div") fique identado dentro do containerNomeDoItem("div")
    containerNomeDoItem.appendChild(containerCheckbox);

    // Adiciona na const nomeDoItem o comando para criar um elemento ("p")
    const nomeDoItem = document.createElement("p");
    // Altera o texto do "p" atribuindo o valor do item que foi anteriormente concatenado
    nomeDoItem.innerText = item.value;
    // Faz com que o nomeDoItem("p") fique identado dentro do containerNomeDoItem("div")
    containerNomeDoItem.appendChild(nomeDoItem);

    // Adiciona na const containerBotoes o comando para criar um elemento ("div")
    const containerBotoes = document.createElement("div");
    // Adiciona na const botaoRemover o comando para criar um elemento ("button")
    const botaoRemover = document.createElement("button");
    // Adiciona uma class no botão criado anteriormente
    botaoRemover.classList.add("botao-acao");
    // Adiciona na const botaoEditar o comando para criar um elemento ("button")
    const botaoEditar = document.createElement("button");
    // Adiciona uma class no botão criado anteriormente
    botaoEditar.classList.add("botao-acao");

    // Adiciona na const imagemRemover o comando para criar um elemento ("img")
    const imagemRemover = document.createElement("img");
    // Altera o .src da imagemRemover("img")
    imagemRemover.src = "img/delete.svg";
    // Altera o .alt da imagemRemover("img")
    imagemRemover.alt = "Remover";
    
    // Adiciona na const imagemRemover o comando para criar um elemento ("img")
    const imagemEditar = document.createElement("img");
    // Altera o .src da imagemRemover("img")
    imagemEditar.src = "img/edit.svg";
    // Altera o .alt da imagemRemover("img")
    imagemEditar.alt = "Editar";

    // Faz com que o imagemRemover("img") fique identado dentro do botaoRemover("button")
    botaoRemover.appendChild(imagemRemover);
    // Faz com que o botaoRemover("button") fique identado dentro do containerBotoes("div")
    containerBotoes.appendChild(botaoRemover);
    // Faz com que o imagemEditar("img") fique identado dentro do botaoEditar("button")
    botaoEditar.appendChild(imagemEditar);
    // Faz com que o botaoEditar("button") fique identado dentro do containerBotoes("div")
    containerBotoes.appendChild(botaoEditar);

    // Faz com que o containerNomeDoItem("div") fique identado dentro do containerItemLista("div") 
    containerItemLista.appendChild(containerNomeDoItem);
    // Faz com que o containerBotoes("div") fique identado dentro do containerItemLista("div") 
    containerItemLista.appendChild(containerBotoes);

    // Faz com que o containerItemLista("div") fique identado dentro do itemDaLista("li") 
    itemDaLista.appendChild(containerItemLista);
    // Faz com que o itemDaLista("div") fique identado dentro da listaDeCompras("ul") 
    listaDeCompras.appendChild(itemDaLista);
}