var computerscore = 0;
var playerscore = 0;

function computerPlay() {
    var computerrandom = Math.floor((Math.random() * 3) + 1)
    if (computerrandom === 1) {
        return("ROCK")
    } else if (computerrandom === 2) {
        return("PAPER")
    } else {
        return("SCISSORS")
    }
}

function playRound(player, computerSelection) {
    if (player === computerSelection) {
        return("You have tied!")
    } else if (player === "ROCK") {
        if  (computerSelection === "PAPER") {
            computerscore += 1
            return("You lose! Paper beats rock!")
        } if (computerSelection === "SCISSORS") {
            playerscore += 1
            return("You win!  Rock beats scissors!")
        }
    } else if (player === "PAPER") {
        if (computerSelection === "ROCK") {
            playerscore += 1
            return("You win!  Paper beats rock!")
        } if (computerSelection === "SCISSORS") {
            computerscore += 1
            return("You lose!  Scissors beats paper!")
        }
    } else {
        if (computerSelection === "ROCK") {
            computerscore += 1
            return("You lose!  Rock beats scissors!")
        } if (computerSelection === "PAPER") {
            playerscore += 1
            return("You win!  Scissors beats paper!")
        }
    } 
}

function playerChoice() {
    var player = prompt("Rock, paper, or scissors?").toUpperCase()
    if (player == "ROCK" || player == "PAPER" || player == "SCISSORS") {
        return(player);       
    } else {
        console.log("You must choose only rock, paper, or scissors!")
        return(playerChoice());
    }
}

function game() {
    if (playerscore != 5 && computerscore != 5) {
        var computerSelection = computerPlay()
        var player = playerChoice()
        console.log(playRound(player, computerSelection))
        return(game())
    } else {
        if (playerscore > computerscore) {
            console.log("You win!  Final score is " + playerscore + " to " + computerscore + "!")
            return 0;
        } else if (computerscore > playerscore) {
            console.log("You lose!  Final score is " + playerscore + " to " + computerscore + "!")
            return 0;
        } else {
            console.log("You tied! Final score is " + playerscore + " to " + computerscore + "!")
            return 0;
        }
    }
}

game()