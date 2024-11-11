const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    // Seleciona o elemento HTML com o ID especificado pelo valor de "this.id"
    //"this.id" representa o ID do elemento que foi clicado ou acionado
    const elementoBtn = document.getElementById(this.id);

    // Obtém o valor do elemento selecionado
    // Armazena o valor na variável "categoria".
    const categoria = elementoBtn.value;

    // Filtra o array "livros" para incluir apenas  os livros com a mesma categoria selecionada pelo botão
    // Para cada livro, verifica se a categoria do livro (livro.categoria) é igual à categoria selecionada
    // Se forem iguais, o livro é incluído no array filtrado (livrosFiltrados)
    let livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}