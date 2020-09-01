let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const displaycomputerScore = document.getElementById("cscore");
const displayhumanScore = document.getElementById("uscore");
const displaycurrentRoundNumber = document.getElementById("rounds");



const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors') { return userInput; } else { console.log('Error!') }
};
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { return 'the game is a tie' }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The Computer Won!';
        } else {
            return 'you Won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The Computer Won!';
        } else {
            return 'you Won!'
        }
    }
};



const playGame = () => {
    const userChoice = document.querySelector('input[name="choices"]:checked').value;
    // const userChoice = document.getElementById("choices").value;

    const computerChoice = getComputerChoice();

    const winner = determineWinner(userChoice, computerChoice);

    const updateScore = () => {
        if (winner === 'The Computer Won!') {
            humanScore++;
        } else if (winner === 'you Won!') {
            computerScore++;
        }
    };
    const advanceRound = () => currentRoundNumber++;
    
    document.getElementById("result").innerHTML = '<div class="results">You Threw: ' + userChoice + '<br>' + 'The computer Threw: ' + computerChoice + '<br>' + determineWinner(userChoice, computerChoice) + '</div>';
    updateScore();

    displaycomputerScore.innerText = computerScore;
    displayhumanScore.innerText = humanScore;
    displaycurrentRoundNumber.innerText = currentRoundNumber;
    advanceRound();


};







