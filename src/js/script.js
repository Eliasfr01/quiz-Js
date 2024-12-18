const htmlQuestions = [
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
        options: ["<class>", "<id>", "<name>", "<name>"],
        correctAnswer: ""
    },
    {
        question: "Qual é a tag HTML usada para criar um botão clicável?",
        options: ["<btn>", "<button>", "<click>", "<input>"],
        correctAnswer: "<button>"
    },
    {
        question: "Qual atributo é usado para abrir um link em uma nova aba?",
        options: ["<target=_self>>", "<target=_blank>", "<rel=new>", "<blank=true>"],
        correctAnswer: "<target=_blank>"
    },
    {
        question: "Qual atributo HTML é usado para especificar o texto exibido quando o elemento não é renderizado corretamente?",
        options: ["<alt>", "<title>", " <placeholder>", "<tooltip>"],
        correctAnswer: "<alt>"
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
        options: ["<link>", "<meta>", " <script>", "<style>"],
        correctAnswer: "<meta>"
    },
    {
        question: "Qual atributo deve ser usado para associar um rótulo <label> a um campo <input>?",
        options: ["<name>", "<for>", "<id>", "<value>"],
        correctAnswer: "<for>"
    },
    {
        question: "Qual é o propósito do atributo rel='noopener noreferrer' em um link?",
        options: ["<Previne problemas de segurança ao abrir links em nova aba.>", "<Ativa o redirecionamento automático.>", "<Define o tipo de conteúdo esperado pelo navegador.>", "<Desabilita o link.>"],
        correctAnswer: "<Previne problemas de segurança ao abrir links em nova aba.>"
    },
    {
        question: "Qual é a função da tag <picture> em HTML5?",
        options: ["<Substituir a tag <img>>", "<Criar slideshows de imagens automaticamente>", "< Fornecer diferentes fontes de imagem para dispositivos variados>", "<Permitir a edição de imagens diretamente no navegador>"],
        correctAnswer: "<Fornecer diferentes fontes de imagem para dispositivos variados>"
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
];

const cssQuestions = [
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
];

const jsQuestions = [
    {
        question: "Qual tag HTML é usada para incluir um arquivo JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<link>"],
        correctAnswer: "<script>"
    },
    {
        question: "Qual é a sintaxe correta para exibir \"Olá, Mundo!\" no console?",
        options: ["<print(\"Olá, Mundo!\)>", "<console.print(\"Olá, Mundo!\")>", "<console.log(\"Olá, Mundo!\")>", "<log.console(\"Olá, Mundo!\")>"],
        correctAnswer: "<console.log(\"Olá, Mundo!\")>"
    },
    {
        question: "Qual é a extensão de arquivo usada para scripts JavaScript?",
        options: ["html", "css", "js", "json"],
        correctAnswer: "js"
    },
    {
        question: "Qual comando exibe uma mensagem no console do navegador?",
        options: ["alert()", "print()", "log()", "console.log()"],
        correctAnswer: "console.log()"
    },
    {
        question: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        options: [
            "var nome = 'valor';",
            "let nome = 'valor';",
            "const nome = 'valor';",
            "Todas as alternativas anteriores"
        ],
        correctAnswer: "Todas as alternativas anteriores"
    },
    {
        question: "O que a função alert() faz?",
        options: [
            "Exibe uma mensagem no console.",
            "Exibe uma caixa de diálogo com uma mensagem.",
            "Salva dados no servidor.",
            "Cria outra variável."
        ],
        correctAnswer: "Exibe uma caixa de diálogo com uma mensagem."
    },
    {
        question: "Qual é o valor de x após executar o código abaixo\n \"let x = 10; x += 5; \"?",
        options: ["<10>", "<15>", "<5>", "<Undefined>"],
        correctAnswer: "<15>"
    },
    {
        question: "O que o seguinte código retorna?\n\"console.log(typeof \"Texto\");\"",
        options: ["<text>", "<string>", "<object>", "<undefined>"],
        correctAnswer: "<string>"
    },
    {
        question: "Qual é a saída do código abaixo?\n\"console.log(5 == \"5\");\"",
        options: ["<true>", "<false>", "<undefined>", "<null>"],
        correctAnswer: "<true>"
    },
    {
        question: "Como você converte uma string para um número em JavaScript?",
        options: ["<parseString(\"123\")>", "<toInt(\"123\")>", "<Number(\"123\")>", "<StringToNumber(\"123\")>"],
        correctAnswer: "<Number(\"123\")>"
    },
    {
        question: "Qual método é usado para adicionar um elemento ao final de um array?",
        options: ["<array.add()>", "<array.push()>", "<array.append()>", "< array.insert()>"],
        correctAnswer: "< array.push()>"
    },

    {
        question: "Qual é a saída do código console.log(\"10\" + 20);?",
        options: ["30", "\"30\"", "\"1020\"", "1020"],
        correctAnswer: "\"1020\""
    },
    {
        question: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
        options: [
            "function minhaFuncao() { }",
            "func minhaFuncao() { }",
            "define minhaFuncao() { }",
            "function: minhaFuncao() { }"
        ],
        correctAnswer: "function minhaFuncao() { }"
    },
    {
        question: "Qual será a saída do seguinte código \"let a = \"10;\"\n \"let b = 10;\"\n\"console.log(a === b); \"?\"",
        options: ["<true>", "<false>", "<undefined>", "<null>"],
        correctAnswer: "<false>"
    },
    {
        question: "Qual será o resultado do código abaixo?\n \"let x;\n console.log(x + 2); \"",
        options: ["<NaN>", "<2>", "<undefined2>", "<null>"],
        correctAnswer: "<NaN>"
    },
    {
        question: "Qual é o valor da variável resultado após executar o código?\n \"let resultado = 5 > 3 ? \"Maior\" : \"Menor\";\"",
        options: ["<Maior>", "<Menor>", "<Undefined>", "<null>"],
        correctAnswer: "<Maior>"
    },
    {
        question: "O que o seguinte código imprime no console?\n \"let obj = { nome: \"João\", idade: 25 };\nconsole.log(Object.keys(obj)); \"",
        options: ["<[\"nome\", \"idade\"]>", "<[\"João\", 25]>", "<[\"obj\"]>", "< null>"],
        correctAnswer: "<[\"nome\", \"idade\"]>"
    },
    {
        question: "Qual será a saída do código abaixo?\n\"function soma(a, b = 3) {\nreturn a + b;\n}\nconsole.log(soma(2)); \"",
        options: ["<5>", "<2>", "<NaN>", "<undefined>"],
        correctAnswer: "<5>"
    },
    {
        question: "Qual é a saída do seguinte código?\n\nlet a = 10;\nlet b = 20;\nif (a < b && b > 15) {\n    console.log(\"Condição verdadeira\");\n} else {\n    console.log(\"Condição falsa\");",
        options: ["Condição falsa", "Condição verdadeira", "Undefined", "Null"],
        correctAnswer: "Condição verdadeira"
    },
    {
        question: "Qual será a saída do seguinte código?\n\nlet idade = 30;\nif (idade >= 18) {\n    console.log(\"Maior de idade\");\n} else {\n    console.log(\"Menor de idade\");",
        options: ["Maior de idade", "Menor de idade", "Undefined", "Null"],
        correctAnswer: "Maior de idade"
    },
    {
        question: "Qual é o resultado da expressão 5 % 2?",
        options: ["0", "1", "2", "5"],
        correctAnswer: "1"
    },
    {
        question: "Qual será a saída do seguinte código?\n\nlet a = 5;\nlet b = 10;\nlet c = 15;\nconsole.log(a > b || b < c);",
        options: ["True", "False", "Undefined", "Null"],
        correctAnswer: "True"
    }
];

let allQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
function getRandomQuestions(moduleQuestions, numQuestions) {
    let shuffled = moduleQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

function startQuiz(module) {
    if (module === 'html') {
        allQuestions = getRandomQuestions(htmlQuestions, 10);
    }
    else if (module === 'css') {
        allQuestions = getRandomQuestions(cssQuestions, 10);
    }
    else if (module === 'javascript') {
        allQuestions = getRandomQuestions(jsQuestions, 10);
    }
    else if (module === 'mixed') {
        allQuestions = [
            ...getRandomQuestions(htmlQuestions, 3),
            ...getRandomQuestions(cssQuestions, 3),
            ...getRandomQuestions(jsQuestions, 4)
        ];
    }
    document.getElementById("moduleSelection").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    loadQuestion();
}
function loadQuestion() {
    if (currentQuestionIndex >= allQuestions.length) {
        document.getElementById("question").textContent = `Quiz concluído! Sua pontuação final é ${score} de ${allQuestions.length}.`;
        document.querySelectorAll(".option").forEach(button => button.style.display = 'none');
        document.getElementById("num-question").style.display = 'none';
        return;
    }
    const currentQuestion = allQuestions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const buttons = document.querySelectorAll(".option");
    buttons.forEach((button, index) => {
        button.textContent = `${String.fromCharCode(65 + index)}) ${currentQuestion.options[index]}`;
        button.onclick = () => checkAnswer(currentQuestion.options[index]);
    });
    document.getElementById("feedback").textContent = ''; // Limpa o feedback de resposta 
    document.getElementById("num-question").textContent = `Pergunta ${currentQuestionIndex + 1} de ${allQuestions.length}`;
}
function checkAnswer(selectedOption) {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    if (selectedOption === currentQuestion.correctAnswer) {
        feedback.textContent = "Resposta correta!";
        feedback.style.color = "green"; score++;
    }
    else {
        feedback.textContent = "Resposta errada. Tente novamente!";
        feedback.style.color = "red";
    } currentQuestionIndex++;
    setTimeout(() => {
        loadQuestion();
    }, 2000);
    function goBack() {
        document.getElementById("moduleSelection").style.display = 'block';
        document.getElementById("quiz").style.display = 'none';
        currentQuestionIndex = 0;
        score = 0;
        document.querySelectorAll(".option").forEach(button => button.style.display = 'inline-block');
        document.getElementById("progress").style.display = 'block';
        document.getElementById("backButton").style.display = 'none';
    }
}