const playLink1 = document.getElementById('play-game-1');
playLink1.addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});
function startGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let userInput = prompt("Угадай число от 1 до 100");
        if (userInput === null) {
      alert('Игра окончена. До новых встреч!');
      break;
    }
       let guessNumber = Number(userInput);
        if (guessNumber === randomNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (guessNumber > randomNumber) {
            alert("Твое число больше загаданного, попробуй еще!");
        } else {
            alert("Твое число меньше загаданного, попробуй еще!");
        }
    }
}