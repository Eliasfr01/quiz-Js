
const correctAnswers = {
    q1: "c", 
    q2: "b", 
    q3: "b"  
  };
  
  
  document.getElementById("submit").addEventListener("click", function () {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
  
  
    for (let question in correctAnswers) {
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedOption && selectedOption.value === correctAnswers[question]) {
        score++;
      }
    }
  
   
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
  });