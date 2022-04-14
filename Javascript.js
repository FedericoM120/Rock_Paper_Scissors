//computer either returns rock, paper, or scissors

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return ("rock");
    } else if (num === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

//function that plays a round with the player selection against the computer

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        return prompt("computer wins! paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return prompt("tie");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints++;
        return prompt("player wins! scissors beats paper.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints++;
        return prompt("player wins. rock beats scissors");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints++;
        return prompt("computer wins. scissors beats paper.");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return prompt("tie")
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return prompt("tie");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        return prompt("player wins. paper beats rock.")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints++;
        return prompt("computer wins. rock beats scissors.")
    } else {
        return prompt("something went wrong!")
    }
}

//function that keeps score of playRound function and reports winner or loser at the end of 5 rounds

    let playerPoints = 0;
    let computerPoints = 0;

function game() {

        let playerName = prompt("what is your name?");
        let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
         playerSelection = prompt("Choose: Rock, Paper, or Scissors");
         computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
         playerSelection = prompt("Choose: Rock, Paper, or Scissors");
         computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
         playerSelection = prompt("Choose: Rock, Paper, or Scissors");
         computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
         playerSelection = prompt("Choose: Rock, Paper, or Scissors");
         computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerPoints > computerPoints) {
            playerPoints = 0;
            computerPoints = 0;
            return prompt(`Incredible ${playerName}! You won!`);
        } else if (computerPoints > playerPoints) {
            playerPoints = 0;
            computerPoints = 0;
            return prompt(`Try again ${playerName}. You lost!`);
        } else {
            return prompt("Even steven! You tied!");
        }
        }
        
    game();
        