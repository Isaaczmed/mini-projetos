// Seleciona o input em que o item foi colocado pelo seu id
const item = document.getElementById("input-item");
// Seleciona o botão que salva o item na lista
const botaoSalvarItem = document.getElementById("adicionar-item");
// Seleciona o ul do carrinho de compras
const listaDeCompras = document.getElementById("lista-de-compras");
// Seleciona o ul da lista de comprados
const listaComprados = document.getElementById("lista-comprados");
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
    containerItemLista.classList.add("lista-item-container");

    // Adiciona na const containerNomeDoItem o comando para criar um elemento ("div")
    const containerNomeDoItem = document.createElement("div");

    // Adiciona na const containerCheckbox o comando para criar um elemento ("div")
    const containerCheckbox = document.createElement("div");
    // Adiciona uma class na div criada anteriormente
    containerCheckbox.classList.add("container-checkbox");

    // Adiciona na const checkboxInput o comando para criar um elemento ("input")
    const checkboxInput = document.createElement("input");
    // Altera o tipo do input mudando o .type para "checkbox"
    checkboxInput.type = "checkbox";
    // Adiciona uma class no input criado anteriormente
    checkboxInput.classList.add("input-checkbox");
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
        a classe .input-checkbox */ 
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        // Faz o mesmo para o checkbox customizado
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        // Obtém o elemento com o id "item-titulo" dentro do <li> mais próximo do elemento que disparou o evento ("click")
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        // Verifica caso o input está checked, caso esteja, adiciona a class "checked" e na lista de comprados,
        // caso não retira dos dois
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            // Muda a decoração do .style do itemTitulo para line-through
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            // Retira a decoração do .style do itemTitulo
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
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
    // Pega o id do item para adicionar um título
    nomeDoItem.id = "item-titulo"
    // Altera o texto do "p" atribuindo o valor do item que foi anteriormente concatenado
    nomeDoItem.innerText = item.value;
    // Faz com que o nomeDoItem("p") fique identado dentro do containerNomeDoItem("div")
    containerNomeDoItem.appendChild(nomeDoItem);

    // Adiciona na const containerBotoes o comando para criar um elemento ("div")
    const containerBotoes = document.createElement("div");
    // Adiciona na const botaoRemover o comando para criar um elemento ("button")
    const botaoRemover = document.createElement("button");
    // Adiciona uma class no botão criado anteriormente
    botaoRemover.classList.add("item-lista-button");
    // Adiciona na const botaoEditar o comando para criar um elemento ("button")
    const botaoEditar = document.createElement("button");
    // Adiciona uma class no botão criado anteriormente
    botaoEditar.classList.add("item-lista-button");

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

    // Cria um elemento ("p") na const itemData
    const itemData = document.createElement("p");
    // Altera o innerText do itemData, colocando a data do dia da semana, a data em números e o horário
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    // Adiciona na class do itemData a class "texto-data"
    itemData.classList.add("texto-data");

    // Faz com que o containerItemLista("div") fique identado dentro do itemDaLista("li") 
    itemDaLista.appendChild(containerItemLista);
    // Faz com que o itemData("p") fique identado dentro do containerItemLista("li") 
    itemDaLista.appendChild(itemData);
    // Faz com que o itemDaLista("div") fique identado dentro da listaDeCompras("ul") 
    listaDeCompras.appendChild(itemDaLista);
}