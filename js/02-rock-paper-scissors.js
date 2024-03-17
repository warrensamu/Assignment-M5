function theGame(choice) {
    //COLLECT USER CHOICE
    do {
        choice = prompt('Rock, paper, or scissors?').toLowerCase()
        if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
            alert('Please enter a valid choice.')
        }
    } while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors')
    let userChoice = choice
    console.log(userChoice)
    //COLLECT COMP CHOICE
    randomNum = Math.floor(Math.random()*3)
    compChoice = randomNum
    if (compChoice === 0) {
        compChoice = 'rock'
    } else if (compChoice === 1) {
        compChoice = 'paper'
    } else if (compChoice === 2) {
        compChoice = 'scissors'
    }
    console.log(compChoice)
    //COMPARE CHOICES
    if (compChoice === 'rock') {
        switch (userChoice) {
            case 'rock':
                alert('You both chose rock! Tie!')
                break
            case 'paper':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You win!`)
                break
            case 'scissors':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You lose!`)
        }
    } else if (compChoice === 'paper') {
        switch (userChoice) {
            case 'rock':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You lose!`)
                break
            case 'paper':
                alert('You both chose paper! Tie!')
                break
            case 'scissors':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You win!`)
        }
    } else if (compChoice === 'scissors') {
        switch (choice) {
            case 'rock':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You win!`)
                break
            case 'paper':
                alert(`Opponent chose ${compChoice} and you chose ${userChoice}. You lose!`)
                break
            case 'scissors':
                alert('You both chose scissors! Tie!')
        }
    }
}

alert('Welcome to Rock, Paper, Scissors!')
theGame()
