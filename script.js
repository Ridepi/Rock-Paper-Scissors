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

