//get the computer's choice
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice
}

let computerChoiceImg = document.createElement("img");
let computerChoicePicture = document.querySelector("#computerChoicePicture");
let personScore = 0;
let computerScore = 0;
let playerSelection;
let scoreIndicator1 = document.querySelector("#scoreIndicator1");
let scoreIndicator2 = document.querySelector("#scoreIndicator2");
let finalScore = document.querySelector("#finalScore");
let retryButton = document.createElement("button")
let retryButtondiv = document.querySelector("#retryButton");

//define the player's choice and run the game
document.getElementById("playerChoiceRock").addEventListener("click", function () {
    playerSelection = "rock";
    onClick();
    endGame ();
});
document.getElementById("playerChoicePaper").addEventListener("click", function() {
    playerSelection = "paper";
    onClick();
    endGame();
});
document.getElementById("playerChoiceScissors").addEventListener("click", function() {
    playerSelection = "scissors";
    onClick();
    endGame();
});

//define the computer's choice, link it to the correct image and 
//make the correct image appear on the page
//Play a round and show the current score
function onClick (){
    let computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
        computerChoiceImg.src="img/rock.jpg";
    } else if (computerSelection === "paper") {
        computerChoiceImg.src = "img/paper.jpg";
    } else {
        computerChoiceImg.src = "img/scissors.jpg";
    }
    computerChoicePicture.appendChild(computerChoiceImg);
    PlayRound(playerSelection, computerSelection);
    scoreIndicator2.textContent= `The score is ${personScore} to ${computerScore}`;
}

//function for the end of the game, when one of the scores reaches 5
function endGame () {
    retryButton.classList.add("retryButton");
    if (personScore === 5) {
        finalScore.textContent = `You bested the Queen with a total score of ${personScore} to ${computerScore}!`;
        scoreIndicator2.textContent= ``;
        retryButton.textContent = "Play again";
        retryButtondiv.appendChild(retryButton);
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
        resetGame();
    } else if (computerScore === 5) {
        finalScore.textContent = `The Queen bested you with a total score of ${personScore} to ${computerScore}! Off with your head!`;
        scoreIndicator2.textContent= ``;
        retryButton.textContent = "Try again?";
        retryButtondiv.appendChild(retryButton);
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
        resetGame();
    }
}

//function to restart the game
function resetGame() {
    retryButton.addEventListener("click", function () {
        finalScore.textContent = "";
        personScore = 0;
        computerScore = 0;
        retryButton.textContent = "";
        retryButtondiv.removeChild(retryButton);
        computerChoicePicture.removeChild(computerChoiceImg);
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = false;
        });
    })
}

//play a round of the game
function PlayRound(playerSelection,computerSelection) {
    if ((playerSelection === "rock" && computerSelection ==="scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        personScore += 1; 
        computerScore +=0;
        scoreIndicator1.textContent=`You chose ${playerSelection} and the Queen chose ${computerSelection}. You win this round!`;
    } else if (playerSelection === computerSelection) {
        scoreIndicator1.textContent=`You chose ${playerSelection} and the Queen chose ${computerSelection}. This round is a tie!`;
    } else {
        personScore += 0; 
        computerScore += 1;
        scoreIndicator1.textContent=`You chose ${playerSelection} and the Queen chose ${computerSelection}. You lose this round!`;
    }
}

