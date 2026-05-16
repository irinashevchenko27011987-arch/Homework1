const playLink2 = document.getElementById('play-game-2');
playLink2.addEventListener('click', function (event) {
    event.preventDefault();
    startMathGame();
});
function generateMathTask() {
    const operators = ['+', '-', '*', '/'];;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2, answer;

    switch (operator) {
        case '+':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 * num2;
            break;
        case '/':
            let result = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = result * num2;
            answer = result;
            break;
    }
    return {
        task: `${num1} ${operator} ${num2}`,
        answer: answer
      };
}
function forUser(task, correctAnswer) {
    while (true) {
      const userInput = prompt(`Реши пример: ${task}\nТвой ответ:`);
      if (userInput === null) {
        alert('Отменяю игру. До новых встреч!');
        return false;
      }
  
      const userAnswer = Number(userInput);
        if (isNaN(userAnswer)) {
        alert('Пожалуйста, введи число!');
        continue;
      }
  
      if (userAnswer === correctAnswer) {
        alert('Отлично!');
        return true;
      } else {
        alert(`Неверно. Попробуй ещё раз!`)
    }
  }
}
  function startMathGame() {
    alert('Добро пожаловать в игру!\nНажимай ОК, чтобы начать.');
  
    while (true) {
      const { task, answer } = generateMathTask();
      const isCorrect = forUser(task, answer);
      if (!isCorrect) {
        break;
      }
  
      const continueGame = confirm('Продолжим?');
      if (!continueGame) {
        alert('Спасибо за игру! До новых встреч!');
        break;
      }
    }
  }
  
