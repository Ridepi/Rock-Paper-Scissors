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

function getPlayerChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

let playerSelection = getPlayerChoice();

let personScore = 0;
let computerScore = 0;

function PlayRound(playerSelection,computerSelection) {
    if ((playerSelection === "rock" && computerSelection ==="scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        personScore += 1; 
        computerScore +=0;
    } else if (playerSelection === computerSelection) {
        personScore += 0; 
        computerScore +=0;
    } else {
        personScore += 0; 
        computerScore += 1;
    }
}

function game() {
    for (let i=0; i<5; i++) {
        getPlayerChoice();
        console.log(`For round ${i+1} player chose ${playerSelection}`);
        getComputerChoice();
        console.log(`For round ${i+1} computer chose ${computerSelection}`)
        PlayRound(playerSelection,computerSelection);
        console.log (personScore, computerScore);
    }
}

game();
if (personScore > computerScore) {
    console.log(`You won with a score of ${personScore} to ${computerScore}!`);
}   else {
    console.log(`O no, you lost with a score of ${personScore} to ${computerScore}!`);
}
