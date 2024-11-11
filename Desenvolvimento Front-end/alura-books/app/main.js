let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    // Coloca na const o rultado a espera para a requisição da API
    // obs: A palavra-chave await espera que a requisição com fetch termine antes de passar para a próxima linha.
    // obs: fetch é uma função integrada do JavaScript usada para fazer requisições HTTP, geralmente para obter dados de uma API.
    const res = await fetch(endpointDaAPI);
    // Coloca na variável o método usado para transformar a resposta HTTP em um objeto JSON
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}