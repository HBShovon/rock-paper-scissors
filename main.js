// Select button elements
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

const pChoice = document.querySelector(".playerChoice");
const cChoice = document.querySelector(".computerChoice");
const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");
const result = document.querySelector(".result");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissor.addEventListener("click", playRound);
let round = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(e) {
  // console.log(e);

  function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
      return "rock";
    } else if (num == 1) {
      return "paper";
    } else if (num == 2) {
      return "scissor";
    }
  }
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  const humanChoice = e.target.textContent.toLowerCase();
  console.log(humanChoice);

  if (humanChoice == computerChoice) {
    console.log("THE GAME IS DRAW");
    result.textContent = "THE GAME IS DRAW";
  } else if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log("You win! Rock beats Scissor");
    result.textContent = "You win! Rock beats Scissor";
    playerScore = playerScore + 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    result.textContent = "You win! Paper beats Rock";
    playerScore = playerScore + 1;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("You win! Scissor beats Paper");
    result.textContent = "You win! Scissor beats Paper";
    playerScore = playerScore + 1;
  } else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissor");
    result.textContent = "You lose! Rock beats Scissor";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    result.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("You lose! Scissor beats Paper");
    result.textContent = "You lose! Scissor beats Paper";
    computerScore++;
  }

  console.log(`P:${playerScore}`);
  console.log(`C:${computerScore}`);
  round++;
  console.log(round);
  pChoice.textContent = `Player Choice: ${humanChoice}`;
  cChoice.textContent = `Computer Choice:${computerChoice}`;
  pScore.textContent = `Player Score:${playerScore}`;
  cScore.textContent = `Computer Score:${computerScore}`;
  if (playerScore == 5) {
    result.textContent = "Player Wins! Game Ends.";
  } else if (computerScore == 5) {
    result.textContent = "Computer Wins! Game Ends.";
  }
}
