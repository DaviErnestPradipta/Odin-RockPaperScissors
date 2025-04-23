let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
const limit = 5

function getComputerChoice() {
    return Math.floor(3 * Math.random())
}

const changeAnnouncement = document.querySelector(`.announcement`)

function playRound(humanSelection, computerSelection) {
    if ((humanSelection - computerSelection + 3) % 3 === 1) {
        humanScore += 1
        changeAnnouncement.textContent = `You won round ${roundsPlayed + 1}!`
    } 
    else if ((humanSelection - computerSelection + 3) % 3 === 2) {
        computerScore += 1
        changeAnnouncement.textContent = `Computer won round ${roundsPlayed + 1}!`
    }
    else {
        changeAnnouncement.textContent = `No one won round ${roundsPlayed + 1}!`
    }

    roundsPlayed += 1
    updateScoreDisplay()

    if (roundsPlayed >= limit || Math.abs(humanScore - computerScore) > limit - roundsPlayed) {
        endGame()
    }
}

function endGame() {
    if (humanScore > computerScore) {
        changeAnnouncement.textContent = `You won the game!`
    }
    else if (humanScore < computerScore) {
        changeAnnouncement.textContent = `Computer won the game!`
    }
    else {
        changeAnnouncement.textContent = `No one won the game!`
    }

    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function updateScoreDisplay() {
    const humanScoreDisplay = document.querySelector(`.humanScoreCounter`)
    const computerScoreDisplay = document.querySelector(`.computerScoreCounter`)

    if (humanScoreDisplay && computerScoreDisplay) {
        humanScoreDisplay.textContent = `Human ${humanScore}`
        computerScoreDisplay.textContent = `${computerScore} Computer`
    }
}

for (let i = 0; i <= 2; i++) {
    const button = document.querySelector(`#button${i}`);
    if (button) {
        button.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            playRound(i, computerSelection);
        });
    }
}