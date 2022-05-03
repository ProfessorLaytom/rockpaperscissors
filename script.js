const choice = ['rock', 'paper', 'scissors']
let score = [0,0]
let round = 1

function computerPlay() {
    return choice[Math.floor(Math.random()*3)]
}

function giveRoundResult(playerSelect, computerSelect) {
    //Tedious way to see who wins, who loses and draws
    const result = document.querySelector('.results') //where to put the round results
    if (playerSelect === computerSelect) {
        result.textContent = `That\'s a draw ! ${playerSelect} is equal to ${playerSelect}.`
        score[0] +=1
        score[1] +=1
    }  else if  (playerSelect == 'rock' && computerSelect == 'paper'){
        result.textContent = 'You lose ! Paper beats rock.' 
        score[1] += 1
    } else if (playerSelect == 'rock' && computerSelect == 'scissors') {
        result.textContent = 'You win ! Rock beats scissors.'
        score[0] += 1
    }else if (playerSelect == 'paper' && computerSelect == 'rock'){
        result.textContent = 'You win ! Paper beats rock.'
        score[0] += 1
    }else if (playerSelect == 'paper' && computerSelect == 'scissors'){
        result.textContent = 'You lose ! scissors beats paper.'
        score[1] += 1
    }else if (playerSelect == 'scissors' && computerSelect == 'rock'){
        result.textContent = 'You lose ! Rock beats scissors.'
        score[1] += 1
    }else if (playerSelect == 'scissors' && computerSelect == 'paper'){
        result.textContent = 'You win ! Scissors beats paper.'
        score[0] += 1
    }
    scoreBoard.textContent = `The score is now ${score[0]} to ${score[1]}.`
    round += 1
    console.log(round)

}


function singleRound(e) {
    //handles a single round and updates the html accordingly
    const computer = document.querySelector('.computer')
    computer.removeChild(computer.lastChild) //removes the last computer choice
    const playerSelect = e.target.parentElement.className //checks if the player clicked on r p or s
    const imgToHighlight = document.querySelector(`.${playerSelect}`)
    imgToHighlight.classList.add('chosen') //adds class chosen for changing the border color of the choice
    const computerSelect = computerPlay() 
    const computerPlayImage = document.createElement('img')
    computerPlayImage.src = `./${computerSelect}.png` 
    computerPlayImage.classList.add('chosen')
    
    function thinking(){
        //function for settimeout, gives time for the computer to 'think'
        imgToHighlight.classList.remove('chosen'); 
        computerPlayImage.classList.remove('chosen');
        computer.appendChild(computerPlayImage)
        giveRoundResult(playerSelect, computerSelect); //gives the result of the round and updates scoreboard
        
    }
    if (round < 5){
        setTimeout(thinking, 500)
    }else{
        //final score and reset button for another round
        giveRoundResult(playerSelect, computerSelect);
        scoreBoard.textContent = `The final score is ${score[0]} to ${score[1]}.`
        const finalMessage = document.createElement('h3');
        finalMessage.classList.add('.finalMessage')
        if (score[0] > score[1]){
            finalMessage.textContent = 'You Win !'
        } else if (score[0] < score[1]){
            finalMessage.textContent = 'You Lose ! You\'re sooo bad'
        } else {
            finalMessage.textContent = 'It\'s a draw ! Nice try though '
        }
        scoreBoard.appendChild(finalMessage)
        let resetbtn = document.createElement('button')
        let footer = document.querySelector('.footer')
        resetbtn.classList.add('resetbtn')
        resetbtn.textContent = 'Click me to try again !'
        resetbtn.addEventListener('click', reset)
        console.log(body.lastChild)
        const opponents = document.querySelector('.opponents')
        while (opponents.firstChild){
            opponents.removeChild(opponents.firstChild)
        }
        body.insertBefore(scoreBoard, footer)
        body.insertBefore(resetbtn, footer)
    }
    
    
}
    


function reset() {
    location.reload()
}


let scoreBoard = document.querySelector('.scoreBoard')
const body = document.querySelector('body')
const buttons = Array.from(document.querySelectorAll('button'))
buttons.forEach(btn => btn.addEventListener('click', singleRound))



    


function finalResult(score){
    if (score[0] > score[1]){
        return `You won with a score of ${score[0]} to ${score[1]}.`
    } else if (score[0] < score[1]){
        return `You lost with a score of ${score[0]} to ${score[1]}.`
    } else {
        return `It's a draw with a score of ${score[0]} to ${score[1]}.`
    }
}
