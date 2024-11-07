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
            resolve({
                url: leitor.result,
                nome: arquivo.name
            })
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
});

// Coloca na const o elemento pego com o id "input-tags" (input)
const inputTags = document.getElementById("input-tags");
// Coloca na const o elemento pego com o id "lista-tags" (ul)
const listaTags = document.getElementById("lista-tags");

// Adiciona um evento click sobre o listaTags
listaTags.addEventListener("click", (evento) => {
    // Caso o target (alvo) clicado conter em sua classList "remove-tag"
    if (evento.target.classList.contains("remove-tag")) {
        // Coloca na const o pai do elemento clicado "li"
        const tagQueQueremosRemover = evento.target.parentElement;
        // Rmove o tagQueQueremosRemover ("li") do listaTags ("ul")
        listaTags.removeChild(tagQueQueremosRemover);
    }
});

const tagsDisponiveis = [
    "Front-end",
    "Back-end",
    "Full-stack",
    "DevOps",
    "Data Science",
    "Machine Learning",
    "Inteligência Artificial",
    "Engenharia de Dados",
    "Análise de Dados",
    "Cybersecurity",
    "Cloud Computing",
    "Redes",
    "IoT",
    "Blockchain",
    "QA",
    "Desenvolvimento Mobile",
    "Desenvolvimento de Jogos",
    "Automação",
    "Administração de Sistemas",
    "Suporte Técnico",
    "Big Data",
    "Engenharia de Software",
    "Banco de Dados",
    "Arquitetura de Software",
    "Design de UX/UI",
    "Robótica",
    "Administração de Redes",
    "Realidade Aumentada",
];

/* Estrutura assíncrona permite executar operações demoradas (ex: leitura de arquivos) 
sem bloquear o restante do código. 
Assim, o código continua rodando enquanto espera a conclusão da operação. */
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        // Coloca um tempo para fazer a pesquisa
        setTimeout(() => {
            // Caso dê certo vê se nas tagsDisponiveis inclui a tagTexto
            resolve(tagsDisponiveis.includes(tagTexto));
            // Tempo de 1000ms
        }, 1000)
    })
}

// Adiciona um evento ao precionar uma tecla
inputTags.addEventListener("keypress", async (evento) => {
    // Caso a key precionada do evento seja igual a "Enter"
    if (evento.key === "Enter") {
        // Previne o evento padrão
        evento.preventDefault();
        // Coloca na const o valor com .trim (tirando os espaços antes e depois da palavra) do inputTags
        const tagTexto = inputTags.value.trim();

        // Caso não seja vazio
        if (tagTexto !== "") {
            // Faz uma tentativa
            try {
                // Coloca na const o resultado da espera da função verificaTagsDisponiveis 
                // enviando o tagTexto como parâmetro
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                // Caso a tagExiste seja verdadeiro
                if (tagExiste) {
                    // Coloca na const a criação do elemento "li"
                    const tagNova = document.createElement("li");
                    // Altera o html dentro do tagNova
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                    // Coloca o elemento "tagNova" (li) identado dentro do "listaTags" (ul)
                    listaTags.appendChild(tagNova);
                    // Define o valor do input como vazio 
                    inputTags.value = "";
                    // Caso não
                } else {
                    alert("Tag não encontrada.");
                }
                // Caso a tentativa dê errado
            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag. Verifique o console.")
            }
        }
    }
});

async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulação de um fator externo para dar erro (neste caso, baseado na sorte)
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.")
            } else {
                reject("Erro ao publicar o projeto.")
            }
        }, 2000)
    })
}

// Coloca na const o elemento com o id "botao-publicar" (button)
const botaoPublicar = document.querySelector(".botao-publicar");
// Adiciona um evento ao clicar no botaoPublicar
botaoPublicar.addEventListener("click", async (evento) => {
    // Previne o evento padrão
    evento.preventDefault();
    // Coloca na const o elemento pego com o id "nome"
    const nomeDoProjeto = document.getElementById("nome").value;
    // Coloca na const o elemento pego com o id "descricao"
    const descricaoDoProjeto = document.getElementById("descricao").value;
    // Coloca na const um array vindo de todos os "p" pegos da listaTags
    // .map é um método de arrays que cria um novo array, aplicando uma função a cada item do array original.
    // que o caso dá função é passar a tag, que é o "p" e pega o seu textContect de cada um
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Projeto publicado com sucesso!");
    } catch (error) {
        console.log("Falha: " + error);
        alert("Erro na publicação do projeto.")
    }
});

// Coloca na const o elemento com a class "botao-descartar" (button)
const botaoDescartar = document.querySelector(".botao-descartar");

// Aciona um evento ao clicar
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault()

    // Como só possuí um form no html vai colocar na const o elemento "form"
    const formulario = document.querySelector("form");
    // Comando para limpar todos os campos do elemento selecionado
    formulario.reset();
    // Define a imagem do projeto como a padrão anterior
    imagemPrincipal.src = "./img/imagem1.png"
    nomeDaImagem.textContent = "image_projeto.png"
    
    // Limpa a lista das tags
    listaTags.innerHTML = "";
});