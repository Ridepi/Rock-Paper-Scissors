//step 3 - getComputerChoice
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)+1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

//ask player for input, make it case insensitive
let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
console.log (playerSelection);

//function to play a round of Rock Paper Scissors -- Add tie option!
function PlayRound(playerSelection,computerSelection) {
    if ((playerSelection === "rock" && computerSelection ==="scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}
console.log (PlayRound(playerSelection,computerSelection));