const playLink5 = document.getElementById('play-game-5');
playLink5.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Жёлтый", "3. Синий"],
        correctAnswer: 3
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Семь", "2. Пять", "3. Восемь"],
        correctAnswer: 1
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
function startGame() {
    let correctCount = 0; 
  
  
    // Проходим по каждому вопросу в викторине
    for (let i = 0; i < quiz.length; i++) {
      const currentQuestion = quiz[i];
      let userAnswer;
  
      // Запрашиваем ответ до тех пор, пока он не будет корректным
      do {
        // Формируем текст вопроса с вариантами ответов
        const questionText = `${currentQuestion.question}\n\n${currentQuestion.options.join('\n')}\n\nВведите номер ответа (1, 2 или 3):`;
  
        userAnswer = prompt(questionText);
  
        // Если пользователь нажал «Отмена»
        if (userAnswer === null) {
          alert('Викторина прервана. До новых встреч!');
          return;
        }
  
        // Преобразуем ввод в число
        userAnswer = Number(userAnswer);
      } while (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3);
  
  
      // Проверяем, правильный ли ответ
      if (userAnswer === currentQuestion.correctAnswer) {
        correctCount++;
      }
    }
  
    // Выводим итоговый результат
    alert(`Викторина завершена!\nПравильных ответов: ${correctCount} из ${quiz.length}`);
  }