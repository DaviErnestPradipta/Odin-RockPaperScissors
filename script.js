function getComputerChoice() {
    return Math.floor(3 * Math.random())
}
function getHumanChoice() {
    return prompt("Enter 0 for rock, 1 for paper, 2 for scissors:")
}
function playGame(limit) {
    function playRound(humanSelection, computerSelection) {
        if ((humanSelection - computerSelection + 3) % 3 === 1) {
            humanScore += 1
            console.log("You won the round!")
        }
        else if ((humanSelection - computerSelection + 3) % 3 === 2) {
            computerScore += 1
            console.log("Computer won the round!")
        }
        else {
            console.log("No one won the round!")
        }
    }
    for (let i = 0; i < limit; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
}
let humanScore = 0
let computerScore = 0
let limit = 5
playGame(limit)
if (humanScore > computerScore) {
    console.log("You won the game!")
}
else if (humanScore < computerScore) {
    console.log("Computer won the game!")
}
else {
    console.log("No one wins the game!")
}