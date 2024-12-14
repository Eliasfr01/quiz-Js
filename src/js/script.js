const questions = [
  {
      question: "Qual é a capital do Brasil?",
      options: ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador"],
      correctAnswer: "A"
  },
  {
      question: "Qual é o maior planeta do sistema solar?",
      options: ["Terra", "Júpiter", "Saturno", "Marte"],
      correctAnswer: "B"
  },
  {
      question: "Quem escreveu 'Dom Casmurro'?",
      options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Graciliano Ramos"],
      correctAnswer: "A"
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
  } else {
      feedback.textContent = "Resposta errada. Tente novamente!";
  }
  
  // Mudar a pergunta após 2 segundos
  setTimeout(() => {
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      loadQuestion();
  }, 2000);
}

// Inicia o quiz com a primeira pergunta
loadQuestion();
