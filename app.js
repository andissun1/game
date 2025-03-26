var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var form = document.querySelector('.resultParas')

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Предыдущие ответы: ";
    }
    guesses.textContent += userGuess + " ";
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Поздравляю! Ты отгадал(а) число!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      setGameOver();
    } else {
      lastResult.textContent = "Нет!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Загаданное значение больше!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Загаданное значение меньше!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

  guessSubmit.addEventListener("click", checkGuess);
  guessField.addEventListener ("keypress", (e) => {
    if (e.keyCode === 13) {
        checkGuess()
    } });

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Новая игра";
    form.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll(".resultParas p");
    for (var i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "rgb(232,252,255)";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
