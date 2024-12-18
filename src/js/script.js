// Perguntas para o quiz
const quizzes = {
    html: [
        {
            question: "O que significa HTML?",
            options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "None of the above"],
            answer: 0
        },
        {
            question: "Qual tag é usada para incluir imagens no HTML?",
            options: ["<img>", "<image>", "<src>", "<picture>"],
            answer: 0
        },
        {
            question: "Qual é a tag HTML correta para criar um link?",
            options: ["<a href=\"url\">", "<link href=\"url\">", "<hyperlink href=\"url\">", "<url=\"url\">"],
            correctAnswer: "<a href=\"url\">"
        },
        {
            question: "Qual tag HTML é usada para exibir uma imagem?",
            options: ["<img>", "<image>", "<pic>", "<src>"],
            correctAnswer: "<img>"
        },
        {
            question: "Qual tag HTML é usada para definir um título principal?",
            options: ["<h1>", "<title>", "<head>", "<header>"],
            correctAnswer: "<h1>"
        },
        {
            question: "Qual é a tag HTML para criar uma lista ordenada?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            correctAnswer: "<ol>"
        },
        {
            question: "Qual atributo HTML é usado para identificar elementos unicamente em uma página?",
            options: ["class", "id", "name", "classid"],
            correctAnswer: "id"
        },
        {
            question: "Qual é a tag HTML usada para criar um botão clicável?",
            options: ["<btn>", "<button>", "<click>", "<input>"],
            correctAnswer: "<button>"
        },
        {
            question: "Qual atributo é usado para abrir um link em uma nova aba?",
            options: ["<target=_self>", "<target=_blank>", "<rel=new>", "<blank=true>"],
            correctAnswer: "<target=_blank>"
        },
        {
            question: "Qual atributo HTML é usado para especificar o texto exibido quando o elemento não é renderizado corretamente?",
            options: ["alt", "title", "placeholder", "tooltip"],
            correctAnswer: "alt"
        },
        {
            question: "Qual é a estrutura correta para criar uma célula de cabeçalho em uma tabela?",
            options: ["<td>", "<tr>", "<th>", "<caption>"],
            correctAnswer: "<th>"
        },
        {
            question: "Qual tag HTML é usada para definir um campo de entrada de texto em um formulário?",
            options: ["<textarea>", "<input type=text>", "<input type=textarea>", "<text>"],
            correctAnswer: "<input type=text>"
        },
        {
            question: "Qual atributo HTML pode ser usado para desativar um botão?",
            options: ["<disable>", "<disabled>", "<readonly>", "<inactive>"],
            correctAnswer: "<disabled>"
        },
        {
            question: "Como você define um item selecionado por padrão em uma lista suspensa?",
            options: ["<default>", "<checked>", "<selected>", "<autofocus>"],
            correctAnswer: "<selected>"
        },
        {
            question: "Qual tag HTML é usada para inserir metadados sobre a página na seção <head>?",
            options: ["<link>", "<meta>", "<script>", "<style>"],
            correctAnswer: "<meta>"
        },
        {
            question: "Qual atributo deve ser usado para associar um rótulo <label> a um campo <input>?",
            options: ["name", "for", "id", "value"],
            correctAnswer: "for"
        },
        {
            question: "Qual é o propósito do atributo rel='noopener noreferrer' em um link?",
            options: ["Previne problemas de segurança ao abrir links em nova aba.", "Ativa o redirecionamento automático.", "Define o tipo de conteúdo esperado pelo navegador.", "Desabilita o link."],
            correctAnswer: "Previne problemas de segurança ao abrir links em nova aba."
        },
        {
            question: "Qual é a função da tag <picture> em HTML5?",
            options: ["Substituir a tag <img>", "Criar slideshows de imagens automaticamente", "Fornecer diferentes fontes de imagem para dispositivos variados", "Permitir a edição de imagens diretamente no navegador"],
            correctAnswer: "Fornecer diferentes fontes de imagem para dispositivos variados"
        },
        {
            question: "Como você cria um campo de formulário que permite múltiplos arquivos serem enviados?",
            options: ["<input type='multiple-files'>", "<input type='file' multiple>", "<input type='upload' multiple>", "<input type='file' multiselect>"],
            correctAnswer: "<input type='file' multiple>"
        },
        {
            question: "Qual tag HTML é usada para criar um parágrafo?",
            options: ["<paragraph>", "<pg>", "<p>", "<par>"],
            correctAnswer: "<p>"
        },
        {
            question: "Qual atributo é usado para fornecer um texto alternativo para uma imagem?",
            options: ["title", "alt", "src", "href"],
            correctAnswer: "alt"
        },
        {
            question: "Qual tag HTML é usada para definir uma tabela?",
            options: ["<table>", "<tab>", "<tbl>", "<t>"],
            correctAnswer: "<table>"
        },
        {
            question: "Qual é a tag HTML correta para adicionar uma linha horizontal?",
            options: ["<line>", "<hr>", "<br>", "<hline>"],
            correctAnswer: "<hr>"
        },
        {
            question: "Qual é a tag HTML correta para inserir uma quebra de linha?",
            options: ["<br>", "<lb>", "<break>", "<newline>"],
            correctAnswer: "<br>"
        },
        {
            question: "Qual tag HTML é usada para criar uma lista não ordenada?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            correctAnswer: "<ul>"
        },
        {
            question: "Qual atributo é usado para especificar o URL de um link?",
            options: ["href", "src", "link", "url"],
            correctAnswer: "href"
        },
        {
            question: "Qual tag HTML é usada para definir um cabeçalho de seção?",
            options: ["<header>", "<h1>", "<head>", "<section>"],
            correctAnswer: "<header>"
        }
    ],
    css: [
        {
            question: "O que significa CSS?",
            options: ["Cascading Style Sheets", "Color Style Sheets", "Creative Style Sheets", "None of the above"],
            answer: 0
        },
        {
            question: "Qual propriedade é usada para alterar a cor do texto em CSS?",
            options: ["color", "font-color", "text-color", "background-color"],
            answer: 0
        },
        {
            question: "Qual é a propriedade CSS usada para mudar a cor de fundo de um elemento?",
            options: ["background-color", "bgcolor", "color", "back-color"],
            correctAnswer: "background-color"
        },
        {
            question: "Qual é a sintaxe correta para adicionar uma cor de texto em CSS?",
            options: ["color: black;", "text-color: black;", "font-color: black;", "textstyle: black;"],
            correctAnswer: "color: black;"
        },
        {
            question: "Como você adiciona um comentário em um arquivo CSS?",
            options: ["<!-- comentário -->", "// comentário", "/* comentário */", "# comentário"],
            correctAnswer: "/* comentário */"
        },
        {
            question: "Qual propriedade CSS é usada para mudar a fonte de um texto?",
            options: ["font-style", "font-weight", "text-font", "font-family"],
            correctAnswer: "font-family"
        },
        {
            question: "Qual propriedade CSS é usada para definir a cor do texto?",
            options: ["<text-color>", "<font-color>", "<color>", "<text-style>"],
            correctAnswer: "<color>"
        },
        {
            question: "Qual é a propriedade CSS usada para alterar o tamanho da fonte de um elemento?",
            options: ["font-size", "text-size", "font-height", "text-height"],
            correctAnswer: "font-size"
        },
        {
            question: "Qual propriedade CSS é usada para adicionar espaço interno dentro de um elemento?",
            options: ["margin", "padding", "spacing", "border"],
            correctAnswer: "padding"
        },
        {
            question: "Qual é a sintaxe correta para fazer todos os <p> elementos terem texto centralizado?",
            options: ["p {text-align: center;}", "p {align: center;}", "p {text-center: true;}", "p {center: text;}"],
            correctAnswer: "p {text-align: center;}"
        },
        {
            question: "Como você seleciona um elemento com o id \"menu\" em CSS?",
            options: ["#menu", ".menu", "menu", "[menu]"],
            correctAnswer: "#menu"
        },
        {
            question: "Qual propriedade CSS é usada para mudar a cor da borda de um elemento?",
            options: ["border-color", "border-style", "border-width", "border-background"],
            correctAnswer: "border-color"
        }
    ],
    js: [
        {
            question: "O que é JavaScript?",
            options: ["Uma linguagem de programação", "Uma folha de estilo", "Uma linguagem de marcação", "Uma linguagem de banco de dados"],
            answer: 0
        },
        {
            question: "Como se declara uma variável em JavaScript?",
            options: ["var", "let", "const", "Todas as alternativas"],
            answer: 3
        },

        {
            question: "Qual tag HTML é usada para incluir um arquivo JavaScript?",
            options: ["<script>", "<js>", "<javascript>", "<link>"],
            correctAnswer: "<script>"
        },
        {
            question: "Qual é a sintaxe correta para exibir \"Olá, Mundo!\" no console?",
            options: ["<print(\"Olá, Mundo!\")>", "<console.print(\"Olá, Mundo!\")>", "<console.log(\"Olá, Mundo!\")>", "<log.console(\"Olá, Mundo!\")>"],
            correctAnswer: "<console.log(\"Olá, Mundo!\")>"
        },
        {
            question: "Qual é a extensão de arquivo usada para scripts JavaScript?",
            options: ["html", "css", "js", "java"],
            correctAnswer: "js"
        },
        {
            question: "O que a função parseInt() faz em JavaScript?",
            options: ["Converte uma string em um inteiro", "Verifica se um número é inteiro", "Arredonda um número para um inteiro", "Converte um número em uma string"],
            correctAnswer: "Converte uma string em um inteiro"
        }
    ]
};

let currentQuiz = '';
let currentQuestionIndex = 0;
let currentQuizData = [];

function startQuiz(quizType) {
    currentQuiz = quizType;
    currentQuizData = quizzes[quizType];
    currentQuestionIndex = 0;

    
    document.getElementById('modal').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    showQuestion(); 
}


function showQuestion() {
    const questionData = currentQuizData[currentQuestionIndex];
    
   
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('total-questions').textContent = `Total de Perguntas: ${currentQuizData.length}`;
    document.getElementById('current-question').textContent = `Pergunta ${currentQuestionIndex + 1} de ${currentQuizData.length}`;
    
   
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; 

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index); 
        optionsContainer.appendChild(optionButton);
    });
}


function checkAnswer(selectedIndex) {
    const questionData = currentQuizData[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    
    if (selectedIndex === questionData.answer) {
        feedback.textContent = "Resposta Correta!";
    } else {
        feedback.textContent = "Resposta Errada!";
    }

   
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuizData.length) {
        setTimeout(() => {
            feedback.textContent = ''; 
            showQuestion(); 
        }, 500); 
    } else {
        setTimeout(() => {
            alert("Você completou o quiz!"); 
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('modal').style.display = 'block'; 
        }, 500); 
    }
}

