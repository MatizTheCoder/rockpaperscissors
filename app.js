let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('input')

function computerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}