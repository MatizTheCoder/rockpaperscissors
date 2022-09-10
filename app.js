let playerScore = 0
let pcScore = 0

const buttons = document.querySelectorAll('input')

// Computer choice function

function pcPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

// Disabling buttons after finishing the game

function disableButtons() {
    buttons.forEach(items => {
        items.disabled = true
    })
}

//Game functions

function gameRound(playerChoice) {
    let pcChoice = pcPlay()
    let result = ""

    if ((playerChoice == 'Rock' && pcChoice == 'Scissors') ||
        (playerChoice == 'Scissors' && pcChoice == 'Paper') ||
        (playerChoice == 'Paper' && pcChoice == "Rock")) {

        playerScore += 1
        result = ("You win!" + playerChoice + " crashes " + pcChoice + "<br><br>Your Score: " + playerScore + "<br> Computer's Score: " + pcScore)

        if (playerScore == 5) {
            result += '<br><br> You won the game! Reload the page to play again!'
            disableButtons()
        }
    }

    else if (playerChoice == pcChoice) {
        result = ("It's a tie! You both choose " + playerChoice
            + "<br><br>Your score: " + playerScore + "<br>Computer's score: " + pcScore)
    }

    else {
        pcScore += 1
        result = ("You lose! " + pcChoice + " crashes " + playerChoice
            + "<br><br>Your score: " + playerScore + "<br>Computer's score: " + pcScore)

        if(pcScore == 5){
            result += "<br><br> I won the game! Reload the page to play again"
            disableButtons()
        }

    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        gameRound(button.value)
    })
})