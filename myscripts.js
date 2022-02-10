var computerscore = 0;
var playerscore = 0;

const rock = document.getElementById("ROCK");
const paper = document.getElementById("PAPER");
const scissors = document.getElementById("SCISSORS");
const reset = document.getElementById("RESET");

rock.addEventListener("click", () => {playRound(rock.id); }, false);
paper.addEventListener("click", () => {playRound(paper.id); }, false);
scissors.addEventListener("click", () => {playRound(scissors.id); }, false);
reset.addEventListener("click", function() {
    document.location.reload();
});

const score = document.querySelector("#SCORE");
const score2 = document.querySelector("#SCORE2");
const currentround = document.querySelector("#CURRENTROUND");
const final = document.querySelector("#FINAL")

//This function selects a random rock, paper, or scissors for the computer.
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


//This function plays a round and updates the score accordingly.
function playRound(player) {
    var computerSelection = computerPlay();
    if (player === computerSelection) {
        currentround.textContent = "You have tied!"
    } else if (player === "ROCK") {
        if  (computerSelection === "PAPER") {
            computerscore += 1
            currentround.textContent = "You lose! Paper beats rock!"
        } if (computerSelection === "SCISSORS") {
            playerscore += 1
            currentround.textContent = "You win!  Rock beats scissors!"
        }
    } else if (player === "PAPER") {
        if (computerSelection === "ROCK") {
            playerscore += 1
            currentround.textContent = "You win!  Paper beats rock!"
        } if (computerSelection === "SCISSORS") {
            computerscore += 1
            currentround.textContent = "You lose!  Scissors beats paper!"
        }
    } else {
        if (computerSelection === "ROCK") {
            computerscore += 1
            currentround.textContent = "You lose!  Rock beats scissors!"
        } if (computerSelection === "PAPER") {
            playerscore += 1
            currentround.textContent = "You win!  Scissors beats paper!"
        }
    }
    score.textContent = "You: " + playerscore;
    score2.textContent = "Computer: " + computerscore; 

    if (playerscore >= 5 || computerscore >= 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (playerscore > computerscore) {
            final.textContent = "You win!  Final score is " + playerscore + " to " + computerscore + "!"
        } else if (computerscore > playerscore) {
            final.textContent = "You lose!  Final score is " + playerscore + " to " + computerscore + "!"
        } else {
            final.textContent = "You tied! Final score is " + playerscore + " to " + computerscore + "!"
            }
        }

}


