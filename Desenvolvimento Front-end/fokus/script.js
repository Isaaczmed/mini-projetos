const html = document.querySelector("html")
const focoBt = document.querySelector(".app__card-button--foco")
const curtoBt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll(".app__card-button")
const iniciarOuPausarImg = document.querySelector(".app__card-primary-butto-icon")
const tempoNaTela = document.querySelector("#timer")
const startPauseBt = document.querySelector("#start-pause")
const musicaFocoInput = document.querySelector("#alternar-musica")
const iniciarOuPausarBt = document.querySelector("#start-pause span")
const musica = new Audio("/Desenvolvimento Front-end/fokus/sons/luna-rise-part-one.mp3")
const play = new Audio("/Desenvolvimento Front-end/fokus/sons/play.wav")
const pause = new Audio("/Desenvolvimento Front-end/fokus/sons/pause.mp3")
const beep = new Audio("/Desenvolvimento Front-end/fokus/sons/beep.mp3")

let tempoDecorridoEmSegundos = 1500
let intervaloId = null

musica.loop = true

musicaFocoInput.addEventListener("change", () => {
    if (musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto ) {
        contexto.classList.remove("active")
    })

    // Altera um atributo do elemento selecionado por outro
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/Desenvolvimento Front-end/fokus/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0){
        beep.play()
        alert("Tempo finalizado!")
        zerar()
        return;
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
    
}

function iniciarOuPausar() {
    if (intervaloId){
        pause.play()
        zerar()
        return;
    }
    play.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pause"
    iniciarOuPausarImg.setAttribute("src", `/Desenvolvimento Front-end/fokus/imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Continuar"
    iniciarOuPausarImg.setAttribute("src", `/Desenvolvimento Front-end/fokus/imagens/play_arrow.png`)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString("pt-Br", {minute: "2-digit", second: "2-digit"})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

focoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto("foco")
    focoBt.classList.add("active")
});

curtoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto("descanso-curto")
    curtoBt.classList.add("active")
})

longoBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto("descanso-longo")
    longoBt.classList.add("active")
})

startPauseBt.addEventListener("click", iniciarOuPausar)

mostrarTempo()