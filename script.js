const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    {
        enunciado: "Qual o papel histórico do veterinário na saúde pública?",
        alternativas: [
            {
                texto: "Controlar zoonoses e garantir a segurança alimentar.",
                afirmacao: "Como a veterinária historicamente controla doenças e garante a segurança dos alimentos,"
            },
            {
                texto: "Cuidar apenas de animais de grande porte nas fazendas.",
                afirmacao: "Embora muitos limitem a profissão ao cuidado com grandes animais,"
            }
        ]
    },
    {
        enunciado: "Como a Veterinária atua no conceito moderno de 'Saúde Única'?",
        alternativas: [
            {
                texto: "Conectando a saúde humana, animal e ambiental.",
                afirmacao: "ela conecta a saúde humana, animal e ambiental para prever pandemias,"
            },
            {
                texto: "Atuando como uma área secundária de apoio aos médicos.",
                afirmacao: "seu papel preventivo contra epidemias globais ainda é subestimado,"
            }
        ]
    },
    {
        enunciado: "O que o crescimento do mercado Pet exige do profissional hoje?",
        alternativas: [
            {
                texto: "Especializações complexas e alto preparo emocional.",
                afirmacao: "exigindo especializações complexas que justificam maior valorização social,"
            },
            {
                texto: "Conhecimento básico, já que os tratamentos são simples.",
                afirmacao: "apesar de a alta complexidade dos tratamentos atuais ser ignorada,"
            }
        ]
    },
    {
        enunciado: "Qual o impacto direto do veterinário no agronegócio?",
        alternativas: [
            {
                texto: "Garantir o bem-estar animal e abrir mercados internacionais.",
                afirmacao: "sustentando a economia e a exportação com rigorosos protocolos sanitários,"
            },
            {
                texto: "Cuidar apenas da parte burocrática do transporte.",
                afirmacao: "provando que o trabalho no campo vai muito além de burocracias,"
            }
        ]
    },
    {
        enunciado: "Qual a importância do veterinário para os animais selvagens?",
        alternativas: [
            {
                texto: "Preservar espécies em extinção e recuperar a fauna.",
                afirmacao: "e consolidando o profissional como guardião essencial da biodiversidade."
            },
            {
                texto: "Atuar de forma isolada, sem impacto nas cidades.",
                afirmacao: "reforçando que proteger a fauna silvestre é proteger o próprio futuro."
            } //fechamento do objeto do texto e afirmação da lista de alternativas
        ] //fechamento da lista de alternativas
    }, //fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
]; //fechamento da lista de perguntas


let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    //função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta