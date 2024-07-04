

function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
     if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    } else if (num == 2) {
        return "scissor"
    }
}


function getHumanChoice() {
    let makeChoice = prompt('Please enter rock, paper or scissor')
    return makeChoice.toLowerCase();
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log('THE GAME IS DRAW');
        
    } else if (humanChoice == 'rock' && computerChoice == 'scissor') {
        console.log('You win! Rock beats Scissor');
        
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats Rock');

    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        console.log('You win! Scissor beats Paper');

    } else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        console.log('You lose! Rock beats Scissor');
        
    } else if (humanChoice == 'rock' && computerChoice=='paper') {
        console.log('You lose! Paper beats Rock');

    } else if (humanChoice=='paper' && computerChoice=='scissor') {
        console.log('You lose! Scissor beats Paper');
        
    }
    humanScore++;
    console.log(humanScore);
    }
    
    


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);


playRound(humanSelection, computerSelection);



