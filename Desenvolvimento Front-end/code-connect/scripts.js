// Coloca na const o elemento com o id "upload-btn" (button)
const uploadBtn = document.getElementById("upload-btn");
// Coloca na const o elemento com o id "image-upload" (input)
const inputUpload = document.getElementById("image-upload");

// Quando o botão é clicado, ele executa a função dentro da arrow function
uploadBtn.addEventListener("click", () => {
    // Simula um click no campo de entrada de arquivo, abrindo a janela de seleção de arquivos.
    inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {

    /* A função retorna uma nova Promise, que é usada para quando não temos "certeza" se vai dar certo ou não
    É uma estrutura de código que permite lidar com operações assíncronas.
    Em uma operação como ler um arquivo, a Promise permite que o código espere até que a leitura termine, 
    retornando o conteúdo ou um erro.

    Estrutura assíncrona permite executar operações demoradas (ex: leitura de arquivos) 
    sem bloquear o restante do código. 
    Assim, o código continua rodando enquanto espera a conclusão da operação. */
    return new Promise((resolve, reject) => {
        // Coloca na const uma funcionalidade do js para ler o arquivo desejado
        const leitor = new FileReader();
        // Ao carregar o leitor de arquivos faz uma função anônima
        leitor.onload = () => {
            // Caso dê certo (resolve) atribuí o url e seu nome com o resultado da leitura do arquivo 
            resolve({ url: leitor.result, nome: arquivo.name})
        }

        // Ao carregar o leitor de arquivos faz uma função anônima
        leitor.onerror = () => {
            // Caso dê errado (reject) avisa o erro de leitura retornando o nome do arquivo
            reject("Erro na leitura do arquivo " + arquivo.name);
        }

        // Método do js para ler o conteúdo do tipo Blob ou File
        leitor.readAsDataURL(arquivo);
    });
}

// Coloca na const o elemento que foi pego com a class "main-imagem" (img)
const imagemPrincipal = document.querySelector(".main-imagem");
// Coloca na const o elemento "p" que foi pega com a class "container-imagem-name" (div)
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

// Quando acontece uma mudança no elemento selecionado, executa a função, 
// Usa do async pois na função vai haver uma espera
inputUpload.addEventListener("change", async (evento) => {
    /* Acessam o primeiro arquivo selecionado pelo usuário 
    (caso o campo permita vários arquivos, estariam todos na lista files). 
    evento.target representa o elemento inputUpload 
    files[0] é o primeiro arquivo selecionado. */
    const arquivo = evento.target.files[0];

    // Caso exista um arquivo
    if (arquivo) {
        // Faz uma tentativa (parecido com if/else)
        try {
            // Coloca na const o arquivo que foi lido
            // Espera o contéudo ser lido
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            // Atribuí no .src do elemento selecionado o .url do conteúdo do arquivo
            imagemPrincipal.src = conteudoDoArquivo.url;
            // Atribuí no .textContent do elemento selecionado o .nome do conteúdo do arquivo
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        // Caso dê erro 
        } catch (erro) {
            // Avisa no console o erro 
            console.error("Erro na leitura do arquivo");
        }
    }
})