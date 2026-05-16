const playLink3 = document.getElementById('play-game-3');
playLink3.addEventListener('click', function (event) {
    event.preventDefault();
    startReversGame();
});
function startReversGame() {
const userInput = prompt('Привет. Введи свой текст');
if(userInput === null){
    alert('До встречи');
    return;
} else {
    const reversedText = userInput.split('').reverse().join('');
    alert(`Ваш текст: ${userInput}\nПеревёрнутый: ${reversedText}`);
}
}