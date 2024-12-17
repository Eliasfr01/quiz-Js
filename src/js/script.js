const questions = [
    {
        question: "Qual é a extensão de arquivo usada para scripts JavaScript?",
        options: ["html", "css", "js", "json"],
        correctAnswer: "C"
    },
    {
        question: "Qual comando exibe uma mensagem no console do navegador?",
        options: ["alert()", "print()", "log()", "console.log()"],
        correctAnswer: "D"
    },
    {
        question: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        options: [
            "var nome = 'valor';",
            "let nome = 'valor';",
            "const nome = 'valor';",
            "Todas as alternativas anteriores"
        ],
        correctAnswer: "D"
    },
    {
        question: "O que a função alert() faz?",
        options: [
            "Exibe uma mensagem no console.",
            "Exibe uma caixa de diálogo com uma mensagem.",
            "Salva dados no servidor.",
            "Cria outra variável."
        ],
        correctAnswer: "B"
    },
    {
        question: "Qual é a saída do código console.log(\"10\" + 20);?",
        options: ["30", "\"30\"", "\"1020\"", "1020"],
        correctAnswer: "C"
    },
    {
        question: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
        options: [
            "function minhaFuncao() { }",
            "func minhaFuncao() { }",
            "define minhaFuncao() { }",
            "function: minhaFuncao() { }"
        ],
        correctAnswer: "A"
    },
    {
        question: "Qual é a saída do seguinte código?\n\nlet a = 10;\nlet b = 20;\nif (a < b && b > 15) {\n    console.log(\"Condição verdadeira\");\n} else {\n    console.log(\"Condição falsa\");",
        options: ["Condição falsa", "Condição verdadeira", "Undefined", "Null"],
        correctAnswer: "B"
    },
    {
        question: "Qual será a saída do seguinte código?\n\nlet idade = 30;\nif (idade >= 18) {\n    console.log(\"Maior de idade\");\n} else {\n    console.log(\"Menor de idade\");",
        options: ["Maior de idade", "Menor de idade", "Undefined", "Null"],
        correctAnswer: "A"
    },
    {
        question: "Qual é o resultado da expressão 5 % 2?",
        options: ["0", "1", "2", "5"],
        correctAnswer: "B"
    },
    {
        question: "Qual será a saída do seguinte código?\n\nlet a = 5;\nlet b = 10;\nlet c = 15;\nconsole.log(a > b || b < c);",
        options: ["True", "False", "Undefined", "Null"],
        correctAnswer: "A"
    },
    //html
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
    },
    //CSS
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
        question: "Qual tag HTML é usada para incluir um arquivo JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<link>"],
        correctAnswer: "<script>"
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



let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const buttons = document.querySelectorAll(".option");
  buttons.forEach((button, index) => {
      button.textContent = `${String.fromCharCode(65 + index)}) ${currentQuestion.options[index]}`;
  });
  document.getElementById("feedback").textContent = ''; // Limpa o feedback de resposta
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  
  if (selectedOption === currentQuestion.correctAnswer) {
      feedback.textContent = "Resposta correta!";
      feedback.style.color = "green";
  } else {
      feedback.textContent = "Resposta errada. Tente novamente!";
      feedback.style.color = "red";
  }
  

  setTimeout(() => {
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      loadQuestion();
  }, 2000);
}


loadQuestion();
