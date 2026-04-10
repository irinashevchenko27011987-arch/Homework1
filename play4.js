const playLink4 = document.getElementById('play-game-4');
playLink4.addEventListener('click', function (event) {
    event.preventDefault();
    getRandomWord();
});
function getRandomWord () {
const userInput = prompt('Твой выбор: "камень", "ножницы", или "бумага"').toLowerCase()
if(!['камень', 'ножницы', 'бумага'].includes(userInput)){
    alert("Ошибка! Ты ввёл что-то не то!");
    const playAgain = confirm('Хотите попробовать ещё раз?');
    if (playAgain) {
        getRandomWord(); 
    }
    return; 
  }

const words = ['камень', 'ножницы', 'бумага'];
const randomIndex =  Math.floor(Math.random() * words.length);
const computerChoice = words[randomIndex];

let result;
if(userInput === computerChoice){
    result = 'Ничья';
    }
    else if (
        (userInput === 'камень' && computerChoice === 'ножницы') ||
        (userInput === 'ножницы' && computerChoice === 'бумага') ||
        (userInput === 'бумага' && computerChoice === 'камень')
      ) {
        result = 'Вы победили!';
      } else {
        result = 'Компьютер победил!';
      }

      const playAgain = confirm(`
Ваш выбор: ${userInput}
Выбор компьютера: ${computerChoice}
Результат: ${result}
Хотите сыграть ещё раз?`);
    if (playAgain) {
        getRandomWord(); 
    }
}
