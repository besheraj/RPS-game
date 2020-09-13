// added the main variables for the game //
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// added the scores that will be displayed on the main page//
const displaycomputerScore = document.getElementById("cscore");
const displayhumanScore = document.getElementById("uscore");
const displaycurrentRoundNumber = document.getElementById("rounds");
const displaycomputerchoice = document.getElementById("computer-choice");

// user choices of input //
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors') { return userInput; } else { console.log('Error!') }
};
// generating computer choice //
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}
// decide the winner //
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The Game is a tie'
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The Computer Won!';
        } else {
            return 'You Won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The Computer Won!';
        } else {
            return 'You Won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The Computer Won!';
        } else {
            return 'You Won!'
        }
    }
};
//when game played selecting user choice then generate computer choice determine 
// the winner update the score for winner and advance by one round //
const playGame = () => {
        const userChoice = document.querySelector('input[name="choices"]:checked').value;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    const updateScore = () => {
        if (winner === 'The Computer Won!') {
            computerScore++;
        } else if (winner === 'You Won!') {
            humanScore++;
        }
    };
    const advanceRound = () => currentRoundNumber++;

    document.getElementById("result").innerHTML = '<div class="summary"> ' + determineWinner(userChoice, computerChoice) + '</div>';
    updateScore();

    displaycomputerchoice.innerText = computerChoice;
    displaycomputerScore.innerText = computerScore;
    displayhumanScore.innerText = humanScore;
    displaycurrentRoundNumber.innerText = currentRoundNumber;
    advanceRound();
};
