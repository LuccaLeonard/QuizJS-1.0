const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilização de páginas web.",
            "Um framework para desenvolvimento mobile.",
            "Uma linguagem de programação para tornar páginas web dinâmicas."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
        respostas: [
            "Exibir uma mensagem na tela do usuário.",
            "Realizar cálculos matemáticos.",
            "Imprimir mensagens de depuração no console do navegador."
        ],
        correta: 2
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let x = 10;",
            "variable x = 10;",
            "var x = 10;"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado que representa um único valor.",
            "Uma estrutura de controle de fluxo.",
            "Um conjunto ordenado de valores, acessados por índices numéricos."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma, são usados indistintamente.",
            "Um compara valores e o outro compara valores e tipos de dados.",
            "São operadores diferentes e não existem em JavaScript."
        ],
        correta: 1
    },
    {
        pergunta: "Como se realiza um loop 'for' em JavaScript?",
        respostas: [
            "for (i = 0; i < 10; i++) { }",
            "loop (i = 0; i < 10; i++) { }",
            "while (i < 10) { i++; }"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um objeto global.",
            "Um trecho de código que só pode ser executado uma vez.",
            "Um bloco de código que pode ser chamado e reutilizado."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "<!-- Comentário -->",
            "/* Comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um modelo de design de páginas web.",
            "Um formato de arquivo utilizado para armazenar dados.",
            "A representação do documento HTML que o JavaScript pode manipular."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
        respostas: [
            "Comparar dois valores.",
            "Verificar o tipo de um valor.",
            "Atribuir um valor a uma variável."
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').append(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca pergunta na tela
    quiz.appendChild(quizItem)
}
