const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreE1 = document.getElementById("score");
const timeE1 = document.getElementById("time");
const endgameE1 = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "bad",
  "north",
  "south",
  "east",
  "west",
  "silver",
  "golden",
  "platinum",
  "monitor",
  "program",
  "application",
  "keyboard",
  "javascript",
  "gaming",
  "network",
];

let randomWord;
let score = 0;
let time = 20;

text.focus();
const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreE1.innerHTML = score;
}
function decreaseScore() {
  score--;
  scoreE1.innerHTML = score;
}
function updateTime() {
  time--;
  timeE1.innerHTML = time + "s";

  if (time == 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameE1.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your Final Score is ${score}</p>
    <button onClick = "location.reload()">Reload</button>
    `;
  endgameE1.style.display = "flex";
}

addWordToDOM();
text.addEventListener("change", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = "";
  } else if (insertedText !== randomWord) {
    decreaseScore();
  }
});

settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
