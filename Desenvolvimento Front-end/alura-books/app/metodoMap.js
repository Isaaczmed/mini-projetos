// Função para aplicar um desconto a todos os livros em uma lista
function aplicarDesconto(livros) {
    
    // Define a taxa de desconto como 30% (0.3)
    const desconto = parseFloat(Math.random().toFixed(2));

    // Usa o método .map() para criar uma nova lista com os preços dos livros atualizados
    // .map() percorre cada elemento do array 'livros' e aplica a função fornecida
    livrosComDesconto = livros.map(livro => {
        
        // Retorna um novo objeto para cada livro, copiando todas as propriedades do livro original
        // mas com o preço atualizado com o desconto
        return {
            ...livro, // Copia todas as propriedades do objeto 'livro' original
            preco: livro.preco - (livro.preco * desconto) // Aplica o desconto ao preço
        };
    });

    // Retorna o array de livros com desconto aplicado
    return livrosComDesconto;
}