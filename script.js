function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}

function getPlayerChoice() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

let personScore = 0;
let computerScore = 0;

function PlayRound(playerSelection,computerSelection) {
    if ((playerSelection === "rock" && computerSelection ==="scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        personScore += 1; 
        computerScore +=0;
    } else if (playerSelection === computerSelection) {

    } else {
        personScore += 0; 
        computerScore += 1;
    }
}

function game() {
    let i = 0;
    for (; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        PlayRound(playerSelection,computerSelection);
        console.log(`For round ${i+1} player chose ${playerSelection}`);
        console.log(`For round ${i+1} computer chose ${computerSelection}`);
        console.log (personScore, computerScore);
    }
    while (personScore === computerScore) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        PlayRound (playerSelection,computerSelection);
        console.log(`For round ${i+1} player chose ${playerSelection}`);
        console.log(`For round ${i+1} computer chose ${computerSelection}`);
        console.log (personScore, computerScore);
        i++;
    }
    if (computerScore > personScore) {
        console.log(`O no, you lost with a score of ${personScore} to ${computerScore}!`);
    }   else if (computerScore < personScore){
            console.log(`You won with a score of ${personScore} to ${computerScore}!`);
        } 
}

//game();

