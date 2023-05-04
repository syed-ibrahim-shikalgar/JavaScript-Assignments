const userScore = document.getElementById("userScoreVal");
const compScore = document.getElementById("compScoreVal");
const userStat = document.getElementById("result-user-stat");
const compStat = document.getElementById("result-comp-stat");
const resultStat = document.getElementById("result-final-stat");
const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("s");
const arrayOfChoices = document.querySelectorAll(".choice");

let userSelection;
let compSelection;

let userCounter = 0;
let compCounter = 0;

function fullForm(string) {
  if (string === "r") {
    return "Rock";
  }
  if (string === "p") {
    return "Paper";
  }
  if (string === "s") {
    return "Scissors";
  }
}

function compPlay() {
  let random = Math.floor(Math.random() * arrayOfChoices.length);
  compSelection = arrayOfChoices[random].getAttribute("id");
}

function userWon() {
  userCounter++;
  userScore.innerText = userCounter;
  resultStat.innerText = "Winner : USER";
}

function compWon() {
  compCounter++;
  compScore.innerText = compCounter;
  resultStat.innerText = "Winner : COMP";
}

function ifdraw() {
  resultStat.innerText = "Winner : Draw";
}

function evaluate() {
  let userWin1 = userSelection === "r" && compSelection === "p";
  let userWin2 = userSelection === "p" && compSelection === "s";
  let userWin3 = userSelection === "s" && compSelection === "r";
  let draw = userSelection == compSelection;

  if (userWin1 || userWin2 || userWin3) {
    userWon();
    // console.log("User Won");
  } else if (draw) {
    ifdraw();
    // console.log("Draw");
  } else {
    compWon();
    // console.log("Computer Won");
  }
}

arrayOfChoices.forEach((element) => {
  element.addEventListener("click", () => {
    userSelection = element.getAttribute("id");
    compPlay();
    userStat.innerText = `User : ${fullForm(userSelection)}`;
    compStat.innerText = `Comp : ${fullForm(compSelection)}`;
    evaluate();
  });
});
