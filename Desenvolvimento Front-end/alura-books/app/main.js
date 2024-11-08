let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById("livros");

async function getBuscarLivrosDaAPI() {
    // Coloca na const o rultado a espera para a requisição da API
    // obs: A palavra-chave await espera que a requisição com fetch termine antes de passar para a próxima linha.
    // obs: fetch é uma função integrada do JavaScript usada para fazer requisições HTTP, geralmente para obter dados de uma API.
    const res = await fetch(endpointDaAPI);
    // Coloca na variável o método usado para transformar a resposta HTTP em um objeto JSON
    livros = await res.json();
    console.table(livros)
    exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaDeLivros) {
    // A função percorre cada item (livro) em listaDeLivros para adicionar as informações de cada livro à tela.
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>`
    });
}