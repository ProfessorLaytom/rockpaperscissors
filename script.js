const choice = ['rock', 'paper', 'scissors']

function computerPlay() {
    return choice[Math.floor(Math.random()*3)]
}

computerPlay()

function singleRound(playerSelect, computerSelect = computerPlay()) {
    //Tedious way to see who wins, who loses and draws
    //lowers all cases to ensure it works
    playerSelect = playerSelect.toLowerCase();
    if (playerSelect === computerSelect) {
        return `That\'s a draw ! ${playerSelect} is equal to ${playerSelect}.`
    }  else if  (playerSelect == 'rock' && computerSelect == 'paper'){
        return 'You lose ! Paper beats rock.'
    } else if (playerSelect == 'rock' && computerSelect == 'scissors') {
        return 'You win ! Rock beats scissors.'
    }else if (playerSelect == 'paper' && computerSelect == 'rock'){
        return 'You win ! Paper beats rock.'
    }else if (playerSelect == 'paper' && computerSelect == 'scissors'){
        return 'You lose ! scissors beats paper.'
    }else if (playerSelect == 'scissors' && computerSelect == 'rock'){
        return 'You lose ! Rock beats scissors.'
    }else if (playerSelect == 'scissors' && computerSelect == 'paper'){
        return 'You win ! Scissors beats paper.'
    }
}

function game() {
    //function for a full game of 5 rounds
    let score = [0,0]
    let lastResult = ''
    for (let i = 0; i<5; i++){
        let playerSelect = prompt(lastResult + ` The score now is ${score[0]} to ${score[1]}.` + ' ' + 'What is your move ?')
        if (!playerSelect || !choice.includes(playerSelect.toLowerCase())) {
            //checks for valid answers
            alert('Please enter rock, paper or scissors')
            break
        }
        else {
            lastResult = singleRound(playerSelect)
            if (lastResult[4] == 'l') {
                score[1] += 1
            }else if (lastResult[4] == 'w'){
                score[0] += 1
            } else {
                score[0] += 1
                score[1] += 1
            } //checks on the return string the fourth letter (either w or l if won or lost for keeping track of the score)
        }
    }
    return lastResult + ' ' + finalResult(score)
}

function finalResult(score){
    if (score[0] > score[1]){
        return `You won with a score of ${score[0]} to ${score[1]}.`
    } else if (score[0] < score[1]){
        return `You lost with a score of ${score[0]} to ${score[1]}.`
    } else {
        return `It's a draw with a score of ${score[0]} to ${score[1]}.`
    }
}