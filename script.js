//get the computer's choice
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}

let computerChoiceImg = document.createElement("img");
let personScore = 0;
let computerScore = 0;
let playerSelection;

//select the player's choice, generate the computer's selection and play a round
document.getElementById("playerChoiceRock").addEventListener("click", function () {
    playerSelection = "rock";
    onClick();
});
document.getElementById("playerChoicePaper").addEventListener("click", function() {
    playerSelection = "paper";
    onClick();
});
document.getElementById("playerChoiceScissors").addEventListener("click", function() {
    playerSelection = "scissors";
    onClick();
});

function onClick (){
    let computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
        computerChoiceImg.src="img/rock.jpg";
    } else if (computerSelection === "paper") {
        computerChoiceImg.src = "img/paper.jpg";
    } else {
        computerChoiceImg.src = "img/scissors.jpg";
    }
    document.getElementById("computerChoicePicture").appendChild(computerChoiceImg);
    PlayRound(playerSelection, computerSelection)
}

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
    console.log(playerSelection,personScore);
    console.log(computerSelection,computerScore);
}


/*function PlayRound(playerSelection,computerSelection) {
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
    console.log(personscore);
    console.log(computerScore);
}*/

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

