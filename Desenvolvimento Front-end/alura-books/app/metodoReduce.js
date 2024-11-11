// Função que calcula o valor total de todos os livros disponíveis
// Utiliza o método "reduce" para somar os preços de cada livro no array "livros"
function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}