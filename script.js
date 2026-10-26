

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoNovamente = document.querySelector(".novamente-btn");

const introducao = document.querySelector(".introducao");
const jogo = document.querySelector(".jogo");
const progresso = document.querySelector(".progresso");
const barra = document.querySelector(".barra-progresso-preenchida");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let indice = 0;
let nome = "";
let historia = "";

function iniciarJogo() {
    indice = 0;
    historia = "";
    nome = aleatorio(nomes);

    botaoIniciar.hidden = true;
    introducao.hidden = true;
    caixaResultado.hidden = true;
    jogo.hidden = false;

    mostrarPergunta();
}

function mostrarPergunta() {
    if (indice >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[indice];

    progresso.textContent =
        `Pergunta ${indice + 1} de ${perguntas.length}`;

    barra.style.width =
        `${(indice / perguntas.length) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            historia += aleatorio(alternativa.afirmacao) + "\n\n";
            indice++;
            mostrarPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostrarResultado() {
    jogo.hidden = true;
    caixaResultado.hidden = false;
    barra.style.width = "100%";

    textoResultado.textContent =
        `${nome}, este é o seu perfil no futebol!\n\n` +
        historia +
        "Sua meta é 2049! Acredite no seu potencial, treine com dedicação " +
        "e nunca pare de lutar pelo seu sonho.";
}

botaoIniciar.addEventListener("click", iniciarJogo);
botaoNovamente.addEventListener("click", iniciarJogo);
