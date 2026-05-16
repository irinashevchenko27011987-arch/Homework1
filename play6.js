document.addEventListener('DOMContentLoaded', function() {
    const playLink6 = document.getElementById('play-game-6');
  
    playLink6.addEventListener('click', function(event) {
      event.preventDefault();
  
         const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  
      const gamesElement = document.querySelector('.mini-games');
      if (gamesElement) {
        gamesElement.style.backgroundColor = randomColor;
      }
    });
  });
   function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }